import resource from './resource';
import {ApiPayload, ApiResponse} from '@/types/api'

const resourceApis = resource('notification');

export const list = async (payload?:ApiPayload.NotificationList)=>{
    return await resourceApis.list<ApiPayload.Pagination, ApiResponse.NotificationPagination>(payload);
};

export const show = async (id: number|string) =>{
    return await resourceApis.show<ApiResponse.Notification>(id)
}

export const update = async (id: number|string, payload: ApiPayload.NotificationUpdate) => {

    console.log(payload);
    
    return await resourceApis.update<ApiPayload.NotificationUpdate, any>(id,payload);
}

export const destroy = async (id:number| string) => {
    return await resourceApis.destroy(id);
}

export default {
    list,
    show,
    update,
    destroy
}