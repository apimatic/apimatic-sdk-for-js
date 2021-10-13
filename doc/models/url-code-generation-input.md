
# Url Code Generation Input

## Structure

`UrlCodeGenerationInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | - |
| `template` | [`Platforms`](/doc/models/platforms.md) | Required | The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in. |

## Example (as JSON)

```json
{
  "url": "http://petstore.swagger.io/v2/swagger.json",
  "template": "CS_NET_STANDARD_LIB"
}
```

