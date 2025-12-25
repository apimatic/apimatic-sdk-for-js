# Code Generation-External APIs

```ts
const codeGenerationExternalApisController = new CodeGenerationExternalApisController(client);
```

## Class Name

`CodeGenerationExternalApisController`

## Methods

* [Generate SDK Via File](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-file)
* [Generate SDK Via URL](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-url)
* [Download SDK](../../doc/controllers/code-generation-external-apis.md#download-sdk)
* [List All Code Generations](../../doc/controllers/code-generation-external-apis.md#list-all-code-generations)
* [Download Input File](../../doc/controllers/code-generation-external-apis.md#download-input-file)
* [Get a Code Generation](../../doc/controllers/code-generation-external-apis.md#get-a-code-generation)
* [Delete Code Generation for External APIs](../../doc/controllers/code-generation-external-apis.md#delete-code-generation-for-external-apis)


# Generate SDK Via File

Generate an SDK for an API by by uploading the API specification file.

This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for the generation performed is returned as part of the response.

This endpoint does not import an API into APIMatic.

```ts
async generateSdkViaFile(
  accept: Accept,
  file: FileWrapper,
  template: Platforms,
  queryParameters?: Record<string, string>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCodeGeneration>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | [`Accept`](../../doc/models/accept.md) | Header, Required | Must be set to 'application/json' to ensure JSON response format |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `template` | [`Platforms`](../../doc/models/platforms.md) | Form, Required | The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in. |
| `queryParameters` | `Record<string, string>` | Optional | Pass additional query parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UserCodeGeneration`](../../doc/models/user-code-generation.md).

## Example Usage

```ts
const accept = Accept.EnumApplicationjson;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

const template = Platforms.CsNetStandardLib;

const queryParameters: Record<string, string> = {
  'key0': 'additionalQueryParams2'
};

try {
  const response = await codeGenerationExternalApisController.generateSdkViaFile(
    accept,
    file,
    template,
    queryParameters
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`BadRequestResponseSdkError`](../../doc/models/bad-request-response-sdk-error.md) |
| 401 | Unauthorized | [`UnauthorizedResponseError`](../../doc/models/unauthorized-response-error.md) |
| 403 | Subscription Issue | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |


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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UserCodeGeneration`](../../doc/models/user-code-generation.md).

## Example Usage

```ts
const body: GenerateSdkViaUrlRequest = {
  url: 'http://petstore.swagger.io/v2/swagger.json',
  template: Platforms.CsNetStandardLib,
};

try {
  const response = await codeGenerationExternalApisController.generateSdkViaUrl(body);

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
| `codegenId` | `string` | Template, Required | The ID of code generation received in the response of the [Generate SDK Via File](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-file) or [Generate SDK Via URL ](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `NodeJS.ReadableStream | Blob`.

## Example Usage

```ts
const codegenId = 'codegen_id6';

try {
  const response = await codeGenerationExternalApisController.downloadSdk(codegenId);

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

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UserCodeGeneration[]`](../../doc/models/user-code-generation.md).

## Example Usage

```ts
try {
  const response = await codeGenerationExternalApisController.listAllCodeGenerations();

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
| `codegenId` | `string` | Template, Required | The ID of the code generation to download the API specification for. The code generation ID is received in the response of the [Generate SDK Via File](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-file) or [Generate SDK Via URL ](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-url) calls |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `NodeJS.ReadableStream | Blob`.

## Example Usage

```ts
const codegenId = 'codegen_id6';

try {
  const response = await codeGenerationExternalApisController.downloadInputFile(codegenId);

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
| `codegenId` | `string` | Template, Required | The ID of the code generation to fetch. The code generation ID is received in the response of the [Generate SDK Via File](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-file) or [Generate SDK Via URL ](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UserCodeGeneration`](../../doc/models/user-code-generation.md).

## Example Usage

```ts
const codegenId = 'codegen_id6';

try {
  const response = await codeGenerationExternalApisController.getACodeGeneration(codegenId);

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


# Delete Code Generation for External APIs

Delete an SDK generation performed for an API via the Generate SDK endpoints.

```ts
async deleteCodeGenerationForExternalApis(
  codegenId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `codegenId` | `string` | Template, Required | The ID of the code generation to delete. The code generation ID is received in the response of the [Generate SDK Via File](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-file) or [Generate SDK Via URL ](../../doc/controllers/code-generation-external-apis.md#generate-sdk-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const codegenId = 'codegen_id6';

try {
  const response = await codeGenerationExternalApisController.deleteCodeGenerationForExternalApis(codegenId);

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

