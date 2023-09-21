/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';
import {
  PackageRepositories,
  packageRepositoriesSchema,
} from './packageRepositories';
import { Platforms, platformsSchema } from './platforms';

export interface PublishPackageInput {
  packageRepository: PackageRepositories;
  /** The structure contains platforms that APIMatic CodeGen can generate SDKs and Docs in. */
  template: Platforms;
  packageName: string;
  version: string;
  additionalDeploymentInformation?: unknown;
}

export const publishPackageInputSchema: Schema<PublishPackageInput> = object({
  packageRepository: ['packageRepository', packageRepositoriesSchema],
  template: ['template', platformsSchema],
  packageName: ['packageName', string()],
  version: ['version', string()],
  additionalDeploymentInformation: [
    'additionalDeploymentInformation',
    optional(unknown()),
  ],
});
