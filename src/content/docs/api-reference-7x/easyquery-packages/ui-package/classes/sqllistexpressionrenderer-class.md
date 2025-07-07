---
title: SqlListExpressionRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[CustomListExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/customlistexpressionrenderer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#public-properties-1)
- [loaderElement](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#loaderelement)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#protected-properties-1)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#element)
- [expression](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#expression)
- [labelElement](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#labelelement)
- [menu](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#menu)
- [menuItemsList](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#menuitemslist)
- [panel](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#panel)
- [showWhenReady](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#showwhenready)
- [valueEditor](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#valueeditor)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#public-methods-1)
- [adjustWidth](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#adjustwidth)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#protected-methods-1)
- [adjustNewValue](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#adjustnewvalue)
- [closeEditor](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#closeeditor)
- [fillMenuItemsList](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#fillmenuitemslist)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#getclassestoadd)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#getcontext)
- [getEmptyText](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#getemptytext)
- [getLabelText](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#getlabeltext)
- [getListName](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#getlistname)
- [getValue](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#getvalue)
- [getValueText](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#getvaluetext)
- [getValuesAsArray](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#getvaluesasarray)
- [hideLoader](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#hideloader)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#isemptyvalue)
- [isReadOnly](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#isreadonly)
- [renderEditor](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#rendereditor)
- [renderLabelElement](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#renderlabelelement)
- [renderMenuBlock](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#rendermenublock)
- [setValue](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#setvalue)
- [showEditor](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#showeditor)
- [showLoader](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#showloader)
- [showValidationError](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#showvalidationerror)
- [takeDefaultValue](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#takedefaultvalue)
- [validateInput](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new SqlListExpressionRenderer(panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class),expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class),valueEditor: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class),slot?: `HTMLDivElement`): [SqlListExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/sqllistexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)
- expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)
- valueEditor: [EqValueEditor](api-reference-7x/easyquery-packages/core-package/classes/eqvalueeditor-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Public Properties

---
### loaderElement

● loaderElement: `HTMLElement` | `null`

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
### menu

● menu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class) | `null`

---
### menuItemsList

● menuItemsList: [MenuItem](api-reference-7x/easyquery-packages/ui-package/interfaces/menuitem-interface)[] = ` []`

---
### panel

● panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)

---
### showWhenReady

● showWhenReady: `boolean` = `false`

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
### adjustNewValue
▸ adjustNewValue(newValue: `string` | `string`[]): `string`

#### Parameters:
- newValue: `string` | `string`[]


**Returns** `string`


---
### closeEditor
▸ closeEditor(): `void`


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
### showEditor
▸ showEditor(): `void`


**Returns** `void`


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
▸ validateInput(value: `string`): [ValidationResult](api-reference-7x/easyquery-packages/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](api-reference-7x/easyquery-packages/ui-package/interfaces/validationresult-interface)


---
