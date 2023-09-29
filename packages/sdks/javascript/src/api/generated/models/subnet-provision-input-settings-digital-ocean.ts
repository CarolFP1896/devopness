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
 * @interface SubnetProvisionInputSettingsDigitalOcean
 */
export interface SubnetProvisionInputSettingsDigitalOcean {
    /**
     * The cloud provider region where the subnet will be created
     * @type {string}
     * @memberof SubnetProvisionInputSettingsDigitalOcean
     */
    region: string;
    /**
     * The IP CIDR range of the subnet
     * @type {string}
     * @memberof SubnetProvisionInputSettingsDigitalOcean
     */
    cidr_block: string;
}

