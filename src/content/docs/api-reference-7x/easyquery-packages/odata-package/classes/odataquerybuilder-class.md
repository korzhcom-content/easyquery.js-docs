---
title: ODataQueryBuilder class
slug: >-
  api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class#constructor)

### [Public Methods](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class#public-methods-1)
- [buildQuery](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class#buildquery)
- [getAttrPath](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class#getattrpath)
- [getCountStatement](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class#getcountstatement)
- [getPath](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class#getpath)
- [getSkipTopStatement](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class#getskiptopstatement)
- [getStatement](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class#getstatement)


## Constructors

---
#### constructor

⊕ new ODataQueryBuilder(context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)): [ODataQueryBuilder](api-reference-7x/easyquery-packages/odata-package/classes/odataquerybuilder-class)

#### Parameters:
- context: [EqContext](api-reference-7x/easyquery-packages/core-package/classes/eqcontext-class)


---

## Public Methods

---
### buildQuery
▸ buildQuery(): `string` | `null`


**Returns** `string` | `null`


---
### getAttrPath
▸ getAttrPath(attr: `string` | [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)): `string`[]

#### Parameters:
- attr: `string` | [EntityAttr](api-reference-7x/easyquery-packages/core-package/classes/entityattr-class)


**Returns** `string`[]


---
### getCountStatement
▸ getCountStatement(): `string`


**Returns** `string`


---
### getPath
▸ getPath(): [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;[Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)&gt;


**Returns** [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;[Entity](api-reference-7x/easyquery-packages/core-package/classes/entity-class)&gt;


---
### getSkipTopStatement
▸ getSkipTopStatement(offset: `number`,limit: `number`): `string`

#### Parameters:
- offset: `number`
- limit: `number`


**Returns** `string`


---
### getStatement
▸ getStatement(): `string`


**Returns** `string`


---
