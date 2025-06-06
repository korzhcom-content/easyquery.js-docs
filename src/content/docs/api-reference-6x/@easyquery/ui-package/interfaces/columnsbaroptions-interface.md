---
title: ColumnsBarOptions interface
slug: api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface
sidebar:
  order: 100
---

Columns bar options

## Extends
[ColumnsPanelOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnspaneloptions-interface)

## Index
### [Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#properties-1)
- [accentActiveColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#accentactivecolumn)
- [activeColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#activecolumn)
- [adjustEntitiesMenuHeight](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#adjustentitiesmenuheight)
- [allowAggrColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#allowaggrcolumns)
- [allowCustomExpressions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#allowcustomexpressions)
- [allowDragDrop](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#allowdragdrop)
- [allowDuplicates](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#allowduplicates)
- [allowSorting](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#allowsorting)
- [alwaysShowButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#alwaysshowbuttons)
- [attrElementFormat](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#attrelementformat)
- [attrPlacement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#attrplacement)
- [columnRenderedCallback](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#columnrenderedcallback)
- [customExpressionText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#customexpressiontext)
- [domWriteItemsId](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#domwriteitemsid)
- [isSubQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#issubquery)
- [menuOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#menuoptions)
- [menuSearchBoxAfter](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#menusearchboxafter)
- [showAddRow](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#showaddrow)
- [showColumnTitles](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#showcolumntitles)
- [showHeader](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#showheader)
- [sortEntities](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#sortentities)
- [titleElementFormat](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/columnsbaroptions-interface/#titleelementformat)



## Properties

---
### accentActiveColumn

Gets or sets a value indicating whether the active column should be backlighted and permanently display the service buttons

● accentActiveColumn: `boolean`

---
### activeColumn

● activeColumn?: `any`

---
### adjustEntitiesMenuHeight

● adjustEntitiesMenuHeight?: `boolean`

---
### allowAggrColumns

Gets or sets a value indicating whether columns panel allows user to use aggregated columns

● allowAggrColumns?: `boolean`

---
### allowCustomExpressions

Gets or sets a value indicating whether it's allowed to use a custom expression for the column definition instead of some entity attribute.
If it's turned on - a new menu item appears in the menu dropped on clicking on [f] button.

● allowCustomExpressions?: `boolean`

---
### allowDragDrop

Gets or sets a value indicating whether the columns may be dragged and dropped

● allowDragDrop?: `boolean`

---
### allowDuplicates

Gets or sets a value indicating whether it's allowed to add exactly the same column more than once

● allowDuplicates?: `boolean`

---
### allowSorting

Gets or sets a value indicating whether columns panel allows user to set columns sorting

● allowSorting?: `boolean`

---
### alwaysShowButtons

Gets or sets a value indicating whether the service buttons are permanently displayed in all columns (`true`), or just in active column and the column user moves the cursor over (`false`)

● alwaysShowButtons?: `boolean`

---
### attrElementFormat

Gets or sets the format of the attribute display name. `{entity}` is replaced with entity name, `{attr}` is replaced with attribute name

● attrElementFormat?: `string`

---
### attrPlacement

Defines where to display attributes in the tree:
`0` - attributes are displayed after entities
`1` - attributes are displayed before entities
`2` - attributes and entities are mixed, and displayed in alphabetical order. In this case the "sortEntities" option value dosn't matter.

● attrPlacement?: `number`

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
### customExpressionText

Gets or sets a value which defines what text should be used for custom expressions' links. Possible values are:
`0` - show the SQL expression itself. Default behaviour.
`1` - show special [Custom SQL] text.
`2` - show column's title.

● customExpressionText?: `number`

---
### domWriteItemsId

● domWriteItemsId?: `boolean`

---
### isSubQuery

● isSubQuery?: `boolean`

---
### menuOptions

Contains different options for popup menu that appears for selecting attributes in columns.

● menuOptions?: `any`

---
### menuSearchBoxAfter

If the number of items in drop down menu exceeds this number then a search box will be displayed. Set this option to 0 if want to show the search box in any case

● menuSearchBoxAfter?: `number`

---
### showAddRow

Gets or sets a value indicating whether columns panel must show a special `add column` link at the bottom

● showAddRow?: `boolean`

---
### showColumnTitles

Gets or sets a value indicating whether columns panel must show an editable caption for each column (i.e. `SELECT ColumnName AS ColumnCaption...`)

● showColumnTitles?: `boolean`

---
### showHeader

Gets or sets a value indicating whether columns panel must show a header at the top

● showHeader?: `boolean`

---
### sortEntities

Defines whether entities and attributes should be sorted alphabetically. If false, they are displayed as listed in the model.

● sortEntities?: `boolean`

---
### titleElementFormat

Gets or sets the format of column's title display name. `{entity}` is replaced with entity name, `{attr}` is replaced with attribute name.
Default value is null which means that columns panel will use the same format as it's set to attrElementFormat option

● titleElementFormat?: `string`

---
