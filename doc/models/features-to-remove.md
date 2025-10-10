
# Features to Remove

Configuration for specifying which features to strip from API Specification.

## Structure

`FeaturesToRemove`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `features` | [`RemovableFeature[] \| undefined`](../../doc/models/removable-feature.md) | Optional | List of feature names to strip. |
| `endpointsToKeep` | `number \| undefined` | Optional | Number of endpoints to keep. |

## Example (as JSON)

```json
{
  "features": [
    "Pagination",
    "Webhooks",
    "Merging",
    "Callbacks",
    "MultipleAuthSchemes",
    "OAuth2"
  ],
  "endpointsToKeep": 15
}
```

