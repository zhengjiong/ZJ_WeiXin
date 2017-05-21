// demo3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
    ],
    banners: [
      '/images/banner_1.jpg',
      '/images/banner_2.jpg',
      '/images/banner_3.jpg',
      '/images/banner_4.jpg',
    ],
    scrollItems: [
      {
        url: '/images/banner_1.jpg',
        title: 'banner1'
      },
      {
        url: '/images/banner_2.jpg',
        title: 'banner2'
      },
      {
        url: '/images/banner_3.jpg',
        title: 'banner3'
      },
      {
        url: '/images/banner_4.jpg',
        title: 'banner4'
      }
    ],
    infoItems: [
      {
        url: '/images/banner_1.jpg',
        title: "title1",
        subTitle: "subTitle1",
        score: "100分"
      },
      {
        url: '/images/banner_2.jpg',
        title: "title2",
        subTitle: "subTitle2",
        score: "100分"
      },
      {
        url: '/images/banner_3.jpg',
        title: "title3",
        subTitle: "subTitle3",
        score: "100分"
      },
      {
        url: '/images/banner_4.jpg',
        title: "title4",
        subTitle: "subTitle4",
        score: "100分"
      }


    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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