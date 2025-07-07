---
title: OperatorRenderer class
slug: api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class
sidebar:
  order: 100
---

## Extends
[DropDownRenderer](api-reference-old/api-reference-6x/ui-package/classes/dropdownrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#protected-properties-1)
- [condition](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#condition)
- [displayedText](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#displayedtext)
- [displayedTextElement](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#displayedtextelement)
- [element](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#element)
- [menu](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#menu)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#panel)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#protected-methods-1)
- [appear](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#appear)
- [disappear](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#disappear)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#getclassestoadd)
- [getDisplayedElementText](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#getdisplayedelementtext)
- [getEmptyText](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#getemptytext)
- [getMenu](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#getmenu)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#iseditable)
- [itemSelected](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#itemselected)
- [renderDisplayedText](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#renderdisplayedtext)
- [renderEditor](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class#rendereditor)


## Constructors

---
#### constructor

⊕ new OperatorRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class),text: `string`,slot?: `HTMLDivElement`): [OperatorRenderer](api-reference-old/api-reference-6x/ui-package/classes/operatorrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)
- condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)
- text: `string`
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### condition

● condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)

---
### displayedText

● displayedText: `string`

---
### displayedTextElement

● displayedTextElement: `HTMLElement`

---
### element

● element: `HTMLDivElement`

---
### menu

● menu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### panel

● panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)

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
### disappear
▸ disappear(): `void`


**Returns** `void`

---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`

---
### getDisplayedElementText
▸ getDisplayedElementText(): `string`


**Returns** `string`

---
### getEmptyText
▸ getEmptyText(): `string`


**Returns** `string`

---
### getMenu
▸ getMenu(): [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### isEditable
▸ isEditable(): `boolean`


**Returns** `boolean`

---
### itemSelected
▸ itemSelected(id: `string`): `void`

#### Parameters:
- id: `string`


**Returns** `void`

---
### renderDisplayedText
▸ renderDisplayedText(): `HTMLElement`


**Returns** `HTMLElement`

---
### renderEditor
▸ renderEditor(): `void`


**Returns** `void`

---
