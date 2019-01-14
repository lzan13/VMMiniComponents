//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        id: 'nav',
        name: '导航组件',
        open: false,
        page: 'nav'
    },
      {
        id: 'refresh',
        name: '下拉刷新组件',
        open: false,
        page: 'refresh'
      },
      {
        id: 'share',
        name: '分享组件',
        open: false,
        page: 'share'
      }
    ]
  },
});