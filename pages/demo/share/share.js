// pages/share/share.js

const app = getApp();
const vlog = require("../../../utils/vmlog.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sbHeight: 0,
    navHeight: 0,
    share: {
      create: false,
      content: "测试绘制文字",
      from: ""
    },
    shareOne: {
      avatar: '',
      nickname: '',
      showShareModel: false
    },
    shareTwo: {
      avatar: '',
      nickname: '',
      incomeMoney: '',
      joinNumber: '',
      joinAvatarList: '',
      adImageUrl: '',
      adName: '',
      adTime: '',
      showShareModel: false
    },

    shareThree: {
      avatar: '',
      nickname: '',
      awardMoney: '',
      showShareModel: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      sbHeight: app.data.dimen.sbHeight,
      navHeight: app.data.dimen.navHeight,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  handleShare: function() {
    this.setData({
      share: {
        create: true,
        content: "嗨 VMTalk, 小程序canvas文本绘制自动换行、字体加粗简单实现，注意，以上是简单的实现，所以如果有英文会计算不精确，解决方法如下：优化原理：通过基础库 1.9.90 开始支持的measureText接口返回的文本宽度，把每个字符宽度不断累加，精确计算在哪个位置应该换行去实现这个功能。",
        from:"「 测试 」"
      }
    });
  },

  handleTapOne: function() {
    this.setData({
      shareOne: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132',
        nickname: '极客学苑',
        showShareModel: true
      }
    })
  },

  handleTapTwo: function() {
    this.setData({
      shareTwo: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132',
        nickname: 'stone',
        incomeMoney: '0',
        joinNumber: '0',
        joinAvatarList: ['https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132', 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132', 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132', 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132', 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132'],
        adImageUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2136187651,870864669&fm=27&gp=0.jpg',
        adName: '哈哈哈哈哈哈哈哈哈',
        adTime: '看看你最近改变',
        showShareModel: true
      },
    })
  },

  handleTapThree: function() {
    this.setData({
      shareThree: {
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132',
        nickname: '路人甲',
        awardMoney: '哈哈',
        showShareModel: true
      }
    })
  }
})