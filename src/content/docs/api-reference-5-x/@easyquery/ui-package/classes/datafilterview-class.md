---
title: DataFilterView class
slug: api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class
sidebar:
  order: 100
---

The EasyQuery client-side view that represents the UI for data filtering page

## Index
### [Public Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#public-properties-1)
- [context](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#context)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#public-methods-1)
- [applyQueryFilter](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#applyqueryfilter)
- [getContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#getcontext)
- [init](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#init)

### [Protected Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#protected-methods-1)
- [createDefaultBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#createdefaultbroker)
- [createFilterBarWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#createfilterbarwidget)
- [createResultGridWidget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/ui-package/classes/datafilterview-class/#createresultgridwidget)



## Public Properties

---
### context

● context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class) = ` new EqContext()`

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
Creates the default broker for the view.

▸ createDefaultBroker(context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)): [EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface)

#### Parameters:
- context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class) - The [[EqContext]] object.


**Returns** [EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface) - the created [[EqBroker]] object.


---
### createFilterBarWidget
Creates the widget that represents Filter Bar.

▸ createFilterBarWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class) - the created [[Widget]] object.


---
### createResultGridWidget
Creates the widget that represents the result grid.

▸ createResultGridWidget(placeholderElement: `HTMLElement`): [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/widget-class) - the created [[Widget]] object.


---
