import resource from './resource';
import { ApiPayload, ApiResponse } from '@/types/api';

const resourceApis = resource('account');

export const list = async (payload?: ApiPayload.UserList) => {
  return await resourceApis.list<ApiPayload.Pagination, ApiResponse.UserPagination>(payload);
};

export const show = async (id: number | string) => {
  return await resourceApis.show<ApiResponse.User>(id);
};

export const update = async (id: number | string, payload: ApiPayload.UserUpdate) => {
  return await resourceApis.update<ApiPayload.UserUpdate, any>(id, payload);
};

export const destroy = async (id: number | string) => {
  return await resourceApis.destroy(id);
};

export default {
  list,
  show,
  update,
  destroy,
};
