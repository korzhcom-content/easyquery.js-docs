---
title: SortingBarOptions interface
slug: >-
  api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface
sidebar:
  order: 100
---

## Index
### [Properties](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface#properties-1)
- [adjustEntitiesMenuHeight](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface#adjustentitiesmenuheight)
- [attrElementFormat](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface#attrelementformat)
- [columnRenderedCallback](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface#columnrenderedcallback)
- [domWriteItemsId](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface#domwriteitemsid)
- [menuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface#menuoptions)
- [showAddRow](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface#showaddrow)
- [titleElementFormat](api-reference-7x/easyquery-packages/ui-package/interfaces/sortingbaroptions-interface#titleelementformat)



## Properties

---
### adjustEntitiesMenuHeight

● adjustEntitiesMenuHeight?: `boolean`

---
### attrElementFormat

The format of entity attributes used in query panel conditions.
You can set it to `{attr}` to shown only attribute part (without entity name)

● attrElementFormat?: `string`

---
### columnRenderedCallback

The callback that is called when the column's row has been rendered. It allows you to make any changes you need to the markup of the row.
Parameters:
     `columnDiv` - jQuery object that represents the column's row div

● columnRenderedCallback?: (columnDiv: `HTMLDivElement`) => `void`
#### Example: 
```typescript

columnRenderedCallbackHandler: function (columnDiv) {
   columnDiv.addClass("some-cool-class");
}

```

---
### domWriteItemsId

● domWriteItemsId?: `boolean`

---
### menuOptions

Contains different options for popup menu that appears for selecting attributes in columns.

● menuOptions?: [PopupMenuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/popupmenuoptions-interface)

---
### showAddRow

Gets or sets a value indicating whether query panel must show a special [add condition] link at the bottom

● showAddRow?: `boolean`

---
### titleElementFormat

Gets or sets the format of column's title display name. `{entity}` is replaced with entity name, `{attr}` is replaced with attribute name.
Default value is null which means that columns panel will use the same format as it's set to attrElementFormat option

● titleElementFormat?: `string`

---
