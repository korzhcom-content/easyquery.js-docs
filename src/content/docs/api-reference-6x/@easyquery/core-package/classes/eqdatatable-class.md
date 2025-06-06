---
title: EqDataTable class
slug: api-reference-6x/@easyquery/core-package/classes/eqdatatable-class
sidebar:
  order: 100
---

Represents Google data table class

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#constructor)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#public-methods-1)
- [addColumn](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#addcolumn)
- [addRows](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#addrows)
- [getColumnId](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getcolumnid)
- [getColumnLabel](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getcolumnlabel)
- [getColumnObject](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getcolumnobject)
- [getColumnProperties](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getcolumnproperties)
- [getColumnType](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getcolumntype)
- [getFormattedValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getformattedvalue)
- [getNumberOfColumns](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getnumberofcolumns)
- [getNumberOfRows](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getnumberofrows)
- [getObject](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getobject)
- [getValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#getvalue)
- [isEmpty](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#isempty)
- [loadFromJSON](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#loadfromjson)
- [setCell](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#setcell)
- [setDisplayFormats](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#setdisplayformats)
- [toJSON](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class/#tojson)


## Constructors

---
#### constructor

The default constructor.
⊕ new EqDataTable(data?: `any`): [EqDataTable](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqdatatable-class)

#### Parameters:
- data: `any`, *Optional*  - The table instance or its JSON representation.



---

## Public Methods

---
### addColumn
Adds column.

▸ addColumn(type: `string`,label: `string`): `void`

#### Parameters:
- type: `string` - The type.
- label: `string` - The label.



**Returns** `void`


---
### addRows
Creates empty rows.

▸ addRows(size: `number`): `void`

#### Parameters:
- size: `number` - The number of empty rows.



**Returns** `void`


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
### getValue
 Gets the value.

▸ getValue(rowIndex: `number`,colIndex: `number`): `any`

#### Parameters:
- rowIndex: `number`
- colIndex: `number` - 



**Returns** `any`


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
### setCell
Sets value to the cell.

▸ setCell(rowIndex: `number`,colIndex: `number`,value: `any`): `void`

#### Parameters:
- rowIndex: `number` - The row.
- colIndex: `number` - The column.
- value: `any` - The value.



**Returns** `void`


---
### setDisplayFormats
▸ setDisplayFormats(options?: [DataDisplayFormatterOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/datadisplayformatteroptions-interface)): `void`

#### Parameters:
- options: [DataDisplayFormatterOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/datadisplayformatteroptions-interface), *Optional* 


**Returns** `void`


---
### toJSON
Saves data table to JSON.

▸ toJSON(): `string`


**Returns** `string` - The JSON representation.



---
