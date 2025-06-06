---
title: DefaultDialogService class
slug: api-reference-7x/@easydata/ui-package/classes/defaultdialogservice-class
sidebar:
  order: 100
---

## Implements
[DialogService](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/dialogservice-interface)

## Index
### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultdialogservice-class/#public-methods-1)
- [open](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultdialogservice-class/#open)
- [openConfirm](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultdialogservice-class/#openconfirm)
- [openProgress](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultdialogservice-class/#openprogress)
- [openPrompt](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultdialogservice-class/#openprompt)



## Public Methods

---
### open
▸ open(options: [DialogOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/dialogoptions-interface)): [DefaultDialog](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultdialog-class)

#### Parameters:
- options: [DialogOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/dialogoptions-interface)


**Returns** [DefaultDialog](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultdialog-class)


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
### openProgress
▸ openProgress(options: [ProgressDialogOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/progressdialogoptions-interface)): [DefaultProgressDialog](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class)

#### Parameters:
- options: [ProgressDialogOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/progressdialogoptions-interface)


**Returns** [DefaultProgressDialog](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class)


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


---
