
# Transform Via Url Request

This structure puts together the URL of the file to be transformed, along with the desired export format.

## Structure

`TransformViaUrlRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | The URL for the API specification file.<br><br>**Note:** This URL should be publicly accessible. |
| `exportFormat` | [`ExportFormats`](/doc/models/export-formats.md) | Required | The desired API specification format for the transformation. <br>The format can be any of the [supported formats](https://docs.apimatic.io/api-transformer/overview-transformer#supported-input-formats). |

## Example (as JSON)

```json
{
  "url": "https://petstore.swagger.io/v2/swagger.json",
  "export_format": "Swagger20"
}
```

