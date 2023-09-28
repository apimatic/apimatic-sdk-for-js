/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
import { Field } from './field';
import { ImplementationType } from './implementationType';
/** This structure helps creates a new complex model type. */
export interface CustomType {
    /** Unique Type Identifier */
    id: string;
    /** Unique  API Entity identifier */
    apiId: string;
    /** Custom Type Name */
    name: string;
    /** Data Format */
    baseType: string;
    /** The structure helps describes the nature of implementation of a  custom model. A model can be of 3 types. */
    implementationType: ImplementationType;
    /** Type Fields */
    fields: Field[];
}
export declare const customTypeSchema: Schema<CustomType>;
