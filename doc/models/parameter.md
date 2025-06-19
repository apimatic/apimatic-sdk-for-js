
# Parameter

Parameters are options passed with the endpoint

*This model accepts additional fields of type unknown.*

## Structure

`Parameter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `optional` | `boolean` | Required | If parameter is optional |
| `type` | `string` | Required | Type of Parameter |
| `constant` | `boolean` | Required | IF Parameter is constant |
| `isArray` | `boolean` | Required | If Param is collected as array |
| `isStream` | `boolean` | Required | - |
| `isAttribute` | `boolean` | Required | - |
| `isMap` | `boolean` | Required | - |
| `attributes` | [`Attributes`](../../doc/models/attributes.md) | Required | The structure contain attribute details of a parameter type. |
| `nullable` | `boolean` | Required | If Parameter is nullable |
| `id` | `string` | Required | Unique Parameter identifier |
| `name` | `string` | Required | Parameter Name |
| `description` | `string` | Required | Parameter Description |
| `defaultValue` | `string` | Required | Default Values of a Parameter |
| `paramFormat` | `string` | Required | Specify Parameter Format |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "optional": false,
  "type": "test\\r\\nstringEncoding",
  "constant": false,
  "isArray": false,
  "isStream": false,
  "isAttribute": false,
  "isMap": false,
  "attributes": {
    "id": "5be1603083b41d0b50110551",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "nullable": false,
  "id": "5a4e8675b724bb198c289f7a",
  "name": "body",
  "description": "description8",
  "defaultValue": "defaultValue4",
  "ParamFormat": "Body",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

