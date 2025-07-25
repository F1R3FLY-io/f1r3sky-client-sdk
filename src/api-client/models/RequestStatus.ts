/* tslint:disable */
/* eslint-disable */
/**
 * Embers API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const RequestStatus = {
    Done: 'done',
    Ongoing: 'ongoing',
    Cancelled: 'cancelled'
} as const;
export type RequestStatus = typeof RequestStatus[keyof typeof RequestStatus];


export function instanceOfRequestStatus(value: any): boolean {
    for (const key in RequestStatus) {
        if (Object.prototype.hasOwnProperty.call(RequestStatus, key)) {
            if (RequestStatus[key as keyof typeof RequestStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RequestStatusFromJSON(json: any): RequestStatus {
    return RequestStatusFromJSONTyped(json, false);
}

export function RequestStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestStatus {
    return json as RequestStatus;
}

export function RequestStatusToJSON(value?: RequestStatus | null): any {
    return value as any;
}

export function RequestStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): RequestStatus {
    return value as RequestStatus;
}

