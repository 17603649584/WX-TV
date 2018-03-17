// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("home  onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("home  onReady");

    let arr=[];
    let arr2=["龙套", "演员", "导演"];
    for(let j=0;j<arr2.length;j++){
      arr.push( arr2[j] )
    }
    this.setData({ listData : arr });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("home  onShow")
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("home  onHide")
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("home  onUnload")
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("home  onPullDownRefresh")
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("home  onReachBottom")
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("home  onShareAppMessage")
  
  },
  onTabItemTap(){
    console.log("点击了")
  },
  sboxAction() {
    console.log("点到小选项了")
  },
  boxAction(){
    console.log("点到大选项了")
  },
  itemClick(ev){
    console.log("item 点击了");
    console.log(ev);
    console.log(ev.currentTarget.dataset)
  }
})