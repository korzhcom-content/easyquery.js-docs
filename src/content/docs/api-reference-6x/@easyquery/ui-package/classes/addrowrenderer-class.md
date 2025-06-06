---
title: AddRowRenderer class
slug: api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class
sidebar:
  order: 100
---

## Extends
[DropDownRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dropdownrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#protected-properties-1)
- [displayedTextElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#displayedtextelement)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#element)
- [menu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#menu)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#panel)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#protected-methods-1)
- [appear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#appear)
- [disappear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#disappear)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#getclassestoadd)
- [getDisplayedElementText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#getdisplayedelementtext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#getemptytext)
- [getMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#getmenu)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#iseditable)
- [itemSelected](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#itemselected)
- [renderDisplayedText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#renderdisplayedtext)
- [renderEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class/#rendereditor)


## Constructors

---
#### constructor

⊕ new AddRowRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class),entitiesMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class),slot?: `HTMLDivElement`): [AddRowRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/addrowrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)
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
### menu

● menu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)

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
▸ getMenu(): [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)


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
