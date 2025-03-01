# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.5.1](https://github.com/IDuxFE/idux/compare/v1.5.0...v1.5.1) (2023-03-14)

### Bug Fixes

- **comp:\*:** the control type of all form components is incomplete ([#1495](https://github.com/IDuxFE/idux/issues/1495)) ([ace2a1e](https://github.com/IDuxFE/idux/commit/ace2a1ed57c2f6a3a3f5bd41a20e393d90866d60))
- **pro:search:** segmentState should init only when item key changes ([#1496](https://github.com/IDuxFE/idux/issues/1496)) ([70f947c](https://github.com/IDuxFE/idux/commit/70f947cc455f2a8a2ab82ae90540997218d04b32))
- **pro:search:** select panel virtual not working ([#1501](https://github.com/IDuxFE/idux/issues/1501)) ([5def0ab](https://github.com/IDuxFE/idux/commit/5def0abd30af0d2772ba2df3987c3b13274d3544))

# [1.5.0](https://github.com/IDuxFE/idux/compare/v1.4.3...v1.5.0) (2023-03-07)

### Bug Fixes

- **comp:modal:** style update and css variable support ([#1479](https://github.com/IDuxFE/idux/issues/1479)) ([f45776d](https://github.com/IDuxFE/idux/commit/f45776d3a9e35ebd1a522d4d0c8faf97fd96be4b))
- **pro:search:** empty input segment should be invalid ([#1494](https://github.com/IDuxFE/idux/issues/1494)) ([168620e](https://github.com/IDuxFE/idux/commit/168620e6696a71c0f9693bdc42734e1a7e1f99d3))
- **pro:search:** name select label not rendering ([#1493](https://github.com/IDuxFE/idux/issues/1493)) ([cb4b86a](https://github.com/IDuxFE/idux/commit/cb4b86a35aabb64616fe476f8d544b7e2a1174cc))

### Features

- **comp:desc:** add Descriptions component ([#1470](https://github.com/IDuxFE/idux/issues/1470)) ([a7faf13](https://github.com/IDuxFE/idux/commit/a7faf1365ef93a765e85fadfda4b06cf41600caf))
- **pro:search:** `select` and `treeSelect` support `onSearch` now ([#1444](https://github.com/IDuxFE/idux/issues/1444)) ([79a7acc](https://github.com/IDuxFE/idux/commit/79a7acc40a43bcab853e5bfefcf1a0433452597f))
- **pro:search:** add `'cascader'` searchField ([#1485](https://github.com/IDuxFE/idux/issues/1485)) ([88b751b](https://github.com/IDuxFE/idux/commit/88b751b276440d0024296c5ccd3ef62c53af6d35))
- **pro:search:** add `customNameLabel` and `customOperatorLabel` ([#1491](https://github.com/IDuxFE/idux/issues/1491)) ([1be87e8](https://github.com/IDuxFE/idux/commit/1be87e8cab9a926527efa433baeb4c1e99d27840))
- **pro:table:** the layout tool support visible, changeSize, resetable ([#1488](https://github.com/IDuxFE/idux/issues/1488)) ([950f1b1](https://github.com/IDuxFE/idux/commit/950f1b1eb40b70e66e90989ac81da1fa3ffc8ed9))

## [1.4.3](https://github.com/IDuxFE/idux/compare/v1.4.2...v1.4.3) (2023-02-27)

### Bug Fixes

- **pro:search:** change proSearch overlay vertical offset to 8px ([#1463](https://github.com/IDuxFE/idux/issues/1463)) ([2da284d](https://github.com/IDuxFE/idux/commit/2da284de936a4d427691a31569ec8902b7d80549))
- **pro:search:** mutiple search filed validation error ([#1475](https://github.com/IDuxFE/idux/issues/1475)) ([b961c4e](https://github.com/IDuxFE/idux/commit/b961c4e5769647323085d31a9b3f73ce12bb67a0))
- **pro:search:** panel onkeydown should only be called when opened ([#1477](https://github.com/IDuxFE/idux/issues/1477)) ([76a1bac](https://github.com/IDuxFE/idux/commit/76a1bacdadcc909584b22366f62be50ae7f42ba8))
- **pro:tree:** tree content horizontal padding ([#1466](https://github.com/IDuxFE/idux/issues/1466)) ([ec8c61d](https://github.com/IDuxFE/idux/commit/ec8c61dce3cc554c77d6016d5ce69ab5ab085e3b))

## [1.4.2](https://github.com/IDuxFE/idux/compare/v1.4.1...v1.4.2) (2023-02-20)

### Bug Fixes

- component style update ([#1452](https://github.com/IDuxFE/idux/issues/1452)) ([c07ef31](https://github.com/IDuxFE/idux/commit/c07ef312795834867d658703842a02244456328a))
- **pro:search:** `treeSelect` panel height is unset ([#1445](https://github.com/IDuxFE/idux/issues/1445)) ([388da6a](https://github.com/IDuxFE/idux/commit/388da6a6b1f2d5eeac354eeedabe4c81bf89f976))
- **pro:search:** remove transition for overlay ([#1447](https://github.com/IDuxFE/idux/issues/1447)) ([4c28a78](https://github.com/IDuxFE/idux/commit/4c28a78c83a1f820b8976956549c27390316135e))

## [1.4.1](https://github.com/IDuxFE/idux/compare/v1.4.0...v1.4.1) (2023-02-13)

### Bug Fixes

- **pro:search:** segment panel overlay shouldn't blink ([#1424](https://github.com/IDuxFE/idux/issues/1424)) ([7829ca1](https://github.com/IDuxFE/idux/commit/7829ca1389d7b42cb04dc4da872ff2dcdba62cc4))
- **pro:transfer:** tree transfer count error under `children` strategy ([#1443](https://github.com/IDuxFE/idux/issues/1443)) ([e0f9597](https://github.com/IDuxFE/idux/commit/e0f9597364e823bc9b4927ea9472bd3891e1a207))
- **pro:tree:** expandAll button state is wrong ([#1429](https://github.com/IDuxFE/idux/issues/1429)) ([2d2d7ca](https://github.com/IDuxFE/idux/commit/2d2d7ca1a6c8b4a64f5c8e42f6e1f83ff4d01a7e))

# [1.4.0](https://github.com/IDuxFE/idux/compare/v1.3.3...v1.4.0) (2023-01-16)

### Bug Fixes

- **comp:tree:** lines are not aligned ([#1393](https://github.com/IDuxFE/idux/issues/1393)) ([0dd030d](https://github.com/IDuxFE/idux/commit/0dd030de66cf84a7d3a3e0f043ced4bdde2b17d1))
- **pro:table:** width calculation problem after resize ([#1417](https://github.com/IDuxFE/idux/issues/1417)) ([d7ef42c](https://github.com/IDuxFE/idux/commit/d7ef42cca7b2ca6611cd352b1f68592f1fa0b421))
- **pro:transfer:** optimze tree expanded keys sync logic ([#1414](https://github.com/IDuxFE/idux/issues/1414)) ([fec5fee](https://github.com/IDuxFE/idux/commit/fec5fee6146cd9412abdcb4bd4a8a6b42c78bf58))
- **pro:transfer:** overide transfer tree node selected bg color ([#1407](https://github.com/IDuxFE/idux/issues/1407)) ([477ac44](https://github.com/IDuxFE/idux/commit/477ac44f11036d33bfc487c51b44d54e765139ed))

### Features

- **cdk:utils, pro:search:** add tree utils, add pro search `'treeSelect'` field ([#1391](https://github.com/IDuxFE/idux/issues/1391)) ([4bf719d](https://github.com/IDuxFE/idux/commit/4bf719ddcea66b12500d2df891c09ba0af8621f1))
- **cdk:utils:** add tree utils, fix data param of getAllSelectedKeys, fix filtered or paginated tree data value error ([#1406](https://github.com/IDuxFE/idux/issues/1406)) ([56035c1](https://github.com/IDuxFE/idux/commit/56035c131cacbdf32c3eee3387f266768a85124b))
- **comp:badge:** add status prop and support css variable ([#1390](https://github.com/IDuxFE/idux/issues/1390)) ([da3905e](https://github.com/IDuxFE/idux/commit/da3905e626e5f8f14d11f9330aa2ac7eb73b874b))

## [1.3.3](https://github.com/IDuxFE/idux/compare/v1.3.2...v1.3.3) (2023-01-09)

### Bug Fixes

- **comp:header:** remove breakground-color ([#1392](https://github.com/IDuxFE/idux/issues/1392)) ([55bb758](https://github.com/IDuxFE/idux/commit/55bb75847ea1ca7d6e3372d3b2c71315c086c66c))
- **pro:search:** overlay zIndex should be larger than container ([#1389](https://github.com/IDuxFE/idux/issues/1389)) ([81ff47e](https://github.com/IDuxFE/idux/commit/81ff47e9ac9a2afceb4ac8726f6f2618a6933377))
- **pro:transfer:** tree transfer with 'off' stategy target error ([#1388](https://github.com/IDuxFE/idux/issues/1388)) ([796bfaf](https://github.com/IDuxFE/idux/commit/796bfaf6ce627d564a8db9e7675b9879342e4e5f))

## [1.3.2](https://github.com/IDuxFE/idux/compare/v1.3.1...v1.3.2) (2023-01-03)

### Bug Fixes

- **comp:table:** can't reverse select, when multiple of selectable is false ([#1383](https://github.com/IDuxFE/idux/issues/1383)) ([1300c13](https://github.com/IDuxFE/idux/commit/1300c134d11132455f5e259b98fc5bf9f7d17aa4))
- **pro:table:** emptyCell is not declared in props ([#1378](https://github.com/IDuxFE/idux/issues/1378)) ([edb23d4](https://github.com/IDuxFE/idux/commit/edb23d42b9d2479fa10b17f201e0a87c45c4cd7e))

## [1.3.1](https://github.com/IDuxFE/idux/compare/v1.3.0...v1.3.1) (2022-12-23)

### Bug Fixes

- **comp:table:** incorrect serial number ([#1370](https://github.com/IDuxFE/idux/issues/1370)) ([f19efbe](https://github.com/IDuxFE/idux/commit/f19efbe0e6a893e1211e1df97893094f68fb2c25))
- **comp:textarea:** lineheight error when not rendered initially ([#1372](https://github.com/IDuxFE/idux/issues/1372)) ([627e018](https://github.com/IDuxFE/idux/commit/627e01800c24cc96891920e89c9a8af077691449))
- failed to import style file, in webpack project ([#1369](https://github.com/IDuxFE/idux/issues/1369)) ([c2288d5](https://github.com/IDuxFE/idux/commit/c2288d5f6840ca3c2b463e78add9a0efbf5f178d))
- **pro:search:** search items covers dom content when bluerd ([#1374](https://github.com/IDuxFE/idux/issues/1374)) ([bda0db2](https://github.com/IDuxFE/idux/commit/bda0db24475d123cb0a2cd7531f6c9235087802b))
- **pro:search:** searchItem mousedown doesn't trigger focused ([#1368](https://github.com/IDuxFE/idux/issues/1368)) ([14637be](https://github.com/IDuxFE/idux/commit/14637be0880c72674d31363d97e367e326143c6a))

# [1.3.0](https://github.com/IDuxFE/idux/compare/v1.2.3...v1.3.0) (2022-12-16)

### Bug Fixes

- **comp:\*:** opening overlay once triggers two zIndex changes ([#1355](https://github.com/IDuxFE/idux/issues/1355)) ([7cec4ec](https://github.com/IDuxFE/idux/commit/7cec4ec5d9c882d9fae54cba221efda34ba3bc93))
- **comp:\*:** the font size under seer theme is incorrect ([#1343](https://github.com/IDuxFE/idux/issues/1343)) ([5c74fcf](https://github.com/IDuxFE/idux/commit/5c74fcf6964bd7d76e5d35f5bf84ca52b0f21fae))
- **comp:empty:** style update with icon ([#1349](https://github.com/IDuxFE/idux/issues/1349)) ([69ec9f9](https://github.com/IDuxFE/idux/commit/69ec9f944ea3569b6a85c0bcb9eb278f2fad084e))
- **pro:layout:** the dom still renders without the logo ([#1348](https://github.com/IDuxFE/idux/issues/1348)) ([375c691](https://github.com/IDuxFE/idux/commit/375c69132dcd06a46cdbf449aac8760d2e25eab5))
- **pro:search:** zIndex should be updated only when focused change ([#1356](https://github.com/IDuxFE/idux/issues/1356)) ([61a51fd](https://github.com/IDuxFE/idux/commit/61a51fd62c9ab74601261ac82be692ee782ceb4f))
- **pro:table:** wrong type of ellipsis ([#1345](https://github.com/IDuxFE/idux/issues/1345)) ([86c59f8](https://github.com/IDuxFE/idux/commit/86c59f8e98b70248178c2c8d4fc440d33b91ca7f))

### Features

- **comp:button,checkbox,radio:** add waveless prop ([#1303](https://github.com/IDuxFE/idux/issues/1303)) ([4881414](https://github.com/IDuxFE/idux/commit/4881414bf48fee70cc13f0038e8487b5390a92d3))
- **comp:table:** selectable supports showIndex ([#1360](https://github.com/IDuxFE/idux/issues/1360)) ([19e6f68](https://github.com/IDuxFE/idux/commit/19e6f685cda0c1900fa624a09349e95593c32d3b))
- **pro:search:** search btn triggers search change now ([#1321](https://github.com/IDuxFE/idux/issues/1321)) ([e44673f](https://github.com/IDuxFE/idux/commit/e44673f5320a76d9daca61f887a44e377d206815))
- **pro:search:** support searchField placeholder ([#1322](https://github.com/IDuxFE/idux/issues/1322)) ([84d0e66](https://github.com/IDuxFE/idux/commit/84d0e662024bd9f763a9f5debd65e90d52238c4b))
- **pro:table:** support layoutable ([#1364](https://github.com/IDuxFE/idux/issues/1364)) ([2e7533c](https://github.com/IDuxFE/idux/commit/2e7533cfebbbb12bd682b4805fb600d3a438607e))

## [1.2.4](https://github.com/IDuxFE/idux/compare/v1.2.3...v1.2.4) (2022-12-10)

### Bug Fixes

- **comp:\*:** the font size under seer theme is incorrect ([#1343](https://github.com/IDuxFE/idux/issues/1343)) ([5c74fcf](https://github.com/IDuxFE/idux/commit/5c74fcf6964bd7d76e5d35f5bf84ca52b0f21fae))
- **comp:empty:** style update with icon ([#1349](https://github.com/IDuxFE/idux/issues/1349)) ([69ec9f9](https://github.com/IDuxFE/idux/commit/69ec9f944ea3569b6a85c0bcb9eb278f2fad084e))
- **pro:layout:** the dom still renders without the logo ([#1348](https://github.com/IDuxFE/idux/issues/1348)) ([375c691](https://github.com/IDuxFE/idux/commit/375c69132dcd06a46cdbf449aac8760d2e25eab5))
- **pro:table:** wrong type of ellipsis ([#1345](https://github.com/IDuxFE/idux/issues/1345)) ([86c59f8](https://github.com/IDuxFE/idux/commit/86c59f8e98b70248178c2c8d4fc440d33b91ca7f))

## [1.2.3](https://github.com/IDuxFE/idux/compare/v1.2.2...v1.2.3) (2022-12-07)

### Bug Fixes

- **comp:\*:** overlayContainer adds callback parameter ([#1336](https://github.com/IDuxFE/idux/issues/1336)) ([70e0d34](https://github.com/IDuxFE/idux/commit/70e0d34fd38c9dc1179b9bdb9d93f2e480a48b0a))
- **comp:\*:** via getter to manage overlayZIndex ([#1341](https://github.com/IDuxFE/idux/issues/1341)) ([ad3445d](https://github.com/IDuxFE/idux/commit/ad3445d6968678f4223cc073e2e9be3dc9e536ba))
- **pro:layout:** stype update and remove useless code ([#1335](https://github.com/IDuxFE/idux/issues/1335)) ([a4ba26a](https://github.com/IDuxFE/idux/commit/a4ba26a5cacf5f4c73f36e66406e6a9a07f37ad8))
- **pro:search:** all tags should be displayed when focused ([#1331](https://github.com/IDuxFE/idux/issues/1331)) ([05478ab](https://github.com/IDuxFE/idux/commit/05478abaee913334409dd0933a2e35487c7ff060))
- **pro:table:** resizable not work ([#1334](https://github.com/IDuxFE/idux/issues/1334)) ([b3a568d](https://github.com/IDuxFE/idux/commit/b3a568d6b82557846756b456f57d64d14c1a41ff))
- **pro:tree:** expandIcon style error without header ([#1332](https://github.com/IDuxFE/idux/issues/1332)) ([bf03db5](https://github.com/IDuxFE/idux/commit/bf03db58c1abc38653f17e76de2809bd456095ae))

## [1.2.2](https://github.com/IDuxFE/idux/compare/v1.2.1...v1.2.2) (2022-12-02)

### Bug Fixes

- **dropdown,header,tree-select:** update style with design ([#1319](https://github.com/IDuxFE/idux/issues/1319)) ([145865c](https://github.com/IDuxFE/idux/commit/145865c64034515af1e86f63fd9c939fd30f0126))
- **pro:table:** column visible change should be trigger onColumnsChange ([#1327](https://github.com/IDuxFE/idux/issues/1327)) ([d0fb7fd](https://github.com/IDuxFE/idux/commit/d0fb7fd6f4729ab64a9e1286a22990d125f6a181))
- **pro:table:** the sorter should not be triggered on resize end ([#1324](https://github.com/IDuxFE/idux/issues/1324)) ([57c5a7f](https://github.com/IDuxFE/idux/commit/57c5a7fa14aae9bbc50c4fecb2d115f38888ef8c))

## [1.2.1](https://github.com/IDuxFE/idux/compare/v1.0.1...v1.2.1) (2022-12-01)

### Bug Fixes

- **comp:button:** text and link mode remove padding and bg color ([#1275](https://github.com/IDuxFE/idux/issues/1275)) ([6082a15](https://github.com/IDuxFE/idux/commit/6082a15ac78c0087962bd21921385734ad1b5d72))
- **comp:checkbox:** style update and css variable support ([#1291](https://github.com/IDuxFE/idux/issues/1291)) ([b378ef2](https://github.com/IDuxFE/idux/commit/b378ef220bc6aedf25a5fa8e35f754127a489bf5))
- **comp:dropdown:** update style with dark menu ([#1313](https://github.com/IDuxFE/idux/issues/1313)) ([6878994](https://github.com/IDuxFE/idux/commit/6878994fafe456f61fafcae3e38039e1ae64920a))
- **comp:table:** scrollbar always appear, when scroll.width is set ([#1274](https://github.com/IDuxFE/idux/issues/1274)) ([2d8c9c4](https://github.com/IDuxFE/idux/commit/2d8c9c41e409c9ef9856a8df24d60e56907db1b4))
- **comp:table:** style update and ellipsis conflicts with column type ([#1245](https://github.com/IDuxFE/idux/issues/1245)) ([44a5353](https://github.com/IDuxFE/idux/commit/44a53530b086e52e6bf2c89bc3f6b8c81d3d0f6b))
- **comp:textarea,pro:textarea:** scrollHeight miscalculated on firefox ([c61d7b2](https://github.com/IDuxFE/idux/commit/c61d7b22b1755e35e6974a738a5d6fcf68680182))
- **comp:tree:** all nodes should be hidden when search not matched ([#1305](https://github.com/IDuxFE/idux/issues/1305)) ([fd3fae2](https://github.com/IDuxFE/idux/commit/fd3fae2c5b9e2662e7a17f5bab43ff6b15336796))
- **pro:search:** name segment overlay isn't automatically opened now ([#1260](https://github.com/IDuxFE/idux/issues/1260)) ([da4de16](https://github.com/IDuxFE/idux/commit/da4de1681ef5bbffdbe0f7a10d54173572a765fc))
- **pro:table:** resize one column to make the other columns too narrow ([#1276](https://github.com/IDuxFE/idux/issues/1276)) ([cd4e08c](https://github.com/IDuxFE/idux/commit/cd4e08c74936f89ddf802724cb7cfa98c7ee5e7f))
- update components style according to UI design ([#1232](https://github.com/IDuxFE/idux/issues/1232)) ([4bf61fb](https://github.com/IDuxFE/idux/commit/4bf61fbda7bf277f546e65fc0945a9720d6aeb1c))

### Features

- **\*:transfer:** add transfer searchPlaceholder prop; add table transfer max selected count demo ([#1230](https://github.com/IDuxFE/idux/issues/1230)) ([2d47151](https://github.com/IDuxFE/idux/commit/2d47151d368ac04f0fd55bea89a959331e4e4a7e)), closes [#1213](https://github.com/IDuxFE/idux/issues/1213)
- **comp:empty:** add simple mode and support css variable ([#1268](https://github.com/IDuxFE/idux/issues/1268)) ([4d5e770](https://github.com/IDuxFE/idux/commit/4d5e7702546e48afa1b1c46e6d73cba2b1ba71cc))
- **comp:menu:** add overlayDelay prop and menu item support custom suffix ([#1300](https://github.com/IDuxFE/idux/issues/1300)) ([f1dde91](https://github.com/IDuxFE/idux/commit/f1dde91da7b5469cb7f540b3eb7a9ba30bded8a1)), closes [#1292](https://github.com/IDuxFE/idux/issues/1292)
- **comp:pagination:** add large size and update style ([#1249](https://github.com/IDuxFE/idux/issues/1249)) ([a05d7b7](https://github.com/IDuxFE/idux/commit/a05d7b7872cedb8317b039bb8f978344fb2af59d))
- **comp:table:** enhancement for icon of expandable and ellipsis ([#1280](https://github.com/IDuxFE/idux/issues/1280)) ([9587f15](https://github.com/IDuxFE/idux/commit/9587f151703cd7ec4803b7561d89e8f71fb12224))
- **comp:tooltip,comp:tree,comp:tree-select:** add offset prop ([#1221](https://github.com/IDuxFE/idux/issues/1221)) ([f99028f](https://github.com/IDuxFE/idux/commit/f99028ffc1a75dc8f8a843ddc6d8cc6e0ac4ff66))
- **pro:layout:** add logo prop and update style ([#1307](https://github.com/IDuxFE/idux/issues/1307)) ([1d47a0c](https://github.com/IDuxFE/idux/commit/1d47a0c4557b66a1f01b006b95780ee69eb9ff13))
- **pro:search:** temp state is now cleared after blur, add merge items demo ([#1253](https://github.com/IDuxFE/idux/issues/1253)) ([775901e](https://github.com/IDuxFE/idux/commit/775901e33c083e0bbd963de6bd566067362c5f0d))

# [1.2.0](https://github.com/IDuxFE/idux/compare/v1.0.1...v1.2.0) (2022-11-28)

### Bug Fixes

- **comp:button:** text and link mode remove padding and bg color ([#1275](https://github.com/IDuxFE/idux/issues/1275)) ([6082a15](https://github.com/IDuxFE/idux/commit/6082a15ac78c0087962bd21921385734ad1b5d72))
- **comp:checkbox:** style update and css variable support ([#1291](https://github.com/IDuxFE/idux/issues/1291)) ([b378ef2](https://github.com/IDuxFE/idux/commit/b378ef220bc6aedf25a5fa8e35f754127a489bf5))
- **comp:table:** scrollbar always appear, when scroll.width is set ([#1274](https://github.com/IDuxFE/idux/issues/1274)) ([2d8c9c4](https://github.com/IDuxFE/idux/commit/2d8c9c41e409c9ef9856a8df24d60e56907db1b4))
- **comp:table:** style update and ellipsis conflicts with column type ([#1245](https://github.com/IDuxFE/idux/issues/1245)) ([44a5353](https://github.com/IDuxFE/idux/commit/44a53530b086e52e6bf2c89bc3f6b8c81d3d0f6b))
- **comp:textarea,pro:textarea:** scrollHeight miscalculated on firefox ([c61d7b2](https://github.com/IDuxFE/idux/commit/c61d7b22b1755e35e6974a738a5d6fcf68680182))
- **comp:tree:** all nodes should be hidden when search not matched ([#1305](https://github.com/IDuxFE/idux/issues/1305)) ([fd3fae2](https://github.com/IDuxFE/idux/commit/fd3fae2c5b9e2662e7a17f5bab43ff6b15336796))
- **pro:search:** name segment overlay isn't automatically opened now ([#1260](https://github.com/IDuxFE/idux/issues/1260)) ([da4de16](https://github.com/IDuxFE/idux/commit/da4de1681ef5bbffdbe0f7a10d54173572a765fc))
- **pro:table:** resize one column to make the other columns too narrow ([#1276](https://github.com/IDuxFE/idux/issues/1276)) ([cd4e08c](https://github.com/IDuxFE/idux/commit/cd4e08c74936f89ddf802724cb7cfa98c7ee5e7f))
- update components style according to UI design ([#1232](https://github.com/IDuxFE/idux/issues/1232)) ([4bf61fb](https://github.com/IDuxFE/idux/commit/4bf61fbda7bf277f546e65fc0945a9720d6aeb1c))

### Features

- **\*:transfer:** add transfer searchPlaceholder prop; add table transfer max selected count demo ([#1230](https://github.com/IDuxFE/idux/issues/1230)) ([2d47151](https://github.com/IDuxFE/idux/commit/2d47151d368ac04f0fd55bea89a959331e4e4a7e)), closes [#1213](https://github.com/IDuxFE/idux/issues/1213)
- **comp:empty:** add simple mode and support css variable ([#1268](https://github.com/IDuxFE/idux/issues/1268)) ([4d5e770](https://github.com/IDuxFE/idux/commit/4d5e7702546e48afa1b1c46e6d73cba2b1ba71cc))
- **comp:menu:** add overlayDelay prop and menu item support custom suffix ([#1300](https://github.com/IDuxFE/idux/issues/1300)) ([f1dde91](https://github.com/IDuxFE/idux/commit/f1dde91da7b5469cb7f540b3eb7a9ba30bded8a1)), closes [#1292](https://github.com/IDuxFE/idux/issues/1292)
- **comp:pagination:** add large size and update style ([#1249](https://github.com/IDuxFE/idux/issues/1249)) ([a05d7b7](https://github.com/IDuxFE/idux/commit/a05d7b7872cedb8317b039bb8f978344fb2af59d))
- **comp:table:** enhancement for icon of expandable and ellipsis ([#1280](https://github.com/IDuxFE/idux/issues/1280)) ([9587f15](https://github.com/IDuxFE/idux/commit/9587f151703cd7ec4803b7561d89e8f71fb12224))
- **comp:tooltip,comp:tree,comp:tree-select:** add offset prop ([#1221](https://github.com/IDuxFE/idux/issues/1221)) ([f99028f](https://github.com/IDuxFE/idux/commit/f99028ffc1a75dc8f8a843ddc6d8cc6e0ac4ff66))
- **pro:layout:** add logo prop and update style ([#1307](https://github.com/IDuxFE/idux/issues/1307)) ([1d47a0c](https://github.com/IDuxFE/idux/commit/1d47a0c4557b66a1f01b006b95780ee69eb9ff13))
- **pro:search:** temp state is now cleared after blur, add merge items demo ([#1253](https://github.com/IDuxFE/idux/issues/1253)) ([775901e](https://github.com/IDuxFE/idux/commit/775901e33c083e0bbd963de6bd566067362c5f0d))

## [1.1.2](https://github.com/IDuxFE/idux/compare/v1.0.1...v1.1.2) (2022-11-15)

### Bug Fixes

- **pro:table:** resize one column to make the other columns too narrow ([#1276](https://github.com/IDuxFE/idux/issues/1276)) ([cd4e08c](https://github.com/IDuxFE/idux/commit/cd4e08c74936f89ddf802724cb7cfa98c7ee5e7f))

## [1.1.1](https://github.com/IDuxFE/idux/compare/v1.1.0...v1.1.1) (2022-11-13)

### Bug Fixes

- **pro:search:** name segment overlay isn't automatically opened now ([#1260](https://github.com/IDuxFE/idux/issues/1260)) ([da4de16](https://github.com/IDuxFE/idux/commit/da4de1681ef5bbffdbe0f7a10d54173572a765fc))

# [1.1.0](https://github.com/IDuxFE/idux/compare/v1.0.1...v1.1.0) (2022-11-08)

### Bug Fixes

- **comp:table:** style update and ellipsis conflicts with column type ([#1245](https://github.com/IDuxFE/idux/issues/1245)) ([44a5353](https://github.com/IDuxFE/idux/commit/44a53530b086e52e6bf2c89bc3f6b8c81d3d0f6b))
- update components style according to UI design ([#1232](https://github.com/IDuxFE/idux/issues/1232)) ([4bf61fb](https://github.com/IDuxFE/idux/commit/4bf61fbda7bf277f546e65fc0945a9720d6aeb1c))

### Features

- **\*:transfer:** add transfer searchPlaceholder prop; add table transfer max selected count demo ([#1230](https://github.com/IDuxFE/idux/issues/1230)) ([2d47151](https://github.com/IDuxFE/idux/commit/2d47151d368ac04f0fd55bea89a959331e4e4a7e)), closes [#1213](https://github.com/IDuxFE/idux/issues/1213)
- **comp:pagination:** add large size and update style ([#1249](https://github.com/IDuxFE/idux/issues/1249)) ([a05d7b7](https://github.com/IDuxFE/idux/commit/a05d7b7872cedb8317b039bb8f978344fb2af59d))
- **comp:tooltip,comp:tree,comp:tree-select:** add offset prop ([#1221](https://github.com/IDuxFE/idux/issues/1221)) ([f99028f](https://github.com/IDuxFE/idux/commit/f99028ffc1a75dc8f8a843ddc6d8cc6e0ac4ff66))
- **pro:search:** temp state is now cleared after blur, add merge items demo ([#1253](https://github.com/IDuxFE/idux/issues/1253)) ([775901e](https://github.com/IDuxFE/idux/commit/775901e33c083e0bbd963de6bd566067362c5f0d))

## [1.0.2](https://github.com/IDuxFE/idux/compare/v1.0.1...v1.0.2) (2022-10-29)

### Bug Fixes

- update components style according to UI design ([#1232](https://github.com/IDuxFE/idux/issues/1232)) ([4bf61fb](https://github.com/IDuxFE/idux/commit/4bf61fbda7bf277f546e65fc0945a9720d6aeb1c))

## [1.0.1](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.9...v1.0.1) (2022-10-21)

### Bug Fixes

- **pro:textarea:** disabled not working ([#1215](https://github.com/IDuxFE/idux/issues/1215)) ([8dc1f8d](https://github.com/IDuxFE/idux/commit/8dc1f8df6d82162327f22b87996334f74064e8b2))
- **pro:transfer:** strategy parent with flat-target-data not working ([#1204](https://github.com/IDuxFE/idux/issues/1204)) ([54d197b](https://github.com/IDuxFE/idux/commit/54d197b2a1aa48a4a475e90cfde8dca3c5cb2f2a))

### Features

- **cdk:popper:** migrate popperjs to floating-ui ([#1191](https://github.com/IDuxFE/idux/issues/1191)) ([d4c582e](https://github.com/IDuxFE/idux/commit/d4c582ec27a65752804d74911fa258487559e814))

### BREAKING CHANGES

- **cdk:popper:** modifiers is now changed to middlewares
- **cdk:popper:** forceUpdate is now removed
- **cdk:popper:** onFirstUpdate is now removed

# [1.0.0](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.9...v1.0.0) (2022-10-14)

### Features

- **cdk:popper:** migrate popperjs to floating-ui ([#1191](https://github.com/IDuxFE/idux/issues/1191)) ([7eb77d6](https://github.com/IDuxFE/idux/commit/7eb77d66cb5063e5724c1bf2666a2e33492e09e6))

### BREAKING CHANGES

- **cdk:popper:** modifiers is now changed to middlewares
- **cdk:popper:** forceUpdate is now removed
- **cdk:popper:** onFirstUpdate is now removed

# [1.0.0-rc.9](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.8...v1.0.0-rc.9) (2022-10-09)

### Bug Fixes

- **pro:layout:** correct router-link's path ([#1179](https://github.com/IDuxFE/idux/issues/1179)) ([#1181](https://github.com/IDuxFE/idux/issues/1181)) ([fd24ccf](https://github.com/IDuxFE/idux/commit/fd24ccfde67ea2a59d5754db9b8222b29477176c))
- **pro:layout:** remove [display: flex] from [menu-vertical] ([#1178](https://github.com/IDuxFE/idux/issues/1178)) ([#1180](https://github.com/IDuxFE/idux/issues/1180)) ([b839427](https://github.com/IDuxFE/idux/commit/b83942770675b57d949434f6f9f496ae7602f74d))
- **pro:search:** fix onVisibleChange and segment state initialization ([#1162](https://github.com/IDuxFE/idux/issues/1162)) ([d8ea09c](https://github.com/IDuxFE/idux/commit/d8ea09c285e765b1f364f19da7f19d81897ddf8a))
- **pro:search:** pro search btn click shoudn't trigger foucs ([#1185](https://github.com/IDuxFE/idux/issues/1185)) ([bbb1e41](https://github.com/IDuxFE/idux/commit/bbb1e416cf0ac0ef6c7720f6dd02a9562bc4fb38))

### Features

- **comp:\*:** all input components support setting status ([#1171](https://github.com/IDuxFE/idux/issues/1171)) ([c0935b2](https://github.com/IDuxFE/idux/commit/c0935b2becc61380ed06042f2f43cbeed3220228)), closes [#1099](https://github.com/IDuxFE/idux/issues/1099)
- **comp:table:** add `scrollToTopOnChange` support ([#1169](https://github.com/IDuxFE/idux/issues/1169)) ([464bf40](https://github.com/IDuxFE/idux/commit/464bf404065e75ac63ac7c32035960580bb6586b))
- **comp:transfer:** export IxTransferList component ([#1143](https://github.com/IDuxFE/idux/issues/1143)) ([fba1a5d](https://github.com/IDuxFE/idux/commit/fba1a5de84b3cf0378176d9d826fd9f997d9989c))
- **comp:tree:** cascaderStratery instead of cascade and checkStratety ([#1172](https://github.com/IDuxFE/idux/issues/1172)) ([aedf5d8](https://github.com/IDuxFE/idux/commit/aedf5d865ad34b203bb1695cffcb4883ed6aa039))
- **pro:transfer:** add cascade strategy `off` ([#1186](https://github.com/IDuxFE/idux/issues/1186)) ([1df412f](https://github.com/IDuxFE/idux/commit/1df412f927e0b5453cf617eb603d8917ddcb442d))
- **pro:transfer:** add tree transfer `cascadeStrategy` support ([#1155](https://github.com/IDuxFE/idux/issues/1155)) ([470bf8d](https://github.com/IDuxFE/idux/commit/470bf8d982a5f99670eaa0b5342f88220b4997f7))

### BREAKING CHANGES

- **comp:tree:** `cascade` and `checkStrategy` are deprecated, please use `cascaderStrategy` instead.
- **comp:transfer:** '.ix-transfer-list' class now changed to '.ix-transfer-content'

# [1.0.0-rc.8](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.7...v1.0.0-rc.8) (2022-09-23)

### Bug Fixes

- **pro:transfer:** modify treeProps and tableProps type ([#1149](https://github.com/IDuxFE/idux/issues/1149)) ([93509fd](https://github.com/IDuxFE/idux/commit/93509fda2c539064173b16620fae60600419c25e))
- **pro:transfer:** transfer tree should show scrollbar ([#1156](https://github.com/IDuxFE/idux/issues/1156)) ([fc16803](https://github.com/IDuxFE/idux/commit/fc16803aad4a571343fb7fbcbf4ed95015fe9a54))

### Features

- **pro:search:** add focus and blur support ([#1151](https://github.com/IDuxFE/idux/issues/1151)) ([da8d6db](https://github.com/IDuxFE/idux/commit/da8d6db1b11ee75dd7a1989a5fc99cfe5bb771a6))
- **pro:table:** layout tool supports setting size and searching ([#1157](https://github.com/IDuxFE/idux/issues/1157)) ([667a392](https://github.com/IDuxFE/idux/commit/667a392b19c4d054412c2992e4939832281df162))

# [1.0.0-rc.7](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.6...v1.0.0-rc.7) (2022-09-16)

### Bug Fixes

- **comp:table:** trigger scroll when column widths changes ([#1142](https://github.com/IDuxFE/idux/issues/1142)) ([ee57728](https://github.com/IDuxFE/idux/commit/ee577283b55b4d256a64626282f095a4ac857443)), closes [#1140](https://github.com/IDuxFE/idux/issues/1140)
- **pro:search:** clickside should exclude overlay container ([#1137](https://github.com/IDuxFE/idux/issues/1137)) ([bd2d1b9](https://github.com/IDuxFE/idux/commit/bd2d1b91c0b84804c167d2b9ff5c124ad1747664))
- **pro:table:** pining the position of the layout tool ([#1147](https://github.com/IDuxFE/idux/issues/1147)) ([d0b82d5](https://github.com/IDuxFE/idux/commit/d0b82d595a4cf3fb30f78956d5375fc7113a5efc))
- **pro:transfer:** remove icon isn't displayed ([#1144](https://github.com/IDuxFE/idux/issues/1144)) ([9fe89d6](https://github.com/IDuxFE/idux/commit/9fe89d67b355e26177eea41156eeb5c350893c15))

### Features

- **comp:popconfirm:** support custom content ([#1138](https://github.com/IDuxFE/idux/issues/1138)) ([50a1d00](https://github.com/IDuxFE/idux/commit/50a1d0098cbee73a9304222072229fbd2d456486))
- **pro:search:** add container zIndex support ([#1145](https://github.com/IDuxFE/idux/issues/1145)) ([ceda7be](https://github.com/IDuxFE/idux/commit/ceda7be8e078064e6d0813eefbcb2586796753df))

# [1.0.0-rc.6](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.5...v1.0.0-rc.6) (2022-09-13)

### Bug Fixes

- **comp:locales,pro:locales:** update the english locale for all components ([#1115](https://github.com/IDuxFE/idux/issues/1115)) ([6e18697](https://github.com/IDuxFE/idux/commit/6e18697ff12f66fa3e5714cfe7f8055e6236b1e1))
- **comp:table:** sync design and add class to all table elements ([#1117](https://github.com/IDuxFE/idux/issues/1117)) ([474c91c](https://github.com/IDuxFE/idux/commit/474c91c5463a611e6a8972834dcd566e45e60466))
- **pro:search:** error when deleting previsous item with backspace ([#1130](https://github.com/IDuxFE/idux/issues/1130)) ([670033c](https://github.com/IDuxFE/idux/commit/670033cafcfa187e57fa533da55d5c19bf9096d2))
- **pro:tree:** collapse icon style error ([#1114](https://github.com/IDuxFE/idux/issues/1114)) ([af647b0](https://github.com/IDuxFE/idux/commit/af647b0cefb2758b09a0da6f6cfce2832d5d9b1a))

### Features

- **cdk:scroll, comp:transfer, pro:transfer:** add autoHeight support for virtualScroll, refactor transfer style ([#920](https://github.com/IDuxFE/idux/issues/920)) ([5eb8553](https://github.com/IDuxFE/idux/commit/5eb855344addd3c3627ca902add2ca0f8b62881f))
- **comp:\*:** container is supported for all overlay related components ([#1122](https://github.com/IDuxFE/idux/issues/1122)) ([fe92709](https://github.com/IDuxFE/idux/commit/fe92709b6121ad1733429dbd03510f542336ff4d))

# [1.0.0-rc.5](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2022-09-02)

### Bug Fixes

- **comp:table:** sync design ([#1111](https://github.com/IDuxFE/idux/issues/1111)) ([c59d4de](https://github.com/IDuxFE/idux/commit/c59d4de028a039f7ad3a934a042a6b0ac84937b3))
- **pro:search:** onChange triggered timing ([#1097](https://github.com/IDuxFE/idux/issues/1097)) ([32cd2bd](https://github.com/IDuxFE/idux/commit/32cd2bd956371f43abae1c3e1a000657c4371495))
- **pro:search:** onItemRemove should emit searchValue ([#1094](https://github.com/IDuxFE/idux/issues/1094)) ([5fc5ea1](https://github.com/IDuxFE/idux/commit/5fc5ea123cfed7c32030f13e15f2cabdd15341e9))
- **pro:tree:** add height prop supports, update proTree header height and container padding ([#1112](https://github.com/IDuxFE/idux/issues/1112)) ([69fa736](https://github.com/IDuxFE/idux/commit/69fa736ae4bbd6d63e032353c3046cc1f29ff1a0))

### Features

- **cdk:click-outside:** add component and composition API usages ([#1092](https://github.com/IDuxFE/idux/issues/1092)) ([9e65136](https://github.com/IDuxFE/idux/commit/9e65136deb399cef7bfdf8da8802a716786e8fac))
- **comp:table:** sync design ([#1107](https://github.com/IDuxFE/idux/issues/1107)) ([b40fcb3](https://github.com/IDuxFE/idux/commit/b40fcb37141a8f19b46d4e85242c617d393b6cba))
- **pro:table:** support scrollTo ([#1093](https://github.com/IDuxFE/idux/issues/1093)) ([023f57a](https://github.com/IDuxFE/idux/commit/023f57a916478534def7629b664ac182e2e9e339))

# [1.0.0-rc.4](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2022-08-23)

### Bug Fixes

- **comp:form:** the content of form-item is block ([#1019](https://github.com/IDuxFE/idux/issues/1019)) ([#1088](https://github.com/IDuxFE/idux/issues/1088)) ([aef12af](https://github.com/IDuxFE/idux/commit/aef12af2072b6a2303747c5bac563b1182e6031f))
- **pro:textarea:** fix index column cell align-items ([#1085](https://github.com/IDuxFE/idux/issues/1085)) ([f8a58fc](https://github.com/IDuxFE/idux/commit/f8a58fc91d27cff297e49bbbb92876d8f0bfe1e0))
- **pro:textarea:** textarea el shouldn't show scrollbar ([#1080](https://github.com/IDuxFE/idux/issues/1080)) ([de7cc60](https://github.com/IDuxFE/idux/commit/de7cc60305b94cce1d490f6e1edbb3a2bc95a73a))

# [1.0.0-rc.3](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2022-08-17)

### Features

- **pro:textarea:** add IxProTextarea compoent ([#1074](https://github.com/IDuxFE/idux/issues/1074)) ([e4ae522](https://github.com/IDuxFE/idux/commit/e4ae522dd7bc454646ca3f5841b735b1c2fbfde7))

# [1.0.0-rc.2](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2022-08-08)

### Bug Fixes

- **comp:table:** fix layout tool conflicts ([#1051](https://github.com/IDuxFE/idux/issues/1051)) ([07d6719](https://github.com/IDuxFE/idux/commit/07d6719223f624c0688ef58fa30471cd5c6d21ca))
- **comp:transfer:** removing items absent from datasource works now ([#1054](https://github.com/IDuxFE/idux/issues/1054)) ([1abf7e9](https://github.com/IDuxFE/idux/commit/1abf7e9a7b9077fefd6fdd24eae67e9e5bcb1d3b))

### Features

- **comp:tree:** add checkOnClick prop ([#1052](https://github.com/IDuxFE/idux/issues/1052)) ([5aa4be4](https://github.com/IDuxFE/idux/commit/5aa4be4328c38f5a06a6f5df084c355da993bca5))
- **pro:search:** add validate function ([#1056](https://github.com/IDuxFE/idux/issues/1056)) ([79c2d09](https://github.com/IDuxFE/idux/commit/79c2d09f207948a636c403b04c1d1a85617c3557))

# [1.0.0-rc.1](https://github.com/IDuxFE/idux/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2022-07-29)

**Note:** Version bump only for package @idux/pro

# [1.0.0-rc.0](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.21...v1.0.0-rc.0) (2022-07-29)

### Bug Fixes

- **pro:search:** fix overflowed style to be overlap with elements below，fix overlay position update on item deleted ([#1030](https://github.com/IDuxFE/idux/issues/1030)) ([a6190aa](https://github.com/IDuxFE/idux/commit/a6190aa660446bddc07b8a6a8119b10ab77c9e83))
- **pro:tree:** onSearch cannot get the latest searchValue value ([#1043](https://github.com/IDuxFE/idux/issues/1043)) ([29adb34](https://github.com/IDuxFE/idux/commit/29adb34bfd2c362504b8d77d7a75e8e9b793d6bb))

### Features

- **comp:table:** ellipsis supports hidden the title ([#1044](https://github.com/IDuxFE/idux/issues/1044)) ([70a6d4a](https://github.com/IDuxFE/idux/commit/70a6d4a338dfb6bb3d7b1bbcf537bcd1fad4e0ab)), closes [#1035](https://github.com/IDuxFE/idux/issues/1035)

# [1.0.0-beta.21](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2022-07-21)

### Features

- **pro:form:** add ProForm component ([#1028](https://github.com/IDuxFE/idux/issues/1028)) ([a385711](https://github.com/IDuxFE/idux/commit/a3857116b88009a9c92d2a29d0a1dd0d4b016956)), closes [#981](https://github.com/IDuxFE/idux/issues/981)
- **pro:transfer:** add tree loadChildren support ([#1009](https://github.com/IDuxFE/idux/issues/1009)) ([9d43fb2](https://github.com/IDuxFE/idux/commit/9d43fb217e50cbff761de2c82ade417b27c8f66b))

# [1.0.0-beta.20](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2022-07-11)

### Bug Fixes

- **pro:table:** not working with customAdditional ([#1004](https://github.com/IDuxFE/idux/issues/1004)) ([036a691](https://github.com/IDuxFE/idux/commit/036a6914c171600244f7b158b9574e9bc6a9ba88))

### Features

- **comp:transfer:** label slot renders source and target seperately ([#1006](https://github.com/IDuxFE/idux/issues/1006)) ([604e8d9](https://github.com/IDuxFE/idux/commit/604e8d99044e61839dade0e1cc752c751587ce3e))

### BREAKING CHANGES

- **comp:transfer:** label slot params change to { item, isSource }

# [1.0.0-beta.19](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2022-07-05)

### Bug Fixes

- **pro:transfer:** fix overflowed text style ([#996](https://github.com/IDuxFE/idux/issues/996)) ([ef26025](https://github.com/IDuxFE/idux/commit/ef260251c6eb79100a4234370f144edfc5a13baa))

### Features

- **pro:search:** add ProSearch component ([#989](https://github.com/IDuxFE/idux/issues/989)) ([ed16c45](https://github.com/IDuxFE/idux/commit/ed16c45a147d0e38b43b60cd91ae0561b7a3535d))

# [1.0.0-beta.18](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2022-06-28)

### Bug Fixes

- **pro:layout:** update the scroll style on the dark theme ([#982](https://github.com/IDuxFE/idux/issues/982)) ([756c38b](https://github.com/IDuxFE/idux/commit/756c38b8b85f8733260a15d2be95297fb4b831c0))

# [1.0.0-beta.17](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2022-06-23)

### Bug Fixes

- **comp:menu:** update hover style ([#967](https://github.com/IDuxFE/idux/issues/967)) ([4bda54b](https://github.com/IDuxFE/idux/commit/4bda54be6adbad21da0e11c133cf8318f59450db))

# [1.0.0-beta.16](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2022-06-17)

### Bug Fixes

- **cdk:resize:** performance problem ([#963](https://github.com/IDuxFE/idux/issues/963)) ([52e2eb8](https://github.com/IDuxFE/idux/commit/52e2eb8029d78c2fd5273727cef46f5e402b6785))
- **pro:transfer:** fix flat tree transfer render when labelKey provided ([#958](https://github.com/IDuxFE/idux/issues/958)) ([8319ac0](https://github.com/IDuxFE/idux/commit/8319ac00e34fe10e5fa7bab888ae2792b71f2150))

### BREAKING CHANGES

- **pro:transfer:** TransferBindings provide getKey as ComputedRef instead of getRowKey

# [1.0.0-beta.15](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2022-06-13)

### Features

- **comp:tree\*:** add draggableIcon prop ([#948](https://github.com/IDuxFE/idux/issues/948)) ([28b7031](https://github.com/IDuxFE/idux/commit/28b7031fe5325258d488abcf2c23cd611ecac802))
- **pro:table:** support resizable column ([#945](https://github.com/IDuxFE/idux/issues/945)) ([47b90dd](https://github.com/IDuxFE/idux/commit/47b90ddf514e2cf67d76d074b594c414f70b7c33))

# [1.0.0-beta.14](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2022-06-07)

### Features

- **cdk:drag-drop:** add useDraggable and CdkDraggable ([#939](https://github.com/IDuxFE/idux/issues/939)) ([7161d96](https://github.com/IDuxFE/idux/commit/7161d96e63a81bf7595f0cd5e03f31d77fd89273))

# [1.0.0-beta.13](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2022-05-30)

### Features

- **pro: table:** add IxProTable and IxProTableLayoutTool ([#936](https://github.com/IDuxFE/idux/issues/936)) ([688627f](https://github.com/IDuxFE/idux/commit/688627f256ef124be37a9cedf63ce21f288a3747))

# [1.0.0-beta.12](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2022-05-24)

### Bug Fixes

- **comp:all,pro:all,cdk:all:** add eslint import check ([#922](https://github.com/IDuxFE/idux/issues/922)) ([8bbbec1](https://github.com/IDuxFE/idux/commit/8bbbec178a51ad5707791db5ceb49f0547c84f95))

# [1.0.0-beta.11](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2022-05-23)

### Features

- **comp: tree,tree-select,pro-tree:** add getNode method ([#910](https://github.com/IDuxFE/idux/issues/910)) ([#916](https://github.com/IDuxFE/idux/issues/916)) ([82c929d](https://github.com/IDuxFE/idux/commit/82c929d46b63af31e4cab25deab485c11b630fc9))

# [1.0.0-beta.10](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2022-05-16)

### Bug Fixes

- **comp: select:** Add number to the type of label ([#901](https://github.com/IDuxFE/idux/issues/901)) ([5875e2d](https://github.com/IDuxFE/idux/commit/5875e2d9b64047c4375d7169e7d2f1d61c9a7bb2))

### Features

- **pro: tree:** add collapseIcon prop ([#900](https://github.com/IDuxFE/idux/issues/900)) ([e9bb42b](https://github.com/IDuxFE/idux/commit/e9bb42b18fc7c6fdd51b921387a1cd33a32557cf))

# [1.0.0-beta.9](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2022-05-09)

### Bug Fixes

- **comp: table:** update style with empty data ([#888](https://github.com/IDuxFE/idux/issues/888)) ([44c67aa](https://github.com/IDuxFE/idux/commit/44c67aae3858157b32d918a5102e183b8eaac97d))

### Features

- **comp: tree-select:** add expandAll and collapseAll methods ([#895](https://github.com/IDuxFE/idux/issues/895)) ([772e039](https://github.com/IDuxFE/idux/commit/772e03937069a076b5861235859497a7ffd0318b))
- **pro: tree:** add pro tree component ([#891](https://github.com/IDuxFE/idux/issues/891)) ([ffd80de](https://github.com/IDuxFE/idux/commit/ffd80de694377309b65fb569bb91f24d6ba8d514))

### BREAKING CHANGES

- **comp: tree-select:** setExpandAll was deprecated, please use collapseAll and
  expandAll instead.

# [1.0.0-beta.8](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2022-05-05)

### Features

- **comp: menu:** add customAdditional, getKey and overlayContainer ([#871](https://github.com/IDuxFE/idux/issues/871)) ([5064add](https://github.com/IDuxFE/idux/commit/5064addd4e359993a8a16943eb3cf1a9dbce340b))
- **comp: select:** add customAdditional, getKey and overlayContainer ([#868](https://github.com/IDuxFE/idux/issues/868)) ([d10f5e0](https://github.com/IDuxFE/idux/commit/d10f5e069cd48c8b8cabec829566c8425b32fc08))
- **comp: table:** add customAdditional to support cosutom row and cell ([#866](https://github.com/IDuxFE/idux/issues/866)) ([e79b55b](https://github.com/IDuxFE/idux/commit/e79b55bf7896534e98597e5b7e4bfaf2fc139a33))
- **comp: transfer:** add customAdditional ([#872](https://github.com/IDuxFE/idux/issues/872)) ([84c4e61](https://github.com/IDuxFE/idux/commit/84c4e615c6df7e5239248d94bd4c237a65da680b))
- **comp: tree-selct:** add customAdditional,getKey and overlayContainer ([#869](https://github.com/IDuxFE/idux/issues/869)) ([593f86f](https://github.com/IDuxFE/idux/commit/593f86fe3c49526e8fcc4352db0afdb986d9fd57))

### BREAKING CHANGES

- **comp: menu:** `dataSource.additional` was deprecated, please use `customAdditional` instead. `target` was deprecated, please use `overlayContainer` instead.
- **comp: tree-selct:** `nodeKey` was deprecated, please use `getKey`
  instead. `target` was deprecated, please use `overlayContainer` instead. `dataSource.additional` was
  deprecated, please use `customAdditional` instead.
- **comp: select:** `compareFn` was removed. `target` was deprecated, please use `overlayContainer`
  instead. `valueKey` was deprecated, please use `getKey` instead. `dataSource.additional` was
  deprecated, please use `customAdditional` instead.
- **comp: table:** `tags`, `rowClassName` and `column.additional` are deprecated, please use `customAdditional` instead

# [1.0.0-beta.7](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.5...v1.0.0-beta.7) (2022-04-24)

### Features

- **comp: all:** add seer themes ([#850](https://github.com/IDuxFE/idux/issues/850)) ([789a266](https://github.com/IDuxFE/idux/commit/789a266f117b34c61efd8d52f4c325e5f49c8622))

# [1.0.0-beta.6](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2022-04-21)

**Note:** Version bump only for package @idux/pro

# [1.0.0-beta.5](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2022-04-18)

### Bug Fixes

- **cdk:scroll:** turn to native scrollbar ([#847](https://github.com/IDuxFE/idux/issues/847)) ([95df1b9](https://github.com/IDuxFE/idux/commit/95df1b9e3b0d44b924fff8f81ebe7eef1a41b352))

### Features

- **comp:date-picker:** add datetime type ([#837](https://github.com/IDuxFE/idux/issues/837)) ([6200d5a](https://github.com/IDuxFE/idux/commit/6200d5a1dfbb74005f9edbd0dd0d2f15ce296660))

# [1.0.0-beta.4](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2022-04-11)

**Note:** Version bump only for package @idux/pro

# [1.0.0-beta.3](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2022-03-27)

### Features

- **pro:transfer:** add pro transfer compoennt ([#815](https://github.com/IDuxFE/idux/issues/815)) ([e367009](https://github.com/IDuxFE/idux/commit/e367009c0b7cec277606574c1f485b43f094145b))

# [1.0.0-beta.2](https://github.com/IDuxFE/idux/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2022-03-20)

### Bug Fixes

- **comp:menu:** cache expandedKeys when collapse changed ([#805](https://github.com/IDuxFE/idux/issues/805)) ([48bacb2](https://github.com/IDuxFE/idux/commit/48bacb2140140c2a984ead14328dcb28d7494b99))

# [1.0.0-beta.1](https://github.com/IDuxFE/idux/compare/v1.0.0-alpha.6...v1.0.0-beta.1) (2022-03-14)

### Features

- **pro:layout:** add siderHover and compress props ([#759](https://github.com/IDuxFE/idux/issues/759)) ([faf0913](https://github.com/IDuxFE/idux/commit/faf09130c895a82ca65eee8a82dc082e36cc9247))

# [1.0.0-beta.0](https://github.com/IDuxFE/idux/compare/v1.0.0-alpha.6...v1.0.0-beta.0) (2022-03-01)

### Features

- **pro:layout:** add siderHover and compress props ([#759](https://github.com/IDuxFE/idux/issues/759)) ([faf0913](https://github.com/IDuxFE/idux/commit/faf09130c895a82ca65eee8a82dc082e36cc9247))

# [1.0.0-alpha.6](https://github.com/IDuxFE/idux/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2022-02-18)

**Note:** Version bump only for package @idux/pro

# [1.0.0-alpha.5](https://github.com/IDuxFE/idux/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2022-01-24)

### Features

- **pro:layout:** suppor all slots of IxMenu ([#738](https://github.com/IDuxFE/idux/issues/738)) ([9745c32](https://github.com/IDuxFE/idux/commit/9745c329a962faa2499f0003c8badab33b9dcabc))

# [1.0.0-alpha.4](https://github.com/IDuxFE/idux/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2022-01-14)

### Features

- **comp:dropdown:** support hideOnClick ([#715](https://github.com/IDuxFE/idux/issues/715)) ([fbbe478](https://github.com/IDuxFE/idux/commit/fbbe4786b3f47b1924c9d7b404306f424111fbd4))

# [1.0.0-alpha.3](https://github.com/IDuxFE/idux/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2021-12-30)

**Note:** Version bump only for package @idux/pro

# [1.0.0-alpha.2](https://github.com/IDuxFE/idux/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2021-12-27)

**Note:** Version bump only for package @idux/pro

# [1.0.0-alpha.1](https://github.com/IDuxFE/idux/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2021-12-25)

### Bug Fixes

- **comp:all:** add default.variable.less ([#646](https://github.com/IDuxFE/idux/issues/646)) ([9eced60](https://github.com/IDuxFE/idux/commit/9eced60b9ff9ba27540dc165418d1110b023e264))
- **pro:layout:** fix sider border-right style ([#659](https://github.com/IDuxFE/idux/issues/659)) ([bcdffdb](https://github.com/IDuxFE/idux/commit/bcdffdba5a52f0b14e62261b8f26d5115945a4bb))

# 1.0.0-alpha.0 (2021-12-17)

### Features

- Hello @idux.
