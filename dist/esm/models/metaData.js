/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { lazy, optional, typedExpandoObject, unknown } from '../schema';
import { apiValidationSummarySchema, } from './apiValidationSummary';
import { docsValidationSummarySchema, } from './docsValidationSummary';
import { importValidationSummarySchema, } from './importValidationSummary';
export const metaDataSchema = typedExpandoObject({
    importValidationSummary: [
        'importValidationSummary',
        lazy(() => importValidationSummarySchema),
    ],
    apiValidationSummary: [
        'apiValidationSummary',
        lazy(() => apiValidationSummarySchema),
    ],
    docsValidationSummary: [
        'docsValidationSummary',
        lazy(() => docsValidationSummarySchema),
    ],
}, 'additionalProperties', optional(unknown()));
//# sourceMappingURL=metaData.js.map