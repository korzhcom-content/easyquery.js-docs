---
title: DataFilterViewJQuery class
slug: >-
  api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class
sidebar:
  order: 100
---

## Extends
[DataFilterView](api-reference-old/api-reference-6x/ui-package/classes/datafilterview-class)

## Index
### [Public Properties](api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class#public-properties-1)
- [context](api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class#context)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class#public-methods-1)
- [applyQueryFilter](api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class#applyqueryfilter)
- [getContext](api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class#getcontext)
- [init](api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class#init)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class#protected-methods-1)
- [createFilterBarWidget](api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class#createfilterbarwidget)
- [createResultGridWidget](api-reference-old/api-reference-6x/ui-package/classes/datafilterviewjquery-class#createresultgridwidget)



## Public Properties

---
### context

● context: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class) = ` new EqContext()`

---
## Public Methods

---
### applyQueryFilter
Executes the filter query and display results.

▸ applyQueryFilter(options?: `any`): `void`

#### Parameters:
- options: `any`, *Optional*  - Th e options. In particular, `options.page` defines what page of data to query.



**Returns** `void`


---
### getContext
Returns the context.

▸ getContext(): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class) - [[EqContext]] object.



---
### init
Initializes the view.

▸ init(options?: [EqViewOptions](api-reference-old/api-reference-6x/ui-package/interfaces/eqviewoptions-interface)): `void`

#### Parameters:
- options: [EqViewOptions](api-reference-old/api-reference-6x/ui-package/interfaces/eqviewoptions-interface), *Optional*  - The [[EqViewOptions]] object.



**Returns** `void`


---
## Protected Methods

---
### createFilterBarWidget
Creates the widget that represents Filter Bar.

▸ createFilterBarWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class) - the created [[Widget]] object.



---
### createResultGridWidget
Creates the widget that represents the result grid.

▸ createResultGridWidget(placeholderElement: `HTMLElement`): [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class)

#### Parameters:
- placeholderElement: `HTMLElement` - The [[HTMLElement]] to place the created widget in.


**Returns** [Widget](api-reference-old/api-reference-6x/core-package/classes/widget-class) - the created [[Widget]] object.



---
