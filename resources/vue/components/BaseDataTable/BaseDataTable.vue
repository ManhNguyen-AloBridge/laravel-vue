<script lang="ts">
import './BaseDataTable.scss';

import { defineComponent } from 'vue';
import { BasePagination } from '@/components/BasePagination';
import { useI18n } from '@/plugins/vueI18n';

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

export default defineComponent({
  components: { BasePagination },
  props: {
    configs: {
      type: Array<Config>,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
      validator(value: number) {
        return value > 0;
      },
    },
    currentPage: {
      type: Number,
      default: 1,
      validator(value: number) {
        return value > 0;
      },
    },
    items: {
      type: Array<Item>,
      required: true,
    },
    simple: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['onChangePage', 'onChangeSortKey'],
  setup() {
    const { t } = useI18n();
    return { t };
  },
  data() {
    return {
      page: this.$props.currentPage ?? 1,
      sortingItem: {
        type: Sortable.NONE,
        key: '',
      } as SortableObject,
      sortableKeys: [] as Array<string>,
      pageItems: [] as Array<Item>,
      sortableItems: [...this.$props.items] as Array<Item>,
    };
  },
  computed: {
    pageCount() {
      return Math.round(this.items.length / this.pageSize);
    },
    startIndex() {
      return this.pageSize * (this.page - 1);
    },
  },
  watch: {
    page() {
      this.paginateItems();
    },
    items: {
      handler(newValue) {
        this.sortableItems = [...newValue];
        this.paginateItems();
      },
      deep: true,
    },
  },
  created() {
    this.paginateItems();
    this.generateSortList();
  },
  methods: {
    sortingClass(value: string) {
      const { type, key } = this.sortingItem;

      return {
        '--active': type !== Sortable.NONE && key === value,
        [`--${this.sortingItem.type}`]: this.sortingItem.type !== Sortable.NONE && key === value,
      };
    },
    getAlignClass(align: string | undefined) {
      return `text-${align ?? 'start'}`;
    },
    getHeaderClasses(config: Config): string {
      const classes = config.headerClasses ?? '';
      const sortableClass = config.sortable ? '--sortable' : '';
      const alignClass = this.getAlignClass(config.align);

      return `${classes} ${sortableClass} ${alignClass}`;
    },
    generateSortList() {
      this.configs.forEach((config: Config) => {
        if (config.sortable) {
          this.sortableKeys.push(config.value);
        }
      });
    },
    handleSort(key: string) {
      if (!this.sortableKeys.includes(key)) {
        return;
      }
      this.$emit('onChangeSortKey', key);

      const currentType = this.sortingItem['key'] === key ? this.sortingItem['type'] : Sortable.NONE;
      this.sortingItem['type'] = this.getNextSortType(currentType);
      this.sortingItem['key'] = key;
      this.sortData();
      this.paginateItems();
    },
    getNextSortType(type: Sortable) {
      switch (type) {
        case Sortable.NONE:
          return Sortable.ASC;
        case Sortable.ASC:
          return Sortable.DESC;
        default:
          return Sortable.NONE;
      }
    },
    sortData() {
      const { type, key } = this.sortingItem;
      if (type === Sortable.NONE) {
        this.sortableItems = [...this.items];
        return;
      }

      this.sortableItems.sort((a: Item, b: Item) => {
        if (type === Sortable.ASC) {
          return a[key] >= b[key] ? 1 : -1;
        }

        return b[key] >= a[key] ? 1 : -1;
      });
    },
    paginateItems() {
      const endIndex = this.startIndex + this.pageSize;

      this.pageItems = this.sortableItems.slice(this.startIndex, endIndex);
    },
    handleChangePage(value: number) {
      if (this.simple) {
        this.$emit('onChangePage', value);
        return;
      }

      this.page = value;
      this.paginateItems();
    },
  },
});
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
                <span class="datatable__sort-icon" :class="sortingClass(config.value)">
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
            <template v-if="pageItems.length > 0">
              <tr v-for="(item, index) in pageItems" :key="index">
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
          :length="pageCount"
          :model-value="page"
          @update:model-value="handleChangePage"
        >
        </BasePagination>
        <div class="datatable__info">
          {{
            t('component.datatable.info', {
              startIndex: startIndex + 1,
              endIndex: startIndex + pageSize,
              total: items.length,
            })
          }}
        </div>
      </div>
    </div>
  </div>
</template>
