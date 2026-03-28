# SDK Generation-Async

```ts
const sdkGenerationAsyncController = new SdkGenerationAsyncController(client);
```

## Class Name

`SdkGenerationAsyncController`

## Methods

* [Generate SDK via Build Input Async](../../doc/controllers/sdk-generation-async.md#generate-sdk-via-build-input-async)
* [Get SDK Generation Status](../../doc/controllers/sdk-generation-async.md#get-sdk-generation-status)
* [Download Generated SDK](../../doc/controllers/sdk-generation-async.md#download-generated-sdk)


# Generate SDK via Build Input Async

Create an async SDK Generation request by providing a Build Input

```ts
async generateSdkViaBuildInputAsync(
  contentType: ContentType,
  file: FileWrapper,
  language: SdkLanguages,
  xApiMaticCallbackUrl?: string,
  xApiMaticPackageVersion?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SdkGenerationAsyncResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The input file to the SDK Generator. Must contain the build file or a spec folder containing the API Specification. |
| `language` | [`SdkLanguages`](../../doc/models/sdk-languages.md) | Form, Required | Languages for which SDKs can be generated. |
| `xApiMaticCallbackUrl` | `string \| undefined` | Header, Optional | Optional header containing callback url. This url will be called by the server once the SDK generation completes |
| `xApiMaticPackageVersion` | `string \| undefined` | Header, Optional | Optional header containing the package version. This version will be used by the server during the SDK generation process |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SdkGenerationAsyncResponse`](../../doc/models/sdk-generation-async-response.md).

## Example Usage

```ts
const contentType = ContentType.EnumMultipartformdata;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

const language = SdkLanguages.Csharp;

const xApiMaticPackageVersion = '1.0.0';

try {
  const response = await sdkGenerationAsyncController.generateSdkViaBuildInputAsync(
    contentType,
    file,
    language,
    undefined,
    xApiMaticPackageVersion
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
    if (error instanceof ProblemDetailsError) {
      console.log(error.result);
    } else if (error instanceof UnauthorizedResponseError) {
      console.log(error.result);
    } else if (error instanceof InternalServerErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "0194d0da-8d75-7c04-b517-6a9342b114e8",
  "links": {
    "status": "https://api.apimatic.io/sdk/0194d0da-8d75-7c04-b517-6a9342b114e8/status",
    "download": "https://api.apimatic.io/sdk/0194d0da-8d75-7c04-b517-6a9342b114e8/download"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| 401 | Unauthorized | [`UnauthorizedResponseError`](../../doc/models/unauthorized-response-error.md) |
| 500 | Internal Server Error | [`InternalServerErrorResponseError`](../../doc/models/internal-server-error-response-error.md) |


# Get SDK Generation Status

Get the status of an SDK generation request

```ts
async getSdkGenerationStatus(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SdkGenerationStatusResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SdkGenerationStatusResponse`](../../doc/models/sdk-generation-status-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await sdkGenerationAsyncController.getSdkGenerationStatus(id);

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
    if (error instanceof ProblemDetailsError) {
      console.log(error.result);
    } else if (error instanceof UnauthorizedResponseError) {
      console.log(error.result);
    } else if (error instanceof InternalServerErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "status": "InProgress"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| 401 | Unauthorized | [`UnauthorizedResponseError`](../../doc/models/unauthorized-response-error.md) |
| 500 | Internal Server Error | [`InternalServerErrorResponseError`](../../doc/models/internal-server-error-response-error.md) |


# Download Generated SDK

Downloads the SDK artifacts. The endpoint returns a zip file containing the generated SDK.

```ts
async downloadGeneratedSdk(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `NodeJS.ReadableStream | Blob`.

## Example Usage

```ts
const id = 'id0';

try {
  const response = await sdkGenerationAsyncController.downloadGeneratedSdk(id);

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
    if (error instanceof ProblemDetailsError) {
      console.log(error.result);
    } else if (error instanceof UnauthorizedResponseError) {
      console.log(error.result);
    } else if (error instanceof InternalServerErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| 401 | Unauthorized | [`UnauthorizedResponseError`](../../doc/models/unauthorized-response-error.md) |
| 500 | Internal Server Error | [`InternalServerErrorResponseError`](../../doc/models/internal-server-error-response-error.md) |

