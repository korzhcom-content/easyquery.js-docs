---
title: PivotTableFacet class
slug: api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class
sidebar:
  order: 100
---

## Extends
[ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#public-properties-1)
- [title](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#title)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#protected-properties-1)
- [canDisplayFlag](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#candisplayflag)
- [container](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#container)
- [contentDiv](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#contentdiv)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#cssprefix)
- [dialogTitle](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#dialogtitle)
- [grid](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#grid)
- [options](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#options)
- [pivotTable](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#pivottable)
- [settings](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#settings)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#slot)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#public-methods-1)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#destroy)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#getcontext)
- [getQuery](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#getquery)
- [getSettings](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#getsettings)
- [getType](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#gettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#init)
- [loadFromData](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#loadfromdata)
- [onResize](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#onresize)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#refresh)
- [saveToData](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#savetodata)
- [showSettingsDialog](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#showsettingsdialog)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#protected-methods-1)
- [canDisplay](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#candisplay)
- [getContextDataTable](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#getcontextdatatable)
- [getDialogService](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#getdialogservice)
- [hideUnableDisplayMessage](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#hideunabledisplaymessage)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#refreshcore)
- [renderDialogContent](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#renderdialogcontent)
- [renderFormFields](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#renderformfields)
- [showUnableDisplayMessage](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#showunabledisplaymessage)
- [submitSettingsDialog](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class#submitsettingsdialog)


## Constructors

---
#### constructor

⊕ new PivotTableFacet(container: [FacetContainer](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class),options?: `any`): [PivotTableFacet](api-reference-7x/easyquery-packages/ui-package/classes/pivottablefacet-class)

#### Parameters:
- container: [FacetContainer](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class)
- options: `any`, *Optional* 


---

## Public Properties

---
### title

● title: `string` = ` i18n.getText('Facets', 'Pivot', 'FacetTitle')`

---
## Protected Properties

---
### canDisplayFlag

● canDisplayFlag: `boolean` = `true`

---
### container

● container: [FacetContainer](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class)

---
### contentDiv

● contentDiv: `HTMLElement`

---
### cssPrefix

● cssPrefix: `string` = `"eqjs-facet"`

---
### dialogTitle

● dialogTitle: `string` = ` i18n.getText('Facets', 'Pivot', 'DlgTitle')`

---
### grid

● grid: `EasyGrid`

---
### options

● options: `any`

---
### pivotTable

● pivotTable: `EasyDataTable` = ` new EasyDataTable()`

---
### settings

● settings: `CrossTabOptions`

---
### slot

● slot?: `HTMLElement`

---
## Public Methods

---
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### getContext
▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### getSettings
▸ getSettings(): `CrossTabOptions`


**Returns** `CrossTabOptions`


---
### getType
▸ getType(): [FacetType](api-reference-7x/easyquery-packages/ui-package/enumerations/facettype-enum)


**Returns** [FacetType](api-reference-7x/easyquery-packages/ui-package/enumerations/facettype-enum)


---
### init
▸ init(slot: `HTMLElement`): `void`

#### Parameters:
- slot: `HTMLElement`


**Returns** `void`


---
### loadFromData
▸ loadFromData(data: `any`): `void`

#### Parameters:
- data: `any`


**Returns** `void`


---
### onResize
▸ onResize(): `void`


**Returns** `void`


---
### refresh
▸ refresh(): `void`


**Returns** `void`


---
### saveToData
▸ saveToData(): `any`


**Returns** `any`


---
### showSettingsDialog
▸ showSettingsDialog(): `Promise`&lt;`boolean`&gt;


**Returns** `Promise`&lt;`boolean`&gt;


---
## Protected Methods

---
### canDisplay
▸ canDisplay(): `boolean`


**Returns** `boolean`


---
### getContextDataTable
▸ getContextDataTable(): `EasyDataTable`


**Returns** `EasyDataTable`


---
### getDialogService
▸ getDialogService(): `DialogService`


**Returns** `DialogService`


---
### hideUnableDisplayMessage
▸ hideUnableDisplayMessage(): `void`


**Returns** `void`


---
### refreshCore
▸ refreshCore(): `void`


**Returns** `void`


---
### renderDialogContent
▸ renderDialogContent(): `HTMLElement`


**Returns** `HTMLElement`


---
### renderFormFields
▸ renderFormFields(form: `HTMLElement`,fieldsContainer: `HTMLElement`): `void`

#### Parameters:
- form: `HTMLElement`
- fieldsContainer: `HTMLElement`


**Returns** `void`


---
### showUnableDisplayMessage
▸ showUnableDisplayMessage(message?: `string`): `void`

#### Parameters:
- message: `string`, *Optional* 


**Returns** `void`


---
### submitSettingsDialog
▸ submitSettingsDialog(): `boolean`


**Returns** `boolean`


---
