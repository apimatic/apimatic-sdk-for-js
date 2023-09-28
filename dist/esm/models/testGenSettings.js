/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { number, object, optional, unknown } from '../schema';
export const testGenSettingsSchema = object({
    precisionDelta: ['precisionDelta', number()],
    testTimeout: ['testTimeout', number()],
    configuration: ['configuration', optional(unknown())],
});
//# sourceMappingURL=testGenSettings.js.map