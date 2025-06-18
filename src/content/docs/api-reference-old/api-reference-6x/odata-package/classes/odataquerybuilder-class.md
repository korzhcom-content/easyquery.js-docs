---
title: ODataQueryBuilder class
slug: >-
  api-reference-old/api-reference-6x/odata-package/classes/odataquerybuilder-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class/#constructor)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class/#public-methods-1)
- [buildQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class/#buildquery)
- [getAttrPath](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class/#getattrpath)
- [getCountStatement](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class/#getcountstatement)
- [getPath](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class/#getpath)
- [getSkipTopStatement](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class/#getskiptopstatement)
- [getStatement](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class/#getstatement)


## Constructors

---
#### constructor

⊕ new ODataQueryBuilder(context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)): [ODataQueryBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/odata-package/classes/odataquerybuilder-class)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


---

## Public Methods

---
### buildQuery
▸ buildQuery(): `string` | `null`


**Returns** `string` | `null`

---
### getAttrPath
▸ getAttrPath(attr: `string` | [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)): `string`[]

#### Parameters:
- attr: `string` | [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)


**Returns** `string`[]

---
### getCountStatement
▸ getCountStatement(): `string`


**Returns** `string`

---
### getPath
▸ getPath(): [Tree](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/tree-class)&lt;[Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class)&gt;


**Returns** [Tree](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/tree-class)&lt;[Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class)&gt;

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
