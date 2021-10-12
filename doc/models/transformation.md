
# Transformation

Transformation structure encapsulates all the details of a Transformation.

## Structure

`Transformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique Transformation Identifier |
| `transformedOn` | `string` | Required | Transformation Date and Time |
| `userId` | `string` | Required | Unique User Identifier |
| `inputtedFile` | `string` | Required | API Specification file to be transformed |
| `generatedFile` | `string` | Required | API Specification file transformed to desired format |
| `exportFormat` | `string` | Required | Desired Specification format |
| `transformationSource` | `string` | Required | Source of Transformation |
| `transformationInput` | `string` | Required | Via File or URL |
| `codeGenVersion` | `string` | Required | CodeGen Engine Version |
| `success` | `boolean` | Required | Successful Transformation Flag |

## Example (as JSON)

```json
{
  "id": "5be0999183b41d0d8cdb9f26",
  "transformedOn": "2018-11-05T19:27:13.2062198Z",
  "userId": "5afc60380b9949253c6b7776",
  "inputtedFile": "https://apimatic.io/api/transformations/5be0999183b41d0d8cdb9f26/input-file",
  "generatedFile": "https://apimatic.io/api/transformations/5be0999183b41d0d8cdb9f26/converted-file",
  "exportFormat": "APIMATIC",
  "transformationSource": "ViaApi",
  "transformationInput": "File",
  "codeGenVersion": "1",
  "success": true
}
```

