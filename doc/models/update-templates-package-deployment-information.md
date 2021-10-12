
# Update Templates Package Deployment Information

This structure helps update package deployment details.

## Structure

`UpdateTemplatesPackageDeploymentInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cSNETSTANDARDLIB` | [`CSNETSTANDARDLIB`](/doc/models/csnetstandardlib.md) | Required | Package Deployment Details |

## Example (as JSON)

```json
{
  "CS_NET_STANDARD_LIB": {
    "packageRepository": "NuGet",
    "packageName": "myPackage",
    "version": "1.1.1",
    "additionalDeploymentInformation": {}
  }
}
```

