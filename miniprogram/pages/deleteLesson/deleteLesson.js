const db = wx.cloud.database()
const lessons = db.collection("lessons")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  delete:function(e){
      console.log(e)
      let lessonDay = e.detail.value.lessonDay
      let lessonTime = e.detail.value.lessonTime

      wx.cloud.callFunction({
          name: 'delete',
          data: {
            lessonDay: lessonDay,
            lessonTime: lessonTime
          },
          success: res => {
            console.log("删除成功" + res)
            //刷新页面数据
            wx.showToast({
              title: '删除成功',
              duration: 2000,
              success: function () {
                //设置延时执行
                setTimeout(function () {
                  //关闭当前页面，返回并刷新上一级页面
                  var pages = getCurrentPages();
                  //获取当前打开的页面栈，返回为数组，索引顺序为打开的顺序
                  var prePages = pages[pages.length - 1];
                  //获取到上一个页面对象
                  prePages.onShow();
                  //执行上一个页面对象中的刷新数据方法
                  //返回上一级页面
                  wx.navigateBack({
                    delta: 1,
                  })
                }, 3000) //延迟时
              },
            })
          },
          fail: err => {
            console.log("删除失败"+err)
            wx.showToast({
              icon: 'none',
              title: '出错啦！请稍后重试',
              duration: 2000,
              success: function () {
                setTimeout(function () {
                  var pages = getCurrentPages(); 
                  var prePages = pages[pages.length - 1]; 
                  prePages.onShow(); 
                  wx.navigateBack({
                    delta: 1,
                  })
                }, 3000) //延迟时间
              }
            })
            console.error
          }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //
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