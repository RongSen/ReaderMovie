Page({
  onTap: function(event){
    wx.redirectTo({
      url: '../posts/post',
      success: function(res){
        console.log('redirectTo success');
      },
      fail: function(){
        console.log('redirectTo fail');
      },
      complete: function(){
        console.log('redirectTo comlete');
      }
    });
  },
  onHide: function(){
    console.log('welcome is hided');
  }
})