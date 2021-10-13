/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Link
 */
export enum Link {
  EnumHttpswwwnugetorgpackagesmyPackage111 = 'https://www.nuget.org/packages/myPackage/1.1.1',
}

/**
 * Schema for Link
 */
export const linkSchema: Schema<Link> = stringEnum(Link);
