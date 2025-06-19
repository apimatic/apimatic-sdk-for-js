
# Publish Package Input

*This model accepts additional fields of type unknown.*

## Structure

`PublishPackageInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `packageRepository` | [`PackageRepositories`](../../doc/models/package-repositories.md) | Required | - |
| `template` | [`Platforms`](../../doc/models/platforms.md) | Required | The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in.<br><br>**Default**: `Platforms.CsNetStandardLib` |
| `packageName` | `string` | Required | - |
| `version` | `string` | Required | - |
| `additionalDeploymentInformation` | `unknown` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "packageRepository": "Npm",
  "template": "CS_NET_STANDARD_LIB",
  "packageName": "apimaticcalculatortest",
  "version": "1.0.0",
  "additionalDeploymentInformation": {},
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

