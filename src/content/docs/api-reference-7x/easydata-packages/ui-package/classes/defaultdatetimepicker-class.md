---
title: DefaultDateTimePicker class
slug: >-
  api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class
sidebar:
  order: 100
---

## Extends
[DateTimePicker](api-reference-7x/easydata-packages/ui-package/classes/datetimepicker-class)

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#constructor)

### [Protected Properties](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#protected-properties-1)
- [calendar](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#calendar)
- [calendarSlot](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#calendarslot)
- [currentDateTime](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#currentdatetime)
- [nowButton](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#nowbutton)
- [options](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#options)
- [slot](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#slot)
- [submitButton](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#submitbutton)
- [timePicker](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#timepicker)
- [timePickerSlot](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#timepickerslot)

### [Protected Accessors](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#cssprefix)

### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#public-methods-1)
- [apply](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#apply)
- [cancel](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#cancel)
- [getDateTime](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#getdatetime)
- [setDateTime](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#setdatetime)
- [show](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#show)

### [Protected Methods](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#protected-methods-1)
- [createCalendar](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#createcalendar)
- [createTimePicker](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#createtimepicker)
- [dateTimeChanged](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#datetimechanged)
- [destroy](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#destroy)
- [render](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#render)
- [renderButtons](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class#renderbuttons)


## Constructors

---
#### constructor

⊕ new DefaultDateTimePicker(options?: [DateTimePickerOptions](api-reference-7x/easydata-packages/ui-package/interfaces/datetimepickeroptions-interface)): [DefaultDateTimePicker](api-reference-7x/easydata-packages/ui-package/classes/defaultdatetimepicker-class)

#### Parameters:
- options: [DateTimePickerOptions](api-reference-7x/easydata-packages/ui-package/interfaces/datetimepickeroptions-interface), *Optional* 


---

## Protected Properties

---
### calendar

● calendar: [Calendar](api-reference-7x/easydata-packages/ui-package/classes/calendar-class) | `null` = ` null`

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

● options: [DateTimePickerOptions](api-reference-7x/easydata-packages/ui-package/interfaces/datetimepickeroptions-interface)

---
### slot

● slot?: `HTMLElement`

---
### submitButton

● submitButton: `HTMLElement`

---
### timePicker

● timePicker: [TimePicker](api-reference-7x/easydata-packages/ui-package/classes/timepicker-class) | `null` = ` null`

---
### timePickerSlot

● timePickerSlot: `HTMLElement`

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


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
▸ createCalendar(options: [CalendarOptions](api-reference-7x/easydata-packages/ui-package/interfaces/calendaroptions-interface)): [DefaultCalendar](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class)

#### Parameters:
- options: [CalendarOptions](api-reference-7x/easydata-packages/ui-package/interfaces/calendaroptions-interface)


**Returns** [DefaultCalendar](api-reference-7x/easydata-packages/ui-package/classes/defaultcalendar-class)


---
### createTimePicker
▸ createTimePicker(options: [TimePickerOptions](api-reference-7x/easydata-packages/ui-package/interfaces/timepickeroptions-interface)): [DefaultTimePicker](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class)

#### Parameters:
- options: [TimePickerOptions](api-reference-7x/easydata-packages/ui-package/interfaces/timepickeroptions-interface)


**Returns** [DefaultTimePicker](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class)


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
