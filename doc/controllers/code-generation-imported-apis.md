# Code Generation-Imported APIs

```ts
const codeGenerationImportedApisController = new CodeGenerationImportedApisController(client);
```

## Class Name

`CodeGenerationImportedApisController`

## Methods

* [Generate SDK](../../doc/controllers/code-generation-imported-apis.md#generate-sdk)
* [Download SDK](../../doc/controllers/code-generation-imported-apis.md#download-sdk)
* [List All Code Generations](../../doc/controllers/code-generation-imported-apis.md#list-all-code-generations)
* [Get a Code Generation](../../doc/controllers/code-generation-imported-apis.md#get-a-code-generation)
* [Delete Code Generation](../../doc/controllers/code-generation-imported-apis.md#delete-code-generation)


# Generate SDK

Generate an SDK for an API Version.

This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for the generation performed is returned as part of the response.

```ts
async generateSdk(
  apiEntityId: string,
  template: Platforms,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntityCodeGeneration>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to generate the SDK for. |
| `template` | [`Platforms`](../../doc/models/platforms.md) | Form, Required | The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ApiEntityCodeGeneration`](../../doc/models/api-entity-code-generation.md).

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const template = Platforms.CsNetStandardLib;

try {
  const response = await codeGenerationImportedApisController.generateSdk(
    apiEntityId,
    template
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Download SDK

Download the SDK generated via the Generate SDK endpoint.

```ts
async downloadSdk(
  apiEntityId: string,
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity for which the SDK was generated. |
| `codegenId` | `string` | Template, Required | The ID of code generation received in the response of the [SDK generation call](../../doc/controllers/code-generation-imported-apis.md#generate-sdk). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `NodeJS.ReadableStream | Blob`.

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const codegenId = 'codegen_id6';

try {
  const response = await codeGenerationImportedApisController.downloadSdk(
    apiEntityId,
    codegenId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# List All Code Generations

Get a list of all SDK generations done against an API Version via the Generate SDK endpoint.

```ts
async listAllCodeGenerations(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntityCodeGeneration[]>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity for which to list code generations. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ApiEntityCodeGeneration[]`](../../doc/models/api-entity-code-generation.md).

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

try {
  const response = await codeGenerationImportedApisController.listAllCodeGenerations(apiEntityId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Get a Code Generation

Get details on an SDK generation performed via the Generate SDK endpoint.

```ts
async getACodeGeneration(
  apiEntityId: string,
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntityCodeGeneration>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to fetch the code generation for. |
| `codegenId` | `string` | Template, Required | The ID of the code generation to fetch. The code generation ID is received in the response of the [SDK generation call](../../doc/controllers/code-generation-imported-apis.md#generate-sdk). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ApiEntityCodeGeneration`](../../doc/models/api-entity-code-generation.md).

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const codegenId = 'codegen_id6';

try {
  const response = await codeGenerationImportedApisController.getACodeGeneration(
    apiEntityId,
    codegenId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Delete Code Generation

Delete an SDK generation performed for an API Version via the Generate SDK endpoint.

```ts
async deleteCodeGeneration(
  apiEntityId: string,
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to delete the code generation for. |
| `codegenId` | `string` | Template, Required | The ID of the code generation to delete. The code generation ID is received in the response of the [SDK generation call](../../doc/controllers/code-generation-imported-apis.md#generate-sdk). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const codegenId = 'codegen_id6';

try {
  const response = await codeGenerationImportedApisController.deleteCodeGeneration(
    apiEntityId,
    codegenId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

