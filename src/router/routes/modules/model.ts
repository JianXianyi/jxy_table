import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const model: AppRouteModule = {
  path: '/model',
  name: 'Model',
  component: LAYOUT,
  redirect: '/model/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.model'),
    orderNo: 1110,
  },
  children: [
    {
      path: 'index',
      name: 'ModelPage',
      component: () => import('/@/views/model/index.vue'),
      meta: {
        title: t('routes.dashboard.model'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default model;
