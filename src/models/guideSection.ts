/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { SectionItem, sectionItemSchema } from './sectionItem';

/** This structure encapsulates all the details of a Guide Section */
export interface GuideSection {
  /** Guide Section Name */
  sectionName: string;
  /** Guide Section Content */
  sectionItems: SectionItem[];
}

export const guideSectionSchema: Schema<GuideSection> = object({
  sectionName: ['sectionName', string()],
  sectionItems: ['sectionItems', array(lazy(() => sectionItemSchema))],
});