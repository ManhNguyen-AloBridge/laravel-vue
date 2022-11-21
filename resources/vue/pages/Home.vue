<script lang="ts">
import { defineComponent } from 'vue';
import BaseDatePicker from '@/components/BaseDatepicker';
import BaseModal from '@/components/BaseModal';
import BaseSelectSearch from '@/components/BaseSelectSearch';

export default defineComponent({
  components: { BaseDatePicker, BaseModal, BaseSelectSearch },
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Home',
        },
      ],
      dialog: false,
      option: null,
    };
  },
});
</script>

<template>
  <MasterLayout :breadcrumbs="breadcrumbs">
    <h3 style="text-align: left">Button</h3>
    <div class="components">
      <BaseButton size="xs" variant="fill">Extra small</BaseButton>
      <BaseButton color="secondary" size="sm" variant="fill">Small button</BaseButton>
      <BaseButton color="success" :only-icon="true"><i class="fa fa-search"></i></BaseButton>
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
                <BaseSelectSearch
                  v-model="option"
                  label-key="label"
                  :options="[
                    { label: 'Option1', value: '1' },
                    { label: 'Option2', value: '2' },
                  ]"
                  value-key="value"
                ></BaseSelectSearch>
              </BaseFormGroup>
              <BaseFormGroup>
                <BaseLabel>経歴書共有閲覧期限（時間）<BaseBadge color="warning" size="xs">必須</BaseBadge></BaseLabel>
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
                    <BaseDatePicker></BaseDatePicker>
                  </div>
                </div>
              </BaseFormGroup>
              <BaseFormGroup>
                <BaseLabel>Time picker:</BaseLabel>
                <div class="row">
                  <div class="col-md-6">
                    <BaseDatePicker
                      date-format="H:i"
                      :enable-time="true"
                      name="start-time"
                      :no-calendar="true"
                    ></BaseDatePicker>
                  </div>
                  <div class="col-md-6">
                    <BaseDatePicker
                      date-format="H:i"
                      :enable-time="true"
                      name="end-time"
                      :no-calendar="true"
                    ></BaseDatePicker>
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
    <BaseModal v-model="dialog" title="ダウンロード">
      <template #body>
        <p>skill 1 を削除しますか？</p>
      </template>
      <template #footer>
        <BaseButton color="light" variant="plain-text" @click="dialog = false">キャンセル</BaseButton>
        <BaseButton class="ms-3">削除</BaseButton>
      </template>
    </BaseModal>
    <button class="btn bg-gradient-primary" @click="dialog = !dialog">Open</button>
  </MasterLayout>
</template>
