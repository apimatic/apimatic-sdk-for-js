"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.portalGenerationAsyncResponseSchema = void 0;
var schema_1 = require("../schema");
var links_1 = require("./links");
exports.portalGenerationAsyncResponseSchema = (0, schema_1.object)({ id: ['id', (0, schema_1.string)()], links: ['links', (0, schema_1.lazy)(function () { return links_1.linksSchema; })] });
//# sourceMappingURL=portalGenerationAsyncResponse.js.map