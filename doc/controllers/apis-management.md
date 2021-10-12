# APIs Management

```ts
const apisManagementController = new ApisManagementController(client);
```

## Class Name

`ApisManagementController`

## Methods

* [Import API Via URL](/doc/controllers/apis-management.md#import-api-via-url)
* [Import API Via File](/doc/controllers/apis-management.md#import-api-via-file)
* [Import New API Version Via URL](/doc/controllers/apis-management.md#import-new-api-version-via-url)
* [Import New API Version Via File](/doc/controllers/apis-management.md#import-new-api-version-via-file)
* [Inplace API Import Via URL](/doc/controllers/apis-management.md#inplace-api-import-via-url)
* [Inplace API Import Via File](/doc/controllers/apis-management.md#inplace-api-import-via-file)
* [Fetch API Entity](/doc/controllers/apis-management.md#fetch-api-entity)
* [Fetch Complete API Entity](/doc/controllers/apis-management.md#fetch-complete-api-entity)
* [Download API Specification](/doc/controllers/apis-management.md#download-api-specification)


# Import API Via URL

Import an API into the APIMatic Dashboard by providing the URL of the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API using this endpoint. When specifying Metadata, the URL provided will be that of a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async importAPIViaURL(
  body: ImportApiViaUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ImportApiViaUrlRequest`](/doc/models/import-api-via-url-request.md) | Body, Required | Request Body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiEntity`](/doc/models/api-entity.md)

## Example Usage

```ts
const body: ImportApiViaUrlRequest = {
  url: 'https://petstore.swagger.io/v2/swagger.json',
};

const contentType = null;
try {
  const { result, ...httpResponse } = await apisManagementController.importAPIViaURL(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 412 | Precondition Failed | `ApiError` |
| 422 | Unprocessable Entity | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Import API Via File

Import an API into the APIMatic Dashboard by uploading the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API using this endpoint. When specifying Metadata, the uploaded file will be a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async importAPIViaFile(
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiEntity`](/doc/models/api-entity.md)

## Example Usage

```ts
const file = new FileWrapper(fs.createReadStream('dummy_file'));
try {
  const { result, ...httpResponse } = await apisManagementController.importAPIViaFile(file);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 412 | Precondition Failed | `ApiError` |
| 422 | Unprocessable Entity | `ApiError` |
| 500 | Internal Server Error | `ApiError` |


# Import New API Version Via URL

Import a new version for an API, against an existing API Group, by providing the URL of the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API version using this endpoint. When specifying Metadata, the URL provided will be that of a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async importNewAPIVersionViaURL(
  apiGroupId: string,
  body: ImportApiVersionViaUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiGroupId` | `string` | Template, Required | The ID of the API Group for which to import a new API version. |
| `body` | [`ImportApiVersionViaUrlRequest`](/doc/models/import-api-version-via-url-request.md) | Body, Required | Request Body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiEntity`](/doc/models/api-entity.md)

## Example Usage

```ts
const apiGroupId = '5c9de181dc6209221416f250';
const contentType = null;
const accept = null;
const body: ImportApiVersionViaUrlRequest = {
  versionOverride: '1.2.3',
  url: 'https://petstore.swagger.io/v2/swagger.json',
};

try {
  const { result, ...httpResponse } = await apisManagementController.importNewAPIVersionViaURL(apiGroupId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Import New API Version Via File

Import a new version for an API, against an existing API Group, by uploading the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API version using this endpoint. When specifying Metadata, the uploaded file will be a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async importNewAPIVersionViaFile(
  apiGroupId: string,
  versionOverride: string,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiGroupId` | `string` | Template, Required | The ID of the API Group for which to import a new API version. |
| `versionOverride` | `string` | Form, Required | The version number with which the new API version will be imported. This version number will override the version specified in the API specification file.<br>APIMatic recommends versioning the API with the [versioning scheme](https://docs.apimatic.io/define-apis/basic-settings/#version) documented in the docs. |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiEntity`](/doc/models/api-entity.md)

## Example Usage

```ts
const apiGroupId = 'api_group_id6';
const versionOverride = 'version_override2';
const file = new FileWrapper(fs.createReadStream('dummy_file'));
const accept = null;
try {
  const { result, ...httpResponse } = await apisManagementController.importNewAPIVersionViaFile(apiGroupId, versionOverride, file);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Inplace API Import Via URL

Replace an API version of an API Group, by providing the URL of the API specification file that will replace the current version.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API version using this endpoint. When specifying Metadata, the URL provided will be that of a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async inplaceAPIImportViaURL(
  apiEntityId: string,
  body: InplaceImportApiViaUrlRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to replace. |
| `body` | [`InplaceImportApiViaUrlRequest`](/doc/models/inplace-import-api-via-url-request.md) | Body, Required | Request Body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';
const contentType = null;
const body: InplaceImportApiViaUrlRequest = {
  url: 'https://petstore.swagger.io/v2/swagger.json',
};

try {
  const { result, ...httpResponse } = await apisManagementController.inplaceAPIImportViaURL(apiEntityId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Inplace API Import Via File

Replace an API version of an API Group, by uploading the API specification file that will replace the current version.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while importing the API version using this endpoint. When specifying Metadata, the uploaded file will be a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async inplaceAPIImportViaFile(
  apiEntityId: string,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to replace. |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';
const file = new FileWrapper(fs.createReadStream('dummy_file'));
const accept = null;
try {
  const { result, ...httpResponse } = await apisManagementController.inplaceAPIImportViaFile(apiEntityId, file);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch API Entity

Fetch an API Entity.

```ts
async fetchAPIEntity(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntity>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to fetch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiEntity`](/doc/models/api-entity.md)

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';
try {
  const { result, ...httpResponse } = await apisManagementController.fetchAPIEntity(apiEntityId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Complete API Entity

Fetch detailed API Entity.

```ts
async fetchCompleteAPIEntity(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiEntityDetailed>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to fetch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiEntityDetailed`](/doc/models/api-entity-detailed.md)

## Example Usage

```ts
const accept = null;
const apiEntityId = 'api_entity_id4';
try {
  const { result, ...httpResponse } = await apisManagementController.fetchCompleteAPIEntity(apiEntityId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Download API Specification

Download the API Specification file for a an API Version in any of the API Specification formats supported by APIMatic.

```ts
async downloadAPISpecification(
  apiEntityId: string,
  format: ExportFormats,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to download. |
| `format` | [`ExportFormats`](/doc/models/export-formats.md) | Query, Required | The format in which to download the API.<br>The format can be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';
const format = 'WADL2009';
try {
  const { result, ...httpResponse } = await apisManagementController.downloadAPISpecification(apiEntityId, format);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

