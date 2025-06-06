---
title: OperatorRenderer class
slug: api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class
sidebar:
  order: 100
---

## Extends
[DropDownRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dropdownrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#protected-properties-1)
- [condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#condition)
- [displayedText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#displayedtext)
- [displayedTextElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#displayedtextelement)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#element)
- [menu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#menu)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#panel)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#protected-methods-1)
- [appear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#appear)
- [disappear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#disappear)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#getclassestoadd)
- [getDisplayedElementText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#getdisplayedelementtext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#getemptytext)
- [getMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#getmenu)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#iseditable)
- [itemSelected](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#itemselected)
- [renderDisplayedText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#renderdisplayedtext)
- [renderEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class/#rendereditor)


## Constructors

---
#### constructor

⊕ new OperatorRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class),condition: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class),text: `string`,slot?: `HTMLDivElement`): [OperatorRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/operatorrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)
- condition: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)
- text: `string`
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### condition

● condition: [Condition](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/condition-class)

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

● menu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)

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
