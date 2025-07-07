---
title: DefaultProgressDialog class
slug: >-
  api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class
sidebar:
  order: 100
---

## Implements
[Dialog](api-reference-7x/easydata-packages/ui-package/interfaces/dialog-interface), [PorgressDialog](api-reference-7x/easydata-packages/ui-package/interfaces/porgressdialog-interface)

## Extends
[DefaultDialog](api-reference-7x/easydata-packages/ui-package/classes/defaultdialog-class)

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#constructor)

### [Protected Properties](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#protected-properties-1)
- [alertElement](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#alertelement)
- [bodyElement](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#bodyelement)
- [contentElement](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#contentelement)
- [footerElement](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#footerelement)
- [headerElement](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#headerelement)
- [progressElement](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#progresselement)
- [slot](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#slot)
- [windowElement](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#windowelement)

### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#public-methods-1)
- [cancel](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#cancel)
- [clearAlert](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#clearalert)
- [close](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#close)
- [disableButtons](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#disablebuttons)
- [enableButtons](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#enablebuttons)
- [getRootElement](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#getrootelement)
- [open](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#open)
- [showAlert](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#showalert)
- [submit](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#submit)
- [updateContent](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#updatecontent)
- [updateProgress](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#updateprogress)

### [Protected Methods](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#protected-methods-1)
- [destroy](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class#destroy)


## Constructors

---
#### constructor

⊕ new DefaultProgressDialog(options: [ProgressDialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/progressdialogoptions-interface)): [DefaultProgressDialog](api-reference-7x/easydata-packages/ui-package/classes/defaultprogressdialog-class)

#### Parameters:
- options: [ProgressDialogOptions](api-reference-7x/easydata-packages/ui-package/interfaces/progressdialogoptions-interface)


---

## Protected Properties

---
### alertElement

● alertElement: `HTMLElement`

---
### bodyElement

● bodyElement: `HTMLElement`

---
### contentElement

● contentElement: `HTMLElement`

---
### footerElement

● footerElement: `HTMLElement`

---
### headerElement

● headerElement: `HTMLElement`

---
### progressElement

● progressElement: `HTMLElement`

---
### slot

● slot: `HTMLElement`

---
### windowElement

● windowElement: `HTMLElement`

---
## Public Methods

---
### cancel
▸ cancel(): `void`


**Returns** `void`


---
### clearAlert
▸ clearAlert(): `void`


**Returns** `void`


---
### close
▸ close(): `void`


**Returns** `void`


---
### disableButtons
▸ disableButtons(): `void`


**Returns** `void`


---
### enableButtons
▸ enableButtons(): `void`


**Returns** `void`


---
### getRootElement
▸ getRootElement(): `HTMLElement`


**Returns** `HTMLElement`


---
### open
▸ open(): `void`


**Returns** `void`


---
### showAlert
▸ showAlert(text: `string`,reason?: `string`,replace?: `boolean`): `void`

#### Parameters:
- text: `string`
- reason: `string`, *Optional* 
- replace: `boolean`, *Optional* 


**Returns** `void`


---
### submit
▸ submit(): `void`


**Returns** `void`


---
### updateContent
▸ updateContent(content: `string`): `void`

#### Parameters:
- content: `string`


**Returns** `void`


---
### updateProgress
▸ updateProgress(progress: `number`): `void`

#### Parameters:
- progress: `number`


**Returns** `void`


---
## Protected Methods

---
### destroy
▸ destroy(): `void`


**Returns** `void`


---
