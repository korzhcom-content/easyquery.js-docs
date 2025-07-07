---
title: EqDataTable class
slug: api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class
sidebar:
  order: 100
---

Represents Google data table class

## Index
### [Constructors](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#constructor)

### [Public Methods](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#public-methods-1)
- [getColumnId](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#getcolumnid)
- [getColumnLabel](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#getcolumnlabel)
- [getColumnObject](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#getcolumnobject)
- [getColumnProperties](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#getcolumnproperties)
- [getColumnType](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#getcolumntype)
- [getFormattedValue](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#getformattedvalue)
- [getNumberOfColumns](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#getnumberofcolumns)
- [getNumberOfRows](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#getnumberofrows)
- [getObject](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#getobject)
- [isEmpty](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#isempty)
- [loadFromJSON](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#loadfromjson)
- [toJSON](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class#tojson)


## Constructors

---
#### constructor

The default constructor.
⊕ new EqDataTable(data: `any`): [EqDataTable](api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class)

#### Parameters:
- data: `any` - The table instance or its JSON representation.



---

## Public Methods

---
### getColumnId
Gets the column ID.

▸ getColumnId(colIndex: `number`): `string`

#### Parameters:
- colIndex: `number` - The column index.


**Returns** `string` - The column ID.


---
### getColumnLabel
Gets the column LABEL.

▸ getColumnLabel(colIndex: `number`): `string`

#### Parameters:
- colIndex: `number` - The column index.


**Returns** `string` - The column ID.


---
### getColumnObject
Gets the column object.

▸ getColumnObject(colIndex: `number`): `any`

#### Parameters:
- colIndex: `number` - The column index.


**Returns** `any` - The column object.


---
### getColumnProperties
Gets the column properties.

▸ getColumnProperties(colIndex: `number`): `any`

#### Parameters:
- colIndex: `number` - The column index.


**Returns** `any` - The column properties.


---
### getColumnType
 Gets the column type.

▸ getColumnType(colIndex: `number`): `string`

#### Parameters:
- colIndex: `number` - The column index.


**Returns** `string` - The column type.


---
### getFormattedValue
Gets the formatted value.

▸ getFormattedValue(rowIndex: `number`,colIndex: `number`): `string` | `null`

#### Parameters:
- rowIndex: `number` - The row index.
- colIndex: `number` - The column index.


**Returns** `string` | `null` - The value.


---
### getNumberOfColumns
Gets the number of columns

▸ getNumberOfColumns(): `number`


**Returns** `number` - The number.


---
### getNumberOfRows
Gets the number of rows.

▸ getNumberOfRows(): `number`


**Returns** `number` - The number.


---
### getObject
Gets the google data table object.

▸ getObject(): `any`


**Returns** `any` - The data table.


---
### isEmpty
Cheсks wether the table is empty

▸ isEmpty(): `boolean`


**Returns** `boolean` - `true` if the table is empty, `false` if it is not.


---
### loadFromJSON
Loads data table from JSON.

▸ loadFromJSON(json: `string`): `void`

#### Parameters:
- json: `string` - The JSON representation.



**Returns** `void`

---
### toJSON
Saves data table to JSON.

▸ toJSON(): `string`


**Returns** `string` - The JSON representation.


---
