
# Test Gen Settings

This structure helps specify additional test configurations which affects how test cases are generated.

*This model accepts additional fields of type unknown.*

## Structure

`TestGenSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `precisionDelta` | `number` | Required | Error margin for comparing values in decimal places |
| `testTimeout` | `number` | Required | Number of seconds after which if the endpoint is not returning any response, the test is forced to fail e.g. a timeout of 60 |
| `configuration` | `unknown` | Required | The parameters allows to provide values for configuration file for use in the test environment |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "precisionDelta": 0.01,
  "testTimeout": 30,
  "configuration": {},
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

