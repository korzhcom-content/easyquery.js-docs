---
title: DomDropDownElementBuilder class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/domdropdownelementbuilder-class
sidebar:
  order: 100
---

## Extends
[DomElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#protected-properties-1)
- [_onGetMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#_ongetmenu)
- [_onItemSelected](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#_onitemselected)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#element)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#public-methods-1)
- [addChild](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#addchild)
- [addChildElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#addchildelement)
- [addClass](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#addclass)
- [addHtml](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#addhtml)
- [addText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#addtext)
- [appendTo](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#appendto)
- [attr](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#attr)
- [clear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#clear)
- [data](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#data)
- [hide](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#hide)
- [html](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#html)
- [id](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#id)
- [isVisible](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#isvisible)
- [off](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#off)
- [on](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#on)
- [onGetMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#ongetmenu)
- [onItemSelected](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#onitemselected)
- [removeClass](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#removeclass)
- [removeStyle](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#removestyle)
- [setStyle](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#setstyle)
- [show](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#show)
- [text](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#text)
- [title](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#title)
- [toDOM](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#todom)
- [toggleClass](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class/#toggleclass)


## Constructors

---
#### constructor

⊕ new DomDropDownElementBuilder(parent?: `HTMLElement`): [DomDropDownElementBuilder](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/domdropdownelementbuilder-class)

#### Parameters:
- parent: `HTMLElement`, *Optional* 


---

## Protected Properties

---
### _onGetMenu

● _onGetMenu: () => [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)

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

● _onGetMenu: () => [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)

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
▸ onGetMenu(onGetMenu: () => [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)): `this`

#### Parameters:
- onGetMenu: () => [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)


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
