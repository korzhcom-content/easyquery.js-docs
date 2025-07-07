---
title: QueryPanel class
slug: api-reference-old/api-reference-6x/ui-package/classes/querypanel-class
sidebar:
  order: 100
---

The query panel wiget, implemented without JQuery.

## Extends
[Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#public-properties-1)
- [widgetType](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#protected-properties-1)
- [context](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#context)
- [group](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#group)
- [slot](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#slot)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#public-methods-1)
- [belongsToGroup](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#belongstogroup)
- [destroy](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#destroy)
- [getAddRowRenderer](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#getaddrowrenderer)
- [getConditionGroupMenu](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#getconditiongroupmenu)
- [getConditionMenu](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#getconditionmenu)
- [getConditionRenderer](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#getconditionrenderer)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#getcontext)
- [getEntitiesMenu](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#getentitiesmenu)
- [getExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#getexpressionrenderer)
- [getOperatorRenderer](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#getoperatorrenderer)
- [getQuery](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#getquery)
- [init](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#init)
- [onProcessEnd](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#onprocessstart)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#refresh)
- [showEntitiesMenu](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#showentitiesmenu)
- [toggleConditionPicked](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#toggleconditionpicked)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#protected-methods-1)
- [clear](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#clear)
- [destroyCore](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#destroycore)
- [onProcessEndCore](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#refreshcore)
- [render](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class#render)


## Constructors

---
#### constructor

The default constructor.
⊕ new QueryPanel(slot: `HTMLElement`,customQuery?: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)): [QueryPanel](api-reference-old/api-reference-6x/ui-package/classes/querypanel-class)

#### Parameters:
- slot: `HTMLElement` - The html element.

- customQuery: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class), *Optional* 


---

## Public Properties

---
### widgetType

● widgetType: `string`

---
## Protected Properties

---
### context

● context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)

---
### slot

● slot: `HTMLElement`

---
## Public Methods

---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`

---
### destroy
▸ destroy(): `void`


**Returns** `void`

---
### getAddRowRenderer
▸ getAddRowRenderer(slot?: `HTMLDivElement`): [BaseElementRenderer](api-reference-old/api-reference-6x/ui-package/classes/baseelementrenderer-class) | `null`

#### Parameters:
- slot: `HTMLDivElement`, *Optional* 


**Returns** [BaseElementRenderer](api-reference-old/api-reference-6x/ui-package/classes/baseelementrenderer-class) | `null`

---
### getConditionGroupMenu
▸ getConditionGroupMenu(isRoot?: `boolean`): [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

#### Parameters:
- isRoot: `boolean`, *Default value* = `false`


**Returns** [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### getConditionMenu
▸ getConditionMenu(): [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### getConditionRenderer
▸ getConditionRenderer(condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class),slot?: `HTMLDivElement`): [ConditionRenderer](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class) | `null`

#### Parameters:
- condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)
- slot: `HTMLDivElement`, *Optional* 


**Returns** [ConditionRenderer](api-reference-old/api-reference-6x/ui-package/classes/conditionrenderer-class) | `null`

---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

---
### getEntitiesMenu
▸ getEntitiesMenu(): [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### getExpressionRenderer
▸ getExpressionRenderer(expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class),slot?: `HTMLDivElement`): [ExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class) | `null`

#### Parameters:
- expression: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)
- slot: `HTMLDivElement`, *Optional* 


**Returns** [ExpressionRenderer](api-reference-old/api-reference-6x/ui-package/classes/expressionrenderer-class) | `null`

---
### getOperatorRenderer
▸ getOperatorRenderer(condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class),text: `string`,slot?: `HTMLDivElement`): [BaseElementRenderer](api-reference-old/api-reference-6x/ui-package/classes/baseelementrenderer-class) | `null`

#### Parameters:
- condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)
- text: `string`
- slot: `HTMLDivElement`, *Optional* 


**Returns** [BaseElementRenderer](api-reference-old/api-reference-6x/ui-package/classes/baseelementrenderer-class) | `null`

---
### getQuery
▸ getQuery(): [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


**Returns** [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)

---
### init
Initialize widget.

▸ init(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),options?: [QueryPanelOptions](api-reference-old/api-reference-6x/ui-package/interfaces/querypaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class) - The context.
- options: [QueryPanelOptions](api-reference-old/api-reference-6x/ui-package/interfaces/querypaneloptions-interface), *Optional*  - The options.



**Returns** `void`

---
### onProcessEnd
This function is called on the end of some process this widget participates in.
For example, some widgets should be updated on model loading
or after the execution of the current query

▸ onProcessEnd(): `void`


**Returns** `void`

---
### onProcessStart
This function is called on the start of some process this widget participates in.
For example, some widgets can show a spinner or a progress bar
at the beginning of some long process (e.g. model loading).

▸ onProcessStart(): `void`


**Returns** `void`

---
### refresh
Refreshes the widget's content

▸ refresh(): `void`


**Returns** `void`

---
### showEntitiesMenu
▸ showEntitiesMenu(options: [PopupMenuOptions](api-reference-old/api-reference-6x/ui-package/interfaces/popupmenuoptions-interface)): `void`

#### Parameters:
- options: [PopupMenuOptions](api-reference-old/api-reference-6x/ui-package/interfaces/popupmenuoptions-interface)


**Returns** `void`

---
### toggleConditionPicked
▸ toggleConditionPicked(condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class),force?: `boolean`): `void`

#### Parameters:
- condition: [Condition](api-reference-old/api-reference-6x/core-package/classes/condition-class)
- force: `boolean`, *Default value* = ` undefined`


**Returns** `void`

---
## Protected Methods

---
### clear
▸ clear(): `void`


**Returns** `void`

---
### destroyCore
▸ destroyCore(): `void`


**Returns** `void`

---
### onProcessEndCore
This function is called from `onProcessEnd` function.
It does nothing in the base `Widget` class
but can be overridden in derived classes
to implement the functionality specific for a particular widget.

▸ onProcessEndCore(): `void`


**Returns** `void`

---
### onProcessStartCore
This function is called from `onProcessStart` function.
It does nothing in the base `Widget` class
but can be overridden in derived classes
to implement the functionality specific for a particular widget.

▸ onProcessStartCore(): `void`


**Returns** `void`

---
### refreshCore
▸ refreshCore(): `void`


**Returns** `void`

---
### render
▸ render(): `void`


**Returns** `void`

---
