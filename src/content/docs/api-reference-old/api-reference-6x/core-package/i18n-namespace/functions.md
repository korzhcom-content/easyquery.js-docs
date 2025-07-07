---
title: Functions
slug: api-reference-old/api-reference-6x/core-package/i18n-namespace/functions
sidebar:
  order: 100
---

## Index
- [addLocale](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#addlocale)
- [getCurrentLocale](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#getcurrentlocale)
- [getLocaleSettings](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#getlocalesettings)
- [getLocales](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#getlocales)
- [getLongMonthName](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#getlongmonthname)
- [getLongWeekDayName](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#getlongweekdayname)
- [getOneLocaleSetting](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#getonelocalesetting)
- [getShortMonthName](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#getshortmonthname)
- [getShortWeekDayName](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#getshortweekdayname)
- [getText](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#gettext)
- [setCurrentLocale](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#setcurrentlocale)
- [setLocale](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#setlocale)
- [updateLocaleInfo](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#updatelocaleinfo)
- [updateLocaleTexts](api-reference-old/api-reference-6x/core-package/i18n-namespace/functions#updatelocaletexts)

#### addLocale

Deprecated! Use updateLocaleInfo instead
Updates the locale information for the specified locale

▸ addLocale(locale: `string`,localeData: [LocaleInfo](api-reference-old/api-reference-6x/core-package/i18n-namespace/interfaces/localeinfo-interface)): `void`

#### Parameters:
- locale: `string`
- localeData: [LocaleInfo](api-reference-old/api-reference-6x/core-package/i18n-namespace/interfaces/localeinfo-interface)


**Returns** `void`



---
#### getCurrentLocale

Gets the current locale.

▸ getCurrentLocale(): `string`


**Returns** `string` - The locale.




---
#### getLocaleSettings

▸ getLocaleSettings(lang?: `string`): `any`

#### Parameters:
- lang: `string`, *Optional* 


**Returns** `any`



---
#### getLocales

Gets added locales with their names.

▸ getLocales(): [LocaleInfoItem](api-reference-old/api-reference-6x/core-package/i18n-namespace/interfaces/localeinfoitem-interface)[]


**Returns** [LocaleInfoItem](api-reference-old/api-reference-6x/core-package/i18n-namespace/interfaces/localeinfoitem-interface)[] - The locales.




---
#### getLongMonthName

▸ getLongMonthName(monthNum: `number`): `string`

#### Parameters:
- monthNum: `number`


**Returns** `string`



---
#### getLongWeekDayName

▸ getLongWeekDayName(dayNum: `number`): `string`

#### Parameters:
- dayNum: `number`


**Returns** `string`



---
#### getOneLocaleSetting

▸ getOneLocaleSetting(key: `string`): `any`

#### Parameters:
- key: `string`


**Returns** `any`



---
#### getShortMonthName

▸ getShortMonthName(monthNum: `number`): `string`

#### Parameters:
- monthNum: `number`


**Returns** `string`



---
#### getShortWeekDayName

▸ getShortWeekDayName(dayNum: `number`): `string`

#### Parameters:
- dayNum: `number`


**Returns** `string`



---
#### getText

Returns localized text by the key defined in parameter.
Here we get the text of the resource string assigned to CmdClickToAddCondition key:

▸ getText(args: `string`[]): `string`

#### Parameters:
- args: `string`[] - The keys of the resource string.


**Returns** `string` - Text of the resource defined by key.





---
#### setCurrentLocale

Sets the curent locale.

▸ setCurrentLocale(l: `string`): `void`

#### Parameters:
- l: `string` - The locale.



**Returns** `void`



---
#### setLocale

Deprecated! Use setCurrentLocale instead
Sets the curent locale.

▸ setLocale(l: `string`): `void`

#### Parameters:
- l: `string` - The locale.



**Returns** `void`



---
#### updateLocaleInfo

Updates the locale information for the specified locale.
If locale does not exist yet - it will added.

▸ updateLocaleInfo(locale: `string`,localeData: [LocaleInfo](api-reference-old/api-reference-6x/core-package/i18n-namespace/interfaces/localeinfo-interface)): `void`

#### Parameters:
- locale: `string`
- localeData: [LocaleInfo](api-reference-old/api-reference-6x/core-package/i18n-namespace/interfaces/localeinfo-interface)


**Returns** `void`



---
#### updateLocaleTexts

Updates the texts for the specified locale

▸ updateLocaleTexts(locale: `string`,texts: `any`): `void`

#### Parameters:
- locale: `string`
- texts: `any`


**Returns** `void`



---
