---
title: ExpressionRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class
sidebar:
  order: 100
---

## Extends
[BaseElementRenderer](api-reference-7x/easyquery-packages/ui-package/classes/baseelementrenderer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#protected-properties-1)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#element)
- [expression](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#expression)
- [labelElement](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#labelelement)
- [panel](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#panel)
- [valueEditor](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#valueeditor)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#public-methods-1)
- [adjustWidth](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#adjustwidth)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#protected-methods-1)
- [closeEditor](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#closeeditor)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#getclassestoadd)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#getcontext)
- [getEmptyText](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#getemptytext)
- [getLabelText](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#getlabeltext)
- [getValue](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#getvalue)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#isemptyvalue)
- [isReadOnly](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#isreadonly)
- [renderEditor](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#rendereditor)
- [renderLabelElement](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#renderlabelelement)
- [setValue](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#setvalue)
- [showEditor](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#showeditor)
- [showValidationError](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#showvalidationerror)
- [validateInput](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new ExpressionRenderer(panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class),expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class),valueEditor: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class),slot?: `HTMLDivElement`): [ExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)
- expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)
- valueEditor: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### element

● element: `HTMLDivElement`

---
### expression

● expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)

---
### labelElement

● labelElement: `HTMLElement`

---
### panel

● panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)

---
### valueEditor

● valueEditor: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class)

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
▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


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
▸ validateInput(value: `string`): [ValidationResult](api-reference-7x/easyquery-packages/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](api-reference-7x/easyquery-packages/ui-package/interfaces/validationresult-interface)


---
