(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-after-sale-detail"],{"0f00":function(t,a,e){"use strict";e.r(a);var i=e("9371"),d=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=d.a},1729:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return d})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{},[t.type?t._e():e("v-uni-view",{staticClass:"goods-box x-start",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.jump("/pages/goods/detail/index",{id:t.detail.id})}}},[e("v-uni-image",{staticClass:"goods-img",attrs:{src:t.detail.image,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"y-start"},[e("v-uni-view",{staticClass:"goods-title more-t"},[t._v(t._s(t.detail.title))]),t._t("tipTag"),e("v-uni-view",{staticClass:"size-tip"},[t._v(t._s(t.detail.goods_sku_text?t.detail.goods_sku_text:""))]),t._t("goodsBottom",[e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.detail.price))])])],2)],1),"sku"===t.type?e("v-uni-view",{staticClass:"goods-box x-start",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.jump("/pages/goods/detail/index",{id:t.detail.id})}}},[e("v-uni-image",{staticClass:"goods-img",attrs:{src:t.sku.image?t.sku.image:t.detail.image,mode:""}}),e("v-uni-view",{staticClass:"y-start"},[e("v-uni-view",{staticClass:"goods-title more-t"},[t._v(t._s(t.detail.title))]),t._t("tipTag"),e("v-uni-view",{staticClass:"size-tip"},[t._v(t._s(t.sku.goods_sku_text?t.sku.goods_sku_text:""))]),t._t("goodsBottom",[e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.detail.price))])])],2)],1):t._e(),"favorite"===t.type?e("v-uni-view",{staticClass:"goods-box x-start",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.jump("/pages/goods/detail/index",{id:t.detail.goods.id})}}},[e("v-uni-image",{staticClass:"goods-img",attrs:{src:t.detail.goods.image,mode:""}}),e("v-uni-view",{staticClass:"y-start"},[e("v-uni-view",{staticClass:"goods-title more-t"},[t._v(t._s(t.detail.goods.title))]),t._t("tipTag"),e("v-uni-view",{staticClass:"sub-tip more-t"},[t._v(t._s(t.detail.goods.subtitle))]),t._t("goodsBottom",[e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.detail.goods.price))])])],2)],1):t._e(),"order"===t.type?e("v-uni-view",{staticClass:"goods-box x-start"},[t.detail.activity_type?e("v-uni-image",{staticClass:"order-goods__tag",attrs:{src:t.orderStatus[t.detail.activity_type],mode:""}}):t._e(),e("v-uni-image",{staticClass:"goods-img",attrs:{src:t.detail.goods_image||"",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"y-start order-right"},[e("v-uni-view",{staticClass:"goods-title more-t"},[t._v(t._s(t.detail.goods_title||""))]),e("v-uni-view",{staticClass:"order-tip one-t"},[e("v-uni-text",{staticClass:"order-num"},[t._v("数量:"+t._s(t.detail.goods_num||0)+";")]),t._v(t._s(t.detail.goods_sku_text?t.detail.goods_sku_text:""))],1),e("v-uni-view",{staticClass:"order-goods x-f "},[e("v-uni-text",{staticClass:"order-price"},[t._v("￥"+t._s(t.detail.goods_price||0))]),t.detail.status_name?e("v-uni-button",{staticClass:"cu-btn status-btn"},[t._v(t._s(t.detail.status_name))]):t._e()],1)],1)],1):t._e()],1)},n=[]},"1e12":function(t,a,e){"use strict";e.r(a);var i=e("1729"),d=e("c914");for(var n in d)"default"!==n&&function(t){e.d(a,t,(function(){return d[t]}))}(n);e("96b8");var o,f=e("f0c5"),c=Object(f["a"])(d["default"],i["b"],i["c"],!1,null,"0f2cf66f",null,!1,i["a"],o);a["default"]=c.exports},"32a5":function(t,a,e){var i=e("736d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var d=e("4f06").default;d("72941ac5",i,!0,{sourceMap:!1,shadowMode:!1})},3304:function(t,a,e){"use strict";var i=e("b06f"),d=e.n(i);d.a},"736d":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* ==================\n      uni-app的变量\n防止插件市场用到这些，就保留了\n ==================== */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* ==================\n       theme   \n ==================== */\n/*主题色*/\n/*文字色*/\n/*背景色*/\n/* ==================\n       自定义变量   \n ==================== */\n/*utils 工具*/\n/* 颜色 */.bg-red[data-v-0f2cf66f]{background-color:#f33!important}.bg-purple[data-v-0f2cf66f]{background-color:#ff33a9!important}.bg-orange[data-v-0f2cf66f]{background-color:#f83!important}.bg-blue[data-v-0f2cf66f]{background-color:#37f!important}.color-red[data-v-0f2cf66f]{color:#f33!important}.color-purple[data-v-0f2cf66f]{color:#ff33a9!important}.color-orange[data-v-0f2cf66f]{color:#f83!important}.color-blue[data-v-0f2cf66f]{color:#37f!important}.text-black[data-v-0f2cf66f]{color:#000}.text-dark[data-v-0f2cf66f]{color:#333}.text-deep[data-v-0f2cf66f]{color:#555}.text-weak[data-v-0f2cf66f]{color:#b3b3b3}.text-white[data-v-0f2cf66f]{color:#fff}\n/*字体*/.f10[data-v-0f2cf66f]{font-size:10px}.f12[data-v-0f2cf66f]{font-size:12px}.f14[data-v-0f2cf66f]{font-size:14px}.f15[data-v-0f2cf66f]{font-size:15px}.f17[data-v-0f2cf66f]{font-size:17px}.f20[data-v-0f2cf66f]{font-size:20px}.f24[data-v-0f2cf66f]{font-size:24px}\n/* 文字对齐*/.tl[data-v-0f2cf66f]{text-align:left}.tc[data-v-0f2cf66f]{text-align:center}.tr[data-v-0f2cf66f]{text-align:right}\n/*浮动与清除浮动*/.fl[data-v-0f2cf66f]{float:left}.fr[data-v-0f2cf66f]{float:right}\n.fix[data-v-0f2cf66f]{zoom:1}.fix[data-v-0f2cf66f]:after{display:table;content:"";clear:both}\n\n/*显示*/.dn[data-v-0f2cf66f]{display:none}.di[data-v-0f2cf66f]{display:inline}.db[data-v-0f2cf66f]{display:block}.dib[data-v-0f2cf66f]{display:inline-block}.dt[data-v-0f2cf66f]{display:table}\ndiv.dib[data-v-0f2cf66f]{display:inline;zoom:1}\n.vm[data-v-0f2cf66f]{vertical-align:middle}.vib[data-v-0f2cf66f]{display:inline-block;vertical-align:middle}\n/*定位*/.pr[data-v-0f2cf66f]{position:relative}.pa[data-v-0f2cf66f]{position:absolute}.pf[data-v-0f2cf66f]{position:fixed}\n/*盒子模型*/.mt2[data-v-0f2cf66f]{margin-top:%?2?%}.mr2[data-v-0f2cf66f]{margin-right:%?2?%}.mb2[data-v-0f2cf66f]{margin-bottom:%?2?%}.ml2[data-v-0f2cf66f]{margin-left:%?2?%}.mx2[data-v-0f2cf66f]{margin-left:%?2?%;margin-right:%?2?%}.my2[data-v-0f2cf66f]{margin-top:%?2?%;margin-bottom:%?2?%}.ma2[data-v-0f2cf66f]{margin:%?2?%}.mt4[data-v-0f2cf66f]{margin-top:%?4?%}.mr4[data-v-0f2cf66f]{margin-right:%?4?%}.mb4[data-v-0f2cf66f]{margin-bottom:%?4?%}.ml4[data-v-0f2cf66f]{margin-left:%?4?%}.mx4[data-v-0f2cf66f]{margin-left:%?4?%;margin-right:%?4?%}.my4[data-v-0f2cf66f]{margin-top:%?4?%;margin-bottom:%?4?%}.ma4[data-v-0f2cf66f]{margin:%?4?%}.mt8[data-v-0f2cf66f]{margin-top:%?8?%}.mr8[data-v-0f2cf66f]{margin-right:%?8?%}.mb8[data-v-0f2cf66f]{margin-bottom:%?8?%}.ml8[data-v-0f2cf66f]{margin-left:%?8?%}.mx8[data-v-0f2cf66f]{margin-left:%?8?%;margin-right:%?8?%}.my8[data-v-0f2cf66f]{margin-top:%?8?%;margin-bottom:%?8?%}.ma8[data-v-0f2cf66f]{margin:%?8?%}.mt10[data-v-0f2cf66f]{margin-top:%?10?%}.mr10[data-v-0f2cf66f]{margin-right:%?10?%}.mb10[data-v-0f2cf66f]{margin-bottom:%?10?%}.ml10[data-v-0f2cf66f]{margin-left:%?10?%}.mx10[data-v-0f2cf66f]{margin-left:%?10?%;margin-right:%?10?%}.my10[data-v-0f2cf66f]{margin-top:%?10?%;margin-bottom:%?10?%}.ma10[data-v-0f2cf66f]{margin:%?10?%}.mt15[data-v-0f2cf66f]{margin-top:%?15?%}.mr15[data-v-0f2cf66f]{margin-right:%?15?%}.mb15[data-v-0f2cf66f]{margin-bottom:%?15?%}.ml15[data-v-0f2cf66f]{margin-left:%?15?%}.mx15[data-v-0f2cf66f]{margin-left:%?15?%;margin-right:%?15?%}.my15[data-v-0f2cf66f]{margin-top:%?15?%;margin-bottom:%?15?%}.ma15[data-v-0f2cf66f]{margin:%?15?%}.mt20[data-v-0f2cf66f]{margin-top:%?20?%}.mr20[data-v-0f2cf66f]{margin-right:%?20?%}.mb20[data-v-0f2cf66f]{margin-bottom:%?20?%}.ml20[data-v-0f2cf66f]{margin-left:%?20?%}.mx20[data-v-0f2cf66f]{margin-left:%?20?%;margin-right:%?20?%}.my20[data-v-0f2cf66f]{margin-top:%?20?%;margin-bottom:%?20?%}.ma20[data-v-0f2cf66f]{margin:%?20?%}.mt24[data-v-0f2cf66f]{margin-top:%?24?%}.mr24[data-v-0f2cf66f]{margin-right:%?24?%}.mb24[data-v-0f2cf66f]{margin-bottom:%?24?%}.ml24[data-v-0f2cf66f]{margin-left:%?24?%}.mx24[data-v-0f2cf66f]{margin-left:%?24?%;margin-right:%?24?%}.my24[data-v-0f2cf66f]{margin-top:%?24?%;margin-bottom:%?24?%}.ma24[data-v-0f2cf66f]{margin:%?24?%}.mt30[data-v-0f2cf66f]{margin-top:%?30?%}.mr30[data-v-0f2cf66f]{margin-right:%?30?%}.mb30[data-v-0f2cf66f]{margin-bottom:%?30?%}.ml30[data-v-0f2cf66f]{margin-left:%?30?%}.mx30[data-v-0f2cf66f]{margin-left:%?30?%;margin-right:%?30?%}.my30[data-v-0f2cf66f]{margin-top:%?30?%;margin-bottom:%?30?%}.ma30[data-v-0f2cf66f]{margin:%?30?%}.pt2[data-v-0f2cf66f]{padding-top:%?2?%}.pr2[data-v-0f2cf66f]{padding-right:%?2?%}.pb2[data-v-0f2cf66f]{padding-bottom:%?2?%}.pl2[data-v-0f2cf66f]{padding-left:%?2?%}.px2[data-v-0f2cf66f]{padding-left:%?2?%;padding-right:%?2?%}.py2[data-v-0f2cf66f]{padding-top:%?2?%;padding-bottom:%?2?%}.pa2[data-v-0f2cf66f]{padding:%?2?%}.pt4[data-v-0f2cf66f]{padding-top:%?4?%}.pr4[data-v-0f2cf66f]{padding-right:%?4?%}.pb4[data-v-0f2cf66f]{padding-bottom:%?4?%}.pl4[data-v-0f2cf66f]{padding-left:%?4?%}.px4[data-v-0f2cf66f]{padding-left:%?4?%;padding-right:%?4?%}.py4[data-v-0f2cf66f]{padding-top:%?4?%;padding-bottom:%?4?%}.pa4[data-v-0f2cf66f]{padding:%?4?%}.pt8[data-v-0f2cf66f]{padding-top:%?8?%}.pr8[data-v-0f2cf66f]{padding-right:%?8?%}.pb8[data-v-0f2cf66f]{padding-bottom:%?8?%}.pl8[data-v-0f2cf66f]{padding-left:%?8?%}.px8[data-v-0f2cf66f]{padding-left:%?8?%;padding-right:%?8?%}.py8[data-v-0f2cf66f]{padding-top:%?8?%;padding-bottom:%?8?%}.pa8[data-v-0f2cf66f]{padding:%?8?%}.pt10[data-v-0f2cf66f]{padding-top:%?10?%}.pr10[data-v-0f2cf66f]{padding-right:%?10?%}.pb10[data-v-0f2cf66f]{padding-bottom:%?10?%}.pl10[data-v-0f2cf66f]{padding-left:%?10?%}.px10[data-v-0f2cf66f]{padding-left:%?10?%;padding-right:%?10?%}.py10[data-v-0f2cf66f]{padding-top:%?10?%;padding-bottom:%?10?%}.pa10[data-v-0f2cf66f]{padding:%?10?%}.pt15[data-v-0f2cf66f]{padding-top:%?15?%}.pr15[data-v-0f2cf66f]{padding-right:%?15?%}.pb15[data-v-0f2cf66f]{padding-bottom:%?15?%}.pl15[data-v-0f2cf66f]{padding-left:%?15?%}.px15[data-v-0f2cf66f]{padding-left:%?15?%;padding-right:%?15?%}.py15[data-v-0f2cf66f]{padding-top:%?15?%;padding-bottom:%?15?%}.pa15[data-v-0f2cf66f]{padding:%?15?%}.pt20[data-v-0f2cf66f]{padding-top:%?20?%}.pr20[data-v-0f2cf66f]{padding-right:%?20?%}.pb20[data-v-0f2cf66f]{padding-bottom:%?20?%}.pl20[data-v-0f2cf66f]{padding-left:%?20?%}.px20[data-v-0f2cf66f]{padding-left:%?20?%;padding-right:%?20?%}.py20[data-v-0f2cf66f]{padding-top:%?20?%;padding-bottom:%?20?%}.pa20[data-v-0f2cf66f]{padding:%?20?%}.pt24[data-v-0f2cf66f]{padding-top:%?24?%}.pr24[data-v-0f2cf66f]{padding-right:%?24?%}.pb24[data-v-0f2cf66f]{padding-bottom:%?24?%}.pl24[data-v-0f2cf66f]{padding-left:%?24?%}.px24[data-v-0f2cf66f]{padding-left:%?24?%;padding-right:%?24?%}.py24[data-v-0f2cf66f]{padding-top:%?24?%;padding-bottom:%?24?%}.pa24[data-v-0f2cf66f]{padding:%?24?%}.pt30[data-v-0f2cf66f]{padding-top:%?30?%}.pr30[data-v-0f2cf66f]{padding-right:%?30?%}.pb30[data-v-0f2cf66f]{padding-bottom:%?30?%}.pl30[data-v-0f2cf66f]{padding-left:%?30?%}.px30[data-v-0f2cf66f]{padding-left:%?30?%;padding-right:%?30?%}.py30[data-v-0f2cf66f]{padding-top:%?30?%;padding-bottom:%?30?%}.pa30[data-v-0f2cf66f]{padding:%?30?%}\n/*按钮禁用*/.disabled[data-v-0f2cf66f]{outline:0 none;cursor:default!important;opacity:.4;filter:alpha(opacity=40);-ms-pointer-events:none;pointer-events:none}\n/**\n * \n * 自定义class工具\n * \n*/.pad[data-v-0f2cf66f]{padding:0 %?30?%}.page_box[data-v-0f2cf66f]{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;overflow-x:hidden;background:#f6f6f6}.scroll-box[data-v-0f2cf66f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;position:relative}.content_box[data-v-0f2cf66f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto}\n/*单行文本溢出省略号*/.one-t[data-v-0f2cf66f]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-transition:all linear .2s;transition:all linear .2s}\n/*多行文本溢出省略号*/.more-t[data-v-0f2cf66f]{overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-transition:all linear .2s;transition:all linear .2s}\n/* ==================\n          flex布局(colorui里面也有相关基础样式)\n ==================== */\n/* x水平排列*/.x-f[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x两端且水平居中*/.x-bc[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x平分且水平居中*/.x-ac[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x水平靠上对齐*/.x-start[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n/*x水平靠下对齐*/.x-end[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n/*上下左右居中*/.x-c[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*y竖直靠左*/.y-start[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n/*y竖直靠右*/.y-end[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n/*y竖直居中*/.y-f[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.y-b[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n/*y竖直两端居中*/.y-bc[data-v-0f2cf66f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n/* ==================\n     flex布局  \n ==================== */\n/* ==================\n      渐变色 \n ==================== */\n/**\n* 溢出省略号\n* @param {Number} 行数\n*/\n/* shopro主题颜色 */\n/* 深黑 */#dark-theme[data-v-0f2cf66f]{background:#000}#dark-theme .bColor[data-v-0f2cf66f]{background:#333;color:#999}#dark-theme .borderColor[data-v-0f2cf66f]{border-color:#999}\n/* 粉红 */#red-theme[data-v-0f2cf66f]{background:#f9e5ee}#red-theme .bColor[data-v-0f2cf66f]{background:#f9e5ee;color:#8e5a54}#red-theme .borderColor[data-v-0f2cf66f]{border-color:#8e5a54}\n/* 橘黄 */#yellow-theme[data-v-0f2cf66f]{background:#f6e1c9}#yellow-theme .bColor[data-v-0f2cf66f]{background:#f6e1c9;color:#8c6031}#yellow-theme .borderColor[data-v-0f2cf66f]{border-color:#8c6031}.goods-box[data-v-0f2cf66f]{position:relative}.goods-box .goods-img[data-v-0f2cf66f]{height:%?180?%;width:%?180?%;background-color:#ccc;margin-right:%?25?%}.goods-box .order-goods__tag[data-v-0f2cf66f]{position:absolute;top:0;left:0;z-index:3;width:%?60?%;height:%?30?%}.goods-box .goods-title[data-v-0f2cf66f]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#333;width:%?450?%;line-height:%?40?%;margin-bottom:%?10?%}.goods-box .size-tip[data-v-0f2cf66f]{line-height:%?40?%;font-size:%?24?%;color:#666}.goods-box .sub-tip[data-v-0f2cf66f]{width:%?480?%;line-height:%?40?%;font-size:%?24?%;color:#a8700d;margin:%?10?% 0}.goods-box .price[data-v-0f2cf66f]{color:#e1212b}.goods-box .order-right[data-v-0f2cf66f]{height:%?180?%}.goods-box .order-tip[data-v-0f2cf66f]{font-size:%?24?%;font-family:PingFang SC;font-weight:400;color:#999;width:%?450?%;margin-bottom:%?20?%}.goods-box .order-tip .order-num[data-v-0f2cf66f]{margin-right:%?10?%}.goods-box .order-goods[data-v-0f2cf66f]{width:%?480?%}.goods-box .order-goods .status-btn[data-v-0f2cf66f]{background:none;height:%?32?%;border:%?1?% solid #cfa972;-webkit-border-radius:%?15?%;border-radius:%?15?%;font-size:%?20?%;font-family:PingFang SC;font-weight:400;color:#a8700d;padding:0 %?10?%;margin-left:%?20?%;background:rgba(233,183,102,.16)}.goods-box .order-goods .order-price[data-v-0f2cf66f]{font-size:%?26?%;font-family:PingFang SC;font-weight:600;color:#333}',""]),t.exports=a},"7a0d":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"shoproMiniCard",components:{},data:function(){return{routerTo:this.$Router,orderStatus:{seckill:"/static/imgs/seckill_tag.png",groupon:"/static/imgs/groupon_tag.png"}}},props:{detail:{},sku:{},type:""},computed:{},created:function(){},methods:{jump:function(t,a){this.$Router.push({path:t,query:a})}}};a.default=i},9371:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={components:{},data:function(){return{addons:uni.getStorageSync("addons"),aftersaleDetail:{},aftersaleLog:[]}},computed:{},onLoad:function(){this.getAftersaleDetail()},methods:{jump:function(t,a){this.$Router.push({path:t,query:a})},onService:function(){this.$Router.push("/pages/public/kefu/index")},onCopy:function(t){var a=this;uni.setClipboardData({data:t,success:function(t){a.$tools.toast("已复制到剪切板")},fail:function(t){},complete:function(t){}})},getAftersaleDetail:function(){var t=this;t.$api("order.aftersaleDetail",{id:t.$Route.query.aftersaleId}).then((function(a){if(1===a.code){t.aftersaleDetail=a.data,t.aftersaleLog=a.data.log;var e=new Date(1e3*a.data.createtime),i=new Date(1e3*a.data.updatetime);t.aftersaleDetail.createtime=t.$tools.dateFormat("YYYY-mm-dd HH:MM",e),t.aftersaleDetail.updatetime=t.$tools.dateFormat("YYYY-mm-dd HH:MM",i)}}))},onCancel:function(t){var a=this;a.$api("order.cancelAftersaleOrder",{id:t}).then((function(t){1===t.code&&a.$Router.back()}))},onDelete:function(t){var a=this;uni.showModal({title:"删除订单",content:"确定要删除这个订单么？",cancelText:"取消",confirmText:"删除",success:function(e){e.confirm&&a.$api("order.deleteAftersaleOrder",{id:t}).then((function(t){1===t.code&&a.$Router.back()}))}})}}};a.default=i},"96b8":function(t,a,e){"use strict";var i=e("32a5"),d=e.n(i);d.a},a493:function(t,a,e){"use strict";e.r(a);var i=e("a97d"),d=e("0f00");for(var n in d)"default"!==n&&function(t){e.d(a,t,(function(){return d[t]}))}(n);e("3304");var o,f=e("f0c5"),c=Object(f["a"])(d["default"],i["b"],i["c"],!1,null,"4b86dc72",null,!1,i["a"],o);a["default"]=c.exports},a97d:function(t,a,e){"use strict";e.d(a,"b",(function(){return d})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var i={shoproMiniCard:e("1e12").default},d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"page_box"},[e("v-uni-view",{staticClass:"content_box"},[e("v-uni-view",{staticClass:"bg-gradual-green steps-box"},[e("v-uni-view",{staticClass:"cu-steps"},[e("v-uni-view",{staticClass:"cu-item",class:t.aftersaleDetail.aftersale_status>0||0==t.aftersaleDetail.aftersale_status?"text-white":"text-after"},[e("v-uni-text",{staticClass:"cuIcon-roundcheckfill"}),t._v("提交申请")],1),e("v-uni-view",{staticClass:"cu-item",class:t.aftersaleDetail.aftersale_status>0||1==t.aftersaleDetail.aftersale_status?"text-white":"text-after"},[e("v-uni-text",{staticClass:"cuIcon-roundcheckfill"}),t._v("进行中")],1),t.aftersaleDetail.aftersale_status>=0?e("v-uni-view",{staticClass:"cu-item",class:2==t.aftersaleDetail.aftersale_status?"text-white":"text-after"},[e("v-uni-text",{staticClass:"cuIcon-roundcheckfill"}),t._v("完成")],1):t._e(),-2==t.aftersaleDetail.aftersale_status?e("v-uni-view",{staticClass:"cu-item",class:-2==t.aftersaleDetail.aftersale_status?"text-white":"text-after"},[e("v-uni-text",{staticClass:"cuIcon-roundclosefill"}),t._v("取消")],1):t._e(),-1==t.aftersaleDetail.aftersale_status?e("v-uni-view",{staticClass:"cu-item",class:-1==t.aftersaleDetail.aftersale_status?"text-white":"text-after"},[e("v-uni-text",{staticClass:"cuIcon-roundclosefill"}),t._v("驳回")],1):t._e()],1)],1),e("v-uni-view",{staticClass:"status-box x-bc",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.jump("/pages/order/after-sale/log",{aftersaleId:t.aftersaleDetail.id})}}},[e("v-uni-view",{staticClass:"y-start"},[e("v-uni-view",{staticClass:"status-text"},[t._v(t._s(t.aftersaleDetail.aftersale_status_desc))]),e("v-uni-view",{staticClass:"status-time"},[t._v(t._s(t.aftersaleDetail.updatetime))])],1),e("v-uni-text",{staticClass:"cuIcon-right"})],1),e("v-uni-view",{staticClass:"aftersale-money x-bc"},[e("v-uni-view",{staticClass:"aftersale-money--title"},[t._v("退款总额")]),Number(t.aftersaleDetail.refund_fee)?e("v-uni-view",{staticClass:"aftersale-money--num"},[t._v("￥"+t._s(t.aftersaleDetail.refund_fee))]):e("v-uni-view",{staticClass:"aftersale-money--num"},[t._v("未退款")])],1),e("v-uni-view",{staticClass:"order-shop"},[e("shopro-mini-card",{attrs:{type:"order",detail:t.aftersaleDetail}})],1),e("v-uni-view",{staticClass:"aftersale-content"},[e("v-uni-view",{staticClass:"aftersale-item x-f"},[e("v-uni-view",{staticClass:"item-title"},[t._v("服务单号：")]),e("v-uni-view",{staticClass:"item-content"},[t._v(t._s(t.aftersaleDetail.aftersale_sn))]),e("v-uni-button",{staticClass:"cu-btn copy-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onCopy(t.aftersaleDetail.aftersale_sn)}}},[t._v("复制")])],1),e("v-uni-view",{staticClass:"aftersale-item x-f"},[e("v-uni-view",{staticClass:"item-title"},[t._v("申请时间：")]),e("v-uni-view",{staticClass:"item-content"},[t._v(t._s(t.aftersaleDetail.createtime))])],1),e("v-uni-view",{staticClass:"aftersale-item x-f"},[e("v-uni-view",{staticClass:"item-title"},[t._v("售后类型：")]),e("v-uni-view",{staticClass:"item-content"},[t._v(t._s(t.aftersaleDetail.type_text))])],1),t.aftersaleLog&&t.aftersaleLog.length?e("v-uni-view",{staticClass:"aftersale-item x-f"},[e("v-uni-view",{staticClass:"item-title"},[t._v("申请原因：")]),e("v-uni-view",{staticClass:"item-content"},[t._v(t._s(t.aftersaleLog[t.aftersaleLog.length-1].reason))])],1):t._e(),t.aftersaleLog&&t.aftersaleLog.length?e("v-uni-view",{staticClass:"aftersale-item x-f"},[e("v-uni-view",{staticClass:"item-title"},[t._v("相关描述：")]),e("v-uni-view",{staticClass:"item-content"},[t._v(t._s(t.aftersaleLog[t.aftersaleLog.length-1].content))])],1):t._e()],1)],1),e("v-uni-view",{staticClass:"foot_box"},[t._l(t.aftersaleDetail.btns,(function(a){return["cancel"===a?e("v-uni-button",{key:a+"_0",staticClass:"cu-btn btn",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.onCancel(t.aftersaleDetail.id)}}},[t._v("取消")]):t._e(),"delete"===a?e("v-uni-button",{key:a+"_1",staticClass:"cu-btn btn",staticStyle:{background:"#FFEEEE",color:"#E50808"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.onDelete(t.aftersaleDetail.id)}}},[t._v("删除")]):t._e()]})),t.addons.includes("kefu")?e("v-uni-button",{staticClass:"cu-btn contcat-btn btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onService.apply(void 0,arguments)}}},[t._v("联系客服")]):t._e()],2)],1)},n=[]},b06f:function(t,a,e){var i=e("ef56");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var d=e("4f06").default;d("10dddc83",i,!0,{sourceMap:!1,shadowMode:!1})},c914:function(t,a,e){"use strict";e.r(a);var i=e("7a0d"),d=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=d.a},ef56:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* ==================\n      uni-app的变量\n防止插件市场用到这些，就保留了\n ==================== */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* ==================\n       theme   \n ==================== */\n/*主题色*/\n/*文字色*/\n/*背景色*/\n/* ==================\n       自定义变量   \n ==================== */\n/*utils 工具*/\n/* 颜色 */.bg-red[data-v-4b86dc72]{background-color:#f33!important}.bg-purple[data-v-4b86dc72]{background-color:#ff33a9!important}.bg-orange[data-v-4b86dc72]{background-color:#f83!important}.bg-blue[data-v-4b86dc72]{background-color:#37f!important}.color-red[data-v-4b86dc72]{color:#f33!important}.color-purple[data-v-4b86dc72]{color:#ff33a9!important}.color-orange[data-v-4b86dc72]{color:#f83!important}.color-blue[data-v-4b86dc72]{color:#37f!important}.text-black[data-v-4b86dc72]{color:#000}.text-dark[data-v-4b86dc72]{color:#333}.text-deep[data-v-4b86dc72]{color:#555}.text-weak[data-v-4b86dc72]{color:#b3b3b3}.text-white[data-v-4b86dc72]{color:#fff}\n/*字体*/.f10[data-v-4b86dc72]{font-size:10px}.f12[data-v-4b86dc72]{font-size:12px}.f14[data-v-4b86dc72]{font-size:14px}.f15[data-v-4b86dc72]{font-size:15px}.f17[data-v-4b86dc72]{font-size:17px}.f20[data-v-4b86dc72]{font-size:20px}.f24[data-v-4b86dc72]{font-size:24px}\n/* 文字对齐*/.tl[data-v-4b86dc72]{text-align:left}.tc[data-v-4b86dc72]{text-align:center}.tr[data-v-4b86dc72]{text-align:right}\n/*浮动与清除浮动*/.fl[data-v-4b86dc72]{float:left}.fr[data-v-4b86dc72]{float:right}\n.fix[data-v-4b86dc72]{zoom:1}.fix[data-v-4b86dc72]:after{display:table;content:"";clear:both}\n\n/*显示*/.dn[data-v-4b86dc72]{display:none}.di[data-v-4b86dc72]{display:inline}.db[data-v-4b86dc72]{display:block}.dib[data-v-4b86dc72]{display:inline-block}.dt[data-v-4b86dc72]{display:table}\ndiv.dib[data-v-4b86dc72]{display:inline;zoom:1}\n.vm[data-v-4b86dc72]{vertical-align:middle}.vib[data-v-4b86dc72]{display:inline-block;vertical-align:middle}\n/*定位*/.pr[data-v-4b86dc72]{position:relative}.pa[data-v-4b86dc72]{position:absolute}.pf[data-v-4b86dc72]{position:fixed}\n/*盒子模型*/.mt2[data-v-4b86dc72]{margin-top:%?2?%}.mr2[data-v-4b86dc72]{margin-right:%?2?%}.mb2[data-v-4b86dc72]{margin-bottom:%?2?%}.ml2[data-v-4b86dc72]{margin-left:%?2?%}.mx2[data-v-4b86dc72]{margin-left:%?2?%;margin-right:%?2?%}.my2[data-v-4b86dc72]{margin-top:%?2?%;margin-bottom:%?2?%}.ma2[data-v-4b86dc72]{margin:%?2?%}.mt4[data-v-4b86dc72]{margin-top:%?4?%}.mr4[data-v-4b86dc72]{margin-right:%?4?%}.mb4[data-v-4b86dc72]{margin-bottom:%?4?%}.ml4[data-v-4b86dc72]{margin-left:%?4?%}.mx4[data-v-4b86dc72]{margin-left:%?4?%;margin-right:%?4?%}.my4[data-v-4b86dc72]{margin-top:%?4?%;margin-bottom:%?4?%}.ma4[data-v-4b86dc72]{margin:%?4?%}.mt8[data-v-4b86dc72]{margin-top:%?8?%}.mr8[data-v-4b86dc72]{margin-right:%?8?%}.mb8[data-v-4b86dc72]{margin-bottom:%?8?%}.ml8[data-v-4b86dc72]{margin-left:%?8?%}.mx8[data-v-4b86dc72]{margin-left:%?8?%;margin-right:%?8?%}.my8[data-v-4b86dc72]{margin-top:%?8?%;margin-bottom:%?8?%}.ma8[data-v-4b86dc72]{margin:%?8?%}.mt10[data-v-4b86dc72]{margin-top:%?10?%}.mr10[data-v-4b86dc72]{margin-right:%?10?%}.mb10[data-v-4b86dc72]{margin-bottom:%?10?%}.ml10[data-v-4b86dc72]{margin-left:%?10?%}.mx10[data-v-4b86dc72]{margin-left:%?10?%;margin-right:%?10?%}.my10[data-v-4b86dc72]{margin-top:%?10?%;margin-bottom:%?10?%}.ma10[data-v-4b86dc72]{margin:%?10?%}.mt15[data-v-4b86dc72]{margin-top:%?15?%}.mr15[data-v-4b86dc72]{margin-right:%?15?%}.mb15[data-v-4b86dc72]{margin-bottom:%?15?%}.ml15[data-v-4b86dc72]{margin-left:%?15?%}.mx15[data-v-4b86dc72]{margin-left:%?15?%;margin-right:%?15?%}.my15[data-v-4b86dc72]{margin-top:%?15?%;margin-bottom:%?15?%}.ma15[data-v-4b86dc72]{margin:%?15?%}.mt20[data-v-4b86dc72]{margin-top:%?20?%}.mr20[data-v-4b86dc72]{margin-right:%?20?%}.mb20[data-v-4b86dc72]{margin-bottom:%?20?%}.ml20[data-v-4b86dc72]{margin-left:%?20?%}.mx20[data-v-4b86dc72]{margin-left:%?20?%;margin-right:%?20?%}.my20[data-v-4b86dc72]{margin-top:%?20?%;margin-bottom:%?20?%}.ma20[data-v-4b86dc72]{margin:%?20?%}.mt24[data-v-4b86dc72]{margin-top:%?24?%}.mr24[data-v-4b86dc72]{margin-right:%?24?%}.mb24[data-v-4b86dc72]{margin-bottom:%?24?%}.ml24[data-v-4b86dc72]{margin-left:%?24?%}.mx24[data-v-4b86dc72]{margin-left:%?24?%;margin-right:%?24?%}.my24[data-v-4b86dc72]{margin-top:%?24?%;margin-bottom:%?24?%}.ma24[data-v-4b86dc72]{margin:%?24?%}.mt30[data-v-4b86dc72]{margin-top:%?30?%}.mr30[data-v-4b86dc72]{margin-right:%?30?%}.mb30[data-v-4b86dc72]{margin-bottom:%?30?%}.ml30[data-v-4b86dc72]{margin-left:%?30?%}.mx30[data-v-4b86dc72]{margin-left:%?30?%;margin-right:%?30?%}.my30[data-v-4b86dc72]{margin-top:%?30?%;margin-bottom:%?30?%}.ma30[data-v-4b86dc72]{margin:%?30?%}.pt2[data-v-4b86dc72]{padding-top:%?2?%}.pr2[data-v-4b86dc72]{padding-right:%?2?%}.pb2[data-v-4b86dc72]{padding-bottom:%?2?%}.pl2[data-v-4b86dc72]{padding-left:%?2?%}.px2[data-v-4b86dc72]{padding-left:%?2?%;padding-right:%?2?%}.py2[data-v-4b86dc72]{padding-top:%?2?%;padding-bottom:%?2?%}.pa2[data-v-4b86dc72]{padding:%?2?%}.pt4[data-v-4b86dc72]{padding-top:%?4?%}.pr4[data-v-4b86dc72]{padding-right:%?4?%}.pb4[data-v-4b86dc72]{padding-bottom:%?4?%}.pl4[data-v-4b86dc72]{padding-left:%?4?%}.px4[data-v-4b86dc72]{padding-left:%?4?%;padding-right:%?4?%}.py4[data-v-4b86dc72]{padding-top:%?4?%;padding-bottom:%?4?%}.pa4[data-v-4b86dc72]{padding:%?4?%}.pt8[data-v-4b86dc72]{padding-top:%?8?%}.pr8[data-v-4b86dc72]{padding-right:%?8?%}.pb8[data-v-4b86dc72]{padding-bottom:%?8?%}.pl8[data-v-4b86dc72]{padding-left:%?8?%}.px8[data-v-4b86dc72]{padding-left:%?8?%;padding-right:%?8?%}.py8[data-v-4b86dc72]{padding-top:%?8?%;padding-bottom:%?8?%}.pa8[data-v-4b86dc72]{padding:%?8?%}.pt10[data-v-4b86dc72]{padding-top:%?10?%}.pr10[data-v-4b86dc72]{padding-right:%?10?%}.pb10[data-v-4b86dc72]{padding-bottom:%?10?%}.pl10[data-v-4b86dc72]{padding-left:%?10?%}.px10[data-v-4b86dc72]{padding-left:%?10?%;padding-right:%?10?%}.py10[data-v-4b86dc72]{padding-top:%?10?%;padding-bottom:%?10?%}.pa10[data-v-4b86dc72]{padding:%?10?%}.pt15[data-v-4b86dc72]{padding-top:%?15?%}.pr15[data-v-4b86dc72]{padding-right:%?15?%}.pb15[data-v-4b86dc72]{padding-bottom:%?15?%}.pl15[data-v-4b86dc72]{padding-left:%?15?%}.px15[data-v-4b86dc72]{padding-left:%?15?%;padding-right:%?15?%}.py15[data-v-4b86dc72]{padding-top:%?15?%;padding-bottom:%?15?%}.pa15[data-v-4b86dc72]{padding:%?15?%}.pt20[data-v-4b86dc72]{padding-top:%?20?%}.pr20[data-v-4b86dc72]{padding-right:%?20?%}.pb20[data-v-4b86dc72]{padding-bottom:%?20?%}.pl20[data-v-4b86dc72]{padding-left:%?20?%}.px20[data-v-4b86dc72]{padding-left:%?20?%;padding-right:%?20?%}.py20[data-v-4b86dc72]{padding-top:%?20?%;padding-bottom:%?20?%}.pa20[data-v-4b86dc72]{padding:%?20?%}.pt24[data-v-4b86dc72]{padding-top:%?24?%}.pr24[data-v-4b86dc72]{padding-right:%?24?%}.pb24[data-v-4b86dc72]{padding-bottom:%?24?%}.pl24[data-v-4b86dc72]{padding-left:%?24?%}.px24[data-v-4b86dc72]{padding-left:%?24?%;padding-right:%?24?%}.py24[data-v-4b86dc72]{padding-top:%?24?%;padding-bottom:%?24?%}.pa24[data-v-4b86dc72]{padding:%?24?%}.pt30[data-v-4b86dc72]{padding-top:%?30?%}.pr30[data-v-4b86dc72]{padding-right:%?30?%}.pb30[data-v-4b86dc72]{padding-bottom:%?30?%}.pl30[data-v-4b86dc72]{padding-left:%?30?%}.px30[data-v-4b86dc72]{padding-left:%?30?%;padding-right:%?30?%}.py30[data-v-4b86dc72]{padding-top:%?30?%;padding-bottom:%?30?%}.pa30[data-v-4b86dc72]{padding:%?30?%}\n/*按钮禁用*/.disabled[data-v-4b86dc72]{outline:0 none;cursor:default!important;opacity:.4;filter:alpha(opacity=40);-ms-pointer-events:none;pointer-events:none}\n/**\n * \n * 自定义class工具\n * \n*/.pad[data-v-4b86dc72]{padding:0 %?30?%}.page_box[data-v-4b86dc72]{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;overflow-x:hidden;background:#f6f6f6}.scroll-box[data-v-4b86dc72]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;position:relative}.content_box[data-v-4b86dc72]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto}\n/*单行文本溢出省略号*/.one-t[data-v-4b86dc72]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-webkit-transition:all linear .2s;transition:all linear .2s}\n/*多行文本溢出省略号*/.more-t[data-v-4b86dc72]{overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-transition:all linear .2s;transition:all linear .2s}\n/* ==================\n          flex布局(colorui里面也有相关基础样式)\n ==================== */\n/* x水平排列*/.x-f[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x两端且水平居中*/.x-bc[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x平分且水平居中*/.x-ac[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*x水平靠上对齐*/.x-start[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n/*x水平靠下对齐*/.x-end[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n/*上下左右居中*/.x-c[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n/*y竖直靠左*/.y-start[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}\n/*y竖直靠右*/.y-end[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n/*y竖直居中*/.y-f[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.y-b[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n/*y竖直两端居中*/.y-bc[data-v-4b86dc72]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n/* ==================\n     flex布局  \n ==================== */\n/* ==================\n      渐变色 \n ==================== */\n/**\n* 溢出省略号\n* @param {Number} 行数\n*/\n/* shopro主题颜色 */\n/* 深黑 */#dark-theme[data-v-4b86dc72]{background:#000}#dark-theme .bColor[data-v-4b86dc72]{background:#333;color:#999}#dark-theme .borderColor[data-v-4b86dc72]{border-color:#999}\n/* 粉红 */#red-theme[data-v-4b86dc72]{background:#f9e5ee}#red-theme .bColor[data-v-4b86dc72]{background:#f9e5ee;color:#8e5a54}#red-theme .borderColor[data-v-4b86dc72]{border-color:#8e5a54}\n/* 橘黄 */#yellow-theme[data-v-4b86dc72]{background:#f6e1c9}#yellow-theme .bColor[data-v-4b86dc72]{background:#f6e1c9;color:#8c6031}#yellow-theme .borderColor[data-v-4b86dc72]{border-color:#8c6031}.steps-box[data-v-4b86dc72]{height:%?190?%;padding:%?20?% 0}.steps-box .text-after[data-v-4b86dc72]{color:hsla(0,0%,100%,.5)}.status-box[data-v-4b86dc72]{background-color:#fff;-webkit-border-radius:%?20?% %?20?% 0 0;border-radius:%?20?% %?20?% 0 0;padding:%?20?%;margin-top:%?-20?%}.status-box .status-text[data-v-4b86dc72]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#333;margin-bottom:%?20?%}.status-box .status-time[data-v-4b86dc72]{font-size:%?24?%;font-family:PingFang SC;font-weight:400;color:#999}.status-box .cuIcon-right[data-v-4b86dc72]{color:#999;font-size:%?30?%}.aftersale-money[data-v-4b86dc72]{background-color:#fff;height:%?98?%;padding:0 %?20?%;margin:%?20?% 0}.aftersale-money .aftersale-money--title[data-v-4b86dc72]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#333}.aftersale-money .aftersale-money--num[data-v-4b86dc72]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#e1212b}.order-shop[data-v-4b86dc72]{padding:%?20?%;background-color:#fff;margin-bottom:%?20?%}.aftersale-content[data-v-4b86dc72]{background-color:#fff;padding:%?20?%}.aftersale-content .aftersale-item[data-v-4b86dc72]{height:%?60?%}.aftersale-content .aftersale-item .copy-btn[data-v-4b86dc72]{background:none;color:#b38436;font-size:%?26?%}.aftersale-content .aftersale-item .item-tilte[data-v-4b86dc72]{color:#333;font-size:%?28?%}.aftersale-content .aftersale-item .item-content[data-v-4b86dc72]{color:#999;font-size:%?28?%}.foot_box[data-v-4b86dc72]{height:%?100?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.foot_box .btn[data-v-4b86dc72]{width:%?160?%;height:%?60?%;background:#eee;-webkit-border-radius:%?30?%;border-radius:%?30?%;padding:0;margin-right:%?20?%;font-size:%?26?%;font-family:PingFang SC;font-weight:400;color:#333}',""]),t.exports=a}}]);