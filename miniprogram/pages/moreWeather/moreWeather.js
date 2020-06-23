//index.js
//获取应用实例
//const app = getApp()

Page({
    data:{
        region:['江苏省','南京市','栖霞区'],
        now:''
    },

    changeRegion:function(e){
        this.setData({
            region:e.detail.value
        })
        this.getWeather();  //更新天气
    },

    getWeather:function(){
        var that = this;  //this不可以直接在微信api函数内部使用
        wx.request({
          url: 'https://free-api.heweather.net/s6/weather/now?',
          data:{
              location:that.data.region[1],
              key:'fc97c9afba6b4748bcd97ec877fbf51b'
          },
          success(res){
              //console.log(res.data)
              that.setData({now:res.data.HeWeather6[0].now})
          }
        })
    },

    // 生命周期函数--监听页面加载
    onLoad:function(options){
        this.getWeather();
    },
})