/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Default values that apply to apps created in devopness using this framework
 * @export
 * @interface LanguageRuntimeFrameworkDefaults
 */
export interface LanguageRuntimeFrameworkDefaults {
    /**
     * The version control branch that, by default, will be retrieved and deployed. This might be overriden by client apps API calls when actually triggering a new deployment.
     * @type {string}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    default_branch?: string;
    /**
     * Indicates if push to deploy webhooks are enabled for this application/environment, if so code will be deployed when commited to the default_branch
     * @type {boolean}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    push_to_deploy?: boolean;
    /**
     * Indicates if the application requires a daemon to keep it alive
     * @type {boolean}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    requires_daemon?: boolean;
    /**
     * The language runtime engine version to be used to execute this application code on the deployed servers
     * @type {string}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    engine_version?: string;
    /**
     * The base framework on top of which the application has been implemented - if any
     * @type {string}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    framework?: string;
    /**
     * The relative directory where package manager\'s manifest files (`package.json`, `composer.json`, `yarn.lock`, etc) are located. It needs to be set for applications where the actual source code is not located in the top level directory of the repository.
     * @type {string}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    root_directory?: string;
    /**
     * The relative web directory where publicly accessible assets are located and the web content should be served from
     * @type {string}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    public_directory?: string;
    /**
     * The entrypoint tells devopness how an application should be started and has basically two forms:  1) `File`: if it\'s a simple file name/path an web app will be served using the entrypoint value as its index file. Example: `index.html`  2) `Command`: if a command line instruction is provided as the entrypoint value, it will be handled as the start up command that initalizes the application. It will be assumed that the user is an advanced user that knows what she/he is doing, therefore the command specified here will be run - as is - everytime the application needs to be started.
     * @type {string}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    entrypoint?: string;
    /**
     * Required for CGI|FastCGI|SCGI|WSGI based applications or `docker` containerized applications. It tells `devopness` the private address at which the application listens to external calls. The address has `http` or `https` protocol, an domain name or IP address, optional port and optional path. Or you can specify a UNIX-socket using `unix:` prefix after protocol.
     * @type {string}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    listening_address?: string;
    /**
     * The optional command that should be executed once during deployment to build the source code and get the application in a ready state.
     * @type {string}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    build_command?: string;
    /**
     * The number of deployment history, logs and artifacts to keep stored in both devopness servers and user\'s servers
     * @type {number}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    deployments_keep?: number;
    /**
     * Indicates if at deployment time we should execute package manager command to install dependencies used in development mode
     * @type {boolean}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    install_dependencies_dev?: boolean;
    /**
     * Indicates if at deployment time we should execute package manager command to install dependencies used in production mode
     * @type {boolean}
     * @memberof LanguageRuntimeFrameworkDefaults
     */
    install_dependencies_prod?: boolean;
}

