
# Update Package Deployment Information

This structure is used to update package deployment details.

## Structure

`UpdatePackageDeploymentInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templatesPackageDeploymentInformation` | [`UpdateTemplatesPackageDeploymentInformation`](/doc/models/update-templates-package-deployment-information.md) | Required | Encapsulates Package Deployment Details |

## Example (as JSON)

```json
{
  "templatesPackageDeploymentInformation": {
    "CS_NET_STANDARD_LIB": {
      "packageRepository": "NuGet",
      "packageName": "myPackage",
      "version": "1.1.1",
      "additionalDeploymentInformation": {}
    }
  }
}
```

