
# Validation Exception

Validation exception contains information, warnings, messages and errors.

*This model accepts additional fields of type unknown.*

## Structure

`ValidationException`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string` | Required | - |
| `summary` | `string \| undefined` | Optional | Validation Summary of the API in case validation failed |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "reason": "Import Failed",
  "summary": "summary2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

