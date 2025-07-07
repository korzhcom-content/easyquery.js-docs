---
title: NewEqResultGrid class
slug: api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class
sidebar:
  order: 100
---

## Extends
[Grid](api-reference-old/api-reference-6x/ui-package/classes/grid-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#public-properties-1)
- [widgetType](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#protected-properties-1)
- [context](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#context)
- [group](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#group)
- [menuList](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#menulist)
- [moveColumnActions](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#movecolumnactions)
- [options](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#options)
- [slot](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#slot)
- [sortColumnActions](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#sortcolumnactions)
- [sortList](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#sortlist)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#public-methods-1)
- [addColumn](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#addcolumn)
- [addNewColumn](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#addnewcolumn)
- [belongsToGroup](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#belongstogroup)
- [destroy](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#destroy)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#getcontext)
- [getQuery](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#getquery)
- [init](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#init)
- [onProcessEnd](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#onprocessstart)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#refresh)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#protected-methods-1)
- [applyDisplayFormats](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#applydisplayformats)
- [attachQueryObserver](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#attachqueryobserver)
- [checkColumn](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#checkcolumn)
- [clear](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#clear)
- [createColumnMenu](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#createcolumnmenu)
- [createEntitiesMenu](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#createentitiesmenu)
- [createFunctionList](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#createfunctionlist)
- [destroyCore](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#destroycore)
- [getColumnAttribute](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#getcolumnattribute)
- [getDefaultColumnCaption](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#getdefaultcolumncaption)
- [moveColumn](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#movecolumn)
- [moveColumnCore](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#movecolumncore)
- [onProcessEndCore](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#refreshcore)
- [render](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#render)
- [renderAddRowButton](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#renderaddrowbutton)
- [renderColumnHeader](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#rendercolumnheader)
- [renderPageNavigator](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#renderpagenavigator)
- [sortColumn](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class#sortcolumn)


## Constructors

---
#### constructor

The default constructor.
⊕ new NewEqResultGrid(slot: `HTMLElement`): [NewEqResultGrid](api-reference-old/api-reference-6x/ui-package/classes/neweqresultgrid-class)

#### Parameters:
- slot: `HTMLElement` - The html element.



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
### menuList

● menuList: `any`[] = ` [
        { id: 'Rename', text: i18n.getText('ButtonRename')},
        { id: 'Delete', text: i18n.getText('ButtonDelete')},
        this.delimiter,
        { id: 'MoveTop', text: i18n.getText('CmdMoveToFirst') },
        { id: 'MoveUp', text: i18n.getText('CmdMoveToPrev') },
        { id: 'MoveDown', text: i18n.getText('CmdMoveToNext') },
        { id: 'MoveBottom', text: i18n.getText('CmdMoveToLast') }
    ]`

---
### moveColumnActions

● moveColumnActions: `string`[] = ` ['MoveTop', 'MoveUp', 'MoveDown', 'MoveBottom']`

---
### options

● options: `any`

---
### slot

The html element.

● slot: `HTMLElement`

---
### sortColumnActions

● sortColumnActions: `string`[] = ` ['None', 'Ascending', 'Descending']`

---
### sortList

● sortList: `any`[] = ` [
        this.delimiter,
        { id: 'None', text: i18n.getText('CmdNotSorted') },
        { id: 'Ascending', text: i18n.getText('CmdAscending') },
        { id: 'Descending', text: i18n.getText('CmdDescending') },
    ]`

---
## Public Methods

---
### addColumn
▸ addColumn(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),index?: `number`): `void`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)
- index: `number`, *Optional* 


**Returns** `void`

---
### addNewColumn
▸ addNewColumn(attrId: `string`,index?: `number`): [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

#### Parameters:
- attrId: `string`
- index: `number`, *Optional* 


**Returns** [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

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
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

---
### getQuery
▸ getQuery(): [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)


**Returns** [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)

---
### init
Initialize widget.

▸ init(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),options?: [GridOptions](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class) - The context.
- options: [GridOptions](api-reference-old/api-reference-6x/ui-package/interfaces/gridoptions-interface), *Optional*  - The options.



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
## Protected Methods

---
### applyDisplayFormats
▸ applyDisplayFormats(): `void`


**Returns** `void`

---
### attachQueryObserver
▸ attachQueryObserver(): `void`


**Returns** `void`

---
### checkColumn
▸ checkColumn(col: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)): [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

#### Parameters:
- col: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)


**Returns** [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)

---
### clear
Clears GRID.

▸ clear(): `void`


**Returns** `void`

---
### createColumnMenu
▸ createColumnMenu(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)): [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)


**Returns** [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### createEntitiesMenu
▸ createEntitiesMenu(): `void`


**Returns** `void`

---
### createFunctionList
▸ createFunctionList(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)): `any`[]

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)


**Returns** `any`[]

---
### destroyCore
▸ destroyCore(): `void`


**Returns** `void`

---
### getColumnAttribute
▸ getColumnAttribute(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)): [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)


**Returns** [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)

---
### getDefaultColumnCaption
▸ getDefaultColumnCaption(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) | [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)): `string`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class) | [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)


**Returns** `string`

---
### moveColumn
▸ moveColumn(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),direction: `string`): `void`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)
- direction: `string`


**Returns** `void`

---
### moveColumnCore
▸ moveColumnCore(index1: `number`,index2: `number`): `void`

#### Parameters:
- index1: `number`
- index2: `number`


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
Refresh widget implementation

▸ refreshCore(): `void`


**Returns** `void`

---
### render
Renders widget

▸ render(): `void`


**Returns** `void`

---
### renderAddRowButton
▸ renderAddRowButton(): `HTMLElement`


**Returns** `HTMLElement`

---
### renderColumnHeader
▸ renderColumnHeader(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),index: `number`): `HTMLElement`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)
- index: `number`


**Returns** `HTMLElement`

---
### renderPageNavigator
Renders page navidator

▸ renderPageNavigator(): `void`


**Returns** `void`

---
### sortColumn
▸ sortColumn(column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class),direction: `string`): `void`

#### Parameters:
- column: [Column](api-reference-old/api-reference-6x/core-package/classes/column-class)
- direction: `string`


**Returns** `void`

---
