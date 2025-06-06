---
title: DomInputElementBuilder class
slug: api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class
sidebar:
  order: 100
---

## Extends
[DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLInputElement`&gt;

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#protected-properties-1)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#element)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#public-methods-1)
- [addChild](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#addchild)
- [addChildElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#addchildelement)
- [addClass](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#addclass)
- [addHtml](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#addhtml)
- [addText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#addtext)
- [appendTo](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#appendto)
- [attr](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#attr)
- [clear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#clear)
- [data](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#data)
- [hide](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#hide)
- [html](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#html)
- [id](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#id)
- [isVisible](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#isvisible)
- [name](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#name)
- [off](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#off)
- [on](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#on)
- [removeClass](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#removeclass)
- [removeStyle](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#removestyle)
- [setStyle](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#setstyle)
- [show](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#show)
- [size](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#size)
- [text](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#text)
- [title](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#title)
- [toDOM](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#todom)
- [toggleClass](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#toggleclass)
- [type](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#type)
- [value](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class/#value)


## Constructors

---
#### constructor

⊕ new DomInputElementBuilder(element?: `HTMLInputElement`,parent?: `HTMLElement`): [DomInputElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class)

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
▸ addChild(tag: `"div"`,childBuilder?: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLDivElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"div"`
- childBuilder: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLDivElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"button"`,childBuilder?: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLButtonElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"button"`
- childBuilder: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLButtonElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"a"`,childBuilder?: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"a"`
- childBuilder: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"img"`,childBuilder?: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLImageElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"img"`
- childBuilder: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLImageElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"input"`,childBuilder?: (builder: [DomInputElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class)) => `void`): `this`

#### Parameters:
- tag: `"input"`
- childBuilder: (builder: [DomInputElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/dominputelementbuilder-class)) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"dropdown"`,childBuilder?: (builder: [DomDropDownElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class)) => `void`): `this`

#### Parameters:
- tag: `"dropdown"`
- childBuilder: (builder: [DomDropDownElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class)) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `string`,childBuilder?: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `string`
- childBuilder: (builder: [DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLElement`&gt;) => `void`, *Optional* 


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
