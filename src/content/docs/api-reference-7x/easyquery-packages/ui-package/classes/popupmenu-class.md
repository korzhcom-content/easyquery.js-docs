---
title: PopupMenu class
slug: api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#public-properties-1)
- [isCursorInside](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#iscursorinside)
- [maxHeight](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#maxheight)
- [maxItemWidth](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#maxitemwidth)
- [minItemWidth](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#minitemwidth)
- [style](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#style)
- [zIndex](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#zindex)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#public-methods-1)
- [getItemFilterCallback](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#getitemfiltercallback)
- [getItems](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#getitems)
- [getRootLevel](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#getrootlevel)
- [hideMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#hidemenu)
- [knockMenuStyle](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#knockmenustyle)
- [refreshCheckboxes](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#refreshcheckboxes)
- [refreshItems](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#refreshitems)
- [showMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#showmenu)
- [submitMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class#submitmenu)


## Constructors

---
#### constructor

⊕ new PopupMenu(options?: [PopupMenuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/popupmenuoptions-interface)): [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)

#### Parameters:
- options: [PopupMenuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/popupmenuoptions-interface), *Optional* 


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
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

---
### getItemFilterCallback
▸ getItemFilterCallback(): (item: [MenuItem](api-reference-7x/easyquery-packages/ui-package/interfaces/menuitem-interface)) => `boolean`


**Returns** (item: [MenuItem](api-reference-7x/easyquery-packages/ui-package/interfaces/menuitem-interface)) => `boolean`


---
### getItems
▸ getItems(): [MenuItem](api-reference-7x/easyquery-packages/ui-package/interfaces/menuitem-interface)[]


**Returns** [MenuItem](api-reference-7x/easyquery-packages/ui-package/interfaces/menuitem-interface)[]


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
▸ showMenu(options: [PopupMenuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/popupmenuoptions-interface)): `void`

#### Parameters:
- options: [PopupMenuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/popupmenuoptions-interface)


**Returns** `void`


---
### submitMenu
▸ submitMenu(menuItem: `any`,selectedItems: `any`): `void`

#### Parameters:
- menuItem: `any`
- selectedItems: `any`


**Returns** `void`


---
