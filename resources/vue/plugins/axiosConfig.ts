import { AxiosRequestConfig, AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { store } from '@/store';

let requestCount = 0;

export const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  // timeout: 60 * 100
  // withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

let timeout: NodeJS.Timeout;
function showLoading() {
  clearTimeout(timeout);
  requestCount++;

  if (requestCount === 1) {
    store.dispatch('setLoadingFlag', true);
  }
}

function hideLoading() {
  requestCount--;

  if (requestCount === 0) {
    timeout = setTimeout(() => {
      store.dispatch('setLoadingFlag', false);
    }, 500);
  }
}

export const requestInterceptor = ($axios: AxiosInstance) => {
  $axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${store.state.accessToken}`,
      };
      showLoading();
      return config;
    },
    (error: AxiosError) => {
      hideLoading();
      return Promise.reject(error);
    },
  );
};

export const authResponseInterceptor = ($axios: AxiosInstance) => {
  $axios.interceptors.response.use(
    (response: AxiosResponse) => {
      hideLoading();
      return response;
    },
    (error: AxiosError) => {
      hideLoading();
      return Promise.reject(error);
    },
  );
};

let isReAuthenticating = false;
let pendingRequests: any[] = [];

const flushPendingRequests = (error: any) => {
  pendingRequests.forEach((promise: any) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });

  isReAuthenticating = false;
  pendingRequests = [];
};

const isAuthError = (error: AxiosError): boolean => {
  return error?.response?.status === StatusCodes.UNAUTHORIZED;
};

export const responseInterceptor = ($axios: AxiosInstance, $auth: any) => {
  const onRejected = (error: AxiosError) => {
    const originalRequest: AxiosRequestConfig = error.config;

    if (isAuthError(error) && isReAuthenticating) {
      return new Promise((resolve, reject) => {
        pendingRequests.push({ resolve, reject });
      })
        .then(() => {
          return $axios(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    isReAuthenticating = true;

    console.log('refreshing token ...'); //eslint-disable-line
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        await $auth.refreshToken();

        console.log('refreshing token successful...'); //eslint-disable-line

        flushPendingRequests(null);
        resolve($axios(originalRequest));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        console.log('refreshing token failure...'); //eslint-disable-line
        e.status = StatusCodes.FORBIDDEN;

        flushPendingRequests(e);
        reject(e);
        $auth.logout();
      }
    });
  };

  $axios.interceptors.response.use(
    (response: AxiosResponse) => {
      hideLoading();
      return response;
    },
    (error: AxiosError) => {
      hideLoading();
      return onRejected(error);
    },
  );
};

export default {
  config,
  requestInterceptor,
  authResponseInterceptor,
  responseInterceptor,
};
