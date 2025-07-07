---
title: EqContext extensions
slug: >-
  api-reference-old/api-reference-6x/odata-package/extensions/eqcontext-extensions
sidebar:
  order: 100
---

## Index
### [Methods](api-reference-old/api-reference-6x/odata-package/extensions/eqcontext-extensions#methods-1)
- [getODataVersion](api-reference-old/api-reference-6x/odata-package/extensions/eqcontext-extensions#getodataversion)
- [loadModelFromEdmx](api-reference-old/api-reference-6x/odata-package/extensions/eqcontext-extensions#loadmodelfromedmx)
- [loadModelFromEdmxType](api-reference-old/api-reference-6x/odata-package/extensions/eqcontext-extensions#loadmodelfromedmxtype)
- [useOData](api-reference-old/api-reference-6x/odata-package/extensions/eqcontext-extensions#useodata)



## Methods

---
### getODataVersion
▸ getODataVersion(): [ODataVersion](api-reference-old/api-reference-6x/odata-package/enumerations/odataversion-enum)


**Returns** [ODataVersion](api-reference-old/api-reference-6x/odata-package/enumerations/odataversion-enum)

---
### loadModelFromEdmx
▸ loadModelFromEdmx(this: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),edmString: `string`): `any`

#### Parameters:
- this: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)
- edmString: `string`


**Returns** `any`

---
### loadModelFromEdmxType
▸ loadModelFromEdmxType(this: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),typeName: `string`,depth: `number`,edmString: `string`): `any`

#### Parameters:
- this: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)
- typeName: `string`
- depth: `number`
- edmString: `string`


**Returns** `any`

---
### useOData
▸ useOData(this: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class),options?: [ODataOptions](api-reference-old/api-reference-6x/odata-package/interfaces/odataoptions-interface)): [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

#### Parameters:
- this: [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)
- options: [ODataOptions](api-reference-old/api-reference-6x/odata-package/interfaces/odataoptions-interface), *Optional* 


**Returns** [EqContext](api-reference-old/api-reference-6x/core-package/classes/eqcontext-class)

---
