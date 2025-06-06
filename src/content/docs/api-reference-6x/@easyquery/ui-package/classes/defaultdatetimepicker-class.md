---
title: DefaultDateTimePicker class
slug: api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class
sidebar:
  order: 100
---

## Extends
[DateTimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/datetimepicker-class)

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#protected-properties-1)
- [calendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#calendar)
- [calendarSlot](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#calendarslot)
- [currentDateTime](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#currentdatetime)
- [nowButton](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#nowbutton)
- [options](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#options)
- [slot](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#slot)
- [submitButton](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#submitbutton)
- [timePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#timepicker)
- [timePickerSlot](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#timepickerslot)

### [Protected Accessors](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#protected-accessors-1)
- [cssPrefix](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#cssprefix)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#public-methods-1)
- [apply](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#apply)
- [cancel](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#cancel)
- [getDateTime](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#getdatetime)
- [setDateTime](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#setdatetime)
- [show](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#show)

### [Protected Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#protected-methods-1)
- [createCalendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#createcalendar)
- [createTimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#createtimepicker)
- [dateTimeChanged](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#datetimechanged)
- [destroy](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#destroy)
- [render](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#render)
- [renderButtons](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class/#renderbuttons)


## Constructors

---
#### constructor

⊕ new DefaultDateTimePicker(options?: [DateTimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/datetimepickeroptions-interface)): [DefaultDateTimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultdatetimepicker-class)

#### Parameters:
- options: [DateTimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/datetimepickeroptions-interface), *Optional* 


---

## Protected Properties

---
### calendar

● calendar: [Calendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/calendar-class) | `null` = ` null`

---
### calendarSlot

● calendarSlot: `HTMLElement`

---
### currentDateTime

● currentDateTime: `Date`

---
### nowButton

● nowButton: `HTMLElement`

---
### options

● options: [DateTimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/datetimepickeroptions-interface)

---
### slot

● slot?: `HTMLElement`

---
### submitButton

● submitButton: `HTMLElement`

---
### timePicker

● timePicker: [TimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/timepicker-class) | `null` = ` null`

---
### timePickerSlot

● timePickerSlot: `HTMLElement`

---
## Protected Accessors

---
### calendar

● calendar: [Calendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/calendar-class) | `null` = ` null`

---
### calendarSlot

● calendarSlot: `HTMLElement`

---
### currentDateTime

● currentDateTime: `Date`

---
### nowButton

● nowButton: `HTMLElement`

---
### options

● options: [DateTimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/datetimepickeroptions-interface)

---
### slot

● slot?: `HTMLElement`

---
### submitButton

● submitButton: `HTMLElement`

---
### timePicker

● timePicker: [TimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/timepicker-class) | `null` = ` null`

---
### timePickerSlot

● timePickerSlot: `HTMLElement`

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
▸ show(achor?: `HTMLElement`): `void`

#### Parameters:
- achor: `HTMLElement`, *Optional* 


**Returns** `void`


---
## Protected Methods

---
### createCalendar
▸ createCalendar(options: [CalendarOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/calendaroptions-interface)): [DefaultCalendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultcalendar-class)

#### Parameters:
- options: [CalendarOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/calendaroptions-interface)


**Returns** [DefaultCalendar](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaultcalendar-class)


---
### createTimePicker
▸ createTimePicker(options: [TimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/timepickeroptions-interface)): [DefaultTimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaulttimepicker-class)

#### Parameters:
- options: [TimePickerOptions](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/interfaces/timepickeroptions-interface)


**Returns** [DefaultTimePicker](//easyquery/javascript/docs/api-reference-6x/@easyquery/ui-package/classes/defaulttimepicker-class)


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
### renderButtons
▸ renderButtons(): `void`


**Returns** `void`


---
