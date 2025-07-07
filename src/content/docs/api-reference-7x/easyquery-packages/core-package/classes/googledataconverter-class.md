---
title: GoogleDataConverter class
slug: >-
  api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class
sidebar:
  order: 100
---

Represents Google data table class

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#constructor)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#public-methods-1)
- [convertTo](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#convertto)
- [getColumnId](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getcolumnid)
- [getColumnLabel](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getcolumnlabel)
- [getColumnObject](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getcolumnobject)
- [getColumnProperties](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getcolumnproperties)
- [getColumnType](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getcolumntype)
- [getNumberOfColumns](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getnumberofcolumns)
- [getNumberOfRows](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getnumberofrows)
- [getObject](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getobject)
- [getRow](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getrow)
- [getValue](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#getvalue)
- [isEmpty](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#isempty)
- [loadFromJSON](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#loadfromjson)
- [toJSON](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class#tojson)


## Constructors

---
#### constructor

The default constructor.
⊕ new GoogleDataConverter(data?: `any`): [GoogleDataConverter](api-reference-7x/easyquery-packages/core-package/classes/googledataconverter-class)

#### Parameters:
- data: `any`, *Optional*  - The table instance or its JSON representation.



---

## Public Methods

---
### convertTo
▸ convertTo(dataTable: `EasyDataTable`): `void`

#### Parameters:
- dataTable: `EasyDataTable`


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
### getRow
▸ getRow(rowIndex: `number`): `any`[]

#### Parameters:
- rowIndex: `number`


**Returns** `any`[]


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
### toJSON
Saves data table to JSON.

▸ toJSON(): `string`


**Returns** `string` - The JSON representation.



---
