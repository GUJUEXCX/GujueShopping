var app = getApp()

Page({
  data: {
    category: [
      { name: '手镯', id: 'shouzhuo' },
      { name: '项链', id: 'xianglian' },
      { name: '戒指', id: 'jiezhi' },
      { name: '脚链', id: 'jiaolian' },
      { name: '胸针', id: 'xiongzhen' },
      { name: '其它', id: 'qita' }
    ],
    detail: [
      {
        'id': 'shouzhuo',
        'cate': '手镯',
        'detail': [
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
        ]
      },
      {
        'id': 'xianglian',
        'cate': '项链',
        'detail': [
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
        ]
      },
      {
        'id': 'jiezhi',
        'cate': '戒指',
        'detail': [
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
        ]
      },
      {
        'id': 'jiaolian',
        'cate': '脚链',
        'detail': [
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
        ]
      },
      {
        'id': 'xiongzhen',
        'cate': '胸针',
        'detail': [
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
        ]
      },
      {
        'id': 'qita',
        'cate': '其它',
        'detail': [
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
          {
            'thumb': 'https://img14.360buyimg.com/n0/jfs/t5779/76/5045457326/549344/845a3a99/5959dc20N02a2930d.jpg',
            'name': '梨花带雨'
          },
        ]
      }
    ],
    curIndex: 0,
  },
  onReady () {
  },
  switchTab (e) {
    const that = this
    setTimeout(function () {
      that.setData({
        curIndex: e.target.dataset.index
      })
    }, 0)
  },
  upper () {
  },
  lower () {
  }

})