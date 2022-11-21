import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { config, authResponseInterceptor, requestInterceptor } from './axiosConfig';
import authApi from '@apis/auth.api';
import { deleteCookie, getCookie } from '@utils/cookies';
import { store } from '@/store';

const $axios: AxiosInstance = axios.create(config);

const authService = {
  login() {
    authApi.refreshToken(getCookie('accessToken'));
  },
  logout() {
    // authApi.logout();
    deleteCookie('refreshToken');
    deleteCookie('accessToken');
    store.dispatch('logout');
  },
};

requestInterceptor($axios);
authResponseInterceptor($axios);

export default $axios;
