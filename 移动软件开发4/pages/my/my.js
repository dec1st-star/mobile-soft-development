// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num:0,
        nickName:'未登录',
        src:'/images/images/index.png',
        newList:[
      
        ]
    },
    getUserProfile(e){
        wx.getUserProfile({
          desc: 'desc',
          success:(res)=>{
              //console.log(res)
              this.setData({
                  isLogin:true,
                  src:res.userInfo.avatarUrl,
                  nickName:res.userInfo.nickName
              })
              this.getMyFavorites()
          },
        })
    },
    getMyFavorites:function(){
        let info=wx.getStorageInfoSync();
        let keys=info.keys;
        let num=keys.length

        let myList=[];
        for(var i=0;i<num;i++){
            let obj =wx.getStorageSync(keys[i]);
            myList.push(obj);
        }
        this.setData({
            newList:myList,
            num:num
        })
    },
    goToDetail: function(e) {
        //获取携带的data-id数据
        let id = e.currentTarget.dataset.id;
        //携带新闻id进行页面跳转
        wx.navigateTo({
          url: '../detail/detail?id=' + id
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow:function() {
        if(this.data.isLogin){
            this.getMyFavorites()
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})