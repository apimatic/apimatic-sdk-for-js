/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { array, lazy, object, string } from '../schema';
import { sectionItemSchema } from './sectionItem';
export const guideSectionSchema = object({
    sectionName: ['sectionName', string()],
    sectionItems: ['sectionItems', array(lazy(() => sectionItemSchema))],
});
//# sourceMappingURL=guideSection.js.map