/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, lazy, object, Schema, string } from '../schema';
import { Authentication, authenticationSchema } from './authentication';
import { CodeGenSettings, codeGenSettingsSchema } from './codeGenSettings';
import { CustomType, customTypeSchema } from './customType';
import { Endpoint, endpointSchema } from './endpoint';
import {
  ServerConfiguration,
  serverConfigurationSchema,
} from './serverConfiguration';
import { TestGenSettings, testGenSettingsSchema } from './testGenSettings';

/** The structure collects API Endpoints and Custom Types to display detailed information on API Entity. */
export interface ApiEntityDetailed {
  /** Unique API Entity identifier */
  id: string;
  /** Enrcypted API Entity Id */
  encryptedId: string;
  /** API Integration Key. Obtain from API Card on Dashboard. */
  apiKey: string;
  /** Unique API Group Identifier */
  apiGroupId: string;
  /** Cover Image */
  imageUri: string;
  /** Entity creation date */
  creationDate: string;
  /** API Status (Deprecated) */
  mPublic: boolean;
  /** API Entity  Name */
  name: string;
  /** Base URI for the Entity */
  baseUri: string;
  /** Entity Version Number */
  version: string;
  /** Header Content */
  additionalHeaders: string[];
  /** This Structure encapsulates all details of API authentication. */
  authentication: Authentication;
  /** APIMatic’s code generation engine has various code generation configurations to customise the behaviour and outlook across the generated SDKS. This structure encapsulates all settings for CodeGeneration. */
  codeGenSettings: CodeGenSettings;
  /** This structure helps specify additional test configurations which affects how test cases are generated. */
  testGenSettings: TestGenSettings;
  /** API Errors */
  errors: string[];
  /** Server configurations can be used to create multiple environments, multiple servers that can be used with specific endpoints and server URLs with template paramters. */
  serverConfiguration: ServerConfiguration;
  /** API Endpoints */
  endpoints: Endpoint[];
  /** Complex Custom Model Types */
  customTypes: CustomType[];
}

export const apiEntityDetailedSchema: Schema<ApiEntityDetailed> = object({
  id: ['id', string()],
  encryptedId: ['encryptedId', string()],
  apiKey: ['apiKey', string()],
  apiGroupId: ['apiGroupId', string()],
  imageUri: ['imageUri', string()],
  creationDate: ['creationDate', string()],
  mPublic: ['public', boolean()],
  name: ['name', string()],
  baseUri: ['baseUri', string()],
  version: ['version', string()],
  additionalHeaders: ['additionalHeaders', array(string())],
  authentication: ['authentication', lazy(() => authenticationSchema)],
  codeGenSettings: ['codeGenSettings', lazy(() => codeGenSettingsSchema)],
  testGenSettings: ['testGenSettings', lazy(() => testGenSettingsSchema)],
  errors: ['errors', array(string())],
  serverConfiguration: [
    'serverConfiguration',
    lazy(() => serverConfigurationSchema),
  ],
  endpoints: ['endpoints', array(lazy(() => endpointSchema))],
  customTypes: ['customTypes', array(lazy(() => customTypeSchema))],
});
