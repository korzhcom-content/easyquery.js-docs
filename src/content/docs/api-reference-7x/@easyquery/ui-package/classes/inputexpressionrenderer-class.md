---
title: InputExpressionRenderer class
slug: api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#protected-properties-1)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#element)
- [expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#expression)
- [labelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#labelelement)
- [panel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#panel)
- [valueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#valueeditor)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#public-methods-1)
- [adjustWidth](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#adjustwidth)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#protected-methods-1)
- [closeEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#closeeditor)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getclassestoadd)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getcontext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getemptytext)
- [getLabelText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getlabeltext)
- [getValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getvalue)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#iseditable)
- [isEmptyValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#isemptyvalue)
- [isReadOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#isreadonly)
- [renderEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#rendereditor)
- [renderLabelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#renderlabelelement)
- [setValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#setvalue)
- [showEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#showeditor)
- [showValidationError](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#showvalidationerror)
- [validateInput](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#validateinput)
- [validateListInput](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#validatelistinput)
- [validateScalarInput](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#validatescalarinput)


## Constructors

---
#### constructor

⊕ new InputExpressionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class),expression: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class),valueEditor: [EqValueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqvalueeditor-class),slot?: `HTMLDivElement`): [InputExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/inputexpressionrenderer-class)

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
▸ validateInput(inputValue: `string`): [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)

#### Parameters:
- inputValue: `string`


**Returns** [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)


---
### validateListInput
▸ validateListInput(inputValue: `string`,result: [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)): `void`

#### Parameters:
- inputValue: `string`
- result: [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)


**Returns** `void`


---
### validateScalarInput
▸ validateScalarInput(inputValue: `string`,result: [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)): `void`

#### Parameters:
- inputValue: `string`
- result: [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)


**Returns** `void`


---
