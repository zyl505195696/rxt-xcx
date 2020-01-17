// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:0,
      list:'',
      myrich:'',
      name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
     that.setData({
       id: options.id,
     
     })
    
    //  this.getlist(that.data.id)
  },
getlist:function(id){
  wx.showLoading({
    title: '加载中',

  })
  var that=this
  wx.request({
    url: 'https://api.artid='+id,
    method:'get',
    header:{},
    success:function(res){
       that.setData({
         list:res.data,
         myrich:res.data.content
       })
      
    },
    fail: function () {
     wx.showToast({
       title: '服务器异常',
       duration:1500
     })
    },
    complete:function(){
      wx.hideLoading()
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