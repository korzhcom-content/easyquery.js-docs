---
title: HtmlDataFilterView class
slug: >-
  api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class
sidebar:
  order: 100
---

## Extends
[DataFilterViewJQuery](api-reference-old/api-reference-5-x/ui-jquery-package/classes/datafilterviewjquery-class)

## Index
### [Constructors](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#constructor)

### [Public Properties](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#public-properties-1)
- [context](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#context)

### [Public Methods](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#public-methods-1)
- [applyQueryFilter](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#applyqueryfilter)
- [getContext](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#getcontext)
- [init](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#init)

### [Protected Methods](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#protected-methods-1)
- [createDefaultBroker](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#createdefaultbroker)
- [createFilterBarWidget](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#createfilterbarwidget)
- [createResultGridWidget](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class#createresultgridwidget)


## Constructors

---
#### constructor

⊕ new HtmlDataFilterView(): [HtmlDataFilterView](api-reference-old/api-reference-5-x/ui-jquery-package/classes/htmldatafilterview-class)


---

## Public Properties

---
### context

● context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)

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

▸ getContext(): [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class) - [[EqContext]] object.


---
### init
Initializes the view.

▸ init(options?: [EqViewOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/eqviewoptions-interface)): `void`

#### Parameters:
- options: [EqViewOptions](api-reference-old/api-reference-5-x/ui-package/interfaces/eqviewoptions-interface), *Optional*  - The [[EqViewOptions]] object.



**Returns** `void`

---
## Protected Methods

---
### createDefaultBroker
▸ createDefaultBroker(context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)): [EqBroker](api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface)

#### Parameters:
- context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)


**Returns** [EqBroker](api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface)

---
### createFilterBarWidget
▸ createFilterBarWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement`


**Returns** [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

---
### createResultGridWidget
▸ createResultGridWidget(element: `HTMLElement`): [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

#### Parameters:
- element: `HTMLElement`


**Returns** [Widget](api-reference-old/api-reference-5-x/core-package/classes/widget-class)

---
