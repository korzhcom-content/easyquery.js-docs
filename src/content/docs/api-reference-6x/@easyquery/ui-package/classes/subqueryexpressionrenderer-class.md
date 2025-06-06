---
title: SubQueryExpressionRenderer class
slug: >-
  api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class
sidebar:
  order: 100
---

## Extends
[ExpressionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/expressionrenderer-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#protected-properties-1)
- [colEntitiesList](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#colentitieslist)
- [colEntitiesMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#colentitiesmenu)
- [columnBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#columnblock)
- [columnElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#columnelement)
- [dialogBackground](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#dialogbackground)
- [dialogBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#dialogblock)
- [dialogBlockBody](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#dialogblockbody)
- [displayedTextElement](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#displayedtextelement)
- [element](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#element)
- [expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#expression)
- [panel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#panel)
- [queryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#querypanel)
- [queryPanelBlock](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#querypanelblock)
- [valueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#valueeditor)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#public-methods-1)
- [refresh](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#refresh)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#render)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#protected-methods-1)
- [appear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#appear)
- [disappear](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#disappear)
- [getAttributeText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#getattributetext)
- [getClassesToAdd](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#getclassestoadd)
- [getContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#getcontext)
- [getDisplayedElementText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#getdisplayedelementtext)
- [getEmptyText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#getemptytext)
- [getSubQuery](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#getsubquery)
- [getValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#getvalue)
- [isEditable](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#iseditable)
- [isEmptyValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#isemptyvalue)
- [renderDisplayedText](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#renderdisplayedtext)
- [renderEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#rendereditor)
- [setValue](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#setvalue)
- [showValidationError](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#showvalidationerror)
- [validateInput](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class/#validateinput)


## Constructors

---
#### constructor

⊕ new SubQueryExpressionRenderer(panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class),expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class),valueEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/valueeditor-class),slot?: `HTMLDivElement`): [SubQueryExpressionRenderer](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/subqueryexpressionrenderer-class)

#### Parameters:
- panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)
- expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)
- valueEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/valueeditor-class)
- slot: `HTMLDivElement`, *Optional* 


---

## Protected Properties

---
### colEntitiesList

● colEntitiesList: [Entity](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entity-class)[]

---
### colEntitiesMenu

● colEntitiesMenu: [PopupMenu](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/popupmenu-class)

---
### columnBlock

● columnBlock: `HTMLElement`

---
### columnElement

● columnElement: `HTMLElement`

---
### dialogBackground

● dialogBackground: `HTMLElement`

---
### dialogBlock

● dialogBlock: `HTMLElement`

---
### dialogBlockBody

● dialogBlockBody: `HTMLElement`

---
### displayedTextElement

● displayedTextElement: `HTMLElement`

---
### element

● element: `HTMLDivElement`

---
### expression

● expression: [Expression](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/expression-class)

---
### panel

● panel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)

---
### queryPanel

● queryPanel: [QueryPanel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/querypanel-class)

---
### queryPanelBlock

● queryPanelBlock: `HTMLElement`

---
### valueEditor

● valueEditor: [ValueEditor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/valueeditor-class)

---
## Public Methods

---
### refresh
▸ refresh(): `void`


**Returns** `void`

---
### render
▸ render(appeared?: `boolean`): `HTMLDivElement`

#### Parameters:
- appeared: `boolean`, *Default value* = `false`


**Returns** `HTMLDivElement`

---
## Protected Methods

---
### appear
▸ appear(): `void`


**Returns** `void`

---
### disappear
▸ disappear(): `void`


**Returns** `void`

---
### getAttributeText
▸ getAttributeText(attribute: [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)): `string`

#### Parameters:
- attribute: [EntityAttr](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/entityattr-class)


**Returns** `string`

---
### getClassesToAdd
▸ getClassesToAdd(): `string`


**Returns** `string`

---
### getContext
▸ getContext(): [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)


**Returns** [EqContext](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)

---
### getDisplayedElementText
▸ getDisplayedElementText(): `string`


**Returns** `string`

---
### getEmptyText
▸ getEmptyText(): `string`


**Returns** `string`

---
### getSubQuery
▸ getSubQuery(): [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)


**Returns** [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)

---
### getValue
▸ getValue(): `string`


**Returns** `string`

---
### isEditable
▸ isEditable(): `boolean`


**Returns** `boolean`

---
### isEmptyValue
▸ isEmptyValue(): `boolean`


**Returns** `boolean`

---
### renderDisplayedText
▸ renderDisplayedText(): `HTMLElement`


**Returns** `HTMLElement`

---
### renderEditor
▸ renderEditor(): `void`


**Returns** `void`

---
### setValue
▸ setValue(value: `string` | [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class),silent?: `boolean`): `void`

#### Parameters:
- value: `string` | [Query](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/query-class)
- silent: `boolean`, *Optional* 


**Returns** `void`

---
### showValidationError
▸ showValidationError(message: `string`,target?: `EventTarget`): `void`

#### Parameters:
- message: `string`
- target: `EventTarget`, *Optional* 


**Returns** `void`

---
### validateInput
▸ validateInput(value: `string`): [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)

#### Parameters:
- value: `string`


**Returns** [ValidationResult](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/validationresult-interface)

---
