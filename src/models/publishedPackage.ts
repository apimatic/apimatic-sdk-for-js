/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string, unknown } from '../schema';
import { AuthorIdentifiers, authorIdentifiersSchema } from './authorIdentifiers';

export interface PublishedPackage {
  id: string;
  createdOn: string;
  apiEntityId: string;
  packageRepository: string;
  template: string;
  packageName: string;
  version: string;
  additionalDeploymentInformation?: unknown;
  authorIdentifiers: AuthorIdentifiers;
  link: string;
}

export const publishedPackageSchema: Schema<PublishedPackage> = object({
  id: ['id', string()],
  createdOn: ['createdOn', string()],
  apiEntityId: ['apiEntityId', string()],
  packageRepository: ['packageRepository', string()],
  template: ['template', string()],
  packageName: ['packageName', string()],
  version: ['version', string()],
  additionalDeploymentInformation: [
    'additionalDeploymentInformation',
    optional(unknown()),
  ],
  authorIdentifiers: ['authorIdentifiers', lazy(() => authorIdentifiersSchema)],
  link: ['link', string()],
});
