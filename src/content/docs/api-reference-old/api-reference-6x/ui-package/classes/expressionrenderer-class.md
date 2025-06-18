---
title: ExpressionRenderer class
slug: api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class
sidebar:
  order: 100
---

## Extends
[BaseElementRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/baseelementrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#protected-properties-1)
- [displayedTextElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#displayedtextelement)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#element)
- [expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#expression)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#panel)
- [valueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#valueeditor)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#protected-methods-1)
- [appear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#appear)
- [disappear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#disappear)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#getclassestoadd)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#getcontext)
- [getDisplayedElementText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#getdisplayedelementtext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#getemptytext)
- [getValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#getvalue)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#iseditable)
- [isEmptyValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#isemptyvalue)
- [renderDisplayedText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#renderdisplayedtext)
- [renderEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#rendereditor)
- [setValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#setvalue)
- [showValidationError](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#showvalidationerror)
- [validateInput](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class/#validateinput)


## Constructors

---
#### constructor

⊕ new ExpressionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class),expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class),valueEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [ExpressionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class)

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
▸ validateInput(value: `string`): [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)

---
