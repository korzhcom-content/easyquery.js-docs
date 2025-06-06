---
title: ResultFacet class
slug: api-reference-7x/@easyquery/ui-package/classes/resultfacet-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#public-properties-1)
- [title](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#title)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#protected-properties-1)
- [canDisplayFlag](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#candisplayflag)
- [container](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#container)
- [contentDiv](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#contentdiv)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#cssprefix)
- [dialogTitle](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#dialogtitle)
- [options](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#options)
- [settings](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#settings)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#slot)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#public-methods-1)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#destroy)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#getcontext)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#getquery)
- [getSettings](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#getsettings)
- [getType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#gettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#init)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#loadfromdata)
- [onResize](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#onresize)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#refresh)
- [saveToData](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#savetodata)
- [showSettingsDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#showsettingsdialog)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#protected-methods-1)
- [canDisplay](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#candisplay)
- [getDialogService](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#getdialogservice)
- [hideUnableDisplayMessage](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#hideunabledisplaymessage)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#refreshcore)
- [renderDialogContent](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#renderdialogcontent)
- [renderFormFields](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#renderformfields)
- [showUnableDisplayMessage](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#showunabledisplaymessage)
- [submitSettingsDialog](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class/#submitsettingsdialog)


## Constructors

---
#### constructor

⊕ new ResultFacet(container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class),options?: `any`): [ResultFacet](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/resultfacet-class)

#### Parameters:
- container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class)
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

● container: [FacetContainer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/facetcontainer-class)

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
