// pages/demo/share/sharecanvas/index.js
const vlog = require("../../../../utils/vmlog.js");

var wWidth;
var wHeight;

const WHITE = '#FFFFFF';
const TEXT_COLOR = '#000000';
const THEME_COLOR = '#FF555C';
const GRAY_COLOR = '#333333';
const TINT_COLOR = '#747474';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    createShare:{
      type: Boolean,
      value: false,
      observer: "_createShare"
    },
    content: {
      type: String,
      value: "嗨 VMTalk"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    cWidth: 0,
    cHeight: 0,
    shareImagePath: null,
  },

  /**
   * 组件生命周期方法
   */
  ready: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        wWidth = res.windowWidth;
        wHeight = res.windowHeight;
        that.setData({
          cWidth: wWidth,
          cHeight: wHeight,
          imageWidth: wWidth * 0.8,
          imageHeight: wHeight * 0.8
        })
      },
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 分享图片触发事件
     */
    _createShare: function(b) {
      if (b) {
        this._showLoading();
        this._drawShare();
      }
    },

    /**
     * 绘制分享内容
     */
    _drawShare: function() {
      var that = this;
      // 创建 canvas 对象
      const ctx = wx.createCanvasContext('shareCanvas', this);
      ctx.setFillStyle(WHITE);
      ctx.fillRect(0, 0, wWidth, wHeight);

      //绘制 content
      ctx.setFillStyle(GRAY_COLOR);
      ctx.setFontSize(18);
      ctx.setTextAlign('center');
      ctx.fillText(that.data.content, wWidth / 2, wHeight / 2);


      //绘制到 canvas 上
      ctx.draw(false, function() {
        vlog.i("canvas 绘制完成");
        that._saveShareImage();
      });
    },

    /**
     * 保存分享图片
     */
    _saveShareImage: function () {
      this._hideLoading();
      this.setData({
        isShow: true
      });
    },

    // 显示加载框
    _showLoading: function() {
      wx.showLoading({
        title: '图片生成中...',
      })
    },
    // 隐藏加载框
    _hideLoading: function() {
      wx.hideLoading();
    },
    /**
     * 关闭分享
     */
    _closeShare: function() {
      this.setData({
        createShare: false,
        isShow: false
      });
    }
  }
})