
// 检查手机号
let checkMobile = function (mobile) {
  // var correctMobile = /^((13[0-9])|(15[^4,\\D])|(18[0,3,5-9]))\\d{8}$/
  var correctMobile = /^1[0-9]{10}$/
  return correctMobile.test(mobile)
}

// iphonex
let iPhone = function () {
  var u = navigator.userAgent, app = navigator.appVersion;
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isiOS) {
    var w=window.screen.width * window.devicePixelRatio;
    var h=window.screen.height * window.devicePixelRatio;
    if(w==1125&&h==2436 || w==828&&h==1792 || w==1242&&h==2688){//iPhone X/XS、iPhone XR、iPhone XS Max
      if(window.history.length == 1){
        document.getElementsByTagName('body')[0].className = 'has-bottombar';
      } else{
        document.getElementsByTagName('body')[0].classList.remove("has-bottombar");
      }
    }
  }
}

module.exports =  {
  checkMobile,
  iPhone
}