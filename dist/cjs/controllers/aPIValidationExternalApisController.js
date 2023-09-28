"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.APIValidationExternalApisController = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@apimatic/core");
var apiValidationSummary_1 = require("../models/apiValidationSummary");
var contentType_1 = require("../models/contentType");
var schema_1 = require("../schema");
var baseController_1 = require("./baseController");
var APIValidationExternalApisController = /** @class */ (function (_super) {
    tslib_1.__extends(APIValidationExternalApisController, _super);
    function APIValidationExternalApisController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Validate an API by uploading the API specification file.
     *
     * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
     * validating the API using this endpoint. When specifying Metadata, the uploaded file will be a zip
     * file containing the API specification file and the `APIMATIC-META` json file.
     *
     * @param contentType
     * @param file         The API specification file.<br>The type of the specification file should be
     *                                    any of the [supported formats](https://docs.apimatic.io/api-
     *                                    transformer/overview-transformer#supported-input-formats).
     * @return Response from the API call
     */
    APIValidationExternalApisController.prototype.validateAPIViaFile = function (contentType, file, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/validation/validate-via-file');
                req.baseUrl('default');
                mapped = req.prepareArgs({
                    contentType: [contentType, contentType_1.contentTypeSchema]
                });
                req.header('Content-Type', mapped.contentType);
                req.formData({
                    file: file
                });
                req.throwOn(400, core_1.ApiError, 'Bad Request');
                req.throwOn(401, core_1.ApiError, 'Unauthenticated');
                req.throwOn(403, core_1.ApiError, 'Forbidden');
                req.throwOn(500, core_1.ApiError, 'Internal Server Error');
                return [2 /*return*/, req.callAsJson(apiValidationSummary_1.apiValidationSummarySchema, requestOptions)];
            });
        });
    };
    /**
     * Validate an API by providing the URL of the API specification file.
     *
     * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
     * validating the API using this endpoint. When specifying Metadata, the URL provided will be that of a
     * zip file containing the API specification file and the `APIMATIC-META` json file.
     *
     * @param descriptionUrl The URL for the API specification file.<br><br>**Note:** This URL should be
     *                                 publicly accessible.
     * @return Response from the API call
     */
    APIValidationExternalApisController.prototype.validateAPIViaURL = function (descriptionUrl, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/validation/validate-via-url');
                req.baseUrl('default');
                mapped = req.prepareArgs({
                    descriptionUrl: [descriptionUrl, (0, schema_1.string)()]
                });
                req.query('descriptionUrl', mapped.descriptionUrl);
                req.throwOn(400, core_1.ApiError, 'Bad Request');
                req.throwOn(401, core_1.ApiError, 'Unauthenticated');
                req.throwOn(403, core_1.ApiError, 'Forbidden');
                req.throwOn(500, core_1.ApiError, 'Internal Server Error');
                return [2 /*return*/, req.callAsJson(apiValidationSummary_1.apiValidationSummarySchema, requestOptions)];
            });
        });
    };
    return APIValidationExternalApisController;
}(baseController_1.BaseController));
exports.APIValidationExternalApisController = APIValidationExternalApisController;
//# sourceMappingURL=aPIValidationExternalApisController.js.map