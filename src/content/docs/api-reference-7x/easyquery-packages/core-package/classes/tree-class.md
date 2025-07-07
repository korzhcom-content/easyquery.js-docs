---
title: Tree class
slug: api-reference-7x/easyquery-packages/core-package/classes/tree-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easyquery-packages/core-package/classes/tree-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/core-package/classes/tree-class#constructor)

### [Public Properties](api-reference-7x/easyquery-packages/core-package/classes/tree-class#public-properties-1)
- [childs](api-reference-7x/easyquery-packages/core-package/classes/tree-class#childs)
- [parent](api-reference-7x/easyquery-packages/core-package/classes/tree-class#parent)
- [value](api-reference-7x/easyquery-packages/core-package/classes/tree-class#value)

### [Public Methods](api-reference-7x/easyquery-packages/core-package/classes/tree-class#public-methods-1)
- [addChild](api-reference-7x/easyquery-packages/core-package/classes/tree-class#addchild)
- [contains](api-reference-7x/easyquery-packages/core-package/classes/tree-class#contains)
- [findNode](api-reference-7x/easyquery-packages/core-package/classes/tree-class#findnode)
- [setParents](api-reference-7x/easyquery-packages/core-package/classes/tree-class#setparents)


## Constructors

---
#### constructor

⊕ new Tree(value?: `T` | `T`[] | [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;`T`&gt;): [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)

#### Parameters:
- value: `T` | `T`[] | [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;`T`&gt;, *Default value* = ` null`


---

## Public Properties

---
### childs

● childs: [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;`T`&gt;[] = ` []`

---
### parent

● parent: [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;`T`&gt; = ` null`

---
### value

● value: `T` = ` null`

---
## Public Methods

---
### addChild
▸ addChild(child: [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;`T`&gt;): `void`

#### Parameters:
- child: [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;`T`&gt;


**Returns** `void`


---
### contains
▸ contains(value: `T`): `boolean`

#### Parameters:
- value: `T`


**Returns** `boolean`


---
### findNode
▸ findNode(value: `T`): [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;`T`&gt; | `null`

#### Parameters:
- value: `T`


**Returns** [Tree](api-reference-7x/easyquery-packages/core-package/classes/tree-class)&lt;`T`&gt; | `null`


---
### setParents
▸ setParents(): `void`


**Returns** `void`


---
