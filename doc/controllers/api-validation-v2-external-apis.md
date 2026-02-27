# API Validation V2 -External APIs

```ts
const apiValidationV2ExternalApisController = new ApiValidationV2ExternalApisController(client);
```

## Class Name

`ApiValidationV2ExternalApisController`

## Methods

* [Validate API Via File - V2](../../doc/controllers/api-validation-v2-external-apis.md#validate-api-via-file---v2)
* [Validate API Via URL - V2](../../doc/controllers/api-validation-v2-external-apis.md#validate-api-via-url---v2)


# Validate API Via File - V2

Validate an API by uploading the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while validating the API using this endpoint. When specifying Metadata, the uploaded file will be a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async validateApiViaFileV2(
  contentType: ContentType,
  file: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ValidateApiResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentType`](../../doc/models/content-type.md) | Header, Required | - |
| `file` | `FileWrapper` | Form, Required | The API specification file.<br>The type of the specification file should be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ValidateApiResult`](../../doc/models/validate-api-result.md).

## Example Usage

```ts
const contentType = ContentType.EnumMultipartformdata;

const file = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const response = await apiValidationV2ExternalApisController.validateApiViaFileV2(
    contentType,
    file
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
  "validation": {
    "isSuccess": true,
    "blocking": [],
    "errors": [],
    "warnings": [],
    "information": []
  },
  "linting": {
    "isSuccess": false,
    "blocking": [],
    "errors": [
      {
        "message": "The 'x-extension-ver' property is required in the 'info' object.",
        "lineInfo": {
          "startLineNumber": 3,
          "startLinePosition": 3,
          "endLineNumber": 3,
          "endLinePosition": 4
        },
        "jsonReferencePath": "#/info",
        "fileReference": "openapi.yaml",
        "metadata": {
          "missing Property": "x-extension-ver",
          "target": "$.info"
        },
        "ruleDocumentationReference": "https://docs.apimatic.io/rulesets/custom-rules-linting/required-property-exists/"
      }
    ],
    "warnings": [
      {
        "message": "Unsupported extension detected.",
        "lineInfo": {
          "startLineNumber": 10,
          "startLinePosition": 3,
          "endLineNumber": 10,
          "endLinePosition": 11
        },
        "jsonReferencePath": "#/info",
        "fileReference": "openapi.yaml",
        "metadata": {
          "unsupported Extension": "x-api-id"
        },
        "ruleDocumentationReference": "https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/supported-vendor-extension/"
      }
    ],
    "information": [
      {
        "message": "Schema object description is missing.",
        "lineInfo": {
          "startLineNumber": 81,
          "startLinePosition": 11,
          "endLineNumber": 81,
          "endLinePosition": 12
        },
        "jsonReferencePath": "#/components/schemas/ProblemResponse/properties/type",
        "fileReference": "openapi.yaml",
        "metadata": {},
        "ruleDocumentationReference": "https://docs.apimatic.io/rulesets/openapi-v3-docsgen-linting/schema-description-exists/",
        "additionalReferences": [
          "https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#specification-extensions"
        ]
      }
    ]
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


# Validate API Via URL - V2

Validate an API by providing the URL of the API specification file.

You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while validating the API using this endpoint. When specifying Metadata, the URL provided will be that of a zip file containing the API specification file and the `APIMATIC-META` json file.

```ts
async validateApiViaUrlV2(
  url: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ValidateApiResult>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Query, Required | The URL for the API specification file.<br><br>**Note:** This URL should be publicly accessible. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ValidateApiResult`](../../doc/models/validate-api-result.md).

## Example Usage

```ts
const url = 'https://petstore.swagger.io/v2/swagger.json';

try {
  const response = await apiValidationV2ExternalApisController.validateApiViaUrlV2(url);

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
  "validation": {
    "isSuccess": true,
    "blocking": [],
    "errors": [],
    "warnings": [],
    "information": []
  },
  "linting": {
    "isSuccess": false,
    "blocking": [],
    "errors": [
      {
        "message": "The 'x-extension-ver' property is required in the 'info' object.",
        "lineInfo": {
          "startLineNumber": 3,
          "startLinePosition": 3,
          "endLineNumber": 3,
          "endLinePosition": 4
        },
        "jsonReferencePath": "#/info",
        "fileReference": "openapi.yaml",
        "metadata": {
          "missing Property": "x-extension-ver",
          "target": "$.info"
        },
        "ruleDocumentationReference": "https://docs.apimatic.io/rulesets/custom-rules-linting/required-property-exists/"
      }
    ],
    "warnings": [
      {
        "message": "Unsupported extension detected.",
        "lineInfo": {
          "startLineNumber": 10,
          "startLinePosition": 3,
          "endLineNumber": 10,
          "endLinePosition": 11
        },
        "jsonReferencePath": "#/info",
        "fileReference": "openapi.yaml",
        "metadata": {
          "unsupported Extension": "x-api-id"
        },
        "ruleDocumentationReference": "https://docs.apimatic.io/rulesets/openapi-v3-apimatic-linting/supported-vendor-extension/"
      }
    ],
    "information": [
      {
        "message": "Schema object description is missing.",
        "lineInfo": {
          "startLineNumber": 81,
          "startLinePosition": 11,
          "endLineNumber": 81,
          "endLinePosition": 12
        },
        "jsonReferencePath": "#/components/schemas/ProblemResponse/properties/type",
        "fileReference": "openapi.yaml",
        "metadata": {},
        "ruleDocumentationReference": "https://docs.apimatic.io/rulesets/openapi-v3-docsgen-linting/schema-description-exists/"
      }
    ]
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

