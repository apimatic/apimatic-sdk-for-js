/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  optional,
  Schema,
  string,
  typedExpandoObject,
  unknown,
} from '../schema';

export interface Links {
  status: string;
  download: string;
  additionalProperties?: Record<string, unknown>;
}

export const linksSchema: Schema<Links> = typedExpandoObject(
  { status: ['status', string()], download: ['download', string()] },
  'additionalProperties',
  optional(unknown())
);
