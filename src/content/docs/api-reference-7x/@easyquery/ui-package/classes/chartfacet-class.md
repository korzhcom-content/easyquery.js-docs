---
title: ChartFacet class
slug: api-reference-7x/@easyquery/ui-package/classes/chartfacet-class
sidebar:
  order: 100
---

## Extends
[ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#public-properties-1)
- [title](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#title)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#protected-properties-1)
- [canDisplayFlag](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#candisplayflag)
- [chart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#chart)
- [container](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#container)
- [contentDiv](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#contentdiv)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#cssprefix)
- [dialogTitle](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#dialogtitle)
- [options](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#options)
- [settings](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#settings)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#slot)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#public-methods-1)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#getcontext)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#getquery)
- [getSettings](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#getsettings)
- [getType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#gettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#init)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#loadfromdata)
- [onResize](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#onresize)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#refresh)
- [saveToData](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#savetodata)
- [showSettingsDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#showsettingsdialog)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#protected-methods-1)
- [canDisplay](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#candisplay)
- [getDialogService](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#getdialogservice)
- [hideUnableDisplayMessage](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#hideunabledisplaymessage)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#refreshcore)
- [renderDialogContent](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#renderdialogcontent)
- [renderFormFields](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#renderformfields)
- [showUnableDisplayMessage](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#showunabledisplaymessage)
- [submitSettingsDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class/#submitsettingsdialog)


## Constructors

---
#### constructor

⊕ new ChartFacet(container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class),options?: `any`): [ChartFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartfacet-class)

#### Parameters:
- container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class)
- options: `any`, *Optional* 


---

## Public Properties

---
### title

● title: `string` = ` i18n.getText('Facets', 'Chart', 'FacetTitle')`

---
## Protected Properties

---
### canDisplayFlag

● canDisplayFlag: `boolean` = `true`

---
### chart

● chart: [ChartWidget](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/chartwidget-class)

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

● dialogTitle: `string` = ` i18n.getText('Facets', 'Chart', 'DlgTitle')`

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
