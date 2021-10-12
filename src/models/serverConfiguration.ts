/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Environment, environmentSchema } from './environment';
import { Parameter, parameterSchema } from './parameter';

/** Server configurations can be used to create multiple environments, multiple servers that can be used with specific endpoints and server URLs with template paramters. */
export interface ServerConfiguration {
  /** Server Config Identifier */
  id: string;
  /** Default Environment */
  defaultEnvironment: string;
  /** Default Server */
  defaultServer: string;
  /** Environment Identifier and Name */
  environments: Environment[];
  /** Parameter Attributes */
  parameters: Parameter[];
}

export const serverConfigurationSchema: Schema<ServerConfiguration> = object({
  id: ['id', string()],
  defaultEnvironment: ['defaultEnvironment', string()],
  defaultServer: ['defaultServer', string()],
  environments: ['environments', array(lazy(() => environmentSchema))],
  parameters: ['parameters', array(lazy(() => parameterSchema))],
});
