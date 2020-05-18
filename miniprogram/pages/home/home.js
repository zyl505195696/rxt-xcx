// pages/indexn/indexn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    current: 'home',
      list:[
        {name:'新闻1',id:1},
        {name:'新闻2',id:2},
        {name:'新闻3',id:3}
      ],

  },
 
 
  
  handleChange({ detail }) {
    const url = '/pages/' + detail.key + '/' + detail.key

    wx.navigateTo({

      url: url,

    }) 
    this.setData({
      current: detail.key
    });
  },




  tapitem: function (e) {

    var id = e.currentTarget.dataset.para.id

    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })
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
    this.setData({
      current: 'home'
    });
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