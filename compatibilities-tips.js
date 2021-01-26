(function(){
        //浏览器兼容性提示
        var   compat190103 = (function(){
          // 展示提示内容
          var showTips = function () {
                  var html='<div class="compat1913" style="background: #f9f3cf;height: 30px;line-height: 30px;border: 1px solid #f7eaac;text-align: center;">' +
                      '<span style="color: #8c6327;font-size: 12px;">万方知识服务平台将于1月27日上午6点至9点进行网站升级维护，为您带来不便，敬请谅解！</span>'+
                      '<span class="compat1913-close" ' +
                      'style="display: inline-block;cursor: pointer; color: #8e6529;background-color: #f7eaac;font-size: 10px; height: 15px;width: 15px;line-height: 15px;border-radius: 10px;margin-left: 15px;"' +
                      'onclick="javascript:$(this).parents(\'.compat1913\').remove();">X</span>' +
                      '</div>';
                  $('body').prepend(html);
              };
          var ifShowTips = (function () {
              //判断浏览器
              var browserList = ['Firefox','QQ','Sougou','UC','IE9','Edge','360','Chrome','Mobile'];
              var browser=(function (){
                  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                  var isMobile = userAgent.indexOf("Mobile") > -1; //判断是否手机浏览器
                  if (isMobile) { return "Mobile";}
                  var isFirefox = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
                  if (isFirefox) { return "Firefox";}
                  var isQQ = userAgent.indexOf("QQBrowser") > -1|| userAgent.indexOf("QBWebView") > -1 ; //判断QQ浏览器
                  if (isQQ) { return "QQ";}
                  var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
                  if (isSafari) { return "Safari";}
                  var isSougou = userAgent.indexOf("SE 2.X") > -1; //判断是否搜狗浏览器
                  if (isSougou) { return "Sougou";}
                  var isUC = userAgent.indexOf("UCBrowser") > -1; //判断是否UC浏览器(移动端)
                  if (isUC) { return "UC";}
                  var isUC_PC = userAgent.indexOf("UBrowser") > -1; //判断是否UC浏览器(pc端)
                  if (isUC_PC) { return "UC-PC";}
                  var isBaidu = userAgent.indexOf("BIDUBrowser") > -1 || userAgent.indexOf("baidubrowser") > -1; //判断是否百度浏览器
                  if (isBaidu) { return "Baidu";}
                  var isOpera = userAgent.indexOf("OPR") > -1; //判断是否Opera浏览器
                  if (isOpera) { return "Opera";}
                  var isMaxthon = userAgent.indexOf("Maxthon") > -1; //判断是否遨游浏览器
                  if (isMaxthon) { return "Maxthon";}
                  var isLB = userAgent.indexOf("LBBROWSER") > -1; //判断是否猎豹浏览器
                  if (isLB) { return "LB";}
                  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
                  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
                  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;//判断是否IE11浏览器
                  if(isIE) {
                      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                      reIE.test(userAgent);
                      var fIEVersion = parseFloat(RegExp["$1"]);
                      if(fIEVersion >= 9) {
                          return 'IE9';
                      }
                  } else if(isEdge) {
                      return 'Edge';
                  } else if(isIE11) {
                      return 'IE9';
                  }
                  var is360 = userAgent.indexOf("360SE") > -1; //判断是否360浏览器
                  if (is360) { return "360";}
                  var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
                  if (isChrome) { return "Chrome";}
              })();
              if($.inArray( browser, browserList ) == -1){
                  return true;
              }else{
                  return false;
              }
          })();
          var whereShowTips = (function(){
              //判断路径
              if(window.location.pathname == '/index.html'){
                  return true;
              }
          })();
          return {
                  init: (function () {
                          if(whereShowTips == true){
                              showTips();
                          }
                  })()
          }
        })();
})();
