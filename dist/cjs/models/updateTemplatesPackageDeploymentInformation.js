"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.updateTemplatesPackageDeploymentInformationSchema = void 0;
var schema_1 = require("../schema");
var cSNETSTANDARDLIB_1 = require("./cSNETSTANDARDLIB");
exports.updateTemplatesPackageDeploymentInformationSchema = (0, schema_1.object)({
    cSNETSTANDARDLIB: [
        'CS_NET_STANDARD_LIB',
        (0, schema_1.lazy)(function () { return cSNETSTANDARDLIB_1.cSNETSTANDARDLIBSchema; }),
    ]
});
//# sourceMappingURL=updateTemplatesPackageDeploymentInformation.js.map