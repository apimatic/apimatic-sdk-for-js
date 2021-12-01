
# Getting Started with Apimatic API

## Introduction

This API gives you programmatic access to APIMatic's Code Generation, Docs Generation and Transformers Engine.

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install @apimatic/js-sdk@0.0.15-alpha.1
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `authorization` | `string` | Auth Header. Replace {x-auth-key} with your API Key. |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  authorization: 'Authorization',
})
```

## Authorization

This API uses `Custom Header Signature`.

## List of APIs

* [APIs Management](/doc/controllers/apis-management.md)
* [Code Generation - Imported APIs](/doc/controllers/code-generation-imported-apis.md)
* [Code Generation - External APIs](/doc/controllers/code-generation-external-apis.md)
* [Transformation](/doc/controllers/transformation.md)
* [Docs Portal Management](/doc/controllers/docs-portal-management.md)
* [API Validation - Imported APIs](/doc/controllers/api-validation-imported-apis.md)
* [API Validation - External APIs](/doc/controllers/api-validation-external-apis.md)
* [Package Deployment](/doc/controllers/package-deployment.md)

## Classes Documentation

* [ApiResponse](/doc/api-response.md)
* [ApiError](/doc/api-error.md)

