"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.ApisManagementController = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@apimatic/core");
var accept_1 = require("../models/accept");
var accept2_1 = require("../models/accept2");
var apiEntity_1 = require("../models/apiEntity");
var contentType_1 = require("../models/contentType");
var exportFormats_1 = require("../models/exportFormats");
var importApiVersionViaUrlRequest_1 = require("../models/importApiVersionViaUrlRequest");
var importApiViaUrlRequest_1 = require("../models/importApiViaUrlRequest");
var inplaceImportApiViaUrlRequest_1 = require("../models/inplaceImportApiViaUrlRequest");
var schema_1 = require("../schema");
var baseController_1 = require("./baseController");
var ApisManagementController = /** @class */ (function (_super) {
    tslib_1.__extends(ApisManagementController, _super);
    function ApisManagementController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Import an API into the APIMatic Dashboard by uploading the API specification file.
     *
     * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
     * importing the API using this endpoint. When specifying Metadata, the uploaded file will be a zip
     * file containing the API specification file and the `APIMATIC-META` json file.
     *
     * @param contentType
     * @param file         The API specification file.<br>The type of the specification file should be
     *                                    any of the [supported formats](https://docs.apimatic.io/api-
     *                                    transformer/overview-transformer#supported-input-formats).
     * @return Response from the API call
     */
    ApisManagementController.prototype.importAPIViaFile = function (contentType, file, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/api-entities/import-via-file');
                mapped = req.prepareArgs({
                    contentType: [contentType, contentType_1.contentTypeSchema]
                });
                req.header('Content-Type', mapped.contentType);
                req.formData({
                    file: file
                });
                req.throwOn(400, core_1.ApiError, 'Bad Request');
                req.throwOn(412, core_1.ApiError, 'Precondition Failed');
                req.throwOn(422, core_1.ApiError, 'Unprocessable Entity');
                req.throwOn(500, core_1.ApiError, 'Internal Server Error');
                return [2 /*return*/, req.callAsJson(apiEntity_1.apiEntitySchema, requestOptions)];
            });
        });
    };
    /**
     * Import an API into the APIMatic Dashboard by providing the URL of the API specification file.
     *
     * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
     * importing the API using this endpoint. When specifying Metadata, the URL provided will be that of a
     * zip file containing the API specification file and the `APIMATIC-META` json file.
     *
     * @param body         Request Body
     * @return Response from the API call
     */
    ApisManagementController.prototype.importAPIViaURL = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/api-entities/import-via-url');
                mapped = req.prepareArgs({
                    body: [body, importApiViaUrlRequest_1.importApiViaUrlRequestSchema]
                });
                req.header('Content-Type', 'application/vnd.apimatic.apiEntityUrlImportDto.v1+json');
                req.json(mapped.body);
                req.throwOn(400, core_1.ApiError, 'Bad Request');
                req.throwOn(412, core_1.ApiError, 'Precondition Failed');
                req.throwOn(422, core_1.ApiError, 'Unprocessable Entity');
                req.throwOn(500, core_1.ApiError, 'Internal Server Error');
                return [2 /*return*/, req.callAsJson(apiEntity_1.apiEntitySchema, requestOptions)];
            });
        });
    };
    /**
     * Import a new version for an API, against an existing API Group, by uploading the API specification
     * file.
     *
     * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
     * importing the API version using this endpoint. When specifying Metadata, the uploaded file will be a
     * zip file containing the API specification file and the `APIMATIC-META` json file.
     *
     * @param apiGroupId       The ID of the API Group for which to import a new API version.
     * @param accept
     * @param versionOverride  The version number with which the new API version will be imported. This
     *                                        version number will override the version specified in the API specification
     *                                        file.<br>APIMatic recommends versioning the API with the [versioning
     *                                        scheme](https://docs.apimatic.io/define-apis/basic-settings/#version)
     *                                        documented in the docs.
     * @param file             The API specification file.<br>The type of the specification file should
     *                                        be any of the [supported formats](https://docs.apimatic.io/api-
     *                                        transformer/overview-transformer#supported-input-formats).
     * @return Response from the API call
     */
    ApisManagementController.prototype.importNewAPIVersionViaFile = function (apiGroupId, accept, versionOverride, file, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    apiGroupId: [apiGroupId, (0, schema_1.string)()],
                    accept: [accept, accept_1.acceptSchema],
                    versionOverride: [versionOverride, (0, schema_1.string)()]
                });
                req.header('Accept', mapped.accept);
                req.formData({
                    version_override: mapped.versionOverride,
                    file: file
                });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/api-groups/", "/api-entities/import-via-file"], ["/api-groups/", "/api-entities/import-via-file"])), mapped.apiGroupId);
                return [2 /*return*/, req.callAsJson(apiEntity_1.apiEntitySchema, requestOptions)];
            });
        });
    };
    /**
     * Import a new version for an API, against an existing API Group, by providing the URL of the API
     * specification file.
     *
     * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
     * importing the API version using this endpoint. When specifying Metadata, the URL provided will be
     * that of a zip file containing the API specification file and the `APIMATIC-META` json file.
     *
     * @param apiGroupId   The ID of the API Group for which to import a new API
     *                                                             version.
     * @param accept
     * @param body         Request Body
     * @return Response from the API call
     */
    ApisManagementController.prototype.importNewAPIVersionViaURL = function (apiGroupId, accept, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    apiGroupId: [apiGroupId, (0, schema_1.string)()],
                    accept: [accept, accept_1.acceptSchema],
                    body: [body, importApiVersionViaUrlRequest_1.importApiVersionViaUrlRequestSchema]
                });
                req.header('Accept', mapped.accept);
                req.header('Content-Type', 'application/vnd.apimatic.apiGroupApiEntityUrlImportDto.v1+json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/api-groups/", "/api-entities/import-via-url"], ["/api-groups/", "/api-entities/import-via-url"])), mapped.apiGroupId);
                return [2 /*return*/, req.callAsJson(apiEntity_1.apiEntitySchema, requestOptions)];
            });
        });
    };
    /**
     * Replace an API version of an API Group, by uploading the API specification file that will replace
     * the current version.
     *
     * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
     * importing the API version using this endpoint. When specifying Metadata, the uploaded file will be a
     * zip file containing the API specification file and the `APIMATIC-META` json file.
     *
     * @param apiEntityId   The ID of the API Entity to replace.
     * @param accept
     * @param file          The API specification file.<br>The type of the specification file should be
     *                                     any of the [supported formats](https://docs.apimatic.io/api-
     *                                     transformer/overview-transformer#supported-input-formats).
     * @return Response from the API call
     */
    ApisManagementController.prototype.inplaceAPIImportViaFile = function (apiEntityId, accept, file, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    apiEntityId: [apiEntityId, (0, schema_1.string)()],
                    accept: [accept, accept2_1.accept2Schema]
                });
                req.header('Accept', mapped.accept);
                req.formData({
                    file: file
                });
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/api-entities/", "/import-via-file"], ["/api-entities/", "/import-via-file"])), mapped.apiEntityId);
                return [2 /*return*/, req.call(requestOptions)];
            });
        });
    };
    /**
     * Replace an API version of an API Group, by providing the URL of the API specification file that will
     * replace the current version.
     *
     * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
     * importing the API version using this endpoint. When specifying Metadata, the URL provided will be
     * that of a zip file containing the API specification file and the `APIMATIC-META` json file.
     *
     * @param apiEntityId   The ID of the API Entity to replace.
     * @param body          Request Body
     * @return Response from the API call
     */
    ApisManagementController.prototype.inplaceAPIImportViaURL = function (apiEntityId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    apiEntityId: [apiEntityId, (0, schema_1.string)()],
                    body: [body, inplaceImportApiViaUrlRequest_1.inplaceImportApiViaUrlRequestSchema]
                });
                req.header('Content-Type', 'application/vnd.apimatic.apiEntityUrlImportDto.v1+json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/api-entities/", "/import-via-url"], ["/api-entities/", "/import-via-url"])), mapped.apiEntityId);
                return [2 /*return*/, req.call(requestOptions)];
            });
        });
    };
    /**
     * Fetch an API Entity.
     *
     * @param apiEntityId   The ID of the API Entity to fetch.
     * @return Response from the API call
     */
    ApisManagementController.prototype.fetchAPIEntity = function (apiEntityId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ apiEntityId: [apiEntityId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/api-entities/", ""], ["/api-entities/", ""])), mapped.apiEntityId);
                return [2 /*return*/, req.callAsJson(apiEntity_1.apiEntitySchema, requestOptions)];
            });
        });
    };
    /**
     * Download the API Specification file for a an API Version in any of the API Specification formats
     * supported by APIMatic.
     *
     * @param apiEntityId   The ID of the API Entity to download.
     * @param format        The format in which to download the API.<br>The format can be any of the
     *                                       [supported formats](https://docs.apimatic.io/api-transformer/overview-
     *                                       transformer#supported-input-formats).
     * @return Response from the API call
     */
    ApisManagementController.prototype.downloadAPISpecification = function (apiEntityId, format, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    apiEntityId: [apiEntityId, (0, schema_1.string)()],
                    format: [format, exportFormats_1.exportFormatsSchema]
                });
                req.query('format', mapped.format);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/api-entities/", "/api-description"], ["/api-entities/", "/api-description"])), mapped.apiEntityId);
                return [2 /*return*/, req.callAsStream(requestOptions)];
            });
        });
    };
    return ApisManagementController;
}(baseController_1.BaseController));
exports.ApisManagementController = ApisManagementController;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=apisManagementController.js.map