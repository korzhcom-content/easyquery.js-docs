---
title: CondTag enum
slug: api-reference-7x/@easyquery/core-package/enumerations/condtag-enum
sidebar:
  order: 100
---

Represents a type of condition.
Current we have 2 possible types: a simple condition or a predicate - a group of conditions

### Enum
| Name | Value | Description | 
| --- | --- | --- | 
| Group | `51` | A predicate (a group of conditions). | 
| Simple | `1` | A simple condition (e.g. SomeField > SomeValue). | 
| Unknown | `0` | An unknown type of condition (just in case). |
