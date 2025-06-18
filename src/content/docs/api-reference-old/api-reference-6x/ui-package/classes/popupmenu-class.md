---
title: PopupMenu class
slug: api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#public-properties-1)
- [isCursorInside](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#iscursorinside)
- [maxHeight](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#maxheight)
- [maxItemWidth](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#maxitemwidth)
- [minItemWidth](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#minitemwidth)
- [style](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#style)
- [zIndex](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#zindex)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#public-methods-1)
- [getItemFilterCallback](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#getitemfiltercallback)
- [getItems](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#getitems)
- [getRootLevel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#getrootlevel)
- [hideMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#hidemenu)
- [knockMenuStyle](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#knockmenustyle)
- [refreshCheckboxes](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#refreshcheckboxes)
- [refreshItems](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#refreshitems)
- [showMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#showmenu)
- [submitMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class/#submitmenu)


## Constructors

---
#### constructor

⊕ new PopupMenu(options?: [PopupMenuOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/popupmenuoptions-interface)): [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)

#### Parameters:
- options: [PopupMenuOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/popupmenuoptions-interface), *Optional* 


---

## Public Properties

---
### isCursorInside

● isCursorInside: `boolean` = `false`

---
### maxHeight

● maxHeight: `number`

---
### maxItemWidth

● maxItemWidth: `number`

---
### minItemWidth

● minItemWidth: `number`

---
### style

● style: `any`

---
### zIndex

● zIndex: `string`

---
## Public Methods

---
### getItemFilterCallback
▸ getItemFilterCallback(): (item: [MenuItem](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/menuitem-interface)) => `boolean`


**Returns** (item: [MenuItem](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/menuitem-interface)) => `boolean`

---
### getItems
▸ getItems(): [MenuItem](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/menuitem-interface)[]


**Returns** [MenuItem](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/menuitem-interface)[]

---
### getRootLevel
▸ getRootLevel(): `MenuLevel`


**Returns** `MenuLevel`

---
### hideMenu
▸ hideMenu(): `void`


**Returns** `void`

---
### knockMenuStyle
▸ knockMenuStyle(menu: `HTMLElement`): `void`

#### Parameters:
- menu: `HTMLElement`


**Returns** `void`

---
### refreshCheckboxes
▸ refreshCheckboxes(): `void`


**Returns** `void`

---
### refreshItems
▸ refreshItems(): `void`


**Returns** `void`

---
### showMenu
▸ showMenu(options: [PopupMenuOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/popupmenuoptions-interface)): `void`

#### Parameters:
- options: [PopupMenuOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/popupmenuoptions-interface)


**Returns** `void`

---
### submitMenu
▸ submitMenu(menuItem: `any`,selectedItems: `any`): `void`

#### Parameters:
- menuItem: `any`
- selectedItems: `any`


**Returns** `void`

---
