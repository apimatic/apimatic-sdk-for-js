/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { aPIEntityCodeGenerationSchema, } from '../models/aPIEntityCodeGeneration';
import { platformsSchema } from '../models/platforms';
import { array, string } from '../schema';
import { BaseController } from './baseController';
export class CodeGenerationImportedApisController extends BaseController {
    /**
     * Generate an SDK for an API Version.
     *
     * This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for
     * the generation performed is returned as part of the response.
     *
     * @param apiEntityId   The ID of the API Entity to generate the SDK for.
     * @param template      The structure contains platforms that APIMatic CodeGen can generate SDKs and
     *                                   Docs in.
     * @return Response from the API call
     */
    async generateSDK(apiEntityId, template, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            apiEntityId: [apiEntityId, string()],
            template: [template, platformsSchema],
        });
        req.header('Content-Type', 'application/x-www-form-urlencoded');
        req.form({
            template: mapped.template,
        });
        req.appendTemplatePath `/api-entities/${mapped.apiEntityId}/code-generations/generate`;
        return req.callAsJson(aPIEntityCodeGenerationSchema, requestOptions);
    }
    /**
     * Download the SDK generated via the Generate SDK endpoint.
     *
     * @param apiEntityId   The ID of the API Entity for which the SDK was generated.
     * @param codegenId     The ID of code generation received in the response of the [SDK generation
     *                                call](https://www.apimatic.io/api-docs-
     *                                preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
     *                                generation-imported-apis/generate-sdk).
     * @return Response from the API call
     */
    async downloadSDK(apiEntityId, codegenId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({
            apiEntityId: [apiEntityId, string()],
            codegenId: [codegenId, string()],
        });
        req.appendTemplatePath `/api-entities/${mapped.apiEntityId}/code-generations/${mapped.codegenId}/generated-sdk`;
        return req.callAsStream(requestOptions);
    }
    /**
     * Get a list of all SDK generations done against an API Version via the Generate SDK endpoint.
     *
     * @param apiEntityId   The ID of the API Entity for which to list code generations.
     * @return Response from the API call
     */
    async listAllCodeGenerations(apiEntityId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ apiEntityId: [apiEntityId, string()] });
        req.appendTemplatePath `/api-entities/${mapped.apiEntityId}/code-generations`;
        return req.callAsJson(array(aPIEntityCodeGenerationSchema), requestOptions);
    }
    /**
     * Get details on an SDK generation performed via the Generate SDK endpoint.
     *
     * @param apiEntityId   The ID of the API Entity to fetch the code generation for.
     * @param codegenId     The ID of the code generation to fetch. The code generation ID is received in the
     *                                response of the [SDK generation call](https://www.apimatic.io/api-docs-
     *                                preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
     *                                generation-imported-apis/generate-sdk).
     * @return Response from the API call
     */
    async getACodeGeneration(apiEntityId, codegenId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({
            apiEntityId: [apiEntityId, string()],
            codegenId: [codegenId, string()],
        });
        req.appendTemplatePath `/api-entities/${mapped.apiEntityId}/code-generations/${mapped.codegenId}`;
        return req.callAsJson(aPIEntityCodeGenerationSchema, requestOptions);
    }
    /**
     * Delete an SDK generation performed for an API Version via the Generate SDK endpoint.
     *
     * @param apiEntityId   The ID of the API Entity to delete the code generation for.
     * @param codegenId     The ID of the code generation to delete. The code generation ID is received in the
     *                                response of the [SDK generation call](https://www.apimatic.io/api-docs-
     *                                preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
     *                                generation-imported-apis/generate-sdk).
     * @return Response from the API call
     */
    async deleteCodeGeneration(apiEntityId, codegenId, requestOptions) {
        const req = this.createRequest('DELETE');
        const mapped = req.prepareArgs({
            apiEntityId: [apiEntityId, string()],
            codegenId: [codegenId, string()],
        });
        req.appendTemplatePath `/api-entities/${mapped.apiEntityId}/code-generations/${mapped.codegenId}`;
        return req.call(requestOptions);
    }
}
//# sourceMappingURL=codeGenerationImportedApisController.js.map