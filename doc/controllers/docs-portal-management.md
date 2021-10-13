# Docs Portal Management

```ts
const docsPortalManagementController = new DocsPortalManagementController(client);
```

## Class Name

`DocsPortalManagementController`

## Methods

* [Publish Embedded Portal](/doc/controllers/docs-portal-management.md#publish-embedded-portal)
* [Publish Hosted Portal](/doc/controllers/docs-portal-management.md#publish-hosted-portal)
* [Generate On-Prem Portal](/doc/controllers/docs-portal-management.md#generate-on-prem-portal)
* [Unpublish Portal](/doc/controllers/docs-portal-management.md#unpublish-portal)


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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to update the portal artifacts for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const apiEntityId = '5f87f8ab9615d38a2eb990ca';
try {
  const { result, ...httpResponse } = await docsPortalManagementController.publishEmbeddedPortal(apiEntityId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to update the portal artifacts for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const apiEntityId = '5f87f8ab9615d38a2eb990ca';
try {
  const { result, ...httpResponse } = await docsPortalManagementController.publishHostedPortal(apiEntityId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate On-Prem Portal

Generate an On-premise Documentation Portal for an API Entity. This endpoint generates all artifacts for the Portal and packages them together into a zip file along with the required HTML, CSS and JS files. The generated artifacts include:

1. SDKs
2. Docs
3. API Specification files

The endpoint returns a zip file that contains a static Site and can be hosted on any Web Server.

```ts
async generateOnPremPortal(
  apiEntityId: string,
  accept: Accept1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to generate the Portal for. |
| `accept` | [`Accept1`](/doc/models/accept-1.md) | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const apiEntityId = '5f87f8ab9615d38a2eb990ca';
const accept = 'application/zip';
try {
  const { result, ...httpResponse } = await docsPortalManagementController.generateOnPremPortal(apiEntityId, accept);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
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

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | The ID of the API Entity to unpublish the Portal artifacts for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const apiEntityId = '5f87f8ab9615d38a2eb990ca';
try {
  const { result, ...httpResponse } = await docsPortalManagementController.unpublishPortal(apiEntityId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

