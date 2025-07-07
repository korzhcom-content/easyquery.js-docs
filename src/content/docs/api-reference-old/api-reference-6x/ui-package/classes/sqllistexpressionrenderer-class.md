---
title: SqlListExpressionRenderer class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[CustomListExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/customlistexpressionrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#public-properties-1)
- [loaderElement](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#loaderelement)
- [loading](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#loading)
- [onClickTemp](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#onclicktemp)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#protected-properties-1)
- [displayedTextElement](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#displayedtextelement)
- [element](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#element)
- [expression](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#expression)
- [menu](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#menu)
- [menuItemsList](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#menuitemslist)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#panel)
- [showWhenReady](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#showwhenready)
- [valueEditor](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#valueeditor)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#protected-methods-1)
- [adjustNewValue](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#adjustnewvalue)
- [appear](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#appear)
- [disappear](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#disappear)
- [fillMenuItemsList](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#fillmenuitemslist)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#getclassestoadd)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#getcontext)
- [getDisplayedElementText](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#getdisplayedelementtext)
- [getEmptyText](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#getemptytext)
- [getListName](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#getlistname)
- [getValue](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#getvalue)
- [getValueText](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#getvaluetext)
- [getValuesAsArray](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#getvaluesasarray)
- [hideLoader](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#hideloader)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#isemptyvalue)
- [renderDisplayedText](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#renderdisplayedtext)
- [renderEditor](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#rendereditor)
- [renderMenuBlock](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#rendermenublock)
- [setValue](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#setvalue)
- [showLoader](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#showloader)
- [showValidationError](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#showvalidationerror)
- [takeDefaultValue](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#takedefaultvalue)
- [validateInput](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new SqlListExpressionRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class),valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [SqlListExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/sqllistexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)
- expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)
- valueEditor: [ValueEditor](api-reference-old/api-reference-6x/core-package/classes/valueeditor-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Public Properties

---
### loaderElement

● loaderElement: `HTMLElement` | `null`

---
### loading

● loading: `boolean` = `false`

---
### onClickTemp

● onClickTemp: `any` = ` null`

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
