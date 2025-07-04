/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { ApiResponse, RequestOptions } from '../core';
import { ApiValidationSummary } from '../models/apiValidationSummary';
import { DocsValidationSummary } from '../models/docsValidationSummary';
import { BaseController } from './baseController';
export declare class ApiValidationImportedApIsController extends BaseController {
    /**
     * Validate an API using the [APIMatic Validator](https://docs.apimatic.io/generate-sdks/overview-
     * sdks#step-2-api-validation).
     *
     * @param apiEntityId   The ID of the API Entity to perform validation for.
     * @return Response from the API call
     */
    validateApi(apiEntityId: string, requestOptions?: RequestOptions): Promise<ApiResponse<ApiValidationSummary>>;
    /**
     * Validate an API for documentation generation. This process validates the API for missing examples or
     * missing descriptions.
     *
     * @param apiEntityId   The ID of the API Entity to perform validation for.
     * @return Response from the API call
     */
    validateApiForDocs(apiEntityId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DocsValidationSummary>>;
}
//# sourceMappingURL=apiValidationImportedApIsController.d.ts.map