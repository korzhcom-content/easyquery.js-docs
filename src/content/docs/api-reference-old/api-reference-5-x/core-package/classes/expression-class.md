---
title: Expression class
slug: api-reference-old/api-reference-5-x/core-package/classes/expression-class
sidebar:
  order: 100
---

Represents expression object.

## Index
### [Constructors](api-reference-old/api-reference-5-x/core-package/classes/expression-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/core-package/classes/expression-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/core-package/classes/expression-class#public-properties-1)
- [args](api-reference-old/api-reference-5-x/core-package/classes/expression-class#args)
- [baseAttrId](api-reference-old/api-reference-5-x/core-package/classes/expression-class#baseattrid)
- [dataType](api-reference-old/api-reference-5-x/core-package/classes/expression-class#datatype)
- [distinct](api-reference-old/api-reference-5-x/core-package/classes/expression-class#distinct)
- [func](api-reference-old/api-reference-5-x/core-package/classes/expression-class#func)
- [id](api-reference-old/api-reference-5-x/core-package/classes/expression-class#id)
- [kind](api-reference-old/api-reference-5-x/core-package/classes/expression-class#kind)
- [query](api-reference-old/api-reference-5-x/core-package/classes/expression-class#query)
- [sql](api-reference-old/api-reference-5-x/core-package/classes/expression-class#sql)
- [tag](api-reference-old/api-reference-5-x/core-package/classes/expression-class#tag)
- [text](api-reference-old/api-reference-5-x/core-package/classes/expression-class#text)
- [value](api-reference-old/api-reference-5-x/core-package/classes/expression-class#value)

### [Public Methods](api-reference-old/api-reference-5-x/core-package/classes/expression-class#public-methods-1)
- [loadFromData](api-reference-old/api-reference-5-x/core-package/classes/expression-class#loadfromdata)
- [saveToData](api-reference-old/api-reference-5-x/core-package/classes/expression-class#savetodata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Expression(): [Expression](api-reference-old/api-reference-5-x/core-package/classes/expression-class)


---

## Public Properties

---
### args

The list of arguments.

● args?: [Expression](api-reference-old/api-reference-5-x/core-package/classes/expression-class)[]

---
### baseAttrId

The base attribute id.

● baseAttrId?: `string`

---
### dataType

The data type.

● dataType: [DataType](api-reference-old/api-reference-5-x/core-package/enumerations/datatype-enum) = ` DataType.String`

---
### distinct

The distinct option. (e.g `SELECT DISTINCT`)

● distinct: `boolean` = `false`

---
### func

The function.

● func?: `string`

---
### id

The id.

● id: `string` = ` null`

---
### kind

The data kind.

● kind: [DataKind](api-reference-old/api-reference-5-x/core-package/enumerations/datakind-enum) = ` DataKind.Scalar`

---
### query

The query.

● query?: [Query](api-reference-old/api-reference-5-x/core-package/classes/query-class)

---
### sql

The sql expression.

● sql?: `string`

---
### tag

The tag.

● tag: [ExprTag](api-reference-old/api-reference-5-x/core-package/enumerations/exprtag-enum) = ` ExprTag.Constant`

---
### text

The text.

● text: `string` = `""`

---
### value

The value.

● value: `string` | `any` = `""`

---
## Public Methods

---
### loadFromData
Loads expression from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class),data: [ExpressionData](api-reference-old/api-reference-5-x/core-package/interfaces/expressiondata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-5-x/core-package/classes/datamodel-class) - The Data Model.
- data: [ExpressionData](api-reference-old/api-reference-5-x/core-package/interfaces/expressiondata-interface) - The JSON representation object.



**Returns** `void`

---
### saveToData
Saves expression from JSON representation object.

▸ saveToData(): [ExpressionData](api-reference-old/api-reference-5-x/core-package/interfaces/expressiondata-interface)


**Returns** [ExpressionData](api-reference-old/api-reference-5-x/core-package/interfaces/expressiondata-interface) - The JSON representation object.


---
