---
title: EqBrokerOptions interface
slug: >-
  api-reference-old/api-reference-5-x/core-package/interfaces/eqbrokeroptions-interface
sidebar:
  order: 100
---

Defines broker options

## Index
### [Properties](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#properties-1)
- [endpoint](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#endpoint)
- [resolver](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbrokeroptions-interface/#resolver)



## Properties

---
### endpoint

The URL where all EasyQuery requests will be sent to
In case of EasyQuery Server broker it's just the first part of the URL

● endpoint?: `string`

---
### resolver

A function which returns the broker object for specified context

● resolver?: (context: [EqContext](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/classes/eqcontext-class)) => [EqBroker](//easyquery/javascript/docs/api-reference-5-x/@easyquery/core-package/interfaces/eqbroker-interface)

---
