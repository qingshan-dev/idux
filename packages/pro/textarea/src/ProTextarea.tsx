/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import {
  type Ref,
  computed,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  onMounted,
  provide,
  ref,
  toRef,
  watch,
} from 'vue'

import { callEmit } from '@idux/cdk/utils'
import { IxIcon } from '@idux/components/icon'
import { ɵUseInput } from '@idux/components/input'
import { ɵUseAutoRows } from '@idux/components/textarea'
import { type ProTextareaConfig, useGlobalConfig } from '@idux/pro/config'

import IndexColumn from './IndexColumn'
import { useErrorLines } from './composables/useErrorLines'
import { useRowCounts } from './composables/useRowsCounts'
import Content from './content/Content'
import { proTextareaContext } from './token'
import { ProTextareaProps, proTextareaProps } from './types'

export default defineComponent({
  name: 'IxProTextarea',
  props: proTextareaProps,
  setup(props, { slots, expose }) {
    const common = useGlobalConfig('common')
    const config = useGlobalConfig('textarea')
    const mergedPrefixCls = computed(() => `${common.prefixCls}-textarea`)

    const {
      elementRef,
      accessor,
      isFocused,
      isComposing,
      clearable,
      clearIcon,
      clearVisible,
      handleInput,
      handleClear,
      handleCompositionStart,
      handleCompositionEnd,
      focus,
      blur,
      syncValue,
    } = ɵUseInput<HTMLTextAreaElement>(props, config)
    const valueRef = toRef(accessor, 'value')

    const { lineHeight, boxSizingData, resizeToFitContent } = ɵUseAutoRows(elementRef, ref(true))
    const rowCounts = useRowCounts(elementRef, valueRef, lineHeight, boxSizingData)
    const errorLinesContext = useErrorLines(props, lineHeight, boxSizingData)
    const dataCount = useDataCount(props, config, valueRef)

    const _handleInput = (evt: Event) => {
      if (isComposing.value) {
        resizeToFitContent()
      }

      callEmit(handleInput, evt)
    }

    onMounted(() => {
      syncValue()
      watch(() => accessor.value, resizeToFitContent, { immediate: true })
    })

    expose({ focus, blur })

    provide(proTextareaContext, {
      mergedPrefixCls,
      props,
      accessor,
      boxSizingData,
      lineHeight,
      rowCounts,
      textareaRef: elementRef,
      ...errorLinesContext,
      handleInput: _handleInput,
      handleCompositionStart,
      handleCompositionEnd,
    })

    const style = computed(() => normalizeStyle({ resize: props.resize ?? config.resize }))
    const classes = computed(() => {
      const prefixCls = mergedPrefixCls.value
      const size = props.size ?? config.size

      return normalizeClass({
        [prefixCls]: true,
        [`${prefixCls}-disabled`]: accessor.disabled,
        [`${prefixCls}-focused`]: isFocused.value,
        [`${prefixCls}-clearable`]: clearable.value,
        [`${prefixCls}-${size}`]: !!size,
      })
    })

    const handleScrollHolderMouseDown = (evt: MouseEvent) => {
      if (evt.target === elementRef.value) {
        return
      }

      if (!isFocused.value) {
        focus()
      }

      evt.preventDefault()
    }

    return () => {
      const prefixCls = mergedPrefixCls.value

      return (
        <span class={classes.value} style={style.value}>
          <div class={`${prefixCls}-index-column-bg`}></div>
          <div class={`${prefixCls}-scroll-holder`} onMousedown={handleScrollHolderMouseDown}>
            <div class={`${prefixCls}-inner`}>
              <IndexColumn />
              <Content />
            </div>
          </div>
          {clearable.value && (
            <span
              class={normalizeClass([`${prefixCls}-clear`, clearVisible.value ? 'visible' : ''])}
              onClick={handleClear}
            >
              {slots.clearIcon ? slots.clearIcon() : <IxIcon name={clearIcon.value}></IxIcon>}
            </span>
          )}
          {dataCount.value && <span class={`${prefixCls}-count`}>{dataCount.value}</span>}
        </span>
      )
    }
  },
})

function useDataCount(props: ProTextareaProps, config: ProTextareaConfig, valueRef: Ref<string | undefined>) {
  return computed(() => {
    const showCount = props.showCount ?? config.showCount
    const computeCount = props.computeCount ?? config.computeCount
    const maxCount = props.maxCount ?? config.maxCount

    let dataCount = ''
    if (showCount) {
      const value = valueRef.value ?? ''
      dataCount = `${value.length}`
      if (computeCount) {
        dataCount = computeCount(value)
      } else if (maxCount) {
        dataCount += ' / ' + maxCount
      }
    }
    return dataCount
  })
}
