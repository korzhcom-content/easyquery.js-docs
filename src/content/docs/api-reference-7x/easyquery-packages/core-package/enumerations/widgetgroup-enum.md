---
title: WidgetGroup enum
slug: api-reference-7x/easyquery-packages/core-package/enumerations/widgetgroup-enum
sidebar:
  order: 100
---

Represents groups of widgets. Used to identify widgets

### Enum
| Name | Value | Description | 
| --- | --- | --- | 
| All | ` (1 << 16) - 1` | All. | 
| Model | ` 1 << 0` | The group of widgets responsible for the Model. | 
| None | `0` | None widget group. | 
| Query | ` 1 << 1` | The group of widgets responsible for the Query. | 
| QueryStatus | ` 1 << 4` | The group of widgets responsible for tracking Query status. | 
| Result | ` 1 << 2` | The group of widgets responsible for the Result. | 
| Statement | ` 1 << 3` | The group of widgets responsible for the statement. |
