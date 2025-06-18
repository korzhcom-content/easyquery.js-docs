---
title: FormatParser class
slug: api-reference-old/api-reference-6x/core-package/classes/formatparser-class
sidebar:
  order: 100
---

Represents a parser for format expressions in operators

## Index
### [Constructors](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/formatparser-class/#constructors-1)
- [constructor](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/formatparser-class/#constructor)

### [Public Methods](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/formatparser-class/#public-methods-1)
- [getToken](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/formatparser-class/#gettoken)
- [next](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/formatparser-class/#next)
- [parse](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/formatparser-class/#parse)
- [skipSpaces](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/formatparser-class/#skipspaces)
- [start](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/formatparser-class/#start)


## Constructors

---
#### constructor

⊕ new FormatParser(format: `string`): [FormatParser](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/formatparser-class)

#### Parameters:
- format: `string`


---

## Public Methods

---
### getToken
Returns current token

▸ getToken(): [FormatToken](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/formattoken-interface)


**Returns** [FormatToken](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/formattoken-interface)


---
### next
Scans the source and gets the next token

▸ next(): `boolean`


**Returns** `boolean`


---
### parse
Parses all source string passed in constructor and returns the list of tokens

▸ parse(): [FormatToken](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/formattoken-interface)[]


**Returns** [FormatToken](//easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/interfaces/formattoken-interface)[]


---
### skipSpaces
Skips all spcaes till the beginning of next token

▸ skipSpaces(): `void`


**Returns** `void`


---
### start
Starts parsing of the format string passed in the parameter

▸ start(format: `string`): `void`

#### Parameters:
- format: `string` - 



**Returns** `void`


---
