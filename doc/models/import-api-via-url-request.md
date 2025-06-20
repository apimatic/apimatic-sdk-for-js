
# Import Api Via Url Request

Contains a url field to allow Apis to be imported via url

*This model accepts additional fields of type unknown.*

## Structure

`ImportApiViaUrlRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | The URL for the API specification file.<br><br>**Note:** This URL should be publicly accessible. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "url": "https://petstore.swagger.io/v2/swagger.json",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

