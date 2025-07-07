---
title: ChartFacet class
slug: api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class
sidebar:
  order: 100
---

## Extends
[ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#public-properties-1)
- [title](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#title)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#protected-properties-1)
- [canDisplayFlag](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#candisplayflag)
- [chart](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#chart)
- [container](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#container)
- [contentDiv](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#contentdiv)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#cssprefix)
- [dialogTitle](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#dialogtitle)
- [options](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#options)
- [settings](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#settings)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#slot)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#public-methods-1)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#destroy)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#getcontext)
- [getQuery](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#getquery)
- [getSettings](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#getsettings)
- [getType](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#gettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#init)
- [loadFromData](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#loadfromdata)
- [onResize](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#onresize)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#refresh)
- [saveToData](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#savetodata)
- [showSettingsDialog](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#showsettingsdialog)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#protected-methods-1)
- [canDisplay](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#candisplay)
- [getDialogService](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#getdialogservice)
- [hideUnableDisplayMessage](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#hideunabledisplaymessage)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#refreshcore)
- [renderDialogContent](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#renderdialogcontent)
- [renderFormFields](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#renderformfields)
- [showUnableDisplayMessage](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#showunabledisplaymessage)
- [submitSettingsDialog](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class#submitsettingsdialog)


## Constructors

---
#### constructor

⊕ new ChartFacet(container: [FacetContainer](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class),options?: `any`): [ChartFacet](api-reference-7x/easyquery-packages/ui-package/classes/chartfacet-class)

#### Parameters:
- container: [FacetContainer](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class)
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

● chart: [ChartWidget](api-reference-7x/easyquery-packages/ui-package/classes/chartwidget-class)

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
▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### getSettings
▸ getSettings(): `any`


**Returns** `any`


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
