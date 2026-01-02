
# Validation Entry

*This model accepts additional fields of type unknown.*

## Structure

`ValidationEntry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string` | Required | - |
| `lineInfo` | [`LineInfo \| undefined`](../../doc/models/line-info.md) | Optional | - |
| `jsonReferencePath` | `string \| undefined` | Optional | - |
| `fileReference` | `string \| undefined` | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `ruleDocumentationReference` | `string \| undefined` | Optional | - |
| `additionalReferences` | `string[] \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "message": "message0",
  "lineInfo": {
    "startLineNumber": 162,
    "startLinePosition": 6,
    "endLineNumber": 142,
    "endLinePosition": 74,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "jsonReferencePath": "jsonReferencePath6",
  "fileReference": "fileReference2",
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4"
  },
  "ruleDocumentationReference": "ruleDocumentationReference0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

