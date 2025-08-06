
# Bad Request Response Sdk Error

Standard JSON error response for bad requests

*This model accepts additional fields of type unknown.*

## Structure

`BadRequestResponseSdkError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | Error message describing the bad request |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "message": "Bad Request",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

