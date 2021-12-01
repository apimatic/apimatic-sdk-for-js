/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
/** Contains a url field to allow Apis to be imported via url */
export interface InplaceImportApiViaUrlRequest {
    /** The URL for the API specification file.<br><br>**Note:** This URL should be publicly accessible. */
    url: string;
}
export declare const inplaceImportApiViaUrlRequestSchema: Schema<InplaceImportApiViaUrlRequest>;
