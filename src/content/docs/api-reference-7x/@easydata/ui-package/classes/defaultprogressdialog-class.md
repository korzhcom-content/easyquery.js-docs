---
title: DefaultProgressDialog class
slug: api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class
sidebar:
  order: 100
---

## Implements
[Dialog](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/dialog-interface), [PorgressDialog](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/porgressdialog-interface)

## Extends
[DefaultDialog](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultdialog-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#protected-properties-1)
- [alertElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#alertelement)
- [bodyElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#bodyelement)
- [contentElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#contentelement)
- [footerElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#footerelement)
- [headerElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#headerelement)
- [progressElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#progresselement)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#slot)
- [windowElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#windowelement)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#public-methods-1)
- [cancel](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#cancel)
- [clearAlert](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#clearalert)
- [close](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#close)
- [disableButtons](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#disablebuttons)
- [enableButtons](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#enablebuttons)
- [getRootElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#getrootelement)
- [open](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#open)
- [showAlert](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#showalert)
- [submit](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#submit)
- [updateContent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#updatecontent)
- [updateProgress](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#updateprogress)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#protected-methods-1)
- [destroy](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class/#destroy)


## Constructors

---
#### constructor

⊕ new DefaultProgressDialog(options: [ProgressDialogOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/progressdialogoptions-interface)): [DefaultProgressDialog](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultprogressdialog-class)

#### Parameters:
- options: [ProgressDialogOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/progressdialogoptions-interface)


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
