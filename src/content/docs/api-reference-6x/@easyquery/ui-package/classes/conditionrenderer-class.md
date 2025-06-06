---
title: ConditionRenderer class
slug: api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#protected-properties-1)
- [condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#condition)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#element)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#panel)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#protected-methods-1)
- [clear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#clear)
- [coreRender](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#corerender)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#getclassestoadd)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class/#iseditable)


## Constructors

---
#### constructor

⊕ new ConditionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class),condition: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class),slot?: `HTMLDivElement`): [ConditionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/conditionrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)
- condition: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### condition

● condition: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)

---
### element

● element: `HTMLDivElement`

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
