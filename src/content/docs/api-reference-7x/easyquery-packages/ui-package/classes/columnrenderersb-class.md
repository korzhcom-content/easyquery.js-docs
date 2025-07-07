---
title: ColumnRendererSB class
slug: api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#protected-properties-1)
- [bar](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#bar)
- [baseAttr](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#baseattr)
- [column](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#column)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#element)
- [functionMenu](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#functionmenu)
- [isMouseOverBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#ismouseoverblock)
- [keepShowingButtons](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#keepshowingbuttons)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#public-methods-1)
- [buttonSortingClickHandler](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#buttonsortingclickhandler)
- [fireColumnChanged](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#firecolumnchanged)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#protected-methods-1)
- [getAttribute](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#getattribute)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#getclassestoadd)
- [getDefaultCaption](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#getdefaultcaption)
- [getDefaultTitleText](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#getdefaulttitletext)
- [getUIS](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#getuis)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#iseditable)
- [renderCaptionBlock](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#rendercaptionblock)
- [renderSortingButton](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class#rendersortingbutton)


## Constructors

---
#### constructor

⊕ new ColumnRendererSB(bar: [SortingBar](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class),column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class),slot?: `HTMLDivElement`): [ColumnRendererSB](api-reference-7x/easyquery-packages/ui-package/classes/columnrenderersb-class)

#### Parameters:
- bar: [SortingBar](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class)
- column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### bar

● bar: [SortingBar](api-reference-7x/easyquery-packages/ui-package/classes/sortingbar-class)

---
### baseAttr

● baseAttr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)

---
### column

● column: [QueryColumn](api-reference-7x/easyquery-packages/core-package/classes/querycolumn-class)

---
### element

● element: `HTMLDivElement`

---
### functionMenu

● functionMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class) = ` null`

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
▸ getAttribute(): [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


**Returns** [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


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
▸ getDefaultTitleText(attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attr: [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


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
