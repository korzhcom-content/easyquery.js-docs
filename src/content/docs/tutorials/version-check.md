---
title: The version check without a license key
slug: tutorials/version-check
sidebar:
  order: 100
---

Starting with version 7.5.1, when EasyQuery.JS finds no license key, it asks korzh.com whether the version you are using is the latest release. This happens at the moment the library opens its "No license key for EasyQuery" dialog. If a newer release exists, the dialog shows one extra line: "You are using EasyQuery.JS 7.4.2. The latest release is 7.5.0." The request runs alongside the dialog and never delays it. If the request fails or is blocked, the dialog looks exactly as before. An application with any license key, including an expired or invalid one, never makes this request.

## What is sent

The library sends one `POST` request to `https://account.korzh.com/api/license/version-check` with these fields:

| Field | Value |
|---|---|
| `version` | The EasyQuery.JS version, e.g. `7.5.1` |
| `ptag`, `apptype` | The kind of backend the library talks to, e.g. `EQN-ANC` and `asp-net-core-razor` |
| `iid` | A random install id, generated once and kept in the browser's `localStorage` under `eq.iid` |
| `appName` | The name of your application, only if you set one (see below) |

No personal data is sent, and nothing from your data model, queries or results. If you then request a trial key in the same dialog, the install id is sent along with that request as well, so we can tell that the trial belongs to the application that just started.

## Naming your application

You can give your application a name that is sent with the version check. Call `setAppName()` before `useEnterprise()`, because the check starts from `useEnterprise()`:

```js
const context = view.getContext();
context
    .setAppName('Northwind Reports')
    .useEndpoint('/api/easyquery')
    .useEnterprise(() => {
        view.init(viewOptions);
    });
```

There is also an `appName` option for `init()`. It only takes effect when `init()` runs before `useEnterprise()`. In the usual setup shown above, `init()` runs inside the `useEnterprise()` callback, which is too late.

## Turning it off

To send nothing, call `disableVersionCheck()` before `useEnterprise()`:

```js
const context = view.getContext();
context
    .disableVersionCheck()
    .useEndpoint('/api/easyquery')
    .useEnterprise(() => {
        view.init(viewOptions);
    });
```

Or set a global flag anywhere before `useEnterprise()` is called, for example in a script that runs before the page's own code:

```js
window.EQ_NO_VERSION_CHECK = true;
```

Either way, the library makes no request and sends no install id with a trial key request. It also shows no version warning. There is a `noVersionCheck` option for `init()` too, with the same limit as `appName`: it only works when `init()` runs before `useEnterprise()`.
