---
title: Expression class
slug: api-reference-old/api-reference-6x/core-package/classes/expression-class
sidebar:
  order: 100
---

Represents expression object.

## Index
### [Constructors](api-reference-old/api-reference-6x/core-package/classes/expression-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/core-package/classes/expression-class#constructor)

### [Public Properties](api-reference-old/api-reference-6x/core-package/classes/expression-class#public-properties-1)
- [args](api-reference-old/api-reference-6x/core-package/classes/expression-class#args)
- [baseAttrId](api-reference-old/api-reference-6x/core-package/classes/expression-class#baseattrid)
- [dataType](api-reference-old/api-reference-6x/core-package/classes/expression-class#datatype)
- [distinct](api-reference-old/api-reference-6x/core-package/classes/expression-class#distinct)
- [func](api-reference-old/api-reference-6x/core-package/classes/expression-class#func)
- [kind](api-reference-old/api-reference-6x/core-package/classes/expression-class#kind)
- [sql](api-reference-old/api-reference-6x/core-package/classes/expression-class#sql)
- [subQuery](api-reference-old/api-reference-6x/core-package/classes/expression-class#subquery)
- [tag](api-reference-old/api-reference-6x/core-package/classes/expression-class#tag)

### [Public Accessors](api-reference-old/api-reference-6x/core-package/classes/expression-class#public-accessors-1)
- [value](api-reference-old/api-reference-6x/core-package/classes/expression-class#value)

### [Public Methods](api-reference-old/api-reference-6x/core-package/classes/expression-class#public-methods-1)
- [copyValueFrom](api-reference-old/api-reference-6x/core-package/classes/expression-class#copyvaluefrom)
- [getIndex](api-reference-old/api-reference-6x/core-package/classes/expression-class#getindex)
- [getModel](api-reference-old/api-reference-6x/core-package/classes/expression-class#getmodel)
- [getParent](api-reference-old/api-reference-6x/core-package/classes/expression-class#getparent)
- [getText](api-reference-old/api-reference-6x/core-package/classes/expression-class#gettext)
- [isEmpty](api-reference-old/api-reference-6x/core-package/classes/expression-class#isempty)
- [loadFromData](api-reference-old/api-reference-6x/core-package/classes/expression-class#loadfromdata)
- [saveToData](api-reference-old/api-reference-6x/core-package/classes/expression-class#savetodata)
- [setContent](api-reference-old/api-reference-6x/core-package/classes/expression-class#setcontent)
- [setValue](api-reference-old/api-reference-6x/core-package/classes/expression-class#setvalue)


## Constructors

---
#### constructor

The default constructor.
⊕ new Expression(parent: [ExpressionParent](api-reference-old/api-reference-6x/core-package/interfaces/expressionparent-interface)): [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)

#### Parameters:
- parent: [ExpressionParent](api-reference-old/api-reference-6x/core-package/interfaces/expressionparent-interface)


---

## Public Properties

---
### args

The list of arguments.

● args?: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)[]

---
### baseAttrId

The base attribute id.

● baseAttrId?: `string`

---
### dataType

The data type.

● dataType: [DataType](api-reference-old/api-reference-6x/core-package/enumerations/datatype-enum) = ` DataType.String`

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

● kind: [DataKind](api-reference-old/api-reference-6x/core-package/enumerations/datakind-enum) = ` DataKind.Scalar`

---
### sql

The sql expression.

● sql?: `string`

---
### subQuery

The query.

● subQuery?: [Query](api-reference-old/api-reference-6x/core-package/classes/query-class)

---
### tag

The tag.

● tag: [ExprTag](api-reference-old/api-reference-6x/core-package/enumerations/exprtag-enum) = ` ExprTag.Constant`

---
## Public Accessors

---
### value
⇄ get value(): `string`


**Returns** `string`


---
## Public Methods

---
### copyValueFrom
▸ copyValueFrom(expr: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)): `void`

#### Parameters:
- expr: [Expression](api-reference-old/api-reference-6x/core-package/classes/expression-class)


**Returns** `void`


---
### getIndex
▸ getIndex(): `number`


**Returns** `number`


---
### getModel
▸ getModel(): [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


**Returns** [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class)


---
### getParent
▸ getParent(): [ExpressionParent](api-reference-old/api-reference-6x/core-package/interfaces/expressionparent-interface)


**Returns** [ExpressionParent](api-reference-old/api-reference-6x/core-package/interfaces/expressionparent-interface)


---
### getText
▸ getText(): `any`


**Returns** `any`


---
### isEmpty
▸ isEmpty(): `boolean`


**Returns** `boolean`


---
### loadFromData
Loads expression from its JSON representation object.

▸ loadFromData(model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class),data: [ExpressionData](api-reference-old/api-reference-6x/core-package/interfaces/expressiondata-interface)): `void`

#### Parameters:
- model: [DataModel](api-reference-old/api-reference-6x/core-package/classes/datamodel-class) - The Data Model.
- data: [ExpressionData](api-reference-old/api-reference-6x/core-package/interfaces/expressiondata-interface) - The JSON representation object.



**Returns** `void`


---
### saveToData
Saves expression from JSON representation object.

▸ saveToData(): [ExpressionData](api-reference-old/api-reference-6x/core-package/interfaces/expressiondata-interface)


**Returns** [ExpressionData](api-reference-old/api-reference-6x/core-package/interfaces/expressiondata-interface) - The JSON representation object.



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
