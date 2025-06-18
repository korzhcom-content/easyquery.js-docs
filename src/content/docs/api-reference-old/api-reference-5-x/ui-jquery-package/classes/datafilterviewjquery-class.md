---
title: DataFilterViewJQuery class
slug: >-
  api-reference-old/api-reference-5-x/ui-jquery-package/classes/datafilterviewjquery-class
sidebar:
  order: 100
---

## Extends
[DataFilterView](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#constructor)

### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#public-properties-1)
- [context](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#context)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#public-methods-1)
- [applyQueryFilter](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#applyqueryfilter)
- [getContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#init)

### [Protected Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#protected-methods-1)
- [createDefaultBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#createdefaultbroker)
- [createFilterBarWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#createfilterbarwidget)
- [createResultGridWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class/#createresultgridwidget)


## Constructors

---
#### constructor

⊕ new DataFilterViewJQuery(): [DataFilterViewJQuery](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-jquery-package/classes/datafilterviewjquery-class)


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
Creates the widget that represents the result grid.

▸ createResultGridWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class) - the created [[Widget]] object.


---
