---
title: EqBrokerOptions interface
slug: >-
  api-reference-old/api-reference-5-x/core-package/interfaces/eqbrokeroptions-interface
sidebar:
  order: 100
---

Defines broker options

## Index
### [Properties](api-reference-old/api-reference-5-x/core-package/interfaces/eqbrokeroptions-interface#properties-1)
- [endpoint](api-reference-old/api-reference-5-x/core-package/interfaces/eqbrokeroptions-interface#endpoint)
- [resolver](api-reference-old/api-reference-5-x/core-package/interfaces/eqbrokeroptions-interface#resolver)



## Properties

---
### endpoint

The URL where all EasyQuery requests will be sent to
In case of EasyQuery Server broker it's just the first part of the URL

● endpoint?: `string`

---
### resolver

A function which returns the broker object for specified context

● resolver?: (context: [EqContext](api-reference-old/api-reference-5-x/core-package/classes/eqcontext-class)) => [EqBroker](api-reference-old/api-reference-5-x/core-package/interfaces/eqbroker-interface)

---
