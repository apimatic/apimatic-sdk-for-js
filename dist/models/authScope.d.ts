/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
export interface AuthScope {
    /** Scope Id */
    id: string;
    /** Scope Name */
    name: string;
    /** Scope Value */
    value: string;
    /** Scope Description */
    description: string;
}
export declare const authScopeSchema: Schema<AuthScope>;
