---
title: SimpleConditionRenderer class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class
sidebar:
  order: 100
---

## Extends
[ConditionRenderer](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#protected-properties-1)
- [baseAttr](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#baseattr)
- [buttonsBlock](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#buttonsblock)
- [condition](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#condition)
- [element](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#element)
- [isMouseOverBlock](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#ismouseoverblock)
- [keepShowingButtons](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#keepshowingbuttons)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#panel)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#protected-methods-1)
- [adjustButtonsVisibility](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#adjustbuttonsvisibility)
- [clear](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#clear)
- [coreRender](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#corerender)
- [enterButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#enterbuttonblock)
- [getButtonsToShow](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#getbuttonstoshow)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#getclassestoadd)
- [getConditionMenu](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#getconditionmenu)
- [getConditionMenuSelectedItems](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#getconditionmenuselecteditems)
- [hideButtons](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#hidebuttons)
- [isConditionActive](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#isconditionactive)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#iseditable)
- [leaveButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#leavebuttonblock)
- [renderButtonsBlock](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#renderbuttonsblock)
- [renderCheckbox](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#rendercheckbox)
- [renderConjunction](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#renderconjunction)
- [setConditionInJoin](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#setconditioninjoin)
- [setConditionParameterized](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#setconditionparameterized)
- [showButtons](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class#showbuttons)


## Constructors

---
#### constructor

⊕ new SimpleConditionRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class),slot?: `HTMLDivElement`): [SimpleConditionRenderer](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)
- condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### baseAttr

● baseAttr: [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)

---
### buttonsBlock

● buttonsBlock: `HTMLDivElement`

---
### condition

● condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)

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

● panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)

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
▸ getConditionMenu(): [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

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
