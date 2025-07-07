---
title: AddRowRenderer class
slug: api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class
sidebar:
  order: 100
---

## Extends
[DropDownRenderer](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#protected-properties-1)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#element)
- [labelElement](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#labelelement)
- [menu](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#menu)
- [panel](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#panel)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#public-methods-1)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#protected-methods-1)
- [closeEditor](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#closeeditor)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#getclassestoadd)
- [getEmptyText](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#getemptytext)
- [getLabelText](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#getlabeltext)
- [getMenu](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#getmenu)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#iseditable)
- [itemSelected](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#itemselected)
- [renderEditor](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#rendereditor)
- [renderLabelElement](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#renderlabelelement)
- [showEditor](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class#showeditor)


## Constructors

---
#### constructor

⊕ new AddRowRenderer(panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class),entitiesMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class),slot?: `HTMLDivElement`): [AddRowRenderer](api-reference-7x/easyquery-packages/ui-package/classes/addrowrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)
- entitiesMenu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)
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

● menu: [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)

---
### panel

● panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)

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
▸ getMenu(): [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


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
