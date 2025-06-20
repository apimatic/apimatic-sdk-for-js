
# Auth Scope

*This model accepts additional fields of type unknown.*

## Structure

`AuthScope`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Scope Id |
| `name` | `string` | Required | Scope Name |
| `value` | `string` | Required | Scope Value |
| `description` | `string` | Required | Scope Description |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "id": "5be0a21a83b41d0d8cdcd81d",
  "name": "readpets",
  "value": "read:pets",
  "description": "read your pets",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

