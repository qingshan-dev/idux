/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComputedRef, Ref, WatchCallback, WatchOptions, WatchStopHandle } from 'vue'
import type {
  AsyncValidatorFn,
  ErrorMessages,
  ValidationErrors,
  TriggerType,
  ValidationError,
  ValidatorFn,
  ValidatorOptions,
  ValidationStatus,
} from '../types'
import type { ArrayElement, GroupControls } from './types'

import { computed, shallowReadonly, shallowRef, ref, watch } from 'vue'
import { hasOwnProperty, isArray, isNil, isObject } from '@idux/cdk/utils'
import { Validators } from '../validators'
import { isFormArray, isFormGroup } from '../typeof'

export abstract class AbstractControl<T = any> {
  /**
   * The ref value for the control.
   */
  readonly valueRef!: Readonly<Ref<T>>

  /**
   * The validation status of the control, there are three possible validation status values:
   * * **valid**: This control has passed all validation checks.
   * * **invalid**: This control has failed at least one validation check.
   * * **validating**: This control is in the midst of conducting a validation check.
   */
  readonly status!: Readonly<Ref<ValidationStatus>>

  /**
   * An object containing any errors generated by failing validation, or null if there are no errors.
   */
  readonly errors!: Readonly<Ref<ValidationErrors | null>>

  /**
   * A control is valid when its `status` is `valid`.
   */
  readonly valid!: ComputedRef<boolean>

  /**
   * A control is invalid when its `status` is `invalid`.
   */
  readonly invalid!: ComputedRef<boolean>

  /**
   * A control is validating when its `status` is `validating`.
   */
  readonly validating!: ComputedRef<boolean>

  /**
   * A control is marked `blurred` once the user has triggered a `blur` event on it.
   */
  readonly blurred!: ComputedRef<boolean>

  /**
   * A control is `unblurred` if the user has not yet triggered a `blur` event on it.
   */
  readonly unblurred!: ComputedRef<boolean>

  /**
   * A control is `dirty` if the user has changed the value in the UI.
   */
  readonly dirty!: ComputedRef<boolean>

  /**
   * A control is `pristine` if the user has not yet changed the value in the UI.
   */
  readonly pristine!: ComputedRef<boolean>

  /**
   * A collection of child controls.
   */
  readonly controls: GroupControls<T> | AbstractControl<ArrayElement<T>>[] | null = null

  /**
   * The parent control.
   */
  get parent(): AbstractControl<T> | null {
    return this._parent
  }

  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root(): AbstractControl<T> {
    let root = this as AbstractControl<T>

    while (root.parent) {
      root = root.parent
    }

    return root
  }

  /**
   * Reports the trigger validate of the `AbstractControl`.
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get trigger(): TriggerType {
    return this._trigger ?? this._parent?.trigger ?? 'change'
  }

  protected _valueRef!: Ref<T>
  protected _status!: Ref<ValidationStatus>
  protected _errors!: Ref<ValidationErrors | null>
  protected _blurred = ref(false)
  protected _dirty = ref(false)

  private _validators: ValidatorFn | null = null
  private _asyncValidators: AsyncValidatorFn | null = null
  private _parent: AbstractControl<T> | null = null
  private _trigger?: TriggerType

  constructor(
    validatorOrOptions?: ValidatorFn | ValidatorFn[] | ValidatorOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
  ) {
    this._convertOptions(validatorOrOptions, asyncValidator)
  }

  /**
   * Resets the control, marking it `unblurred`, and setting the value to initialization value.
   */
  abstract reset(): void

  /**
   * Sets a new value for the control.
   */
  abstract setValue(value: Partial<T>, options?: { dirty?: boolean }): void

  /**
   * The aggregate value of the control.
   */
  abstract getValue(): T

  /**
   * Marks the control as `blurred`.
   */
  abstract markAsBlurred(): void

  /**
   * Marks the control as `unblurred`.
   */
  abstract markAsUnblurred(): void

  /**
   * Marks the control as `dirty`.
   */
  abstract markAsDirty(): void

  /**
   * Marks the control as `pristine`.
   */
  abstract markAsPristine(): void

  /**
   * Running validations manually, rather than automatically.
   */
  abstract validate(): Promise<ValidationErrors | null>

  /**
   * Sets the new sync validator for the form control, it overwrites existing sync validators.
   * If you want to clear all sync validators, you can pass in a null.
   */
  setValidator(newValidator: ValidatorFn | ValidatorFn[] | null): void {
    this._validators = toValidator(newValidator)
  }

  /**
   * Sets the new async validator for the form control, it overwrites existing async validators.
   * If you want to clear all async validators, you can pass in a null.
   */
  setAsyncValidator(newAsyncValidator: AsyncValidatorFn | AsyncValidatorFn[] | null): void {
    this._asyncValidators = toAsyncValidator(newAsyncValidator)
  }

  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control.
   */
  get(path: Array<string | number> | string): AbstractControl<T> | null {
    if (isNil(path)) {
      return null
    }
    if (!isArray(path)) {
      path = path.split('.')
    }
    if (path.length === 0) {
      return null
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let controlToFind: AbstractControl | null = this
    // Not using Array.reduce here due to a Chrome 80 bug
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
    path.forEach((name: string | number) => {
      if (isFormGroup(controlToFind)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        controlToFind = hasOwnProperty(controlToFind.controls, name as string) ? controlToFind.controls[name]! : null
      } else if (isFormArray(controlToFind)) {
        controlToFind = controlToFind.at(<number>name) || null
      } else {
        controlToFind = null
      }
    })
    return controlToFind
  }

  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   */
  setErrors(errors: ValidationErrors | null): void {
    this._errors.value = errors
  }

  /**
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   */
  getError(errorCode: keyof ErrorMessages, path?: Array<string | number> | string): ValidationError | null {
    const control = path ? this.get(path) : this
    return control?._errors?.value?.[errorCode] || null
  }

  /**
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   */
  hasError(errorCode: string, path?: Array<string | number> | string): boolean {
    return !!this.getError(errorCode, path)
  }

  /**
   * @param parent Sets the parent of the control
   */
  setParent(parent: AbstractControl<T>): void {
    this._parent = parent
  }

  /**
   * Watch the ref value for the control.
   *
   * @param cb The callback when the value changes
   * @param options Optional options of watch
   */
  watchValue(cb: WatchCallback<T, T | undefined>, options?: WatchOptions): WatchStopHandle {
    return watch(this._valueRef, cb, { ...options })
  }

  /**
   * Watch the status for the control.
   *
   * @param cb The callback when the status changes
   * @param options Optional options of watch
   */
  watchStatus(
    cb: WatchCallback<ValidationStatus, ValidationStatus | undefined>,
    options?: WatchOptions,
  ): WatchStopHandle {
    return watch(this._status, cb, options)
  }

  protected async _validate(): Promise<ValidationErrors | null> {
    let newErrors = null
    let value = null
    if (this._validators) {
      value = this.getValue()
      newErrors = this._validators(value, this)
    }
    if (isNil(newErrors) && this._asyncValidators) {
      value = this._validators ? value : this.getValue()
      this._status.value = 'validating'
      newErrors = await this._asyncValidators(value, this)
    }
    this.setErrors(newErrors)
    return newErrors
  }

  protected _initAllStatus(): void {
    ;(this as any).valueRef = shallowReadonly(this._valueRef)
    this._initErrorsAndStatus()
    ;(this as any).status = shallowReadonly(this._status)
    ;(this as any).errors = shallowReadonly(this._errors)
    ;(this as any).valid = computed(() => this._status.value === 'valid')
    ;(this as any).invalid = computed(() => this._status.value === 'invalid')
    ;(this as any).validating = computed(() => this._status.value === 'validating')
    ;(this as any).blurred = computed(() => this._blurred.value)
    ;(this as any).unblurred = computed(() => !this._blurred.value)
    ;(this as any).dirty = computed(() => this._dirty.value)
    ;(this as any).pristine = computed(() => !this._dirty.value)
  }

  private _initErrorsAndStatus() {
    let errors = null
    let value = null
    if (this._validators) {
      value = this.getValue()
      errors = this._validators(value, this)
    }

    let status: ValidationStatus = errors ? 'invalid' : 'valid'
    if (status === 'valid' && this.controls) {
      for (const key in this.controls) {
        const controlStatus = (this.controls as any)[key].status.value
        if (controlStatus === 'invalid') {
          status = 'invalid'
          break
        }
      }
    }

    this._errors = shallowRef(errors)
    this._status = shallowRef(status)
    if (status === 'valid' && this._asyncValidators) {
      value = this._validators ? value : this.getValue()
      this._status.value = 'validating'
      this._asyncValidators(value, this).then(asyncErrors => {
        this._errors.value = asyncErrors
        this._status.value = asyncErrors ? 'invalid' : 'valid'
      })
    }
  }

  private _convertOptions(
    validatorOrOptions: ValidatorFn | ValidatorFn[] | ValidatorOptions | null | undefined,
    asyncValidator: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined,
  ) {
    if (isOptions(validatorOrOptions)) {
      this._trigger = validatorOrOptions.trigger ?? this._trigger
      this._validators = toValidator(validatorOrOptions.validators)
      this._asyncValidators = toAsyncValidator(validatorOrOptions.asyncValidators)
    } else {
      this._validators = toValidator(validatorOrOptions)
      this._asyncValidators = toAsyncValidator(asyncValidator)
    }
  }
}

function isOptions(val?: ValidatorFn | ValidatorFn[] | ValidatorOptions | null): val is ValidatorOptions {
  return isObject(val) && !isArray(val)
}

function toValidator(validator?: ValidatorFn | ValidatorFn[] | null): ValidatorFn | null {
  return isArray(validator) ? Validators.compose(validator) : validator || null
}

function toAsyncValidator(asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): AsyncValidatorFn | null {
  return isArray(asyncValidator) ? Validators.composeAsync(asyncValidator) : asyncValidator || null
}
