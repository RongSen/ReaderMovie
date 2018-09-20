var postsData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //postList: postsData.postList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      postList: postsData.postList
    }); 
    //this.data.postList = postsData.postList;
  }
})