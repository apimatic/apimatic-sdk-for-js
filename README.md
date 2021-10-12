
# Getting Started with Apimatic API

## Introduction

This API gives you programmatic access to APIMatic's Code Generation, Docs Generation and Transformers Engine.

## Installation

The following section explains how to use the Apimatic APILib library in a new project.

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `email` | `string` | *Default*: `'yourusername@apimatic.io'` |
| `password` | `string` | *Default*: `'yourapimaticpassword'` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  email: 'yourusername@apimatic.io',
  password: 'yourapimaticpassword',
})
```

## Authorization

This API uses `Basic Authentication`.

## List of APIs

* [APIs Management](/doc/controllers/apis-management.md)
* [Code Generation - Imported APIs](/doc/controllers/code-generation-imported-apis.md)
* [Code Generation - External APIs](/doc/controllers/code-generation-external-apis.md)
* [Transformation](/doc/controllers/transformation.md)
* [Docs Portal Management](/doc/controllers/docs-portal-management.md)
* [API Validation](/doc/controllers/api-validation.md)
* [Package Deployment](/doc/controllers/package-deployment.md)

## Classes Documentation

* [ApiResponse](/doc/api-response.md)
* [ApiError](/doc/api-error.md)

