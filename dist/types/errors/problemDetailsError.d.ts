/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { ApiError } from '../core';
/**
 * Creates an instance of ProblemDetails
 */
interface ProblemDetails {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
    errors?: Record<string, unknown>;
    additionalProperties?: Record<string, unknown>;
}
export declare class ProblemDetailsError extends ApiError<ProblemDetails> {
}
export {};
//# sourceMappingURL=problemDetailsError.d.ts.map