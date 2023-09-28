"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.cSNETSTANDARDLIBSchema = void 0;
var schema_1 = require("../schema");
var id_1 = require("./id");
var link_1 = require("./link");
exports.cSNETSTANDARDLIBSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)(id_1.idSchema)],
    packageRepository: ['packageRepository', (0, schema_1.string)()],
    packageName: ['packageName', (0, schema_1.string)()],
    version: ['version', (0, schema_1.string)()],
    additionalDeploymentInformation: [
        'additionalDeploymentInformation',
        (0, schema_1.optional)((0, schema_1.unknown)()),
    ],
    link: ['link', (0, schema_1.optional)(link_1.linkSchema)]
});
//# sourceMappingURL=cSNETSTANDARDLIB.js.map