# Table of Contents

```ts
const tableOfContentsController = new TableOfContentsController(client);
```

## Class Name

`TableOfContentsController`


# Generate TOC Data

Generate Table of Contents (TOC) data for an API specification by uploading the API specification file as a zip archive.

This endpoint streams the generated TOC data directly in the response as a JSON file.

```ts
async generateTocData(
  contentType: ContentType,
  file: FileWrapper,
  queryParameters?: Record<string, string>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The API specification zip archive. The zip file should contain the API specification file in any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `queryParameters` | `Record<string, string>` | Optional | Pass additional query parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `NodeJS.ReadableStream | Blob`.

## Example Usage

```ts
const contentType = ContentType.EnumMultipartformdata;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

const queryParameters: Record<string, string> = {
  'key0': 'additionalQueryParams2'
};

try {
  const response = await tableOfContentsController.generateTocData(
    contentType,
    file,
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

