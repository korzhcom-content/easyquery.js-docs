---
title: Functions
slug: api-reference-7x/easydata-packages/core-package/utils-namespace/functions
sidebar:
  order: 100
---

## Index
- [IsDefinedAndNotNull](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#isdefinedandnotnull)
- [areCompatibleDataTypes](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#arecompatibledatatypes)
- [assign](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#assign)
- [assignDeep](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#assigndeep)
- [copyArrayTo](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#copyarrayto)
- [createArrayFrom](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#createarrayfrom)
- [dateTimeToStr](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#datetimetostr)
- [fillArray](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#fillarray)
- [findItemById](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#finditembyid)
- [findItemIndexById](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#finditemindexbyid)
- [generateId](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#generateid)
- [getAllDataTypes](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#getalldatatypes)
- [getDateDataTypes](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#getdatedatatypes)
- [getIfDefined](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#getifdefined)
- [getStringDataTypes](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#getstringdatatypes)
- [indexOfArrayItem](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#indexofarrayitem)
- [insertArrayItem](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#insertarrayitem)
- [isIntType](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#isinttype)
- [isNumeric](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#isnumeric)
- [isNumericType](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#isnumerictype)
- [isObject](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#isobject)
- [isPropSet](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#ispropset)
- [moveArrayItem](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#movearrayitem)
- [numberToStr](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#numbertostr)
- [removeArrayItem](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#removearrayitem)
- [shiftToFitWindow](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#shifttofitwindow)
- [strToDateTime](api-reference-7x/easydata-packages/core-package/utils-namespace/functions#strtodatetime)

#### IsDefinedAndNotNull

▸ IsDefinedAndNotNull(value: `any`): `boolean`

#### Parameters:
- value: `any`


**Returns** `boolean`



---
#### areCompatibleDataTypes

Returns `true` if two data types  passed in parameters
are compatible - so it's safe to copy the values between
two expressions with these two types

▸ areCompatibleDataTypes(type1: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum),type2: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)): `boolean`

#### Parameters:
- type1: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)
- type2: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum) - 



**Returns** `boolean`



---
#### assign

Copy the content of all objests passed in `args` parameters into `target`
and returns the result
NB: This function copies only the first level properties.
For a deep copy please use `assignDeep`

▸ assign(target: `any`,args: `any`[]): `any`

#### Parameters:
- target: `any` - the target object
- args: `any`[] - an array of the source objects



**Returns** `any`



---
#### assignDeep

Copy the content of all objests passed in `args` parameters into `target`
and returns the result
NB: This function make a deep copy -
so `assignDeep` will be called recursively for all object properties
on the first level.

▸ assignDeep(target: `any`,sources: `any`[]): `any`

#### Parameters:
- target: `any` - the target object
- sources: `any`[] - an array of the source objects



**Returns** `any`



---
#### copyArrayTo

▸ copyArrayTo(collection1: `any`,collection2: `any`): `void`

#### Parameters:
- collection1: `any`
- collection2: `any`


**Returns** `void`



---
#### createArrayFrom

▸ createArrayFrom(collection: `any`): `any`

#### Parameters:
- collection: `any`


**Returns** `any`



---
#### dateTimeToStr

Returns string representation of the date/time value according to the custom format (second parameter)
The format is compatible with the one used in .NET: https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings

▸ dateTimeToStr(date: `Date`,format: `string`): `string`

#### Parameters:
- date: `Date`
- format: `string` - 



**Returns** `string`



---
#### fillArray

▸ fillArray(arr: `Array`&lt;`T`&gt;,value: `T`,start?: `number`,end?: `number`): `T`[]

#### Parameters:
- arr: `Array`&lt;`T`&gt;
- value: `T`
- start: `number`, *Default value* = `0`
- end: `number`, *Optional* 


**Returns** `T`[]



---
#### findItemById

Searches an array of the objects which implement ItemWithId by ID
Returs the found object or null.

▸ findItemById(array: `Array`&lt;`T`&gt;,id: `any`): `T`

#### Parameters:
- array: `Array`&lt;`T`&gt;
- id: `any` - 



**Returns** `T`



---
#### findItemIndexById

▸ findItemIndexById(array: `Array`&lt;`T`&gt;,id: `any`): `number`

#### Parameters:
- array: `Array`&lt;`T`&gt;
- id: `any`


**Returns** `number`



---
#### generateId

Generates an unique ID

▸ generateId(prefix: `string`): `string`

#### Parameters:
- prefix: `string`


**Returns** `string`



---
#### getAllDataTypes

▸ getAllDataTypes(): [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)[]


**Returns** [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)[]



---
#### getDateDataTypes

▸ getDateDataTypes(): [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)[]


**Returns** [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)[]



---
#### getIfDefined

▸ getIfDefined(value: `T`,defaultValue: `T`): `T`

#### Parameters:
- value: `T`
- defaultValue: `T`


**Returns** `T`



---
#### getStringDataTypes

▸ getStringDataTypes(): [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)[]


**Returns** [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)[]



---
#### indexOfArrayItem

Searches an array of the objects which implement ItemWithId by ID
Returs the index of the found element, or -1 if nothing was found.

▸ indexOfArrayItem(arr: `Array`&lt;`T`&gt;,item: `T`): `number`

#### Parameters:
- arr: `Array`&lt;`T`&gt;
- item: `T`


**Returns** `number`



---
#### insertArrayItem

▸ insertArrayItem(arr: `Array`&lt;`T`&gt;,index: `number`,value: `T`): `void`

#### Parameters:
- arr: `Array`&lt;`T`&gt;
- index: `number`
- value: `T`


**Returns** `void`



---
#### isIntType

Returns `true` if the `DataType` value passed in the parameter
represents some numeric type

▸ isIntType(dtype: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)): `boolean`

#### Parameters:
- dtype: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum) - 



**Returns** `boolean`



---
#### isNumeric

Returns `true` if the value passed in the parameter is an a numeric value

▸ isNumeric(val: `any`): `boolean`

#### Parameters:
- val: `any` - 



**Returns** `boolean`



---
#### isNumericType

Returns `true` if the `DataType` value passed in the parameter
represents some numeric type

▸ isNumericType(dtype: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum)): `boolean`

#### Parameters:
- dtype: [DataType](api-reference-7x/easydata-packages/core-package/enumerations/datatype-enum) - 



**Returns** `boolean`



---
#### isObject

Returns `true` if the value passed in the parameter is an object

▸ isObject(val: `any`): `boolean`

#### Parameters:
- val: `any` - 



**Returns** `boolean`



---
#### isPropSet

Returns `true` if the property with named `propName`
in the object `obj` has some value

▸ isPropSet(obj: `any`,propName: `any`): `any`

#### Parameters:
- obj: `any`
- propName: `any` - 



**Returns** `any`



---
#### moveArrayItem

Moves an item in some array to a new position

▸ moveArrayItem(array: `Array`&lt;`T`&gt;,index1: `number`,index2: `number`): `void`

#### Parameters:
- array: `Array`&lt;`T`&gt;
- index1: `number`
- index2: `number` - 



**Returns** `void`



---
#### numberToStr

Converts a numeric value to the string taking into the account the decimal separator

▸ numberToStr(number: `Number`,decimalSeparator?: `string`): `string`

#### Parameters:
- number: `Number`
- decimalSeparator: `string`, *Optional*  - the symbol that represents decimal separator. If not specified the function gets the one from the current locale settings.



**Returns** `string`



---
#### removeArrayItem

Searches for a particular item in the array are removes that item if found.

▸ removeArrayItem(arr: `Array`&lt;`T`&gt;,value: `T`): `T`

#### Parameters:
- arr: `Array`&lt;`T`&gt;
- value: `T` - 



**Returns** `T`



---
#### shiftToFitWindow

Calculates the shift on which we need to move our element horizontally
to find current window

▸ shiftToFitWindow(absLeft: `number`,width: `number`): `number`

#### Parameters:
- absLeft: `number`
- width: `number` - 



**Returns** `number`



---
#### strToDateTime

▸ strToDateTime(value: `string`,format: `string`): `Date`

#### Parameters:
- value: `string`
- format: `string`


**Returns** `Date`



---
