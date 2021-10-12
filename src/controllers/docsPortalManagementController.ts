/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { string } from '../schema';
import { BaseController } from './baseController';

export class DocsPortalManagementController extends BaseController {
  /**
   * Publish artifacts for a Hosted Portal.
   *
   * This endpoint regenerates all the artifacts for a hosted portal and uploads them to APIMatic's cloud
   * storage, from where the Portal fetches them. These artifacts include:
   *
   * 1. SDKs
   * 2. Docs
   * 3. API Specification files
   *
   * Call this endpoint to update your Hosted Portal after you update an API Entity via any of the Import
   * API Endpoints.
   *
   * __**Note: If you have an embedded portal against the same API Entity, artifacts for that portal will
   * get updated as well.**__
   *
   * @param apiEntityId   The ID of the API Entity to update the portal artifacts for.
   * @return Response from the API call
   */
  async publishHostedPortal(
    apiEntityId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({ apiEntityId: [apiEntityId, string()] });
    req.appendTemplatePath`/api-entities/${mapped.apiEntityId}/hosted-portal`;
    return req.call(requestOptions);
  }

  /**
   * Publish artifacts for an Embedded Portal and get the Portal Embed script.
   *
   * This endpoint regenerates all the artifacts for an embedded portal and uploads them to APIMatic's
   * cloud storage, from where the Portal fetches them. These artifacts include:
   *
   * 1. SDKs
   * 2. Docs
   * 3. API Specification files
   *
   * Call this endpoint to update your Embedded Portal after you update an API Entity via any of the
   * Import API Endpoints. This endpoint returns the Portal Embed script in the response.
   *
   * __**Note: If you have a hosted portal against the same API Entity, artifacts for that portal will
   * get updated as well.**__
   *
   * @param apiEntityId   The ID of the API Entity to update the portal artifacts for.
   * @return Response from the API call
   */
  async publishEmbeddedPortal(
    apiEntityId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({ apiEntityId: [apiEntityId, string()] });
    req.appendTemplatePath`/api-entities/${mapped.apiEntityId}/embedded-portal`;
    return req.call(requestOptions);
  }

  /**
   * Generate an On-premise Documentation Portal for an API Entity. This endpoint generates all artifacts
   * for the Portal and packages them together into a zip file along with the required HTML, CSS and JS
   * files. The generated artifacts include:
   *
   * 1. SDKs
   * 2. Docs
   * 3. API Specification files
   *
   * The endpoint returns a zip file that contains a static Site and can be hosted on any Web Server.
   *
   * @param apiEntityId   The ID of the API Entity to generate the Portal for.
   * @return Response from the API call
   */
  async generateOnPremPortal(
    apiEntityId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ apiEntityId: [apiEntityId, string()] });
    req.header('Accept', mapped.accept);
    req.appendTemplatePath`/api-entities/${mapped.apiEntityId}/on-prem-portal`;
    return req.call(requestOptions);
  }

  /**
   * Unpublish a Hosted or Embedded Portal published for an API Entity. Calling this endpoint deletes all
   * the published artifacts for a Portal from APIMatic's cloud storage.
   *
   * In case of a Hosted Portal, to completely remove the Portal, this endpoint needs to be called
   * against all API versions that the Portal hosts.
   *
   * In case of an Embedded Portal, to completely remove the Portal, the user needs to manually remove
   * the Portal Embed script from the embedding site.
   *
   * @param apiEntityId   The ID of the API Entity to unpublish the Portal artifacts for.
   * @return Response from the API call
   */
  async unpublishPortal(
    apiEntityId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ apiEntityId: [apiEntityId, string()] });
    req.appendTemplatePath`/api-entities/${mapped.apiEntityId}/portal`;
    return req.call(requestOptions);
  }
}
