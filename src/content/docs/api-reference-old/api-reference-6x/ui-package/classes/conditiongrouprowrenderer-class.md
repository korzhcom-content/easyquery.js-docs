---
title: ConditionGroupRowRenderer class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class
sidebar:
  order: 100
---

## Extends
[SimpleConditionRenderer](api-reference-old/api-reference-6x/ui-package/classes/simpleconditionrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#protected-properties-1)
- [baseAttr](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#baseattr)
- [buttonsBlock](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#buttonsblock)
- [condition](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#condition)
- [element](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#element)
- [isMouseOverBlock](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#ismouseoverblock)
- [keepShowingButtons](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#keepshowingbuttons)
- [linkTypeMenu](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#linktypemenu)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#panel)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#protected-methods-1)
- [adjustButtonsVisibility](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#adjustbuttonsvisibility)
- [clear](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#clear)
- [coreRender](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#corerender)
- [enterButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#enterbuttonblock)
- [getButtonsToShow](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#getbuttonstoshow)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#getclassestoadd)
- [getConditionMenu](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#getconditionmenu)
- [getConditionMenuSelectedItems](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#getconditionmenuselecteditems)
- [getGroupTitle](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#getgrouptitle)
- [hideButtons](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#hidebuttons)
- [isConditionActive](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#isconditionactive)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#iseditable)
- [leaveButtonBlock](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#leavebuttonblock)
- [renderButtonsBlock](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#renderbuttonsblock)
- [renderCheckbox](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#rendercheckbox)
- [renderConjunction](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#renderconjunction)
- [setConditionInJoin](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#setconditioninjoin)
- [setConditionParameterized](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#setconditionparameterized)
- [showButtons](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class#showbuttons)


## Constructors

---
#### constructor

⊕ new ConditionGroupRowRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class),linkTypeMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class),slot?: `HTMLDivElement`): [ConditionGroupRowRenderer](api-reference-old/api-reference-6x/ui-package/classes/conditiongrouprowrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)
- condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)
- linkTypeMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)
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
### linkTypeMenu

● linkTypeMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### panel

● panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)

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
▸ getConditionMenu(): [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)


---
### getConditionMenuSelectedItems
▸ getConditionMenuSelectedItems(): `Array`&lt;`string`&gt;


**Returns** `Array`&lt;`string`&gt;


---
### getGroupTitle
▸ getGroupTitle(): `string`


**Returns** `string`


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
