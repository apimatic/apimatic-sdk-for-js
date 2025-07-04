"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.updateTemplatesPackageDeploymentInformationSchema = void 0;
var schema_1 = require("../schema");
var csnetstandardlib_1 = require("./csnetstandardlib");
exports.updateTemplatesPackageDeploymentInformationSchema = (0, schema_1.typedExpandoObject)({
    csNetStandardLib: [
        'CS_NET_STANDARD_LIB',
        (0, schema_1.lazy)(function () { return csnetstandardlib_1.csnetstandardlibSchema; }),
    ]
}, 'additionalProperties', (0, schema_1.optional)((0, schema_1.unknown)()));
//# sourceMappingURL=updateTemplatesPackageDeploymentInformation.js.map