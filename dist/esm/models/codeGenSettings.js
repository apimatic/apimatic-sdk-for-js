/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { array, boolean, number, object, string } from '../schema';
export const codeGenSettingsSchema = object({
    isAsync: ['isAsync', boolean()],
    useHttpMethodPrefix: ['useHttpMethodPrefix', boolean()],
    useModelPrefix: ['useModelPrefix', boolean()],
    useEnumPrefix: ['useEnumPrefix', boolean()],
    useConstructorsForConfig: ['useConstructorsForConfig', boolean()],
    useCommonSdkLibrary: ['useCommonSdkLibrary', boolean()],
    generateInterfaces: ['generateInterfaces', boolean()],
    generateAppveyorConfig: ['generateAppveyorConfig', boolean()],
    generateCircleConfig: ['generateCircleConfig', boolean()],
    generateJenkinsConfig: ['generateJenkinsConfig', boolean()],
    generateTravisConfig: ['generateTravisConfig', boolean()],
    androidUseAppManifest: ['androidUseAppManifest', boolean()],
    iosUseAppInfoPlist: ['iosUseAppInfoPlist', boolean()],
    iosGenerateCoreData: ['iosGenerateCoreData', boolean()],
    runscopeEnabled: ['runscopeEnabled', boolean()],
    collapseParamsToArray: ['collapseParamsToArray', boolean()],
    preserveParameterOrder: ['preserveParameterOrder', boolean()],
    appendContentHeaders: ['appendContentHeaders', boolean()],
    modelSerializationIsJSON: ['modelSerializationIsJSON', boolean()],
    nullify404: ['nullify404', boolean()],
    validateRequiredParameters: ['validateRequiredParameters', boolean()],
    enableAdditionalModelProperties: [
        'enableAdditionalModelProperties',
        boolean(),
    ],
    javaUsePropertiesConfig: ['javaUsePropertiesConfig', boolean()],
    useControllerPrefix: ['useControllerPrefix', boolean()],
    useExceptionPrefix: ['useExceptionPrefix', boolean()],
    parameterArrayFormat: ['parameterArrayFormat', string()],
    objCHttpClient: ['objCHttpClient', string()],
    cSharpHttpClient: ['cSharpHttpClient', string()],
    androidHttpClient: ['androidHttpClient', string()],
    nodeHttpClient: ['nodeHttpClient', string()],
    phpHttpClient: ['phpHttpClient', string()],
    bodySerialization: ['bodySerialization', number()],
    arraySerialization: ['arraySerialization', string()],
    timeout: ['timeout', number()],
    enableLogging: ['enableLogging', boolean()],
    enableHttpCache: ['enableHttpCache', boolean()],
    retries: ['retries', number()],
    retryInterval: ['retryInterval', number()],
    generateAdvancedDocs: ['generateAdvancedDocs', boolean()],
    storeTimezoneInformation: ['storeTimezoneInformation', boolean()],
    enablePhpComposerVersionString: ['enablePhpComposerVersionString', boolean()],
    securityProtocols: ['securityProtocols', array(string())],
    underscoreNumbers: ['underscoreNumbers', boolean()],
    useSingletonPattern: ['useSingletonPattern', boolean()],
    disableLinting: ['disableLinting', boolean()],
    allowSkippingSSLCertVerification: [
        'allowSkippingSSLCertVerification',
        boolean(),
    ],
    applyCustomizations: ['applyCustomizations', array(string())],
    doNotSplitWords: ['doNotSplitWords', array(string())],
    sortResources: ['sortResources', boolean()],
    enableGlobalUserAgent: ['enableGlobalUserAgent', boolean()],
});
//# sourceMappingURL=codeGenSettings.js.map