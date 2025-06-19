
# Transform Via Url Request

This structure puts together the URL of the file to be transformed, along with the desired export format.

*This model accepts additional fields of type unknown.*

## Structure

`TransformViaUrlRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | The URL for the API specification file.<br><br>**Note:** This URL should be publicly accessible. |
| `exportFormat` | [`ExportFormats`](../../doc/models/export-formats.md) | Required | The structure contains API specification formats that Transformer can convert to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "url": "https://petstore.swagger.io/v2/swagger.json",
  "export_format": "APIMATIC",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

