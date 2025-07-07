---
title: DateTimePicker class
slug: api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class
sidebar:
  order: 100
---

## Index
### [Constructors](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#constructors-1)
- [constructor](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#constructor)

### [Protected Properties](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#protected-properties-1)
- [calendar](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#calendar)
- [currentDateTime](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#currentdatetime)
- [options](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#options)
- [slot](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#slot)
- [timePicker](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#timepicker)

### [Protected Accessors](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#protected-accessors-1)
- [cssPrefix](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#cssprefix)

### [Public Methods](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#public-methods-1)
- [apply](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#apply)
- [cancel](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#cancel)
- [getDateTime](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#getdatetime)
- [setDateTime](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#setdatetime)
- [show](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#show)

### [Protected Methods](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#protected-methods-1)
- [createCalendar](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#createcalendar)
- [createTimePicker](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#createtimepicker)
- [dateTimeChanged](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#datetimechanged)
- [destroy](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#destroy)
- [render](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class#render)


## Constructors

---
#### constructor

⊕ new DateTimePicker(options?: [DateTimePickerOptions](api-reference-old/api-reference-6x/ui-package/interfaces/datetimepickeroptions-interface)): [DateTimePicker](api-reference-old/api-reference-6x/ui-package/classes/datetimepicker-class)

#### Parameters:
- options: [DateTimePickerOptions](api-reference-old/api-reference-6x/ui-package/interfaces/datetimepickeroptions-interface), *Optional* 


---

## Protected Properties

---
### calendar

● calendar: [Calendar](api-reference-old/api-reference-6x/ui-package/classes/calendar-class) | `null` = ` null`

---
### currentDateTime

● currentDateTime: `Date`

---
### options

● options: [DateTimePickerOptions](api-reference-old/api-reference-6x/ui-package/interfaces/datetimepickeroptions-interface)

---
### slot

● slot?: `HTMLElement`

---
### timePicker

● timePicker: [TimePicker](api-reference-old/api-reference-6x/ui-package/classes/timepicker-class) | `null` = ` null`

---
## Protected Accessors

---
### calendar

● calendar: [Calendar](api-reference-old/api-reference-6x/ui-package/classes/calendar-class) | `null` = ` null`

---
### currentDateTime

● currentDateTime: `Date`

---
### options

● options: [DateTimePickerOptions](api-reference-old/api-reference-6x/ui-package/interfaces/datetimepickeroptions-interface)

---
### slot

● slot?: `HTMLElement`

---
### timePicker

● timePicker: [TimePicker](api-reference-old/api-reference-6x/ui-package/classes/timepicker-class) | `null` = ` null`

---
## Public Methods

---
### apply
▸ apply(date: `Date`): `void`

#### Parameters:
- date: `Date`


**Returns** `void`


---
### cancel
▸ cancel(): `void`


**Returns** `void`


---
### getDateTime
▸ getDateTime(): `Date`


**Returns** `Date`


---
### setDateTime
▸ setDateTime(dateTime: `Date`): `void`

#### Parameters:
- dateTime: `Date`


**Returns** `void`


---
### show
▸ show(anchor?: `HTMLElement`): `void`

#### Parameters:
- anchor: `HTMLElement`, *Optional* 


**Returns** `void`


---
## Protected Methods

---
### createCalendar
▸ createCalendar(options: [CalendarOptions](api-reference-old/api-reference-6x/ui-package/interfaces/calendaroptions-interface)): [Calendar](api-reference-old/api-reference-6x/ui-package/classes/calendar-class)

#### Parameters:
- options: [CalendarOptions](api-reference-old/api-reference-6x/ui-package/interfaces/calendaroptions-interface)


**Returns** [Calendar](api-reference-old/api-reference-6x/ui-package/classes/calendar-class)


---
### createTimePicker
▸ createTimePicker(options: [TimePickerOptions](api-reference-old/api-reference-6x/ui-package/interfaces/timepickeroptions-interface)): [TimePicker](api-reference-old/api-reference-6x/ui-package/classes/timepicker-class)

#### Parameters:
- options: [TimePickerOptions](api-reference-old/api-reference-6x/ui-package/interfaces/timepickeroptions-interface)


**Returns** [TimePicker](api-reference-old/api-reference-6x/ui-package/classes/timepicker-class)


---
### dateTimeChanged
▸ dateTimeChanged(): `void`


**Returns** `void`


---
### destroy
▸ destroy(): `void`


**Returns** `void`


---
### render
▸ render(): `void`


**Returns** `void`


---
