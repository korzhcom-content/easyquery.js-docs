---
title: DefaultTimePicker class
slug: api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class
sidebar:
  order: 100
---

## Extends
[TimePicker](api-reference-7x/easydata-packages/ui-package/classes/timepicker-class)

## Index
### [Constructors](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#constructors-1)
- [constructor](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#constructor)

### [Protected Properties](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#protected-properties-1)
- [currentTime](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#currenttime)
- [hoursInput](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#hoursinput)
- [minutesInput](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#minutesinput)
- [options](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#options)
- [slot](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#slot)
- [timeText](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#timetext)

### [Protected Accessors](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#protected-accessors-1)
- [cssPrefix](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#cssprefix)

### [Public Methods](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#public-methods-1)
- [getTime](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#gettime)
- [render](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#render)
- [setTime](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#settime)

### [Protected Methods](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#protected-methods-1)
- [timeChanged](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#timechanged)
- [updateDisplayedTime](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class#updatedisplayedtime)


## Constructors

---
#### constructor

⊕ new DefaultTimePicker(slot: `HTMLElement`,options?: [TimePickerOptions](api-reference-7x/easydata-packages/ui-package/interfaces/timepickeroptions-interface)): [DefaultTimePicker](api-reference-7x/easydata-packages/ui-package/classes/defaulttimepicker-class)

#### Parameters:
- slot: `HTMLElement`
- options: [TimePickerOptions](api-reference-7x/easydata-packages/ui-package/interfaces/timepickeroptions-interface), *Optional* 


---

## Protected Properties

---
### currentTime

● currentTime: `Date`

---
### hoursInput

● hoursInput: `HTMLInputElement`

---
### minutesInput

● minutesInput: `HTMLInputElement`

---
### options

● options: [TimePickerOptions](api-reference-7x/easydata-packages/ui-package/interfaces/timepickeroptions-interface)

---
### slot

● slot: `HTMLElement`

---
### timeText

● timeText: `HTMLElement`

---
## Protected Accessors

---
### cssPrefix
⇄ get cssPrefix(): `string`


**Returns** `string`


---
## Public Methods

---
### getTime
▸ getTime(): `Date`


**Returns** `Date`


---
### render
▸ render(): `HTMLElement`


**Returns** `HTMLElement`


---
### setTime
▸ setTime(time: `Date`): `void`

#### Parameters:
- time: `Date`


**Returns** `void`


---
## Protected Methods

---
### timeChanged
▸ timeChanged(): `void`


**Returns** `void`


---
### updateDisplayedTime
▸ updateDisplayedTime(): `void`


**Returns** `void`


---
