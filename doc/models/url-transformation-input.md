
# Url Transformation Input

This structure puts together the URL of the file to be transformed, along with the desired export format.

## Structure

`UrlTransformationInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | API Specification URL address |
| `exportFormat` | [`ExportFormats`](/doc/models/export-formats.md) | Required | The structure contains API specification formats that Transformer can convert to. |

## Example (as JSON)

```json
{
  "url": "https://petstore.swagger.io/v2/swagger.json",
  "export_format": "APIMATIC"
}
```

