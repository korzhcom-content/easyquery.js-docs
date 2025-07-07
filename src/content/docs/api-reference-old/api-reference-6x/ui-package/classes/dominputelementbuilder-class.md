---
title: DomInputElementBuilder class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class
sidebar:
  order: 100
---

## Extends
[DomElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/domelementbuilder-class)&lt;`HTMLInputElement`&gt;

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#protected-properties-1)
- [element](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#element)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#public-methods-1)
- [addChild](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#addchild)
- [addChildElement](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#addchildelement)
- [addClass](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#addclass)
- [addHtml](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#addhtml)
- [addText](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#addtext)
- [appendTo](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#appendto)
- [attr](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#attr)
- [clear](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#clear)
- [data](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#data)
- [hide](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#hide)
- [html](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#html)
- [id](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#id)
- [isVisible](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#isvisible)
- [name](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#name)
- [off](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#off)
- [on](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#on)
- [removeClass](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#removeclass)
- [removeStyle](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#removestyle)
- [setStyle](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#setstyle)
- [show](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#show)
- [size](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#size)
- [text](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#text)
- [title](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#title)
- [toDOM](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#todom)
- [toggleClass](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#toggleclass)
- [type](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#type)
- [value](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class#value)


## Constructors

---
#### constructor

⊕ new DomInputElementBuilder(element?: `HTMLInputElement`,parent?: `HTMLElement`): [DomInputElementBuilder](api-reference-old/api-reference-6x/ui-package/classes/dominputelementbuilder-class)

#### Parameters:
- element: `HTMLInputElement`, *Optional* 
- parent: `HTMLElement`, *Optional* 


---

## Protected Properties

---
### element

● element: `HTMLInputElement`

---
## Protected Accessors

---
### element

● element: `HTMLInputElement`

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
### name
▸ name(value: `string`): `this`

#### Parameters:
- value: `string`


**Returns** `this`


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
### size
▸ size(value: `number`): `this`

#### Parameters:
- value: `number`


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
▸ toDOM(): `HTMLInputElement`


**Returns** `HTMLInputElement`


---
### toggleClass
▸ toggleClass(className: `string`,force?: `boolean`): `this`

#### Parameters:
- className: `string`
- force: `boolean`, *Default value* = ` undefined`


**Returns** `this`


---
### type
▸ type(value: `string`): `this`

#### Parameters:
- value: `string`


**Returns** `this`


---
### value
▸ value(value: `string` | `number` | `Date`): `this`

#### Parameters:
- value: `string` | `number` | `Date`


**Returns** `this`


---
