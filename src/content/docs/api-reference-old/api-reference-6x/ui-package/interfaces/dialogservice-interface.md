---
title: DialogService interface
slug: >-
  api-reference-old/api-reference-6x/ui-package/interfaces/dialogservice-interface
sidebar:
  order: 100
---

## Index
### [Methods](api-reference-old/api-reference-6x/ui-package/interfaces/dialogservice-interface#methods-1)
- [openConfirm](api-reference-old/api-reference-6x/ui-package/interfaces/dialogservice-interface#openconfirm)
- [openPrompt](api-reference-old/api-reference-6x/ui-package/interfaces/dialogservice-interface#openprompt)



## Methods

---
### openConfirm
▸ openConfirm(title?: `string`,content?: `string`): `Promise`&lt;`boolean`&gt;

#### Parameters:
- title: `string`, *Optional* 
- content: `string`, *Optional* 


**Returns** `Promise`&lt;`boolean`&gt;

▸ openConfirm(title?: `string`,content?: `string`,callback?: (result: `boolean`) => `void`): `void`

#### Parameters:
- title: `string`, *Optional* 
- content: `string`, *Optional* 
- callback: (result: `boolean`) => `void`, *Optional* 


**Returns** `void`

▸ openConfirm(title?: `string`,content?: `string`,callback?: (result: `boolean`) => `void`): `Promise`&lt;`boolean`&gt; | `void`

#### Parameters:
- title: `string`, *Optional* 
- content: `string`, *Optional* 
- callback: (result: `boolean`) => `void`, *Optional* 


**Returns** `Promise`&lt;`boolean`&gt; | `void`


---
### openPrompt
▸ openPrompt(title?: `string`,content?: `string`,defVal?: `string`): `Promise`&lt;`string`&gt;

#### Parameters:
- title: `string`, *Optional* 
- content: `string`, *Optional* 
- defVal: `string`, *Optional* 


**Returns** `Promise`&lt;`string`&gt;

▸ openPrompt(title?: `string`,content?: `string`,defVal?: `string`,callback?: (result: `string`) => `void`): `void`

#### Parameters:
- title: `string`, *Optional* 
- content: `string`, *Optional* 
- defVal: `string`, *Optional* 
- callback: (result: `string`) => `void`, *Optional* 


**Returns** `void`

▸ openPrompt(title?: `string`,content?: `string`,defVal?: `string`,callback?: (result: `string`) => `void`): `Promise`&lt;`string`&gt; | `void`

#### Parameters:
- title: `string`, *Optional* 
- content: `string`, *Optional* 
- defVal: `string`, *Optional* 
- callback: (result: `string`) => `void`, *Optional* 


**Returns** `Promise`&lt;`string`&gt; | `void`


---
