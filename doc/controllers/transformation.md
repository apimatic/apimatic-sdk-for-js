# Transformation

```ts
const transformationController = new TransformationController(client);
```

## Class Name

`TransformationController`

## Methods

* [Transformvia File](/doc/controllers/transformation.md#transformvia-file)
* [List All Transformations](/doc/controllers/transformation.md#list-all-transformations)
* [Geta Transformation](/doc/controllers/transformation.md#geta-transformation)
* [Delete Transformation](/doc/controllers/transformation.md#delete-transformation)
* [Get Download Input File](/doc/controllers/transformation.md#get-download-input-file)
* [Download Transformed File](/doc/controllers/transformation.md#download-transformed-file)


# Transformvia File

Transform an API into any of the supported API specification formats by uploading the API specification file.

This endpoint transforms and then uploads the transformed API specification to APIMatic's cloud storage. An ID for the transformation performed is returned as part of the response.

```ts
async transformviaFile(
  contentType: ContentType,
  file: FileWrapper,
  exportFormat: ExportFormats,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transformation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](/doc/models/content-type.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `exportFormat` | [`ExportFormats`](/doc/models/export-formats.md) | Form, Required | The structure contains API specification formats that Transformer can convert to. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Transformation`](/doc/models/transformation.md)

## Example Usage

```ts
const contentType = 'multipart/form-data';
const file = new FileWrapper(fs.createReadStream('dummy_file'));
const exportFormat = 'Swagger10';
try {
  const { result, ...httpResponse } = await transformationController.transformviaFile(contentType, file, exportFormat);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List All Transformations

Get a list of all API transformations performed.

```ts
async listAllTransformations(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transformation[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Transformation[]`](/doc/models/transformation.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await transformationController.listAllTransformations();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Geta Transformation

Get details on a particular Transformation performed via the Transformation endpoints.

```ts
async getaTransformation(
  transformationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Transformation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transformationId` | `string` | Template, Required | The ID of the transformation to fetch. The transformation ID is received in the response of the [Transform Via File ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/transformation/transform-via-file) or [Transform Via URL  ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/transformation/transform-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Transformation`](/doc/models/transformation.md)

## Example Usage

```ts
const transformationId = 'transformation_id6';
try {
  const { result, ...httpResponse } = await transformationController.getaTransformation(transformationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Transformation

Delete a particular Transformation performed for an API via the Transformation endpoints.

```ts
async deleteTransformation(
  transformationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transformationId` | `string` | Template, Required | The ID of the transformation to delete. The transformation ID is received in the response of the [Transform Via File ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/transformation/transform-via-file) or [Transform Via URL](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/transformation/transform-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const transformationId = 'transformation_id6';
try {
  const { result, ...httpResponse } = await transformationController.deleteTransformation(transformationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Download Input File

Download the API Specification file used as input for a particular Transformation performed via the Transformation endpoints.

```ts
async getDownloadInputFile(
  transformationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transformationId` | `string` | Template, Required | The ID of the transformation to download the API specification for. The transformation ID is received in the response of the [Transform Via File ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/transformation/transform-via-file) or [Transform Via URL](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/transformation/transform-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const transformationId = 'transformation_id6';
try {
  const { result, ...httpResponse } = await transformationController.getDownloadInputFile(transformationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Download Transformed File

Download the transformed API specification file transformed via the Transformation endpoints.

```ts
async downloadTransformedFile(
  transformationId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transformationId` | `string` | Template, Required | The ID of transformation received in the response of the [Transform Via File ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/transformation/transform-via-file) or [Transform Via URL  ](https://www.apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/transformation/transform-via-url) calls. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const transformationId = 'transformation_id6';
try {
  const { result, ...httpResponse } = await transformationController.downloadTransformedFile(transformationId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

