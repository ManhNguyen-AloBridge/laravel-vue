<script setup lang="ts">
import './LayoutSidebar.scss';

import { computed, reactive } from 'vue';
import SidebarList from './LayoutSidebarList.vue';
import SidebarItem from './LayoutSidebarItem.vue';
import { useStore } from '@/store';
import { useI18n } from '@/plugins/vueI18n';


const { t } = useI18n();

const items = reactive([
  {
    icon: 'fa-fw fas fa-home',
    text: 'Home',
    route: {
      name: 'home',
    },
  },
  {
    icon: 'fa-fw fas fa-users',
    text: '要員一覧',
    route: {
      name: 'users.list',
    },
  },
  {
    icon: 'fa-fw fas fa-cog',
    text: '設定',
    submenus: [
      {
        text: '経歴書設定',
        route: {
          name: 'users1',
        },
      },
      {
        text: '経歴書設定 2',
        route: {
          name: 'users2',
        },
      },
    ],
  },
  {
    icon: 'fa-fw fas fa-users',
    text: '要員一覧',
    route: {
      name: 'users3',
    },
  },
  {
    icon: 'fa-fw fas fa-users',
    text: t('view.notificationList.pageTitle'),
    route: {
      name: 'notification.list',
    },
  },
]);
const store = useStore();
const sidebarFlag = computed(() => store.state.sidebarFlag);

function hideSidebar() {
  store.dispatch('setSidebarFlag', false);
}
</script>
<template>
  <aside
    class="sidebar"
    :class="{
      '--show': sidebarFlag,
    }"
  >
    <span class="sidebar__close">
      <i class="fas fa-arrow-left" @click="hideSidebar"></i>
    </span>
    <div class="sidebar__header">
      <!-- <a href="">
        <img alt="" src="sidebar__logo" />
      </a> -->
    </div>
    <div class="sidebar__body">
      <SidebarList>
        <SidebarItem v-for="(item, index) in items" :key="index" :index="index" :item="item" />
      </SidebarList>
    </div>
    <div class="sidebar__footer"></div>
  </aside>
</template>
<style scoped></style>
