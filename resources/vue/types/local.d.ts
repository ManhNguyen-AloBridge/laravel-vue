export type Route = {
  name: string;
  params?: {
    [key: string]: number | string;
  };
};

export type Menu = {
  icon?: string;
  text: string;
  route?: Route;
  submenus?: Menu[];
};

export type BreadcrumbItem = {
  text: string;
  route?: Route;
};

export type DatatableConfig = {
  text: string;
  sortable?: boolean;
  align?: 'start' | 'center' | 'end';
  headerClasses?: string;
  value: string;
  valueClasses?: string;
};
