---
title: ChartProvider interface
slug: >-
  api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface
sidebar:
  order: 100
---

Represents chart provider.

## Index
### [Methods](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface#methods-1)
- [draw](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface#draw)
- [getProviderType](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface#getprovidertype)
- [getSupportedChartTypes](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface#getsupportedcharttypes)
- [init](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface#init)
- [setChartType](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface#setcharttype)
- [setDataColumns](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface#setdatacolumns)
- [setLabelColumn](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface#setlabelcolumn)
- [updateChartColumns](api-reference-old/api-reference-5-x/ui-package/interfaces/chartprovider-interface#updatechartcolumns)



## Methods

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
▸ getSupportedChartTypes(): [ChartType](api-reference-old/api-reference-5-x/ui-package/enumerations/charttype-enum)[]


**Returns** [ChartType](api-reference-old/api-reference-5-x/ui-package/enumerations/charttype-enum)[]

---
### init
▸ init(dataTable: [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class),defaultType: [ChartType](api-reference-old/api-reference-5-x/ui-package/enumerations/charttype-enum),labelColumnIndex: `number`,dataColumnIndexes: `number`[]): `any`

#### Parameters:
- dataTable: [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class)
- defaultType: [ChartType](api-reference-old/api-reference-5-x/ui-package/enumerations/charttype-enum)
- labelColumnIndex: `number`
- dataColumnIndexes: `number`[]


**Returns** `any`

---
### setChartType
▸ setChartType(newChartType: [ChartType](api-reference-old/api-reference-5-x/ui-package/enumerations/charttype-enum)): `void`

#### Parameters:
- newChartType: [ChartType](api-reference-old/api-reference-5-x/ui-package/enumerations/charttype-enum)


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
