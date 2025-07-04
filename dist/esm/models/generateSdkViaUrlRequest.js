/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { optional, string, typedExpandoObject, unknown, } from '../schema';
import { platformsSchema } from './platforms';
export const generateSdkViaUrlRequestSchema = typedExpandoObject({ url: ['url', string()], template: ['template', platformsSchema] }, 'additionalProperties', optional(unknown()));
//# sourceMappingURL=generateSdkViaUrlRequest.js.map