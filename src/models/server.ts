/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** The user can specify multiple servers within an environment. A server comprises of a name and a URL. The names of the hosts remain consistent over different environments but their values may vary. The URL values can contain any number of parameters defined. */
export interface Server {
  /** Unique Server identifier */
  id: string;
  /** Server Name */
  name: string;
  /** Server URL */
  url: string;
}

export const serverSchema: Schema<Server> = object({
  id: ['id', string()],
  name: ['name', string()],
  url: ['url', string()],
});
