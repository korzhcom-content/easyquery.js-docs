---
title: Expression class
slug: api-reference-old/api-reference-5-x/core-package/classes/expression-class
sidebar:
  order: 100
---

Represents expression object.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#public-properties-1)
- [args](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#args)
- [baseAttrId](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#baseattrid)
- [dataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#datatype)
- [distinct](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#distinct)
- [func](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#func)
- [id](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#id)
- [kind](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#kind)
- [query](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#query)
- [sql](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#sql)
- [tag](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#tag)
- [text](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#text)
- [value](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#value)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#public-methods-1)
- [loadFromData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#loadfromdata)
- [saveToData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class/#savetodata)


## Constructors

---
#### constructor

The default constructor.
⊕ new Expression(): [Expression](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class)


---

## Public Properties

---
### args

The list of arguments.

● args?: [Expression](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/expression-class)[]

---
### baseAttrId

The base attribute id.

● baseAttrId?: `string`

---
### dataType

The data type.

● dataType: [DataType](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datatype-enum) = ` DataType.String`

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

● kind: [DataKind](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/datakind-enum) = ` DataKind.Scalar`

---
### query

The query.

● query?: [Query](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/query-class)

---
### sql

The sql expression.

● sql?: `string`

---
### tag

The tag.

● tag: [ExprTag](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/enumerations/exprtag-enum) = ` ExprTag.Constant`

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

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class),data: [ExpressionData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/expressiondata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- data: [ExpressionData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/expressiondata-interface) - The JSON representation object.



**Returns** `void`

---
### saveToData
Saves expression from JSON representation object.

▸ saveToData(): [ExpressionData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/expressiondata-interface)


**Returns** [ExpressionData](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/expressiondata-interface) - The JSON representation object.


---
