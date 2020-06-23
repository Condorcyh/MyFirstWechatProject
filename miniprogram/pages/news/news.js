// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    container : [], //api获取的数据的容器
  },


  /**
   * 数据获取函数--分别获取四个子页面的数据
   */
  //获取微博数据的函数
  Weibo: function () {
    var that = this; 

    wx.request({
      url: 'https://v1.alapi.cn/api/new/wbtop', //热搜榜的api

      header: {
        "Content-Type": "application/json"
      },

      success(res) {
        var fetch = res.data; //res.data返回从api处获取的全部数据，存入fetch数组
        that.setData({
          hotsearches: fetch["data"], //选取获取fetch数组中名为“data”的数据集，该数据集中包含了50条热搜的信息
        });
      }
    })
  },

  //获取知乎数据的函数
  Zhihu: function () {
    var that = this; 

    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest', //日报的api

      header: {
        "Content-Type": "application/json"
      },

      success(res) {
        var fetch = res.data; //res.data返回从api处获取的全部数据，存入fetch数组

        that.setData({
          stories: fetch["stories"], //选取获取fetch数组中名为“sories”的数据集，该数据集中包含了日报(stories)的信息
          top_stories:fetch["top_stories"], //选取获取fetch数组中名为“sories”的数据集，该数据集中包含了热门日报(top_stories)的信息
        });
      }
    })
  },

  //获取豆瓣数据的函数
  Douban: function () {
    var that = this; 

    wx.request({
      url: 'http://api.douban.com/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10', //一周口碑电影榜的api

      header: {
        "Content-Type": "application/text" //注意豆瓣编码有特殊限制，此处必须是/text
      },

      success(res) {
        var fetch = res.data; //res.data返回从api处获取的全部数据，存入fetch数组

        that.setData({
          movies: fetch["subjects"], //选取获取fetch数组中名为“subjects”的数据集，该数据集中包含了10部电影的信息
        });
      }
    })
  },

  //获取网易新闻数据的函数
  Toutiao: function () {
    var that = this; 

    wx.request({
      url: 'https://v1.alapi.cn/api/new/toutiao', //头条的api

      header: {
        "Content-Type": "application/json"
      },

      success(res) {
        var fetch = res.data; //res.data返回从api处获取的全部数据，存入fetch数组

        that.setData({
          news: fetch["data"], //选取获取fetch数组中名为“data”的数据集，该数据集中包含了10条头条新闻的信息
        });
      }
    })
  },

  //获取时间的api
  Time:function(){
    var that=this;
    wx.request({
      url: 'http://quan.suning.com/getSysTime.do',//时间的api 
    header: {
      "Content-Type": "application/text"
    },
    success(res){
      var fetch=res.data;//res.data返回从api处获取的全部数据，存入fetch数组
      that.setData({
        time:fetch["sysTime2"],//选取获取fetch数组中名为“sysTime2”的数据集，该数据为xxxx-xx-xx xx:xx:xx的时间格式
      })
    }
    })
  },

  //跳转到原网页的函数
  gotoUrl:function(key){
    var url = key.currentTarget.dataset.url;
    var app = getApp();
    app.globalData.url = url;
    wx.navigateTo({
      url: '/pages/url/url',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Weibo();
    this.Zhihu();
    this.Douban();
    this.Toutiao();
    this.Time();
  },

  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },

  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }
  
})
