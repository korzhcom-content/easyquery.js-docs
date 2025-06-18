---
title: DefaultCalendar class
slug: api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class
sidebar:
  order: 100
---

## Extends
[Calendar](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/calendar-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#protected-properties-1)
- [calendarBody](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#calendarbody)
- [currentDate](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#currentdate)
- [daysOfWeek](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#daysofweek)
- [headerTextElem](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#headertextelem)
- [manualInputElem](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#manualinputelem)
- [months](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#months)
- [options](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#options)
- [selectMonthElem](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#selectmonthelem)
- [selectYearElem](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#selectyearelem)
- [selectedMonth](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#selectedmonth)
- [selectedYear](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#selectedyear)
- [slot](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#slot)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#public-methods-1)
- [getDate](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#getdate)
- [render](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#render)
- [setDate](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#setdate)

### [Protected Methods](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#protected-methods-1)
- [dateChanged](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#datechanged)
- [jump](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#jump)
- [next](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#next)
- [prev](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#prev)
- [renderCalendarButtons](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#rendercalendarbuttons)
- [renderManualDateInput](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#rendermanualdateinput)
- [rerenderMonth](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#rerendermonth)
- [rerenderSelectYear](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#rerenderselectyear)
- [updateDisplayedDateValue](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class/#updatedisplayeddatevalue)


## Constructors

---
#### constructor

⊕ new DefaultCalendar(slot: `HTMLElement`,options?: [CalendarOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/calendaroptions-interface)): [DefaultCalendar](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/classes/defaultcalendar-class)

#### Parameters:
- slot: `HTMLElement`
- options: [CalendarOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/calendaroptions-interface), *Optional* 


---

## Protected Properties

---
### calendarBody

● calendarBody: `HTMLElement` | `null` = ` null`

---
### currentDate

● currentDate: `Date`

---
### daysOfWeek

● daysOfWeek: `string`[] = ` ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]`

---
### headerTextElem

● headerTextElem: `HTMLElement` | `null`

---
### manualInputElem

● manualInputElem: `HTMLInputElement` | `null`

---
### months

● months: `string`[] = ` ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]`

---
### options

● options: [CalendarOptions](//easyquery/javascript/docs/api-reference-7x/@easydata/ui-package/interfaces/calendaroptions-interface)

---
### selectMonthElem

● selectMonthElem: `HTMLSelectElement` | `null`

---
### selectYearElem

● selectYearElem: `HTMLSelectElement` | `null`

---
### selectedMonth

● selectedMonth: `number`

---
### selectedYear

● selectedYear: `number`

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
▸ render(): `void`


**Returns** `void`


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
### jump
▸ jump(year: `number`,month: `number`): `void`

#### Parameters:
- year: `number`
- month: `number`


**Returns** `void`


---
### next
▸ next(): `void`


**Returns** `void`


---
### prev
▸ prev(): `void`


**Returns** `void`


---
### renderCalendarButtons
▸ renderCalendarButtons(): `HTMLElement`


**Returns** `HTMLElement`


---
### renderManualDateInput
▸ renderManualDateInput(): `HTMLInputElement`


**Returns** `HTMLInputElement`


---
### rerenderMonth
▸ rerenderMonth(): `void`


**Returns** `void`


---
### rerenderSelectYear
▸ rerenderSelectYear(): `void`


**Returns** `void`


---
### updateDisplayedDateValue
▸ updateDisplayedDateValue(): `void`


**Returns** `void`


---
