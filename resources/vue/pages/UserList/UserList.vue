<script lang="ts" setup>
import { BaseSimpleTable } from '@/components/BaseDataTable';
import { DatatableConfig } from '@/types/local';
import { reactive, computed } from 'vue';
import { ApiResponse } from '@/types/api';
import userApi from '@apis/user.api';
import { useI18n } from '@/plugins/vueI18n';
// import { PERMISSION_CODE } from '@utils/constants';
import { getPermissionList } from '@/composables/generateOptions';

const { t } = useI18n();
const configs = computed(
  () =>
    [
      {
        text: 'ID',
        headerClasses: 'custom-header-class',
        align: 'center',
        value: 'admin_id',
        valueClasses: 'custom-class',
      },
      {
        sortable: true,
        text: t('model.user.familyName'),
        value: 'family_name',
      },
      {
        sortable: true,
        text: t('model.user.email'),
        value: 'email',
      },
      {
        text: t('model.user.permission'),
        value: 'created_at',
      },
      {
        text: 'Price ($)',
        value: 'price',
      },
    ] as Array<DatatableConfig>,
);
const permissions = getPermissionList();
const breadcrumbs = [
  {
    text: 'Home',
    route: {
      name: 'home',
    },
  },
  {
    text: '要員一覧',
  },
];
const userPagination = reactive({
  totalPage: 0,
  totalItem: 0,
  data: [] as Array<ApiResponse.User>,
});

const searchData = reactive({
  email: '',
  name: '',
  permissionCode: undefined,
  page: 1,
  pageSize: 20,
  orderKey: '',
  orderBy: '',
});

const currentSearchData = {
  ...searchData,
};

function cloneObjectAttrs(from: Record<string, any>, to: Record<string, any>) {
  Object.keys(from).forEach((key) => {
    to[key] = from[key];
  });
}

async function handleApiSearch() {
  const response = await userApi.list({
    page: currentSearchData.page,
    page_size: currentSearchData.pageSize,
    email: currentSearchData.email,
    permission_code: currentSearchData.permissionCode,
    order_by: currentSearchData.orderBy ?? undefined,
    order_key: currentSearchData.orderKey ?? undefined,
  });
  userPagination.data = response.data.data;
  userPagination.totalPage = response.data.total_page;
  userPagination.totalItem = response.data.total;
}

async function onChangePage(page: number) {
  currentSearchData.page = page;
  cloneObjectAttrs(currentSearchData, searchData);
  await handleApiSearch();
}

async function onChangeSortCondition(key: string, type: string) {
  currentSearchData.orderBy = type;
  currentSearchData.orderKey = key;
  currentSearchData.page = 1;
  cloneObjectAttrs(currentSearchData, searchData);
  handleApiSearch();
}

function onSubmitSearchForm() {
  searchData.page = 1;
  cloneObjectAttrs(searchData, currentSearchData);
  handleApiSearch();
}

handleApiSearch();
</script>

<template>
  <MasterLayout :breadcrumbs="breadcrumbs">
    <BaseCard :title="t('view.userList.pageTitle')">
      <template #header>
        <BaseForm @submit.prevent="onSubmitSearchForm">
          <BaseFormGroup v-model="searchData.email" :placeholder="t('model.user.email')" />

          <div class="row mb-4">
            <BaseFormRow
              v-model="searchData.name"
              class="col-md-9"
              :label="t('model.user.name')"
              label-class="col-md-3"
              row-class="col-md-6"
            ></BaseFormRow>

            <BaseFormRow :label="t('model.user.permission')" label-class="col-md-3" row-class="col-md-6">
              <BaseSelect v-model="searchData.permissionCode" class="col-md-9" :items="permissions"></BaseSelect>
            </BaseFormRow>
          </div>
          <div class="d-flex justify-content-end">
            <BaseButton class="" size="md">{{ t('common.search') }}</BaseButton>
            <BaseButton :is-link="true" size="md" :to="{ name: 'home' }">{{ t('common.create') }}</BaseButton>
          </div>
        </BaseForm>
      </template>
      <BaseSimpleTable
        :configs="configs"
        :items="userPagination.data"
        :page="searchData.page"
        :page-size="searchData.pageSize"
        :total-item="userPagination.totalItem"
        :total-page="userPagination.totalPage"
        @on-change-page="onChangePage"
        @on-change-sort-key="onChangeSortCondition"
      >
        <template #item-email="{ item }">
          <RouterLink
            :exact="false"
            :to="{
              name: 'users.detail',
              params: { id: item.admin_id },
            }"
            >{{ item.email }}</RouterLink
          >
        </template>
      </BaseSimpleTable>
    </BaseCard>
  </MasterLayout>
</template>

<style scoped></style>
