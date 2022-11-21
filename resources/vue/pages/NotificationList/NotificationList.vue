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

        <template #item-is_disabled="{ item }">
          <span class="notification-list-page__status" :class=" item.is_disabled ? '--disabled' : '--enabled' ">
            {{ handleStatus(item.is_disabled) }}
          </span>
        </template>
      </BaseSimpleTable>
    </BaseCard>
  </MasterLayout>
</template>

<script lang="ts" setup>
import { useI18n } from '../../plugins/vueI18n';
import { BaseSimpleTable } from '@/components/BaseDataTable';
import notificationApi from '@apis/notification.api';
import { ApiResponse } from '@/types/api';
import { reactive, computed } from 'vue';
import { DatatableConfig } from '@/types/local';

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

const notificationPagination = reactive({
  totalPage: 0,
  totalItem: 0,
  data: [] as Array<ApiResponse.Notification>,
});

const notificationSearch = reactive({
  totalPage: 0,
  totalItem: 0,
  data: [] as Array<ApiResponse.Notification>,
});

const searchData = reactive({
  title: '',
  page: 1,
  pageSize: 20,
  orderBy: '',
  orderKey: '',
});

const currentSearchData = {
  ...searchData,
};


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


// Methods
async function getListNotification() {
  const response = await notificationApi.list({
    page: currentSearchData.page,
    page_size: currentSearchData.pageSize,
    order_by: currentSearchData.orderBy ?? undefined,
    order_key: currentSearchData.orderKey ?? undefined,
  });

  notificationPagination.data = response.data.data;
  notificationPagination.totalPage = response.data.total_page;
  notificationPagination.totalItem = response.data.total;

  notificationSearch.data = response.data.data;
  notificationSearch.totalPage = response.data.total_page;
  notificationSearch.totalItem = response.data.total;
}

function cloneObjectAttrs(from: Record<string, any>, to: Record<string, any>) {
  Object.keys(from).forEach((key) => {
    to[key] = from[key];
  });
}

function onSubmitSearchForm() {
  searchData.page = 1;
  cloneObjectAttrs(searchData, currentSearchData);

  if (currentSearchData.title != '') {
    notificationSearch.data = notificationPagination.data.filter((item) => {
      return item.title.includes(currentSearchData.title);
    });

    notificationSearch.totalItem = notificationSearch.data.length;
    notificationSearch.totalPage =
      notificationSearch.data.length == 0
        ? 0
        : notificationSearch.data.length < searchData.pageSize
        ? 1
        : notificationSearch.data.length % searchData.pageSize;

    return;
  }
  notificationSearch.data = notificationPagination.data;
  notificationSearch.totalItem = notificationPagination.totalItem;
  notificationSearch.totalPage = notificationPagination.totalPage;
}

function onChangeSortCondition(key: string, type: string) {
  currentSearchData.orderBy = type;
  currentSearchData.orderKey = key;
  currentSearchData.page = 1;
  cloneObjectAttrs(currentSearchData, searchData);
  getListNotification();
}

async function onChangePage(page: number) {
  currentSearchData.page = page;
  cloneObjectAttrs(currentSearchData, searchData);
  await getListNotification();
}

function handleStatus(isDisabled:number) {
  return isDisabled ? 'Disabled' : 'Enabled';
}

getListNotification();
// export default {
//   data() {
//     return {
//       breadcrumbs: [
//         {
//           text: 'User',
//           route: {
//             name: 'users.list',
//           },
//         },
//         {
//           // text: t('view.userDetail.pageTitle'),
//         },
//       ],
//       paramsList: {
//         email: '',
//         name: '',
//         permissionCode: undefined,
//         page: 1,
//         pageSize: 20,
//         orderKey: '',
//         orderBy: '',
//       },
//     };
//   },
//   methods: {
//     async getListNotification() {
//       const response = notificationApi.list(this.paramsList);
//       console.log(response);
//     },
//   },
// };
</script>

<style lang="scss" scoped src="./NotificationList.scss"></style>
