---
title: Functions
slug: api-reference-7x/easydata-packages/core-package/i18n-namespace/functions
sidebar:
  order: 100
---

## Index
- [addLocale](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#addlocale)
- [addMapper](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#addmapper)
- [booleanToStr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#booleantostr)
- [dateTimeToStr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#datetimetostr)
- [getCurrentLocale](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#getcurrentlocale)
- [getLocaleSettings](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#getlocalesettings)
- [getLocales](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#getlocales)
- [getLongMonthName](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#getlongmonthname)
- [getLongWeekDayName](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#getlongweekdayname)
- [getOneLocaleSetting](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#getonelocalesetting)
- [getShortMonthName](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#getshortmonthname)
- [getShortWeekDayName](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#getshortweekdayname)
- [getText](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#gettext)
- [numberToStr](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#numbertostr)
- [resetLocales](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#resetlocales)
- [setCurrentLocale](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#setcurrentlocale)
- [setLocale](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#setlocale)
- [updateDefaultTexts](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#updatedefaulttexts)
- [updateLocaleInfo](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#updatelocaleinfo)
- [updateLocaleSettings](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#updatelocalesettings)
- [updateLocaleTexts](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/functions/#updatelocaletexts)

#### addLocale

Adds the locale.

▸ addLocale(localeId: `string`,localeInfo: [LocaleInfo](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localeinfo-interface)): `void`

#### Parameters:
- localeId: `string` - The locale ID (like 'en', 'de', 'uk', etc).
If the locale does exist yet - it will be created
- localeInfo: [LocaleInfo](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localeinfo-interface) - a LocaleInfo object that contains the locale settings and textual resources



**Returns** `void`



---
#### addMapper

▸ addMapper(mapper: `LocaleMapper`): `void`

#### Parameters:
- mapper: `LocaleMapper`


**Returns** `void`



---
#### booleanToStr

▸ booleanToStr(bool: `boolean`,format?: `string`): `string`

#### Parameters:
- bool: `boolean`
- format: `string`, *Optional* 


**Returns** `string`



---
#### dateTimeToStr

▸ dateTimeToStr(dateTime: `Date`,dataType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum),format?: `string`): `string`

#### Parameters:
- dateTime: `Date`
- dataType: [DataType](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/enumerations/datatype-enum)
- format: `string`, *Optional* 


**Returns** `string`



---
#### getCurrentLocale

Gets the current locale ID.

▸ getCurrentLocale(): `string`


**Returns** `string` - The locale.




---
#### getLocaleSettings

▸ getLocaleSettings(): [LocaleSettings](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localesettings-interface)


**Returns** [LocaleSettings](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localesettings-interface)



---
#### getLocales

Gets added locales with their names.

▸ getLocales(): [LocaleInfoItem](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localeinfoitem-interface)[]


**Returns** [LocaleInfoItem](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localeinfoitem-interface)[] - The locales.




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


**Returns** `string` - Text of the resource defined by key or null if the key is not found





---
#### numberToStr

▸ numberToStr(number: `number`,format?: `string`): `string`

#### Parameters:
- number: `number`
- format: `string`, *Optional* 


**Returns** `string`



---
#### resetLocales

▸ resetLocales(): `void`


**Returns** `void`



---
#### setCurrentLocale

Sets the curent locale.

▸ setCurrentLocale(localeId: `string`): `void`

#### Parameters:
- localeId: `string` - The locale.



**Returns** `void`



---
#### setLocale

Sets the curent locale.

▸ setLocale(l: `string`): `void`

#### Parameters:
- l: `string` - The locale.



**Returns** `void`



---
#### updateDefaultTexts

▸ updateDefaultTexts(texts: [TextResources](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/textresources-interface)): `void`

#### Parameters:
- texts: [TextResources](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/textresources-interface)


**Returns** `void`



---
#### updateLocaleInfo

Updates the information for the specified locale.

▸ updateLocaleInfo(localeId: `string`,localeData: [LocaleInfo](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localeinfo-interface)): `void`

#### Parameters:
- localeId: `string` - The locale ID (like 'en', 'de', 'uk', etc).
If the locale does exist yet - it will be added
- localeData: [LocaleInfo](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localeinfo-interface)


**Returns** `void`



---
#### updateLocaleSettings

Updates the locale settings (date/time formats, separators, etc) for the specified locale.

▸ updateLocaleSettings(settingsToUpdate: [LocaleSettings](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localesettings-interface)): `void`

#### Parameters:
- settingsToUpdate: [LocaleSettings](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/localesettings-interface) - a LocaleSettings object


**Returns** `void`



---
#### updateLocaleTexts

Updates the texts for the current locale

▸ updateLocaleTexts(texts: [TextResources](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/textresources-interface)): `void`

#### Parameters:
- texts: [TextResources](//easyquery/javascript/docs/api-reference-7x/@easydata/core-package/i18n-namespace/interfaces/textresources-interface) - A plain JS object that contains textual resources



**Returns** `void`



---
