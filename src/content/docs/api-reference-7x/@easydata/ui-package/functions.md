---
title: Functions
slug: api-reference-7x/@easydata/ui-package/functions
sidebar:
  order: 100
---

## Index
- [addCssClass](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#addcssclass)
- [addElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#addelement)
- [createBrowserEvent](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#createbrowserevent)
- [domel](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#domel)
- [getDocSize](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#getdocsize)
- [getElementAbsolutePos](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#getelementabsolutepos)
- [getScrollPos](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#getscrollpos)
- [getViewportSize](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#getviewportsize)
- [getWinSize](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#getwinsize)
- [hideElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#hideelement)
- [isVisible](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#isvisible)
- [mask](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#mask)
- [showElement](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#showelement)
- [slideDown](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#slidedown)
- [slideUp](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#slideup)
- [toggleVisibility](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#togglevisibility)
- [wrapInner](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/functions/#wrapinner)

#### addCssClass

Adds css class to the html element.

▸ addCssClass(element: `HTMLElement`,className: `string`): `void`

#### Parameters:
- element: `HTMLElement` - The element to add css class to.
- className: `string` - The name of the css class to be added.



**Returns** `void`



---
#### addElement

Creates ands adds a new [[HTMLElement]] to "parent"

▸ addElement(parent: `HTMLElement`,tag: `string`,options?: `any`): `HTMLElement`

#### Parameters:
- parent: `HTMLElement` - The element to add new element to.
- tag: `string` - Html tag of the new element.
- options: `any`, *Optional*  - The options. In particular, options.cssClass sets the new element class.


**Returns** `HTMLElement` - New element.




---
#### createBrowserEvent

▸ createBrowserEvent(eventName: `any`): `any`

#### Parameters:
- eventName: `any`


**Returns** `any`



---
#### domel

▸ domel(tag: `"div"` | `HTMLDivElement`,parent?: `HTMLElement`): [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLDivElement`&gt;

#### Parameters:
- tag: `"div"` | `HTMLDivElement`
- parent: `HTMLElement`, *Optional* 


**Returns** [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLDivElement`&gt;

▸ domel(tag: `"span"` | `HTMLSpanElement`,parent?: `HTMLElement`): [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLSpanElement`&gt;

#### Parameters:
- tag: `"span"` | `HTMLSpanElement`
- parent: `HTMLElement`, *Optional* 


**Returns** [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLSpanElement`&gt;

▸ domel(tag: `"a"` | `HTMLAnchorElement`,parent?: `HTMLElement`): [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;

#### Parameters:
- tag: `"a"` | `HTMLAnchorElement`
- parent: `HTMLElement`, *Optional* 


**Returns** [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLAnchorElement`&gt;

▸ domel(tag: `"button"` | `HTMLButtonElement`,parent?: `HTMLElement`): [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLButtonElement`&gt;

#### Parameters:
- tag: `"button"` | `HTMLButtonElement`
- parent: `HTMLElement`, *Optional* 


**Returns** [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLButtonElement`&gt;

▸ domel(tag: `"img"` | `HTMLImageElement`,parent?: `HTMLElement`): [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLImageElement`&gt;

#### Parameters:
- tag: `"img"` | `HTMLImageElement`
- parent: `HTMLElement`, *Optional* 


**Returns** [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLImageElement`&gt;

▸ domel(tag: `"input"` | `HTMLInputElement`,parent?: `HTMLElement`): [DomInputElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/dominputelementbuilder-class)

#### Parameters:
- tag: `"input"` | `HTMLInputElement`
- parent: `HTMLElement`, *Optional* 


**Returns** [DomInputElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/dominputelementbuilder-class)

▸ domel(tag: `"select"` | `HTMLInputElement`,parent?: `HTMLElement`): [DomSelectElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domselectelementbuilder-class)

#### Parameters:
- tag: `"select"` | `HTMLInputElement`
- parent: `HTMLElement`, *Optional* 


**Returns** [DomSelectElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domselectelementbuilder-class)

▸ domel(tag: `string`,parent?: `HTMLElement`): [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLElement`&gt;

#### Parameters:
- tag: `string`
- parent: `HTMLElement`, *Optional* 


**Returns** [DomElementBuilder](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/domelementbuilder-class)&lt;`HTMLElement`&gt;



---
#### getDocSize

▸ getDocSize(): `any`


**Returns** `any`



---
#### getElementAbsolutePos

▸ getElementAbsolutePos(element: `HTMLElement`): `any`

#### Parameters:
- element: `HTMLElement`


**Returns** `any`



---
#### getScrollPos

▸ getScrollPos(): `any`


**Returns** `any`



---
#### getViewportSize

▸ getViewportSize(): `any`


**Returns** `any`



---
#### getWinSize

▸ getWinSize(): `any`


**Returns** `any`



---
#### hideElement

Hides the html element.

▸ hideElement(element: `HTMLElement`): `void`

#### Parameters:
- element: `HTMLElement` - The element to be hidden.



**Returns** `void`



---
#### isVisible

Checks if element is visible

▸ isVisible(element: `HTMLElement`): `boolean`

#### Parameters:
- element: `HTMLElement` - The element to check.


**Returns** `boolean` - `true` if visible, otherwise - `false`.




---
#### mask

▸ mask(input: `HTMLInputElement`,maskPattern: `string`): `void`

#### Parameters:
- input: `HTMLInputElement`
- maskPattern: `string`


**Returns** `void`



---
#### showElement

Shows the html element.

▸ showElement(element: `HTMLElement`,display?: `string`): `void`

#### Parameters:
- element: `HTMLElement` - The element to be shown.
- display: `string`, *Optional*  - The value of "display" style to be set. Default value is "block".



**Returns** `void`



---
#### slideDown

▸ slideDown(target: `HTMLElement`,duration: `number`,callback?: () => `void`): `void`

#### Parameters:
- target: `HTMLElement`
- duration: `number`
- callback: () => `void`, *Optional* 


**Returns** `void`



---
#### slideUp

▸ slideUp(target: `HTMLElement`,duration: `number`,callback?: () => `void`): `void`

#### Parameters:
- target: `HTMLElement`
- duration: `number`
- callback: () => `void`, *Optional* 


**Returns** `void`



---
#### toggleVisibility

Hides the "first" element and shows the "second".

▸ toggleVisibility(first: `HTMLElement`,second: `HTMLElement`,options: `any`): `void`

#### Parameters:
- first: `HTMLElement` - The element to be hidden.
- second: `HTMLElement` - The element to be shown.
- options: `any` - The options. The following options are applied:
- display - the value of "display" style to be set. Default value is "block"
- duration - the duration of fading in and out
- complete - the callback to be called when toggle is complete



**Returns** `void`



---
#### wrapInner

Wraps all the elements inside "parent" by "wrapper" element

▸ wrapInner(parent: `HTMLElement`,wrapper: `HTMLElement`): `void`

#### Parameters:
- parent: `HTMLElement` - The element to add wrapper to.
- wrapper: `HTMLElement` - The element that will wrap child elements.



**Returns** `void`



---
