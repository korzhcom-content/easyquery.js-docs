---
title: ListExpressionRenderer class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#protected-properties-1)
- [displayedTextElement](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#displayedtextelement)
- [element](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#element)
- [expression](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#expression)
- [menu](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#menu)
- [menuItemsList](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#menuitemslist)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#panel)
- [showWhenReady](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#showwhenready)
- [valueEditor](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#valueeditor)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#protected-methods-1)
- [adjustNewValue](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#adjustnewvalue)
- [appear](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#appear)
- [disappear](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#disappear)
- [fillMenuItemsList](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#fillmenuitemslist)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#getclassestoadd)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#getcontext)
- [getDisplayedElementText](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#getdisplayedelementtext)
- [getEmptyText](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#getemptytext)
- [getListName](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#getlistname)
- [getValue](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#getvalue)
- [getValueText](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#getvaluetext)
- [getValuesAsArray](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#getvaluesasarray)
- [hideLoader](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#hideloader)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#isemptyvalue)
- [renderDisplayedText](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#renderdisplayedtext)
- [renderEditor](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#rendereditor)
- [renderMenuBlock](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#rendermenublock)
- [setValue](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#setvalue)
- [showLoader](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#showloader)
- [showValidationError](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#showvalidationerror)
- [takeDefaultValue](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#takedefaultvalue)
- [validateInput](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new ListExpressionRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class),valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [ListExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class)

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
### menu

● menu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class) | `null`

---
### menuItemsList

● menuItemsList: [MenuItem](api-reference-old/api-reference-6x/ui-package/interfaces/menuitem-interface)[] = ` []`

---
### panel

● panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)

---
### showWhenReady

● showWhenReady: `boolean` = `false`

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
### adjustNewValue
▸ adjustNewValue(newValue: `string` | `string`[]): `string`

#### Parameters:
- newValue: `string` | `string`[]


**Returns** `string`

---
### appear
▸ appear(): `void`


**Returns** `void`

---
### disappear
▸ disappear(): `void`


**Returns** `void`

---
### fillMenuItemsList
▸ fillMenuItemsList(onComplete?: `any`): `void`

#### Parameters:
- onComplete: `any`, *Optional* 


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
### getListName
▸ getListName(): `string`


**Returns** `string`

---
### getValue
▸ getValue(): `string`


**Returns** `string`

---
### getValueText
▸ getValueText(value: `string` | `string`[]): `string`

#### Parameters:
- value: `string` | `string`[]


**Returns** `string`

---
### getValuesAsArray
▸ getValuesAsArray(): `string`[]


**Returns** `string`[]

---
### hideLoader
▸ hideLoader(): `void`


**Returns** `void`

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
### renderMenuBlock
▸ renderMenuBlock(): `void`


**Returns** `void`

---
### setValue
▸ setValue(value: `string` | `string`[],silent?: `boolean`): `boolean`

#### Parameters:
- value: `string` | `string`[]
- silent: `boolean`, *Default value* = `false`


**Returns** `boolean`

---
### showLoader
▸ showLoader(): `void`


**Returns** `void`

---
### showValidationError
▸ showValidationError(message: `string`,target?: `EventTarget`): `void`

#### Parameters:
- message: `string`
- target: `EventTarget`, *Optional* 


**Returns** `void`

---
### takeDefaultValue
▸ takeDefaultValue(): `void`


**Returns** `void`

---
### validateInput
▸ validateInput(value: `string`): [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](api-reference-old/api-reference-6x/ui-package/interfaces/validationresult-interface)

---
