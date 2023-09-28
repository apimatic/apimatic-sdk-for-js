/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
import { Authentication } from './authentication';
import { CodeGenSettings } from './codeGenSettings';
import { CustomType } from './customType';
import { Endpoint } from './endpoint';
import { EndpointsGroup } from './endpointsGroup';
import { MetaData } from './metaData';
import { ServerConfiguration } from './serverConfiguration';
import { TestGenSettings } from './testGenSettings';
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
    /** Description of the API */
    description: string;
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
    /** API Endpoint Groups */
    endpointsGroup?: EndpointsGroup[];
    metaData: MetaData;
    /** API Endpoints */
    endpoints: Endpoint[];
    /** Complex Custom Model Types */
    customTypes: CustomType[];
}
export declare const apiEntityDetailedSchema: Schema<ApiEntityDetailed>;
