---
title: DropDownRenderer class
slug: api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class
sidebar:
  order: 100
---

## Extends
[BaseElementRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/baseelementrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#protected-properties-1)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#element)
- [labelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#labelelement)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#protected-methods-1)
- [closeEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#closeeditor)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#getclassestoadd)
- [getEmptyText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#getemptytext)
- [getLabelText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#getlabeltext)
- [getMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#getmenu)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#iseditable)
- [itemSelected](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#itemselected)
- [renderEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#rendereditor)
- [renderLabelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#renderlabelelement)
- [showEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class/#showeditor)


## Constructors

---
#### constructor

⊕ new DropDownRenderer(slot?: `HTMLDivElement`): [DropDownRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class)

#### Parameters:
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
