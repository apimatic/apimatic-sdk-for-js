
# Generate Sdk Via Url Request

## Structure

`GenerateSdkViaUrlRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | The URL for the API specification file.<br><br>**Note:** This URL should be publicly accessible. |
| `template` | [`Platforms`](/doc/models/platforms.md) | Required | The programming language for which to generate the SDK in. <br>The template can be any of the [supported templates](https://docs.apimatic.io/generate-sdks/overview-sdks/). |

## Example (as JSON)

```json
{
  "url": "http://petstore.swagger.io/v2/swagger.json",
  "template": null
}
```

