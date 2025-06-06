---
title: DefaultDialogService class
slug: api-reference-6x/@easyquery/ui-package/classes/defaultdialogservice-class
sidebar:
  order: 100
---

## Implements
[DialogService](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/dialogservice-interface)

## Index
### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdialogservice-class/#public-methods-1)
- [openConfirm](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdialogservice-class/#openconfirm)
- [openPrompt](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdialogservice-class/#openprompt)



## Public Methods

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


---
### openPrompt
▸ openPrompt(title?: `string`,content?: `string`,defValue?: `string`): `Promise`&lt;`string`&gt;

#### Parameters:
- title: `string`, *Optional* 
- content: `string`, *Optional* 
- defValue: `string`, *Optional* 


**Returns** `Promise`&lt;`string`&gt;

▸ openPrompt(title?: `string`,content?: `string`,defValue?: `string`,callback?: (result: `string`) => `void`): `void`

#### Parameters:
- title: `string`, *Optional* 
- content: `string`, *Optional* 
- defValue: `string`, *Optional* 
- callback: (result: `string`) => `void`, *Optional* 


**Returns** `void`


---
