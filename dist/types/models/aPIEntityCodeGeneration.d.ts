/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
import { Platforms } from './platforms';
/** The Code Generation structure encapsulates all the  the details of an SDK generation performed against an API Entity */
export interface APIEntityCodeGeneration {
    /** Unique Code Generation Identifier */
    id: string;
    /** The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in. */
    template: Platforms;
    /** The generated SDK */
    generatedFile: string;
    /** Generation Date and Time */
    generatedOn: string;
    /** The md5 hash of the API Description */
    hashCode: string;
    /** Generation Source */
    codeGenerationSource: string;
    /** Generation Version */
    codeGenVersion: string;
    /** Generation Status */
    success: boolean;
    /** Unique API Entity Identifier */
    apiEntityId: string;
}
export declare const aPIEntityCodeGenerationSchema: Schema<APIEntityCodeGeneration>;
