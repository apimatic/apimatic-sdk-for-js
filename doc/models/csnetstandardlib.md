
# Csnetstandardlib

This structure contains all details that goes into package deployment.

*This model accepts additional fields of type unknown.*

## Structure

`Csnetstandardlib`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | [`Id \| undefined`](../../doc/models/id.md) | Optional | Unique package identifier<br><br>**Default**: `Id.Enum5Dcd2B5893C3E31A206F30C4` |
| `packageRepository` | `string` | Required | Package Repository as per platform |
| `packageName` | `string` | Required | Package Name |
| `version` | `string` | Required | - |
| `additionalDeploymentInformation` | `unknown` | Required | Any additional platform specific deployment detail |
| `link` | [`Link \| undefined`](../../doc/models/link.md) | Optional | Link of deployed package<br><br>**Default**: `Link.EnumHttpswwwnugetorgpackagesmyPackage111` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "id": "5dcd2b5893c3e31a206f30c4",
  "packageRepository": "NuGet",
  "packageName": "myPackage",
  "version": "1.1.1",
  "additionalDeploymentInformation": {},
  "link": "https://www.nuget.org/packages/myPackage/1.1.1",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

