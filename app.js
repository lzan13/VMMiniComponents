//app.js
const vlog = require("./utils/vmlog.js");

App({

  /**
   * 配置全局参数
   */
  data: {
    dimen: {
      sbHeight: 24,
      tbHeight: 48,
      navHeight: 72,
      wWidth: 375, // 这个是以 375*667 为基准进行预设
      wHeight: 667, // 这个是以 375*667 为基准进行预设
    }
  },

  onLaunch: function() {

    /**
     * 获取手机系统信息
     */
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.data.dimen.sbHeight = res.statusBarHeight;
        this.data.dimen.navHeight = this.data.dimen.sbHeight + this.data.dimen.tbHeight;
        this.data.dimen.wWidth = res.windowWidth;
        this.data.dimen.wHeight = res.windowHeight;
      },
      fail(err) {
        vlog.i(err);
      }
    })
  }
})