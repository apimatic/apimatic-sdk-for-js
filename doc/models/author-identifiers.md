
# Author Identifiers

*This model accepts additional fields of type unknown.*

## Structure

`AuthorIdentifiers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | - |
| `userName` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "Email": "shayanjalil@gmail.com",
  "UserName": "shayanjalil",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

