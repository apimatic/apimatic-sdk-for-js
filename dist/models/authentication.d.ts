/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
import { AuthScope } from './authScope';
/** This Structure encapsulates all details of API authentication. */
export interface Authentication {
    /** Auth Id */
    id: string;
    /** Auth Type */
    authType: string;
    /** Scope */
    scopes: AuthScope[];
    /** Auth Params */
    parameters: string[];
    /** Auth Scopes */
    authScopes: string[];
    /** Auth Grant Types */
    authGrantTypes: string[];
    /** Paramater Formats */
    paramFormats?: unknown;
}
export declare const authenticationSchema: Schema<Authentication>;
