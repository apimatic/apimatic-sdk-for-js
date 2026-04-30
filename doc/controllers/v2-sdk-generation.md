# V2 SDK Generation

```ts
const v2SdkGenerationController = new V2SdkGenerationController(client);
```

## Class Name

`V2SdkGenerationController`


# Generate V2 SDK via Build Input

Create a V2 SDK Generation request by providing a Build Input

```ts
async generateV2SdkViaBuildInput(
  contentType: ContentType,
  file: FileWrapper,
  language: SdkLanguages,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The input file to the SDK Generator. Must contain the build file or a spec folder containing the API Specification. |
| `language` | [`SdkLanguages`](../../doc/models/sdk-languages.md) | Form, Required | Languages for which SDKs can be generated. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `NodeJS.ReadableStream | Blob`.

## Example Usage

```ts
const contentType = ContentType.EnumMultipartformdata;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

const language = SdkLanguages.Csharp;

try {
  const response = await v2SdkGenerationController.generateV2SdkViaBuildInput(
    contentType,
    file,
    language
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| 401 | Unauthorized | [`UnauthorizedResponseError`](../../doc/models/unauthorized-response-error.md) |
| 500 | Internal Server Error | [`InternalServerErrorResponseError`](../../doc/models/internal-server-error-response-error.md) |

