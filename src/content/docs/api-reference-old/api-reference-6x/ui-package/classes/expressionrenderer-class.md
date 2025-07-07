---
title: ExpressionRenderer class
slug: api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class
sidebar:
  order: 100
---

## Extends
[BaseElementRenderer](api-reference-old/api-reference-6x/ui-package/classes/baseelementrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#protected-properties-1)
- [displayedTextElement](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#displayedtextelement)
- [element](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#element)
- [expression](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#expression)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#panel)
- [valueEditor](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#valueeditor)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#protected-methods-1)
- [appear](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#appear)
- [disappear](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#disappear)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#getclassestoadd)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#getcontext)
- [getDisplayedElementText](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#getdisplayedelementtext)
- [getEmptyText](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#getemptytext)
- [getValue](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#getvalue)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#isemptyvalue)
- [renderDisplayedText](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#renderdisplayedtext)
- [renderEditor](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#rendereditor)
- [setValue](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#setvalue)
- [showValidationError](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#showvalidationerror)
- [validateInput](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new ExpressionRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class),valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [ExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class)

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
▸ validateInput(value: `string`): [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)

---
