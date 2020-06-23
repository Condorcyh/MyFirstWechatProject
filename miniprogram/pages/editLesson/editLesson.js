const app = getApp()
const db = wx.cloud.database()
const lessons = db.collection("lessons")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  Update: function (e) {
    //获取所有的信息
    let name = e.detail.value.name
    let location = e.detail.value.location
    let lessonDay = e.detail.value.lessonDay
    let lessonLength = e.detail.value.lessonLength
    let lessonTime = e.detail.value.lessonTime
    let judge = e.detail.value.judge
    let lessonInfo = {
      name: name,
      location: location,
      judge: judge
    }

    let openId = app.globalData.openid
    let lessonid = openId+lessonDay+"_"+lessonTime

    //总思路：先查询数据库中的记录，如果存在就进行修改，如果不存在就添加
    lessons.where({
      openid: openId,
    }).get().then(res => {
      console.log(res)
      if (res.data.length > 0) {
        //遍历res.data，找出符合条件的那个记录
        var In = false; //声明一个变量，表示数据库中是否存在该条记录
        for (var i = 0; i < res.data.length; i++) {
          if (lessonid==res.data[i].lessonid) {
            //找到了
            In = true;
            break;
          }
        }
        if (In) {
          //如果在数据库中，则更新该条记录
          //这时需要调用云函数来对数据库进行修改
          wx.cloud.callFunction({
            name: 'update',
            data: {
              //这些数据是要传到event中的数据
              lessonDay: lessonDay,
              lessonTime: lessonTime,
              lessonLength: lessonLength,
              lessonInfo: lessonInfo
            },
            success: res => {
              console.log("更新成功" + res)
              //刷新页面数据
              wx.showToast({
                title: '保存成功',
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
              console.log("更新失败"+err)
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
        } else {
          //不在数据库中，则添加该条记录
          //同样调用云函数
          wx.cloud.callFunction({
            name: 'add',
            data: {
              //这些数据是要传到event中的数据
              lessonDay: lessonDay,
              lessonTime: lessonTime,
              lessonLength: lessonLength,
              lessonInfo: lessonInfo
            },
            success: res => {
              console.log("更新成功" + res)
              //刷新页面数据
              wx.showToast({
                title: '保存成功',
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
              console.log("更新失败"+err)
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
        }
      }
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
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