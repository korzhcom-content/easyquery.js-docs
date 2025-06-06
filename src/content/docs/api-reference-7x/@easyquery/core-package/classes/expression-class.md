---
title: Expression class
slug: api-reference-7x/@easyquery/core-package/classes/expression-class
sidebar:
  order: 100
---

Represents expression object.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#public-properties-1)
- [_isDefaultValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#_isdefaultvalue)
- [args](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#args)
- [baseAttrId](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#baseattrid)
- [dataType](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#datatype)
- [distinct](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#distinct)
- [func](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#func)
- [kind](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#kind)
- [sql](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#sql)
- [subQuery](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#subquery)
- [tag](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#tag)

### [Public Accessors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#public-accessors-1)
- [value](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#value)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#public-methods-1)
- [getIndex](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#getindex)
- [getModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#getmodel)
- [getParent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#getparent)
- [getText](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#gettext)
- [hasText](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#hastext)
- [isEmpty](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#isempty)
- [loadFromData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#loadfromdata)
- [saveToData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#savetodata)
- [setContent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#setcontent)
- [setValue](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#setvalue)
- [tryCopyValueFrom](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class/#trycopyvaluefrom)


## Constructors

---
#### constructor

The default constructor.
⊕ new Expression(parent: [ExpressionParent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface)): [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)

#### Parameters:
- parent: [ExpressionParent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface)


---

## Public Properties

---
### _isDefaultValue

● _isDefaultValue: `boolean` = `false`

---
### args

The list of arguments.

● args?: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)[]

---
### baseAttrId

The base attribute id.

● baseAttrId?: `string`

---
### dataType

The data type.

● dataType: `DataType` = ` DataType.String`

---
### distinct

The distinct option. (e.g `SELECT DISTINCT`)

● distinct: `boolean` = `false`

---
### func

The function.

● func?: `string`

---
### kind

The data kind.

● kind: [DataKind](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/datakind-enum) = ` DataKind.Scalar`

---
### sql

The sql expression.

● sql?: `string`

---
### subQuery

The query.

● subQuery?: [Query](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/query-class)

---
### tag

The tag.

● tag: [ExprTag](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/enumerations/exprtag-enum) = ` ExprTag.Constant`

---
## Public Accessors

---
### value
⇄ get value(): `string`


**Returns** `string`


---
## Public Methods

---
### getIndex
▸ getIndex(): `number`


**Returns** `number`


---
### getModel
▸ getModel(): [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)


**Returns** [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class)


---
### getParent
▸ getParent(): [ExpressionParent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface)


**Returns** [ExpressionParent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressionparent-interface)


---
### getText
▸ getText(): `any`


**Returns** `any`


---
### hasText
▸ hasText(): `boolean`


**Returns** `boolean`


---
### isEmpty
▸ isEmpty(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads expression from its JSON representation object.

▸ loadFromData(model: [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class),data: [ExpressionData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressiondata-interface)): `void`

#### Parameters:
- model: [DataModel](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/datamodel-class) - The Data Model.
- data: [ExpressionData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressiondata-interface) - The JSON representation object.



**Returns** `void`


---
### saveToData
Saves expression from JSON representation object.

▸ saveToData(): [ExpressionData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressiondata-interface)


**Returns** [ExpressionData](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/interfaces/expressiondata-interface) - The JSON representation object.



---
### setContent
▸ setContent(val: `string`,txt?: `string`,silent?: `boolean`): `void`

#### Parameters:
- val: `string`
- txt: `string`, *Optional* 
- silent: `boolean`, *Default value* = `false`


**Returns** `void`


---
### setValue
▸ setValue(val: `string`,silent?: `boolean`): `void`

#### Parameters:
- val: `string`
- silent: `boolean`, *Default value* = `false`


**Returns** `void`


---
### tryCopyValueFrom
▸ tryCopyValueFrom(expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)): `void`

#### Parameters:
- expr: [Expression](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/expression-class)


**Returns** `void`


---
