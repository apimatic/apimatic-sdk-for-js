
# Update Templates Package Deployment Information

This structure helps update package deployment details.

*This model accepts additional fields of type unknown.*

## Structure

`UpdateTemplatesPackageDeploymentInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `csNetStandardLib` | [`Csnetstandardlib`](../../doc/models/csnetstandardlib.md) | Required | This structure contains all details that goes into package deployment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "CS_NET_STANDARD_LIB": {
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
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

