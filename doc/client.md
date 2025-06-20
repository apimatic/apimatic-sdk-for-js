
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| timeout | `number` | Timeout for API calls.<br>*Default*: `30000` |
| httpClientOptions | [`Partial<HttpClientOptions>`](../doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](../doc/partial-logging-options.md) | Logging Configuration to enable logging |
| customHeaderAuthenticationCredentials | [`CustomHeaderAuthenticationCredentials`](auth/custom-header-signature.md) | The credential object for customHeaderAuthentication |

The API client can be initialized as follows:

```ts
const client = new Client({
  customHeaderAuthenticationCredentials: {
    'Authorization': 'Authorization'
  },
  timeout: 30000,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

## Apimatic API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| apIsManagement | Gets ApIsManagementController |
| codeGenerationImportedApIs | Gets CodeGenerationImportedApIsController |
| codeGenerationExternalApIs | Gets CodeGenerationExternalApIsController |
| transformation | Gets TransformationController |
| docsPortalManagement | Gets DocsPortalManagementController |
| apiValidationImportedApIs | Gets ApiValidationImportedApIsController |
| apiValidationExternalApIs | Gets ApiValidationExternalApIsController |
| docsPortalGenerationAsync | Gets DocsPortalGenerationAsyncController |

