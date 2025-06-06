---
title: AddRowRenderer class
slug: api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class
sidebar:
  order: 100
---

## Extends
[DropDownRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#protected-properties-1)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#element)
- [labelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#labelelement)
- [menu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#menu)
- [panel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#panel)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#protected-methods-1)
- [closeEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#closeeditor)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#getclassestoadd)
- [getEmptyText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#getemptytext)
- [getLabelText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#getlabeltext)
- [getMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#getmenu)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#iseditable)
- [itemSelected](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#itemselected)
- [renderEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#rendereditor)
- [renderLabelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#renderlabelelement)
- [showEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class/#showeditor)


## Constructors

---
#### constructor

⊕ new AddRowRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class),entitiesMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class),slot?: `HTMLDivElement`): [AddRowRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/addrowrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)
- entitiesMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### element

● element: `HTMLDivElement`

---
### labelElement

● labelElement: `HTMLElement`

---
### menu

● menu: [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)

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
▸ render(isEditMode?: `boolean`): `HTMLDivElement`

#### Parameters:
- isEditMode: `boolean`, *Default value* = `false`


**Returns** `HTMLDivElement`


---
## Protected Methods

---
### closeEditor
▸ closeEditor(): `void`


**Returns** `void`


---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`


---
### getEmptyText
▸ getEmptyText(): `string`


**Returns** `string`


---
### getLabelText
▸ getLabelText(): `string`


**Returns** `string`


---
### getMenu
▸ getMenu(): [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


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
### renderEditor
▸ renderEditor(): `void`


**Returns** `void`


---
### renderLabelElement
▸ renderLabelElement(): `HTMLElement`


**Returns** `HTMLElement`


---
### showEditor
▸ showEditor(): `void`


**Returns** `void`


---
