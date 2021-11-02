/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import {
  ApiValidationSummary,
  apiValidationSummarySchema,
} from '../models/apiValidationSummary';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class APIValidationExternalApisController extends BaseController {
  /**
   * Validate an API by uploading the API specification file.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * validating the API using this endpoint. When specifying Metadata, the uploaded file will be a zip
   * file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param file         The API specification file.<br>The type of the specification file should be
   *                                    any of the [supported formats](https://docs.apimatic.io/api-
   *                                    transformer/overview-transformer#supported-input-formats).
   * @return Response from the API call
   */
  async validateAPIViaFile(
    file: FileWrapper,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiValidationSummary>> {
    const req = this.createRequest('POST', '/validation/validate-via-file');
    req.baseUrl('default');
    req.header('Content-Type', 'multipart/form-data');
    req.formData({
      file: file,
    });
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthenticated');
    req.throwOn(403, ApiError, 'Forbidden');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(apiValidationSummarySchema, requestOptions);
  }

  /**
   * Validate an API by providing the URL of the API specification file.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * validating the API using this endpoint. When specifying Metadata, the URL provided will be that of a
   * zip file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param descriptionUrl The URL for the API specification file.<br><br>**Note:** This URL should be
   *                                 publicly accessible.
   * @return Response from the API call
   */
  async validateAPIViaURL(
    descriptionUrl?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiValidationSummary>> {
    const req = this.createRequest('GET', '/validation/validate-via-url');
    req.baseUrl('default');
    const mapped = req.prepareArgs({
      descriptionUrl: [descriptionUrl, optional(string())],
    });
    req.query('descriptionUrl', mapped.descriptionUrl);
    req.throwOn(400, ApiError, 'Bad Request');
    req.throwOn(401, ApiError, 'Unauthenticated');
    req.throwOn(403, ApiError, 'Forbidden');
    req.throwOn(500, ApiError, 'Internal Server Error');
    return req.callAsJson(apiValidationSummarySchema, requestOptions);
  }
}
