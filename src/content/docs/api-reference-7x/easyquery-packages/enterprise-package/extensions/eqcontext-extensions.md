---
title: EqContext extensions
slug: >-
  api-reference-7x/easyquery-packages/enterprise-package/extensions/eqcontext-extensions
sidebar:
  order: 100
---

## Index
### [Methods](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/extensions/eqcontext-extensions/#methods-1)
- [setLicenseKeyEndpoint](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/extensions/eqcontext-extensions/#setlicensekeyendpoint)
- [useEnterprise](//easyquery/javascript/docs/api-reference-7x/@easyquery/enterprise-package/extensions/eqcontext-extensions/#useenterprise)



## Methods

---
### setLicenseKeyEndpoint
Sets the endpoint for getting the license key.

▸ setLicenseKeyEndpoint(this: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),endpoint: `string`): `void`

#### Parameters:
- this: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)
- endpoint: `string`


**Returns** `void`


---
### useEnterprise
Extension method that activates `Enterprise` functionality

▸ useEnterprise(this: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class),keyOrInitCallback: `string` | () => `void`): `void`

#### Parameters:
- this: [EqContext](//easyquery/javascript/docs/api-reference-7x/@easyquery/core-package/classes/eqcontext-class)
- keyOrInitCallback: `string` | () => `void` - The license key or a callback wich is called after
loading the license key from the back-end.
If the callback function is called useEnterprise will try to get the license key from {base}/lck endpoint



**Returns** `void`

#### Example: 
```typescript

context.useEnterprise('license key')
//or
context.useEnterprise(() => {
  //further logic
	view.init(options);
});

```

---
