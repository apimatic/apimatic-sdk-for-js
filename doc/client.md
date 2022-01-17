
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `authorization` | `string` |  |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  authorization: 'X-Auth-Key {x-auth-key}',
})
```

## Apimatic API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| apisManagement | Gets ApisManagementController |
| codeGenerationImportedApis | Gets CodeGenerationImportedApisController |
| codeGenerationExternalApis | Gets CodeGenerationExternalApisController |
| transformation | Gets TransformationController |
| docsPortalManagement | Gets DocsPortalManagementController |
| aPIValidationImportedApis | Gets APIValidationImportedApisController |
| aPIValidationExternalApis | Gets APIValidationExternalApisController |
| packageDeployment | Gets PackageDeploymentController |

