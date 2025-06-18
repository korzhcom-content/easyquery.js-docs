---
title: ColumnRendererSB class
slug: api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#protected-properties-1)
- [bar](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#bar)
- [baseAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#baseattr)
- [column](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#column)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#element)
- [functionMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#functionmenu)
- [isMouseOverBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#ismouseoverblock)
- [keepShowingButtons](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#keepshowingbuttons)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#public-methods-1)
- [buttonSortingClickHandler](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#buttonsortingclickhandler)
- [fireColumnChanged](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#firecolumnchanged)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#protected-methods-1)
- [getAttribute](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#getattribute)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#getclassestoadd)
- [getDefaultCaption](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#getdefaultcaption)
- [getDefaultTitleText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#getdefaulttitletext)
- [getUIS](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#getuis)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#iseditable)
- [renderCaptionBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#rendercaptionblock)
- [renderSortingButton](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class/#rendersortingbutton)


## Constructors

---
#### constructor

⊕ new ColumnRendererSB(bar: [SortingBar](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class),column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class),slot?: `HTMLDivElement`): [ColumnRendererSB](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/columnrenderersb-class)

#### Parameters:
- bar: [SortingBar](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class)
- column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### bar

● bar: [SortingBar](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/sortingbar-class)

---
### baseAttr

● baseAttr: [EntityAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entityattr-class)

---
### column

● column: [QueryColumn](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/querycolumn-class)

---
### element

● element: `HTMLDivElement`

---
### functionMenu

● functionMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class) = ` null`

---
### isMouseOverBlock

● isMouseOverBlock: `boolean` = `false`

---
### keepShowingButtons

● keepShowingButtons: `boolean` = `false`

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

---
### buttonSortingClickHandler
▸ buttonSortingClickHandler(ev: `Event`,anchor: `HTMLDivElement`): `boolean`

#### Parameters:
- ev: `Event`
- anchor: `HTMLDivElement`


**Returns** `boolean`


---
### fireColumnChanged
▸ fireColumnChanged(): `void`


**Returns** `void`


---
### refresh
▸ refresh(): `void`


**Returns** `void`


---
### render
▸ render(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
## Protected Methods

---
### getAttribute
▸ getAttribute(): [EntityAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entityattr-class)


**Returns** [EntityAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entityattr-class)


---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`


---
### getDefaultCaption
▸ getDefaultCaption(): `string`


**Returns** `string`


---
### getDefaultTitleText
▸ getDefaultTitleText(attr: [EntityAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attr: [EntityAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entityattr-class)


**Returns** `string`


---
### getUIS
▸ getUIS(): `boolean`


**Returns** `boolean`


---
### isEditable
▸ isEditable(): `boolean`


**Returns** `boolean`


---
### renderCaptionBlock
▸ renderCaptionBlock(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
### renderSortingButton
▸ renderSortingButton(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
