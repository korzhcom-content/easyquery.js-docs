---
title: DateTimePicker class
slug: api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class
sidebar:
  order: 100
---

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#protected-properties-1)
- [calendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#calendar)
- [currentDateTime](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#currentdatetime)
- [options](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#options)
- [slot](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#slot)
- [timePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#timepicker)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#public-methods-1)
- [apply](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#apply)
- [cancel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#cancel)
- [getDateTime](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#getdatetime)
- [setDateTime](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#setdatetime)
- [show](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#show)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#protected-methods-1)
- [createCalendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#createcalendar)
- [createTimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#createtimepicker)
- [dateTimeChanged](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#datetimechanged)
- [destroy](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#destroy)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class/#render)


## Constructors

---
#### constructor

⊕ new DateTimePicker(options?: [DateTimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/datetimepickeroptions-interface)): [DateTimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class)

#### Parameters:
- options: [DateTimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/datetimepickeroptions-interface), *Optional* 


---

## Protected Properties

---
### calendar

● calendar: [Calendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/calendar-class) | `null` = ` null`

---
### currentDateTime

● currentDateTime: `Date`

---
### options

● options: [DateTimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/datetimepickeroptions-interface)

---
### slot

● slot?: `HTMLElement`

---
### timePicker

● timePicker: [TimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/timepicker-class) | `null` = ` null`

---
## Protected Accessors

---
### calendar

● calendar: [Calendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/calendar-class) | `null` = ` null`

---
### currentDateTime

● currentDateTime: `Date`

---
### options

● options: [DateTimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/datetimepickeroptions-interface)

---
### slot

● slot?: `HTMLElement`

---
### timePicker

● timePicker: [TimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/timepicker-class) | `null` = ` null`

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
▸ createCalendar(options: [CalendarOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/calendaroptions-interface)): [Calendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/calendar-class)

#### Parameters:
- options: [CalendarOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/calendaroptions-interface)


**Returns** [Calendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/calendar-class)


---
### createTimePicker
▸ createTimePicker(options: [TimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/timepickeroptions-interface)): [TimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/timepicker-class)

#### Parameters:
- options: [TimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/timepickeroptions-interface)


**Returns** [TimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/timepicker-class)


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
