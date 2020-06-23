const app = getApp()
const db = wx.cloud.database()
const lessons = db.collection("lessons")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    lessonList: []
  },

  editLesson: function () {
    wx.navigateTo({
      url: '/pages/editLesson/editLesson',
    })
  },

  deleteLesson: function (){
    wx.navigateTo({
      url: '/pages/deleteLesson/deleteLesson',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //先获取个人openid
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        //console.log('[云函数] [login] 调用成功: ', res.result.openid)
        app.globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
    let openId = app.globalData.openid

    //通过openId查数据库，查出属于该用户的所有记录
    lessons.where({
      openid: openId
    }).get().then(res => {
      console.log(res)
      if (res.data.length > 0) {
        //对于每一个res.data中的元素，遍历lessonList
        //不在的话就加入，在的话就跳过
        for (var i = 0; i < res.data.length; i++) {
          var In = false;
          for(var j=0; j<this.data.lessonList.length; j++) {
            let lessonid = openId+this.data.lessonList[j].lessonDay+"_"+this.data.lessonList[j].lessonTime
            if (res.data[i].lessonid==lessonid) {
              In = true;
            }
          }
          if (!In) {
            var tempList = this.data.lessonList
            tempList.push({
              lessonDay: res.data[i].lessonDay,
              lessonTime: res.data[i].lessonTime,
              lessonLength: res.data[i].lessonLength,
              lessonInfo: [
                res.data[i].lessonInfo.name,
                res.data[i].lessonInfo.location,
                res.data[i].lessonInfo.judge
              ]
            })
            this.setData({
              lessonList: tempList
            })
          }
        }
      }
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