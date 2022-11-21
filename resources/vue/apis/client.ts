import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import $axios from '@/plugins/axios';
export class Client {
  protected client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async request<T>(config: AxiosRequestConfig, authHeaders?: object): Promise<AxiosResponse<T>> {
    try {
      return await this.client.request({
        ...config,
        headers: {
          ...(config.headers || {}),
          ...(authHeaders || {}),
        },
      });
    } catch (e: any) {
      if (!e.response) {
        e.code = 500;
      }

      throw e;
    }
  }
}

export default new Client($axios);
