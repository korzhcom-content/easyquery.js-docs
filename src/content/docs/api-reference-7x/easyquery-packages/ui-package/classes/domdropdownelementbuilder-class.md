---
title: DomDropDownElementBuilder class
slug: >-
  api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class
sidebar:
  order: 100
---

## Extends
`DomElementBuilder`&lt;`HTMLAnchorElement`&gt;

## Index
### [Constructors](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#constructors-1)
- [constructor](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#constructor)

### [Protected Properties](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#protected-properties-1)
- [_onGetMenu](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#_ongetmenu)
- [_onItemSelected](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#_onitemselected)
- [element](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#element)

### [Public Methods](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#public-methods-1)
- [addChild](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#addchild)
- [addChildElement](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#addchildelement)
- [addClass](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#addclass)
- [addHtml](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#addhtml)
- [addText](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#addtext)
- [appendTo](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#appendto)
- [attr](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#attr)
- [clear](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#clear)
- [data](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#data)
- [hide](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#hide)
- [html](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#html)
- [id](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#id)
- [isVisible](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#isvisible)
- [off](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#off)
- [on](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#on)
- [onGetMenu](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#ongetmenu)
- [onItemSelected](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#onitemselected)
- [removeClass](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#removeclass)
- [removeStyle](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#removestyle)
- [setStyle](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#setstyle)
- [show](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#show)
- [text](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#text)
- [title](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#title)
- [toDOM](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#todom)
- [toggleClass](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#toggleclass)
- [visible](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class#visible)


## Constructors

---
#### constructor

⊕ new DomDropDownElementBuilder(parent?: `HTMLElement`): [DomDropDownElementBuilder](api-reference-7x/easyquery-packages/ui-package/classes/domdropdownelementbuilder-class)

#### Parameters:
- parent: `HTMLElement`, *Optional* 


---

## Protected Properties

---
### _onGetMenu

● _onGetMenu: () => [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)

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
▸ addChild(tag: `"div"`,childBuilder?: (builder: `DomElementBuilder`&lt;`HTMLDivElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"div"`
- childBuilder: (builder: `DomElementBuilder`&lt;`HTMLDivElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"button"`,childBuilder?: (builder: `DomElementBuilder`&lt;`HTMLButtonElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"button"`
- childBuilder: (builder: `DomElementBuilder`&lt;`HTMLButtonElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"a"`,childBuilder?: (builder: `DomElementBuilder`&lt;`HTMLAnchorElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"a"`
- childBuilder: (builder: `DomElementBuilder`&lt;`HTMLAnchorElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"img"`,childBuilder?: (builder: `DomElementBuilder`&lt;`HTMLImageElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `"img"`
- childBuilder: (builder: `DomElementBuilder`&lt;`HTMLImageElement`&gt;) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"input"`,childBuilder?: (builder: `DomInputElementBuilder`) => `void`): `this`

#### Parameters:
- tag: `"input"`
- childBuilder: (builder: `DomInputElementBuilder`) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `"select"`,childBuilder?: (builder: `DomSelectElementBuilder`) => `void`): `this`

#### Parameters:
- tag: `"select"`
- childBuilder: (builder: `DomSelectElementBuilder`) => `void`, *Optional* 


**Returns** `this`

▸ addChild(tag: `string`,childBuilder?: (builder: `DomElementBuilder`&lt;`HTMLElement`&gt;) => `void`): `this`

#### Parameters:
- tag: `string`
- childBuilder: (builder: `DomElementBuilder`&lt;`HTMLElement`&gt;) => `void`, *Optional* 


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
- dataValue: `string`, *Optional* 


**Returns** `this`


---
### hide
▸ hide(toHide?: `boolean`): `this`

#### Parameters:
- toHide: `boolean`, *Optional* 


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
▸ onGetMenu(onGetMenu: () => [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)): `this`

#### Parameters:
- onGetMenu: () => [PopupMenu](api-reference-7x/easyquery-packages/ui-package/classes/popupmenu-class)


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
- force: `boolean`, *Optional* 


**Returns** `this`


---
### visible
▸ visible(isVisible?: `boolean`): `this`

#### Parameters:
- isVisible: `boolean`, *Optional* 


**Returns** `this`


---
