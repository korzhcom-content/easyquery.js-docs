---
title: OperatorRenderer class
slug: api-reference-7x/easyquery-packages/ui-package/classes/operatorrenderer-class
sidebar:
  order: 100
---

## Extends
[DropDownRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/dropdownrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#protected-properties-1)
- [condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#condition)
- [displayedText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#displayedtext)
- [element](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#element)
- [labelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#labelelement)
- [menu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#menu)
- [panel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#panel)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#protected-methods-1)
- [closeEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#closeeditor)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#getclassestoadd)
- [getEmptyText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#getemptytext)
- [getLabelText](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#getlabeltext)
- [getMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#getmenu)
- [isEditable](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#iseditable)
- [itemSelected](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#itemselected)
- [renderEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#rendereditor)
- [renderLabelElement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#renderlabelelement)
- [showEditor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class/#showeditor)


## Constructors

---
#### constructor

⊕ new OperatorRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class),condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class),text: `string`,slot?: `HTMLDivElement`): [OperatorRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/operatorrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)
- condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class)
- text: `string`
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### condition

● condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class)

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
