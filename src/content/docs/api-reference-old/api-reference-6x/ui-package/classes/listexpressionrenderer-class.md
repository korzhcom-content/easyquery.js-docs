---
title: ListExpressionRenderer class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#protected-properties-1)
- [displayedTextElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#displayedtextelement)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#element)
- [expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#expression)
- [menu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#menu)
- [menuItemsList](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#menuitemslist)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#panel)
- [showWhenReady](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#showwhenready)
- [valueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#valueeditor)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#protected-methods-1)
- [adjustNewValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#adjustnewvalue)
- [appear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#appear)
- [disappear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#disappear)
- [fillMenuItemsList](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#fillmenuitemslist)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getclassestoadd)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getcontext)
- [getDisplayedElementText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getdisplayedelementtext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getemptytext)
- [getListName](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getlistname)
- [getValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getvalue)
- [getValueText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getvaluetext)
- [getValuesAsArray](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#getvaluesasarray)
- [hideLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#hideloader)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#iseditable)
- [isEmptyValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#isemptyvalue)
- [renderDisplayedText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#renderdisplayedtext)
- [renderEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#rendereditor)
- [renderMenuBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#rendermenublock)
- [setValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#setvalue)
- [showLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#showloader)
- [showValidationError](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#showvalidationerror)
- [takeDefaultValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#takedefaultvalue)
- [validateInput](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class/#validateinput)


## Constructors

---
#### constructor

⊕ new ListExpressionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class),expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class),valueEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [ListExpressionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class)

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
### menu

● menu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class) | `null`

---
### menuItemsList

● menuItemsList: [MenuItem](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/menuitem-interface)[] = ` []`

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)

---
### showWhenReady

● showWhenReady: `boolean` = `false`

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
▸ validateInput(value: `string`): [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)

---
