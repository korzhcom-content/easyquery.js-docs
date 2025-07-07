---
title: ConditionRenderer class
slug: api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#protected-properties-1)
- [condition](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#condition)
- [element](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#element)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#panel)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#protected-methods-1)
- [clear](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#clear)
- [coreRender](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#corerender)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#getclassestoadd)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class#iseditable)


## Constructors

---
#### constructor

⊕ new ConditionRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class),slot?: `HTMLDivElement`): [ConditionRenderer](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)
- condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### condition

● condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)

---
### element

● element: `HTMLDivElement`

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
