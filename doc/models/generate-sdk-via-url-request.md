
# Generate Sdk Via Url Request

*This model accepts additional fields of type unknown.*

## Structure

`GenerateSdkViaUrlRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | The URL for the API specification file.<br><br>**Note:** This URL should be publicly accessible. |
| `template` | [`Platforms`](../../doc/models/platforms.md) | Required | The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in.<br><br>**Default**: `Platforms.CsNetStandardLib` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "url": "http://petstore.swagger.io/v2/swagger.json",
  "template": "CS_NET_STANDARD_LIB",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

