import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { getCookie } from '@/utils/cookies';

interface State {
  loadingFlag: boolean;
  sidebarFlag: boolean;
  accessToken?: string;
  loggedUser: {
    name: string;
  };
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loadingFlag: false,
    sidebarFlag: false,
    accessToken: getCookie('accessToken'),
    loggedUser: {
      name: 'Admin',
    },
  },
  mutations: {
    loadingFlag(state, payload: boolean) {
      state.loadingFlag = payload;
    },
    sidebarFlag(state, payload: boolean) {
      state.sidebarFlag = payload;
    },
    accessToken(state, payload: string) {
      state.accessToken = payload;
    },
  },
  actions: {
    setLoadingFlag({ commit }, payload: boolean) {
      commit('loadingFlag', payload);
    },
    setSidebarFlag({ commit }, payload: boolean) {
      commit('sidebarFlag', payload);
    },
    login({ commit }, payload: { accessToken: string }) {
      commit('accessToken', payload.accessToken);
    },
    logout({ commit }) {
      commit('accessToken', '');
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
