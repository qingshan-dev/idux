---
category: docs
title: 更新日志
order: 13
---

`@idux` 遵循 [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/) 语义化版本规范, 发布周期如下：

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

## 1.5.1(2023-03-14)

### Bug Fixes

- **comp:\*:** 表单组件的 control 类型声明不正确 ([#1495](https://github.com/IDuxFE/idux/issues/1495)) ([ace2a1e](https://github.com/IDuxFE/idux/commit/ace2a1ed57c2f6a3a3f5bd41a20e393d90866d60))
- **comp:cascader:** 面板的样式异常 ([#1500](https://github.com/IDuxFE/idux/issues/1500)) ([dfb5d0b](https://github.com/IDuxFE/idux/commit/dfb5d0bd93d7af6716e79a7e5c5563357881d5d8))
- **comp:spin:** 在抽屉中开启遮罩后依旧可以点击按钮 ([#1499](https://github.com/IDuxFE/idux/issues/1499)) ([3463cea](https://github.com/IDuxFE/idux/commit/3463cea35f83485c71ab66d0b8d1c23a79ff0935))
- **pro:search:** 输入状态初始化时机不正确 ([#1496](https://github.com/IDuxFE/idux/issues/1496)) ([70f947c](https://github.com/IDuxFE/idux/commit/70f947cc455f2a8a2ab82ae90540997218d04b32))
- **pro:search:** 下拉框面板启用虚拟滚动不生效 ([#1501](https://github.com/IDuxFE/idux/issues/1501)) ([5def0ab](https://github.com/IDuxFE/idux/commit/5def0abd30af0d2772ba2df3987c3b13274d3544))

# 1.5.0(2023-03-07)

### Bug Fixes

- **comp:cascader:** searchValue 不正常工作 ([#1487](https://github.com/IDuxFE/idux/issues/1487)) ([42b408b](https://github.com/IDuxFE/idux/commit/42b408b91d81b6fff08322902b9fa514850455bc))
- **comp:modal:** 样式更新和 css variable 支持 ([#1479](https://github.com/IDuxFE/idux/issues/1479)) ([f45776d](https://github.com/IDuxFE/idux/commit/f45776d3a9e35ebd1a522d4d0c8faf97fd96be4b))
- **comp:table:** 展开的叶子节点缩进不正确，选中的数据未缓存 ([#1484](https://github.com/IDuxFE/idux/issues/1484)) ([a3d5bb7](https://github.com/IDuxFE/idux/commit/a3d5bb74c337d557f0d1a8baeb48949fe5bd02fd)), closes [#1482](https://github.com/IDuxFE/idux/issues/1482)
- **comp:textarea:** removeChild 的健壮性判断 ([#1492](https://github.com/IDuxFE/idux/issues/1492)) ([e489e8e](https://github.com/IDuxFE/idux/commit/e489e8e40770ac3eaf805a872eb796077df19520))
- **pro:search:** 输入空字符传应该验证失败 ([#1494](https://github.com/IDuxFE/idux/issues/1494)) ([168620e](https://github.com/IDuxFE/idux/commit/168620e6696a71c0f9693bdc42734e1a7e1f99d3))
- **pro:search:** name 下拉框不渲染 ([#1493](https://github.com/IDuxFE/idux/issues/1493)) ([cb4b86a](https://github.com/IDuxFE/idux/commit/cb4b86a35aabb64616fe476f8d544b7e2a1174cc))

### Features

- **cdk:forms:** formArray 支持 clearControls ([#1490](https://github.com/IDuxFE/idux/issues/1490)) ([1cd4dcc](https://github.com/IDuxFE/idux/commit/1cd4dccf36df890fac95351f4714070e18333141))
- **comp:cascader:** 新增 `IxCascaderPanel` 组件 ([#1481](https://github.com/IDuxFE/idux/issues/1481)) ([e044390](https://github.com/IDuxFE/idux/commit/e044390c26c594978c8bcc0edfb72e65edd47db3))
- **comp:desc:** 新增 Descriptions 组件 ([#1470](https://github.com/IDuxFE/idux/issues/1470)) ([a7faf13](https://github.com/IDuxFE/idux/commit/a7faf1365ef93a765e85fadfda4b06cf41600caf))
- **comp:rate:** 新增 color 配置 ([#1420](https://github.com/IDuxFE/idux/issues/1420)) ([31c29e0](https://github.com/IDuxFE/idux/commit/31c29e03975b6d1ecd1966dfbc0abd606d36e499))
- **comp:select:** 新增 loading 配置 ([#1439](https://github.com/IDuxFE/idux/issues/1439)) ([3289784](https://github.com/IDuxFE/idux/commit/328978436467bc8b7f59650c56809c7804096a1c))
- **pro:search:** 下拉框面板支持 `onSearch` ([#1444](https://github.com/IDuxFE/idux/issues/1444)) ([79a7acc](https://github.com/IDuxFE/idux/commit/79a7acc40a43bcab853e5bfefcf1a0433452597f))
- **pro:search:** 新增 `'cascader'` 面板 ([#1485](https://github.com/IDuxFE/idux/issues/1485)) ([88b751b](https://github.com/IDuxFE/idux/commit/88b751b276440d0024296c5ccd3ef62c53af6d35))
- **pro:search:** 新增 `customNameLabel` 和 `customOperatorLabel` ([#1491](https://github.com/IDuxFE/idux/issues/1491)) ([1be87e8](https://github.com/IDuxFE/idux/commit/1be87e8cab9a926527efa433baeb4c1e99d27840))
- **pro:table:** 布局设置面板支持隐藏修改大小，重置等功能 ([#1488](https://github.com/IDuxFE/idux/issues/1488)) ([950f1b1](https://github.com/IDuxFE/idux/commit/950f1b1eb40b70e66e90989ac81da1fa3ffc8ed9))

## 1.4.3(2023-02-27)

### Bug Fixes

- **comp:alert:** 图标应该总是顶部对齐 ([#1467](https://github.com/IDuxFE/idux/issues/1467)) ([c71ee04](https://github.com/IDuxFE/idux/commit/c71ee046f74d602967a4699c7c53a0971302414d))
- **comp:icon:** 图标资源更新 ([#1468](https://github.com/IDuxFE/idux/issues/1468)) ([78918ae](https://github.com/IDuxFE/idux/commit/78918ae3a4866827eb1ed07235e19b5b49d074e2))
- **comp:rate:** control 不生效 ([#1471](https://github.com/IDuxFE/idux/issues/1471)) ([0b2dfa1](https://github.com/IDuxFE/idux/commit/0b2dfa11c6b0a27f509b8ce8d56402c6e15a90ab))
- **comp:slider:** 禁用状态下的标记颜色不正确 ([#1457](https://github.com/IDuxFE/idux/issues/1457)) ([d215935](https://github.com/IDuxFE/idux/commit/d2159356f6ff0a144ae42d16eb05aad6fea5399b))
- **comp:spin:** 遮罩层的透明度不正确 ([#1464](https://github.com/IDuxFE/idux/issues/1464)) ([f88ad9a](https://github.com/IDuxFE/idux/commit/f88ad9a86e86479a36d863ed48cb9ffb6eecc7f5))
- **comp:stepper:** 步骤条的连线 dashed 不起作用 ([#1458](https://github.com/IDuxFE/idux/issues/1458)) ([c688624](https://github.com/IDuxFE/idux/commit/c688624953502cf9dfce61cc08c6be1cf3ba92f4))
- **comp:table:** 在 chrome83 的虚拟滚动+固定列异常 ([#1473](https://github.com/IDuxFE/idux/issues/1473)) ([4523705](https://github.com/IDuxFE/idux/commit/452370565c4b099d53e2e186e64d0ecd285f564f))
- **comp:transfer:** 分页器的快速跳转不生效，后缀图标样式问题 ([#1459](https://github.com/IDuxFE/idux/issues/1459)) ([499ae90](https://github.com/IDuxFE/idux/commit/499ae902879597a53de0005f148aa9426a7c2287))
- **pro:search:** 浮层面板的 offset ([#1463](https://github.com/IDuxFE/idux/issues/1463)) ([2da284d](https://github.com/IDuxFE/idux/commit/2da284de936a4d427691a31569ec8902b7d80549))
- **pro:search:** multiple 时验证异常 ([#1475](https://github.com/IDuxFE/idux/issues/1475)) ([b961c4e](https://github.com/IDuxFE/idux/commit/b961c4e5769647323085d31a9b3f73ce12bb67a0))
- **pro:search:** 面板的键盘事件应该只在面板打开时触发 ([#1477](https://github.com/IDuxFE/idux/issues/1477)) ([76a1bac](https://github.com/IDuxFE/idux/commit/76a1bacdadcc909584b22366f62be50ae7f42ba8))
- **pro:tree:** padding 样式异常 ([#1466](https://github.com/IDuxFE/idux/issues/1466)) ([ec8c61d](https://github.com/IDuxFE/idux/commit/ec8c61dce3cc554c77d6016d5ce69ab5ab085e3b))

## 1.4.2(2023-02-20)

### Bug Fixes

- **comp:carousel:** 当动态减少 item 的数量为 1 时，展示异常 ([#1450](https://github.com/IDuxFE/idux/issues/1450)) ([2e37c44](https://github.com/IDuxFE/idux/commit/2e37c447a9672c35c25fe448250d0fbcc01646d0))
- **comp:carousel:** 缩放后的展示异常 ([#1448](https://github.com/IDuxFE/idux/issues/1448)) ([58ee991](https://github.com/IDuxFE/idux/commit/58ee991568e5b397fac95baa70bbc98866290c78))
- **comp:empty:** 解决 svg 的 id 冲突问题 ([#1451](https://github.com/IDuxFE/idux/issues/1451)) ([8ca7a08](https://github.com/IDuxFE/idux/commit/8ca7a08b86b8cc185f936da2afcb0b191f672894))
- **comp:upload:** 文本不居中 ([#1461](https://github.com/IDuxFE/idux/issues/1461)) ([afeb80e](https://github.com/IDuxFE/idux/commit/afeb80e942a4fb9f399a75d601897ef7e8e5293a))
- Select 和 ProTable 的样式问题 ([#1452](https://github.com/IDuxFE/idux/issues/1452)) ([c07ef31](https://github.com/IDuxFE/idux/commit/c07ef312795834867d658703842a02244456328a))
- **pro:search:** `treeSelect` 的高度异常 ([#1445](https://github.com/IDuxFE/idux/issues/1445)) ([388da6a](https://github.com/IDuxFE/idux/commit/388da6a6b1f2d5eeac354eeedabe4c81bf89f976))
- **pro:search:** 移除浮层面板的动画效果 ([#1447](https://github.com/IDuxFE/idux/issues/1447)) ([4c28a78](https://github.com/IDuxFE/idux/commit/4c28a78c83a1f820b8976956549c27390316135e))

## 1.4.1(2023-02-13)

### Bug Fixes

- **comp:\*:** 使用更智能的淡入淡出的动画 ([#1422](https://github.com/IDuxFE/idux/issues/1422)) ([33fb35f](https://github.com/IDuxFE/idux/commit/33fb35ff3e420c723bd6bf56d0b4149bf7f388b5))
- **comp:card:** 移除底部的 padding 以及按钮点击效果 ([#1418](https://github.com/IDuxFE/idux/issues/1418)) ([0612164](https://github.com/IDuxFE/idux/commit/0612164270e4837bf502df6951c42643475ebbfd))
- **comp:select:** blur 事件导致 item 渲染不正确 ([#1437](https://github.com/IDuxFE/idux/issues/1437)) ([b15fedd](https://github.com/IDuxFE/idux/commit/b15fedd291622e3faa25c2430e9ce690f4202521)), closes [#1431](https://github.com/IDuxFE/idux/issues/1431)
- **comp:select:** 在回车事件后触发 blur ([#1441](https://github.com/IDuxFE/idux/issues/1441)) ([391c526](https://github.com/IDuxFE/idux/commit/391c526d4fa9c12af33eaf3c89e1699f52bd16f5))
- **comp:table:** onScroll 未生效 ([#1428](https://github.com/IDuxFE/idux/issues/1428)) ([79136b5](https://github.com/IDuxFE/idux/commit/79136b5813c3ed14c13ab82062e79cca751ebebe))
- **comp:table:** 分页器的大小不能够自定义覆盖 ([#1440](https://github.com/IDuxFE/idux/issues/1440)) ([b647883](https://github.com/IDuxFE/idux/commit/b64788390a513f5d77e3bd6a4896abeb72e3017d))
- **comp:transfer:** 全选的状态错误 ([#1442](https://github.com/IDuxFE/idux/issues/1442)) ([ff3bcf9](https://github.com/IDuxFE/idux/commit/ff3bcf9def843043769d27c06200e6df0138f03d))
- **pro:search:** 面板为空时，渲染异常 ([#1424](https://github.com/IDuxFE/idux/issues/1424)) ([7829ca1](https://github.com/IDuxFE/idux/commit/7829ca1389d7b42cb04dc4da872ff2dcdba62cc4))
- **pro:transfer:** `children` 策略下数量计算错误 ([#1443](https://github.com/IDuxFE/idux/issues/1443)) ([e0f9597](https://github.com/IDuxFE/idux/commit/e0f9597364e823bc9b4927ea9472bd3891e1a207))
- **pro:tree:** 全展开的状态异常 ([#1429](https://github.com/IDuxFE/idux/issues/1429)) ([2d2d7ca](https://github.com/IDuxFE/idux/commit/2d2d7ca1a6c8b4a64f5c8e42f6e1f83ff4d01a7e))

# 1.4.0(2023-01-16)

### Bug Fixes

- **comp:badge:** 支持非数字的字符 ([#1399](https://github.com/IDuxFE/idux/issues/1399)) ([5400b29](https://github.com/IDuxFE/idux/commit/5400b29de42776e6078752f4495f3fc3d8401dba))
- **comp:tree:** `onCheck` 的回调参数不正确 ([#1404](https://github.com/IDuxFE/idux/issues/1404)) ([2858da6](https://github.com/IDuxFE/idux/commit/2858da62cf218a4397d4266fe853866a638b6a3d))
- **comp:tree:** 被选中的节点样式不正确 ([#1416](https://github.com/IDuxFE/idux/issues/1416)) ([b112049](https://github.com/IDuxFE/idux/commit/b1120491a71f5f68f6c6332c9f0f58156106354a))
- **comp:tree:** showLine 时没有对齐 ([#1393](https://github.com/IDuxFE/idux/issues/1393)) ([0dd030d](https://github.com/IDuxFE/idux/commit/0dd030de66cf84a7d3a3e0f043ced4bdde2b17d1))
- **pro:table:** resize 后宽度计算问题 ([#1417](https://github.com/IDuxFE/idux/issues/1417)) ([d7ef42c](https://github.com/IDuxFE/idux/commit/d7ef42cca7b2ca6611cd352b1f68592f1fa0b421))
- **pro:transfer:** 优化 tree 展开节点的逻辑 ([#1414](https://github.com/IDuxFE/idux/issues/1414)) ([fec5fee](https://github.com/IDuxFE/idux/commit/fec5fee6146cd9412abdcb4bd4a8a6b42c78bf58))
- **pro:transfer:** 覆盖树节点被选中的样式 ([#1407](https://github.com/IDuxFE/idux/issues/1407)) ([477ac44](https://github.com/IDuxFE/idux/commit/477ac44f11036d33bfc487c51b44d54e765139ed))
- **pro:tree:** 空状态的图标没有居中 ([#1394](https://github.com/IDuxFE/idux/issues/1394)) ([2c58ca2](https://github.com/IDuxFE/idux/commit/2c58ca23132609febd9b985b9eb912fd52105c52))

### Features

- **cdk:forms:** `ValidatorOptions` 的 `disabled` 支持函数形式 ([#1395](https://github.com/IDuxFE/idux/issues/1395)) ([d633174](https://github.com/IDuxFE/idux/commit/d633174afbf32d05a6d42c793ded4cb3eeeb952c))
- **cdk:forms:** `setMessages` 新增第二个参数用于支持 `i18n` ([#1398](https://github.com/IDuxFE/idux/issues/1398)) ([0a8b116](https://github.com/IDuxFE/idux/commit/0a8b116c432617701108d0dfe2322efccf7d0ac7))
- **cdk:utils, pro:search:** 新增 tree 相关工具函数, 高级搜索支持 `'treeSelect'` ([#1391](https://github.com/IDuxFE/idux/issues/1391)) ([4bf719d](https://github.com/IDuxFE/idux/commit/4bf719ddcea66b12500d2df891c09ba0af8621f1))
- **cdk:utils:** 新增 tree 相关工具函数，修复过滤和分页的问题 ([#1406](https://github.com/IDuxFE/idux/issues/1406)) ([56035c1](https://github.com/IDuxFE/idux/commit/56035c131cacbdf32c3eee3387f266768a85124b))
- **comp:badge:** 新增 processing 配置 ([#1400](https://github.com/IDuxFE/idux/issues/1400)) ([ba15f33](https://github.com/IDuxFE/idux/commit/ba15f33eaa0393ef466cdef0c0327703f728ad21))
- **comp:badge:** 新增 status 配置, 支持 css variable ([#1390](https://github.com/IDuxFE/idux/issues/1390)) ([da3905e](https://github.com/IDuxFE/idux/commit/da3905e626e5f8f14d11f9330aa2ac7eb73b874b))
- **comp:cascader:** 新增 disableData 用于支持动态禁用选项 ([#1408](https://github.com/IDuxFE/idux/issues/1408)) ([65328e7](https://github.com/IDuxFE/idux/commit/65328e7ee5b6e0794a856741f7b66b8817f6c7b3))
- **comp:stepper:** 新增 dot 配置 ([#1401](https://github.com/IDuxFE/idux/issues/1401)) ([aa90a7e](https://github.com/IDuxFE/idux/commit/aa90a7e55c809e8b8e1fdc98836bcc7029fcaff7)), closes [#1082](https://github.com/IDuxFE/idux/issues/1082)

## 1.3.3(2023-01-09)

### Bug Fixes

- **comp:cascader:** 选中和展开状态展示不正确 ([#1386](https://github.com/IDuxFE/idux/issues/1386)) ([847f139](https://github.com/IDuxFE/idux/commit/847f1394ea970eb3b91ee095ea30aa75c2760610))
- **comp:header:** 移除背景颜色 ([#1392](https://github.com/IDuxFE/idux/issues/1392)) ([55bb758](https://github.com/IDuxFE/idux/commit/55bb75847ea1ca7d6e3372d3b2c71315c086c66c))
- **comp:input-number:** 增加和减少的按钮默认不显示 ([#1385](https://github.com/IDuxFE/idux/issues/1385)) ([b77fac6](https://github.com/IDuxFE/idux/commit/b77fac60833d6ca544812d74417d5a604075de36))
- **comp:select:** 输入了一个值后，就无法选择其他的值 ([#1387](https://github.com/IDuxFE/idux/issues/1387)) ([59fc80e](https://github.com/IDuxFE/idux/commit/59fc80e5a8439fc34d61ea104f1f53dcce9a701e))
- **pro:search:** 浮层的 zIndex 计算错误 ([#1389](https://github.com/IDuxFE/idux/issues/1389)) ([81ff47e](https://github.com/IDuxFE/idux/commit/81ff47e9ac9a2afceb4ac8726f6f2618a6933377))
- **pro:transfer:** 树穿梭框的 'off' 级联策略下展示错误 ([#1388](https://github.com/IDuxFE/idux/issues/1388)) ([796bfaf](https://github.com/IDuxFE/idux/commit/796bfaf6ce627d564a8db9e7675b9879342e4e5f))

## 1.3.2(2023-01-03)

### Bug Fixes

- **comp:alert:** 样式更新 ([#1377](https://github.com/IDuxFE/idux/issues/1377)) ([30d1ab3](https://github.com/IDuxFE/idux/commit/30d1ab381b4eb833e12137d6d85d9a230ca411f1))
- **comp:anchor:** 样式更新，支持 css variable ([#1379](https://github.com/IDuxFE/idux/issues/1379)) ([3a106d9](https://github.com/IDuxFE/idux/commit/3a106d952b6ec3217d7f95655f2406457383b873))
- **comp:anchor:** 样式更新，支持 css variable ([#1380](https://github.com/IDuxFE/idux/issues/1380)) ([f83ccc8](https://github.com/IDuxFE/idux/commit/f83ccc80a8aeb5ddc1efb0d27582dfcfd22df919))
- **comp:back-top:**  样式更新，支持 css variable ([#1381](https://github.com/IDuxFE/idux/issues/1381)) ([cb97fd0](https://github.com/IDuxFE/idux/commit/cb97fd0905c544e5d43eb62d0ea9bb49eaa4db16))
- **comp:overlay:** 快速切换显隐导致定位异常 ([#1384](https://github.com/IDuxFE/idux/issues/1384)) ([5d13977](https://github.com/IDuxFE/idux/commit/5d139778a494b36feeece08b0c5c27f68bd66a37))
- **comp:progress:** 带小数点时展示异常 ([#1382](https://github.com/IDuxFE/idux/issues/1382)) ([e474fa5](https://github.com/IDuxFE/idux/commit/e474fa534ea9dc147a544b6f641b55803cc950b6))
- **comp:table:** 单选并支持点击选中时，无法反选 ([#1383](https://github.com/IDuxFE/idux/issues/1383)) ([1300c13](https://github.com/IDuxFE/idux/commit/1300c134d11132455f5e259b98fc5bf9f7d17aa4))
- **comp:table:** 当 columns 为动态加载时，排序和过滤功能异常 ([#1376](https://github.com/IDuxFE/idux/issues/1376)) ([9163d69](https://github.com/IDuxFE/idux/commit/9163d69bac526f1aa7dae86e769f830e3e01acd9))
- **pro:table:** 部分 props 没有被正确的穿透 ([#1378](https://github.com/IDuxFE/idux/issues/1378)) ([edb23d4](https://github.com/IDuxFE/idux/commit/edb23d42b9d2479fa10b17f201e0a87c45c4cd7e))

## 1.3.1(2022-12-23)

### Bug Fixes

- **build:** 使用 webpack 的项目在 js 文件中引入样式文件失败 ([#1369](https://github.com/IDuxFE/idux/issues/1369)) ([c2288d5](https://github.com/IDuxFE/idux/commit/c2288d5f6840ca3c2b463e78add9a0efbf5f178d))
- **comp:modal:** 在动画结束前销毁组件会得到一个错误 ([#1371](https://github.com/IDuxFE/idux/issues/1371)) ([de416c1](https://github.com/IDuxFE/idux/commit/de416c10416ef4577f1fc09c108b61000e078e3e))
- **comp:table:** 序号计算错误 ([#1370](https://github.com/IDuxFE/idux/issues/1370)) ([f19efbe](https://github.com/IDuxFE/idux/commit/f19efbe0e6a893e1211e1df97893094f68fb2c25))
- **comp:textarea:** lin-height 计算错误 ([#1372](https://github.com/IDuxFE/idux/issues/1372)) ([627e018](https://github.com/IDuxFE/idux/commit/627e01800c24cc96891920e89c9a8af077691449))
- **comp:time-picker:** range-picker 的值为数组时不应该显示清除图标 ([#1365](https://github.com/IDuxFE/idux/issues/1365)) ([e6800a7](https://github.com/IDuxFE/idux/commit/e6800a74abb6c64c7c76de1564711c9c6be0b12b))
- **comp:tree:** 禁用不应该影响半选状态 ([#1373](https://github.com/IDuxFE/idux/issues/1373)) ([0607e5c](https://github.com/IDuxFE/idux/commit/0607e5cf958f561f9dbd3a1d5199f143e4127d71))
- **pro:search:** 搜索项在非 focus 状态时遮挡了页面内容 ([#1374](https://github.com/IDuxFE/idux/issues/1374)) ([bda0db2](https://github.com/IDuxFE/idux/commit/bda0db24475d123cb0a2cd7531f6c9235087802b))
- **pro:search:** 点击搜索项没有触发 focus ([#1368](https://github.com/IDuxFE/idux/issues/1368)) ([14637be](https://github.com/IDuxFE/idux/commit/14637be0880c72674d31363d97e367e326143c6a))

# 1.3.0(2022-12-16)

### Bug Fixes

- **cdk:breakpoint:** query 异常销毁 ([#1357](https://github.com/IDuxFE/idux/issues/1357)) ([2b45f6b](https://github.com/IDuxFE/idux/commit/2b45f6b6c6fdf3cc3febd41861c766c6fc705816))
- **cdk:popper:** 升级 @floating-ui 解决缩放后的定位问题 ([#1362](https://github.com/IDuxFE/idux/issues/1362)) ([8aeb214](https://github.com/IDuxFE/idux/commit/8aeb2149ff2d81c5d5ab1a9fec763d1efa156fd6))
- **comp:\*:** 打开1次浮层组件触发了两次 zIndex 的变更 ([#1355](https://github.com/IDuxFE/idux/issues/1355)) ([7cec4ec](https://github.com/IDuxFE/idux/commit/7cec4ec5d9c882d9fae54cba221efda34ba3bc93))
- **comp:\*:** 禁用的字体颜色降低等级 ([#1358](https://github.com/IDuxFE/idux/issues/1358)) ([49c8743](https://github.com/IDuxFE/idux/commit/49c874344710d8edbe43c48c010d2b97f4b0bb3b))
- **comp:button:** display 设置为 inline-block，移除 focus 样式 ([#1354](https://github.com/IDuxFE/idux/issues/1354)) ([107c03e](https://github.com/IDuxFE/idux/commit/107c03e20c2db96f0bd7fecd6da8a9eee084dcf5))
- **comp:cascader:** 切换数据后，滚动条应该置顶 ([#1353](https://github.com/IDuxFE/idux/issues/1353)) ([031834e](https://github.com/IDuxFE/idux/commit/031834e6d9b948b4a065a8a56bdf4afc1c2145a3)), closes [#1316](https://github.com/IDuxFE/idux/issues/1316)
- **comp:input:** 优化禁用时的动画 ([#1352](https://github.com/IDuxFE/idux/issues/1352)) ([9950e6f](https://github.com/IDuxFE/idux/commit/9950e6f966aa8964ba6283a75b1505da22bc87cd))
- **pro:search:** zIndex 在 focus 后触发变更 ([#1356](https://github.com/IDuxFE/idux/issues/1356)) ([61a51fd](https://github.com/IDuxFE/idux/commit/61a51fd62c9ab74601261ac82be692ee782ceb4f))
- **scripts:** 移除 min.css ([#1359](https://github.com/IDuxFE/idux/issues/1359)) ([20f04f4](https://github.com/IDuxFE/idux/commit/20f04f45dbb0927ce0314ff731bb7ac4c0e9b9db))

### Features

- **comp:button,checkbox,radio:** 添加 wave 动画效果 ([#1303](https://github.com/IDuxFE/idux/issues/1303)) ([4881414](https://github.com/IDuxFE/idux/commit/4881414bf48fee70cc13f0038e8487b5390a92d3))
- **comp:table:** 勾选列支持显示序号 ([#1360](https://github.com/IDuxFE/idux/issues/1360)) ([19e6f68](https://github.com/IDuxFE/idux/commit/19e6f685cda0c1900fa624a09349e95593c32d3b))
- **comp:tabs:** 支持 size 的配置, 默认为 md ([#1361](https://github.com/IDuxFE/idux/issues/1361)) ([41eb8d9](https://github.com/IDuxFE/idux/commit/41eb8d92af463c0e36a2bba0c631cd9acf5e45fe))
- **pro:search:** 搜索图标点击会触发搜索值修改 ([#1321](https://github.com/IDuxFE/idux/issues/1321)) ([e44673f](https://github.com/IDuxFE/idux/commit/e44673f5320a76d9daca61f887a44e377d206815))
- **pro:search:** 支持占位符 ([#1322](https://github.com/IDuxFE/idux/issues/1322)) ([84d0e66](https://github.com/IDuxFE/idux/commit/84d0e662024bd9f763a9f5debd65e90d52238c4b))
- **pro:table:** 支持在布局菜单中不显示列 ([#1364](https://github.com/IDuxFE/idux/issues/1364)) ([2e7533c](https://github.com/IDuxFE/idux/commit/2e7533cfebbbb12bd682b4805fb600d3a438607e))

## 1.2.4(2022-12-10)

### Bug Fixes

- **comp:\*:** 部分组件的字体大小在 seer 主题下不正确 ([#1343](https://github.com/IDuxFE/idux/issues/1343)) ([5c74fcf](https://github.com/IDuxFE/idux/commit/5c74fcf6964bd7d76e5d35f5bf84ca52b0f21fae))
- **comp:carousel:** 当只有2个子面板的时候，切换白屏 ([#1346](https://github.com/IDuxFE/idux/issues/1346)) ([6a5f46b](https://github.com/IDuxFE/idux/commit/6a5f46b3af56efe3c74434845708843483e13557))
- **comp:checkbox:** 禁用样式异常 ([#1344](https://github.com/IDuxFE/idux/issues/1344)) ([55b0be8](https://github.com/IDuxFE/idux/commit/55b0be849a43cf06c6dd98f4086ae0db37728ecf))
- **comp:date-picker,comp:time-picker:** 打开 picker 时不应该滚动窗口 ([#1342](https://github.com/IDuxFE/idux/issues/1342)) ([cce0c0e](https://github.com/IDuxFE/idux/commit/cce0c0e81b67722f797f73db52632974ad7822b9))
- **comp:empty:** 补充图标的样式 ([#1349](https://github.com/IDuxFE/idux/issues/1349)) ([69ec9f9](https://github.com/IDuxFE/idux/commit/69ec9f944ea3569b6a85c0bcb9eb278f2fad084e))
- **comp:progress:** trailColor 不工作 ([#1347](https://github.com/IDuxFE/idux/issues/1347)) ([f448714](https://github.com/IDuxFE/idux/commit/f448714ab19d8c2e5ddb170ed4dec5f9a8526054))
- **comp:upload:** customRequest 允许可选和 async ([#1340](https://github.com/IDuxFE/idux/issues/1340)) ([52250a5](https://github.com/IDuxFE/idux/commit/52250a55225b8d36df904e3211d463fb67d23308))
- **pro:layout:** 没有设置 logo 时,依旧渲染了 dom ([#1348](https://github.com/IDuxFE/idux/issues/1348)) ([375c691](https://github.com/IDuxFE/idux/commit/375c69132dcd06a46cdbf449aac8760d2e25eab5))

## 1.2.3(2022-12-07)

### Bug Fixes

- **cdk:popper:** 有箭头的时候 shift middleware 失效  ([#1337](https://github.com/IDuxFE/idux/issues/1337)) ([3f7afbd](https://github.com/IDuxFE/idux/commit/3f7afbdb8a8562887dddaf1c73272033ae5901a2))
- **comp:\*:** overlayContainer 新增回调参数 ([#1336](https://github.com/IDuxFE/idux/issues/1336)) ([70e0d34](https://github.com/IDuxFE/idux/commit/70e0d34fd38c9dc1179b9bdb9d93f2e480a48b0a))
- **comp:\*:** 通过 getter 去管理 overlayZIndex ([#1341](https://github.com/IDuxFE/idux/issues/1341)) ([ad3445d](https://github.com/IDuxFE/idux/commit/ad3445d6968678f4223cc073e2e9be3dc9e536ba))
- **comp:header:** 移除默认的 padding ([#1330](https://github.com/IDuxFE/idux/issues/1330)) ([236f691](https://github.com/IDuxFE/idux/commit/236f6916a5e40815b3c55f09b45d759e5409f465))
- **comp:table:** selectable 的 align 没有正常工作 ([#1339](https://github.com/IDuxFE/idux/issues/1339)) ([be9e814](https://github.com/IDuxFE/idux/commit/be9e814e4c6d66900bd61a5fef967b147bdd7440))
- **pro:layout:** 样式更新，移除无用的代码 ([#1335](https://github.com/IDuxFE/idux/issues/1335)) ([a4ba26a](https://github.com/IDuxFE/idux/commit/a4ba26a5cacf5f4c73f36e66406e6a9a07f37ad8))
- **pro:search:** 聚焦状态时，溢出的标签没有展示 ([#1331](https://github.com/IDuxFE/idux/issues/1331)) ([05478ab](https://github.com/IDuxFE/idux/commit/05478abaee913334409dd0933a2e35487c7ff060))
- **pro:table:** resizable 不工作 ([#1334](https://github.com/IDuxFE/idux/issues/1334)) ([b3a568d](https://github.com/IDuxFE/idux/commit/b3a568d6b82557846756b456f57d64d14c1a41ff))
- **pro:tree:** 没有配置 header 时 expandIcon 样式异常 ([#1332](https://github.com/IDuxFE/idux/issues/1332)) ([bf03db5](https://github.com/IDuxFE/idux/commit/bf03db58c1abc38653f17e76de2809bd456095ae))

## 1.2.2(2022-12-02)

### Bug Fixes

- **cdk:popper:** 使用 shift middleware 让浮层始终保持在视图之中 ([#1329](https://github.com/IDuxFE/idux/issues/1329)) ([8152be1](https://github.com/IDuxFE/idux/commit/8152be184b1796c00a8ab5cbe41e2aacc77d5a91))
- **comp:\*:** 受控模式的浮层组件无法正常初始化 ([#1320](https://github.com/IDuxFE/idux/issues/1320)) ([a93231d](https://github.com/IDuxFE/idux/commit/a93231de5f937135f548535089d7da77d94f0a55))
- **comp:tooltip,popover,popconfirm:** 样式更新，支持 css variable ([#1323](https://github.com/IDuxFE/idux/issues/1323)) ([3c305a7](https://github.com/IDuxFE/idux/commit/3c305a73e9717a09e32d0408554fd83713bd5010))
- **dropdown,header,tree-select:** 样式更新 ([#1319](https://github.com/IDuxFE/idux/issues/1319)) ([145865c](https://github.com/IDuxFE/idux/commit/145865c64034515af1e86f63fd9c939fd30f0126))
- **pro:table:** 列的 visible 改变时没有触发 onColumnsChange ([#1327](https://github.com/IDuxFE/idux/issues/1327)) ([d0fb7fd](https://github.com/IDuxFE/idux/commit/d0fb7fd6f4729ab64a9e1286a22990d125f6a181))
- **pro:table:** 拖拽结束时会触发排序 ([#1324](https://github.com/IDuxFE/idux/issues/1324)) ([57c5a7f](https://github.com/IDuxFE/idux/commit/57c5a7fa14aae9bbc50c4fecb2d115f38888ef8c))

## 1.2.1(2022-12-01)

### Bug Fixes

- **comp:cascader:** set expandedKeys with default value ([#1315](https://github.com/IDuxFE/idux/issues/1315)) ([1d8aa5f](https://github.com/IDuxFE/idux/commit/1d8aa5f8f23c7f068080e41c6ee3f2c876b2f5fe)), closes [#1192](https://github.com/IDuxFE/idux/issues/1192)
- **comp:dropdown:** update style with dark menu ([#1313](https://github.com/IDuxFE/idux/issues/1313)) ([6878994](https://github.com/IDuxFE/idux/commit/6878994fafe456f61fafcae3e38039e1ae64920a))
- **comp:table:** the head is hidden when with autoHeight and not scroll ([#1317](https://github.com/IDuxFE/idux/issues/1317)) ([bf088c3](https://github.com/IDuxFE/idux/commit/bf088c35bf43493894ec42c92e2493a26f9a3079))

# 1.2.0(2022-11-28)

### Bug Fixes

- **comp:\*:** overlay destroyOnHide 之后，popper 不再计算位置 ([#1288](https://github.com/IDuxFE/idux/issues/1288)) ([0d5fe4e](https://github.com/IDuxFE/idux/commit/0d5fe4eda56c33aafab5fdcb56d21c26931f8128))
- **comp:\*:** 众多组件同步最新设计规范 ([#1238](https://github.com/IDuxFE/idux/issues/1238)) ([68435df](https://github.com/IDuxFE/idux/commit/68435dffce06aeaeed870e8da745fcbfd44b685e))
- **comp:alert:** 样式同步设计规范, 支持 css variable ([#1283](https://github.com/IDuxFE/idux/issues/1283)) ([3ce5024](https://github.com/IDuxFE/idux/commit/3ce50243e3c31aca0d461f5fedd16f355eb59836))
- **comp:button:** 嵌套的 ButtonGroup 样式异常 ([#1299](https://github.com/IDuxFE/idux/issues/1299)) ([af018fb](https://github.com/IDuxFE/idux/commit/af018fbeb9d427022f712785d235a197323c8556))
- **comp:button:** 在 text 和 link 模式时, min-width 为 auto ([#1278](https://github.com/IDuxFE/idux/issues/1278)) ([36411e2](https://github.com/IDuxFE/idux/commit/36411e21417769a8238059d620e027f58d0435c5))
- **comp:button:** 在 text 和 link 模式时, height 为 auto ([#1282](https://github.com/IDuxFE/idux/issues/1282)) ([d4653bb](https://github.com/IDuxFE/idux/commit/d4653bb1ed543a8f758d895fffae33c5a122d0e4))
- **comp:button:** loading 状态时的 line-height 不一致导致的样式异常 ([#1308](https://github.com/IDuxFE/idux/issues/1308)) ([23aeeed](https://github.com/IDuxFE/idux/commit/23aeeed933aebc0299a4e994988aa72006d7a75e))
- **comp:button:** ButtonGroup 的 radius 消失问题 ([#1290](https://github.com/IDuxFE/idux/issues/1290)) ([714f588](https://github.com/IDuxFE/idux/commit/714f5887dde46627371c9fa912768291988baead))
- **comp:checkbox:** 样式同步设计规范, 支持 css variable ([#1291](https://github.com/IDuxFE/idux/issues/1291)) ([b378ef2](https://github.com/IDuxFE/idux/commit/b378ef220bc6aedf25a5fa8e35f754127a489bf5))
- **comp:dropdown:** 样式同步设计规范, 支持 css variable ([#1301](https://github.com/IDuxFE/idux/issues/1301)) ([0a59283](https://github.com/IDuxFE/idux/commit/0a5928331999ce70b294f8ffd51cd87b6ef7271b))
- **comp:input,input-number:** 样式同步设计规范, 支持 css variable ([#1289](https://github.com/IDuxFE/idux/issues/1289)) ([5a9eb9d](https://github.com/IDuxFE/idux/commit/5a9eb9d0f8a1f06e6ca25823244cb1ba524c8af3))
- **comp:layout:** 样式同步设计规范, 支持 css variable ([#1302](https://github.com/IDuxFE/idux/issues/1302)) ([3d8a5c3](https://github.com/IDuxFE/idux/commit/3d8a5c3bd3affb0f4967ac73374f0622abe6aec5))
- **comp:radio:** 样式同步设计规范, 支持 css variable ([#1293](https://github.com/IDuxFE/idux/issues/1293)) ([e438cb3](https://github.com/IDuxFE/idux/commit/e438cb3b73fe7c2009b4722463e6a2d29cc7b3e2))
- **comp:textarea,pro:textarea:** 火狐浏览器的 scrollHeight 兼容性问题 ([c61d7b2](https://github.com/IDuxFE/idux/commit/c61d7b22b1755e35e6974a738a5d6fcf68680182))
- **comp:tree:** 搜索没有匹配到且存在已展开节点时，全部节点被渲染 ([#1305](https://github.com/IDuxFE/idux/issues/1305)) ([fd3fae2](https://github.com/IDuxFE/idux/commit/fd3fae2c5b9e2662e7a17f5bab43ff6b15336796))
- **comp:tree:** leafLineIcon 样式没有对齐 ([#1287](https://github.com/IDuxFE/idux/issues/1287)) ([6f77ada](https://github.com/IDuxFE/idux/commit/6f77adaedf084bcd675f45ac2931714366091462))

### Features

- **comp:\*:** 导出 modal, drawer 等组件的 provider token ([#1310](https://github.com/IDuxFE/idux/issues/1310)) ([bc482bd](https://github.com/IDuxFE/idux/commit/bc482bd207e37759c995b59ce28b2f41f7b54487))
- **comp:alert:** 默认类型为 warning, 新增 offline 类型, 支持 banner 配置 ([#1298](https://github.com/IDuxFE/idux/issues/1298)) ([9ca13db](https://github.com/IDuxFE/idux/commit/9ca13dbb9e9dc4eb6c75d02fe9f346bbc4c21a37))
- **comp:button:** ButtonGroup 使用 Space 实现 ([#1279](https://github.com/IDuxFE/idux/issues/1279)) ([46e65b1](https://github.com/IDuxFE/idux/commit/46e65b1798511d9709cc787a758cbd58d70560d6))
- **comp:config:** 新增 Seer 全局配置 ([#1295](https://github.com/IDuxFE/idux/issues/1295)) ([db38d14](https://github.com/IDuxFE/idux/commit/db38d146d3d72f7f44e295aa0cd8ba789ce034a8))
- **comp:empty:** 新增 simple 模式, 支持 css variable ([#1268](https://github.com/IDuxFE/idux/issues/1268)) ([4d5e770](https://github.com/IDuxFE/idux/commit/4d5e7702546e48afa1b1c46e6d73cba2b1ba71cc))
- **comp:form:** 阻止默认的 submit 事件 ([#1296](https://github.com/IDuxFE/idux/issues/1296)) ([edca00d](https://github.com/IDuxFE/idux/commit/edca00d2b74ac86f39a990f043e638747550d288))
- **comp:menu:** 新增 overlayDelay 配置, MenuItem 支持自定义后缀图标 ([#1300](https://github.com/IDuxFE/idux/issues/1300)) ([f1dde91](https://github.com/IDuxFE/idux/commit/f1dde91da7b5469cb7f540b3eb7a9ba30bded8a1)), closes [#1292](https://github.com/IDuxFE/idux/issues/1292)
- **comp:table:** ellipsis 配置和 expandable 的图标配置能力增强 ([#1280](https://github.com/IDuxFE/idux/issues/1280)) ([9587f15](https://github.com/IDuxFE/idux/commit/9587f151703cd7ec4803b7561d89e8f71fb12224))
- **pro:layout:** 新增 logo 配置, 修改默认的 fixed 和 theme 配置, 支持 css variable ([#1307](https://github.com/IDuxFE/idux/issues/1307)) ([1d47a0c](https://github.com/IDuxFE/idux/commit/1d47a0c4557b66a1f01b006b95780ee69eb9ff13))

## 1.1.2(2022-11-15)

### Bug Fixes

- **comp:button, card, pagination, pro:tree:** 样式问题修复 ([#1275](https://github.com/IDuxFE/idux/issues/1275)) ([6082a15](https://github.com/IDuxFE/idux/commit/6082a15ac78c0087962bd21921385734ad1b5d72))
- **comp:modal:** 调用 userModal 的 update 更新 content，无法触发更新 ([#1270](https://github.com/IDuxFE/idux/issues/1270)) ([38f130a](https://github.com/IDuxFE/idux/commit/38f130a932938539cb25d2a71eafffb0e9a8005f))
- **comp:transfer:** 空的 suffix 不应该被渲染 ([#1267](https://github.com/IDuxFE/idux/issues/1267)) ([4ab1ebb](https://github.com/IDuxFE/idux/commit/4ab1ebb4c02b6b55edfd2cfdece578c95668c3fd))
- **pro:table:** resize 列宽使其他的列变得过窄 ([#1276](https://github.com/IDuxFE/idux/issues/1276)) ([cd4e08c](https://github.com/IDuxFE/idux/commit/cd4e08c74936f89ddf802724cb7cfa98c7ee5e7f))

## 1.1.1(2022-11-13)

### Bug Fixes

- **comp:select:** 浮层打开时，点击 trigger 无法触发 focus ([#1271](https://github.com/IDuxFE/idux/issues/1271)) ([bd34155](https://github.com/IDuxFE/idux/commit/bd34155089c1755a8dffd31e68a9f7ff0e89ace9))
- **comp:spin:** useSpin 移除外层容器节点且支持子元素 resize ([#1273](https://github.com/IDuxFE/idux/issues/1273)) ([bb2b4fd](https://github.com/IDuxFE/idux/commit/bb2b4fd8ea31877be0e7f6b08a8d8167275e0d0f))
- **comp:table:** 当 scroll.with 存在时，始终显示滚动条 ([#1274](https://github.com/IDuxFE/idux/issues/1274)) ([2d8c9c4](https://github.com/IDuxFE/idux/commit/2d8c9c41e409c9ef9856a8df24d60e56907db1b4))
- **comp:tree:** 未开启 virtual 时，height 设置不生效 ([#1244](https://github.com/IDuxFE/idux/issues/1244)) ([fa4d0f3](https://github.com/IDuxFE/idux/commit/fa4d0f3375ce62a8664c6a85ad356933a29b54b4))
- **pro:search:** 不再自动弹出搜索条件名称选择的面板 ([#1260](https://github.com/IDuxFE/idux/issues/1260)) ([da4de16](https://github.com/IDuxFE/idux/commit/da4de1681ef5bbffdbe0f7a10d54173572a765fc))

# 1.1.0(2022-11-08)

### Bug Fixes

- **comp:\*:** 存在 arrow 的时候，overlay 的 offset 计算错误 ([#1255](https://github.com/IDuxFE/idux/issues/1255)) ([81802c6](https://github.com/IDuxFE/idux/commit/81802c6924cd4fc09be7f5651bc8421ba813c532))
- **comp:date-picker:** 起始日期和结束日期互换 ([#1258](https://github.com/IDuxFE/idux/issues/1258)) ([9622758](https://github.com/IDuxFE/idux/commit/96227584fe60691bfbf261f67a43220f26c162c0))
- **comp:input-number:** 严格检查 value 是否为 number ([#1250](https://github.com/IDuxFE/idux/issues/1250)) ([75c9fe1](https://github.com/IDuxFE/idux/commit/75c9fe1ca420f972dbad56364aa2d2a7f696d2c6))
- **comp:slider:** tooltip 闪烁 ([#1256](https://github.com/IDuxFE/idux/issues/1256)) ([fe6a533](https://github.com/IDuxFE/idux/commit/fe6a5330eca4877a8429beb7e47812da3cdf6f22))
- **comp:space:** 空的子元素应该被隐藏 ([#1263](https://github.com/IDuxFE/idux/issues/1263)) ([7fed8bc](https://github.com/IDuxFE/idux/commit/7fed8bca5b4e1e8aa720d38fc5acd10bd27ff473))
- **comp:stepper,comp:slider:** 样式修复 ([#1243](https://github.com/IDuxFE/idux/issues/1243)) ([d07e914](https://github.com/IDuxFE/idux/commit/d07e9143ccaf40518c4a7017aad65bf1f33b2797))
- **comp:table:** 当列宽设置为百分比的时候，拖拽调整列宽异常 ([#1254](https://github.com/IDuxFE/idux/issues/1254)) ([ae21248](https://github.com/IDuxFE/idux/commit/ae2124844e8cf5f68ae95a1c220bb153f5e54ccb))
- **comp:table:** ellipsis 用在非普通列时，样式异常 ([#1245](https://github.com/IDuxFE/idux/issues/1245)) ([44a5353](https://github.com/IDuxFE/idux/commit/44a53530b086e52e6bf2c89bc3f6b8c81d3d0f6b))
- **pro:search:** 失焦后应该重置搜索条件 ([#1253](https://github.com/IDuxFE/idux/issues/1253)) ([775901e](https://github.com/IDuxFE/idux/commit/775901e33c083e0bbd963de6bd566067362c5f0d))

### Features

- **\*:transfer:** 新增 searchPlaceholder 配置 ([#1230](https://github.com/IDuxFE/idux/issues/1230)) ([2d47151](https://github.com/IDuxFE/idux/commit/2d47151d368ac04f0fd55bea89a959331e4e4a7e)), closes [#1213](https://github.com/IDuxFE/idux/issues/1213)
- **comp:button:** ButtonGroup 新增 gap 配置 ([#1235](https://github.com/IDuxFE/idux/issues/1235)) ([7613c7d](https://github.com/IDuxFE/idux/commit/7613c7d76ed7c13a7a5aca4e7ab3ed5d32a34eac))
- **comp:collapse:** 新增 size 配置 ([#1252](https://github.com/IDuxFE/idux/issues/1252)) ([f3aa234](https://github.com/IDuxFE/idux/commit/f3aa23408ee04561da17aef6c5dbd09f814bbeb0))
- **comp:date-picker:** DateRangePicker 新增 onSelect 配置 ([#1248](https://github.com/IDuxFE/idux/issues/1248)) ([b263b79](https://github.com/IDuxFE/idux/commit/b263b79b7b6b987bad572829b334906bc284844b))
- **comp:header:** 支持 css variable ([#1251](https://github.com/IDuxFE/idux/issues/1251)) ([be94528](https://github.com/IDuxFE/idux/commit/be94528a8b6966a7ee25d3fc05f940147dbbe07e))
- **comp:pagination:** 新增 large 尺寸 ([#1249](https://github.com/IDuxFE/idux/issues/1249)) ([a05d7b7](https://github.com/IDuxFE/idux/commit/a05d7b7872cedb8317b039bb8f978344fb2af59d))
- **comp:select,comp:tree-select,comp:cascader:** 新增 selectedItem 插槽 ([#1257](https://github.com/IDuxFE/idux/issues/1257)) ([9651a8d](https://github.com/IDuxFE/idux/commit/9651a8d406e7e6097dd7472b3bfffe4a5e7e3b1f))
- **comp:spin:** 支持 useSpin 的用法 ([#1222](https://github.com/IDuxFE/idux/issues/1222)) ([42491a9](https://github.com/IDuxFE/idux/commit/42491a944757b38103c8b3eac141fa54902c5112))
- **comp:tooltip,comp:tree,comp:tree-select:** 新增 offset 配置 ([#1221](https://github.com/IDuxFE/idux/issues/1221)) ([f99028f](https://github.com/IDuxFE/idux/commit/f99028ffc1a75dc8f8a843ddc6d8cc6e0ac4ff66))

## 1.0.2(2022-10-29)

### Bug Fixes

- **cdk:drag-drop:** handle 失效 ([677b163](https://github.com/IDuxFE/idux/commit/677b1635e54ff0d38b80563b0b6fa632f30b1432))
- **comp:input:** input suffix 字体大小调整 ([#1233](https://github.com/IDuxFE/idux/issues/1233)) ([5d3f260](https://github.com/IDuxFE/idux/commit/5d3f2607367331059fe2ff884889227a3c4567dd))
- **comp:tabs:** 设置 selectedKey 时，没有滚动到正确位置 ([#1236](https://github.com/IDuxFE/idux/issues/1236)) ([050a1f7](https://github.com/IDuxFE/idux/commit/050a1f7089aba2b818382393d76d6ca7acab2e2f))
- **comp:time-picker:** time-range-picker 使用异常 ([82ce400](https://github.com/IDuxFE/idux/commit/82ce4004d98b86c53b6c2ec334542294ffa36b55))
- **comp:transfer:** 更新 transfer 组件样式和 demo ([#1234](https://github.com/IDuxFE/idux/issues/1234)) ([d93b815](https://github.com/IDuxFE/idux/commit/d93b815f22220fb3ff11c313873cb1d1ddef1ccd))
- **comp:*:** 部分组件样式与设计规范同步 ([#1232](https://github.com/IDuxFE/idux/issues/1232)) ([4bf61fb](https://github.com/IDuxFE/idux/commit/4bf61fbda7bf277f546e65fc0945a9720d6aeb1c))

## 1.0.1(2022-10-21)

### Bug Fixes

- **cdk:drag-drop:** pointer 模式下无法聚焦 ([#1202](https://github.com/IDuxFE/idux/issues/1202)) ([#1203](https://github.com/IDuxFE/idux/issues/1203)) ([e46d5cb](https://github.com/IDuxFE/idux/commit/e46d5cb06ffa7172e5f71bfd382a8fd811d3285f))
- **comp:cascader:** 选中样式问题 ([#1207](https://github.com/IDuxFE/idux/issues/1207)) ([5fd11e1](https://github.com/IDuxFE/idux/commit/5fd11e11290d20ebca0511e2bdc5d41e7da52c44))
- **comp:select:** selector 后缀图标多行时固定 ([#1205](https://github.com/IDuxFE/idux/issues/1205)) ([de86a17](https://github.com/IDuxFE/idux/commit/de86a171571fd2e226a81cc95278a3b3f6d64bb8))
- **comp:slider:** 原点改成竖线 ([#1208](https://github.com/IDuxFE/idux/issues/1208)) ([90651fd](https://github.com/IDuxFE/idux/commit/90651fd4c3d15b6e5c6acb241c6f56e9816b0eb2))
- **comp:switch:** 移除 seer 主题的阴影 ([#1209](https://github.com/IDuxFE/idux/issues/1209)) ([953d5ce](https://github.com/IDuxFE/idux/commit/953d5ce6fe1ae884baf4bcdb0cfc491295e4348c))
- **comp:table:** 过滤下拉菜单中的按钮为 `xs` 大小 ([#1218](https://github.com/IDuxFE/idux/issues/1218)) ([6c6411a](https://github.com/IDuxFE/idux/commit/6c6411a9866c46bc5a4e78939fab38e950d15545))
- **comp:textarea:** line-height 导致高度计算错误 ([#1214](https://github.com/IDuxFE/idux/issues/1214)) ([2d4ffa4](https://github.com/IDuxFE/idux/commit/2d4ffa4459fb6cd984b3ddfffd9d9355d7922c7f))
- **comp:watermark:** 防篡改数据抖动问题 ([#1206](https://github.com/IDuxFE/idux/issues/1206)) ([49863e9](https://github.com/IDuxFE/idux/commit/49863e9d8943ef7ec1bd98bf5bffe6c4e8418419))
- **pro:textarea:** disabled 不生效 ([#1215](https://github.com/IDuxFE/idux/issues/1215)) ([8dc1f8d](https://github.com/IDuxFE/idux/commit/8dc1f8df6d82162327f22b87996334f74064e8b2))
- **pro:transfer:** 级联策略为 parent 时, flat-target-data 不能正常工作 ([#1204](https://github.com/IDuxFE/idux/issues/1204)) ([54d197b](https://github.com/IDuxFE/idux/commit/54d197b2a1aa48a4a475e90cfde8dca3c5cb2f2a))

# 1.0.0(2022-10-14)

欢迎来到 `@idux` 的第一个正式版本，之前版本的用户请参考[升级指南](https://github.com/IDuxFE/idux/issues/1193)进行升级。

### Bug Fixes

* **cdk:popper:** vue 警告: 监听了一个非响应式对象 ([#1197](https://github.com/IDuxFE/idux/issues/1197)) ([123e62f](https://github.com/IDuxFE/idux/commit/123e62f32e62b801dce86d799f6ab95b7025b526))
* **comp:carousel:** 动态新增删除子节点的时候 gotTo 不能正常跳转  ([#1196](https://github.com/IDuxFE/idux/issues/1196)) ([1406d27](https://github.com/IDuxFE/idux/commit/1406d27ca409d5ed53d81aafdf8848d173249b77))
* **comp:modal:** 关闭动画结束前可以点击 ok 和 cancel 按钮 ([#1190](https://github.com/IDuxFE/idux/issues/1190)) ([e207465](https://github.com/IDuxFE/idux/commit/e20746521e3dd3102b1e736802a25de6591ac927))

### Features

* **cdk:popper:** 将 popperjs 升级到 floating-ui ([#1191](https://github.com/IDuxFE/idux/issues/1191)) ([7eb77d6](https://github.com/IDuxFE/idux/commit/7eb77d66cb5063e5724c1bf2666a2e33492e09e6))
