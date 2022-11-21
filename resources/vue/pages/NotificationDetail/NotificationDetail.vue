<template>
  <MasterLayout :breadcrumbs="breadcrumbs" master-layout-class="notification-detail-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9 col-12 mx-auto">
          <BaseCard :label="t('view.notificationDetail.pageTitle')">
            <template #header>
              <div class="d-flex align-items-center">
                <h5 class="card__title">{{ t('view.notificationDetail.pageTitle') }}</h5>
                <BaseButton class="my-0 ms-auto" color="warning" @click="dialog = !dialog"
                  ><i class="fa fa-times"></i>{{ t('common.delete') }}</BaseButton
                >
              </div>
            </template>
            <BaseForm @submit.prevent="updateNotification">
              <BaseFormGroup
                :class="classes"
                :error="errors.title"
                :label="t('model.notification.title')"
                :model-value="notification.title"
                :readonly="!isEnable"
              />

              <BaseFormGroup
                :class="classes"
                :error="errors.message"
                :label="t('model.notification.message')"
                :model-value="notification.message"
                :readonly="!isEnable"
              />

              <div class="row">
                <div class="col-6">
                  <BaseDatepicker
                    :class="classes"
                    date-format="Y-m-d"
                    :disabled="!isEdit"
                    :enable-time="false"
                    :error="errors.delivery_start_at"
                    name="delivery-start"
                    :no-calendar="false"
                    :value="notification.delivery_start_at"
                  />
                </div>
                <div class="col-6">
                  <BaseDatepicker
                    :class="classes"
                    date-format="Y-m-d"
                    :disabled="!isEdit"
                    :enable-time="false"
                    :error="errors.delivery_end_at"
                    name="delivery-start"
                    :no-calendar="false"
                    :value="notification.delivery_end_at"
                  />
                </div>
              </div>

              <BaseCheckBox
                class="notification-detail-page__status"
                :class="classes"
                    :is-switch="Boolean(notification.is_disabled)"
                :readonly="!isEnable"
              >
                {{ t('model.notification.status') }}
              </BaseCheckBox>

              <BaseButton v-show="!isEdit" class="mt-5 mb-3" :full-width="true" type="button" @click="updateStatus">Edit</BaseButton>
              <BaseButton v-show="isEdit" class="mt-5 mb-3" :full-width="true">Submit</BaseButton>
            </BaseForm>
          </BaseCard>
        </div>
      </div>
    </div>
    <BaseModal v-model="dialog" :title="t('view.notificationDetail.deleteNotification')">
      <template #body>
        <p>{{ t('view.notificationDetail.confirmDelete') }}</p>
      </template>
      <template #footer>
        <BaseButton color="light" variant="plain-text" @click="dialog = false">{{ t('common.no') }}</BaseButton>
        <BaseButton class="ms-3" color="danger" @click="deleteNotification">{{ t('common.yes') }}</BaseButton>
      </template>
    </BaseModal>
  </MasterLayout>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from '@/plugins/vueI18n';
import notificationApi from '@apis/notification.api';
import BaseDatepicker from '@/components/BaseDatepicker';
import { useToast } from 'vue-toastification';
import BaseModal from '@/components/BaseModal';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const { t } = useI18n();
const $route = useRoute();
const $router = useRouter();
const toast = useToast();
dayjs.extend(utc);
dayjs.extend(timezone);

// Data
const dialog = ref(false);
const isEdit = ref(false);
let isEnable = false;
const notification = reactive({
  title: '',
  message: '',
  delivery_start_at: '',
  delivery_end_at: '',
  is_disabled: '',
  notification_id: '',
});

const errors = reactive({
  title: '',
  message: '',
  delivery_start_at: '',
  delivery_end_at: '',
  is_disabled: '',
});

// Methods
function updateStatus(){
  isEdit.value = !isEdit.value;
  isEnable = true;
  console.log(isEnable);
  
}

async function getNotificationDetail() {
  try {
    const response = await notificationApi.show($route.params.id as string);
    Object.assign(notification, response.data);
  } catch (error) {
    console.log(error);
  }
}

async function updateNotification() {
  try {
    await notificationApi.update($route.params.id as string, {
      title: notification.title,
      message: notification.message,
      delivery_start_at: dayjs(notification.delivery_start_at).format('YYYY-MM-DD'),
      delivery_end_at: dayjs(notification.delivery_end_at).format('YYYY-MM-DD'),
      is_disabled: Number(notification.is_disabled),
    });

    toast.success(t('view.notificationDetail.updateNotificationSuccess'));
    $router.push({
      name: 'notification.list',
    });
  } catch (error: any) {
    Object.assign(errors, error.response.data.errors);
    console.log(errors);
  }
}

async function deleteNotification() {
  try {
    await notificationApi.destroy($route.params.id as string);
    toast.success(t('view.notificationDetail.deleteNotificationSuccess'));
    $router.push({
      name: 'notification.list',
    });
  } catch (error: any) {
    console.log(error);
  }
}

// Computed
const breadcrumbs = computed(() => [
  {
    text: t('view.notificationList.pageTitle'),
    route: {
      name: 'notification.list',
    },
  },
  {
    text: t('view.notificationDetail.pageTitle'),
  },
]);

const classes = computed(() => (!isEdit.value ? '--readonly' : ''));

//init
getNotificationDetail();
</script>

<style lang="scss" scoped src="./NotificationDetail.scss"></style>
