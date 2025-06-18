---
title: DataKind enum
slug: api-reference-7x/easyquery-packages/core-package/enumerations/datakind-enum
sidebar:
  order: 100
---

Represents expression kinds.

### Enum
| Name | Value | Description | 
| --- | --- | --- | 
| Attribute | `2` | The same as Scalar but represents only one attribute. | 
| Const | `1` | The same as Scalar but represents only one constant value of some type. | 
| List | `4` | Represents a list of scalar values. | 
| ParentColumn | `6` | Special expression kind which represents a binding to parent column. | 
| Query | `5` | Special expression kind which represents a sub query. | 
| Scalar | `0` | Represents one value of some type: one constant or one attribute (field). |
