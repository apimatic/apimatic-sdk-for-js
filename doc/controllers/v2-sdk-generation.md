# V2 SDK Generation

```ts
const v2SdkGenerationController = new V2SdkGenerationController(client);
```

## Class Name

`V2SdkGenerationController`

## Methods

* [Generate V2 SDK via Build Input Async](../../doc/controllers/v2-sdk-generation.md#generate-v2-sdk-via-build-input-async)
* [Get V2 SDK Generation Status](../../doc/controllers/v2-sdk-generation.md#get-v2-sdk-generation-status)
* [Download Generated V2 SDK](../../doc/controllers/v2-sdk-generation.md#download-generated-v2-sdk)


# Generate V2 SDK via Build Input Async

Create an async V2 SDK Generation request by providing a Build Input

```ts
async generateV2SdkViaBuildInputAsync(
  contentType: ContentType,
  file: FileWrapper,
  language: SdkLanguages,
  stability: StabilityLevelTag,
  xApiMaticCallbackUrl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SdkGenerationAsyncResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The input file to the SDK Generator. Must contain the build file or a spec folder containing the API Specification. |
| `language` | [`SdkLanguages`](../../doc/models/sdk-languages.md) | Form, Required | Languages for which SDKs can be generated. |
| `stability` | [`StabilityLevelTag`](../../doc/models/stability-level-tag.md) | Form, Required | The stability level of the generated SDK. |
| `xApiMaticCallbackUrl` | `string \| undefined` | Header, Optional | Optional header containing callback url. This url will be called by the server once the SDK generation completes |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SdkGenerationAsyncResponse`](../../doc/models/sdk-generation-async-response.md).

## Example Usage

```ts
const contentType = ContentType.EnumMultipartformdata;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

const language = SdkLanguages.Csharp;

const stability = StabilityLevelTag.Stable;

try {
  const response = await v2SdkGenerationController.generateV2SdkViaBuildInputAsync(
    contentType,
    file,
    language,
    stability
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
    "status": "https://api.apimatic.io/sdk/v2/0194d0da-8d75-7c04-b517-6a9342b114e8/status",
    "download": "https://api.apimatic.io/sdk/v2/0194d0da-8d75-7c04-b517-6a9342b114e8/download"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| 401 | Unauthorized | [`UnauthorizedResponseError`](../../doc/models/unauthorized-response-error.md) |
| 500 | Internal Server Error | [`InternalServerErrorResponseError`](../../doc/models/internal-server-error-response-error.md) |


# Get V2 SDK Generation Status

Get the status of a V2 SDK generation request

```ts
async getV2SdkGenerationStatus(
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
  const response = await v2SdkGenerationController.getV2SdkGenerationStatus(id);

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


# Download Generated V2 SDK

Downloads the V2 SDK artifacts. The endpoint returns a zip file containing the generated SDK.

```ts
async downloadGeneratedV2Sdk(
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
  const response = await v2SdkGenerationController.downloadGeneratedV2Sdk(id);

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

