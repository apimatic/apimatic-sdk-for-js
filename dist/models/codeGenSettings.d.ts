/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
import { Schema } from '../schema';
/** APIMatic’s code generation engine has various code generation configurations to customise the behaviour and outlook across the generated SDKS. This structure encapsulates all settings for CodeGeneration. */
export interface CodeGenSettings {
    /** Generate asynchronous code for API Calls and deserialization */
    isAsync: boolean;
    /** Use HTTP Method prefixes for endpoint wrappers */
    useHttpMethodPrefix: boolean;
    /** Use "Model" postfixes for generated class names */
    useModelPrefix: boolean;
    /** Use "Enum" postfixes for enumerated types */
    useEnumPrefix: boolean;
    useConstructorsForConfig: boolean;
    /** Use common SDK library to reduce code duplication */
    useCommonSdkLibrary: boolean;
    /** Generates interfaces for controller classes in the generated SDKs */
    generateInterfaces: boolean;
    /** Generate Appveyor configuration file */
    generateAppveyorConfig: boolean;
    /** Generate CircleCI configuration file */
    generateCircleConfig: boolean;
    /** Generate Jenkins configuration file */
    generateJenkinsConfig: boolean;
    /** Generate Travis CI configuration file */
    generateTravisConfig: boolean;
    /** Use "AndroidManifest.xml" for config variables in Android */
    androidUseAppManifest: boolean;
    /** Use "App-Info.plist" file for config variables in iOS */
    iosUseAppInfoPlist: boolean;
    /** Generate "CoreData" schema and entity classes in iOS? */
    iosGenerateCoreData: boolean;
    /** Enable runscope */
    runscopeEnabled: boolean;
    /** Collect Parameters as arrays */
    collapseParamsToArray: boolean;
    /** Attempts to preserve parameter order for endpoints */
    preserveParameterOrder: boolean;
    /** Append JSON/XML accept and content-type headers */
    appendContentHeaders: boolean;
    modelSerializationIsJSON: boolean;
    /** Return a null value on HTTP 404 */
    nullify404: boolean;
    /** Validate required parameters to be Not Null */
    validateRequiredParameters: boolean;
    /** Allow models to have additional runtime properties */
    enableAdditionalModelProperties: boolean;
    javaUsePropertiesConfig: boolean;
    /** Use "Controller" postfixes for generated controller classes */
    useControllerPrefix: boolean;
    /** Use Exception Prefixes */
    useExceptionPrefix: boolean;
    /** Parameter Array format with index or without */
    parameterArrayFormat: string;
    /** Configure the HTTP client for Objective C */
    objCHttpClient: string;
    /** Configure the HTTP client for C# */
    cSharpHttpClient: string;
    /** Configure the HTTP client for  Android */
    androidHttpClient: string;
    /** Configure the HTTP client for node */
    nodeHttpClient: string;
    /** Configure the HTTP client for PHP */
    phpHttpClient: string;
    bodySerialization: number;
    /** Specify type of array serialisation */
    arraySerialization: string;
    /** This option specifies the duration (in seconds) after which requests would timeout */
    timeout: number;
    /** Enabling this generates code in the SDKs for logging events in the API cycle using a library. */
    enableLogging: boolean;
    /** Enabling caching of responses (not available in all languages) */
    enableHttpCache: boolean;
    /** Specify number of retries */
    retries: number;
    /** Specify retry interval in case of failures */
    retryInterval: number;
    /** Generate advanced read me files */
    generateAdvancedDocs: boolean;
    /** Store Timezone information for the generation */
    storeTimezoneInformation: boolean;
    /** Use "Controller" postfixes for generated controller classes */
    enablePhpComposerVersionString: boolean;
    /** Specify Security Protocols */
    securityProtocols: string[];
    /** Use underscores before and after numbers for underscore case */
    underscoreNumbers: boolean;
    /** Allow usage of a Singleton Pattern */
    useSingletonPattern: boolean;
    /** Files/dependencies used for linting are not generated if this option is enabled */
    disableLinting: boolean;
    /** Create a configuration option in SDKs to optionally skip certificate verification when establishing HTTPS connections. */
    allowSkippingSSLCertVerification: boolean;
    /** Apply Customisations */
    applyCustomizations: string[];
    /** Enabling this will stop splitting of words when converting identifiers from API specification to language-specific identifiers. */
    doNotSplitWords: string[];
    /** Sorts resources such as endpoints, endpoint groups and models in generated documentation */
    sortResources: boolean;
    /** Enable a global user agent */
    enableGlobalUserAgent: boolean;
}
export declare const codeGenSettingsSchema: Schema<CodeGenSettings>;