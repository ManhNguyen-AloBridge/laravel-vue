<script setup lang="ts">
import { useI18n } from '@/plugins/vueI18n';
import userApi from '@apis/user.api';
import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPermissionList } from '@/composables/generateOptions';
import datetime from '@/utils/datetime';
import BaseModal from '@/components/BaseModal';
import { useToast } from 'vue-toastification';

const { t } = useI18n();
const $route = useRoute();
const $router = useRouter();
const toast = useToast();

const permissions = getPermissionList();
const breadcrumbs = computed(() => [
  {
    text: 'User',
    route: {
      name: 'users.list',
    },
  },
  {
    text: t('view.userDetail.pageTitle'),
  },
]);
const dialog = ref(false);

// User logic
const user = reactive({
  admin_id: 0,
  created_at: '',
  email: '',
  family_name: '',
  family_name_kana: '',
  first_name: '',
  first_name_kana: '',
  permission_code: 0,
  updated_at: '',
  password: '',
  password_confirm: '',
});

async function getUserDetail() {
  try {
    const response = await userApi.show($route.params.id as string);
    Object.assign(user, response.data);
  } catch (error) {
    console.log(error);
  }
}

async function updateUser() {
  try {
    const response = await userApi.update($route.params.id as string, {
      email: user.email,
      permission_code: user.permission_code,
      password: user.password,
    });
  } catch (error: any) {
    console.error(error);
  }
}

async function deleteUser() {
  try {
    await userApi.destroy($route.params.id as string);
    toast.success(t('view.userDetail.deleteUserSuccess'));
    $router.push({
      name: 'users.list',
    });
  } catch (error: any) {
    console.error(error);
  }
}

getUserDetail();
</script>

<template>
  <MasterLayout :breadcrumbs="breadcrumbs">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9 col-12 mx-auto">
          <BaseCard :label="t('view.userDetail.pageTitle')">
            <template #header>
              <div class="d-flex align-items-center">
                <h5 class="card__title">{{ t('view.userDetail.pageTitle') }}</h5>
                <BaseButton class="my-0 ms-auto" color="warning" @click="dialog = !dialog"
                  ><i class="fa fa-times"></i>{{ t('common.delete') }}</BaseButton
                >
              </div>
            </template>
            <BaseForm @submit.prevent="updateUser">
              <BaseFormGroup
                :disabled="true"
                :label="t('model.user.name')"
                :model-value="t('helper.concat', [user.first_name, user.family_name])"
                :readonly="true"
              />
              <BaseFormGroup
                :disabled="true"
                :label="t('model.user.nameKana')"
                :model-value="t('helper.concat', [user.first_name_kana, user.family_name_kana])"
                :readonly="true"
              />
              <BaseFormGroup :label="t('model.user.permission')">
                <BaseSelect
                  v-model="user.permission_code"
                  :items="permissions"
                  label-key="title"
                  null-option-title="Select role"
                  value-key="id"
                ></BaseSelect>
              </BaseFormGroup>
              <BaseFormGroup v-model="user.email" :label="t('model.user.email')" type="email" />
              <BaseFormGroup>
                <div class="row">
                  <BaseFormGroup group-class="mb-0 col-md-6" :label="t('model.user.password')">
                    <BasePasswordInput
                      v-model="user.password"
                      autocomplete="off"
                      placeholder="********"
                    ></BasePasswordInput>
                  </BaseFormGroup>
                  <BaseFormGroup group-class="mb-0 col-md-6" :label="t('model.user.passwordConfirm')">
                    <BasePasswordInput
                      v-model="user.password_confirm"
                      autocomplete="off"
                      placeholder="********"
                    ></BasePasswordInput>
                  </BaseFormGroup>
                </div>
              </BaseFormGroup>
              <BaseFormGroup>
                <div class="row">
                  <BaseFormGroup
                    :disabled="true"
                    group-class="mb-0 col-md-6"
                    :label="t('model.user.createdAt')"
                    :model-value="datetime.date(user.created_at)"
                  />
                  <BaseFormGroup
                    :disabled="true"
                    group-class="mb-0 col-md-6"
                    :label="t('model.user.updatedAt')"
                    :model-value="datetime.date(user.updated_at)"
                  />
                </div>
              </BaseFormGroup>
              <BaseButton class="mt-5 mb-3" :full-width="true">Submit</BaseButton>
            </BaseForm>
          </BaseCard>
        </div>
      </div>
    </div>
    <BaseModal v-model="dialog" :title="t('view.userDetail.deleteUser')">
      <template #body>
        <p>{{ t('view.userDetail.confirmDelete') }}</p>
      </template>
      <template #footer>
        <BaseButton color="light" variant="plain-text" @click="dialog = false">{{ t('common.no') }}</BaseButton>
        <BaseButton class="ms-3" color="danger" @click="deleteUser">{{ t('common.yes') }}</BaseButton>
      </template>
    </BaseModal>
  </MasterLayout>
</template>

<style scoped lang="" src="./UserDetail.scss"></style>
