---
title: ColumnsPanelOptions interface
slug: >-
  api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface
sidebar:
  order: 100
---

Columns panel options

## Index
### [Properties](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#properties-1)
- [accentActiveColumn](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#accentactivecolumn)
- [activeColumn](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#activecolumn)
- [adjustEntitiesMenuHeight](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#adjustentitiesmenuheight)
- [allowAggrColumns](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#allowaggrcolumns)
- [allowCustomExpressions](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#allowcustomexpressions)
- [allowDragDrop](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#allowdragdrop)
- [allowDuplicates](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#allowduplicates)
- [allowHiddenColumns](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#allowhiddencolumns)
- [allowInvisible](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#allowinvisible)
- [allowSorting](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#allowsorting)
- [alwaysShowButtons](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#alwaysshowbuttons)
- [attrElementFormat](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#attrelementformat)
- [attrPlacement](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#attrplacement)
- [buttons](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#buttons)
- [columnRenderedCallback](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#columnrenderedcallback)
- [customExpressionText](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#customexpressiontext)
- [domWriteItemsId](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#domwriteitemsid)
- [isSubQuery](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#issubquery)
- [menuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#menuoptions)
- [menuSearchBoxAfter](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#menusearchboxafter)
- [showAddRow](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#showaddrow)
- [showCheckboxes](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#showcheckboxes)
- [showColumnTitles](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#showcolumntitles)
- [showHeader](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#showheader)
- [sortEntities](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#sortentities)
- [titleElementFormat](api-reference-7x/easyquery-packages/ui-package/interfaces/columnspaneloptions-interface#titleelementformat)



## Properties

---
### accentActiveColumn

Gets or sets a value indicating whether the active column should be backlighted and permanently display the service buttons

● accentActiveColumn?: `boolean`

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
### allowHiddenColumns

● allowHiddenColumns?: `boolean`

---
### allowInvisible

● allowInvisible?: `boolean`

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
### buttons

Defines which buttons should be shown in the column when the mouse is over.
Possible values are:
- `"enable"` - the button that allows to enable or disable certain column.
- `"delete"` - the button that allows to delete certain column.
- `"type"` - the button that allows to select a column type (simple, aggregate, etc.).
- `"sorting"` - the button that allows to set column sorting and move columns.
- `"menu"` - the button that shows menu with all available actions for the column, including the actions that are not available using other buttons.
By default the option is not set, it actually means
``` ["enable", "delete", "function", "sorting"]```

● buttons?: `string`[]

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

● menuOptions?: [PopupMenuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/popupmenuoptions-interface)

---
### menuSearchBoxAfter

If the number of items in drop down menu exceeds this number then a search box will be displayed. Set this option to 0 if want to show the search box in any case

● menuSearchBoxAfter?: `number`

---
### showAddRow

Gets or sets a value indicating whether columns panel must show a special `add column` link at the bottom

● showAddRow?: `boolean`

---
### showCheckboxes

Get or sets a value indication wether checkboxes must be shown

● showCheckboxes?: `boolean`

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
