---
title: EQ.core namespace
slug: api-reference-old/api-reference-4-x/eq-core-namespace
sidebar:
  order: 100
---

Contains different classes and functions for managing core EasyQuery objects: data model, query, entities, attributes, operators, etc.

## **Functions** ##

## *getText* ##
Returns: `Text of the resource defined by key`    
Returns type: `String`    
Returns localized text by the key defined in parameters
#### Parameters ####
| Name | Type | Description |
| -------- | ------- | --------------------------- |
| `key` | *String* | The key of the resource string. |

Here we get the text of the resource string assigned to CmdClickToAddCondition key
 ```javascript 
var text = EQ.core.getText("CmdClickToAddCondition")
```
