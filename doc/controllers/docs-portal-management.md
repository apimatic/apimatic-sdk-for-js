# Docs Portal Management

```ts
const docsPortalManagementController = new DocsPortalManagementController(client);
```

## Class Name

`DocsPortalManagementController`

## Methods

* [Publish Hosted Portal](../../doc/controllers/docs-portal-management.md#publish-hosted-portal)
* [Publish Embedded Portal](../../doc/controllers/docs-portal-management.md#publish-embedded-portal)
* [Generate on-Prem Portal via API Entity](../../doc/controllers/docs-portal-management.md#generate-on-prem-portal-via-api-entity)
* [Generate on-Prem Portal via Build Input](../../doc/controllers/docs-portal-management.md#generate-on-prem-portal-via-build-input)
* [Generate Build Input for Unpublished Portal](../../doc/controllers/docs-portal-management.md#generate-build-input-for-unpublished-portal)
* [Generate Build Input for Published Portal](../../doc/controllers/docs-portal-management.md#generate-build-input-for-published-portal)
* [Unpublish Portal](../../doc/controllers/docs-portal-management.md#unpublish-portal)


# Publish Hosted Portal

Publish artifacts for a Hosted Portal.

This endpoint regenerates all the artifacts for a hosted portal and uploads them to APIMatic's cloud storage, from where the Portal fetches them. These artifacts include:

1. SDKs
2. Docs
3. API Specification files

Call this endpoint to update your Hosted Portal after you update an API Entity via any of the Import API Endpoints.

__**Note: If you have an embedded portal against the same API Entity, artifacts for that portal will get updated as well.**__

```ts
async publishHostedPortal(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to update the portal artifacts for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiEntityId = '5f87f8ab9615d38a2eb990ca';

try {
  const response = await docsPortalManagementController.publishHostedPortal(apiEntityId);

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


# Publish Embedded Portal

Publish artifacts for an Embedded Portal and get the Portal Embed script.

This endpoint regenerates all the artifacts for an embedded portal and uploads them to APIMatic's cloud storage, from where the Portal fetches them. These artifacts include:

1. SDKs
2. Docs
3. API Specification files

Call this endpoint to update your Embedded Portal after you update an API Entity via any of the Import API Endpoints. This endpoint returns the Portal Embed script in the response.

__**Note: If you have a hosted portal against the same API Entity, artifacts for that portal will get updated as well.**__

```ts
async publishEmbeddedPortal(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to update the portal artifacts for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiEntityId = '5f87f8ab9615d38a2eb990ca';

try {
  const response = await docsPortalManagementController.publishEmbeddedPortal(apiEntityId);

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


# Generate on-Prem Portal via API Entity

Generate an On-premise Documentation Portal for an API Entity. This endpoint generates all artifacts for the Portal and packages them together into a zip file along with the required HTML, CSS and JS files. The generated artifacts include:

1. SDKs
2. Docs
3. API Specification files

The endpoint returns a zip file that contains a static Site and can be hosted on any Web Server.

```ts
async generateOnPremPortalViaApiEntity(
  apiEntityId: string,
  accept: Accept4,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to generate the Portal for. |
| `accept` | [`Accept4`](../../doc/models/accept-4.md) | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiEntityId = '5f87f8ab9615d38a2eb990ca';

const accept = Accept4.EnumApplicationzip;

try {
  const response = await docsPortalManagementController.generateOnPremPortalViaApiEntity(
    apiEntityId,
    accept
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


# Generate on-Prem Portal via Build Input

Generate an On-premise Documentation Portal by uploading a Portal Build Input. This endpoint generates all artifacts for the Portal and packages them together into a zip file along with the required HTML, CSS and JS files. The generated artifacts include:

1. SDKs
2. Docs
3. API Specification files

The endpoint returns a zip file that contains a static Site and can be hosted on any Web Server.

```ts
async generateOnPremPortalViaBuildInput(
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
| `file` | `FileWrapper` | Form, Required | The input file to the Portal Generator. Must contain the build file. |
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
  const response = await docsPortalManagementController.generateOnPremPortalViaBuildInput(
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
| 403 | Subscription Issue | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| 422 | Unprocessable Entity - Contains error.zip for build issues | `ApiError` |
| 500 | Internal Server Error | [`InternalServerErrorResponseError`](../../doc/models/internal-server-error-response-error.md) |


# Generate Build Input for Unpublished Portal

Generate Build Input for a Portal created using the UI workflow.  The Build Input will correspond to the draft version of the Portal i.e. unpublished changes will also be included.
This can be used to create a backup of your Portal or to migrate from the UI workflow to the docs as code workflow.

```ts
async generateBuildInputForUnpublishedPortal(
  apiGroupId: string,
  apiEntities?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown | undefined>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiGroupId` | `string` | Template, Required | - |
| `apiEntities` | `string[] \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const apiGroupId = 'apiGroupId8';

try {
  const response = await docsPortalManagementController.generateBuildInputForUnpublishedPortal(apiGroupId);

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


# Generate Build Input for Published Portal

Generate Build Input for a Portal created using the UI workflow.  The Build Input will correspond to the published version of the Portal i.e. unpublished changes will not be inlcuded.
This can be used to create a backup of your Portal or to migrate from the UI workflow to the docs as code workflow.

```ts
async generateBuildInputForPublishedPortal(
  apiGroupId: string,
  apiEntities?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown | undefined>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiGroupId` | `string` | Template, Required | - |
| `apiEntities` | `string[] \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `unknown`.

## Example Usage

```ts
const apiGroupId = 'apiGroupId8';

try {
  const response = await docsPortalManagementController.generateBuildInputForPublishedPortal(apiGroupId);

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


# Unpublish Portal

Unpublish a Hosted or Embedded Portal published for an API Entity. Calling this endpoint deletes all the published artifacts for a Portal from APIMatic's cloud storage.

In case of a Hosted Portal, to completely remove the Portal, this endpoint needs to be called against all API versions that the Portal hosts.

In case of an Embedded Portal, to completely remove the Portal, the user needs to manually remove the Portal Embed script from the embedding site.

```ts
async unpublishPortal(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [Authorization](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to unpublish the Portal artifacts for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiEntityId = '5f87f8ab9615d38a2eb990ca';

try {
  const response = await docsPortalManagementController.unpublishPortal(apiEntityId);

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

