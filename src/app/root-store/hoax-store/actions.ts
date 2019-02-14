import { Action } from '@ngrx/store';

export enum HoaxActionTypes {
    HOAX_BEGIN_LOADING_REQUESTS = '[HOAX] Begin loading requests',
}

export class HoaxBeginLoadingRequests implements Action
{
    readonly type = HoaxActionTypes.HOAX_BEGIN_LOADING_REQUESTS;
}

export type Actions = HoaxBeginLoadingRequests;
