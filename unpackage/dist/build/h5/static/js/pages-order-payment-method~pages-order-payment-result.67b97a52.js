(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-payment-method~pages-order-payment-result"],{"20a0":function(a,e,t){"use strict";t.r(e);var n=t("6624"),i=t.n(n);for(var r in n)"default"!==r&&function(a){t.d(e,a,(function(){return n[a]}))}(r);e["default"]=i.a},"2e83":function(a,e,t){"use strict";var n;t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return n}));var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return a.showLogin&&!a.screenShot?t("v-uni-view",{staticClass:"cu-modal",class:[{show:a.showLogin},a.modalType],attrs:{cathctouchmove:!0},on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.hideModal.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"cu-dialog",staticStyle:{background:"none",overflow:"visible"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=a.$handleEvent(e)}}},[t("v-uni-view",{staticClass:"modal-box"},[t("v-uni-image",{staticClass:"head-bg",attrs:{src:"http://shopro.7wpp.com/imgs/nologin_bg.png",mode:""}}),t("v-uni-view",{staticClass:"detail"},[t("v-uni-view",{staticClass:"title1"},[a._v("您还没有登录")]),t("v-uni-view",{staticClass:"title2"},[a._v("登录即刻开启品质生活")])],1),t("v-uni-view",{staticClass:"btn-box y-f"},[t("v-uni-button",{staticClass:"cu-btn login-btn",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.onLogin.apply(void 0,arguments)}}},[a._v("立即登录")]),t("v-uni-button",{staticClass:"cu-btn close-btn",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.hideModal.apply(void 0,arguments)}}},[a._v("取消")])],1)],1)],1)],1):a._e()},r=[]},"590c":function(a,e,t){"use strict";t.r(e);var n=t("2e83"),i=t("20a0");for(var r in i)"default"!==r&&function(a){t.d(e,a,(function(){return i[a]}))}(r);t("8e1d");var o,d=t("f0c5"),l=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"634a0a5e",null,!1,n["a"],o);e["default"]=l.exports},6624:function(a,e,t){"use strict";var n=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("96cf");var i=n(t("1da1")),r=n(t("5530")),o=n(t("583f")),d=t("2f62"),l={name:"shoproLoginModal",components:{},data:function(){return{screenShot:uni.getStorageSync("screenShot")}},props:{value:{},modalType:{type:String,default:""}},computed:(0,r.default)((0,r.default)({},(0,d.mapState)({showLoginTip:function(a){return a.user.showLoginTip},forceOauth:function(a){return a.user.forceOauth}})),{},{showLogin:{get:function(){return this.showLoginTip},set:function(a){this.$store.commit("LOGIN_TIP",a)}}}),methods:(0,r.default)((0,r.default)({},(0,d.mapActions)(["setTokenAndBack"])),{},{hideModal:function(){this.showLogin=!1},onLogin:function(){this.showLogin=!1,uni.setStorageSync("fromLogin",this.$Route),this.$Router.push({path:"/pages/public/login"})},getuserinfo:function(a){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new o.default,t.next=3,n.wxMiniProgramLogin(a);case 3:i=t.sent,e.$store.commit("FORCE_OAUTH",!1),e.$store.commit("LOGIN_TIP",!1),uni.setStorageSync("fromLogin",e.$Route),e.setTokenAndBack(i);case 8:case"end":return t.stop()}}),t)})))()},closeAuth:function(){this.$store.commit("FORCE_OAUTH",!1),this.$store.commit("LOGIN_TIP",!1)}})};e.default=l},"7aa8":function(a,e,t){var n=t("24fb");e=n(!1),e.push([a.i,'@charset "UTF-8";\n/* ==================\n      uni-app的变量\n防止插件市场用到这些，就保留了\n ==================== */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* ==================\n       theme   \n ==================== */\n/*主题色*/\n/*文字色*/\n/*背景色*/\n/* ==================\n       自定义变量   \n ==================== */\n/*utils 工具*/\n/* 颜色 */.bg-red[data-v-634a0a5e]{background-color:#f33!important}.bg-purple[data-v-634a0a5e]{background-color:#ff33a9!important}.bg-orange[data-v-634a0a5e]{background-color:#f83!important}.bg-blue[data-v-634a0a5e]{background-color:#37f!important}.color-red[data-v-634a0a5e]{color:#f33!important}.color-purple[data-v-634a0a5e]{color:#ff33a9!important}.color-orange[data-v-634a0a5e]{color:#f83!important}.color-blue[data-v-634a0a5e]{color:#37f!important}.text-black[data-v-634a0a5e]{color:#000}.text-dark[data-v-634a0a5e]{color:#333}.text-deep[data-v-634a0a5e]{color:#555}.text-weak[data-v-634a0a5e]{color:#b3b3b3}.text-white[data-v-634a0a5e]{color:#fff}\n/*字体*/.f10[data-v-634a0a5e]{font-size:10px}.f12[data-v-634a0a5e]{font-size:12px}.f14[data-v-634a0a5e]{font-size:14px}.f15[data-v-634a0a5e]{font-size:15px}.f17[data-v-634a0a5e]{font-size:17px}.f20[data-v-634a0a5e]{font-size:20px}.f24[data-v-634a0a5e]{font-size:24px}\n/* 文字对齐*/.tl[data-v-634a0a5e]{text-align:left}.tc[data-v-634a0a5e]{text-align:center}.tr[data-v-634a0a5e]{text-align:right}\n/*浮动与清除浮动*/.fl[data-v-634a0a5e]{float:left}.fr[data-v-634a0a5e]{float:right}\n.fix[data-v-634a0a5e]{zoom:1}.fix[data-v-634a0a5e]:after{display:table;content:"";clear:both}\n\n/*显示*/.dn[data-v-634a0a5e]{display:none}.di[data-v-634a0a5e]{display:inline}.db[data-v-634a0a5e]{display:block}.dib[data-v-634a0a5e]{display:inline-block}.dt[data-v-634a0a5e]{display:table}\ndiv.dib[data-v-634a0a5e]{display:inline;zoom:1}\n.vm[data-v-634a0a5e]{vertical-align:middle}.vib[data-v-634a0a5e]{display:inline-block;vertical-align:middle}\n/*定位*/.pr[data-v-634a0a5e]{position:relative}.pa[data-v-634a0a5e]{position:absolute}.pf[data-v-634a0a5e]{position:fixed}\n/*盒子模型*/.mt2[data-v-634a0a5e]{margin-top:%?2?%}.mr2[data-v-634a0a5e]{margin-right:%?2?%}.mb2[data-v-634a0a5e]{margin-bottom:%?2?%}.ml2[data-v-634a0a5e]{margin-left:%?2?%}.mx2[data-v-634a0a5e]{margin-left:%?2?%;margin-right:%?2?%}.my2[data-v-634a0a5e]{margin-top:%?2?%;margin-bottom:%?2?%}.ma2[data-v-634a0a5e]{margin:%?2?%}.mt4[data-v-634a0a5e]{margin-top:%?4?%}.mr4[data-v-634a0a5e]{margin-right:%?4?%}.mb4[data-v-634a0a5e]{margin-bottom:%?4?%}.ml4[data-v-634a0a5e]{margin-left:%?4?%}.mx4[data-v-634a0a5e]{margin-left:%?4?%;margin-right:%?4?%}.my4[data-v-634a0a5e]{margin-top:%?4?%;margin-bottom:%?4?%}.ma4[data-v-634a0a5e]{margin:%?4?%}.mt8[data-v-634a0a5e]{margin-top:%?8?%}.mr8[data-v-634a0a5e]{margin-right:%?8?%}.mb8[data-v-634a0a5e]{margin-bottom:%?8?%}.ml8[data-v-634a0a5e]{margin-left:%?8?%}.mx8[data-v-634a0a5e]{margin-left:%?8?%;margin-right:%?8?%}.my8[data-v-634a0a5e]{margin-top:%?8?%;margin-bottom:%?8?%}.ma8[data-v-634a0a5e]{margin:%?8?%}.mt10[data-v-634a0a5e]{margin-top:%?10?%}.mr10[data-v-634a0a5e]{margin-right:%?10?%}.mb10[data-v-634a0a5e]{margin-bottom:%?10?%}.ml10[data-v-634a0a5e]{margin-left:%?10?%}.mx10[data-v-634a0a5e]{margin-left:%?10?%;margin-right:%?10?%}.my10[data-v-634a0a5e]{margin-top:%?10?%;margin-bottom:%?10?%}.ma10[data-v-634a0a5e]{margin:%?10?%}.mt15[data-v-634a0a5e]{margin-top:%?15?%}.mr15[data-v-634a0a5e]{margin-right:%?15?%}.mb15[data-v-634a0a5e]{margin-bottom:%?15?%}.ml15[data-v-634a0a5e]{margin-left:%?15?%}.mx15[data-v-634a0a5e]{margin-left:%?15?%;margin-right:%?15?%}.my15[data-v-634a0a5e]{margin-top:%?15?%;margin-bottom:%?15?%}.ma15[data-v-634a0a5e]{margin:%?15?%}.mt20[data-v-634a0a5e]{margin-top:%?20?%}.mr20[data-v-634a0a5e]{margin-right:%?20?%}.mb20[data-v-634a0a5e]{margin-bottom:%?20?%}.ml20[data-v-634a0a5e]{margin-left:%?20?%}.mx20[data-v-634a0a5e]{margin-left:%?20?%;margin-right:%?20?%}.my20[data-v-634a0a5e]{margin-top:%?20?%;margin-bottom:%?20?%}.ma20[data-v-634a0a5e]{margin:%?20?%}.mt24[data-v-634a0a5e]{margin-top:%?24?%}.mr24[data-v-634a0a5e]{margin-right:%?24?%}.mb24[data-v-634a0a5e]{margin-bottom:%?24?%}.ml24[data-v-634a0a5e]{margin-left:%?24?%}.mx24[data-v-634a0a5e]{margin-left:%?24?%;margin-right:%?24?%}.my24[data-v-634a0a5e]{margin-top:%?24?%;margin-bottom:%?24?%}.ma24[data-v-634a0a5e]{margin:%?24?%}.mt30[data-v-634a0a5e]{margin-top:%?30?%}.mr30[data-v-634a0a5e]{margin-right:%?30?%}.mb30[data-v-634a0a5e]{margin-bottom:%?30?%}.ml30[data-v-634a0a5e]{margin-left:%?30?%}.mx30[data-v-634a0a5e]{margin-left:%?30?%;margin-right:%?30?%}.my30[data-v-634a0a5e]{margin-top:%?30?%;margin-bottom:%?30?%}.ma30[data-v-634a0a5e]{margin:%?30?%}.pt2[data-v-634a0a5e]{padding-top:%?2?%}.pr2[data-v-634a0a5e]{padding-right:%?2?%}.pb2[data-v-634a0a5e]{padding-bottom:%?2?%}.pl2[data-v-634a0a5e]{padding-left:%?2?%}.px2[data-v-634a0a5e]{padding-left:%?2?%;padding-right:%?2?%}.py2[data-v-634a0a5e]{padding-top:%?2?%;padding-bottom:%?2?%}.pa2[data-v-634a0a5e]{padding:%?2?%}.pt4[data-v-634a0a5e]{padding-top:%?4?%}.pr4[data-v-634a0a5e]{padding-right:%?4?%}.pb4[data-v-634a0a5e]{padding-bottom:%?4?%}.pl4[data-v-634a0a5e]{padding-left:%?4?%}.px4[data-v-634a0a5e]{padding-left:%?4?%;padding-right:%?4?%}.py4[data-v-634a0a5e]{padding-top:%?4?%;padding-bottom:%?4?%}.pa4[data-v-634a0a5e]{padding:%?4?%}.pt8[data-v-634a0a5e]{padding-top:%?8?%}.pr8[data-v-634a0a5e]{padding-right:%?8?%}.pb8[data-v-634a0a5e]{padding-bottom:%?8?%}.pl8[data-v-634a0a5e]{padding-left:%?8?%}.px8[data-v-634a0a5e]{padding-left:%?8?%;padding-right:%?8?%}.py8[data-v-634a0a5e]{padding-top:%?8?%;padding-bottom:%?8?%}.pa8[data-v-634a0a5e]{padding:%?8?%}.pt10[data-v-634a0a5e]{padding-top:%?10?%}.pr10[data-v-634a0a5e]{padding-right:%?10?%}.pb10[data-v-634a0a5e]{padding-bottom:%?10?%}.pl10[data-v-634a0a5e]{padding-left:%?10?%}.px10[data-v-634a0a5e]{padding-left:%?10?%;padding-right:%?10?%}.py10[data-v-634a0a5e]{padding-top:%?10?%;padding-bottom:%?10?%}.pa10[data-v-634a0a5e]{padding:%?10?%}.pt15[data-v-634a0a5e]{padding-top:%?15?%}.pr15[data-v-634a0a5e]{padding-right:%?15?%}.pb15[data-v-634a0a5e]{padding-bottom:%?15?%}.pl15[data-v-634a0a5e]{padding-left:%?15?%}.px15[data-v-634a0a5e]{padding-left:%?15?%;padding-right:%?15?%}.py15[data-v-634a0a5e]{padding-top:%?15?%;padding-bottom:%?15?%}.pa15[data-v-634a0a5e]{padding:%?15?%}.pt20[data-v-634a0a5e]{padding-top:%?20?%}.pr20[data-v-634a0a5e]{padding-right:%?20?%}.pb20[data-v-634a0a5e]{padding-bottom:%?20?%}.pl20[data-v-634a0a5e]{padding-left:%?20?%}.px20[data-v-634a0a5e]{padding-left:%?20?%;padding-right:%?20?%}.py20[data-v-634a0a5e]{padding-top:%?20?%;padding-bottom:%?20?%}.pa20[data-v-634a0a5e]{padding:%?20?%}.pt24[data-v-634a0a5e]{padding-top:%?24?%}.pr24[data-v-634a0a5e]{padding-right:%?24?%}.pb24[data-v-634a0a5e]{padding-bottom:%?24?%}.pl24[data-v-634a0a5e]{padding-left:%?24?%}.px24[data-v-634a0a5e]{padding-left:%?24?%;padding-right:%?24?%}.py24[data-v-634a0a5e]{padding-top:%?24?%;padding-bottom:%?24?%}.pa24[data-v-634a0a5e]{padding:%?24?%}.pt30[data-v-634a0a5e]{padding-top:%?30?%}.pr30[data-v-634a0a5e]{padding-right:%?30?%}.pb30[data-v-634a0a5e]{padding-bottom:%?30?%}.pl30[data-v-634a0a5e]{padding-left:%?30?%}.px30[data-v-634a0a5e]{padding-left:%?30?%;padding-right:%?30?%}.py30[data-v-634a0a5e]{padding-top:%?30?%;padding-bottom:%?30?%}.pa30[data-v-634a0a5e]{padding:%?30?%}\n/*按钮禁用*/.disabled[data-v-634a0a5e]{outline:0 none;cursor:default!important;opacity:.4;filter:alpha(opacity=40);-ms-pointer-events:none;pointer-events:none}\n/**\n * \n * 自定义class工具\n * \n*/.pad[data-v-634a0a5e]{padding:0 %?30?%}.page_box[data-v-634a0a5e]{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;overflow-x:hidden;background:#f6f6f6}.scroll-box[data-v-634a0a5e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;position:relative}.content_box[data-v-634a0a5e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto}\n/*单行文本溢出省略号*/.one-t[data-v-634a0a5e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-transition:all linear .2s;transition:all linear .2s}\n/*多行文本溢出省略号*/.more-t[data-v-634a0a5e]{overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-transition:all linear .2s;transition:all linear .2s}\n/* ==================\n          flex布局(colorui里面也有相关基础样式)\n ==================== */\n/* x水平排列*/.x-f[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x两端且水平居中*/.x-bc[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x平分且水平居中*/.x-ac[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x水平靠上对齐*/.x-start[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n/*x水平靠下对齐*/.x-end[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n/*上下左右居中*/.x-c[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*y竖直靠左*/.y-start[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n/*y竖直靠右*/.y-end[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n/*y竖直居中*/.y-f[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.y-b[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n/*y竖直两端居中*/.y-bc[data-v-634a0a5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n/* ==================\n     flex布局  \n ==================== */\n/* ==================\n      渐变色 \n ==================== */\n/**\n* 溢出省略号\n* @param {Number} 行数\n*/\n/* shopro主题颜色 */\n/* 深黑 */#dark-theme[data-v-634a0a5e]{background:#000}#dark-theme .bColor[data-v-634a0a5e]{background:#333;color:#999}#dark-theme .borderColor[data-v-634a0a5e]{border-color:#999}\n/* 粉红 */#red-theme[data-v-634a0a5e]{background:#f9e5ee}#red-theme .bColor[data-v-634a0a5e]{background:#f9e5ee;color:#8e5a54}#red-theme .borderColor[data-v-634a0a5e]{border-color:#8e5a54}\n/* 橘黄 */#yellow-theme[data-v-634a0a5e]{background:#f6e1c9}#yellow-theme .bColor[data-v-634a0a5e]{background:#f6e1c9;color:#8c6031}#yellow-theme .borderColor[data-v-634a0a5e]{border-color:#8c6031}.modal-box[data-v-634a0a5e]{width:%?610?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;background:#fff;position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding-bottom:%?30?%}.modal-box .head-bg[data-v-634a0a5e]{width:100%;height:%?210?%}.modal-box .detail .title1[data-v-634a0a5e]{color:#46351b;font-size:%?35?%;font-weight:700}.modal-box .detail .title2[data-v-634a0a5e]{font-size:%?28?%;color:#999;padding-top:%?20?%}.modal-box .btn-box[data-v-634a0a5e]{margin-top:%?80?%}.modal-box .btn-box .login-btn[data-v-634a0a5e]{width:%?492?%;height:%?70?%;background:-webkit-gradient(linear,left top,right top,from(#e9b461),to(#eecc89));background:-webkit-linear-gradient(left,#e9b461,#eecc89);background:linear-gradient(90deg,#e9b461,#eecc89);-webkit-box-shadow:0 %?7?% %?6?% 0 rgba(229,138,0,.22);box-shadow:0 %?7?% %?6?% 0 rgba(229,138,0,.22);-webkit-border-radius:%?35?%;border-radius:%?35?%;font-size:%?28?%;color:hsla(0,0%,100%,.9)}.modal-box .btn-box .close-btn[data-v-634a0a5e]{width:%?492?%;height:%?70?%;color:#e9b766;font-size:%?26?%;margin-top:%?20?%;background:none}',""]),a.exports=e},"8e1d":function(a,e,t){"use strict";var n=t("afa1"),i=t.n(n);i.a},a367:function(a,e,t){"use strict";(function(a){var n=t("4ea4");t("99af"),t("d3b7"),t("4d63"),t("ac1f"),t("25f0"),t("466d"),t("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("96cf");var i=n(t("1da1")),r=n(t("d4ec")),o=n(t("bee2")),d=n(t("7344")),l=(n(t("2464")),n(t("e9af"))),p=n(t("efcd")),c=n(t("583f")),s=n(t("8b00")),u=function(){function e(a,t){(0,r.default)(this,e),this.payment=a,this.order=t,this.platform=uni.getStorageSync("platform");var n=this.getPayMethod();n()}return(0,o.default)(e,[{key:"getPayMethod",value:function(){var a=this,e={wxOfficialAccount:{wechat:function(){a.wxOfficialAccountPay()},alipay:function(){a.copyPayLink()},wallet:function(){a.walletPay()}},wxMiniProgram:{wechat:function(){a.wxMiniProgramPay()},alipay:function(){a.copyPayLink()},wallet:function(){a.walletPay()}},App:{wechat:function(){a.wechatPay()},alipay:function(){a.aliPay()},wallet:function(){a.walletPay()}},H5:{wechat:function(){a.wechatWapPay()},alipay:function(){a.goToPayLink()},wallet:function(){a.walletPay()}}};return e[this.platform][this.payment]}},{key:"prepay",value:function(){var e=this;return uni.showLoading({title:"支付中",mask:!0}),new Promise((function(t,n){var i=e,r={order_sn:i.order.order_sn,payment:i.payment};uni.getStorageSync("openid")&&(r.openid=uni.getStorageSync("openid")),(0,d.default)("pay.prepay",r).then((function(e){1===e.code?"no_openid"===e.data?uni.showModal({title:"微信支付",content:"点击确定后请再次使用微信支付",success:function(e){if(e.confirm){var t=new c.default;t.wxOfficialAccountBaseLogin()}else e.cancel&&a("log","用户点击取消"," at common/shopro-pay.js:118")},fail:function(a){uni.hideLoading()}}):(uni.hideLoading(),t(e)):(uni.hideLoading(),uni.showToast({title:e.msg,icon:"none"}))}))}))}},{key:"wxOfficialAccountPay",value:function(){var a=(0,i.default)(regeneratorRuntime.mark((function a(){var e,t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=this,a.next=3,this.prepay();case 3:t=a.sent,p.default.wxpay(t.data.pay_data,(function(a){"chooseWXPay:ok"==a.errMsg?s.default.replace({path:"/pages/order/payment/result",query:{orderSn:e.order.order_sn,type:e.payment,pay:1}}):"chooseWXPay:cancel"===a.errMsg||s.default.replace({path:"/pages/order/payment/result",query:{orderSn:e.order.order_sn,type:e.payment,pay:0}})}));case 5:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}()},{key:"wechatWapPay",value:function(){var a=(0,i.default)(regeneratorRuntime.mark((function a(){var e,t,n,i,r,o,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=this,a.next=3,this.prepay();case 3:t=a.sent,1===t.code&&(n=t.data.pay_data.match(/url\=\'(\S*)\'/),i=new RegExp("&amp;","g"),r=n[1].replace(i,"&"),o=uni.getStorageSync("sysInfo").domain,d=encodeURIComponent("".concat(o,"/pages/order/payment/result?orderSn=").concat(e.order.order_sn,"&type=").concat(e.payment,"&pay=1")),window.location.href=r+"&redirect_url="+d);case 5:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}()},{key:"wxMiniProgramPay",value:function(){var a=(0,i.default)(regeneratorRuntime.mark((function a(){var e,t,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=this,a.next=3,this.prepay();case 3:t=a.sent,n=t.data.pay_data,uni.requestPayment({provider:"wxpay",timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(a){s.default.replace({path:"/pages/order/payment/result",query:{orderSn:e.order.order_sn,type:e.payment,pay:1}})},fail:function(a){"requestPayment:fail cancel"!==a.errMsg&&s.default.replace({path:"/pages/order/payment/result",query:{orderSn:e.order.order_sn,type:e.payment,pay:0}})}});case 6:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}()},{key:"walletPay",value:function(){var a=(0,i.default)(regeneratorRuntime.mark((function a(){var e,t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=this,a.next=3,this.prepay();case 3:t=a.sent,1===t.code&&s.default.replace({path:"/pages/order/payment/result",query:{orderSn:e.order.order_sn,type:e.payment,pay:1}});case 5:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}()},{key:"copyPayLink",value:function(){var a=(0,i.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return this,a.next=3,this.prepay();case 3:e=a.sent,1===e.code&&uni.showModal({title:"支付宝支付",content:"复制链接到外部浏览器",confirmText:"复制链接",success:function(a){a.confirm?uni.setClipboardData({data:e.data.pay_data,success:function(a){l.default.toast("已复制到剪切板")},fail:function(a){},complete:function(a){}}):a.cancel}});case 5:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}()},{key:"goToPayLink",value:function(){var a=(0,i.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return this,a.next=3,this.prepay();case 3:e=a.sent,1===e.code&&(window.location=e.data.pay_data);case 5:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}()},{key:"aliPay",value:function(){var a=(0,i.default)(regeneratorRuntime.mark((function a(){var e,t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=this,a.next=3,this.prepay();case 3:t=a.sent,1===t.code&&uni.requestPayment({provider:"alipay",orderInfo:t.data.pay_data,success:function(a){s.default.replace({path:"/pages/order/payment/result",query:{orderSn:e.order.order_sn,type:e.payment,pay:1}})},fail:function(a){"requestPayment:fail cancel"!==a.errMsg&&s.default.replace({path:"/pages/order/payment/result",query:{orderSn:e.order.order_sn,type:e.payment,pay:0}})}});case 5:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}()},{key:"wechatPay",value:function(){var a=(0,i.default)(regeneratorRuntime.mark((function a(){var e,t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=this,a.next=3,this.prepay();case 3:t=a.sent,1===t.code&&uni.requestPayment({provider:"wxpay",orderInfo:JSON.parse(t.data.pay_data),success:function(a){s.default.replace({path:"/pages/order/payment/result",query:{orderSn:e.order.order_sn,type:e.payment,pay:1}})},fail:function(a){"requestPayment:fail cancel"!==a.errMsg&&s.default.replace({path:"/pages/order/payment/result",query:{orderSn:e.order.order_sn,type:e.payment,pay:0}})}});case 5:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}()}]),e}();e.default=u}).call(this,t("0de9")["log"])},afa1:function(a,e,t){var n=t("7aa8");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=t("4f06").default;i("5202f3c6",n,!0,{sourceMap:!1,shadowMode:!1})}}]);