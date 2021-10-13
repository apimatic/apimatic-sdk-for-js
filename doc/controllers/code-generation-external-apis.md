# Code Generation - External APIs

```ts
const codeGenerationExternalApisController = new CodeGenerationExternalApisController(client);
```

## Class Name

`CodeGenerationExternalApisController`

## Methods

* [Get Download SDK](/doc/controllers/code-generation-external-apis.md#get-download-sdk)
* [Get List All Code Generations](/doc/controllers/code-generation-external-apis.md#get-list-all-code-generations)
* [Generate SD Kvia URL](/doc/controllers/code-generation-external-apis.md#generate-sd-kvia-url)
* [Download Input File](/doc/controllers/code-generation-external-apis.md#download-input-file)
* [Delete Code Generation 1](/doc/controllers/code-generation-external-apis.md#delete-code-generation-1)
* [Get a Code Generation 1](/doc/controllers/code-generation-external-apis.md#get-a-code-generation-1)


# Get Download SDK

Download the SDK generated via the Generate SDK endpoints.

```ts
async getDownloadSDK(
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `codegenId` | `string` | Template, Required | The ID of code generation received in the response of the [Generate SDK Via File](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-external-apis/generate-sdk-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const codegenId = 'codegen_id6';
try {
  const { result, ...httpResponse } = await codeGenerationExternalApisController.getDownloadSDK(codegenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get List All Code Generations

Get a list of all SDK generations performed with external APIs via the Generate SDK endpoints.

```ts
async getListAllCodeGenerations(
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCodeGeneration[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserCodeGeneration[]`](/doc/models/user-code-generation.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await codeGenerationExternalApisController.getListAllCodeGenerations();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate SD Kvia URL

Generate an SDK for an API by providing the URL of the API specification file.

This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for the generation performed is returned as part of the response.

This endpoint does not import an API into APIMatic.

```ts
async generateSDKviaURL(
  body: GenerateSdkViaUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCodeGeneration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GenerateSdkViaUrlRequest`](/doc/models/generate-sdk-via-url-request.md) | Body, Required | Request Body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserCodeGeneration`](/doc/models/user-code-generation.md)

## Example Usage

```ts
const body: GenerateSdkViaUrlRequest = {
  url: 'http://petstore.swagger.io/v2/swagger.json',
  template: 'CS_NET_STANDARD_LIB',
};

try {
  const { result, ...httpResponse } = await codeGenerationExternalApisController.generateSDKviaURL(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Download Input File

Download the API Specification file used as input for a specific SDK generation performed via the Generate SDK endpoints.

```ts
async downloadInputFile(
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `codegenId` | `string` | Template, Required | The ID of the code generation to download the API specification for. The code generation ID is received in the response of the [Generate SDK Via File](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-external-apis/generate-sdk-via-url) calls |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const codegenId = 'codegen_id6';
try {
  const { result, ...httpResponse } = await codeGenerationExternalApisController.downloadInputFile(codegenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Code Generation 1

Delete an SDK generation performed for an API via the Generate SDK endpoints.

```ts
async deleteCodeGeneration1(
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `codegenId` | `string` | Template, Required | The ID of the code generation to delete. The code generation ID is received in the response of the [Generate SDK Via File](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-external-apis/generate-sdk-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const codegenId = 'codegen_id6';
try {
  const { result, ...httpResponse } = await codeGenerationExternalApisController.deleteCodeGeneration1(codegenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Code Generation 1

Get details on an SDK generation performed for an external API via the Generate SDK endpoints.

```ts
async getACodeGeneration1(
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCodeGeneration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `codegenId` | `string` | Template, Required | The ID of the code generation to fetch. The code generation ID is received in the response of the [Generate SDK Via File](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-external-apis/generate-sdk-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserCodeGeneration`](/doc/models/user-code-generation.md)

## Example Usage

```ts
const codegenId = 'codegen_id6';
try {
  const { result, ...httpResponse } = await codeGenerationExternalApisController.getACodeGeneration1(codegenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

