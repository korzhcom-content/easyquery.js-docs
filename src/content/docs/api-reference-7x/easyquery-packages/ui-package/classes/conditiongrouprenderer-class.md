---
title: ConditionGroupRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class
sidebar:
  order: 100
---

## Extends
[ConditionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/conditionrenderer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#protected-properties-1)
- [condition](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#condition)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#element)
- [panel](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#panel)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#public-methods-1)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#protected-methods-1)
- [clear](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#clear)
- [coreRender](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#corerender)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#getclassestoadd)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#iseditable)
- [renderConditions](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#renderconditions)
- [renderGroupRow](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class#rendergrouprow)


## Constructors

---
#### constructor

⊕ new ConditionGroupRenderer(panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class),condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class),slot?: `HTMLDivElement`): [ConditionGroupRenderer](api-reference-7x/easyquery-packages/ui-package/classes/conditiongrouprenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)
- condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### condition

● condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

---
### element

● element: `HTMLDivElement`

---
### panel

● panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)

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
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`


---
### isEditable
▸ isEditable(): `boolean`


**Returns** `boolean`


---
### renderConditions
▸ renderConditions(autoAppear?: `boolean`): `HTMLDivElement`

#### Parameters:
- autoAppear: `boolean`, *Optional* 


**Returns** `HTMLDivElement`


---
### renderGroupRow
▸ renderGroupRow(): `HTMLDivElement`


**Returns** `HTMLDivElement`


---
