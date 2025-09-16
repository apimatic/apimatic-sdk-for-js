
# Line Info

*This model accepts additional fields of type unknown.*

## Structure

`LineInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startLineNumber` | `number` | Required | - |
| `startLinePosition` | `number` | Required | - |
| `endLineNumber` | `number` | Required | - |
| `endLinePosition` | `number` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "startLineNumber": 146,
  "startLinePosition": 46,
  "endLineNumber": 166,
  "endLinePosition": 234,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

