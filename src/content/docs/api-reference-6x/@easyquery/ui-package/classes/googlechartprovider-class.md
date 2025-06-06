---
title: GoogleChartProvider class
slug: api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class
sidebar:
  order: 100
---

Chart provider for Google Charts.

## Implements
[ChartProvider](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface)

## Index
### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#public-methods-1)
- [canDraw](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#candraw)
- [draw](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#draw)
- [getProviderType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#getprovidertype)
- [getSupportedChartTypes](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#getsupportedcharttypes)
- [init](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#init)
- [setChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#setcharttype)
- [setDataColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#setdatacolumns)
- [setLabelColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#setlabelcolumn)
- [updateChartColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/googlechartprovider-class/#updatechartcolumns)



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
### getProviderType
Returns the type of chart provider.

▸ getProviderType(): `string`


**Returns** `string` - the type of chart provider.


---
### getSupportedChartTypes
Returns supported chart types

▸ getSupportedChartTypes(): [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)[]


**Returns** [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)[] - array of supported chart types.


---
### init
Initializes chart provider

▸ init(dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class),defaultType: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum),labelColumnIndex: `number`,dataColumnIndexes: `number`[]): `void`

#### Parameters:
- dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class) - The [[EqDataTable]] to build chart on.
- defaultType: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum) - The default [[ChartType]].
- labelColumnIndex: `number` - The index of the columns to be used for labels.
- dataColumnIndexes: `number`[] - The array of column indexes to be used for chart data.



**Returns** `void`

---
### setChartType
Sets the chart type

▸ setChartType(newChartType: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)): `void`

#### Parameters:
- newChartType: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum) - The [[ChartType]].



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
