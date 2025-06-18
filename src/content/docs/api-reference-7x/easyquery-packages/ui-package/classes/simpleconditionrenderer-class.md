---
title: SimpleConditionRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/simpleconditionrenderer-class
sidebar:
  order: 100
---

## Extends
[ConditionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#protected-properties-1)
- [baseAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#baseattr)
- [buttonsBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#buttonsblock)
- [condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#condition)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#element)
- [isMouseOverBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#ismouseoverblock)
- [keepShowingButtons](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#keepshowingbuttons)
- [panel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#panel)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#protected-methods-1)
- [adjustButtonsVisibility](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#adjustbuttonsvisibility)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#clear)
- [coreRender](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#corerender)
- [enterButtonBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#enterbuttonblock)
- [getButtonsToShow](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#getbuttonstoshow)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#getclassestoadd)
- [getConditionMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#getconditionmenu)
- [getConditionMenuSelectedItems](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#getconditionmenuselecteditems)
- [hideButtons](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#hidebuttons)
- [isConditionActive](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#isconditionactive)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#iseditable)
- [leaveButtonBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#leavebuttonblock)
- [renderButtonsBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#renderbuttonsblock)
- [renderCheckbox](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#rendercheckbox)
- [renderConjunction](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#renderconjunction)
- [setConditionInJoin](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#setconditioninjoin)
- [setConditionParameterized](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#setconditionparameterized)
- [showButtons](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class/#showbuttons)


## Constructors

---
#### constructor

⊕ new SimpleConditionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class),condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class),slot?: `HTMLDivElement`): [SimpleConditionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/simpleconditionrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)
- condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### baseAttr

● baseAttr: [EntityAttr](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/entityattr-class)

---
### buttonsBlock

● buttonsBlock: `HTMLDivElement`

---
### condition

● condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class)

---
### element

● element: `HTMLDivElement`

---
### isMouseOverBlock

● isMouseOverBlock: `boolean`

---
### keepShowingButtons

● keepShowingButtons: `boolean`

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

---
### refresh
▸ refresh(): `void`


**Returns** `void`


---
### render
▸ render(autoAppear?: `boolean`): `HTMLDivElement`

#### Parameters:
- autoAppear: `boolean`, *Optional* 


**Returns** `HTMLDivElement`


---
## Protected Methods

---
### adjustButtonsVisibility
▸ adjustButtonsVisibility(): `void`


**Returns** `void`


---
### clear
▸ clear(): `void`


**Returns** `void`


---
### coreRender
▸ coreRender(autoAppear?: `boolean`): `void`

#### Parameters:
- autoAppear: `boolean`, *Optional* 


**Returns** `void`


---
### enterButtonBlock
▸ enterButtonBlock(): `void`


**Returns** `void`


---
### getButtonsToShow
▸ getButtonsToShow(): `Array`&lt;`string`&gt;


**Returns** `Array`&lt;`string`&gt;


---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`


---
### getConditionMenu
▸ getConditionMenu(): [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


---
### getConditionMenuSelectedItems
▸ getConditionMenuSelectedItems(): `Array`&lt;`string`&gt;


**Returns** `Array`&lt;`string`&gt;


---
### hideButtons
▸ hideButtons(): `void`


**Returns** `void`


---
### isConditionActive
▸ isConditionActive(): `boolean`


**Returns** `boolean`


---
### isEditable
▸ isEditable(): `boolean`


**Returns** `boolean`


---
### leaveButtonBlock
▸ leaveButtonBlock(): `void`


**Returns** `void`


---
### renderButtonsBlock
▸ renderButtonsBlock(): `HTMLElement`


**Returns** `HTMLElement`


---
### renderCheckbox
▸ renderCheckbox(): `HTMLElement`


**Returns** `HTMLElement`


---
### renderConjunction
▸ renderConjunction(): `HTMLElement`


**Returns** `HTMLElement`


---
### setConditionInJoin
▸ setConditionInJoin(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
### setConditionParameterized
▸ setConditionParameterized(value: `boolean`): `void`

#### Parameters:
- value: `boolean`


**Returns** `void`


---
### showButtons
▸ showButtons(): `void`


**Returns** `void`


---
