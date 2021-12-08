/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** This structure encapsulates all the attributes of an API Endpoints Group. */
export interface EndpointsGroup {
  name: string;
  description: string;
}

export const endpointsGroupSchema: Schema<EndpointsGroup> = object({
  name: ['name', string()],
  description: ['description', string()],
});