---
title: ChartProvider interface
slug: api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface
sidebar:
  order: 100
---

Represents chart provider.

## Index
### [Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#methods-1)
- [canDraw](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#candraw)
- [draw](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#draw)
- [getProviderType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#getprovidertype)
- [getSupportedChartTypes](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#getsupportedcharttypes)
- [init](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#init)
- [setChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#setcharttype)
- [setDataColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#setdatacolumns)
- [setLabelColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#setlabelcolumn)
- [updateChartColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/chartprovider-interface/#updatechartcolumns)



## Methods

---
### canDraw
▸ canDraw(): `boolean`


**Returns** `boolean`

---
### draw
▸ draw(slot: `HTMLElement`): `any`

#### Parameters:
- slot: `HTMLElement`


**Returns** `any`

---
### getProviderType
▸ getProviderType(): `any`


**Returns** `any`

---
### getSupportedChartTypes
▸ getSupportedChartTypes(): [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)[]


**Returns** [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)[]

---
### init
▸ init(dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class),defaultType: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum),labelColumnIndex: `number`,dataColumnIndexes: `number`[]): `any`

#### Parameters:
- dataTable: [EqDataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class)
- defaultType: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)
- labelColumnIndex: `number`
- dataColumnIndexes: `number`[]


**Returns** `any`

---
### setChartType
▸ setChartType(newChartType: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)): `void`

#### Parameters:
- newChartType: [ChartType](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/enumerations/charttype-enum)


**Returns** `void`

---
### setDataColumns
▸ setDataColumns(dataColumnIndexes: `number`[]): `any`

#### Parameters:
- dataColumnIndexes: `number`[]


**Returns** `any`

---
### setLabelColumn
▸ setLabelColumn(labelColumnIndex: `number`): `void`

#### Parameters:
- labelColumnIndex: `number`


**Returns** `void`

---
### updateChartColumns
▸ updateChartColumns(): `any`


**Returns** `any`

---
