---
title: ChartJsChartProvider class
slug: api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class
sidebar:
  order: 100
---

Chart provider for ChartJS library.

## Implements
[ChartProvider](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/chartprovider-interface)

## Index
### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#public-methods-1)
- [draw](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#draw)
- [getChartType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#getcharttype)
- [getProviderType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#getprovidertype)
- [getSupportedChartTypes](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#getsupportedcharttypes)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#init)
- [randomColor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#randomcolor)
- [setChartType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#setcharttype)
- [setDataColumns](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#setdatacolumns)
- [setLabelColumn](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#setlabelcolumn)
- [updateChartColumns](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/chartjschartprovider-class/#updatechartcolumns)



## Public Methods

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

▸ getSupportedChartTypes(): [ChartType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/enumerations/charttype-enum)[]


**Returns** [ChartType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/enumerations/charttype-enum)[] - array of supported chart types.


---
### init
Initializes chart provider

▸ init(dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class),defaultType: [ChartType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/enumerations/charttype-enum),labelColumnIndex: `number`,dataColumnIndexes: `number`[]): `void`

#### Parameters:
- dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class) - The [[EqDataTable]] to build chart on.
- defaultType: [ChartType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/enumerations/charttype-enum) - The default [[ChartType]].
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

▸ setChartType(newChartType: [ChartType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/enumerations/charttype-enum)): `void`

#### Parameters:
- newChartType: [ChartType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/enumerations/charttype-enum) - The [[ChartType]].



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
