
# Sdk Generation Status Response

## Structure

`SdkGenerationStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status`](../../doc/models/status.md) | Required | - |
| `errors` | `Record<string, unknown> \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "InProgress",
  "errors": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

