(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aedb34e"],{1893:function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("app-section-loader",{attrs:{status:s.loader}}),s.testimonials?e("slick",{attrs:{options:s.slickOptions}},[s._l(s.testimonials,(function(t){return[e("div",{key:t.id,staticClass:"session-slider"},[e("div",{staticClass:"slider-content"},[e("img",{staticClass:"rounded-circle img-responsive",attrs:{src:t.avatar,width:"170",height:"170"}}),e("div",{staticClass:"slider-meta mb-4"},[e("span",{staticClass:"d-block client-name fw-bold"},[e("i",[s._v(s._s(t.name))])]),e("span",{staticClass:"d-block client-digg"},[s._v(s._s(t.designation))])]),e("p",{staticClass:"px-4"},[s._v(s._s(t.body))])])])]}))],2):s._e()],1)},n=[];e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return n}))},2061:function(s,t,e){"use strict";e.r(t);var a=e("4fc0"),n=e.n(a);for(var i in a)"default"!==i&&function(s){e.d(t,s,(function(){return a[s]}))}(i);t["default"]=n.a},"365c":function(s,t,e){"use strict";var a=e("4ea4");e("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(e("bc3a")),i=n.default.create({baseURL:"https://reactify.theironnetwork.org/data/"});t.default=i},"44fe":function(s,t,e){"use strict";e.r(t);var a=e("9dd2"),n=e("d604");for(var i in n)"default"!==i&&function(s){e.d(t,s,(function(){return n[s]}))}(i);var r=e("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},"4fc0":function(s,t,e){"use strict";var a=e("4ea4");e("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(e("7ecd")),i=a(e("365c")),r={components:{Slick:n.default},mounted:function(){this.getTestimonials()},computed:{slickOptions:function(){return{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}}},data:function(){return{loader:!0,testimonials:null}},methods:{getTestimonials:function(){var s=this;i.default.get("testimonials.js").then((function(t){s.loader=!1,s.testimonials=t.data})).catch((function(s){console.log(s)}))}}};t.default=r},6301:function(s,t,e){"use strict";var a=e("4ea4");e("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(e("7d36")),i=a(e("e065")),r={components:{SessionSliderWidget:n.default},data:function(){return{valid:!1,newPassword:"",confirmPassword:"",passwordRules:[function(s){return!!s||"Password is required"}],appLogo:i.default.appLogo2}},methods:{submit:function(){console.log("Reset Password")}}};t.default=r},"7d36":function(s,t,e){"use strict";e.r(t);var a=e("1893"),n=e("2061");for(var i in n)"default"!==i&&function(s){e.d(t,s,(function(){return n[s]}))}(i);var r=e("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},"9dd2":function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"session-wrapper"},[e("div",{staticClass:"session-left"},[e("session-slider-widget")],1),e("div",{staticClass:"session-right text-center"},[e("div",{staticClass:"session-table-cell"},[e("div",{staticClass:"session-content"},[e("img",{staticClass:"img-responsive mb-4",attrs:{src:s.appLogo,width:"78",height:"78"}}),e("h2",{staticClass:"mb-4"},[s._v(s._s(s.$t("message.resetPassword")))]),e("p",{staticClass:"fs-14"},[s._v(s._s(s.$t("message.pleaseEnterYourPasswordToReset"))+".")]),e("v-form",{staticClass:"5",model:{value:s.valid,callback:function(t){s.valid=t},expression:"valid"}},[e("v-text-field",{attrs:{label:"New Password",type:"password",rules:s.passwordRules,required:""},model:{value:s.newPassword,callback:function(t){s.newPassword=t},expression:"newPassword"}}),e("v-text-field",{attrs:{label:"Confirm Password",type:"password",rules:s.passwordRules,required:""},model:{value:s.confirmPassword,callback:function(t){s.confirmPassword=t},expression:"confirmPassword"}}),e("v-btn",{attrs:{large:"",block:"",color:"primary"},on:{click:s.submit}},[s._v(s._s(s.$t("message.resetPassword")))])],1)],1)])])])},n=[];e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return n}))},d604:function(s,t,e){"use strict";e.r(t);var a=e("6301"),n=e.n(a);for(var i in a)"default"!==i&&function(s){e.d(t,s,(function(){return a[s]}))}(i);t["default"]=n.a}}]);