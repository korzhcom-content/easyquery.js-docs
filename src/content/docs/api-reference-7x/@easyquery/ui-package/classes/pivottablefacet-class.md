---
title: PivotTableFacet class
slug: api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class
sidebar:
  order: 100
---

## Extends
[ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#public-properties-1)
- [title](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#title)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#protected-properties-1)
- [canDisplayFlag](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#candisplayflag)
- [container](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#container)
- [contentDiv](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#contentdiv)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#cssprefix)
- [dialogTitle](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#dialogtitle)
- [grid](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#grid)
- [options](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#options)
- [pivotTable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#pivottable)
- [settings](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#settings)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#slot)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#public-methods-1)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#getcontext)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#getquery)
- [getSettings](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#getsettings)
- [getType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#gettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#init)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#loadfromdata)
- [onResize](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#onresize)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#refresh)
- [saveToData](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#savetodata)
- [showSettingsDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#showsettingsdialog)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#protected-methods-1)
- [canDisplay](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#candisplay)
- [getContextDataTable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#getcontextdatatable)
- [getDialogService](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#getdialogservice)
- [hideUnableDisplayMessage](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#hideunabledisplaymessage)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#refreshcore)
- [renderDialogContent](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#renderdialogcontent)
- [renderFormFields](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#renderformfields)
- [showUnableDisplayMessage](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#showunabledisplaymessage)
- [submitSettingsDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class/#submitsettingsdialog)


## Constructors

---
#### constructor

⊕ new PivotTableFacet(container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class),options?: `any`): [PivotTableFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/pivottablefacet-class)

#### Parameters:
- container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class)
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

● container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class)

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
▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---
### getQuery
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


---
### getSettings
▸ getSettings(): `CrossTabOptions`


**Returns** `CrossTabOptions`


---
### getType
▸ getType(): [FacetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/enumerations/facettype-enum)


**Returns** [FacetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/enumerations/facettype-enum)


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
