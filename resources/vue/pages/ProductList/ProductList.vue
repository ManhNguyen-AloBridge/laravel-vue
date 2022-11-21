<template>
   <MasterLayout :breadcrumbs="breadcrumbs" master-layout-class="notification-list-page">
    <BaseCard :title="t('view.notificationList.pageTitle')">
      <template #header>
        <BaseForm @submit.prevent="onSubmitSearchForm">
          <BaseFormGroup v-model="searchData.title" :placeholder="t('model.notification.title')" />

          <div class="d-flex justify-content-end">
            <BaseButton class="notification-list-page__btn-search" size="md">{{ t('common.search') }}</BaseButton>
            <BaseButton :is-link="true" size="md" :to="{ name: 'home' }">{{ t('common.create') }}</BaseButton>
          </div>
        </BaseForm>
      </template>
      <BaseSimpleTable
        :configs="configsTable"
        :items="notificationSearch.data"
        :page="searchData.page"
        :page-size="searchData.pageSize"
        :total-item="notificationSearch.totalItem"
        :total-page="notificationSearch.totalPage"
        @on-change-page="onChangePage"
        @on-change-sort-key="onChangeSortCondition"
      >
        <template #item-title="{ item }">
          <RouterLink
            class="notification-list-page__title"
            :exact="true"
            :to="{
              name: 'notification.detail',
              params: { id: item.notification_id },
            }"
            >{{ item.title }}</RouterLink
          >
        </template>
      </BaseSimpleTable>
    </BaseCard>
  </MasterLayout>
</template>

<script setup lang="ts">
import {useI18n} from '@/plugins/useI18n';
import { ApiResponse } from '@/types/api';
import { reactive, computed } from 'vue';
const { t } = useI18n();

// Data
const breadcrumbs = [
  {
    text: 'Home',
    route: {
      name: 'home',
    },
  },
  {
    text: t('view.notificationList.pageTitle'),
  },
];

const listRoom = reactive({
    data:[] as Array<ApiResponse.Product>
});

// Computed
const configsTable = computed(
  () =>
    [
      {
        text: 'ID',
        headerClasses: 'custom-header-class',
        align: 'center',
        value: 'notification_id',
        valueClasses: 'custom-class',
        sortable: true,
      },
      {
        sortable: true,
        text: t('model.notification.title'),
        value: 'title',
      },
      {
        sortable: true,
        text: t('model.notification.message'),
        value: 'message',
      },
      {
        text: t('model.notification.deliverStart'),
        value: 'delivery_start_at',
      },
      {
        text: t('model.notification.deliverEnd'),
        value: 'delivery_end_at',
      },
      {
        text: t('model.notification.status'),
        value: 'is_disabled',
      },
    ] as Array<DatatableConfig>,
);

</script>

<style scoped src="./ProductList.scss">

</style>
