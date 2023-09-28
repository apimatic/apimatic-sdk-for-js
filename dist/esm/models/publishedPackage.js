/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { lazy, object, optional, string, unknown } from '../schema';
import { authorIdentifiersSchema } from './authorIdentifiers';
export const publishedPackageSchema = object({
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
//# sourceMappingURL=publishedPackage.js.map