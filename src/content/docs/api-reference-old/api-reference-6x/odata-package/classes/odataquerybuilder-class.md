---
title: ODataQueryBuilder class
slug: >-
  api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class#constructor)

### [Public Methods](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class#public-methods-1)
- [buildQuery](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class#buildquery)
- [getAttrPath](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class#getattrpath)
- [getCountStatement](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class#getcountstatement)
- [getPath](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class#getpath)
- [getSkipTopStatement](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class#getskiptopstatement)
- [getStatement](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class#getstatement)


## Constructors

---
#### constructor

⊕ new ODataQueryBuilder(context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)): [ODataQueryBuilder](api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


---

## Public Methods

---
### buildQuery
▸ buildQuery(): `string` | `null`


**Returns** `string` | `null`

---
### getAttrPath
▸ getAttrPath(attr: `string` | [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)): `string`[]

#### Parameters:
- attr: `string` | [EntityAttr](api-reference-old/api-reference-6x/core-package/classes/entityattr-class)


**Returns** `string`[]

---
### getCountStatement
▸ getCountStatement(): `string`


**Returns** `string`

---
### getPath
▸ getPath(): [Tree](api-reference-old/api-reference-6x/core-package/classes/tree-class)&lt;[Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)&gt;


**Returns** [Tree](api-reference-old/api-reference-6x/core-package/classes/tree-class)&lt;[Entity](api-reference-old/api-reference-6x/core-package/classes/entity-class)&gt;

---
### getSkipTopStatement
▸ getSkipTopStatement(page?: `number`): `string`

#### Parameters:
- page: `number`, *Default value* = `1`


**Returns** `string`

---
### getStatement
▸ getStatement(): `string`


**Returns** `string`

---
