---
title: EntitiesPanel widget
slug: api-reference-4-x/entitiespanel-widget
sidebar:
  order: 100
---

This widget represents "entities panel" - a rectangular area of your web-page which contains the tree of entities/attributes found in your model
and provides the way to add a column(s) to the columns panel and to add a condition(s) to query panel. This also includes drag-and-drop support.

## **Options** ##

### queryPanelId ###

Type: `String`    
Default: `QueryPanel`    
Gets or sets an ID of the query panel on the same page that will be used to add conditions to


### columnsPanelId ###

Type: `String`    
Default: `ColumnsPanel`    
Gets or sets an ID of the columns panel on the same page that will be used to add columns to


### showToolbar ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether entities panel should show a toolbar with buttons at the bottom


### showSelectAllButton ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether entities panel should show the "Select all" button on the toolbar


### showClearSelectionButton ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether entities panel should show the "Select none" button on the toolbar


### showAddColumnButton ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether entities panel should show the "Add column" button on the toolbar


### showAddConditionButton ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether entities panel should show the "Add condition" button on the toolbar


### showCheckboxes ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether tree nodes in entities panel should contain checkboxes that allow to select/deselect the nodes


### showTooltips ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether description property of the attribute/entity should be displayed as tooltip on hover


### clickableAttributes ###

Type: `Integer`    
Default: `0`    
Gets or sets a value defining what should happen when user clicks on the attribute node. Values:
  0 - nothing happen. Default behaviour.
  1 - attibute is added to conditions.
  2 - attribute is added to columns.
"draggableAttributes" option should be set to "false" in order to get values 1 and 2 worked.


### draggableAttributes ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether attributes may be dragged to be droppen at query panel or columns panel


### showAttributes ###

Type: `PlainObject`    
Default: `{ usedInConditions: true, usedInColumns: true, usedInSorting: false }`    
Gets or sets a value defining which attributes from the model should be shown in the tree. Each attribute in the model has "Use in conditions", "Use in columns", "Use in sorting" properties. This option allows to filter all the attributes by these properties values.


### showFilterBox ###

Type: `Boolean`    
Default: `false`    
Gets or sets a value indicating whether filtef box should be show to allow filtering of visible entities/attributes


### filterBoxMode ###

Type: `Integer`    
Default: `0`    
Gets or sets a value defining how the search is performed in EntitiesPanel. Values:
  0 - checks if node name contains the filter text. Default behaviour.
  1 - checks if node name starts with the filter text.


### showIndicatorOnLoad ###

Type: `Boolean`    
Default: `true`    
Gets or sets a value indicating whether a progress indicator should appear while th emodel is loading


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


### autoClearSelection ###

Type: `Integer`    
Default: `false`    
Defines whether all selections will be cleared automatically after "add columns" or "add conditions" operation.


### entityRenderedCallback ###

Type: `function`    
Default: `null`    
The callback that is called when the entity node has been rendered. It allows you to make any changes you need to the markup of the node.
Parameters:
    entNode - jQuery object that represents the node div
For example, if you need to add some class:
 ```javascript 
entityRenderedCallbackHandler: function (entNode) {
   entNode.addClass("some-cool-class");
}
```


### attributeRenderedCallback ###

Type: `function`    
Default: `null`    
The callback that is called when the attribute node has been rendered. It allows you to make any changes you need to the markup of the node.
Parameters:
    attrNode - jQuery object that represents the node div
For example, if you need to add some class:
 ```javascript 
attributeRenderedCallbackHandler: function (attrNode) {
   attrNode.addClass("some-cool-class");
}
```



## **Methods** ##

## *refresh* ##
Re-renders the panel
```javascript 
var EPDiv = $('#EntitiesPanel');
if (EPDiv.length > 0) {
   EPDiv.EntitiesPanel({
     showAddColumnButton: false,
     showAttributes: { usedInConditions: true, usedInColumns: false, usedInSorting: false }
   });
}
```
Usually this widget is initilized implicitly, through <see cref="F:EQ.client.init" /> function call
