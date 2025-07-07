---
title: DropDownRenderer class
slug: api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class
sidebar:
  order: 100
---

## Extends
[BaseElementRenderer](api-reference-7x/easyquery-packages/ui-package/classes/baseelementrenderer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#protected-properties-1)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#element)
- [labelElement](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#labelelement)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#public-methods-1)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#protected-methods-1)
- [closeEditor](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#closeeditor)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#getclassestoadd)
- [getEmptyText](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#getemptytext)
- [getLabelText](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#getlabeltext)
- [getMenu](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#getmenu)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#iseditable)
- [itemSelected](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#itemselected)
- [renderEditor](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#rendereditor)
- [renderLabelElement](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#renderlabelelement)
- [showEditor](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class#showeditor)


## Constructors

---
#### constructor

⊕ new DropDownRenderer(slot?: `HTMLDivElement`): [DropDownRenderer](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class)

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
