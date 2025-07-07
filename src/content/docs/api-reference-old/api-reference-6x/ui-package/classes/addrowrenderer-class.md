---
title: AddRowRenderer class
slug: api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class
sidebar:
  order: 100
---

## Extends
[DropDownRenderer](api-reference-old/api-reference-6x/ui-package/classes/dropdownrenderer-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#protected-properties-1)
- [displayedTextElement](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#displayedtextelement)
- [element](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#element)
- [menu](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#menu)
- [panel](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#panel)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#public-methods-1)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#refresh)
- [render](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#render)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#protected-methods-1)
- [appear](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#appear)
- [disappear](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#disappear)
- [getClassesToAdd](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#getclassestoadd)
- [getDisplayedElementText](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#getdisplayedelementtext)
- [getEmptyText](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#getemptytext)
- [getMenu](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#getmenu)
- [isEditable](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#iseditable)
- [itemSelected](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#itemselected)
- [renderDisplayedText](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#renderdisplayedtext)
- [renderEditor](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class#rendereditor)


## Constructors

---
#### constructor

⊕ new AddRowRenderer(panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class),entitiesMenu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class),slot?: `HTMLDivElement`): [AddRowRenderer](api-reference-old/api-reference-6x/ui-package/classes/addrowrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)
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
### menu

● menu: [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### panel

● panel: [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)

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
