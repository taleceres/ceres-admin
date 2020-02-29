export default {
  path: '/chart',
  name: 'Chart',
  component: undefined,
  meta: {
    title: '图表',
    icon: 'el-icon-pie-chart',
  },
  children: [
    {
      path: '/chart/line',
      component: 'chart/line',
      name: 'LineChart',
      meta: { title: '折线图', icon: 'el-icon-house' },
    },
    {
      path: '/chart/pie',
      component: 'chart/pie',
      name: 'PieChart',
      meta: { title: '饼状图', icon: 'el-icon-collection-tag' },
    },
    {
      path: '/chart/flying',
      component: 'chart/flying-line-chart/index',
      name: 'FlyingLine',
      meta: { title: '飞线图', icon: 'el-icon-position' },
    },
    {
      path: '/chart/map',
      component: 'chart/map',
      name: 'MapChart',
      meta: { title: '地图', icon: 'el-icon-position' },
    },
    {
      path: '/chart/mind-map',
      component: 'chart/mind-map',
      name: 'MindMap',
      meta: { title: '思维导图', icon: 'fa fa-text-width' },
    },
  ],
}
