---
title: Expression class
slug: api-reference-7x/easyquery-packages/core-package/classes/expression-class
sidebar:
  order: 100
---

Represents expression object.

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/expression-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/expression-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/expression-class#public-properties-1)
- [_isDefaultValue](api-reference-7x/easyquery-packages/core-package/classes/expression-class#_isdefaultvalue)
- [args](api-reference-7x/easyquery-packages/core-package/classes/expression-class#args)
- [baseAttrId](api-reference-7x/easyquery-packages/core-package/classes/expression-class#baseattrid)
- [dataType](api-reference-7x/easyquery-packages/core-package/classes/expression-class#datatype)
- [distinct](api-reference-7x/easyquery-packages/core-package/classes/expression-class#distinct)
- [func](api-reference-7x/easyquery-packages/core-package/classes/expression-class#func)
- [kind](api-reference-7x/easyquery-packages/core-package/classes/expression-class#kind)
- [sql](api-reference-7x/easyquery-packages/core-package/classes/expression-class#sql)
- [subQuery](api-reference-7x/easyquery-packages/core-package/classes/expression-class#subquery)
- [tag](api-reference-7x/easyquery-packages/core-package/classes/expression-class#tag)

### [Public Accessors](api-reference-7x/easyquery-packages/core-package/classes/expression-class#public-accessors-1)
- [value](api-reference-7x/easyquery-packages/core-package/classes/expression-class#value)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/expression-class#public-methods-1)
- [getIndex](api-reference-7x/easyquery-packages/core-package/classes/expression-class#getindex)
- [getModel](api-reference-7x/easyquery-packages/core-package/classes/expression-class#getmodel)
- [getParent](api-reference-7x/easyquery-packages/core-package/classes/expression-class#getparent)
- [getText](api-reference-7x/easyquery-packages/core-package/classes/expression-class#gettext)
- [hasText](api-reference-7x/easyquery-packages/core-package/classes/expression-class#hastext)
- [isEmpty](api-reference-7x/easyquery-packages/core-package/classes/expression-class#isempty)
- [loadFromData](api-reference-7x/easyquery-packages/core-package/classes/expression-class#loadfromdata)
- [saveToData](api-reference-7x/easyquery-packages/core-package/classes/expression-class#savetodata)
- [setContent](api-reference-7x/easyquery-packages/core-package/classes/expression-class#setcontent)
- [setValue](api-reference-7x/easyquery-packages/core-package/classes/expression-class#setvalue)
- [tryCopyValueFrom](api-reference-7x/easyquery-packages/core-package/classes/expression-class#trycopyvaluefrom)


## Constructors

---
#### constructor

The default constructor.
⊕ new Expression(parent: [ExpressionParent](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface)): [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)

#### Parameters:
- parent: [ExpressionParent](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface)


---

## Public Properties

---
### _isDefaultValue

● _isDefaultValue: `boolean` = `false`

---
### args

The list of arguments.

● args?: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)[]

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

● kind: [DataKind](api-reference-7x/easyquery-packages/core-package/enumerations/datakind-enum) = ` DataKind.Scalar`

---
### sql

The sql expression.

● sql?: `string`

---
### subQuery

The query.

● subQuery?: [Query](api-reference-7x/easyquery-packages/core-package/classes/query-class)

---
### tag

The tag.

● tag: [ExprTag](api-reference-7x/easyquery-packages/core-package/enumerations/exprtag-enum) = ` ExprTag.Constant`

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
▸ getModel(): [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class)


---
### getParent
▸ getParent(): [ExpressionParent](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface)


**Returns** [ExpressionParent](api-reference-7x/easyquery-packages/core-package/interfaces/expressionparent-interface)


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

▸ loadFromData(model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class),data: [ExpressionData](api-reference-7x/easyquery-packages/core-package/interfaces/expressiondata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-7x/easyquery-packages/core-package/classes/datamodel-class) - The Data Model.
- data: [ExpressionData](api-reference-7x/easyquery-packages/core-package/interfaces/expressiondata-interface) - The JSON representation object.



**Returns** `void`


---
### saveToData
Saves expression from JSON representation object.

▸ saveToData(): [ExpressionData](api-reference-7x/easyquery-packages/core-package/interfaces/expressiondata-interface)


**Returns** [ExpressionData](api-reference-7x/easyquery-packages/core-package/interfaces/expressiondata-interface) - The JSON representation object.



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
▸ tryCopyValueFrom(expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)): `void`

#### Parameters:
- expr: [Expression](api-reference-7x/easyquery-packages/core-package/classes/expression-class)


**Returns** `void`


---
