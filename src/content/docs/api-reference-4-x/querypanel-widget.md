---
title: QueryPanel widget
slug: api-reference-4-x/querypanel-widget
sidebar:
  order: 100
---

This widget represents a "conditions panel" - a rectangular area of your web-page which contains hierarchical list of query conditions
and provides some operations for manipulating with that list: add a new condition or condition group, remove an existing condition, enable/disable conditions, etc.
All options of **QueryPanel** widgets can be set through ''queryPanel'' property of ''easyQuerySettings'' global variable.
Of course you can also set options and call methods of **QueryPanel** in an usual for jQuery widgets way.

## **Options** ##

### showRootRow ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether query panel must show a root row which represents the main group of conditions


### showAddRow ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether query panel must show a special [add condition] link at the bottom


### showCheckboxes ###

Type: `Boolean`    
Default: `false`    
Gets or sets a value indicating whether query panel must show a checkbox at the beginning of each condition row.
User will be able to use these checkboxes to enable/disable corresponding query conditions


### allowParameterization ###

Type: `Boolean`    
Default: `false`    
Gets or sets a value indicating whether query panel shows "toggle parameterization" button which aloows to mark each condition as parameterized.


### allowInJoinConditions ###

Type: `Boolean`    
Default: `false`    
Gets or sets a value indicating whether query panel allows to place some conditions in to JOIN clause instead of WHERE.


### showPoweredBy ###

Type: `Boolean`    
Default: `true`    
Allows to turn off "Powered by EasyQuery" link shown in the bottom right cornder of query panel. Works only in the full version of the script.


### buttons ###

Type: `Object`    
Default: ``    
Defines which buttons should be shown in the condition/predicate when the mouse is over.
Possible values are:
- "addCondition" - the button that allows to add new condition. Is shown in predicates only.
- "addPredicate" - the button that allows to add new predicate. Is shown in predicates only.
- "enable" - the button that allows to enable or disable certain condition.
- "delete" - the button that allows to delete certain condition.
- "menu" - the button that shows menu with all available actions for the condition/predicate, including the actions that are not available using other buttons.
By default the option is not set, it actually means
{
  condition: ["enable", "delete"]
  predicate: ["addCondition", "addPredicate", "enable", "delete"]
}


### alwaysShowButtonsInPredicates ###

Type: `Boolean`    
Default: `false`    
If true QueryPanel widget will always show button in predicate (group) rows.
Instead of default behaviour when they are shown only on mouse over.


### alwaysShowButtonsInConditions ###

Type: `Boolean`    
Default: `false`    
If true QueryPanel widget will always show button in condition rows.
Instead of default behaviour when they are shown only on mouse over.


### showConjunctions ###

Type: `Boolean`    
Default: `true`    
If true QueryPanel widget will show conjunction elements ("and" or "or") at the beginning of each condition.


### accentActiveCondition ###

Type: `Boolean`    
Default: `true`    
If true the active condition (the one user clicked on previously) will have accent background color.


### activateRootOnStart ###

Type: `Boolean`    
Default: `true`    
If true root predicate row become active at the beginning.


### dateFormatValue ###

Type: `String`    
Default: ``    
A string that represents the format of date values used in date/time picker widget.
For a full list of the possible formats see documention for JQuery UI Datepicker Widget: http://api.jqueryui.com/datepicker/#utility-formatDate


### dateFormatDisplay ###

Type: `String`    
Default: `d MM, yy`    
The format of date values used in condition rows.
For a full list of the possible formats see documention for JQuery UI Datepicker Widget: http://api.jqueryui.com/datepicker/#utility-formatDate


### yearRange ###

Type: `String`    
Default: `c-10:c+10`    
The range of years displayed in the year drop-down: either relative to today's year ("-nn:+nn"), relative to the currently selected year ("c-nn:c+nn"), absolute ("nnnn:nnnn"), or combinations of these formats ("nnnn:-nn").


### attrElementFormat ###

Type: `String`    
Default: `{entity} {attr}`    
The format of entity attributes used in query panel conditions.
You can set it to '{attr}' to shown only attribute part (without entity name)


### menuOptions ###

Type: `Object`    
Default: ``    
Contains different options for popup menu that appears for selecting attributes, operators or values in condition.\\
Includes the following sub-options:


### allowDragDrop ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether it's possible to drag attributes from EntitiesPanel and drop them into QueryPanel to create new conditions.


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


### subQueryDialogWidth ###

Type: `Integer`    
Default: `600`    
Sets or gets the width of sub-query dialog


### subQueryDialogHeight ###

Type: `Integer`    
Default: `300`    
Sets or gets the height of sub-query dialog


### dialogZIndex ###

Type: `Integer`    
Default: `100000`    
Sets or gets the ZIndex property of the different dialogs used in QueryPanel (including the sub-query dialog)


### numberDecimalSeparatorDisplay ###

Type: `String`    
Default: `.`    
Sets or gets the symbol which is used as decimal separator


### numberListSeparators ###

Type: `List`    
Default: `[',', ';']`    
Sets or gets the symbols which are recognized as list items separators
(for example when user is supposed to enter a list of values in a text box).


### autoEditNewCondition ###

Type: `Boolean`    
Default: `false`    
If true the QueryPanel will automaticall show value editor for any new (just added) condition.


### conditionRenderedCallback ###

Type: `function`    
Default: `null`    
The callback that is called when the condition's row has been rendered. It allows you to make any changes you need to the markup of the row.
Parameters:
    condDiv - jQuery object that represents the condition's row div
For example, if you need to add some class:
 ```javascript 
conditionRenderedCallbackHandler: function (condDiv) {
   condDiv.addClass("some-cool-class");
}
```


### predicateRenderedCallback ###

Type: `function`    
Default: `null`    
The callback that is called when the predicate's row has been rendered. It allows you to make any changes you need to the markup of the row.
Parameters:
    predDiv - jQuery object that represents the predicate's row div
For example, if you need to add some class:
 ```javascript 
predicateRenderedCallbackHandler: function (predDiv) {
   predDiv.addClass("some-cool-class");
}
```



## **Methods** ##

## *clearConditions* ##
Clears the list of conditions in associated query and redraws a panel if needed

 ```javascript 
    var QueryPanelDiv = $("#QueryPanel");
    QueryPanelDiv.QueryPanel('clearConditions');
``` 


## *clearQuery* ##
Clears all parts (list of conditions, list of columns) in associated query and redraws a panel if needed

 ```javascript 
    var QueryPanelDiv = $("#QueryPanel");
    QueryPanelDiv.QueryPanel('clearQuery');
``` 


## *editConditionValue* ##
Turns the row for condition passed in parameter into "edit" mode.
If no parameter is passed then it switch on edit mode for current active row.

 ```javascript 
    var QueryPanelDiv = $("#QueryPanel");
    QueryPanelDiv.QueryPanel('editConditionValue');
``` 


## *addNewCondition* ##
Creates a new simple condition with attribute and operator based on their IDs passed in parameters
and then adds this new condition into the root predicate.
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `attrid` | *String* | Attribute ID. By default attribute ID is equals to TableName.FieldName of corresponding column. |
| `operid` | *String* | Operator ID (e.g. 'Equals', 'StartsWith', etc). |

 ```javascript 
    var QueryPanelDiv = $("#QueryPanel");
    QueryPanelDiv.QueryPanel('addNewCondition', 'Orders.Paid', 'IsTrue');
``` 


## *setActiveConditionWidget* ##
Activates the particular condition in the panel
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `conditionWidget` | *Object* | The ConditionRow_SMPL or ConditionRow_PDCT object to activate. |
Here is an example how to set **QueryPanel** options when you initialize ''easyQuerySettings'' variable:
 ```javascript 
window.easyQuerySettings = {
    serviceUrl: "/EasyQuery",
    modelName: "YourModelName", //put the name of your model here
    .   .   .   .   .   .   .
    queryPanel: {
        showCheckBoxes: true,
        attrElementFormat: "{attr}", //show only attribute instead of "{entity} {attr}" format used by default.
        .   .   .   .   .   .
    }
    .   .   .   .   .   .
}
``` 
An example of seting some **QueryPanel** option in code using ''option'' method:
 ```javascript 
var QPDiv = $('#QueryPanel');
if (QPDiv.length > 0) {
   QPDiv.QueryPanel("option", "showRootRow", false);
}
```
If you include ''eq.view.js'' script on your page then this widget (as well as **ColumnsPanel** and **EntitiesPanel**) is initilized implicitly (on page load) for all DOM elements with id "QueryPanel". So, you just need to make the following changes on your page:
\\
1. Define a placeholder
 ```javascript <div id="QueryPanel"></div>``` 
2. Include ''eq.all.min.js'' and ''eq.view.js'' on your page (after jQuery and jQuery UI).
