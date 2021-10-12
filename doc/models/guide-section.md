
# Guide Section

This structure encapsulates all the details of a Guide Section

## Structure

`GuideSection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sectionName` | `string` | Required | Guide Section Name |
| `sectionItems` | [`SectionItem[]`](/doc/models/section-item.md) | Required | Guide Section Content |

## Example (as JSON)

```json
{
  "sectionName": "New Fancy Name",
  "sectionItems": [
    {
      "heading": "Top Level heading 1",
      "body": "Content for first heading"
    }
  ]
}
```

