/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Server, serverSchema } from './server';

/** An environment consists of a set of servers with base URL values. The environment can be changed programatically allowing rapid switching between different environments. For example the user can specify a Production and Testing Environment and switch between them in the generated SDK. */
export interface Environment {
  /** Unique Environment Identifier */
  id: string;
  /** Environment Name */
  name: string;
  /** The user can specify multiple servers within an environment. A server comprises of a name and a url. */
  servers: Server[];
}

export const environmentSchema: Schema<Environment> = object({
  id: ['id', string()],
  name: ['name', string()],
  servers: ['servers', array(lazy(() => serverSchema))],
});