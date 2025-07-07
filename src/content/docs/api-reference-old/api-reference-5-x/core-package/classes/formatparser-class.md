---
title: FormatParser class
slug: api-reference-old/api-reference-5-x/core-package/classes/formatparser-class
sidebar:
  order: 100
---

Represents a parser for format expressions in operators

## Index
### [Constructors](api-reference-old/api-reference-5-x/core-package/classes/formatparser-class#constructors-1)
- [constructor](api-reference-old/api-reference-5-x/core-package/classes/formatparser-class#constructor)

### [Public Methods](api-reference-old/api-reference-5-x/core-package/classes/formatparser-class#public-methods-1)
- [getToken](api-reference-old/api-reference-5-x/core-package/classes/formatparser-class#gettoken)
- [next](api-reference-old/api-reference-5-x/core-package/classes/formatparser-class#next)
- [parse](api-reference-old/api-reference-5-x/core-package/classes/formatparser-class#parse)
- [skipSpaces](api-reference-old/api-reference-5-x/core-package/classes/formatparser-class#skipspaces)
- [start](api-reference-old/api-reference-5-x/core-package/classes/formatparser-class#start)


## Constructors

---
#### constructor

⊕ new FormatParser(format: `string`): [FormatParser](api-reference-old/api-reference-5-x/core-package/classes/formatparser-class)

#### Parameters:
- format: `string`


---

## Public Methods

---
### getToken
Returns current token

▸ getToken(): [FormatToken](api-reference-old/api-reference-5-x/core-package/interfaces/formattoken-interface)


**Returns** [FormatToken](api-reference-old/api-reference-5-x/core-package/interfaces/formattoken-interface)

---
### next
Scans the source and gets the next token

▸ next(): `boolean`


**Returns** `boolean`

---
### parse
Parses all source string passed in constructor and returns the list of tokens

▸ parse(): [FormatToken](api-reference-old/api-reference-5-x/core-package/interfaces/formattoken-interface)[]


**Returns** [FormatToken](api-reference-old/api-reference-5-x/core-package/interfaces/formattoken-interface)[]

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
