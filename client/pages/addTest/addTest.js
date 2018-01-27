wx.getSystemInfo({
  success: function (res) {
    that.setData({
      clientHeight: res.windowHeight
    });
  }
}),

Page({
  data: {
    bible_title: "罗马书1·祝福",
    sec1:"1>耶稣基督的仆人保罗，奉召为使徒，特派传神的福音。",
    sec2:"2>这福音是神从前借众先知所应许的。",
    sec3:"3>论到他儿子——我主耶稣基督。按肉体说，是从大卫后裔生的；",
    sec4:"4>按圣善的灵说，因从死里复活，以大能显明是神的儿子。",
    sec5:"5>我们从他受了恩惠并使徒的职分，在万国之中叫人为他的名信服真道；",
    sec6:"6>其中也有你们这蒙召属耶稣基督的人。",
    sec7:"7>我写信给你们在罗马、为神所爱、奉召作圣徒的众人。愿恩惠、平安从我们的父神并主耶稣基督归与你们！"
  },
  formSubmit: function (e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)

    wx.navigateTo({
      url: '../addCgi/addCgi'
    });
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})