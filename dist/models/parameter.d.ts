/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
import { Attributes } from './attributes';
/** Parameters are options passed with the endpoint */
export interface Parameter {
    /** If parameter is optional */
    optional: boolean;
    /** Type of Parameter */
    type: string;
    /** IF Parameter is constant */
    constant: boolean;
    /** If Param is collected as array */
    isArray: boolean;
    isStream: boolean;
    isAttribute: boolean;
    isMap: boolean;
    /** The structure contain attribute details of a parameter type. */
    attributes: Attributes;
    /** If Parameter is nullable */
    nullable: boolean;
    /** Unique Parameter identifier */
    id: string;
    /** Parameter Name */
    name: string;
    /** Parameter Description */
    description: string;
    /** Default Values of a Parameter */
    defaultValue: string;
    /** Specify Parameter Format */
    paramFormat: string;
}
export declare const parameterSchema: Schema<Parameter>;