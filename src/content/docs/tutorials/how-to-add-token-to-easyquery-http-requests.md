---
title: How to add a token to EasyQuery HTTP requests
slug: tutorials/how-to-add-token-to-easyquery-http-requests
sidebar:
  order: 100
---

There are two ways to modify HTTP requests initiated by EasyQuery.JS widgets and add some extra headers/parameters to them. 

For each of those scenarios you need to get the HttpClient service first:

```
var httpClient = view.getContext().getServices().getHttpClient();
```

Here `view` is a "view" object you work with on the current page (e.g. `AdvancedSearchView` or `ReportView`). 

After that may use the `defaultHeaders` property to set any headers you need for all EasyQuery requests:

```
httpClient.defaultHeaders['Authorization'] = 'Bearer YourTokenGoesHere';
```

If the value of the request header should be calculated right at the moment of request, you can use `onRequest` event handler instead:

```
httpClient.onRequest = (request) => {
    request.setHeader('my_token', 'some token');

    //additionally, you can add some extra query parameters to the request
    request.setQueryParam('param1', 'value1');
}
```

## Using HttpClient to handle the response

You can also use the `HttpClient` service to catch and handle any response from the EasyQuery server-side API. Use  `onResponse` event handler for that:

```
httpClient.onResponse = (xhr) => {
    console.log('EasyQuery API response', xhr);
	let headers = xhr.getAllResponseHeaders();
    console.log('EasyQuery API response headers', headers);
}
```
