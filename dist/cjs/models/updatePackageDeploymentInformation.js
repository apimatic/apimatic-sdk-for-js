"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.updatePackageDeploymentInformationSchema = void 0;
var schema_1 = require("../schema");
var updateTemplatesPackageDeploymentInformation_1 = require("./updateTemplatesPackageDeploymentInformation");
exports.updatePackageDeploymentInformationSchema = (0, schema_1.object)({
    templatesPackageDeploymentInformation: [
        'templatesPackageDeploymentInformation',
        (0, schema_1.lazy)(function () { return updateTemplatesPackageDeploymentInformation_1.updateTemplatesPackageDeploymentInformationSchema; }),
    ]
});
//# sourceMappingURL=updatePackageDeploymentInformation.js.map