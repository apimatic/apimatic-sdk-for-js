"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.publishPackageInputSchema = void 0;
var schema_1 = require("../schema");
var packageRepositories_1 = require("./packageRepositories");
var platforms_1 = require("./platforms");
exports.publishPackageInputSchema = (0, schema_1.object)({
    packageRepository: ['packageRepository', packageRepositories_1.packageRepositoriesSchema],
    template: ['template', platforms_1.platformsSchema],
    packageName: ['packageName', (0, schema_1.string)()],
    version: ['version', (0, schema_1.string)()],
    additionalDeploymentInformation: [
        'additionalDeploymentInformation',
        (0, schema_1.optional)((0, schema_1.unknown)()),
    ]
});
//# sourceMappingURL=publishPackageInput.js.map