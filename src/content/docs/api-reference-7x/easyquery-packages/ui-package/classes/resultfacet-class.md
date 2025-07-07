---
title: ResultFacet class
slug: api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#public-properties-1)
- [title](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#title)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#protected-properties-1)
- [canDisplayFlag](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#candisplayflag)
- [container](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#container)
- [contentDiv](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#contentdiv)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#cssprefix)
- [dialogTitle](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#dialogtitle)
- [options](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#options)
- [settings](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#settings)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#slot)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#public-methods-1)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#destroy)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#getcontext)
- [getQuery](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#getquery)
- [getSettings](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#getsettings)
- [getType](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#gettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#init)
- [loadFromData](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#loadfromdata)
- [onResize](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#onresize)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#refresh)
- [saveToData](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#savetodata)
- [showSettingsDialog](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#showsettingsdialog)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#protected-methods-1)
- [canDisplay](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#candisplay)
- [getDialogService](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#getdialogservice)
- [hideUnableDisplayMessage](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#hideunabledisplaymessage)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#refreshcore)
- [renderDialogContent](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#renderdialogcontent)
- [renderFormFields](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#renderformfields)
- [showUnableDisplayMessage](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#showunabledisplaymessage)
- [submitSettingsDialog](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class#submitsettingsdialog)


## Constructors

---
#### constructor

⊕ new ResultFacet(container: [FacetContainer](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class),options?: `any`): [ResultFacet](api-reference-7x/easyquery-packages/ui-package/classes/resultfacet-class)

#### Parameters:
- container: [FacetContainer](api-reference-7x/easyquery-packages/ui-package/classes/facetcontainer-class)
- options: `any`, *Optional* 


---

## Public Properties

---
### title

● title: `string` = ` i18n.getText('Facets', 'DefaultFacetTitle')`

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

● dialogTitle: `string` = ` i18n.getText('Facets', 'DefaultDlgTitle')`

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
▸ destroy(): `any`


**Returns** `any`


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
▸ refreshCore(): `any`


**Returns** `any`


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
