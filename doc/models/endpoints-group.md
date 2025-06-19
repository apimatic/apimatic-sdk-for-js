
# Endpoints Group

This structure encapsulates all the attributes of an API Endpoints Group.

*This model accepts additional fields of type unknown.*

## Structure

`EndpointsGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `description` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name": "Petstore",
  "description": "Everything about your pets",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

