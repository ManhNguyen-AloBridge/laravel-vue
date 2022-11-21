<script lang="ts" setup>
import './LayoutHeaderNavbar.scss';
import { computed, ref } from 'vue';
import { useI18n } from '@/plugins/vueI18n';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import { deleteCookie } from '@utils/cookies';

const openDropdownFlg = ref(false);
const { t } = useI18n();
const store = useStore();
const router = useRouter();

const loggedUser = computed(() => store.state.loggedUser);
const logout = () => {
  deleteCookie('refreshToken');
  deleteCookie('accessToken');
  store.dispatch('logout');

  router.push({
    name: 'login',
  });
};

function toggleDropdownMenu() {
  openDropdownFlg.value = !openDropdownFlg.value;
}

function onClickOutside(event: MouseEvent) {
  if (openDropdownFlg.value && !(event.target as HTMLElement).closest('.navbar__user')) {
    openDropdownFlg.value = false;
  }
}
</script>

<template>
  <div class="navbar">
    <p class="navbar__user" @click="toggleDropdownMenu">
      <span class="navbar__user-name">{{ loggedUser.name }}</span
      ><i class="fas fa-user"></i>
    </p>

    <div
      v-click-outside="onClickOutside"
      class="navbar__dropdown-menu dropdown-menu"
      :class="{ show: openDropdownFlg }"
    >
      <div class="row m-0 h-100 navbar__dropdown-content card-shadow">
        <div class="col-12 d-flex align-items-center justify-content-end p-0">
          <a class="dropdown-item" href="#" @click="logout"
            ><i class="fas fa-sign-out-alt"></i> {{ t('component.navbar.logout') }}</a
          >
        </div>
        <div class="col-5 p-0">
          <img alt="avatar" class="navbar__avatar" src="@/assets/images/avatar-default.png" />
        </div>
        <div class="col-7 p-0">
          <ul aria-labelledby="child-menu" class="navbar__link p-0">
            <li>
              <router-link class="dropdown-item w-100" :to="{ name: 'home' }">Profile</router-link>
            </li>
            <li>
              <router-link class="dropdown-item w-100" :to="{ name: 'home' }">Change Password</router-link>
            </li>
            <li>
              <router-link class="dropdown-item w-100" :to="{ name: 'home' }"
                ><span class="pe-3">Help</span><i class="fas fa-question-circle"></i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
