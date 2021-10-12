
# Api Entity

The API Entity Structure encapsulates all the details of an API Entity. An API entity is a unique API Version.

## Structure

`ApiEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Unique API Entity identifier |
| `encryptedId` | `string` | Required | Enrcypted API Entity Id |
| `apiKey` | `string` | Required | API Integration Key. Obtain from API Card on Dashboard. |
| `apiGroupId` | `string` | Required | Unique API Group Identifier |
| `imageUri` | `string` | Required | Cover Image |
| `creationDate` | `string` | Required | Entity creation date |
| `public` | `boolean` | Required | API Status (Deprecated) |
| `name` | `string` | Required | API Entity  Name |
| `baseUri` | `string` | Required | Base URI for the Entity |
| `version` | `string` | Required | Entity Version Number |
| `additionalHeaders` | `string[]` | Required | Header Content |
| `authentication` | [`Authentication`](/doc/models/authentication.md) | Required | Authentication Details |
| `codeGenSettings` | [`CodeGenSettings`](/doc/models/code-gen-settings.md) | Required | Code Gen Settings |
| `testGenSettings` | [`TestGenSettings`](/doc/models/test-gen-settings.md) | Required | Test Generation Settings |
| `errors` | `string[]` | Required | API Errors |
| `serverConfiguration` | [`ServerConfiguration`](/doc/models/server-configuration.md) | Required | Server Settings |

## Example (as JSON)

```json
{
  "id": "5be0a21a83b41d0d8cdcd81d",
  "encryptedId": "YXBpbWF0aWNfNWJlMGEyMWE4M2I0MWQwZDhjZGNkODFk",
  "apiKey": "FmxKZBYAfT3JPEmCqoM_5NeP_CQaP4O3rYFa58X4k9gwTLZXeV5dNFWROXQ2IdVd",
  "apiGroupId": "5be0a21a83b41d0d8cdcd81c",
  "imageUri": "/img/no-image.jpg",
  "creationDate": "11/5/2018 8:03:38 PM",
  "public": false,
  "name": "Hello world",
  "baseUri": "http://www.example.com",
  "version": "1.0",
  "additionalHeaders": [],
  "authentication": {
    "id": "5be0a21a83b41d0d8cdcd80f",
    "authType": "None",
    "scopes": [],
    "parameters": [],
    "authScopes": [],
    "authGrantTypes": [],
    "paramFormats": {}
  },
  "codeGenSettings": {
    "isAsync": true,
    "useHttpMethodPrefix": true,
    "useModelPrefix": false,
    "useEnumPrefix": true,
    "useConstructorsForConfig": false,
    "useCommonSdkLibrary": false,
    "generateInterfaces": false,
    "generateAppveyorConfig": false,
    "generateCircleConfig": false,
    "generateJenkinsConfig": false,
    "generateTravisConfig": false,
    "androidUseAppManifest": false,
    "iosUseAppInfoPlist": false,
    "iosGenerateCoreData": false,
    "runscopeEnabled": false,
    "collapseParamsToArray": false,
    "preserveParameterOrder": true,
    "appendContentHeaders": true,
    "modelSerializationIsJSON": true,
    "nullify404": false,
    "validateRequiredParameters": false,
    "enableAdditionalModelProperties": false,
    "javaUsePropertiesConfig": false,
    "useControllerPrefix": true,
    "useExceptionPrefix": true,
    "parameterArrayFormat": "ParamArrayWithIndex",
    "objCHttpClient": "UNIREST",
    "cSharpHttpClient": "UNIREST",
    "androidHttpClient": "ANDROID_OK",
    "nodeHttpClient": "NODE_REQUEST",
    "phpHttpClient": "UNIREST",
    "bodySerialization": 0,
    "arraySerialization": "Indexed",
    "timeout": 0,
    "enableLogging": false,
    "enableHttpCache": false,
    "retries": 0,
    "retryInterval": 1,
    "generateAdvancedDocs": true,
    "storeTimezoneInformation": false,
    "enablePhpComposerVersionString": false,
    "securityProtocols": [
      "Ssl3",
      "Tls"
    ],
    "underscoreNumbers": true,
    "useSingletonPattern": true,
    "disableLinting": false,
    "allowSkippingSSLCertVerification": false,
    "applyCustomizations": [],
    "doNotSplitWords": [],
    "sortResources": false,
    "enableGlobalUserAgent": true
  },
  "testGenSettings": {
    "precisionDelta": 0.01,
    "testTimeout": 30,
    "configuration": []
  },
  "errors": [],
  "serverConfiguration": {
    "id": "5be0a21a83b41d0d8cdcd835",
    "defaultEnvironment": "production",
    "defaultServer": "default",
    "environments": [
      {
        "id": "5be0a21a83b41d0d8cdcd832",
        "name": "production",
        "servers": [
          {
            "id": "5be0a21a83b41d0d8cdcd831",
            "name": "default",
            "url": "{defaultServerUrl}"
          }
        ]
      }
    ],
    "parameters": {
      "optional": false,
      "type": "test\\r\\nstringEncoding",
      "constant": false,
      "isArray": false,
      "isStream": false,
      "isAttribute": false,
      "isMap": false,
      "attributes": {
        "id": "5be1603083b41d0b50110553"
      },
      "nullable": false,
      "id": "5a4e8675b724bb198c289f7a",
      "name": "body",
      "description": null,
      "defaultValue": null,
      "ParamFormat": "Body"
    }
  }
}
```

