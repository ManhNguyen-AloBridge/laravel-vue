<script lang="ts" setup>
import { ref } from 'vue';
import Loading from '@/layouts/Loading';
import { useI18n } from '@/plugins/vueI18n';
import { useRouter, useRoute, RouteLocationRaw } from 'vue-router';
import { setCookie } from '@utils/cookies';
import { useStore } from '@/store';
import authApi from '@apis/auth.api';

const { t } = useI18n();
const email = ref('');
const password = ref('');
const showPasswordFlag = ref(false);
const validationError = ref('');
const router = useRouter();
const route = useRoute();
const store = useStore();

async function handleSubmit() {
  try {
    const data = await authApi.login({
      email: email.value,
      password: password.value,
    });

    store.dispatch('login', {
      accessToken: data.access_token,
    });
    setCookie('refreshToken', data.refresh_token, data.refresh_expired_time);
    setCookie('accessToken', data.access_token, data.expired_time);
    redirect();
  } catch (error: any) {
    validationError.value = error.response.data.message;
  }
}

function redirect() {
  let redirectRoute = route.query.redirect
    ? route.query.redirect
    : {
        name: 'home',
      };

  router.push(redirectRoute as RouteLocationRaw);
}
</script>

<template>
  <div class="background-image">
    <img alt="" src="@/assets/images/cover-login-page.png" />
  </div>
  <div class="login">
    <h3 class="app-title">Skill-repo</h3>
    <p class="app-description">クラウド型スキルシート管理webシステム</p>
    <BaseCard class="login-card" :header="false">
      <BaseForm @submit.prevent="handleSubmit">
        <BaseFormGroup v-model="email" autocomplete base-form-group group-class="mb-4" :label="t('view.login.email')" />
        <BaseFormGroup :error="validationError" group-class="mb-5" :label="t('view.login.password')">
          <BasePasswordInput v-model="password"></BasePasswordInput>
          <!-- <div class="password-input">
            <BaseInput
              v-model="password"
              autocomplete
              :placeholder="t('view.login.password')"
              :type="showPasswordFlag ? 'text' : 'password'"
            ></BaseInput>
            <span class="password-input__toggle" @click="showPasswordFlag = !showPasswordFlag">
              <i v-show="showPasswordFlag" class="fa fa-eye"></i>
              <i v-show="!showPasswordFlag" class="fa fa-eye-slash"></i>
            </span>
          </div> -->
        </BaseFormGroup>
        <BaseButton :full-width="true" size="lg">{{ t('view.login.login') }}</BaseButton>
        <div class="mt-3 d-flex flex-column align-items-center">
          <BaseButton color="light" variant="plain-text">{{ t('view.login.forgotPassword') }}</BaseButton>
          <BaseButton color="light" variant="plain-text">{{ t('view.login.resetPassword') }}</BaseButton>
        </div>
      </BaseForm>
    </BaseCard>
  </div>
  <Loading class="--no-padding"></Loading>
</template>

<style scoped src="./Login.scss" lang="scss"></style>
