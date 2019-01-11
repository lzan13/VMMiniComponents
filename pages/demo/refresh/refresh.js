// pages/demo/refresh/refresh.js
//获取应用实例
const app = getApp();
const vlog = require("../../../utils/vmlog.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    sbHeight: 0,
    navHeight: 0,
    scrollHeight: 0,
    isRefreshFinish: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    let colors = this.generateColors(20);
    this.setData({
      sbHeight: app.data.dimen.sbHeight,
      navHeight: app.data.dimen.navHeight,
      scrollHeight: app.data.dimen.wHeight - app.data.dimen.navHeight,
      colors
    });
  },

  randomColor: function () {
    return `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${(Math.random() * 0.3 + 0.2).toFixed(1)})`;
  },

  generateColors: function (length) {
    return new Array(length).fill(null).map(() => this.randomColor());
  },

  /**
   * 触发下拉刷新
   */
  onRefresh: function () {
    vlog.i("触发下拉刷新");
    let colors = this.generateColors(20);
    this.setData({
      isRefreshFinish: false
    });
    // 模拟请求
    setTimeout(() => {
      vlog.i("下拉刷新模拟完成");
      this.setData({
        isRefreshFinish: true,
        colors
      });
    }, 2000);
  }

})