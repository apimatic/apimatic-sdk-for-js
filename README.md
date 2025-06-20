
# Getting Started with Apimatic API

## Introduction

This API gives you programmatic access to APIMatic's Code Generation, Docs Generation and Transformation Engine

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version >=4.1**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=ApimaticApi&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=ApimaticApi&workspaceName=apimatic-apilib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *Apimatic APILib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add ApimaticApilib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=ApimaticApi&workspaceName=apimatic-apilib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install ApimaticApilib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| timeout | `number` | Timeout for API calls.<br>*Default*: `30000` |
| httpClientOptions | [`Partial<HttpClientOptions>`](doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](doc/partial-logging-options.md) | Logging Configuration to enable logging |
| customHeaderAuthenticationCredentials | [`CustomHeaderAuthenticationCredentials`](doc/auth/custom-header-signature.md) | The credential object for customHeaderAuthentication |

The API client can be initialized as follows:

```ts
const client = new Client({
  customHeaderAuthenticationCredentials: {
    'Authorization': 'Authorization'
  },
  timeout: 30000,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

## Authorization

This API uses the following authentication schemes.

* [`Authorization (Custom Header Signature)`](doc/auth/custom-header-signature.md)

## List of APIs

* [AP Is Management](doc/controllers/ap-is-management.md)
* [Code Generation-Imported AP Is](doc/controllers/code-generation-imported-ap-is.md)
* [Code Generation-External AP Is](doc/controllers/code-generation-external-ap-is.md)
* [Docs Portal Management](doc/controllers/docs-portal-management.md)
* [API Validation-Imported AP Is](doc/controllers/api-validation-imported-ap-is.md)
* [API Validation-External AP Is](doc/controllers/api-validation-external-ap-is.md)
* [Docs Portal Generation-Async](doc/controllers/docs-portal-generation-async.md)
* [Transformation](doc/controllers/transformation.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](doc/http-client-options.md)
* [RetryConfiguration](doc/retry-configuration.md)
* [PartialLoggingOptions](doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](doc/partial-response-logging-options.md)
* [LoggerInterface](doc/logger-interface.md)

### HTTP

* [HttpRequest](doc/http-request.md)

### Utilities

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

