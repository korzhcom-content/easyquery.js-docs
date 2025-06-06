---
title: InputExpressionRenderer class
slug: api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#protected-properties-1)
- [displayedTextElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#displayedtextelement)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#element)
- [expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#expression)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#panel)
- [valueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#valueeditor)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#protected-methods-1)
- [appear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#appear)
- [disappear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#disappear)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getclassestoadd)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getcontext)
- [getDisplayedElementText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getdisplayedelementtext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getemptytext)
- [getValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#getvalue)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#iseditable)
- [isEmptyValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#isemptyvalue)
- [renderDisplayedText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#renderdisplayedtext)
- [renderEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#rendereditor)
- [setValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#setvalue)
- [showValidationError](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#showvalidationerror)
- [validateInput](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#validateinput)
- [validateListInput](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#validatelistinput)
- [validateScalarInput](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class/#validatescalarinput)


## Constructors

---
#### constructor

⊕ new InputExpressionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class),expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class),valueEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [InputExpressionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/inputexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)
- expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)
- valueEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/valueeditor-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### displayedTextElement

● displayedTextElement: `HTMLElement`

---
### element

● element: `HTMLDivElement`

---
### expression

● expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)

---
### valueEditor

● valueEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/valueeditor-class)

---
## Public Methods

---
### refresh
▸ refresh(): `void`


**Returns** `void`

---
### render
▸ render(appeared?: `boolean`): `HTMLDivElement`

#### Parameters:
- appeared: `boolean`, *Default value* = `false`


**Returns** `HTMLDivElement`

---
## Protected Methods

---
### appear
▸ appear(): `void`


**Returns** `void`

---
### disappear
▸ disappear(): `void`


**Returns** `void`

---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`

---
### getContext
▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)

---
### getDisplayedElementText
▸ getDisplayedElementText(): `string`


**Returns** `string`

---
### getEmptyText
▸ getEmptyText(): `string`


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
### renderDisplayedText
▸ renderDisplayedText(): `HTMLElement`


**Returns** `HTMLElement`

---
### renderEditor
▸ renderEditor(): `void`


**Returns** `void`

---
### setValue
▸ setValue(value: `string`,silent?: `boolean`): `void`

#### Parameters:
- value: `string`
- silent: `boolean`, *Optional* 


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
▸ validateInput(inputValue: `string`): [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)

#### Parameters:
- inputValue: `string`


**Returns** [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)

---
### validateListInput
▸ validateListInput(inputValue: `string`,result: [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)): `void`

#### Parameters:
- inputValue: `string`
- result: [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)


**Returns** `void`

---
### validateScalarInput
▸ validateScalarInput(inputValue: `string`,result: [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)): `void`

#### Parameters:
- inputValue: `string`
- result: [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)


**Returns** `void`

---
