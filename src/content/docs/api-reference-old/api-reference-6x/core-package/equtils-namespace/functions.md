---
title: Functions
slug: api-reference-old/api-reference-6x/core-package/equtils-namespace/functions
sidebar:
  order: 100
---

## Index
- [areCompatibleDataTypes](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#arecompatibledatatypes)
- [assign](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#assign)
- [assignDeep](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#assigndeep)
- [combinePath](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#combinepath)
- [convertValue](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#convertvalue)
- [copyArrayTo](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#copyarrayto)
- [createArrayFrom](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#createarrayfrom)
- [dateTimeToStr](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#datetimetostr)
- [fillArray](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#fillarray)
- [findItemById](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#finditembyid)
- [findItemIndexById](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#finditemindexbyid)
- [generateId](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#generateid)
- [getIfDefined](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#getifdefined)
- [indexOfArrayItem](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#indexofarrayitem)
- [isIntType](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#isinttype)
- [isNumeric](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#isnumeric)
- [isNumericType](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#isnumerictype)
- [isObject](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#isobject)
- [isPropSet](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#ispropset)
- [linkTypeToStr](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#linktypetostr)
- [moveArrayItem](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#movearrayitem)
- [numberToStr](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#numbertostr)
- [parseOperatorFormat](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#parseoperatorformat)
- [removeArrayItem](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#removearrayitem)
- [shiftToFitWindow](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#shifttofitwindow)
- [strToDate](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#strtodate)
- [strToLinkType](api-reference-old/api-reference-6x/core-package/equtils-namespace/functions#strtolinktype)

#### areCompatibleDataTypes

Returns `true` if two data types  passed in parameters
are compatible - so it's safe to copy the values between
two expressions with these two types

▸ areCompatibleDataTypes(type1: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum),type2: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum)): `boolean`

#### Parameters:
- type1: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum)
- type2: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum) - 



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

▸ assignDeep(target: `any`,args: `any`[]): `any`

#### Parameters:
- target: `any` - the target object
- args: `any`[] - an array of the source objects



**Returns** `any`



---
#### combinePath

Adds two paths and returns the result
Correctly processes leading and trailing slashes

▸ combinePath(path1: `string`,path2: `string`): `string`

#### Parameters:
- path1: `string`
- path2: `string` - 



**Returns** `string`



---
#### convertValue

▸ convertValue(value: `string`,fromDataType: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum),toDataType: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum)): `string`

#### Parameters:
- value: `string`
- fromDataType: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum)
- toDataType: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum)


**Returns** `string`



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

▸ dateTimeToStr(date: `Date`,format: `string`): `string`

#### Parameters:
- date: `Date`
- format: `string`


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
#### getIfDefined

▸ getIfDefined(value: `T`,defaultValue: `T`): `T`

#### Parameters:
- value: `T`
- defaultValue: `T`


**Returns** `T`



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
#### isIntType

Returns `true` if the `DataType` value passed in the parameter
represents some numeric type

▸ isIntType(dtype: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum)): `boolean`

#### Parameters:
- dtype: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum) - 



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

▸ isNumericType(dtype: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum)): `boolean`

#### Parameters:
- dtype: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum) - 



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
#### linkTypeToStr

Converts a `LinkType` value to a string

▸ linkTypeToStr(type: [LinkType](api-reference-old/api-reference-6x/core-package/enumerations/linktype-enum)): `string`

#### Parameters:
- type: [LinkType](api-reference-old/api-reference-6x/core-package/enumerations/linktype-enum) - 



**Returns** `string`



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

▸ numberToStr(number: `Number`,decimalSeparator?: `string`): `string`

#### Parameters:
- number: `Number`
- decimalSeparator: `string`, *Optional* 


**Returns** `string`



---
#### parseOperatorFormat

Parses the operator's format string and returns a list of tokens

▸ parseOperatorFormat(operator: `any`): [FormatToken](api-reference-old/api-reference-6x/core-package/interfaces/formattoken-interface)[]

#### Parameters:
- operator: `any` - 



**Returns** [FormatToken](api-reference-old/api-reference-6x/core-package/interfaces/formattoken-interface)[]



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
#### strToDate

▸ strToDate(value: `string`,format: `string`): `Date`

#### Parameters:
- value: `string`
- format: `string`


**Returns** `Date`



---
#### strToLinkType

Converts a string to a `LinkType` value

▸ strToLinkType(str: `string`): [LinkType](api-reference-old/api-reference-6x/core-package/enumerations/linktype-enum)

#### Parameters:
- str: `string` - 



**Returns** [LinkType](api-reference-old/api-reference-6x/core-package/enumerations/linktype-enum)



---
