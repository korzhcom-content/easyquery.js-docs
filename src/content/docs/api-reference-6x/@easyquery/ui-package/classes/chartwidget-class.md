---
title: ChartWidget class
slug: api-reference-6x/@easyquery/ui-package/classes/chartwidget-class
sidebar:
  order: 100
---

## Extends
[Widget](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#public-properties-1)
- [widgetType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#widgettype)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#protected-properties-1)
- [chartDiv](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#chartdiv)
- [chartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#charttype)
- [context](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#context)
- [dataColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#datacolumns)
- [dataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#datatable)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#element)
- [group](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#group)
- [labelColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#labelcolumn)
- [potentialDataColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#potentialdatacolumns)
- [potentialLabelColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#potentiallabelcolumns)
- [settingsDiv](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#settingsdiv)
- [slot](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#slot)
- [supportedChartTypes](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#supportedcharttypes)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#belongstogroup)
- [clear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#clear)
- [destroy](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#destroy)
- [drawChart](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#drawchart)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#getcontext)
- [hasColumnsForChart](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#hascolumnsforchart)
- [hasData](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#hasdata)
- [init](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#init)
- [initSettingsDiv](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#initsettingsdiv)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#onprocessstart)
- [prepareChartData](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#preparechartdata)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#refresh)
- [toggleSettings](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#togglesettings)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#protected-methods-1)
- [canDraw](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#candraw)
- [destroyCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#destroycore)
- [drawCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#drawcore)
- [getSupportedChartTypes](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#getsupportedcharttypes)
- [initChart](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#initchart)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#refreshcore)
- [updateChartColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class/#updatechartcolumns)


## Constructors

---
#### constructor

The default constructor.
⊕ new ChartWidget(slot: `HTMLElement`): [ChartWidget](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/chartwidget-class)

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

● chartType: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum) = ` ChartType.Pie`

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)

---
### dataColumns

● dataColumns: `number`[] = ` []`

---
### dataTable

● dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class) = ` null`

---
### element

● element: `HTMLElement`

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/widgetgroup-enum)

---
### labelColumn

● labelColumn: `number` = ` -1`

---
### potentialDataColumns

● potentialDataColumns: [ChartColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartcolumn-interface)[] = ` []`

---
### potentialLabelColumns

● potentialLabelColumns: [ChartColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartcolumn-interface)[] = ` []`

---
### settingsDiv

● settingsDiv: `HTMLElement`

---
### slot

● slot: `HTMLElement`

---
### supportedChartTypes

● supportedChartTypes: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)[] = ` []`

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

▸ belongsToGroup(groups?: [WidgetGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/enumerations/widgetgroup-enum), *Optional*  - 



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

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


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

▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class),options?: [ChartWidgetOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartwidgetoptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class) - The context.
- options: [ChartWidgetOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartwidgetoptions-interface), *Optional*  - The options.



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
▸ drawCore(): `any`


**Returns** `any`


---
### getSupportedChartTypes
▸ getSupportedChartTypes(): [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)[]


**Returns** [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)[]


---
### initChart
▸ initChart(): `any`


**Returns** `any`


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
▸ updateChartColumns(): `any`


**Returns** `any`


---
