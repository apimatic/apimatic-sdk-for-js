/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
export interface ApiValidationSummary {
    success: boolean;
    errors: string[];
    warnings: string[];
    messages: string[];
}
export declare const apiValidationSummarySchema: Schema<ApiValidationSummary>;
