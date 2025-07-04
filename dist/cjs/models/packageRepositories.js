"use strict";
/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
exports.__esModule = true;
exports.packageRepositoriesSchema = exports.PackageRepositories = void 0;
var schema_1 = require("../schema");
/**
 * Enum for PackageRepositories
 */
var PackageRepositories;
(function (PackageRepositories) {
    PackageRepositories["Npm"] = "Npm";
    PackageRepositories["PyPi"] = "PyPI";
    PackageRepositories["RubyGems"] = "RubyGems";
})(PackageRepositories = exports.PackageRepositories || (exports.PackageRepositories = {}));
/**
 * Schema for PackageRepositories
 */
exports.packageRepositoriesSchema = (0, schema_1.stringEnum)(PackageRepositories);
//# sourceMappingURL=packageRepositories.js.map