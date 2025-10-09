# API Pruning

```ts
const apiPruningController = new ApiPruningController(client);
```

## Class Name

`ApiPruningController`


# Prune API

Prune specific features from an API by uploading the API specification file and the set of features to prune. Currently, only OpenAPI 3.x specification files are supported for pruning. The features that can be pruned include API Merging, Pagination, Webhooks, Callbacks, Multiple Auth Schemes, OAuth2 and number of endpoints.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while pruning the API using this endpoint. When specifying Metadata, the uploaded file will be a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async pruneApi(
  file: FileWrapper,
  restrictedFeatures: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper` | Form, Required | The OpenAPI 3.x specification file to prune (JSON or YAML). |
| `restrictedFeatures` | `string` | Form, Required | A JSON-encoded object describing which features to prune. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `NodeJS.ReadableStream | Blob`.

## Example Usage

```ts
const file = new FileWrapper(fs.createReadStream('dummy_file'));

const restrictedFeatures = '{\n  "features": ["Pagination", "Webhooks", "Merging", "Callbacks", "MultipleAuthSchemes", "OAuth2"],\n  "exceededEndpointLimit": false,\n  "endpointsToRemove": 10\n}\n';

try {
  const { result, ...httpResponse } = await apiPruningController.pruneApi(
    file,
    restrictedFeatures
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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| 401 | Unauthorized | [`UnauthorizedResponseError`](../../doc/models/unauthorized-response-error.md) |
| 403 | Subscription Issue | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| 500 | Internal Server Error | [`InternalServerErrorResponseError`](../../doc/models/internal-server-error-response-error.md) |

