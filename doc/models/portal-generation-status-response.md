
# Portal Generation Status Response

## Structure

`PortalGenerationStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status`](../../doc/models/status.md) | Required | - |
| `detail` | [`ProblemDetails \| undefined`](../../doc/models/problem-details.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "InProgress",
  "detail": {
    "type": "type4",
    "title": "title8",
    "status": 162,
    "detail": "detail2",
    "instance": "instance2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

