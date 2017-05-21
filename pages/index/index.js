//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoDemo1: function(){
    wx.navigateTo({
        url: '../demo1/demo1',
    })
  },
  gotoDemo2: function(){
      wx.navigateTo({
          url: '../demo2-tabbar/demo2-tabbar',
      })
  },
  gotoDemo3: function(){
    wx.navigateTo({
      url: '/pages/demo3/demo3',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
