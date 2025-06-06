---
title: Functions
slug: api-reference-5-x/@easyquery/core-package/equtils-namespace/functions
sidebar:
  order: 100
---

## Index
- [areCompatibleDataTypes](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#arecompatibledatatypes)
- [assign](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#assign)
- [assignDeep](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#assigndeep)
- [combinePath](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#combinepath)
- [findItemById](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#finditembyid)
- [generateId](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#generateid)
- [indexOfArrayItem](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#indexofarrayitem)
- [isIntType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#isinttype)
- [isNumeric](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#isnumeric)
- [isNumericType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#isnumerictype)
- [isObject](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#isobject)
- [isPropSet](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#ispropset)
- [linkTypeToStr](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#linktypetostr)
- [moveArrayItem](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#movearrayitem)
- [parseOperatorFormat](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#parseoperatorformat)
- [removeArrayItem](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#removearrayitem)
- [shiftToFitWindow](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#shifttofitwindow)
- [strToLinkType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/equtils-namespace/functions/#strtolinktype)

#### areCompatibleDataTypes

Returns `true` if two data types  passed in parameters
are compatible - so it's safe to copy the values between
two expressions with these two types

▸ areCompatibleDataTypes(type1: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum),type2: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum)): `boolean`

#### Parameters:
- type1: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum)
- type2: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum) - 


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
#### findItemById

Searches an array of the objects which implement ItemWithId by ID
Returs the found object or null.

▸ findItemById(array: `Array`&lt;`T`&gt;,id: `any`): `T`

#### Parameters:
- array: `Array`&lt;`T`&gt;
- id: `any` - 


**Returns** `T`


---
#### generateId

Generates an unique ID

▸ generateId(): `string`

**Returns** `string`


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

▸ isIntType(dtype: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum)): `boolean`

#### Parameters:
- dtype: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum) - 


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

▸ isNumericType(dtype: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum)): `boolean`

#### Parameters:
- dtype: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum) - 


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

▸ linkTypeToStr(type: [LinkType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/linktype-enum)): `string`

#### Parameters:
- type: [LinkType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/linktype-enum) - 


**Returns** `string`


---
#### moveArrayItem

Moves an item in some array to a new position

▸ moveArrayItem(arr: `Array`&lt;`T`&gt;,old_index: `number`,new_index: `number`): `void`

#### Parameters:
- arr: `Array`&lt;`T`&gt;
- old_index: `number`
- new_index: `number` - 


**Returns** `void`


---
#### parseOperatorFormat

Parses the operator's format string and returns a list of tokens

▸ parseOperatorFormat(operator: `any`): [FormatToken](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/formattoken-interface)[]

#### Parameters:
- operator: `any` - 


**Returns** [FormatToken](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/formattoken-interface)[]


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
#### strToLinkType

Converts a string to a `LinkType` value

▸ strToLinkType(str: `string`): [LinkType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/linktype-enum)

#### Parameters:
- str: `string` - 


**Returns** [LinkType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/linktype-enum)


---
