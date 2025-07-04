"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.packageDeploymentInformationSchema = void 0;
var schema_1 = require("../schema");
var templatesPackageDeploymentInformation_1 = require("./templatesPackageDeploymentInformation");
exports.packageDeploymentInformationSchema = (0, schema_1.typedExpandoObject)({
    id: ['id', (0, schema_1.string)()],
    templatesPackageDeploymentInformation: [
        'templatesPackageDeploymentInformation',
        (0, schema_1.lazy)(function () { return templatesPackageDeploymentInformation_1.templatesPackageDeploymentInformationSchema; }),
    ]
}, 'additionalProperties', (0, schema_1.optional)((0, schema_1.unknown)()));
//# sourceMappingURL=packageDeploymentInformation.js.map