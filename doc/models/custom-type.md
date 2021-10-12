
# Custom Type

This structure helps creates a new complex model type.

## Structure

`CustomType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique Type Identifier |
| `apiId` | `string` | Required | Unique  API Entity identifier |
| `name` | `string` | Required | Custom Type Name |
| `baseType` | `string` | Required | Data Format |
| `implementationType` | [`ImplementationType`](/doc/models/implementation-type.md) | Required | How the type is supposed to be implemented |
| `fields` | [`Field[]`](/doc/models/field.md) | Required | Type Fields |

## Example (as JSON)

```json
{
  "id": "5a4e8675b724bb198c289ff6",
  "apiId": "5a4e8675b724bb198c289fe9",
  "name": "Job",
  "baseType": null,
  "implementationType": "Structure",
  "fields": []
}
```

