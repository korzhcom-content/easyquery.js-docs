---
title: Calendar class
slug: api-reference-7x/easydata-packages/ui-package/classes/calendar-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#constructor)

### [Protected Properties](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#protected-properties-1)
- [currentDate](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#currentdate)
- [options](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#options)
- [slot](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#slot)

### [Protected Accessors](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#cssprefix)

### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#public-methods-1)
- [getDate](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#getdate)
- [render](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#render)
- [setDate](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#setdate)

### [Protected Methods](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#protected-methods-1)
- [dateChanged](api-reference-7x/easydata-packages/ui-package/classes/calendar-class#datechanged)


## Constructors

---
#### constructor

⊕ new Calendar(slot: `HTMLElement`,options?: [CalendarOptions](api-reference-7x/easydata-packages/ui-package/interfaces/calendaroptions-interface)): [Calendar](api-reference-7x/easydata-packages/ui-package/classes/calendar-class)

#### Parameters:
- slot: `HTMLElement`
- options: [CalendarOptions](api-reference-7x/easydata-packages/ui-package/interfaces/calendaroptions-interface), *Optional* 


---

## Protected Properties

---
### currentDate

● currentDate: `Date`

---
### options

● options: [CalendarOptions](api-reference-7x/easydata-packages/ui-package/interfaces/calendaroptions-interface)

---
### slot

● slot: `HTMLElement`

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

---
### getDate
▸ getDate(): `Date`


**Returns** `Date`


---
### render
▸ render(): `any`


**Returns** `any`


---
### setDate
▸ setDate(date: `Date`): `void`

#### Parameters:
- date: `Date`


**Returns** `void`


---
## Protected Methods

---
### dateChanged
▸ dateChanged(apply?: `boolean`): `void`

#### Parameters:
- apply: `boolean`, *Optional* 


**Returns** `void`


---
