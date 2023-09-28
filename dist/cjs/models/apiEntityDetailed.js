"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.apiEntityDetailedSchema = void 0;
var schema_1 = require("../schema");
var authentication_1 = require("./authentication");
var codeGenSettings_1 = require("./codeGenSettings");
var customType_1 = require("./customType");
var endpoint_1 = require("./endpoint");
var endpointsGroup_1 = require("./endpointsGroup");
var metaData_1 = require("./metaData");
var serverConfiguration_1 = require("./serverConfiguration");
var testGenSettings_1 = require("./testGenSettings");
exports.apiEntityDetailedSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.string)()],
    encryptedId: ['encryptedId', (0, schema_1.string)()],
    apiKey: ['apiKey', (0, schema_1.string)()],
    apiGroupId: ['apiGroupId', (0, schema_1.string)()],
    imageUri: ['imageUri', (0, schema_1.string)()],
    creationDate: ['creationDate', (0, schema_1.string)()],
    mPublic: ['public', (0, schema_1.boolean)()],
    name: ['name', (0, schema_1.string)()],
    description: ['description', (0, schema_1.string)()],
    version: ['version', (0, schema_1.string)()],
    additionalHeaders: ['additionalHeaders', (0, schema_1.array)((0, schema_1.string)())],
    authentication: ['authentication', (0, schema_1.lazy)(function () { return authentication_1.authenticationSchema; })],
    codeGenSettings: ['codeGenSettings', (0, schema_1.lazy)(function () { return codeGenSettings_1.codeGenSettingsSchema; })],
    testGenSettings: ['testGenSettings', (0, schema_1.lazy)(function () { return testGenSettings_1.testGenSettingsSchema; })],
    errors: ['errors', (0, schema_1.array)((0, schema_1.string)())],
    serverConfiguration: [
        'serverConfiguration',
        (0, schema_1.lazy)(function () { return serverConfiguration_1.serverConfigurationSchema; }),
    ],
    endpointsGroup: [
        'endpointsGroup',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return endpointsGroup_1.endpointsGroupSchema; }))),
    ],
    metaData: ['metaData', (0, schema_1.lazy)(function () { return metaData_1.metaDataSchema; })],
    endpoints: ['endpoints', (0, schema_1.array)((0, schema_1.lazy)(function () { return endpoint_1.endpointSchema; }))],
    customTypes: ['customTypes', (0, schema_1.array)((0, schema_1.lazy)(function () { return customType_1.customTypeSchema; }))]
});
//# sourceMappingURL=apiEntityDetailed.js.map