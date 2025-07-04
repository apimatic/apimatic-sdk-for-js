/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  optional,
  Schema,
  string,
  typedExpandoObject,
  unknown,
} from '../schema';
import { Platforms, platformsSchema } from './platforms';

/** The Code Generation structure encapsulates all the  the details of an SDK generation performed against an API Entity */
export interface CodeGeneration {
  /** Unique Code Generation Identifier */
  id: string;
  /** The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in. */
  template: Platforms;
  /** The generated SDK */
  generatedFile: string;
  /** Generation Date and Time */
  generatedOn: string;
  /** The md5 hash of the API Description */
  hashCode: string;
  /** Generation Source */
  codeGenerationSource: string;
  /** Generation Version */
  codeGenVersion: string;
  /** Generation Status */
  success: boolean;
  additionalProperties?: Record<string, unknown>;
}

export const codeGenerationSchema: Schema<CodeGeneration> = typedExpandoObject(
  {
    id: ['id', string()],
    template: ['template', platformsSchema],
    generatedFile: ['generatedFile', string()],
    generatedOn: ['generatedOn', string()],
    hashCode: ['hashCode', string()],
    codeGenerationSource: ['codeGenerationSource', string()],
    codeGenVersion: ['codeGenVersion', string()],
    success: ['success', boolean()],
  },
  'additionalProperties',
  optional(unknown())
);
