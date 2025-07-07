---
title: DefaultCalendar class
slug: api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class
sidebar:
  order: 100
---

## Extends
[Calendar](api-reference-7x/easydata-packages/ui-package/classes/calendar-class)

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#constructor)

### [Protected Properties](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#protected-properties-1)
- [calendarBody](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#calendarbody)
- [currentDate](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#currentdate)
- [daysOfWeek](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#daysofweek)
- [headerTextElem](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#headertextelem)
- [manualInputElem](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#manualinputelem)
- [months](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#months)
- [options](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#options)
- [selectMonthElem](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#selectmonthelem)
- [selectYearElem](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#selectyearelem)
- [selectedMonth](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#selectedmonth)
- [selectedYear](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#selectedyear)
- [slot](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#slot)

### [Protected Accessors](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#cssprefix)

### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#public-methods-1)
- [getDate](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#getdate)
- [render](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#render)
- [setDate](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#setdate)

### [Protected Methods](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#protected-methods-1)
- [dateChanged](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#datechanged)
- [jump](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#jump)
- [next](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#next)
- [prev](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#prev)
- [renderCalendarButtons](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#rendercalendarbuttons)
- [renderManualDateInput](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#rendermanualdateinput)
- [rerenderMonth](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#rerendermonth)
- [rerenderSelectYear](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#rerenderselectyear)
- [updateDisplayedDateValue](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class#updatedisplayeddatevalue)


## Constructors

---
#### constructor

⊕ new DefaultCalendar(slot: `HTMLElement`,options?: [CalendarOptions](api-reference-7x/easydata-packages/ui-package/interfaces/calendaroptions-interface)): [DefaultCalendar](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class)

#### Parameters:
- slot: `HTMLElement`
- options: [CalendarOptions](api-reference-7x/easydata-packages/ui-package/interfaces/calendaroptions-interface), *Optional* 


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

● options: [CalendarOptions](api-reference-7x/easydata-packages/ui-package/interfaces/calendaroptions-interface)

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
