/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CSNETSTANDARDLIB, cSNETSTANDARDLIBSchema } from './cSNETSTANDARDLIB';

/** This structure encapsulates all package deployment details. */
export interface TemplatesPackageDeploymentInformation {
  /** This structure contains all details that goes into package deployment. */
  cSNETSTANDARDLIB: CSNETSTANDARDLIB;
}

export const templatesPackageDeploymentInformationSchema: Schema<TemplatesPackageDeploymentInformation> = object(
  {
    cSNETSTANDARDLIB: [
      'CS_NET_STANDARD_LIB',
      lazy(() => cSNETSTANDARDLIBSchema),
    ],
  }
);
