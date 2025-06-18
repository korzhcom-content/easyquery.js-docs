---
title: ListExpressionRenderer class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/listexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#protected-properties-1)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#element)
- [expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#expression)
- [labelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#labelelement)
- [menu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#menu)
- [menuItemsList](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#menuitemslist)
- [panel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#panel)
- [showWhenReady](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#showwhenready)
- [valueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#valueeditor)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#public-methods-1)
- [adjustWidth](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#adjustwidth)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#protected-methods-1)
- [adjustNewValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#adjustnewvalue)
- [closeEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#closeeditor)
- [fillMenuItemsList](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#fillmenuitemslist)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getclassestoadd)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getcontext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getemptytext)
- [getLabelText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getlabeltext)
- [getListName](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getlistname)
- [getValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getvalue)
- [getValueText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getvaluetext)
- [getValuesAsArray](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getvaluesasarray)
- [hideLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#hideloader)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#iseditable)
- [isEmptyValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#isemptyvalue)
- [isReadOnly](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#isreadonly)
- [renderEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#rendereditor)
- [renderLabelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#renderlabelelement)
- [renderMenuBlock](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#rendermenublock)
- [setValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#setvalue)
- [showEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#showeditor)
- [showLoader](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#showloader)
- [showValidationError](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#showvalidationerror)
- [takeDefaultValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#takedefaultvalue)
- [validateInput](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class/#validateinput)


## Constructors

---
#### constructor

⊕ new ListExpressionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class),expression: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class),valueEditor: [EqValueEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqvalueeditor-class),slot?: `HTMLDivElement`): [ListExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/listexpressionrenderer-class)

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
### menu

● menu: [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class) | `null`

---
### menuItemsList

● menuItemsList: [MenuItem](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/menuitem-interface)[] = ` []`

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)

---
### showWhenReady

● showWhenReady: `boolean` = `false`

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
▸ validateInput(value: `string`): [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/validationresult-interface)


---
