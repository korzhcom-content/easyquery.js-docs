---
title: ColumnsPanel widget
slug: api-reference-old/api-reference-4-x/columnspanel-widget
sidebar:
  order: 100
---

This widget represents "columns panel" - a rectangular area of your web-page which contains the list of query result columns
and provides some operations for manipulating with that list: add/remove a column, change its type, set column's sorting, etc.\\
All options of **ColumnsPanel** widgets can be set through ''columnsPanel'' property of ''easyQuerySettings'' global variable.
Of course you can also set options and call methods of **ColumnsPanel** in an usual for jQuery widgets way.

## **Options** ##

### showAddRow ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether columns panel must show a special [add column] link at the bottom


### showHeader ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether columns panel must show a header at the top


### showColumnCaptions ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether columns panel must show an editable caption for each column (i.e. "SELECT ColumnName AS ColumnCaption...")


### allowAggrColumns ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether columns panel allows user to use aggregated columns


### allowDuplicates ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether it's allowed to add exactly the same column more than once


### allowCustomExpressions ###

Type: `Boolean`    
Default: `false`    
Gets or sets a value indicating whether it's allowed to use a custom expression for the column definition instead of some entity attribute.
If it's turned on - a new menu item appears in the menu dropped on clicking on [f] button.
///


### allowSorting ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether columns panel allows user to set columns sorting


### attrElementFormat ###

Type: `String`    
Default: `'{entity} {attr}'`    
Gets or sets the format of the attribute display name. '{entity}' is replaced with entity name, '{attr}' is replaced with attribute name


### titleElementFormat ###

Type: `String`    
Default: `null`    
Gets or sets the format of column's title display name. '{entity}' is replaced with entity name, '{attr}' is replaced with attribute name.
Default value is null which means that columns panel will use the same format as it's set to attrElementFormat option
///


### alwaysShowButtons ###

Type: `Boolean`    
Default: `false`    
Gets or sets a value indicating whether the service buttons are permanently displayed in all columns (true), or just in active column and the column user moves the cursor over (false)


### accentActiveColumn ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether the active column should be backlighted and permanently display the service buttons


### menuSearchBoxAfter ###

Type: `Number`    
Default: `30`    
If the number of items in drop down menu exceeds this number then a search box will be displayed. Set this option to 0 if want to show the search box in any case


### allowDragDrop ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether the columns may be dragged and dropped


### menuOptions ###

Type: `Object`    
Default: ``    
Contains different options for popup menu that appears for selecting attributes in columns.\\
Includes the following sub-options:


### attrPlacement ###

Type: `Integer`    
Default: `0`    
Defines where to display attributes in the tree:
0 - attributes are displayed after entities
1 - attributes are displayed before entities
2 - attributes and entities are mixed, and displayed in alphabetical order. In this case the "sortEntities" option value dosn't matter.


### sortEntities ###

Type: `Integer`    
Default: `false`    
Defines whether entities and attributes should be sorted alphabetically. If false, they are displayed as listed in the model.


### columnRenderedCallback ###

Type: `function`    
Default: `null`    
The callback that is called when the column's row has been rendered. It allows you to make any changes you need to the markup of the row.
Parameters:
    columnDiv - jQuery object that represents the column's row div
For example, if you need to add some class:
 ```javascript 
columnRenderedCallbackHandler: function (columnDiv) {
   columnDiv.addClass("some-cool-class");
}
```


### customExpressionText ###

Type: `Integer`    
Default: `0`    
Gets or sets a value which defines what text should be used for custom expressions' links. Possible values are:
  0 - show the SQL expression itself. Default behaviour.
  1 - show special [Custom SQL] text.
  2 - show column's title.



## **Methods** ##

## *clearColumns* ##
Clears the list of columns in associated query and redraws a panel, if needed.

This method is deprecated. Use Query.clearColumns() instead.


## *addNewColumn* ##
Returns: `The added column object`    
Returns type: `PlainObject`    
Adds a new column to the query and updates the columns panel
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `attrid` | *String (or Array of Strings)* | The ID (or the array of IDs) of the attribute the new column is based on. |
| `index` | *Integer* | The position in the columns list the new column(s) should be inserted to. If undefined, the column is added to the end of the list. |

## *addColumn* ##
Adds a new column to the query and updates the columns panel
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `column` | *PlainObject (or Array of PlainObject)* | The column object (or the array of such objects) to be added. |
| `index` | *Integer* | The position in the columns list the new column(s) should be inserted to. If undefined, the column is added to the end of the list. |

## *removeColumn* ##
Remove the column object from the list of columns and updates the columns panel
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `column` | *PlainObject* | The column object to be removed. |

## *removeColumnByAttrId* ##
Remove the column object from the list of columns and updates the columns panel
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `attrId` | *String* | The ID of the attribute. The first found column with such an attribute ID will be removed. |

## *moveColumn* ##
Moves the column object from its current position to specified direction
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `column` | *PlainObject* | The column object to be moved. |
| `direction` | *String* | One of the following: 'MoveTop', 'MoveUp', 'MoveDown', 'MoveBottom' |

## *refresh* ##
Re-renders the panel

## *setActiveColumnWidget* ##
Activates the particular column in the panel
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `columnWidget` | *Object* | The ColumnRow_ENTATTR or ColumnRow_AGGRFUNC object to activate. |
Here is an example how to set **ColumnsPanel** options when you initialize ''easyQuerySettings'' variable:
 ```javascript 
window.easyQuerySettings = {
    serviceUrl: "/EasyQuery",
    modelName: "YourModelName", //put the name of your model here
    .   .   .   .   .   .   .
    columnsPanel: {
        allowAggrColumns: true,
        attrElementFormat: "{attr}", //show only attribute instead of "{entity} {attr}" format used by default.
        showColumnCaptions: true,
        .   .   .   .   .   .
    }
    .   .   .   .   .   .
}
``` 
An example of setting some **ColumnsPanel** option in code using ''option'' method:
 ```javascript 
var QCDiv = $('#QueryColumn');
if (QCDiv.length > 0) {
   QCDiv.ColumnsPanel("option", "showHeader", false)
}
```
If you include ''eq.view.js'' script on your page then this widget (as well as **QueryPanel** and **EntitiesPanel**) is initilized implicitly (on page load) for all DOM elements with id "ColumnsPanel". So all you need to do to add on your page is:\\
\\
1. Define a placeholder
 ```javascript <div id="ColumnsPanel"></div>``` 
2. Include ''eq.all.min.js'' and ''eq.view.js'' on your page (after jQuery and jQuery UI).
