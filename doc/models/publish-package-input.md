
# Publish Package Input

## Structure

`PublishPackageInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `packageRepository` | [`PackageRepositories`](/doc/models/package-repositories.md) | Required | - |
| `template` | [`Platforms`](/doc/models/platforms.md) | Required | - |
| `packageName` | `string` | Required | - |
| `version` | `string` | Required | - |
| `additionalDeploymentInformation` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "packageRepository": "Npm",
  "template": "NODE_JAVASCRIPT_LIB",
  "packageName": "apimaticcalculatortest",
  "version": "1.0.0",
  "additionalDeploymentInformation": {}
}
```

