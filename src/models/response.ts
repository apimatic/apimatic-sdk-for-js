/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, Schema, string } from '../schema';
import { Attributes, attributesSchema } from './attributes';

/** The structure encapsulates all details of a request response */
export interface Response {
  /** Specify if response is optional or not */
  optional: boolean;
  /** Specify response type */
  type: string;
  /** Specify if response is constant */
  constant: boolean;
  /** Specify if response is array */
  isArray: boolean;
  /** Specify if response is stream */
  isStream: boolean;
  /** Specify  if response has attributes */
  isAttribute: boolean;
  /** Specify if response is collected as map */
  isMap: boolean;
  /** The structure contain attribute details of a parameter type. */
  attributes: Attributes;
  /** Specify is response is nullable */
  nullable: boolean;
  /** Unique response identifier */
  id: string;
  /** Response name */
  name: string;
}

export const responseSchema: Schema<Response> = object({
  optional: ['optional', boolean()],
  type: ['type', string()],
  constant: ['constant', boolean()],
  isArray: ['isArray', boolean()],
  isStream: ['isStream', boolean()],
  isAttribute: ['isAttribute', boolean()],
  isMap: ['isMap', boolean()],
  attributes: ['attributes', lazy(() => attributesSchema)],
  nullable: ['nullable', boolean()],
  id: ['id', string()],
  name: ['name', string()],
});