// pages/custom/custom.js
var pageData = {}
for (var i = 1; i < 5; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function (e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value)
    }
  })(i);
}
// Page(pageData)
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
 

    visible2: false,
    fruit: [{
      id: 1,
      name: '香蕉',
    }, {
      id: 2,
      name: '苹果'
    }, {
      id: 3,
      name: '西瓜'
    }, {
      id: 4,
      name: '葡萄',
    }],
    current: '苹果',
    position: 'left',
    animal: '熊猫',
    checked: false,
    disabled: false,
  
  },
 


 
  open2() {
   
    this.setData({
      visible2:true,
    })
  },
  
  close2() {
    this.setData({
      visible2: false,
    })
  },
  onClose(key) {
    console.log('onClose')
    this.setData({
      [key]: false,
    })
  },

  onClose2() {
    this.onClose('visible2')
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
    console.log('下拉')
    wx.stopPullDownRefresh() 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  
})

