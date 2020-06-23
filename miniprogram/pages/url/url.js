// miniprogram/pages/url/url.js
Page({
  set: function () {
    var app = getApp();
    var target = app.globalData.url;
    this.setData({
      target : target
    })
  },

  onLoad: function (options) {
    this.set();
  },
})