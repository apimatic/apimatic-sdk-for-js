
# Input Parameter

This structure helps specify details of an input parameter.

*This model accepts additional fields of type unknown.*

## Structure

`InputParameter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isNull` | `boolean` | Required | If parameter is null |
| `endpointInputPrameterId` | `string` | Required | Unique parameter identifier for each endpoint |
| `id` | `string` | Required | Unique parameter identifier |
| `name` | `string` | Required | Parameter Name |
| `value` | `string` | Required | Parameter Value |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "isNull": false,
  "endpointInputPrameterId": "5a4e8675b724bb198c289f7a",
  "id": "5a4e8675b724bb198c289f7c",
  "name": "body",
  "value": "{\n  \"name\": \"Country\",\n  \"field\": \"NZ\"\n}",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

