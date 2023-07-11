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
 * 
 * @export
 * @interface SshKeyUpdate
 */
export interface SshKeyUpdate {
    /**
     * The ssh key\'s ID.
     * @type {number}
     * @memberof SshKeyUpdate
     */
    id: number;
    /**
     * The ssh key\'s name. Must not be greater than 60 characters.
     * @type {string}
     * @memberof SshKeyUpdate
     */
    name: string;
}

