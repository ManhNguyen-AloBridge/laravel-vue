<script lang="ts">
import { defineComponent } from 'vue';
import {BaseDataTable} from '@/components/BaseDataTable';
import { DatatableConfig } from '@/types/local';
import { BaseTab, BaseTabItem } from '@/components/BaseTab';
import { BaseWindow, BaseWindowItem } from '@/components/BaseWindow';
import BaseDatepicker from '@/components/BaseDatepicker';

export default defineComponent({
  components: { BaseDataTable, BaseTab, BaseTabItem, BaseWindow, BaseWindowItem, BaseDatepicker },
  data() {
    return {
      configs: [
        {
          text: 'ID',
          headerClasses: 'custom-header-class',
          align: 'center',
          sortable: true,
          value: 'id',
          valueClasses: 'custom-class',
        },
        {
          sortable: true,
          text: 'title 2',
          value: 'name',
        },
        {
          text: 'Status',
          value: 'status',
        },
        {
          text: 'Price ($)',
          value: 'price',
        },
      ] as Array<DatatableConfig>,
      data: [
        { id: 1, name: 'Iphone 11', price: 2000, status: 'new' },
        { id: 2, name: 'Iphone 12', price: 2000, status: 'new' },
        { id: 3, name: 'Iphone 12', price: 2000, status: 'new' },
        { id: 4, name: 'Iphone 12', price: 2000, status: 'new' },
        { id: 5, name: 'Iphone 12', price: 2000, status: 'new' },
        { id: 6, name: 'Iphone 12', price: 2000, status: 'new' },
        { id: 7, name: 'Iphone 12', price: 2000, status: 'new' },
        { id: 8, name: 'Iphone 12', price: 2000, status: 'new' },
        { id: 9, name: 'Iphone 12', price: 2000, status: 'new' },
        { id: 10, name: 'Iphone 12', price: 2000 },
      ],
      breadcrumbs: [
        {
          text: 'Home',
          route: {
            name: 'home',
          },
        },
        {
          text: '要員一覧',
        },
      ],
      tab: 'web',
    };
  },
});
</script>

<template>
  <MasterLayout :breadcrumbs="breadcrumbs">
    <BaseTab v-model="tab">
      <BaseTabItem value="web">Web</BaseTabItem>
      <BaseTabItem value="shop">Shop</BaseTabItem>
      <BaseTabItem value="admin">Admin</BaseTabItem>
    </BaseTab>
    <BaseWindow v-model="tab">
      <BaseWindowItem value="web">
        <BaseCard label="要員一覧">
          <BaseDataTable :configs="configs" :current-page="1" :items="data" :page-size="5">
            <template #item-status="{ item }">
              <BaseBadge v-if="item.status" color="danger">{{ item.status }}</BaseBadge>
            </template>
          </BaseDataTable>
        </BaseCard>
      </BaseWindowItem>
      <BaseWindowItem value="shop">
        <h3 style="text-align: left">Button</h3>
        <div class="components">
          <BaseButton size="xs" variant="fill">Extra small</BaseButton>
          <BaseButton color="secondary" size="sm" variant="fill">Small button</BaseButton>
          <BaseButton color="success"><i class="fa fa-search"></i></BaseButton>
          <BaseButton size="lg" variant="outline">Large button</BaseButton>
          <BaseButton :full-width="true" size="lg">Full width button</BaseButton>
        </div>
        <h3>Badge</h3>
        <div class="components">
          <BaseBadge color="primary" size="sm">Small</BaseBadge>
          <BaseBadge color="primary">Medium</BaseBadge>
          <BaseBadge color="primary" size="lg">Large</BaseBadge>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-9 col-12 mx-auto">
              <BaseCard label="Card title">
                <template #header>
                  <div class="d-flex align-items-center">
                    <h5 class="card__title">Card title</h5>
                    <BaseButton class="my-0 ms-auto"><i class="fa fa-pen"></i>Edit</BaseButton>
                  </div>
                </template>
                <BaseForm>
                  <BaseFormGroup label="Name" />
                  <BaseFormGroup>
                    <BaseLabel
                      >経歴書共有閲覧期限（時間）<BaseBadge color="warning" size="xs">必須</BaseBadge></BaseLabel
                    >
                    <BaseSelect
                      :items="[
                        { id: 0, title: 'Male' },
                        { id: 1, title: 'Female' },
                        { id: 9, title: 'Other' },
                      ]"
                      label-key="title"
                      value-key="id"
                    ></BaseSelect>
                  </BaseFormGroup>
                  <BaseFormGroup>
                    <div class="row">
                      <div class="col-md-6">
                        <BaseLabel>Start date:</BaseLabel>
                        <BaseInput type="date"></BaseInput>
                      </div>
                      <div class="col-md-6">
                        <BaseLabel>End date:</BaseLabel>
                        <BaseDatepicker></BaseDatepicker>
                      </div>
                    </div>
                  </BaseFormGroup>
                  <BaseFormGroup>
                    <BaseLabel>Time picker:</BaseLabel>
                    <div class="row">
                      <div class="col-md-6">
                        <BaseDatepicker
                          date-format="H:i"
                          :enable-time="true"
                          name="start-time"
                          :no-calendar="true"
                        ></BaseDatepicker>
                      </div>
                      <div class="col-md-6">
                        <BaseDatepicker
                          date-format="H:i"
                          :enable-time="true"
                          name="end-time"
                          :no-calendar="true"
                        ></BaseDatepicker>
                      </div>
                    </div>
                  </BaseFormGroup>
                  <BaseFormGroup label="Switch">
                    <div>
                      <BaseCheckBox id="switch" :is-switch="true"></BaseCheckBox>
                    </div>
                  </BaseFormGroup>
                  <BaseFormGroup label="Checkbox:">
                    <BaseCheckBox>Option 1</BaseCheckBox>
                    <BaseCheckBox class="ms-4">Option 2</BaseCheckBox>
                  </BaseFormGroup>
                  <BaseFormGroup label="Radio:">
                    <BaseRadio name="radio">Yes</BaseRadio>
                    <BaseRadio class="ms-4" name="radio">No</BaseRadio>
                  </BaseFormGroup>
                  <BaseFormGroup label="Textarea">
                    <BaseTextarea rows="5" />
                  </BaseFormGroup>
                </BaseForm>
              </BaseCard>
            </div>
          </div>
        </div>
      </BaseWindowItem>
      <BaseWindowItem value="admin"> Admin </BaseWindowItem>
    </BaseWindow>
  </MasterLayout>
</template>

<style scoped></style>
