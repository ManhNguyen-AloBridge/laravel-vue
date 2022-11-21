import axios, { AxiosInstance } from 'axios';
import { config, authResponseInterceptor as responseInterceptor, requestInterceptor } from '@/plugins/axiosConfig';
import { ApiResponse, ApiPayload } from '@/types/api';

const $axios = axios.create(config);
requestInterceptor($axios);
responseInterceptor($axios);

const login = async (payload: ApiPayload.Login) => {
  const response = await $axios.request<ApiResponse.Auth>({
    url: '/login',
    method: 'POST',
    data: payload,
  });

  return response.data;
};

const refreshToken = async (refreshToken: string) => {
  const response = await $axios.request<ApiResponse.Auth>({
    url: '/refresh-token',
    method: 'POST',
    data: {
      refresh_token: refreshToken,
    },
  });

  return response.data;
};

export default {
  login,
  refreshToken,
};
