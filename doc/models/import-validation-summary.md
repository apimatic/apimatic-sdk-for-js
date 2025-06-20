
# Import Validation Summary

*This model accepts additional fields of type unknown.*

## Structure

`ImportValidationSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean` | Required | - |
| `errors` | `string[]` | Required | - |
| `warnings` | `string[]` | Required | - |
| `messages` | `string[]` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "success": true,
  "errors": [],
  "warnings": [],
  "messages": [
    "One or more elements in the API specification has a missing description field."
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

