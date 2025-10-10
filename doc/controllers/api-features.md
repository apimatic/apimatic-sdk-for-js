# API Features

```ts
const apiFeaturesController = new ApiFeaturesController(client);
```

## Class Name

`ApiFeaturesController`


# Strip Features

Strip specific features from an API by uploading the API specification file and the set of features to strip. Currently, only OpenAPI 3.x specification files are supported for stripping. The features that can be stripped include API Merging, Pagination, Webhooks, Callbacks, Multiple Auth Schemes, OAuth2 and number of endpoints.

```ts
async stripFeatures(
  file: FileWrapper,
  featuresToRemove: FeaturesToRemove,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper` | Form, Required | The OpenAPI specification file to strip.<br>Supported types: JSON, YAML, or ZIP. |
| `featuresToRemove` | [`FeaturesToRemove`](../../doc/models/features-to-remove.md) | Form, Required | Configuration for specifying which features to strip from API Specification. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `NodeJS.ReadableStream | Blob`.

## Example Usage

```ts
const file = new FileWrapper(fs.createReadStream('dummy_file'));

const featuresToRemove: FeaturesToRemove = {
  features: [
    RemovableFeature.Pagination,
    RemovableFeature.Webhooks,
    RemovableFeature.Merging,
    RemovableFeature.Callbacks,
    RemovableFeature.MultipleAuthSchemes,
    RemovableFeature.Oauth2
  ],
  endpointsToKeep: 15,
};

try {
  const { result, ...httpResponse } = await apiFeaturesController.stripFeatures(
    file,
    featuresToRemove
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

