/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PackageRepositories
 */
export enum PackageRepositories {
  Npm = 'Npm',
  PyPI = 'PyPI',
  RubyGems = 'RubyGems',
}

/**
 * Schema for PackageRepositories
 */
export const packageRepositoriesSchema: Schema<PackageRepositories> = stringEnum(PackageRepositories);