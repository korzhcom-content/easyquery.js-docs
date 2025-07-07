---
title: OperatorRenderer class
slug: api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class
sidebar:
  order: 100
---

## Extends
[DropDownRenderer](api-reference-7x/easyquery-packages/ui-package/classes/dropdownrenderer-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#protected-properties-1)
- [condition](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#condition)
- [displayedText](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#displayedtext)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#element)
- [labelElement](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#labelelement)
- [menu](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#menu)
- [panel](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#panel)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#public-methods-1)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#refresh)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#render)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#protected-methods-1)
- [closeEditor](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#closeeditor)
- [getClassesToAdd](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#getclassestoadd)
- [getEmptyText](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#getemptytext)
- [getLabelText](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#getlabeltext)
- [getMenu](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#getmenu)
- [isEditable](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#iseditable)
- [itemSelected](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#itemselected)
- [renderEditor](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#rendereditor)
- [renderLabelElement](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#renderlabelelement)
- [showEditor](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class#showeditor)


## Constructors

---
#### constructor

⊕ new OperatorRenderer(panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class),condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class),text: `string`,slot?: `HTMLDivElement`): [OperatorRenderer](api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class)

#### Parameters:
- panel: [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)
- condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)
- text: `string`
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### condition

● condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)

---
### displayedText

● displayedText: `string`

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
