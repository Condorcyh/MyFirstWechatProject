// miniprogram/pages/weather/weather.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        province:"北京",
        city:"北京",
        now:'',
        loc:"",
        daily_forecast:'',
        lifestyle:'',
        time:''
    },

    getLocalWeather:function(){
        var that = this;

        wx.request({
          url: 'https://free-api.heweather.net/s6/weather/forecast?',
          data:{
              location:that.data.loc,
              key:'fc97c9afba6b4748bcd97ec877fbf51b'
          },
          success:function(res){
              //这里打印数据才能知道下面一系列变量分别在数组的哪个位置
              console.log(res.data),
              that.setData({
                  province:res.data.HeWeather6[0].basic.admin_area,
                  city:res.data.HeWeather6[0].basic.parent_city,
                  daily_forecast:res.data.HeWeather6[0].daily_forecast[0],
                  time:res.data.HeWeather6[0].update.loc,
              })
          }
        })

        wx.request({
            url: 'https://free-api.heweather.net/s6/weather/now?',
            data:{
                location:that.data.loc,
                key:'fc97c9afba6b4748bcd97ec877fbf51b'
            },
            success(res){
                console.log(res.data)
                that.setData({now:res.data.HeWeather6[0].now})
            }
          })

        wx.request({
          url: 'https://free-api.heweather.net/s6/weather/lifestyle?',
          data:{
              location:that.data.loc,
              key:'fc97c9afba6b4748bcd97ec877fbf51b'
          },
          success:function(res){
              that.setData({
                  lifestyle:res.data.HeWeather6[0].lifestyle[0]
              })
          }
        })
    },

    goToMore:function(){
        wx.navigateTo({
          url: '/pages/moreWeather/moreWeather',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        wx.getLocation({
          success:function(res){
              var locate = res.latitude.toString()+","+res.longitude.toString();
              that.data.loc = locate;
              that.getLocalWeather();
          },
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})