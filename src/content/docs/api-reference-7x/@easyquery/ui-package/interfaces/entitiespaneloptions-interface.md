---
title: EntitiesPanelOptions interface
slug: >-
  api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface
sidebar:
  order: 100
---

EntitiesPanel options

## Index
### [Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#properties-1)
- [attrPlacement](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#attrplacement)
- [attributeRenderedCallback](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#attributerenderedcallback)
- [autoClearSelection](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#autoclearselection)
- [columnTitleFormat](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#columntitleformat)
- [draggableAttributes](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#draggableattributes)
- [entityRenderedCallback](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#entityrenderedcallback)
- [filterBoxMode](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#filterboxmode)
- [showAddColumnButton](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showaddcolumnbutton)
- [showAddConditionButton](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showaddconditionbutton)
- [showAttributes](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showattributes)
- [showCheckboxes](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showcheckboxes)
- [showClearSelectionButton](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showclearselectionbutton)
- [showFilterBox](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showfilterbox)
- [showIndicatorOnLoad](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showindicatoronload)
- [showSelectAllButton](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showselectallbutton)
- [showToolbar](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showtoolbar)
- [showTooltips](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#showtooltips)
- [sortEntities](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#sortentities)
- [syncWithColumns](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/entitiespaneloptions-interface/#syncwithcolumns)



## Properties

---
### attrPlacement

Defines where to display attributes in the tree:
`0` - attributes are displayed after entities
`1` - attributes are displayed before entities
`2` - attributes and entities are mixed, and displayed in alphabetical order. In this case the `sortEntities` option value dosn't matter.

● attrPlacement?: `number`

---
### attributeRenderedCallback

The callback that is called when the attribute node has been rendered. It allows you to make any changes you need to the markup of the node.
Parameters:
    `attrNode` - jQuery object that represents the node div

● attributeRenderedCallback?: (attrNode: `HTMLElement`) => `void`
#### Example: 
```typescript

attributeRenderedCallbackHandler: function (attrNode) {
   attrNode.addClass("some-cool-class");
}

```

---
### autoClearSelection

Defines whether all selections will be cleared automatically after `add columns` or `add conditions` operation.

● autoClearSelection?: `boolean`

---
### columnTitleFormat

Gets or sets column title format that will be used on adding selected attributes as columns

● columnTitleFormat?: `string`

---
### draggableAttributes

● draggableAttributes?: `boolean`

---
### entityRenderedCallback

The callback that is called when the entity node has been rendered. It allows you to make any changes you need to the markup of the node.
Parameters:
     `entNode` - jQuery object that represents the node div

● entityRenderedCallback?: (entNode: `HTMLElement`) => `void`
#### Example: 
```typescript

entityRenderedCallbackHandler: function (entNode) {
     entNode.addClass("some-cool-class");
}

```

---
### filterBoxMode

Gets or sets a value defining how the search is performed in EntitiesPanel. Values:
`0` - checks if node name contains the filter text. Default behaviour.
`1` - checks if node name starts with the filter text.

● filterBoxMode?: `number`

---
### showAddColumnButton

● showAddColumnButton?: `boolean`

---
### showAddConditionButton

● showAddConditionButton?: `boolean`

---
### showAttributes

Gets or sets a value defining which attributes from the model should be shown in the tree. Each attribute in the model has `Use in conditions`, `Use in columns`, `Use in sorting` properties. This option allows to filter all the attributes by these properties values.

● showAttributes?: [UseInOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/useinoptions-interface)

---
### showCheckboxes

● showCheckboxes?: `boolean`

---
### showClearSelectionButton

● showClearSelectionButton?: `boolean`

---
### showFilterBox

● showFilterBox?: `boolean`

---
### showIndicatorOnLoad

Gets or sets a value indicating whether a progress indicator should appear while th emodel is loading

● showIndicatorOnLoad?: `boolean`

---
### showSelectAllButton

● showSelectAllButton?: `boolean`

---
### showToolbar

● showToolbar?: `boolean`

---
### showTooltips

● showTooltips?: `boolean`

---
### sortEntities

Defines whether entities and attributes should be sorted alphabetically. If false, they are displayed as listed in the model.

● sortEntities?: `boolean`

---
### syncWithColumns

● syncWithColumns?: `boolean`

---
