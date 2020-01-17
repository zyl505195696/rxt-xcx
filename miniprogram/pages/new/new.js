// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:'',
    password:''
  },
  bindEmailInput:function(e){
    this.setData({
      email:e.detail.value
    })
  },
  bindPasswordInput:function(e){
    this.setData({
      password:e.detail.value
    })
  },
login:function(e){
  var that=this
   wx.showToast({
     title:'登录请求中',
     icon:'loading',
     duration:1000
   })

   // 网络请求开始
   wx.request({
     url:'http:aaaa/login?email='+this.data.email+'&password='+this.data.password,
     header:{
       "Content-Type":'application/json'
     },
     success:function(res){

       
          wx.hideToast()
          if(res.data.LoginStatus == 1){
            // 进行一些用户状态的储存
            // 进行tab切换
            wx.switchTab({
              url: '../indexn/indexn',
              success:function(){
                console.log('ok')
              }
            })
          }
          else{
            wx.showModal({
              title: '登录失败',
              content: '请检查您填写的用户信息',
              showCancel:false,
              success:function(res){
                 // 回调函数
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