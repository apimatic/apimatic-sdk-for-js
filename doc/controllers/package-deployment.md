# Package Deployment

```ts
const packageDeploymentController = new PackageDeploymentController(client);
```

## Class Name

`PackageDeploymentController`

## Methods

* [Update Package Deployment Information](../../doc/controllers/package-deployment.md#update-package-deployment-information)
* [Package Deployment Information](../../doc/controllers/package-deployment.md#package-deployment-information)
* [Get Published Packages for API](../../doc/controllers/package-deployment.md#get-published-packages-for-api)
* [Publish a Package for API](../../doc/controllers/package-deployment.md#publish-a-package-for-api)
* [Get a Published Package](../../doc/controllers/package-deployment.md#get-a-published-package)


# Update Package Deployment Information

Update  Package Deployment Information for an API Entity. To find out more on how to publish a package visit: [Adding Packages to Portal](https://docs.apimatic.io/developer-experience-portal/adding%20packages%20to%20portal/)

To find out more about publishing packages visit: [Publish Packages](https://docs.apimatic.io/developer-experience-portal/adding%20packages%20to%20portal/)

```ts
async updatePackageDeploymentInformation(
  apiEntityId: string,
  body: UpdatePackageDeploymentInformation,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | Unique API Entity Identifier |
| `body` | [`UpdatePackageDeploymentInformation`](../../doc/models/update-package-deployment-information.md) | Body, Required | Package Deployment Information to be updated. This comprises of the Platform Template, the Repository Name and Version. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

const body: UpdatePackageDeploymentInformation = {
  templatesPackageDeploymentInformation: {
    cSNETSTANDARDLIB: {
      packageRepository: 'NuGet',
      packageName: 'myPackage',
      version: '1.1.1',
      additionalDeploymentInformation: {  },
      id: Id.Enum5dcd2b5893c3e31a206f30c4,
      link: Link.EnumHttpswwwnugetorgpackagesmyPackage111,
    },
  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await packageDeploymentController.updatePackageDeploymentInformation(
  apiEntityId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Package Deployment Information

Query Package deployment details added for an API Entity.
To find out more about adding packages to portal: [Adding Packages to Portal](https://docs.apimatic.io/developer-experience-portal/adding%20packages%20to%20portal/)

```ts
async packageDeploymentInformation(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PackageDeploymentInformation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | Unique API Entity identifier |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PackageDeploymentInformation`](../../doc/models/package-deployment-information.md)

## Example Usage

```ts
const apiEntityId = 'api_entity_id4';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await packageDeploymentController.packageDeploymentInformation(apiEntityId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "5dcc0560dfe543169893ca01",
  "templatesPackageDeploymentInformation": {
    "CS_NET_STANDARD_LIB": {
      "id": "5dcd2b5893c3e31a206f30c4",
      "packageRepository": "NuGet",
      "packageName": "myPackage",
      "version": "1.1.1",
      "additionalDeploymentInformation": {},
      "link": "https://www.nuget.org/packages/myPackage/1.1.1"
    }
  }
}
```


# Get Published Packages for API

Returns logs for all packages published for the API.

```ts
async getPublishedPackagesForAPI(
  apiEntityId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublishedPackage[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | Unique API Identifier |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedPackage[]`](../../doc/models/published-package.md)

## Example Usage

```ts
const apiEntityId = '5e8217662ac3ed0b20b0dece';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await packageDeploymentController.getPublishedPackagesForAPI(apiEntityId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
[
  {
    "id": "5e8602472ac3db42ec7f097f",
    "createdOn": "2020-04-02T15:18:03.931Z",
    "apiEntityId": "5e8217662ac3ed0b20b0dece",
    "packageRepository": "Npm",
    "template": "NODE_JAVASCRIPT_LIB",
    "packageName": "apimaticcalculatortest",
    "version": "1.0.0",
    "additionalDeploymentInformation": {},
    "authorIdentifiers": {
      "Email": "shayanjalil@gmail.com",
      "UserName": "shayanjalil"
    },
    "link": "https://www.npmjs.com/package/apimaticcalculatortest/v/1.0.0"
  },
  {
    "id": "5e8c391a2ac3d94fdc804137",
    "createdOn": "2020-04-07T08:25:21.104Z",
    "apiEntityId": "5e8217662ac3ed0b20b0dece",
    "packageRepository": "Npm",
    "template": "NODE_JAVASCRIPT_LIB",
    "packageName": "shayancalculatortest",
    "version": "1.0.9",
    "additionalDeploymentInformation": {},
    "authorIdentifiers": {
      "Email": "shayanjalil@gmail.com",
      "UserName": "shayanjalil"
    },
    "link": "https://www.npmjs.com/package/shayancalculatortest/v/1.0.9"
  }
]
```


# Publish a Package for API

Publish a new package for API by specifying package name and version number.

To publish packages using this API, you will first need to add package repository credentials to your APIMatic account.
Check out the [docs](https://docs.apimatic.io/advanced/publishing-a-package/) for a guide on adding package repository credentials

```ts
async publishAPackageForAPI(
  apiEntityId: string,
  body: PublishPackageInput,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublishedPackage>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | Unique API Identifier |
| `body` | [`PublishPackageInput`](../../doc/models/publish-package-input.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedPackage`](../../doc/models/published-package.md)

## Example Usage

```ts
const apiEntityId = '5e8217662ac3ed0b20b0dece';

const body: PublishPackageInput = {
  packageRepository: PackageRepositories.Npm,
  template: Platforms.CSNETSTANDARDLIB,
  packageName: 'apimaticcalculatortest',
  version: '1.0.0',
  additionalDeploymentInformation: {  },
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await packageDeploymentController.publishAPackageForAPI(
  apiEntityId,
  body
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a Published Package

Pull details for a certain published package by specifying Published Package Id.

```ts
async getAPublishedPackage(
  apiEntityId: string,
  publishedPackageId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PublishedPackage>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiEntityId` | `string` | Template, Required | Unique API Identifier |
| `publishedPackageId` | `string` | Template, Required | Unique Published Package Identifier |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedPackage`](../../doc/models/published-package.md)

## Example Usage

```ts
const apiEntityId = '5e8217662ac3ed0b20b0dece';

const publishedPackageId = '5e8602472ac3db42ec7f097f';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await packageDeploymentController.getAPublishedPackage(
  apiEntityId,
  publishedPackageId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "5e8602472ac3db42ec7f097f",
  "createdOn": "2020-04-02T15:18:03.931Z",
  "apiEntityId": "5e8217662ac3ed0b20b0dece",
  "packageRepository": "Npm",
  "template": "NODE_JAVASCRIPT_LIB",
  "packageName": "apimaticcalculatortest",
  "version": "1.0.0",
  "additionalDeploymentInformation": {},
  "authorIdentifiers": {
    "Email": "shayanjalil@gmail.com",
    "UserName": "shayanjalil"
  },
  "link": "https://www.npmjs.com/package/apimaticcalculatortest/v/1.0.0"
}
```

