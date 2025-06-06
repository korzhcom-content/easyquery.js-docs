---
title: LinkType enum
slug: api-reference-6x/@easyquery/core-package/enumerations/linktype-enum
sidebar:
  order: 100
---
# LinkType enum

Represents type of linking of conditions in group (predicate).

### Enum
| Name | Value | Description | 
| --- | --- | --- | 
| All | `3` | All conditions must be truth, in result SQL they are connected by `AND` operator; | 
| Any | `1` | At least one condition must be truth. In SQL they are connected by `OR` operator. | 
| None | `0` | None of the conditions must be truth (all must be false).
In SQL it will look like: `NOT (Condition1 OR Condition2 OR ...)`. | 
| NotAll | `2` | Not all conditions must be truth (at least one must false).
In SQL it will look like: `NOT(Condition1 AND Condition2 AND ...)`. |
