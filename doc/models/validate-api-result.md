
# Validate Api Result

*This model accepts additional fields of type unknown.*

## Structure

`ValidateApiResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `validation` | [`ValidationSummary`](../../doc/models/validation-summary.md) | Required | - |
| `linting` | [`ValidationSummary`](../../doc/models/validation-summary.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "validation": {
    "isSuccess": false,
    "blocking": [
      {
        "message": "message4",
        "lineInfo": {
          "startLineNumber": 162,
          "startLinePosition": 6,
          "endLineNumber": 142,
          "endLinePosition": 74,
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "jsonReferencePath": "jsonReferencePath0",
        "fileReference": "fileReference2",
        "metadata": {
          "key0": "metadata9",
          "key1": "metadata0",
          "key2": "metadata1"
        },
        "ruleDocumentationReference": "ruleDocumentationReference4",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    ],
    "errors": [
      {
        "message": "message0",
        "lineInfo": {
          "startLineNumber": 162,
          "startLinePosition": 6,
          "endLineNumber": 142,
          "endLinePosition": 74,
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "jsonReferencePath": "jsonReferencePath6",
        "fileReference": "fileReference8",
        "metadata": {
          "key0": "metadata3"
        },
        "ruleDocumentationReference": "ruleDocumentationReference0",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    ],
    "warnings": [
      {
        "message": "message4",
        "lineInfo": {
          "startLineNumber": 162,
          "startLinePosition": 6,
          "endLineNumber": 142,
          "endLinePosition": 74,
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "jsonReferencePath": "jsonReferencePath0",
        "fileReference": "fileReference2",
        "metadata": {
          "key0": "metadata1",
          "key1": "metadata0",
          "key2": "metadata9"
        },
        "ruleDocumentationReference": "ruleDocumentationReference4",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    ],
    "information": [
      {
        "message": "message4",
        "lineInfo": {
          "startLineNumber": 162,
          "startLinePosition": 6,
          "endLineNumber": 142,
          "endLinePosition": 74,
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "jsonReferencePath": "jsonReferencePath0",
        "fileReference": "fileReference2",
        "metadata": {
          "key0": "metadata9"
        },
        "ruleDocumentationReference": "ruleDocumentationReference4",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    ],
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "linting": {
    "isSuccess": false,
    "blocking": [
      {
        "message": "message4",
        "lineInfo": {
          "startLineNumber": 162,
          "startLinePosition": 6,
          "endLineNumber": 142,
          "endLinePosition": 74,
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "jsonReferencePath": "jsonReferencePath0",
        "fileReference": "fileReference2",
        "metadata": {
          "key0": "metadata9",
          "key1": "metadata0",
          "key2": "metadata1"
        },
        "ruleDocumentationReference": "ruleDocumentationReference4",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    ],
    "errors": [
      {
        "message": "message0",
        "lineInfo": {
          "startLineNumber": 162,
          "startLinePosition": 6,
          "endLineNumber": 142,
          "endLinePosition": 74,
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "jsonReferencePath": "jsonReferencePath6",
        "fileReference": "fileReference8",
        "metadata": {
          "key0": "metadata3"
        },
        "ruleDocumentationReference": "ruleDocumentationReference0",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    ],
    "warnings": [
      {
        "message": "message4",
        "lineInfo": {
          "startLineNumber": 162,
          "startLinePosition": 6,
          "endLineNumber": 142,
          "endLinePosition": 74,
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "jsonReferencePath": "jsonReferencePath0",
        "fileReference": "fileReference2",
        "metadata": {
          "key0": "metadata1",
          "key1": "metadata0",
          "key2": "metadata9"
        },
        "ruleDocumentationReference": "ruleDocumentationReference4",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    ],
    "information": [
      {
        "message": "message4",
        "lineInfo": {
          "startLineNumber": 162,
          "startLinePosition": 6,
          "endLineNumber": 142,
          "endLinePosition": 74,
          "exampleAdditionalProperty": {
            "key1": "val1",
            "key2": "val2"
          }
        },
        "jsonReferencePath": "jsonReferencePath0",
        "fileReference": "fileReference2",
        "metadata": {
          "key0": "metadata9"
        },
        "ruleDocumentationReference": "ruleDocumentationReference4",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    ],
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

