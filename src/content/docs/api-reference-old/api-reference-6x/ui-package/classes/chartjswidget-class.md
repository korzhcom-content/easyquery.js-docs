---
title: ChartJsWidget class
slug: api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class
sidebar:
  order: 100
---

## Extends
[ChartWidget](api-reference-old/api-reference-6x/ui-package/classes/chartwidget-class)

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#public-properties-1)
- [widgetType](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#widgettype)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#protected-properties-1)
- [chartDiv](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#chartdiv)
- [chartType](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#charttype)
- [context](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#context)
- [dataColumns](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#datacolumns)
- [dataTable](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#datatable)
- [element](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#element)
- [group](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#group)
- [labelColumn](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#labelcolumn)
- [potentialDataColumns](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#potentialdatacolumns)
- [potentialLabelColumns](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#potentiallabelcolumns)
- [settingsDiv](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#settingsdiv)
- [slot](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#slot)
- [supportedChartTypes](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#supportedcharttypes)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#public-methods-1)
- [belongsToGroup](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#belongstogroup)
- [clear](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#clear)
- [destroy](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#destroy)
- [drawChart](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#drawchart)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#getcontext)
- [hasColumnsForChart](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#hascolumnsforchart)
- [hasData](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#hasdata)
- [init](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#init)
- [initSettingsDiv](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#initsettingsdiv)
- [onProcessEnd](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#onprocessend)
- [onProcessStart](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#onprocessstart)
- [prepareChartData](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#preparechartdata)
- [refresh](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#refresh)
- [toggleSettings](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#togglesettings)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#protected-methods-1)
- [canDraw](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#candraw)
- [destroyCore](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#destroycore)
- [drawCore](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#drawcore)
- [getSupportedChartTypes](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#getsupportedcharttypes)
- [initChart](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#initchart)
- [onProcessEndCore](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#onprocessendcore)
- [onProcessStartCore](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#onprocessstartcore)
- [refreshCore](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#refreshcore)
- [updateChartColumns](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class#updatechartcolumns)


## Constructors

---
#### constructor

The default constructor.
⊕ new ChartJsWidget(slot: `HTMLElement`): [ChartJsWidget](api-reference-old/api-reference-6x/ui-package/classes/chartjswidget-class)

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
### chartDiv

● chartDiv: `HTMLElement`

---
### chartType

● chartType: [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum) = ` ChartType.Pie`

---
### context

● context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

---
### dataColumns

● dataColumns: `number`[] = ` []`

---
### dataTable

● dataTable: [EqDataTable](api-reference-old/api-reference-6x/core-package/classes/eqdatatable-class) = ` null`

---
### element

● element: `HTMLElement`

---
### group

● group: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)

---
### labelColumn

● labelColumn: `number` = ` -1`

---
### potentialDataColumns

● potentialDataColumns: [ChartColumn](api-reference-old/api-reference-6x/ui-package/interfaces/chartcolumn-interface)[] = ` []`

---
### potentialLabelColumns

● potentialLabelColumns: [ChartColumn](api-reference-old/api-reference-6x/ui-package/interfaces/chartcolumn-interface)[] = ` []`

---
### settingsDiv

● settingsDiv: `HTMLElement`

---
### slot

● slot: `HTMLElement`

---
### supportedChartTypes

● supportedChartTypes: [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum)[] = ` []`

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

▸ belongsToGroup(groups?: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](api-reference-old/api-reference-6x/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`


---
### clear
Clears chart.

▸ clear(): `void`


**Returns** `void`


---
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### drawChart
Draws chart with delay.

▸ drawChart(delay: `number`): `void`

#### Parameters:
- delay: `number` - The delay.



**Returns** `void`


---
### getContext
Returns current context (the one this widget belongs to)

▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


---
### hasColumnsForChart
Checks, if there ara colums for chart

▸ hasColumnsForChart(): `boolean`


**Returns** `boolean` - `true` if there are columns, otherwise - `false`.



---
### hasData
Checks, if widget has data.

▸ hasData(): `boolean`


**Returns** `boolean` - `true` if has data, otherwise - `false`.



---
### init
Initialize widget.

▸ init(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),options?: [ChartWidgetOptions](api-reference-old/api-reference-6x/ui-package/interfaces/chartwidgetoptions-interface)): `void`

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class) - The context.
- options: [ChartWidgetOptions](api-reference-old/api-reference-6x/ui-package/interfaces/chartwidgetoptions-interface), *Optional*  - The options.



**Returns** `void`


---
### initSettingsDiv
Inititialize settings div.

▸ initSettingsDiv(): `void`


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
### prepareChartData
Prepares data for chart.

▸ prepareChartData(): `void`


**Returns** `void`


---
### refresh
Refreshes the widget's content

▸ refresh(): `void`


**Returns** `void`


---
### toggleSettings
Toggles settings.

▸ toggleSettings(callback?: () => `void`): `void`

#### Parameters:
- callback: () => `void`, *Optional*  - The callback.



**Returns** `void`


---
## Protected Methods

---
### canDraw
▸ canDraw(): `boolean`


**Returns** `boolean`


---
### destroyCore
▸ destroyCore(): `void`


**Returns** `void`


---
### drawCore
▸ drawCore(): `void`


**Returns** `void`


---
### getSupportedChartTypes
▸ getSupportedChartTypes(): [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum)[]


**Returns** [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum)[]


---
### initChart
▸ initChart(): `void`


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
### updateChartColumns
▸ updateChartColumns(): `void`


**Returns** `void`


---
