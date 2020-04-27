export default {
  path: '/admin',
  name: 'Admin',
  component: undefined,
  meta: {
    title: '系统管理',
    icon: 'el-icon-user',
  },
  children: [
    {
      path: '/admin/user',
      component: undefined,
      name: 'AdminUser',
      meta: {
        title: '用户管理',
        icon: 'el-icon-house',
      },
      children: [
        {
          path: '/admin/user/list',
          component: 'admin/user/list',
          name: 'UserList',
          meta: {
            title: '用户列表',
            icon: 'el-icon-collection-tag',
          },
        },
      ],
    },
    {
      path: '/admin/group',
      component: undefined,
      name: 'AdminGroup',
      meta: {
        title: '权限组管理',
        icon: 'fa fa-group',
      },
      children: [
        {
          path: '/admin/group/api',
          component: 'admin/group/api/list',
          name: 'GroupApiList',
          meta: {
            title: '接口管理',
            icon: 'el-icon-collection-tag',
          },
        },
        {
          path: '/admin/group/menu',
          component: 'admin/group/menu/list',
          name: 'GroupMenuList',
          meta: {
            title: '菜单管理',
            icon: 'el-icon-collection-tag',
          },
        },
      ],
    },
  ],
  
}
