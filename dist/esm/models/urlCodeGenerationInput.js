/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { object, string } from '../schema';
import { platformsSchema } from './platforms';
export const urlCodeGenerationInputSchema = object({ url: ['url', string()], template: ['template', platformsSchema] });
//# sourceMappingURL=urlCodeGenerationInput.js.map