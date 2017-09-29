const App = getApp()

Page({
  data: {
    avatarUrl: 'https://img14.360buyimg.com/n0/jfs/t5956/198/2732777523/490544/88119ca0/59438082N93ac7c97.jpg',
    userName: '古觉'
  },
  order () {
    wx.reLaunch({
      url: '../index/index'
    })
  },
  address () {
    wx.reLaunch({
      url: '../categories/index'
    })
  },
  about () {
    wx.reLaunch({
      url: '../index/index'
    })
  }
})