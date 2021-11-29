/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Validation exception contains information, warnings, messages and errors. */
export interface ValidationException {
  reason: string;
  /** Validation Summary of the API in case validation failed */
  summary?: string;
}

export const validationExceptionSchema: Schema<ValidationException> = object({
  reason: ['reason', string()],
  summary: ['summary', optional(string())],
});
