(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-edit-phone"],{1041:function(t,a,e){"use strict";var i=e("f3a8"),n=e.n(i);n.a},"2ac8":function(t,a,e){"use strict";e.r(a);var i=e("9b81"),n=e("d8dd");for(var d in n)"default"!==d&&function(t){e.d(a,t,(function(){return n[t]}))}(d);e("1041");var o,b=e("f0c5"),c=Object(b["a"])(n["default"],i["b"],i["c"],!1,null,"4b72c5f4",null,!1,i["a"],o);a["default"]=c.exports},"9b81":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return d})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"bank-wrap"},[e("v-uni-view",{staticClass:"form-box"},[e("v-uni-label",[e("v-uni-view",{staticClass:"form-item flex align-center justify-between"},[e("v-uni-view",{staticClass:"item-title"},[t._v("手机号:")]),e("v-uni-input",{staticClass:"item-input flex-sub",attrs:{type:"number",placeholder:"请输入要绑定的新手机号","placeholder-class":"pl-input"},model:{value:t.phone,callback:function(a){t.phone=a},expression:"phone"}})],1)],1),e("v-uni-view",{staticClass:"form-item flex align-center justify-between"},[e("v-uni-label",[e("v-uni-view",{staticClass:"x-f"},[e("v-uni-view",{staticClass:"item-title"},[t._v("验证码:")]),e("v-uni-input",{staticClass:"item-input flex-sub",attrs:{type:"text",placeholder:"请输入验证码","placeholder-class":"pl-input"},model:{value:t.code.value,callback:function(a){t.$set(t.code,"value",a)},expression:"code.value"}})],1)],1),e("v-uni-button",{staticClass:"cu-btn code-btn",attrs:{disabled:t.code.status},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.code.text))])],1)],1),e("v-uni-view",{staticClass:"btn-box flex align-center justify-center"},[e("v-uni-button",{staticClass:"cu-btn confirem-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.editChangemobile.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},d=[]},ad16:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* ==================\n      uni-app的变量\n防止插件市场用到这些，就保留了\n ==================== */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* ==================\n       theme   \n ==================== */\n/*主题色*/\n/*文字色*/\n/*背景色*/\n/* ==================\n       自定义变量   \n ==================== */\n/*utils 工具*/\n/* 颜色 */.bg-red[data-v-4b72c5f4]{background-color:#f33!important}.bg-purple[data-v-4b72c5f4]{background-color:#ff33a9!important}.bg-orange[data-v-4b72c5f4]{background-color:#f83!important}.bg-blue[data-v-4b72c5f4]{background-color:#37f!important}.color-red[data-v-4b72c5f4]{color:#f33!important}.color-purple[data-v-4b72c5f4]{color:#ff33a9!important}.color-orange[data-v-4b72c5f4]{color:#f83!important}.color-blue[data-v-4b72c5f4]{color:#37f!important}.text-black[data-v-4b72c5f4]{color:#000}.text-dark[data-v-4b72c5f4]{color:#333}.text-deep[data-v-4b72c5f4]{color:#555}.text-weak[data-v-4b72c5f4]{color:#b3b3b3}.text-white[data-v-4b72c5f4]{color:#fff}\n/*字体*/.f10[data-v-4b72c5f4]{font-size:10px}.f12[data-v-4b72c5f4]{font-size:12px}.f14[data-v-4b72c5f4]{font-size:14px}.f15[data-v-4b72c5f4]{font-size:15px}.f17[data-v-4b72c5f4]{font-size:17px}.f20[data-v-4b72c5f4]{font-size:20px}.f24[data-v-4b72c5f4]{font-size:24px}\n/* 文字对齐*/.tl[data-v-4b72c5f4]{text-align:left}.tc[data-v-4b72c5f4]{text-align:center}.tr[data-v-4b72c5f4]{text-align:right}\n/*浮动与清除浮动*/.fl[data-v-4b72c5f4]{float:left}.fr[data-v-4b72c5f4]{float:right}\n.fix[data-v-4b72c5f4]{zoom:1}.fix[data-v-4b72c5f4]:after{display:table;content:"";clear:both}\n\n/*显示*/.dn[data-v-4b72c5f4]{display:none}.di[data-v-4b72c5f4]{display:inline}.db[data-v-4b72c5f4]{display:block}.dib[data-v-4b72c5f4]{display:inline-block}.dt[data-v-4b72c5f4]{display:table}\ndiv.dib[data-v-4b72c5f4]{display:inline;zoom:1}\n.vm[data-v-4b72c5f4]{vertical-align:middle}.vib[data-v-4b72c5f4]{display:inline-block;vertical-align:middle}\n/*定位*/.pr[data-v-4b72c5f4]{position:relative}.pa[data-v-4b72c5f4]{position:absolute}.pf[data-v-4b72c5f4]{position:fixed}\n/*盒子模型*/.mt2[data-v-4b72c5f4]{margin-top:%?2?%}.mr2[data-v-4b72c5f4]{margin-right:%?2?%}.mb2[data-v-4b72c5f4]{margin-bottom:%?2?%}.ml2[data-v-4b72c5f4]{margin-left:%?2?%}.mx2[data-v-4b72c5f4]{margin-left:%?2?%;margin-right:%?2?%}.my2[data-v-4b72c5f4]{margin-top:%?2?%;margin-bottom:%?2?%}.ma2[data-v-4b72c5f4]{margin:%?2?%}.mt4[data-v-4b72c5f4]{margin-top:%?4?%}.mr4[data-v-4b72c5f4]{margin-right:%?4?%}.mb4[data-v-4b72c5f4]{margin-bottom:%?4?%}.ml4[data-v-4b72c5f4]{margin-left:%?4?%}.mx4[data-v-4b72c5f4]{margin-left:%?4?%;margin-right:%?4?%}.my4[data-v-4b72c5f4]{margin-top:%?4?%;margin-bottom:%?4?%}.ma4[data-v-4b72c5f4]{margin:%?4?%}.mt8[data-v-4b72c5f4]{margin-top:%?8?%}.mr8[data-v-4b72c5f4]{margin-right:%?8?%}.mb8[data-v-4b72c5f4]{margin-bottom:%?8?%}.ml8[data-v-4b72c5f4]{margin-left:%?8?%}.mx8[data-v-4b72c5f4]{margin-left:%?8?%;margin-right:%?8?%}.my8[data-v-4b72c5f4]{margin-top:%?8?%;margin-bottom:%?8?%}.ma8[data-v-4b72c5f4]{margin:%?8?%}.mt10[data-v-4b72c5f4]{margin-top:%?10?%}.mr10[data-v-4b72c5f4]{margin-right:%?10?%}.mb10[data-v-4b72c5f4]{margin-bottom:%?10?%}.ml10[data-v-4b72c5f4]{margin-left:%?10?%}.mx10[data-v-4b72c5f4]{margin-left:%?10?%;margin-right:%?10?%}.my10[data-v-4b72c5f4]{margin-top:%?10?%;margin-bottom:%?10?%}.ma10[data-v-4b72c5f4]{margin:%?10?%}.mt15[data-v-4b72c5f4]{margin-top:%?15?%}.mr15[data-v-4b72c5f4]{margin-right:%?15?%}.mb15[data-v-4b72c5f4]{margin-bottom:%?15?%}.ml15[data-v-4b72c5f4]{margin-left:%?15?%}.mx15[data-v-4b72c5f4]{margin-left:%?15?%;margin-right:%?15?%}.my15[data-v-4b72c5f4]{margin-top:%?15?%;margin-bottom:%?15?%}.ma15[data-v-4b72c5f4]{margin:%?15?%}.mt20[data-v-4b72c5f4]{margin-top:%?20?%}.mr20[data-v-4b72c5f4]{margin-right:%?20?%}.mb20[data-v-4b72c5f4]{margin-bottom:%?20?%}.ml20[data-v-4b72c5f4]{margin-left:%?20?%}.mx20[data-v-4b72c5f4]{margin-left:%?20?%;margin-right:%?20?%}.my20[data-v-4b72c5f4]{margin-top:%?20?%;margin-bottom:%?20?%}.ma20[data-v-4b72c5f4]{margin:%?20?%}.mt24[data-v-4b72c5f4]{margin-top:%?24?%}.mr24[data-v-4b72c5f4]{margin-right:%?24?%}.mb24[data-v-4b72c5f4]{margin-bottom:%?24?%}.ml24[data-v-4b72c5f4]{margin-left:%?24?%}.mx24[data-v-4b72c5f4]{margin-left:%?24?%;margin-right:%?24?%}.my24[data-v-4b72c5f4]{margin-top:%?24?%;margin-bottom:%?24?%}.ma24[data-v-4b72c5f4]{margin:%?24?%}.mt30[data-v-4b72c5f4]{margin-top:%?30?%}.mr30[data-v-4b72c5f4]{margin-right:%?30?%}.mb30[data-v-4b72c5f4]{margin-bottom:%?30?%}.ml30[data-v-4b72c5f4]{margin-left:%?30?%}.mx30[data-v-4b72c5f4]{margin-left:%?30?%;margin-right:%?30?%}.my30[data-v-4b72c5f4]{margin-top:%?30?%;margin-bottom:%?30?%}.ma30[data-v-4b72c5f4]{margin:%?30?%}.pt2[data-v-4b72c5f4]{padding-top:%?2?%}.pr2[data-v-4b72c5f4]{padding-right:%?2?%}.pb2[data-v-4b72c5f4]{padding-bottom:%?2?%}.pl2[data-v-4b72c5f4]{padding-left:%?2?%}.px2[data-v-4b72c5f4]{padding-left:%?2?%;padding-right:%?2?%}.py2[data-v-4b72c5f4]{padding-top:%?2?%;padding-bottom:%?2?%}.pa2[data-v-4b72c5f4]{padding:%?2?%}.pt4[data-v-4b72c5f4]{padding-top:%?4?%}.pr4[data-v-4b72c5f4]{padding-right:%?4?%}.pb4[data-v-4b72c5f4]{padding-bottom:%?4?%}.pl4[data-v-4b72c5f4]{padding-left:%?4?%}.px4[data-v-4b72c5f4]{padding-left:%?4?%;padding-right:%?4?%}.py4[data-v-4b72c5f4]{padding-top:%?4?%;padding-bottom:%?4?%}.pa4[data-v-4b72c5f4]{padding:%?4?%}.pt8[data-v-4b72c5f4]{padding-top:%?8?%}.pr8[data-v-4b72c5f4]{padding-right:%?8?%}.pb8[data-v-4b72c5f4]{padding-bottom:%?8?%}.pl8[data-v-4b72c5f4]{padding-left:%?8?%}.px8[data-v-4b72c5f4]{padding-left:%?8?%;padding-right:%?8?%}.py8[data-v-4b72c5f4]{padding-top:%?8?%;padding-bottom:%?8?%}.pa8[data-v-4b72c5f4]{padding:%?8?%}.pt10[data-v-4b72c5f4]{padding-top:%?10?%}.pr10[data-v-4b72c5f4]{padding-right:%?10?%}.pb10[data-v-4b72c5f4]{padding-bottom:%?10?%}.pl10[data-v-4b72c5f4]{padding-left:%?10?%}.px10[data-v-4b72c5f4]{padding-left:%?10?%;padding-right:%?10?%}.py10[data-v-4b72c5f4]{padding-top:%?10?%;padding-bottom:%?10?%}.pa10[data-v-4b72c5f4]{padding:%?10?%}.pt15[data-v-4b72c5f4]{padding-top:%?15?%}.pr15[data-v-4b72c5f4]{padding-right:%?15?%}.pb15[data-v-4b72c5f4]{padding-bottom:%?15?%}.pl15[data-v-4b72c5f4]{padding-left:%?15?%}.px15[data-v-4b72c5f4]{padding-left:%?15?%;padding-right:%?15?%}.py15[data-v-4b72c5f4]{padding-top:%?15?%;padding-bottom:%?15?%}.pa15[data-v-4b72c5f4]{padding:%?15?%}.pt20[data-v-4b72c5f4]{padding-top:%?20?%}.pr20[data-v-4b72c5f4]{padding-right:%?20?%}.pb20[data-v-4b72c5f4]{padding-bottom:%?20?%}.pl20[data-v-4b72c5f4]{padding-left:%?20?%}.px20[data-v-4b72c5f4]{padding-left:%?20?%;padding-right:%?20?%}.py20[data-v-4b72c5f4]{padding-top:%?20?%;padding-bottom:%?20?%}.pa20[data-v-4b72c5f4]{padding:%?20?%}.pt24[data-v-4b72c5f4]{padding-top:%?24?%}.pr24[data-v-4b72c5f4]{padding-right:%?24?%}.pb24[data-v-4b72c5f4]{padding-bottom:%?24?%}.pl24[data-v-4b72c5f4]{padding-left:%?24?%}.px24[data-v-4b72c5f4]{padding-left:%?24?%;padding-right:%?24?%}.py24[data-v-4b72c5f4]{padding-top:%?24?%;padding-bottom:%?24?%}.pa24[data-v-4b72c5f4]{padding:%?24?%}.pt30[data-v-4b72c5f4]{padding-top:%?30?%}.pr30[data-v-4b72c5f4]{padding-right:%?30?%}.pb30[data-v-4b72c5f4]{padding-bottom:%?30?%}.pl30[data-v-4b72c5f4]{padding-left:%?30?%}.px30[data-v-4b72c5f4]{padding-left:%?30?%;padding-right:%?30?%}.py30[data-v-4b72c5f4]{padding-top:%?30?%;padding-bottom:%?30?%}.pa30[data-v-4b72c5f4]{padding:%?30?%}\n/*按钮禁用*/.disabled[data-v-4b72c5f4]{outline:0 none;cursor:default!important;opacity:.4;filter:alpha(opacity=40);-ms-pointer-events:none;pointer-events:none}\n/**\n * \n * 自定义class工具\n * \n*/.pad[data-v-4b72c5f4]{padding:0 %?30?%}.page_box[data-v-4b72c5f4]{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;overflow-x:hidden;background:#f6f6f6}.scroll-box[data-v-4b72c5f4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;position:relative}.content_box[data-v-4b72c5f4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto}\n/*单行文本溢出省略号*/.one-t[data-v-4b72c5f4]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-transition:all linear .2s;transition:all linear .2s}\n/*多行文本溢出省略号*/.more-t[data-v-4b72c5f4]{overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-transition:all linear .2s;transition:all linear .2s}\n/* ==================\n          flex布局(colorui里面也有相关基础样式)\n ==================== */\n/* x水平排列*/.x-f[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x两端且水平居中*/.x-bc[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x平分且水平居中*/.x-ac[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x水平靠上对齐*/.x-start[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n/*x水平靠下对齐*/.x-end[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n/*上下左右居中*/.x-c[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*y竖直靠左*/.y-start[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n/*y竖直靠右*/.y-end[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n/*y竖直居中*/.y-f[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.y-b[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n/*y竖直两端居中*/.y-bc[data-v-4b72c5f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n/* ==================\n     flex布局  \n ==================== */\n/* ==================\n      渐变色 \n ==================== */\n/**\n* 溢出省略号\n* @param {Number} 行数\n*/\n/* shopro主题颜色 */\n/* 深黑 */#dark-theme[data-v-4b72c5f4]{background:#000}#dark-theme .bColor[data-v-4b72c5f4]{background:#333;color:#999}#dark-theme .borderColor[data-v-4b72c5f4]{border-color:#999}\n/* 粉红 */#red-theme[data-v-4b72c5f4]{background:#f9e5ee}#red-theme .bColor[data-v-4b72c5f4]{background:#f9e5ee;color:#8e5a54}#red-theme .borderColor[data-v-4b72c5f4]{border-color:#8e5a54}\n/* 橘黄 */#yellow-theme[data-v-4b72c5f4]{background:#f6e1c9}#yellow-theme .bColor[data-v-4b72c5f4]{background:#f6e1c9;color:#8c6031}#yellow-theme .borderColor[data-v-4b72c5f4]{border-color:#8c6031}.form-box[data-v-4b72c5f4]{background:#fff}.form-box .form-item[data-v-4b72c5f4]{height:%?96?%;border-bottom:%?1?% solid hsla(0,0%,87.5%,.9);padding:0 %?25?%;position:relative}.form-box .form-item .item-title[data-v-4b72c5f4]{color:#333;font-size:%?28?%;font-weight:600}.form-box .form-item .item-input[data-v-4b72c5f4]{font-size:%?28?%;color:#333;padding-left:%?20?%;width:%?300?%}.form-box .form-item .pl-input[data-v-4b72c5f4]{color:#999}.form-box .form-item .code-btn[data-v-4b72c5f4]{background:none;font-size:%?28?%;color:#a8700d;position:absolute;top:50%;padding:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:%?30?%}.notice[data-v-4b72c5f4]{color:#999;font-size:%?24?%;padding:0 %?25?%;height:%?90?%}.btn-box[data-v-4b72c5f4]{margin-top:%?60?%}.btn-box .confirem-btn[data-v-4b72c5f4]{width:%?710?%;height:%?80?%;background:-webkit-gradient(linear,left top,right top,from(#e9b461),to(#eecc89));background:-webkit-linear-gradient(left,#e9b461,#eecc89);background:linear-gradient(90deg,#e9b461,#eecc89);border:%?1?% solid #eee;-webkit-border-radius:%?40?%;border-radius:%?40?%;font-size:%?30?%;color:hsla(0,0%,100%,.9)}',""]),t.exports=a},c88e:function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5530")),d=e("2f62"),o={components:{},data:function(){return{code:{text:"获取验证码",status:!1,value:""},phone:""}},computed:{},onLoad:function(){var t=this.$Route.query.fromType;switch(t){case"bind":uni.setNavigationBarTitle({title:"绑定手机号"});break;default:uni.setNavigationBarTitle({title:"修改手机号"})}},methods:(0,n.default)((0,n.default)({},(0,d.mapActions)(["getUserInfo"])),{},{editChangemobile:function(){var t=this;t.$api("user.changemobile",{mobile:t.phone,captcha:t.code.value}).then((function(a){1===a.code&&(t.$tools.toast("修改手机号成功"),t.getUserInfo(),setTimeout((function(){t.$Router.back()}),500))}))},getCode:function(){var t=this;t.code.status=!0;var a=60;t.$api("sms.send",{mobile:t.phone,event:"changemobile"}).then((function(e){if(1===e.code){t.code.text=a+"秒",t.code.status=!0;var i=setInterval((function(){a>0?(t.code.text=a-1+"秒",a--):(clearInterval(i),t.code.text="获取验证码",t.code.status=!1)}),1e3)}else t.code.status=!1}))}})};a.default=o},d8dd:function(t,a,e){"use strict";e.r(a);var i=e("c88e"),n=e.n(i);for(var d in i)"default"!==d&&function(t){e.d(a,t,(function(){return i[t]}))}(d);a["default"]=n.a},f3a8:function(t,a,e){var i=e("ad16");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("2b40dcc2",i,!0,{sourceMap:!1,shadowMode:!1})}}]);