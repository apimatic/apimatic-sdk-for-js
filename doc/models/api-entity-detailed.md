
# Api Entity Detailed

The structure collects API Endpoints and Custom Types to display detailed information on API Entity.

## Structure

`ApiEntityDetailed`

## Inherits From

[`ApiEntity`](/doc/models/api-entity.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `endpoints` | [`Endpoint[]`](/doc/models/endpoint.md) | Required | API Endpoints |
| `customTypes` | [`CustomType[]`](/doc/models/custom-type.md) | Required | Complex Custom Model Types |

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
  },
  "endpoints": {
    "id": "5a4e8675b724bb198c28a06a",
    "apiId": "5a4e8675b724bb198c289fe9",
    "name": "Send String in body with \\r\\n",
    "httpMethod": "POST",
    "group": "BodyParams",
    "skipAuthentication": false,
    "route": "/body/stringEncoding",
    "response": {
      "optional": false,
      "type": "ServerResponse",
      "constant": false,
      "isArray": false,
      "isStream": false,
      "isAttribute": false,
      "isMap": false,
      "attributes": {
        "id": "5be1603083b41d0b50110551"
      },
      "nullable": false,
      "id": "5a4e8675b724bb198c289f79",
      "name": "response"
    },
    "hasOptionalQueryParams": false,
    "hasOptionalFieldParams": false,
    "collectParameters": false,
    "wrapBodyInObject": false,
    "requiredScopes": [],
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
    },
    "errors": [],
    "testCases": {
      "id": "5a4e8675b724bb198c289f7b",
      "endpointId": "5a4e8675b724bb198c28a06a",
      "apiId": "5a4e8675b724bb198c289fe9",
      "name": "send string in body with \\r\\n1",
      "enabled": true,
      "shouldPass": true,
      "inputParameters": [
        {
          "isNull": false,
          "endpointInputPrameterId": "5a4e8675b724bb198c289f7a",
          "id": "5a4e8675b724bb198c289f7c",
          "name": "body",
          "value": "{\"name\":\"farhan\",\"field\":\"QA\"}"
        }
      ],
      "expectedStatus": "200",
      "expectedHeaders": [],
      "expectedHeadersAllowExtra": true,
      "expectedBody": "{\"passed\":true}",
      "expectedBodyMatchMode": "KEYSANDVALUES",
      "expectedArrayOrderedMatching": false,
      "expectedArrayCheckCount": false,
      "responseMatchSchema": true
    }
  },
  "customTypes": {
    "id": "5a4e8675b724bb198c289ff6",
    "apiId": "5a4e8675b724bb198c289fe9",
    "name": "Job",
    "baseType": null,
    "implementationType": "Structure",
    "fields": []
  }
}
```

