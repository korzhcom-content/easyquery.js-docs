---
title: Functions
slug: api-reference-5-x/@easyquery/core-package/eqi18n-namespace/functions
sidebar:
  order: 100
---

## Index
- [addLocale](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/eqi18n-namespace/functions/#addlocale)
- [getLocale](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/eqi18n-namespace/functions/#getlocale)
- [getText](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/eqi18n-namespace/functions/#gettext)
- [setLocale](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/eqi18n-namespace/functions/#setlocale)

#### addLocale

▸ addLocale(locale: `string`,localeTexts: `any`): `void`

#### Parameters:
- locale: `string`
- localeTexts: `any`

**Returns** `void`


---
#### getLocale

Gets the locale.

▸ getLocale(): `string`

**Returns** `string` - The locale.



---
#### getText

Returns localized text by the key defined in parameter.
Here we get the text of the resource string assigned to CmdClickToAddCondition key:

▸ getText(args: `any`[]): `string`

#### Parameters:
- args: `any`[] - The keys of the resource string.

**Returns** `string` - Text of the resource defined by key.




---
#### setLocale

Sets the locale.

▸ setLocale(l: `string`): `void`

#### Parameters:
- l: `string` - The locale.


**Returns** `void`


---
