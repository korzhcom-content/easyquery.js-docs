---
title: DomElementBuilder class
slug: api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#constructor)

### [Protected Properties](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#protected-properties-1)
- [element](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#element)

### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#public-methods-1)
- [addChild](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#addchild)
- [addChildElement](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#addchildelement)
- [addClass](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#addclass)
- [addHtml](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#addhtml)
- [addText](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#addtext)
- [appendTo](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#appendto)
- [attr](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#attr)
- [clear](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#clear)
- [data](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#data)
- [hide](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#hide)
- [html](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#html)
- [id](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#id)
- [isVisible](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#isvisible)
- [off](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#off)
- [on](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#on)
- [removeClass](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#removeclass)
- [removeStyle](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#removestyle)
- [setStyle](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#setstyle)
- [show](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#show)
- [text](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#text)
- [title](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#title)
- [toDOM](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#todom)
- [toggleClass](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#toggleclass)
- [visible](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class#visible)


## Constructors

---
#### constructor

⊕ new DomElementBuilder(tag: `string` | `TElement`,parent?: `HTMLElement`): [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)

#### Parameters:
- tag: `string` | `TElement`
- parent: `HTMLElement`, *Optional* 


---

## Protected Properties

---
### element

● element: `TElement`

---
## Public Methods

---
### addChild
▸ addChild(tag: `"div"`,childBuilder?: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLDivElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"div"`
- childBuilder: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLDivElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"button"`,childBuilder?: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLButtonElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"button"`
- childBuilder: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLButtonElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"a"`,childBuilder?: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"a"`
- childBuilder: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"img"`,childBuilder?: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLImageElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"img"`
- childBuilder: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLImageElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"input"`,childBuilder?: (builder: [DomInputElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/dominputelementbuilder-class)) => `void`): `this`

#### Parameters:
- tag: `"input"`
- childBuilder: (builder: [DomInputElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/dominputelementbuilder-class)) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"select"`,childBuilder?: (builder: [DomSelectElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domselectelementbuilder-class)) => `void`): `this`

#### Parameters:
- tag: `"select"`
- childBuilder: (builder: [DomSelectElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domselectelementbuilder-class)) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `string`,childBuilder?: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `string`
- childBuilder: (builder: [DomElementBuilder](api-reference-7x/easydata-packages/ui-package/classes/domelementbuilder-class)&lt;`HTMLElement`&gt;) => `void`, *Optional* 


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
▸ toDOM(): `TElement`


**Returns** `TElement`


---
### toggleClass
▸ toggleClass(className: `string`,force?: `boolean`): `this`

#### Parameters:
- className: `string`
- force: `boolean`, *Default value* = ` undefined`


**Returns** `this`


---
### visible
▸ visible(isVisible?: `boolean`): `this`

#### Parameters:
- isVisible: `boolean`, *Default value* = `true`


**Returns** `this`


---
