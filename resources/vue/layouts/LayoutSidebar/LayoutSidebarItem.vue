<script lang="ts">
import { defineComponent } from 'vue';
import SidebarList from './LayoutSidebarList.vue';

type Route = {
  name: string;
  params?: {
    [key: string]: number | string;
  };
};

type Menu = {
  icon?: string;
  text: string;
  route?: Route;
  submenus?: Menu[];
};

export default defineComponent({
  name: 'SidebarItem',
  components: { SidebarList },
  props: {
    item: {
      type: Object as () => Menu,
      required: true,
    },
    index: {
      type: [Number, String],
      required: true,
      default: '0',
    },
  },
  computed: {
    classes() {
      return {
        sidebar__item: true,
        '--sub': !!this.item.submenus,
        '--expand': this.isActiveSubMenu,
      };
    },
    isActiveSubMenu(): boolean {
      if (!this.item.submenus) {
        return false;
      }
      const currentRouteName = this.$router.currentRoute.value.name as string;
      return this.isSubmenuHasActiveRoute(this.item.submenus, currentRouteName);
    },
  },
  watch: {
    isActiveSubMenu(newValue) {
      if (newValue) this.openSubmenu();
    },
  },
  mounted() {
    const ulElement = (this.$refs.submenu as InstanceType<typeof SidebarList>)?.$el;
    if (ulElement && this.isActiveSubMenu) {
      ulElement.style.height = this.calculateSubmenuHeight();
    }
  },
  methods: {
    isSubRouteActive(itemName?: string) {
      // sidebar users active when access /users/:id
      const currentRouteName = this.$route.name;
      const prefixCurrentRouteName = currentRouteName?.toString().split('.')[0];
      const prefixSidebarRouteName = (itemName ?? '').split('.')[0];

      return prefixCurrentRouteName === prefixSidebarRouteName;
    },
    isSubmenuHasActiveRoute(submenus: Menu[], routeName: string): boolean {
      const x = submenus.some((menu) => {
        if (menu.submenus) {
          return this.isSubmenuHasActiveRoute(submenus, routeName);
        }

        return menu.route?.name === routeName || this.isSubRouteActive(menu.route?.name ?? '');
      });

      return x;
    },
    calculateSubmenuHeight(): string {
      const ulElement = (this.$refs.submenu as InstanceType<typeof SidebarList>).$el as HTMLUListElement;
      // eslint-disable-next-line no-undef
      const childItems: NodeListOf<HTMLLinkElement> = ulElement.querySelectorAll('.sidebar__item');

      return childItems[0].offsetHeight * childItems.length + 'px';
    },
    handleExpandSubmenu(e: MouseEvent) {
      if (!this.item.submenus) {
        return;
      }
      const currentTarget = e.currentTarget as HTMLLinkElement;
      const isExpanding = currentTarget.classList.contains('--expand');

      if (isExpanding) {
        this.closeSubmenu();
      } else {
        this.openSubmenu();
      }

      currentTarget.classList.toggle('--expand');
    },
    closeSubmenu() {
      (this.$refs.submenu as InstanceType<typeof SidebarList>).$el.style.height = '0px';
    },
    openSubmenu() {
      (this.$refs.submenu as InstanceType<typeof SidebarList>).$el.style.height = this.calculateSubmenuHeight();
    },
  },
});
</script>

<template>
  <li :class="classes" @click="handleExpandSubmenu">
    <router-link
      v-if="!item.submenus"
      v-bind="$attrs"
      active-class="--active"
      class="sidebar__link"
      :class="{ '--active': isSubRouteActive(item.route?.name) }"
      exact-active-class="--active"
      :to="item.route"
      @click.stop
    >
      <i :class="`sidebar__icon ${item.icon}`"></i>
      <span class="sidebar__text">{{ item.text }}</span>
    </router-link>
    <a v-else class="sidebar__link" href="javascript:void(0);" v-bind="$attrs">
      <i :class="`sidebar__icon ${item.icon}`"></i>
      <span class="sidebar__text">{{ item.text }}</span>
    </a>
    <SidebarList v-if="item.submenus" ref="submenu">
      <SidebarItem
        v-for="(subitem, subindex) in item.submenus"
        :key="`${index}` + subindex"
        :index="`${index}` + subindex"
        :item="subitem"
      ></SidebarItem>
    </SidebarList>
  </li>
</template>

<style scoped></style>
