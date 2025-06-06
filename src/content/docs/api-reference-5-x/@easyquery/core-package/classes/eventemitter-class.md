---
title: EventEmitter class
slug: api-reference-5-x/@easyquery/core-package/classes/eventemitter-class
sidebar:
  order: 100
---

The representation of event emitter.

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#constructor)

### [Protected Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#protected-properties-1)
- [events](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#events)
- [source](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#source)

### [Public Methods](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#public-methods-1)
- [enterSilentMode](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#entersilentmode)
- [exitSilentMode](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#exitsilentmode)
- [fire](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#fire)
- [isSilent](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#issilent)
- [subscribe](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#subscribe)
- [unsubscribe](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class/#unsubscribe)


## Constructors

---
#### constructor

The default constructor.
⊕ new EventEmitter(source: `any`): [EventEmitter](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eventemitter-class)

#### Parameters:
- source: `any` - The source.



---

## Protected Properties

---
### events

The array of events.

● events: `EqEventTypeRec`[]

---
### source

The source.

● source: `any`

---
## Public Methods

---
### enterSilentMode
Enters to silent mode.

▸ enterSilentMode(): `void`


**Returns** `void`

---
### exitSilentMode
Exits from silent mode.

▸ exitSilentMode(): `void`


**Returns** `void`

---
### fire
Fires the event.

▸ fire(eventType: `string`,data?: `any`,postpone?: `number`,force?: `boolean`): `void`

#### Parameters:
- eventType: `string` - The event type.
- data: `any`, *Optional*  - The event data.
- postpone: `number`, *Default value* = `0` - The postpone.
- force: `boolean`, *Default value* = `false` - To fire force. If value is `true`, ignores silent mode.



**Returns** `void`

---
### isSilent
Checks if emitter is in silent mode.

▸ isSilent(): `boolean`


**Returns** `boolean` - `true`, if silent mode is enable.


---
### subscribe
Subscries to the event.

▸ subscribe(eventType: `string`,callback: (event: [EqEvent](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqevent-interface)) => `void`): `string`

#### Parameters:
- eventType: `string` - The event type.
- callback: (event: [EqEvent](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqevent-interface)) => `void` - The callback.


**Returns** `string` - The subscribtion ID.


---
### unsubscribe
Unsubsribes from the event.

▸ unsubscribe(eventType: `string`,callbackId: `string`): `void`

#### Parameters:
- eventType: `string` - The event type.
- callbackId: `string` - The subscribtion ID.



**Returns** `void`

---
