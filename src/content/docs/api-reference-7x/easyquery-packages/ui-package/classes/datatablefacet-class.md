---
title: DataTableFacet class
slug: api-reference-7x/easyquery-packages/ui-package/classes/datatablefacet-class
sidebar:
  order: 100
---

## Extends
[ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#public-properties-1)
- [title](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#title)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#protected-properties-1)
- [canDisplayFlag](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#candisplayflag)
- [container](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#container)
- [contentDiv](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#contentdiv)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#cssprefix)
- [dialogTitle](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#dialogtitle)
- [grid](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#grid)
- [options](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#options)
- [settings](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#settings)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#slot)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#public-methods-1)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#getcontext)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#getquery)
- [getSettings](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#getsettings)
- [getType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#gettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#init)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#loadfromdata)
- [onResize](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#onresize)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#refresh)
- [saveToData](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#savetodata)
- [showSettingsDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#showsettingsdialog)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#protected-methods-1)
- [canDisplay](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#candisplay)
- [getDialogService](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#getdialogservice)
- [hideUnableDisplayMessage](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#hideunabledisplaymessage)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#refreshcore)
- [reinitGrid](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#reinitgrid)
- [renderDialogContent](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#renderdialogcontent)
- [renderFormFields](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#renderformfields)
- [showUnableDisplayMessage](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#showunabledisplaymessage)
- [submitSettingsDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class/#submitsettingsdialog)


## Constructors

---
#### constructor

⊕ new DataTableFacet(container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class),options?: `any`): [DataTableFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datatablefacet-class)

#### Parameters:
- container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class)
- options: `any`, *Optional* 


---

## Public Properties

---
### title

● title: `string` = ` i18n.getText('Facets', 'DataTable', 'FacetTitle')`

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

● dialogTitle: `string` = ` i18n.getText('Facets', 'DataTable', 'DlgTitle')`

---
### grid

● grid: [Widget](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/widget-class) = ` null`

---
### options

● options: `any`

---
### settings

● settings: `any`

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
▸ getSettings(): `any`


**Returns** `any`


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
### reinitGrid
▸ reinitGrid(): `void`


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
