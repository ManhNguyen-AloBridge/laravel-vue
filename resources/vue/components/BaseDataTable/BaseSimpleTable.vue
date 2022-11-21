<script lang="ts" setup>
import { BasePagination } from '@/components/BasePagination';
import { useI18n } from '@/plugins/vueI18n';
import { ref, reactive, computed } from 'vue';

type Config = {
  text: string;
  sortable?: boolean;
  align?: 'start' | 'center' | 'end';
  headerClasses?: string;
  value: string;
  valueClasses?: string;
};

type Item = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

enum Sortable {
  NONE = '',
  ASC = 'asc',
  DESC = 'desc',
}

type SortableObject = {
  key: string;
  type: Sortable;
};

const { t } = useI18n();
const $props = defineProps({
  configs: {
    type: Array as () => Array<Config>,
    required: true,
  },
  items: {
    type: Array as () => Array<Item>,
    required: true,
  },
  pageSize: {
    type: Number,
    required: true,
    validator(value: number) {
      return value > 0;
    },
  },
  page: {
    type: Number,
    default: 0,
    validator(value: number) {
      return value >= 0;
    },
  },
  totalPage: {
    type: Number,
    default: 0,
    required: true,
    validator(value: number) {
      return value >= 0;
    },
  },
  totalItem: {
    type: Number,
    default: 0,
    required: true,
    validator(value: number) {
      return value >= 0;
    },
  },
});
const $emit = defineEmits(['onChangePage', 'onChangeSortKey']);
const sortableKeys = ref([] as Array<string>);
const sortingItem = reactive({
  type: Sortable.NONE,
  key: '',
} as SortableObject);
const startIndex = computed(() => $props.pageSize * ($props.page - 1));
const endIndex = computed(() => startIndex.value + $props.pageSize);

function getSortingClass(value: string) {
  const { type, key } = sortingItem;

  return {
    '--active': type !== Sortable.NONE && key === value,
    [`--${sortingItem.type}`]: sortingItem.type !== Sortable.NONE && key === value,
  };
}
function getAlignClass(align: string | undefined) {
  return `text-${align ?? 'start'}`;
}
function getHeaderClasses(config: Config): string {
  const classes = config.headerClasses ?? '';
  const sortableClass = config.sortable ? '--sortable' : '';
  const alignClass = getAlignClass(config.align);

  return `${classes} ${sortableClass} ${alignClass}`;
}
function generateSortList() {
  $props.configs.forEach((config: Config) => {
    if (config.sortable) {
      sortableKeys.value.push(config.value);
    }
  });
}
function handleSort(key: string) {
  if (!sortableKeys.value.includes(key)) {
    return;
  }
  const currentType = sortingItem['key'] === key ? sortingItem['type'] : Sortable.NONE;
  sortingItem['type'] = getNextSortType(currentType);
  sortingItem['key'] = sortingItem['type'] === Sortable.NONE ? '' : key;
  $emit('onChangeSortKey', key, sortingItem['type']);
}
function getNextSortType(type: Sortable) {
  switch (type) {
    case Sortable.NONE:
      return Sortable.ASC;
    case Sortable.ASC:
      return Sortable.DESC;
    default:
      return Sortable.NONE;
  }
}

generateSortList();
</script>

<template>
  <div class="datatable">
    <div class="datatable__slider">
      <table class="datatable__table">
        <thead>
          <slot name="header">
            <tr>
              <th
                v-for="(config, index) in configs"
                :key="index"
                :class="getHeaderClasses(config)"
                @click="handleSort(config.value)"
              >
                <span>{{ config.text }}</span>
                <span class="datatable__sort-icon" :class="getSortingClass(config.value)">
                  <svg
                    aria-hidden="true"
                    class="v-icon__svg"
                    role="img"
                    style="font-size: 18px; height: 18px; width: 18px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"></path>
                  </svg>
                </span>
              </th>
            </tr>
          </slot>
        </thead>
        <tbody>
          <slot>
            <template v-if="items.length > 0">
              <tr v-for="(item, index) in items" :key="index">
                <td
                  v-for="(config, keyIndex) in configs"
                  :key="keyIndex"
                  :class="(config.valueClasses || '') + ' ' + getAlignClass(config.align)"
                >
                  <slot :item="item" :name="`item-${config.value}`">
                    <span>
                      {{ item[config.value] }}
                    </span>
                  </slot>
                </td>
              </tr>
            </template>
            <td v-else colspan="configs.length">There is no data</td>
          </slot>
        </tbody>
      </table>
    </div>
    <div class="datatable__footer">
      <div class="datatable__info --dummy">
        {{
          t('component.datatable.info', {
            startIndex: startIndex + 1,
            endIndex: startIndex + pageSize,
            total: items.length,
          })
        }}
      </div>
      <div class="datatable__length"></div>
      <div class="datatable__wrap">
        <BasePagination
          class="datatable__pagination"
          :length="totalPage"
          :model-value="page"
          @update:model-value="$emit('onChangePage', $event)"
        >
        </BasePagination>
        <div class="datatable__info">
          {{
            t('component.datatable.info', {
              startIndex: startIndex + 1,
              endIndex: endIndex,
              total: totalItem,
            })
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./BaseDataTable.scss"></style>
