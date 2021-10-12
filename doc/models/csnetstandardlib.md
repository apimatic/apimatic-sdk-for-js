
# CSNETSTANDARDLIB

This structure contains all details that goes into package deployment.

## Structure

`CSNETSTANDARDLIB`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional, Constant | Unique package identifier<br>**Default**: `'5dcd2b5893c3e31a206f30c4'`<br>*Default: `'5dcd2b5893c3e31a206f30c4'`* |
| `packageRepository` | `string` | Required | Package Repository as per platform |
| `packageName` | `string` | Required | Package Name |
| `version` | `string` | Required | - |
| `additionalDeploymentInformation` | `unknown` | Required | Any additional platform specific deployment detail |
| `link` | `string \| undefined` | Optional, Constant | Link of deployed package<br>**Default**: `'https://www.nuget.org/packages/myPackage/1.1.1'`<br>*Default: `'https://www.nuget.org/packages/myPackage/1.1.1'`* |

## Example (as JSON)

```json
{
  "packageRepository": "NuGet",
  "packageName": "myPackage",
  "version": "1.1.1",
  "additionalDeploymentInformation": {}
}
```

