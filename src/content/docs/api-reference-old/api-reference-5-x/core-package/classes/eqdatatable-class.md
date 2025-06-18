---
title: EqDataTable class
slug: api-reference-old/api-reference-5-x/core-package/classes/eqdatatable-class
sidebar:
  order: 100
---

Represents Google data table class

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#constructor)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#public-methods-1)
- [getColumnId](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#getcolumnid)
- [getColumnLabel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#getcolumnlabel)
- [getColumnObject](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#getcolumnobject)
- [getColumnProperties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#getcolumnproperties)
- [getColumnType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#getcolumntype)
- [getFormattedValue](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#getformattedvalue)
- [getNumberOfColumns](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#getnumberofcolumns)
- [getNumberOfRows](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#getnumberofrows)
- [getObject](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#getobject)
- [isEmpty](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#isempty)
- [loadFromJSON](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#loadfromjson)
- [toJSON](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class/#tojson)


## Constructors

---
#### constructor

The default constructor.
⊕ new EqDataTable(data: `any`): [EqDataTable](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqdatatable-class)

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
