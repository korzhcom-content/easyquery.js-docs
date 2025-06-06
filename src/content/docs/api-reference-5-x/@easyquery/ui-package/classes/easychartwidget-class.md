---
title: EasyChartWidget class
slug: api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class
sidebar:
  order: 100
---

The widget responsed for rendering EasyChart

## Extends
[Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#public-properties-1)
- [widgetType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#widgettype)

### [Protected Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#protected-properties-1)
- [context](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#context)
- [group](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#group)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#public-methods-1)
- [belongsToGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#belongstogroup)
- [clear](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#clear)
- [drawChart](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#drawchart)
- [getContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#getcontext)
- [hasColumnsForChart](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#hascolumnsforchart)
- [hasData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#hasdata)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#init)
- [initSettingsDiv](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#initsettingsdiv)
- [onProcessEnd](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#onprocessend)
- [onProcessStart](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#onprocessstart)
- [prepareChartData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#preparechartdata)
- [refresh](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#refresh)
- [setChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#setchartprovider)
- [toggleSettings](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#togglesettings)

### [Protected Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#protected-methods-1)
- [onProcessEndCore](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#onprocessendcore)
- [onProcessStartCore](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#onprocessstartcore)
- [refreshCore](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class/#refreshcore)


## Constructors

---
#### constructor

The default constructor.
⊕ new EasyChartWidget(slot: `HTMLElement`,provider?: [ChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartprovider-interface)): [EasyChartWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/easychartwidget-class)

#### Parameters:
- slot: `HTMLElement` - The html element.
- provider: [ChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartprovider-interface), *Optional*  - The provider.



---

## Public Properties

---
### widgetType

● widgetType: `string`

---
## Protected Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)

---
### group

● group: [WidgetGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/widgetgroup-enum)

---
## Public Methods

---
### belongsToGroup
Returns `true` if the widget belongs to one of the groups specified in the parameter

▸ belongsToGroup(groups?: [WidgetGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/widgetgroup-enum)): `boolean`

#### Parameters:
- groups: [WidgetGroup](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/widgetgroup-enum), *Optional*  - 



**Returns** `boolean`

---
### clear
Clears chart.

▸ clear(): `void`


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

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)

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

▸ init(context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class),options?: [ChartPanelOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartpaneloptions-interface)): `void`

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class) - The context.
- options: [ChartPanelOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartpaneloptions-interface), *Optional*  - The options.



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
### setChartProvider
Sets chart provider.

▸ setChartProvider(provider: [ChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartprovider-interface)): `void`

#### Parameters:
- provider: [ChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartprovider-interface) - The provider.



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
