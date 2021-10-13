/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  TemplatesPackageDeploymentInformation,
  templatesPackageDeploymentInformationSchema,
} from './templatesPackageDeploymentInformation';

/** The structure contains Package Deployment Information along with Id. */
export interface PackageDeploymentInformation {
  /** Package Deployment Identifier */
  id: string;
  /** This structure encapsulates all package deployment details. */
  templatesPackageDeploymentInformation: TemplatesPackageDeploymentInformation;
}

export const packageDeploymentInformationSchema: Schema<PackageDeploymentInformation> = object(
  {
    id: ['id', string()],
    templatesPackageDeploymentInformation: [
      'templatesPackageDeploymentInformation',
      lazy(() => templatesPackageDeploymentInformationSchema),
    ],
  }
);
