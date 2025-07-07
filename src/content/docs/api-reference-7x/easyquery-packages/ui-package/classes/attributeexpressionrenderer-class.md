---
title: AttributeExpressionRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ListExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/listexpressionrenderer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#protected-properties-1)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#element)
- [expression](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#expression)
- [labelElement](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#labelelement)
- [menu](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#menu)
- [menuItemsList](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#menuitemslist)
- [panel](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#panel)
- [showWhenReady](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#showwhenready)
- [valueEditor](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#valueeditor)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#public-methods-1)
- [adjustWidth](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#adjustwidth)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#protected-methods-1)
- [adjustNewValue](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#adjustnewvalue)
- [closeEditor](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#closeeditor)
- [fillMenuItemsList](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#fillmenuitemslist)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#getclassestoadd)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#getcontext)
- [getEmptyText](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#getemptytext)
- [getLabelText](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#getlabeltext)
- [getListName](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#getlistname)
- [getValue](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#getvalue)
- [getValueText](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#getvaluetext)
- [getValuesAsArray](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#getvaluesasarray)
- [hideLoader](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#hideloader)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#isemptyvalue)
- [isReadOnly](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#isreadonly)
- [renderEditor](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#rendereditor)
- [renderLabelElement](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#renderlabelelement)
- [renderMenuBlock](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#rendermenublock)
- [setValue](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#setvalue)
- [showEditor](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#showeditor)
- [showLoader](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#showloader)
- [showValidationError](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#showvalidationerror)
- [takeDefaultValue](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#takedefaultvalue)
- [validateInput](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new AttributeExpressionRenderer(panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class),expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class),entitiesMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class),slot?: `HTMLDivElement`): [AttributeExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/attributeexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)
- expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)
- entitiesMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)
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
