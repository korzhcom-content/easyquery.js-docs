---
title: DateTimeExpressionRender class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#protected-properties-1)
- [displayedTextElement](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#displayedtextelement)
- [element](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#element)
- [expression](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#expression)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#panel)
- [valueEditor](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#valueeditor)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#protected-methods-1)
- [appear](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#appear)
- [convertFromInternalFormat](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#convertfrominternalformat)
- [convertToInternalFormat](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#converttointernalformat)
- [disappear](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#disappear)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#getclassestoadd)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#getcontext)
- [getDisplayedElementText](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#getdisplayedelementtext)
- [getEmptyText](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#getemptytext)
- [getValue](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#getvalue)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#iseditable)
- [isEmptyValue](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#isemptyvalue)
- [renderDisplayedText](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#renderdisplayedtext)
- [renderEditor](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#rendereditor)
- [setValue](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#setvalue)
- [showValidationError](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#showvalidationerror)
- [validateInput](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class#validateinput)


## Constructors

---
#### constructor

⊕ new DateTimeExpressionRender(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class),valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [DateTimeExpressionRender](api-reference-old/api-reference-6x/ui-package/classes/datetimeexpressionrender-class)

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
## Protected Accessors

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
