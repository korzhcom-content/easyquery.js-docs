---
title: DateTimeExpressionRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/datetimeexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#protected-properties-1)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#element)
- [expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#expression)
- [labelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#labelelement)
- [panel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#panel)
- [valueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#valueeditor)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#public-methods-1)
- [adjustWidth](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#adjustwidth)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#protected-methods-1)
- [closeEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#closeeditor)
- [convertFromInternalFormat](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#convertfrominternalformat)
- [convertToInternalFormat](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#converttointernalformat)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#getclassestoadd)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#getcontext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#getemptytext)
- [getLabelText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#getlabeltext)
- [getValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#getvalue)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#iseditable)
- [isEmptyValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#isemptyvalue)
- [isReadOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#isreadonly)
- [renderEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#rendereditor)
- [renderLabelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#renderlabelelement)
- [setValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#setvalue)
- [showEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#showeditor)
- [showValidationError](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#showvalidationerror)
- [validateInput](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class/#validateinput)


## Constructors

---
#### constructor

⊕ new DateTimeExpressionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class),expression: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class),valueEditor: [EqValueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqvalueeditor-class),slot?: `HTMLDivElement`): [DateTimeExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/datetimeexpressionrenderer-class)

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
