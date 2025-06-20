
# Unauthorized Response Error

*This model accepts additional fields of type unknown.*

## Structure

`UnauthorizedResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "message": "Authorization has been denied for this request.",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

