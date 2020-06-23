// pages/my/my.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        nickName: "未登录",
        src: "/images/defaultHead.png",
    },

    //获取个人信息
    getMyInfo: function (e) {
        let info = e.detail.userInfo
        this.setData({
            src: info.avatarUrl,
            nickName: info.nickName,
            isLogin: true
        })
    },

    // 去到天气界面
    goToWeather: function () {
        wx.navigateTo({
            url: '/pages/weather/weather',
        })
    },

    // 去到课表界面
    goToLessonTable: function () {
        wx.navigateTo({
            url: '/pages/lessonTable/lessonTable',
        })
    },

    // 去到相册界面
    goToPhotos: function () {
        wx.navigateTo({
            url: '/pages/photos/photos',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //wx.clearStorage()
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