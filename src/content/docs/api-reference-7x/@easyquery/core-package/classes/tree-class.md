---
title: Tree class
slug: api-reference-7x/@easyquery/core-package/classes/tree-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#public-properties-1)
- [childs](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#childs)
- [parent](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#parent)
- [value](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#value)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#public-methods-1)
- [addChild](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#addchild)
- [contains](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#contains)
- [findNode](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#findnode)
- [setParents](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class/#setparents)


## Constructors

---
#### constructor

⊕ new Tree(value?: `T` | `T`[] | [Tree](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class)&lt;`T`&gt;): [Tree](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class)

#### Parameters:
- value: `T` | `T`[] | [Tree](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class)&lt;`T`&gt;, *Default value* = ` null`


---

## Public Properties

---
### childs

● childs: [Tree](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class)&lt;`T`&gt;[] = ` []`

---
### parent

● parent: [Tree](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class)&lt;`T`&gt; = ` null`

---
### value

● value: `T` = ` null`

---
## Public Methods

---
### addChild
▸ addChild(child: [Tree](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class)&lt;`T`&gt;): `void`

#### Parameters:
- child: [Tree](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class)&lt;`T`&gt;


**Returns** `void`


---
### contains
▸ contains(value: `T`): `boolean`

#### Parameters:
- value: `T`


**Returns** `boolean`


---
### findNode
▸ findNode(value: `T`): [Tree](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class)&lt;`T`&gt; | `null`

#### Parameters:
- value: `T`


**Returns** [Tree](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/tree-class)&lt;`T`&gt; | `null`


---
### setParents
▸ setParents(): `void`


**Returns** `void`


---
