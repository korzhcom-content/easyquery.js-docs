---
title: DialogService interface
slug: >-
  api-reference-7x/easydata-packages/ui-package/interfaces/dialogservice-interface
sidebar:
  order: 100
---

## Index
### [Methods](api-reference-7x/easydata-packages/ui-package/interfaces/dialogservice-interface#methods-1)
- [open](api-reference-7x/easydata-packages/ui-package/interfaces/dialogservice-interface#open)
- [openConfirm](api-reference-7x/easydata-packages/ui-package/interfaces/dialogservice-interface#openconfirm)
- [openProgress](api-reference-7x/easydata-packages/ui-package/interfaces/dialogservice-interface#openprogress)
- [openPrompt](api-reference-7x/easydata-packages/ui-package/interfaces/dialogservice-interface#openprompt)



## Methods

---
### open
▸ open(options: [DialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/dialogoptions-interface)): [Dialog](api-reference-7x/easydata-packages/ui-package/interfaces/dialog-interface)

#### Parameters:
- options: [DialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/dialogoptions-interface)


**Returns** [Dialog](api-reference-7x/easydata-packages/ui-package/interfaces/dialog-interface)


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
### openProgress
▸ openProgress(options: [ProgressDialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/progressdialogoptions-interface)): [PorgressDialog](api-reference-7x/easydata-packages/ui-package/interfaces/porgressdialog-interface)

#### Parameters:
- options: [ProgressDialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/progressdialogoptions-interface)


**Returns** [PorgressDialog](api-reference-7x/easydata-packages/ui-package/interfaces/porgressdialog-interface)


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
