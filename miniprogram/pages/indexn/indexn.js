// pages/indexn/indexn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        {name:'新闻1',id:1},
        {name:'新闻2',id:2},
        {name:'新闻3',id:3}
      ]
  },
  tapitem:function(e){
    
     var id=e.currentTarget.dataset.para.id

     wx.navigateTo({
       url: '/pages/details/details?id='+id,
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