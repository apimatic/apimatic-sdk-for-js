"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.CodeGenerationExternalApisController = void 0;
var tslib_1 = require("tslib");
var generateSdkViaUrlRequest_1 = require("../models/generateSdkViaUrlRequest");
var platforms_1 = require("../models/platforms");
var userCodeGeneration_1 = require("../models/userCodeGeneration");
var schema_1 = require("../schema");
var baseController_1 = require("./baseController");
var CodeGenerationExternalApisController = /** @class */ (function (_super) {
    tslib_1.__extends(CodeGenerationExternalApisController, _super);
    function CodeGenerationExternalApisController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Generate an SDK for an API by by uploading the API specification file.
     *
     * This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for
     * the generation performed is returned as part of the response.
     *
     * This endpoint does not import an API into APIMatic.
     *
     * @param file     The API specification file.<br>The type of the specification file should be any of
     *                                the [supported formats](https://docs.apimatic.io/api-transformer/overview-
     *                                transformer#supported-input-formats).
     * @param template The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs
     *                                in.
     * @return Response from the API call
     */
    CodeGenerationExternalApisController.prototype.generateSDKViaFile = function (file, template, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/code-generations/generate-via-file');
                mapped = req.prepareArgs({ template: [template, platforms_1.platformsSchema] });
                req.formData({
                    file: file,
                    template: mapped.template
                });
                return [2 /*return*/, req.callAsJson(userCodeGeneration_1.userCodeGenerationSchema, requestOptions)];
            });
        });
    };
    /**
     * Generate an SDK for an API by providing the URL of the API specification file.
     *
     * This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for
     * the generation performed is returned as part of the response.
     *
     * This endpoint does not import an API into APIMatic.
     *
     * @param body         Request Body
     * @return Response from the API call
     */
    CodeGenerationExternalApisController.prototype.generateSDKViaURL = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/code-generations/generate-via-url');
                mapped = req.prepareArgs({
                    body: [body, generateSdkViaUrlRequest_1.generateSdkViaUrlRequestSchema]
                });
                req.header('Content-Type', 'application/vnd.apimatic.userCodeGenerationDto.v1+json');
                req.json(mapped.body);
                return [2 /*return*/, req.callAsJson(userCodeGeneration_1.userCodeGenerationSchema, requestOptions)];
            });
        });
    };
    /**
     * Download the SDK generated via the Generate SDK endpoints.
     *
     * @param codegenId  The ID of code generation received in the response of the [Generate SDK Via
     *                             File](https://www.apimatic.io/api-docs-
     *                             preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-
     *                             external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.
     *                             io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
     *                             generation-external-apis/generate-sdk-via-url) calls.
     * @return Response from the API call
     */
    CodeGenerationExternalApisController.prototype.downloadSDK = function (codegenId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ codegenId: [codegenId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/code-generations/", "/generated-sdk"], ["/code-generations/", "/generated-sdk"])), mapped.codegenId);
                return [2 /*return*/, req.callAsStream(requestOptions)];
            });
        });
    };
    /**
     * Get a list of all SDK generations performed with external APIs via the Generate SDK endpoints.
     *
     * @return Response from the API call
     */
    CodeGenerationExternalApisController.prototype.listAllCodeGenerations = function (requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/code-generations');
                return [2 /*return*/, req.callAsJson((0, schema_1.array)(userCodeGeneration_1.userCodeGenerationSchema), requestOptions)];
            });
        });
    };
    /**
     * Download the API Specification file used as input for a specific SDK generation performed via the
     * Generate SDK endpoints.
     *
     * @param codegenId  The ID of the code generation to download the API specification for. The code
     *                             generation ID is received in the response of the [Generate SDK Via File](https://www.
     *                             apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
     *                             endpoints/code-generation-external-apis/generate-sdk-via-file) or [Generate SDK Via
     *                             URL ](https://www.apimatic.io/api-docs-
     *                             preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-
     *                             external-apis/generate-sdk-via-url) calls
     * @return Response from the API call
     */
    CodeGenerationExternalApisController.prototype.downloadInputFile = function (codegenId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ codegenId: [codegenId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/code-generations/", "/input-file"], ["/code-generations/", "/input-file"])), mapped.codegenId);
                return [2 /*return*/, req.callAsStream(requestOptions)];
            });
        });
    };
    /**
     * Get details on an SDK generation performed for an external API via the Generate SDK endpoints.
     *
     * @param codegenId  The ID of the code generation to fetch. The code generation ID is received in the
     *                             response of the [Generate SDK Via File](https://www.apimatic.io/api-docs-
     *                             preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-
     *                             external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.
     *                             io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
     *                             generation-external-apis/generate-sdk-via-url) calls.
     * @return Response from the API call
     */
    CodeGenerationExternalApisController.prototype.getACodeGeneration = function (codegenId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ codegenId: [codegenId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/code-generations/", ""], ["/code-generations/", ""])), mapped.codegenId);
                return [2 /*return*/, req.callAsJson(userCodeGeneration_1.userCodeGenerationSchema, requestOptions)];
            });
        });
    };
    /**
     * Delete an SDK generation performed for an API via the Generate SDK endpoints.
     *
     * @param codegenId  The ID of the code generation to delete. The code generation ID is received in the
     *                             response of the [Generate SDK Via File](https://www.apimatic.io/api-docs-
     *                             preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-
     *                             external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.
     *                             io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
     *                             generation-external-apis/generate-sdk-via-url) calls.
     * @return Response from the API call
     */
    CodeGenerationExternalApisController.prototype.deleteCodeGeneration1 = function (codegenId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ codegenId: [codegenId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/code-generations/", ""], ["/code-generations/", ""])), mapped.codegenId);
                return [2 /*return*/, req.call(requestOptions)];
            });
        });
    };
    return CodeGenerationExternalApisController;
}(baseController_1.BaseController));
exports.CodeGenerationExternalApisController = CodeGenerationExternalApisController;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=codeGenerationExternalApisController.js.map