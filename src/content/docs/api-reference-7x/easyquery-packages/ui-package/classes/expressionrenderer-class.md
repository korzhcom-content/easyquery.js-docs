---
title: ExpressionRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class
sidebar:
  order: 100
---

## Extends
[BaseElementRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/baseelementrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#protected-properties-1)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#element)
- [expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#expression)
- [labelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#labelelement)
- [panel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#panel)
- [valueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#valueeditor)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#public-methods-1)
- [adjustWidth](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#adjustwidth)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#protected-methods-1)
- [closeEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#closeeditor)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#getclassestoadd)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#getcontext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#getemptytext)
- [getLabelText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#getlabeltext)
- [getValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#getvalue)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#iseditable)
- [isEmptyValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#isemptyvalue)
- [isReadOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#isreadonly)
- [renderEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#rendereditor)
- [renderLabelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#renderlabelelement)
- [setValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#setvalue)
- [showEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#showeditor)
- [showValidationError](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#showvalidationerror)
- [validateInput](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class/#validateinput)


## Constructors

---
#### constructor

⊕ new ExpressionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class),expression: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class),valueEditor: [EqValueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqvalueeditor-class),slot?: `HTMLDivElement`): [ExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)
- expression: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)
- valueEditor: [EqValueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqvalueeditor-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### element

● element: `HTMLDivElement`

---
### expression

● expression: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)

---
### labelElement

● labelElement: `HTMLElement`

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)

---
### valueEditor

● valueEditor: [EqValueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqvalueeditor-class)

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

---
### adjustWidth
▸ adjustWidth(): `void`


**Returns** `void`


---
### refresh
▸ refresh(): `void`


**Returns** `void`


---
### render
▸ render(isEditMode?: `boolean`): `HTMLDivElement`

#### Parameters:
- isEditMode: `boolean`, *Default value* = `false`


**Returns** `HTMLDivElement`


---
## Protected Methods

---
### closeEditor
▸ closeEditor(): `void`


**Returns** `void`


---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`


---
### getContext
▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---
### getEmptyText
▸ getEmptyText(): `string`


**Returns** `string`


---
### getLabelText
▸ getLabelText(): `string`


**Returns** `string`


---
### getValue
▸ getValue(): `string`


**Returns** `string`


---
### isEditable
▸ isEditable(): `boolean`


**Returns** `boolean`


---
### isEmptyValue
▸ isEmptyValue(): `boolean`


**Returns** `boolean`


---
### isReadOnly
▸ isReadOnly(): `boolean`


**Returns** `boolean`


---
### renderEditor
▸ renderEditor(): `void`


**Returns** `void`


---
### renderLabelElement
▸ renderLabelElement(): `HTMLElement`


**Returns** `HTMLElement`


---
### setValue
▸ setValue(value: `string`,silent?: `boolean`): `void`

#### Parameters:
- value: `string`
- silent: `boolean`, *Optional* 


**Returns** `void`


---
### showEditor
▸ showEditor(): `void`


**Returns** `void`


---
### showValidationError
▸ showValidationError(message: `string`,target?: `EventTarget`): `void`

#### Parameters:
- message: `string`
- target: `EventTarget`, *Optional* 


**Returns** `void`


---
### validateInput
▸ validateInput(value: `string`): [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)


---
