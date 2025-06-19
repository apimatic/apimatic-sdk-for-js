
# Attributes

The structure contain attribute details of a parameter type.

*This model accepts additional fields of type unknown.*

## Structure

`Attributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique Attribute Identifier |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "id": "5be1603083b41d0b50110551",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

