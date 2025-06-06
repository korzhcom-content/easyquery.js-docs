---
title: QueryPanel class
slug: api-reference-7x/@easyquery/ui-package/classes/querypanel-class
sidebar:
  order: 100
---

The query panel wiget, implemented without JQuery.

## Extends
[Widget](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#public-properties-1)
- [id](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#id)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#context)
- [group](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#group)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#slot)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#belongstogroup)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#destroy)
- [getAddRowRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getaddrowrenderer)
- [getConditionGroupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getconditiongroupmenu)
- [getConditionMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getconditionmenu)
- [getConditionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getconditionrenderer)
- [getContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getcontext)
- [getEntitiesMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getentitiesmenu)
- [getExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getexpressionrenderer)
- [getLinkTypeMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getlinktypemenu)
- [getOperatorRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getoperatorrenderer)
- [getQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getquery)
- [getWidgetType](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#getwidgettype)
- [init](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#init)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#onprocessstart)
- [refresh](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#refresh)
- [showEntitiesMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#showentitiesmenu)
- [toggleConditionPicked](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#toggleconditionpicked)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#protected-methods-1)
- [clear](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#clear)
- [destroyCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#destroycore)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#refreshcore)
- [render](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#render)
- [setOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class/#setoptions)


## Constructors

---
#### constructor

The default constructor.
⊕ new QueryPanel(slot: `HTMLElement`,customQuery?: [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)): [QueryPanel](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/querypanel-class)

#### Parameters:
- slot: `HTMLElement` - The html element.

- customQuery: [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class), *Optional* 


---

## Public Properties

---
### id

● id: `string`

---
## Protected Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)

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

▸ belongsToGroup(groups?: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`


---
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### getAddRowRenderer
▸ getAddRowRenderer(slot?: `HTMLDivElement`): [BaseElementRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/baseelementrenderer-class) | `null`

#### Parameters:
- slot: `HTMLDivElement`, *Optional* 


**Returns** [BaseElementRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/baseelementrenderer-class) | `null`


---
### getConditionGroupMenu
▸ getConditionGroupMenu(isRoot?: `boolean`): [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)

#### Parameters:
- isRoot: `boolean`, *Default value* = `false`


**Returns** [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


---
### getConditionMenu
▸ getConditionMenu(): [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


---
### getConditionRenderer
▸ getConditionRenderer(condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class),slot?: `HTMLDivElement`): [ConditionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditionrenderer-class) | `null`

#### Parameters:
- condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class)
- slot: `HTMLDivElement`, *Optional* 


**Returns** [ConditionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/conditionrenderer-class) | `null`


---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)


---
### getEntitiesMenu
▸ getEntitiesMenu(): [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


---
### getExpressionRenderer
▸ getExpressionRenderer(expression: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class),slot?: `HTMLDivElement`): [ExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class) | `null`

#### Parameters:
- expression: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)
- slot: `HTMLDivElement`, *Optional* 


**Returns** [ExpressionRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/expressionrenderer-class) | `null`


---
### getLinkTypeMenu
▸ getLinkTypeMenu(): [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


**Returns** [PopupMenu](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/popupmenu-class)


---
### getOperatorRenderer
▸ getOperatorRenderer(condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class),text: `string`,slot?: `HTMLDivElement`): [BaseElementRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/baseelementrenderer-class) | `null`

#### Parameters:
- condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class)
- text: `string`
- slot: `HTMLDivElement`, *Optional* 


**Returns** [BaseElementRenderer](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/classes/baseelementrenderer-class) | `null`


---
### getQuery
▸ getQuery(): [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)


---
### getWidgetType
▸ getWidgetType(): `string`


**Returns** `string`


---
### init
Initialize widget.

▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),options?: [QueryPanelOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/querypaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class) - The context.
- options: [QueryPanelOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/querypaneloptions-interface), *Optional*  - The options.



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
▸ showEntitiesMenu(options: [PopupMenuOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/popupmenuoptions-interface)): `void`

#### Parameters:
- options: [PopupMenuOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/popupmenuoptions-interface)


**Returns** `void`


---
### toggleConditionPicked
▸ toggleConditionPicked(condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class),force?: `boolean`): `void`

#### Parameters:
- condition: [Condition](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/condition-class)
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
▸ setOptions(options?: [QueryPanelOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/querypaneloptions-interface)): `void`

#### Parameters:
- options: [QueryPanelOptions](//easyquery/javascript/docs/api-reference-7x/@easyquery/ui-package/interfaces/querypaneloptions-interface), *Optional* 


**Returns** `void`


---
