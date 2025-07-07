---
title: ChartJsChartProvider class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class
sidebar:
  order: 100
---

Chart provider for ChartJS library.

## Implements
[ChartProvider](api-reference-old/api-reference-6x/ui-package/interfaces/chartprovider-interface)

## Index
### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#public-methods-1)
- [canDraw](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#candraw)
- [draw](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#draw)
- [getChartType](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#getcharttype)
- [getProviderType](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#getprovidertype)
- [getSupportedChartTypes](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#getsupportedcharttypes)
- [init](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#init)
- [randomColor](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#randomcolor)
- [setChartType](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#setcharttype)
- [setDataColumns](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#setdatacolumns)
- [setLabelColumn](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#setlabelcolumn)
- [updateChartColumns](api-reference-old/api-reference-6x/ui-package/classes/chartjschartprovider-class#updatechartcolumns)



## Public Methods

---
### canDraw
Checks that appropriate charting script is loaded.

▸ canDraw(): `boolean`


**Returns** `boolean` - true or false


---
### draw
Draws the chart.

▸ draw(slot: `HTMLElement`): `void`

#### Parameters:
- slot: `HTMLElement` - The [[HTMLElement]] to draw the chart within.



**Returns** `void`

---
### getChartType
Returns the current chart type.

▸ getChartType(): `"bar"` | `"horizontalBar"` | `"line"` | `"pie"`


**Returns** `"bar"` | `"horizontalBar"` | `"line"` | `"pie"` - the string representation of chart type.


---
### getProviderType
Returns the type of chart provider.

▸ getProviderType(): `string`


**Returns** `string` - the type of chart provider.


---
### getSupportedChartTypes
Returns supported chart types

▸ getSupportedChartTypes(): [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum)[]


**Returns** [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum)[] - array of supported chart types.


---
### init
Initializes chart provider

▸ init(dataTable: [EqDataTable](api-reference-old/api-reference-6x/core-package/classes/eqdatatable-class),defaultType: [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum),labelColumnIndex: `number`,dataColumnIndexes: `number`[]): `void`

#### Parameters:
- dataTable: [EqDataTable](api-reference-old/api-reference-6x/core-package/classes/eqdatatable-class) - The [[EqDataTable]] to build chart on.
- defaultType: [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum) - The default [[ChartType]].
- labelColumnIndex: `number` - The index of the columns to be used for labels.
- dataColumnIndexes: `number`[] - The array of column indexes to be used for chart data.



**Returns** `void`

---
### randomColor
Returns a random color from the predefined set of colors.

▸ randomColor(): `string`


**Returns** `string` - the string representation of the color.


---
### setChartType
Sets the chart type

▸ setChartType(newChartType: [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum)): `void`

#### Parameters:
- newChartType: [ChartType](api-reference-old/api-reference-6x/ui-package/enumerations/charttype-enum) - The [[ChartType]].



**Returns** `void`

---
### setDataColumns
Sets the columns to be used for chart data.

▸ setDataColumns(dataColumnsIndexes: `number`[]): `void`

#### Parameters:
- dataColumnsIndexes: `number`[] - The array of column indexes.



**Returns** `void`

---
### setLabelColumn
Sets the column to be used for labels.

▸ setLabelColumn(labelColumnIndex: `number`): `void`

#### Parameters:
- labelColumnIndex: `number` - The column index.



**Returns** `void`

---
### updateChartColumns
Fills the internal arrays with data from data table.

▸ updateChartColumns(): `void`


**Returns** `void`

---
