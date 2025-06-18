---
title: HtmlDataFilterView class
slug: >-
  api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class
sidebar:
  order: 100
---

## Extends
[DataFilterViewJQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#public-properties-1)
- [context](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#context)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#public-methods-1)
- [applyQueryFilter](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#applyqueryfilter)
- [getContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#init)

### [Protected Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#protected-methods-1)
- [createDefaultBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#createdefaultbroker)
- [createFilterBarWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#createfilterbarwidget)
- [createResultGridWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class/#createresultgridwidget)


## Constructors

---
#### constructor

⊕ new HtmlDataFilterView(): [HtmlDataFilterView](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/htmldatafilterview-class)


---

## Public Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)

---
## Public Methods

---
### applyQueryFilter
Executes the filter query and display results.

▸ applyQueryFilter(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - The options. In particular, `options.page` defines what page of data to query.



**Returns** `void`

---
### getContext
Returns the context.

▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class) - [[EqContext]] object.


---
### init
Initializes the view.

▸ init(options?: [EqViewOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/eqviewoptions-interface)): `void`

#### Parameters:
- options: [EqViewOptions](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/interfaces/eqviewoptions-interface), *Optional*  - The [[EqViewOptions]] object.



**Returns** `void`

---
## Protected Methods

---
### createDefaultBroker
▸ createDefaultBroker(context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)): [EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface)

---
### createFilterBarWidget
▸ createFilterBarWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement`


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

---
### createResultGridWidget
▸ createResultGridWidget(element: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- element: `HTMLElement`


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

---
