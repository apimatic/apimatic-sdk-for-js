
# Import New Version

This structure contains details of importing a new API Version

## Structure

`ImportNewVersion`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `versionOverride` | `string` | Required | Version to be overridden |
| `url` | `string` | Required | URL of new API Spec |

## Example (as JSON)

```json
{
  "version_override": "1.2.3",
  "url": "https://petstore.swagger.io/v2/swagger.json"
}
```

