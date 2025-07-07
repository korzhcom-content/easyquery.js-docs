---
title: DomDropDownElementBuilder class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class
sidebar:
  order: 100
---

## Extends
[DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#protected-properties-1)
- [_onGetMenu](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#_ongetmenu)
- [_onItemSelected](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#_onitemselected)
- [element](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#element)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#public-methods-1)
- [addChild](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#addchild)
- [addChildElement](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#addchildelement)
- [addClass](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#addclass)
- [addHtml](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#addhtml)
- [addText](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#addtext)
- [appendTo](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#appendto)
- [attr](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#attr)
- [clear](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#clear)
- [data](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#data)
- [hide](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#hide)
- [html](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#html)
- [id](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#id)
- [isVisible](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#isvisible)
- [off](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#off)
- [on](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#on)
- [onGetMenu](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#ongetmenu)
- [onItemSelected](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#onitemselected)
- [removeClass](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#removeclass)
- [removeStyle](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#removestyle)
- [setStyle](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#setstyle)
- [show](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#show)
- [text](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#text)
- [title](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#title)
- [toDOM](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#todom)
- [toggleClass](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class#toggleclass)


## Constructors

---
#### constructor

⊕ new DomDropDownElementBuilder(parent?: `HTMLElement`): [DomDropDownElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class)

#### Parameters:
- parent: `HTMLElement`, *Optional* 


---

## Protected Properties

---
### _onGetMenu

● _onGetMenu: () => [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### _onItemSelected

● _onItemSelected: (id: `string`) => `void`

---
### element

● element: `HTMLAnchorElement`

---
## Protected Accessors

---
### _onGetMenu

● _onGetMenu: () => [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)

---
### _onItemSelected

● _onItemSelected: (id: `string`) => `void`

---
### element

● element: `HTMLAnchorElement`

---
## Public Methods

---
### addChild
▸ addChild(tag: `"div"`,childBuilder?: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLDivElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"div"`
- childBuilder: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLDivElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"button"`,childBuilder?: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLButtonElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"button"`
- childBuilder: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLButtonElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"a"`,childBuilder?: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"a"`
- childBuilder: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"img"`,childBuilder?: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLImageElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"img"`
- childBuilder: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLImageElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"input"`,childBuilder?: (builder: [DomInputElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class)) => `void`): `this`

#### Parameters:
- tag: `"input"`
- childBuilder: (builder: [DomInputElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class)) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"dropdown"`,childBuilder?: (builder: [DomDropDownElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class)) => `void`): `this`

#### Parameters:
- tag: `"dropdown"`
- childBuilder: (builder: [DomDropDownElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class)) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `string`,childBuilder?: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `string`
- childBuilder: (builder: [DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLElement`&gt;) => `void`, *Optional* 


**Returns** `this`


---
### addChildElement
▸ addChildElement(element: `HTMLElement`): `this`

#### Parameters:
- element: `HTMLElement`


**Returns** `this`


---
### addClass
▸ addClass(className: `string`,classNames: `string`[]): `this`

#### Parameters:
- className: `string`
- classNames: `string`[]


**Returns** `this`


---
### addHtml
▸ addHtml(html: `string`): `this`

#### Parameters:
- html: `string`


**Returns** `this`


---
### addText
▸ addText(text: `string`): `this`

#### Parameters:
- text: `string`


**Returns** `this`


---
### appendTo
▸ appendTo(parent: `HTMLElement`): `this`

#### Parameters:
- parent: `HTMLElement`


**Returns** `this`


---
### attr
▸ attr(attrId: `string`,attrValue: `string`): `this`

#### Parameters:
- attrId: `string`
- attrValue: `string`


**Returns** `this`


---
### clear
▸ clear(): `void`


**Returns** `void`


---
### data
▸ data(dataId: `string`,dataValue?: `string`): `this`

#### Parameters:
- dataId: `string`
- dataValue: `string`, *Default value* = ` null`


**Returns** `this`


---
### hide
▸ hide(toHide?: `boolean`): `this`

#### Parameters:
- toHide: `boolean`, *Default value* = `true`


**Returns** `this`


---
### html
▸ html(html: `string`): `this`

#### Parameters:
- html: `string`


**Returns** `this`


---
### id
▸ id(value: `string`): `this`

#### Parameters:
- value: `string`


**Returns** `this`


---
### isVisible
▸ isVisible(): `boolean`


**Returns** `boolean`


---
### off
▸ off(eventType: `string`,listener: (event: `Event`, options?: `boolean` | `AddEventListenerOptions`) => `any`): `this`

#### Parameters:
- eventType: `string`
- listener: (event: `Event`, options?: `boolean` | `AddEventListenerOptions`) => `any`


**Returns** `this`


---
### on
▸ on(eventType: `string`,listener: (event: `Event`, options?: `boolean` | `AddEventListenerOptions`) => `any`): `this`

#### Parameters:
- eventType: `string`
- listener: (event: `Event`, options?: `boolean` | `AddEventListenerOptions`) => `any`


**Returns** `this`


---
### onGetMenu
▸ onGetMenu(onGetMenu: () => [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)): `this`

#### Parameters:
- onGetMenu: () => [PopupMenu](api-reference-old/api-reference-6x/ui-package/classes/popupmenu-class)


**Returns** `this`


---
### onItemSelected
▸ onItemSelected(onItemSelected: (id: `string`) => `void`): `this`

#### Parameters:
- onItemSelected: (id: `string`) => `void`


**Returns** `this`


---
### removeClass
▸ removeClass(className: `string`,classNames: `string`[]): `this`

#### Parameters:
- className: `string`
- classNames: `string`[]


**Returns** `this`


---
### removeStyle
▸ removeStyle(styleId: `string`): `this`

#### Parameters:
- styleId: `string`


**Returns** `this`


---
### setStyle
▸ setStyle(styleId: `string`,styleValue: `string`): `this`

#### Parameters:
- styleId: `string`
- styleValue: `string`


**Returns** `this`


---
### show
▸ show(): `this`


**Returns** `this`


---
### text
▸ text(text: `string`): `this`

#### Parameters:
- text: `string`


**Returns** `this`


---
### title
▸ title(value: `string`): `this`

#### Parameters:
- value: `string`


**Returns** `this`


---
### toDOM
▸ toDOM(): `HTMLAnchorElement`


**Returns** `HTMLAnchorElement`


---
### toggleClass
▸ toggleClass(className: `string`,force?: `boolean`): `this`

#### Parameters:
- className: `string`
- force: `boolean`, *Default value* = ` undefined`


**Returns** `this`


---
