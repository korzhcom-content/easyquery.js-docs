---
title: DefaultDialogService class
slug: >-
  api-reference-7x/easydata-packages/ui-package/classes/defaultdialogservice-class
sidebar:
  order: 100
---

## Implements
[DialogService](api-reference-7x/easydata-packages/ui-package/interfaces/dialogservice-interface)

## Index
### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/defaultdialogservice-class#public-methods-1)
- [open](api-reference-7x/easydata-packages/ui-package/classes/defaultdialogservice-class#open)
- [openConfirm](api-reference-7x/easydata-packages/ui-package/classes/defaultdialogservice-class#openconfirm)
- [openProgress](api-reference-7x/easydata-packages/ui-package/classes/defaultdialogservice-class#openprogress)
- [openPrompt](api-reference-7x/easydata-packages/ui-package/classes/defaultdialogservice-class#openprompt)



## Public Methods

---
### open
▸ open(options: [DialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/dialogoptions-interface)): [DefaultDialog](api-reference-7x/easydata-packages/ui-package/classes/defaultdialog-class)

#### Parameters:
- options: [DialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/dialogoptions-interface)


**Returns** [DefaultDialog](api-reference-7x/easydata-packages/ui-package/classes/defaultdialog-class)


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
▸ openProgress(options: [ProgressDialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/progressdialogoptions-interface)): [DefaultProgressDialog](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class)

#### Parameters:
- options: [ProgressDialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/progressdialogoptions-interface)


**Returns** [DefaultProgressDialog](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class)


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
