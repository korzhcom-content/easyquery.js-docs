---
title: AttributeExpressionRenderer class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ListExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/listexpressionrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#protected-properties-1)
- [displayedTextElement](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#displayedtextelement)
- [element](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#element)
- [expression](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#expression)
- [menu](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#menu)
- [menuItemsList](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#menuitemslist)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#panel)
- [showWhenReady](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#showwhenready)
- [valueEditor](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#valueeditor)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#protected-methods-1)
- [adjustNewValue](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#adjustnewvalue)
- [appear](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#appear)
- [disappear](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#disappear)
- [fillMenuItemsList](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#fillmenuitemslist)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#getclassestoadd)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#getcontext)
- [getDisplayedElementText](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#getdisplayedelementtext)
- [getEmptyText](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#getemptytext)
- [getListName](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#getlistname)
- [getValue](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#getvalue)
- [getValueText](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#getvaluetext)
- [getValuesAsArray](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#getvaluesasarray)
- [hideLoader](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#hideloader)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#iseditable)
- [isEmptyValue](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#isemptyvalue)
- [renderDisplayedText](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#renderdisplayedtext)
- [renderEditor](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#rendereditor)
- [renderMenuBlock](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#rendermenublock)
- [setValue](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#setvalue)
- [showLoader](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#showloader)
- [showValidationError](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#showvalidationerror)
- [takeDefaultValue](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#takedefaultvalue)
- [validateInput](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class#validateinput)


## Constructors

---
#### constructor

⊕ new AttributeExpressionRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class),entitiesMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class),slot?: `HTMLDivElement`): [AttributeExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/attributeexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)
- expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)
- entitiesMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)
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
