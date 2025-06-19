# Code Generation-External AP Is

```ts
const codeGenerationExternalApIsController = new CodeGenerationExternalApIsController(client);
```

## Class Name

`CodeGenerationExternalApIsController`

## Methods

* [Generate SDK Via File](../../doc/controllers/code-generation-external-ap-is.md#generate-sdk-via-file)
* [Generate SDK Via URL](../../doc/controllers/code-generation-external-ap-is.md#generate-sdk-via-url)
* [Download SDK](../../doc/controllers/code-generation-external-ap-is.md#download-sdk)
* [List All Code Generations](../../doc/controllers/code-generation-external-ap-is.md#list-all-code-generations)
* [Download Input File](../../doc/controllers/code-generation-external-ap-is.md#download-input-file)
* [Get a Code Generation](../../doc/controllers/code-generation-external-ap-is.md#get-a-code-generation)
* [Delete Code Generation 1](../../doc/controllers/code-generation-external-ap-is.md#delete-code-generation-1)


# Generate SDK Via File

Generate an SDK for an API by by uploading the API specification file.

This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for the generation performed is returned as part of the response.

This endpoint does not import an API into APIMatic.

```ts
async generateSdkViaFile(
  file: FileWrapper,
  template: Platforms,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCodeGeneration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `template` | [`Platforms`](../../doc/models/platforms.md) | Form, Required | The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [UserCodeGeneration](../../doc/models/user-code-generation.md).

## Example Usage

```ts
const file = new FileWrapper(fs.createReadStream('dummy_file'));

const template = Platforms.CsNetStandardLib;

try {
  const { result, ...httpResponse } = await codeGenerationExternalApIsController.generateSdkViaFile(
  file,
  template
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate SDK Via URL

Generate an SDK for an API by providing the URL of the API specification file.

This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for the generation performed is returned as part of the response.

This endpoint does not import an API into APIMatic.

```ts
async generateSdkViaUrl(
  body: GenerateSdkViaUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCodeGeneration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GenerateSdkViaUrlRequest`](../../doc/models/generate-sdk-via-url-request.md) | Body, Required | Request Body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [UserCodeGeneration](../../doc/models/user-code-generation.md).

## Example Usage

```ts
const body: GenerateSdkViaUrlRequest = {
  url: 'http://petstore.swagger.io/v2/swagger.json',
  template: Platforms.CsNetStandardLib,
};

try {
  const { result, ...httpResponse } = await codeGenerationExternalApIsController.generateSdkViaUrl(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Download SDK

Download the SDK generated via the Generate SDK endpoints.

```ts
async downloadSdk(
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type NodeJS.ReadableStream | Blob.

## Example Usage

```ts
const codegenId = 'codegen_id6';

try {
  const { result, ...httpResponse } = await codeGenerationExternalApIsController.downloadSdk(codegenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List All Code Generations

Get a list of all SDK generations performed with external APIs via the Generate SDK endpoints.

```ts
async listAllCodeGenerations(
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCodeGeneration[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [UserCodeGeneration[]](../../doc/models/user-code-generation.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await codeGenerationExternalApIsController.listAllCodeGenerations();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type NodeJS.ReadableStream | Blob.

## Example Usage

```ts
const codegenId = 'codegen_id6';

try {
  const { result, ...httpResponse } = await codeGenerationExternalApIsController.downloadInputFile(codegenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Code Generation

Get details on an SDK generation performed for an external API via the Generate SDK endpoints.

```ts
async getACodeGeneration(
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [UserCodeGeneration](../../doc/models/user-code-generation.md).

## Example Usage

```ts
const codegenId = 'codegen_id6';

try {
  const { result, ...httpResponse } = await codeGenerationExternalApIsController.getACodeGeneration(codegenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const codegenId = 'codegen_id6';

try {
  const { result, ...httpResponse } = await codeGenerationExternalApIsController.deleteCodeGeneration1(codegenId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

