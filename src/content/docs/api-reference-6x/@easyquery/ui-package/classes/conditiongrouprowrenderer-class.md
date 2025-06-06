---
title: ConditionGroupRowRenderer class
slug: api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class
sidebar:
  order: 100
---

## Extends
[SimpleConditionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/simpleconditionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#protected-properties-1)
- [baseAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#baseattr)
- [buttonsBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#buttonsblock)
- [condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#condition)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#element)
- [isMouseOverBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#ismouseoverblock)
- [keepShowingButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#keepshowingbuttons)
- [linkTypeMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#linktypemenu)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#panel)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#protected-methods-1)
- [adjustButtonsVisibility](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#adjustbuttonsvisibility)
- [clear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#clear)
- [coreRender](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#corerender)
- [enterButtonBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#enterbuttonblock)
- [getButtonsToShow](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#getbuttonstoshow)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#getclassestoadd)
- [getConditionMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#getconditionmenu)
- [getConditionMenuSelectedItems](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#getconditionmenuselecteditems)
- [getGroupTitle](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#getgrouptitle)
- [hideButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#hidebuttons)
- [isConditionActive](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#isconditionactive)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#iseditable)
- [leaveButtonBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#leavebuttonblock)
- [renderButtonsBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#renderbuttonsblock)
- [renderCheckbox](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#rendercheckbox)
- [renderConjunction](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#renderconjunction)
- [setConditionInJoin](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#setconditioninjoin)
- [setConditionParameterized](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#setconditionparameterized)
- [showButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class/#showbuttons)


## Constructors

---
#### constructor

⊕ new ConditionGroupRowRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class),condition: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class),linkTypeMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class),slot?: `HTMLDivElement`): [ConditionGroupRowRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditiongrouprowrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)
- condition: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)
- linkTypeMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### baseAttr

● baseAttr: [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)

---
### buttonsBlock

● buttonsBlock: `HTMLDivElement`

---
### condition

● condition: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)

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

● linkTypeMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)

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
▸ getConditionMenu(): [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)


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
