
# Getting Started with Apimatic API

## Introduction

This API gives you programmatic access to APIMatic's Code Generation, Docs Generation and Transformers Engine.

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=ApimaticAPI&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=ApimaticAPI&workspaceName=apimatic-apilib&step=resolveDependency)

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

![Add ApimaticApilib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=ApimaticAPI&workspaceName=apimatic-apilib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install ApimaticApilib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `authorization` | `string` | Auth Header. Replace {x-auth-key} with your API Key. |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  authorization: 'Authorization',
})
```

## Authorization

This API uses `Custom Header Signature`.

## List of APIs

* [APIs Management](/doc/controllers/apis-management.md)
* [Code Generation - Imported APIs](/doc/controllers/code-generation-imported-apis.md)
* [Code Generation - External APIs](/doc/controllers/code-generation-external-apis.md)
* [Transformation](/doc/controllers/transformation.md)
* [Docs Portal Management](/doc/controllers/docs-portal-management.md)
* [API Validation](/doc/controllers/api-validation.md)
* [Package Deployment](/doc/controllers/package-deployment.md)

## Classes Documentation

* [ApiResponse](/doc/api-response.md)
* [ApiError](/doc/api-error.md)

