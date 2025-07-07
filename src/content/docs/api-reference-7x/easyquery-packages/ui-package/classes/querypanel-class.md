---
title: QueryPanel class
slug: api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class
sidebar:
  order: 100
---

The query panel wiget, implemented without JQuery.

## Extends
[Widget](api-reference-7x/easyquery-packages/core-package/classes/widget-class)

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#public-properties-1)
- [id](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#id)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#protected-properties-1)
- [context](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#context)
- [group](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#group)
- [slot](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#slot)

### [Protected Accessors](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#cssprefix)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#public-methods-1)
- [belongsToGroup](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#belongstogroup)
- [destroy](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#destroy)
- [getAddRowRenderer](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getaddrowrenderer)
- [getConditionGroupMenu](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getconditiongroupmenu)
- [getConditionMenu](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getconditionmenu)
- [getConditionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getconditionrenderer)
- [getContext](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getcontext)
- [getEntitiesMenu](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getentitiesmenu)
- [getExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getexpressionrenderer)
- [getLinkTypeMenu](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getlinktypemenu)
- [getOperatorRenderer](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getoperatorrenderer)
- [getQuery](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getquery)
- [getWidgetType](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#getwidgettype)
- [init](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#init)
- [onProcessEnd](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#onprocessend)
- [onProcessStart](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#onprocessstart)
- [refresh](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#refresh)
- [showEntitiesMenu](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#showentitiesmenu)
- [toggleConditionPicked](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#toggleconditionpicked)

### [Protected Methods](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#protected-methods-1)
- [clear](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#clear)
- [destroyCore](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#destroycore)
- [onProcessEndCore](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#onprocessendcore)
- [onProcessStartCore](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#onprocessstartcore)
- [refreshCore](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#refreshcore)
- [render](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#render)
- [setOptions](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class#setoptions)


## Constructors

---
#### constructor

The default constructor.
⊕ new QueryPanel(slot: `HTMLElement`,customQuery?: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)): [QueryPanel](api-reference-7x/easyquery-packages/ui-package/classes/querypanel-class)

#### Parameters:
- slot: `HTMLElement` - The html element.

- customQuery: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class), *Optional* 


---

## Public Properties

---
### id

● id: `string`

---
## Protected Properties

---
### context

● context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum)

---
### slot

● slot: `HTMLElement`

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`


---
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### getAddRowRenderer
▸ getAddRowRenderer(slot?: `HTMLDivElement`): [BaseElementRenderer](api-reference-7x/easyquery-packages/ui-package/classes/baseelementrenderer-class) | `null`

#### Parameters:
- slot: `HTMLDivElement`, *Optional* 


**Returns** [BaseElementRenderer](api-reference-7x/easyquery-packages/ui-package/classes/baseelementrenderer-class) | `null`


---
### getConditionGroupMenu
▸ getConditionGroupMenu(isRoot?: `boolean`): [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)

#### Parameters:
- isRoot: `boolean`, *Default value* = `false`


**Returns** [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


---
### getConditionMenu
▸ getConditionMenu(): [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


---
### getConditionRenderer
▸ getConditionRenderer(condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class),slot?: `HTMLDivElement`): [ConditionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/conditionrenderer-class) | `null`

#### Parameters:
- condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)
- slot: `HTMLDivElement`, *Optional* 


**Returns** [ConditionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/conditionrenderer-class) | `null`


---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---
### getEntitiesMenu
▸ getEntitiesMenu(): [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


---
### getExpressionRenderer
▸ getExpressionRenderer(expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class),slot?: `HTMLDivElement`): [ExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class) | `null`

#### Parameters:
- expression: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)
- slot: `HTMLDivElement`, *Optional* 


**Returns** [ExpressionRenderer](api-reference-7x/easyquery-packages/ui-package/classes/expressionrenderer-class) | `null`


---
### getLinkTypeMenu
▸ getLinkTypeMenu(): [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


---
### getOperatorRenderer
▸ getOperatorRenderer(condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class),text: `string`,slot?: `HTMLDivElement`): [BaseElementRenderer](api-reference-7x/easyquery-packages/ui-package/classes/baseelementrenderer-class) | `null`

#### Parameters:
- condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)
- text: `string`
- slot: `HTMLDivElement`, *Optional* 


**Returns** [BaseElementRenderer](api-reference-7x/easyquery-packages/ui-package/classes/baseelementrenderer-class) | `null`


---
### getQuery
▸ getQuery(): [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


**Returns** [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
Initialize widget.

▸ init(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class),options?: [QueryPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/querypaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class) - The context.
- options: [QueryPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/querypaneloptions-interface), *Optional*  - The options.



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
▸ showEntitiesMenu(options: [PopupMenuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/popupmenuoptions-interface)): `void`

#### Parameters:
- options: [PopupMenuOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/popupmenuoptions-interface)


**Returns** `void`


---
### toggleConditionPicked
▸ toggleConditionPicked(condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class),force?: `boolean`): `void`

#### Parameters:
- condition: [Condition](api-reference-7x/easyquery-packages/core-package/classes/condition-class)
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
### setOptions
▸ setOptions(options?: [QueryPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/querypaneloptions-interface)): `void`

#### Parameters:
- options: [QueryPanelOptions](api-reference-7x/easyquery-packages/ui-package/interfaces/querypaneloptions-interface), *Optional* 


**Returns** `void`


---
