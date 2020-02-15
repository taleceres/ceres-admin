const _import = file => () => import(`@/views/${file}.vue`)
/**
 * 概览页面
 */
export default {
  path: '/',
  name: 'Dashboard',
  redirect: '/dashboard/index',
  component: undefined,
  meta: {
    title: '纵览',
    icon: 'el-icon-s-grid',
  },
  hidden: true,
  children: [
    {
      path: '/dashboard/index',
      component: _import('dashboard/index'),
      name: 'DashboardIndex',
      meta: { title: '一览', icon: 'dashboard', affix: true }
    }
  ]
}
