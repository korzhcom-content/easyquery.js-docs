---
title: AttributeExpressionRenderer class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ListExpressionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/listexpressionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#protected-properties-1)
- [displayedTextElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#displayedtextelement)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#element)
- [expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#expression)
- [menu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#menu)
- [menuItemsList](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#menuitemslist)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#panel)
- [showWhenReady](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#showwhenready)
- [valueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#valueeditor)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#protected-methods-1)
- [adjustNewValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#adjustnewvalue)
- [appear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#appear)
- [disappear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#disappear)
- [fillMenuItemsList](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#fillmenuitemslist)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#getclassestoadd)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#getcontext)
- [getDisplayedElementText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#getdisplayedelementtext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#getemptytext)
- [getListName](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#getlistname)
- [getValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#getvalue)
- [getValueText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#getvaluetext)
- [getValuesAsArray](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#getvaluesasarray)
- [hideLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#hideloader)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#iseditable)
- [isEmptyValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#isemptyvalue)
- [renderDisplayedText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#renderdisplayedtext)
- [renderEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#rendereditor)
- [renderMenuBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#rendermenublock)
- [setValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#setvalue)
- [showLoader](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#showloader)
- [showValidationError](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#showvalidationerror)
- [takeDefaultValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#takedefaultvalue)
- [validateInput](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class/#validateinput)


## Constructors

---
#### constructor

⊕ new AttributeExpressionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class),expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class),entitiesMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class),slot?: `HTMLDivElement`): [AttributeExpressionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/attributeexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)
- expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)
- entitiesMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)
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
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


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
