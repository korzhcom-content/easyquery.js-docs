---
title: InputExpressionRenderer class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#protected-properties-1)
- [displayedTextElement](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#displayedtextelement)
- [element](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#element)
- [expression](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#expression)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#panel)
- [valueEditor](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#valueeditor)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#protected-methods-1)
- [appear](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#appear)
- [disappear](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#disappear)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#getclassestoadd)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#getcontext)
- [getDisplayedElementText](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#getdisplayedelementtext)
- [getEmptyText](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#getemptytext)
- [getValue](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#getvalue)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#isemptyvalue)
- [renderDisplayedText](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#renderdisplayedtext)
- [renderEditor](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#rendereditor)
- [setValue](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#setvalue)
- [showValidationError](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#showvalidationerror)
- [validateInput](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#validateinput)
- [validateListInput](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#validatelistinput)
- [validateScalarInput](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class#validatescalarinput)


## Constructors

---
#### constructor

⊕ new InputExpressionRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class),valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [InputExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/inputexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)
- expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)
- valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class)
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

● expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)

---
### panel

● panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)

---
### valueEditor

● valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class)

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
▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

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
▸ validateInput(inputValue: `string`): [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)

#### Parameters:
- inputValue: `string`


**Returns** [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)

---
### validateListInput
▸ validateListInput(inputValue: `string`,result: [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)): `void`

#### Parameters:
- inputValue: `string`
- result: [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)


**Returns** `void`

---
### validateScalarInput
▸ validateScalarInput(inputValue: `string`,result: [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)): `void`

#### Parameters:
- inputValue: `string`
- result: [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)


**Returns** `void`

---
