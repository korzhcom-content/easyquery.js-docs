---
title: Functions
slug: api-reference-old/api-reference-5-x/ui-package/functions
sidebar:
  order: 100
---

## Index
- [addCssClass](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/functions/#addcssclass)
- [addElement](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/functions/#addelement)
- [convertOldOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/functions/#convertoldoptions)
- [hideElement](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/functions/#hideelement)
- [isVisible](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/functions/#isvisible)
- [renderPageNavigator](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/functions/#renderpagenavigator)
- [showElement](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/functions/#showelement)
- [toggleVisibility](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/functions/#togglevisibility)
- [wrapInner](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/functions/#wrapinner)

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
#### convertOldOptions

Converts options from old 4.x format to [[EqViewOptions]]

▸ convertOldOptions(defaultOptions: [EqViewOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/eqviewoptions-interface)): [EqViewOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/eqviewoptions-interface)

#### Parameters:
- defaultOptions: [EqViewOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/eqviewoptions-interface) - The default [[EqViewOptions]] object to be extended by old options.

**Returns** [EqViewOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/eqviewoptions-interface) - Converted [[EqViewOptions]] object.



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
#### renderPageNavigator

Creates the paging navigation element.

▸ renderPageNavigator(options: [EqPagingOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface)): `HTMLElement`

#### Parameters:
- options: [EqPagingOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqpagingoptions-interface) - The [[EqPagingOptions]] object.

**Returns** `HTMLElement` - Created [[HTMLElement]].



---
#### showElement

Shows the html element.

▸ showElement(element: `HTMLElement`,display?: `string`): `void`

#### Parameters:
- element: `HTMLElement` - The element to be shown.
- display: `string`, *Optional*  - The value of "display" style to be set. Default value is "block".


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
