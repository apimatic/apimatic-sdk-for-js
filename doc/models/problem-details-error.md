
# Problem Details Error

*This model accepts additional fields of type unknown.*

## Structure

`ProblemDetailsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `status` | `number \| undefined` | Optional | - |
| `detail` | `string \| undefined` | Optional | - |
| `instance` | `string \| undefined` | Optional | - |
| `errors` | `Record<string, unknown> \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
  "title": "One or more validation errors occurred.",
  "status": 400,
  "detail": "One or more validation failures have occurred",
  "instance": "/api/portal",
  "errors": {
    "": [
      "Build file not found"
    ]
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

