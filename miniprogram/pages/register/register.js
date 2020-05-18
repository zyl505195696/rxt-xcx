// pages/register/register.js
var countdown = 60;
var settime = function(that) {
  if (countdown == 0) {
    that.setData({
      is_show: true
    })
    countdown = 60;
    return;
  } else {
    that.setData({
      is_show: false,
      last_time: countdown
    })

    countdown--;
  }
  setTimeout(function() {
    settime(that)
  }, 1000)
}


Page({

  /**
   * 页面的初始数据
   */
  data: {


    position: 'left',
    checked: false,
    last_time: '',
    is_show: true
  },

  // 接受并阅读的切换
  handleChange({
    detail = {}
  }) {
    this.setData({
      checked: detail.current
    });
  },

  clickVerify: function() {
    var that = this;

    that.setData({
      is_show: (!that.data.is_show) //false
    })
    settime(that);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})