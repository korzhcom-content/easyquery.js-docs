---
title: Functions
slug: api-reference-7x/easyquery-packages/core-package/equtils-namespace/functions
sidebar:
  order: 100
---

## Index
- [combinePath](api-reference-7x/easyquery-packages/core-package/equtils-namespace/functions#combinepath)
- [convertValue](api-reference-7x/easyquery-packages/core-package/equtils-namespace/functions#convertvalue)
- [linkTypeToStr](api-reference-7x/easyquery-packages/core-package/equtils-namespace/functions#linktypetostr)
- [parseOperatorFormat](api-reference-7x/easyquery-packages/core-package/equtils-namespace/functions#parseoperatorformat)
- [strToLinkType](api-reference-7x/easyquery-packages/core-package/equtils-namespace/functions#strtolinktype)

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

Converts a value from one DataType to another

▸ convertValue(value: `string`,fromDataType: `DataType`,toDataType: `DataType`): `string`

#### Parameters:
- value: `string`
- fromDataType: `DataType` - the original data type
- toDataType: `DataType` - the data type we want to get



**Returns** `string`



---
#### linkTypeToStr

Converts a `LinkType` value to a string

▸ linkTypeToStr(type: [LinkType](api-reference-7x/easyquery-packages/core-package/enumerations/linktype-enum)): `string`

#### Parameters:
- type: [LinkType](api-reference-7x/easyquery-packages/core-package/enumerations/linktype-enum) - 



**Returns** `string`



---
#### parseOperatorFormat

Parses the operator's format string and returns a list of tokens

▸ parseOperatorFormat(operator: `any`): [FormatToken](api-reference-7x/easyquery-packages/core-package/interfaces/formattoken-interface)[]

#### Parameters:
- operator: `any` - 



**Returns** [FormatToken](api-reference-7x/easyquery-packages/core-package/interfaces/formattoken-interface)[]



---
#### strToLinkType

Converts a string to a `LinkType` value

▸ strToLinkType(str: `string`): [LinkType](api-reference-7x/easyquery-packages/core-package/enumerations/linktype-enum)

#### Parameters:
- str: `string` - 



**Returns** [LinkType](api-reference-7x/easyquery-packages/core-package/enumerations/linktype-enum)



---
