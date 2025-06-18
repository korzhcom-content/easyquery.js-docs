---
title: QueryPanelOptions interface
slug: >-
  api-reference-old/api-reference-5-x/ui-package/interfaces/querypaneloptions-interface
sidebar:
  order: 100
---

Query panel options

## Index
### [Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#properties-1)
- [accentActiveCondition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#accentactivecondition)
- [activateRootOnStart](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#activaterootonstart)
- [activeCondition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#activecondition)
- [allowDragDrop](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#allowdragdrop)
- [allowInJoinConditions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#allowinjoinconditions)
- [allowParameterization](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#allowparameterization)
- [alwaysShowButtonsInConditions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#alwaysshowbuttonsinconditions)
- [alwaysShowButtonsInPredicates](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#alwaysshowbuttonsinpredicates)
- [attrElementFormat](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#attrelementformat)
- [attrPlacement](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#attrplacement)
- [autoEditNewCondition](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#autoeditnewcondition)
- [buttons](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#buttons)
- [conditionRenderedCallback](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#conditionrenderedcallback)
- [dateFormatDisplay](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#dateformatdisplay)
- [dateFormatValue](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#dateformatvalue)
- [defaultQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#defaultquery)
- [dialogZIndex](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#dialogzindex)
- [entitiesListFilter](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#entitieslistfilter)
- [entitiesPopupHandler](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#entitiespopuphandler)
- [isSubQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#issubquery)
- [menuContainer](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#menucontainer)
- [menuOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#menuoptions)
- [numberDecimalSeparatorDisplay](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#numberdecimalseparatordisplay)
- [numberListSeparators](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#numberlistseparators)
- [predicateRenderedCallback](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#predicaterenderedcallback)
- [showAddRow](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#showaddrow)
- [showCheckboxes](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#showcheckboxes)
- [showConjunctions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#showconjunctions)
- [showPoweredBy](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#showpoweredby)
- [showRootRow](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#showrootrow)
- [sortEntities](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#sortentities)
- [subQueryDialogHeight](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#subquerydialogheight)
- [subQueryDialogWidth](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#subquerydialogwidth)
- [yearRange](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/querypaneloptions-interface/#yearrange)



## Properties

---
### accentActiveCondition

If true the active condition (the one user clicked on previously) will have accent background color.

● accentActiveCondition?: `true`

---
### activateRootOnStart

If `true` root predicate row become active at the beginning.

● activateRootOnStart?: `true`

---
### activeCondition

● activeCondition?: `null`

---
### allowDragDrop

Gets or sets a value indicating whether it's possible to drag attributes from EntitiesPanel and drop them into QueryPanel to create new conditions.

● allowDragDrop?: `boolean`

---
### allowInJoinConditions

Gets or sets a value indicating whether query panel allows to place some conditions in to `JOIN` clause instead of `WHERE`.

● allowInJoinConditions?: `boolean`

---
### allowParameterization

Gets or sets a value indicating whether query panel shows "toggle parameterization" button which aloows to mark each condition as parameterized.

● allowParameterization?: `boolean`

---
### alwaysShowButtonsInConditions

If true QueryPanel widget will always show button in condition rows.
Instead of default behaviour when they are shown only on mouse over.

● alwaysShowButtonsInConditions?: `false`

---
### alwaysShowButtonsInPredicates

If true QueryPanel widget will always show button in predicate (group) rows.
Instead of default behaviour when they are shown only on mouse over.

● alwaysShowButtonsInPredicates?: `false`

---
### attrElementFormat

The format of entity attributes used in query panel conditions.
You can set it to `{attr}` to shown only attribute part (without entity name)

● attrElementFormat?: `string`

---
### attrPlacement

Defines where to display attributes in the tree:
`0` - attributes are displayed after entities
`1` - attributes are displayed before entities
`2` - attributes and entities are mixed, and displayed in alphabetical order. In this case the `sortEntities` option value dosn't matter.

● attrPlacement?: `number`

---
### autoEditNewCondition

If `true` the QueryPanel will automaticall show value editor for any new (just added) condition

● autoEditNewCondition?: `boolean`

---
### buttons

Defines which buttons should be shown in the condition/predicate when the mouse is over.
Possible values are:
- `"addCondition"` - the button that allows to add new condition. Is shown in predicates only.
- `"addPredicate"` - the button that allows to add new predicate. Is shown in predicates only.
- `"enable"` - the button that allows to enable or disable certain condition.
- `"delete"` - the button that allows to delete certain condition.
- `"menu"` - the button that shows menu with all available actions for the condition/predicate, including the actions that are not available using other buttons.
By default the option is not set, it actually means
``` 
{
condition: ["enable", "delete"]
predicate: ["addCondition", "addPredicate", "enable", "delete"]
}
```

● buttons?: `any`

---
### conditionRenderedCallback

The callback that is called when the condition's row has been rendered. It allows you to make any changes you need to the markup of the row.
Parameters:
    condDiv - jQuery object that represents the condition's row div

● conditionRenderedCallback?: (conDiv: `HTMLDivElement`) => `void`
#### Example: 
```typescript

conditionRenderedCallbackHandler: function (condDiv) {
     condDiv.addClass("some-cool-class");
}

```

---
### dateFormatDisplay

The format of date values used in condition rows.

● dateFormatDisplay?: `string`

---
### dateFormatValue

A string that represents the format of date values used in date/time picker widget.

● dateFormatValue?: `string`

---
### defaultQuery

● defaultQuery?: [Query](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class)

---
### dialogZIndex

Sets or gets the ZIndex property of the different dialogs used in QueryPanel (including the sub-query dialog)

● dialogZIndex?: `number`

---
### entitiesListFilter

● entitiesListFilter?: `any`

---
### entitiesPopupHandler

● entitiesPopupHandler?: `any`

---
### isSubQuery

● isSubQuery?: `boolean`

---
### menuContainer

● menuContainer?: `HTMLElement`

---
### menuOptions

Contains different options for popup menu that appears for selecting attributes, operators or values in condition.

● menuOptions?: `any`

---
### numberDecimalSeparatorDisplay

Sets or gets the symbol which is used as decimal separator

● numberDecimalSeparatorDisplay?: `string`

---
### numberListSeparators

Sets or gets the symbols which are recognized as list items separators
(for example when user is supposed to enter a list of values in a text box).

● numberListSeparators?: `string`[]

---
### predicateRenderedCallback

The callback that is called when the predicate's row has been rendered. It allows you to make any changes you need to the markup of the row.
Parameters:
    predDiv - jQuery object that represents the predicate's row div

● predicateRenderedCallback?: (predDiv: `HTMLDivElement`) => `void`
#### Example: 
```typescript

predicateRenderedCallbackHandler: function (predDiv) {
     predDiv.addClass("some-cool-class");
}

```

---
### showAddRow

Gets or sets a value indicating whether query panel must show a special [add condition] link at the bottom

● showAddRow?: `boolean`

---
### showCheckboxes

Gets or sets a value indicating whether query panel must show a checkbox at the beginning of each condition row.
User will be able to use these checkboxes to enable/disable corresponding query conditions

● showCheckboxes?: `boolean`

---
### showConjunctions

 If true QueryPanel widget will show conjunction elements (`and` or `or`) at the beginning of each condition.

● showConjunctions?: `true`

---
### showPoweredBy

Allows to turn off "Powered by EasyQuery" link shown in the bottom right cornder of query panel. Works only in the full version of the script.

● showPoweredBy?: `boolean`

---
### showRootRow

Gets or sets a value indicating whether query panel must show a root row which represents the main group of conditions

● showRootRow?: `true`

---
### sortEntities

Defines whether entities and attributes should be sorted alphabetically. If false, they are displayed as listed in the model.

● sortEntities?: `number`

---
### subQueryDialogHeight

Sets or gets the height of sub-query dialog

● subQueryDialogHeight?: `number`

---
### subQueryDialogWidth

Sets or gets the width of sub-query dialog

● subQueryDialogWidth?: `number`

---
### yearRange

The range of years displayed in the year drop-down: either relative to today's year ("-nn:+nn"), relative to the currently selected year ("c-nn:c+nn"), absolute ("nnnn:nnnn"), or combinations of these formats ("nnnn:-nn").

● yearRange?: `string`

---
