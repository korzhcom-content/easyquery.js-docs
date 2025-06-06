---
title: ConditionGroupRenderer class
slug: api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class
sidebar:
  order: 100
---

## Extends
[ConditionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#protected-properties-1)
- [condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#condition)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#element)
- [panel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#panel)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#protected-methods-1)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#clear)
- [coreRender](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#corerender)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#getclassestoadd)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#iseditable)
- [renderConditions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#renderconditions)
- [renderGroupRow](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class/#rendergrouprow)


## Constructors

---
#### constructor

⊕ new ConditionGroupRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class),condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class),slot?: `HTMLDivElement`): [ConditionGroupRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditiongrouprenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)
- condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### condition

● condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class)

---
### element

● element: `HTMLDivElement`

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
