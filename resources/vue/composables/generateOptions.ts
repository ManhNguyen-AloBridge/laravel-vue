import { useI18n } from '@/plugins/vueI18n';
import { PERMISSION_CODE } from '@utils/constants';
import { computed } from 'vue';

export function getPermissionList() {
  const { t } = useI18n();

  return computed(() => [
    {
      title: t('constant.permission.admin'),
      id: PERMISSION_CODE.ADMIN,
    },
    {
      title: t('constant.permission.general'),
      id: PERMISSION_CODE.GENERAL,
    },
  ]);
}
