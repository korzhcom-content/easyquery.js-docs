---
title: DateTimeExpressionRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#protected-properties-1)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#element)
- [expression](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#expression)
- [labelElement](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#labelelement)
- [panel](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#panel)
- [valueEditor](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#valueeditor)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#public-methods-1)
- [adjustWidth](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#adjustwidth)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#protected-methods-1)
- [closeEditor](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#closeeditor)
- [convertFromInternalFormat](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#convertfrominternalformat)
- [convertToInternalFormat](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#converttointernalformat)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#getclassestoadd)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#getcontext)
- [getEmptyText](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#getemptytext)
- [getLabelText](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#getlabeltext)
- [getValue](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#getvalue)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#isemptyvalue)
- [isReadOnly](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#isreadonly)
- [renderEditor](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#rendereditor)
- [renderLabelElement](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#renderlabelelement)
- [setValue](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#setvalue)
- [showEditor](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#showeditor)
- [showValidationError](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#showvalidationerror)
- [validateInput](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new DateTimeExpressionRenderer(panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class),expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class),valueEditor: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class),slot?: `HTMLDivElement`): [DateTimeExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class)

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
### convertFromInternalFormat
▸ convertFromInternalFormat(dateTime: `string`): `Date`

#### Parameters:
- dateTime: `string`


**Returns** `Date`


---
### convertToInternalFormat
▸ convertToInternalFormat(dateTime: `Date`): `string`

#### Parameters:
- dateTime: `Date`


**Returns** `string`


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
