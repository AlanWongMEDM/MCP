(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-Notifications"],{1276:function(t,a,e){"use strict";var i=e("2ba4"),o=e("c65b"),r=e("e330"),s=e("d784"),n=e("44e7"),l=e("825a"),c=e("1d80"),d=e("4840"),v=e("8aa5"),u=e("50c4"),h=e("577e"),f=e("dc4a"),m=e("4dae"),g=e("14c3"),p=e("9263"),b=e("9f7f"),w=e("d039"),k=b.UNSUPPORTED_Y,x=4294967295,y=Math.min,_=[].push,C=r(/./.exec),T=r(_),V=r("".slice),I=!w((function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));s("split",(function(t,a,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=h(c(this)),s=void 0===e?x:e>>>0;if(0===s)return[];if(void 0===t)return[r];if(!n(t))return o(a,r,t,s);var l,d,v,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,b=new RegExp(t.source,f+"g");while(l=o(p,b,r)){if(d=b.lastIndex,d>g&&(T(u,V(r,g,l.index)),l.length>1&&l.index<r.length&&i(_,u,m(l,1)),v=l[0].length,g=d,u.length>=s))break;b.lastIndex===l.index&&b.lastIndex++}return g===r.length?!v&&C(b,"")||T(u,""):T(u,V(r,g)),u.length>s?m(u,0,s):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:o(a,this,t,e)}:a,[function(a,e){var i=c(this),s=void 0==a?void 0:f(a,t);return s?o(s,a,i,e):o(r,h(i),a,e)},function(t,i){var o=l(this),s=h(t),n=e(r,o,s,i,r!==a);if(n.done)return n.value;var c=d(o,RegExp),f=o.unicode,m=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(k?"g":"y"),p=new c(k?"^(?:"+o.source+")":o,m),b=void 0===i?x:i>>>0;if(0===b)return[];if(0===s.length)return null===g(p,s)?[s]:[];var w=0,_=0,C=[];while(_<s.length){p.lastIndex=k?0:_;var I,S=g(p,k?V(s,_):s);if(null===S||(I=y(u(p.lastIndex+(k?_:0)),s.length))===w)_=v(s,_,f);else{if(T(C,V(s,w,_)),C.length===b)return C;for(var A=1;A<=S.length-1;A++)if(T(C,S[A]),C.length===b)return C;_=w=I}}return T(C,V(s,w)),C}]}),!I,k)},fda7:function(t,a,e){"use strict";e.r(a);var i=function(){var t,a=this,e=a.$createElement,i=a._self._c||e;return i("v-container",{attrs:{id:"alerts",fluid:"",tag:"section"}},[i("view-intro",{attrs:{heading:"Notifications",link:"components/alerts"}}),i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("app-card",[i("v-card-text",[i("div",{staticClass:"text-h5 text--primary"},[a._v(" Notification Style ")]),i("material-alert",{attrs:{color:"info",dark:""}},[a._v(" This is a plain notification. ")]),i("material-alert",{attrs:{color:"info",dark:"",dismissible:""}},[a._v(" This is a notification with close button. ")]),i("material-alert",{attrs:{color:"info",dark:"",dismissible:"",icon:"mdi-bell"}},[a._v(" This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")]),i("material-alert",{attrs:{color:"primary",dark:"",dismissible:"",icon:"mdi-bell"}},[a._v(" You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ")])],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("app-card",[i("v-card-text",[i("div",{staticClass:"text-h5 text--primary"},[a._v(" Notification States ")]),a._l(a.colors,(function(t){return i("material-alert",{key:t,attrs:{color:t,dark:"",dismissible:""}},[i("span",{staticClass:"text-uppercase text-caption font-weight-medium",domProps:{textContent:a._s(t)}}),a._v(' — This is a regular alert made with the color of "'+a._s(t)+'" ')])})),i("material-alert",{attrs:{color:"secondary",dark:"",dismissible:""}},[i("span",{staticClass:"text-caption font-weight-medium"},[a._v("PRIMARY")]),a._v(' — This is a regular alert made with the color "secondary" ')]),i("material-alert",{attrs:{color:"pink darken-1",dark:"",dismissible:""}},[i("span",{staticClass:"text-caption font-weight-medium"},[a._v("PINK DARKEN-1")]),a._v(' — This is a regular alert made with the color "pink darken-1" ')])],2)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("app-card",[i("v-card-text",{staticClass:"text-center"},[i("div",{staticClass:"text-h5 text--primary"},[a._v(" Snackbar Locations ")]),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10",lg:"8"}},[i("v-row",a._l(a.directions,(function(t){return i("v-col",{key:t,attrs:{cols:"4"}},[i("v-btn",{staticClass:"v-btn--block",attrs:{color:"secondary",default:""},on:{click:function(e){a.randomColor(),a.direction=t,a.snackbar=!0}}},[a._v(" "+a._s(t)+" ")])],1)})),1)],1)],1),i("v-row",{staticClass:"mt-n12",attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10",lg:"8"}},[i("v-row",{staticClass:"mt-5"},[i("v-col",{attrs:{cols:"4"}},[i("v-btn",{attrs:{color:"secondary",default:"",rounded:""},on:{click:function(t){a.dialog=!0}}},[a._v(" Classic Dialog ")])],1),i("v-col",{attrs:{cols:"4"}},[i("v-btn",{attrs:{color:"info",default:"",rounded:""},on:{click:function(t){a.dialog2=!0}}},[a._v(" Notice Modal ")])],1),i("v-col",{attrs:{cols:"4"}},[i("v-btn",{attrs:{color:"pink darken-1",dark:"",default:"",rounded:""},on:{click:function(t){a.dialog3=!0}}},[a._v(" Small Alert Modal ")])],1)],1)],1)],1)],1)],1)],1)],1),i("material-snackbar",a._b({attrs:{type:a.color,timeout:"-1"},model:{value:a.snackbar,callback:function(t){a.snackbar=t},expression:"snackbar"}},"material-snackbar",(t={},t[a.parsedDirection[0]]=!0,t[a.parsedDirection[1]]=!0,t),!1),[a._v(" Welcome to "),i("span",{staticClass:"font-weight-bold"},[a._v(" MATERIAL DASHBOARD PRO ")]),a._v(" — a beautiful admin panel for every web developer. ")]),i("v-dialog",{attrs:{"max-width":"500"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[i("v-card",{staticClass:"text-center"},[i("v-card-title",[a._v(" Dialog Title "),i("v-spacer"),i("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){a.dialog=!1}}},[a._v(" mdi-close ")])],1),i("v-card-text",[a._v(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){a.dialog=!1}}},[a._v(" Close ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500"},model:{value:a.dialog2,callback:function(t){a.dialog2=t},expression:"dialog2"}},[i("v-card",[i("v-card-title",[a._v(" How do you become an affiliate? "),i("v-spacer"),i("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){a.dialog2=!1}}},[a._v(" mdi-close ")])],1),i("v-card-text",{staticClass:"text-body-1 text-center"},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"8"}},[i("div",[i("div",[i("strong",[a._v("1. Register")])]),i("div",{staticClass:"grey--text"},[a._v(" The first step is to create an account at Creative Tim. You can choose a social network or go for the classic version, whatever works best for you. ")])])]),i("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[i("v-sheet",[i("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-1.jpg",height:"100",width:"200"}})],1)],1),i("v-col",{attrs:{cols:"12",md:"8"}},[i("div",[i("div",[i("strong",[a._v("2. Apply")])]),i("div",{staticClass:"grey--text"},[a._v(" The first step is to create an account at "),i("a",{attrs:{href:"http://www.creative-tim.com/"}},[a._v("Creative Tim")]),a._v(". You can choose a social network or go for the classic version, whatever works best for you. ")])])]),i("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"4"}},[i("v-sheet",[i("v-img",{attrs:{src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-2.jpg",height:"100",width:"200"}})],1)],1),i("v-col",{attrs:{cols:"12"}},[a._v(" If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help! ")])],1),i("v-btn",{staticClass:"mt-6",attrs:{color:"info",depressed:"",default:"",rounded:""},on:{click:function(t){a.dialog2=!1}}},[a._v(" Sounds good ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"300"},model:{value:a.dialog3,callback:function(t){a.dialog3=t},expression:"dialog3"}},[i("v-card",[i("v-card-title",[a._v(" Are you sure? "),i("v-spacer"),i("v-icon",{attrs:{"aria-label":"Close"},on:{click:function(t){a.dialog3=!1}}},[a._v(" mdi-close ")])],1),i("v-card-text",{staticClass:"pb-6 pt-12 text-center"},[i("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(t){a.dialog3=!1}}},[a._v(" Nevermind ")]),i("v-btn",{attrs:{color:"success",text:""},on:{click:function(t){a.dialog3=!1}}},[a._v(" Yes ")])],1)],1)],1)],1)},o=[],r=(e("ac1f"),e("1276"),{name:"NotificationsView",data:function(){return{color:"info",colors:["info","success","warning","error"],dialog:!1,dialog2:!1,dialog3:!1,direction:"top center",directions:["top left","top center","top right","bottom left","bottom center","bottom right"],snackbar:!1}},computed:{parsedDirection:function(){return this.direction.split(" ")}},methods:{randomColor:function(){this.color=this.colors[Math.floor(Math.random()*this.colors.length)]}}}),s=r,n=e("2877"),l=e("6544"),c=e.n(l),d=e("8336"),v=e("b0af"),u=e("99d9"),h=e("62ad"),f=e("a523"),m=e("169a"),g=e("132d"),p=e("adda"),b=e("0fd9"),w=e("8dd9"),k=e("2fa4"),x=Object(n["a"])(s,i,o,!1,null,null,null);a["default"]=x.exports;c()(x,{VBtn:d["a"],VCard:v["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:u["c"],VCol:h["a"],VContainer:f["a"],VDialog:m["a"],VIcon:g["a"],VImg:p["a"],VRow:b["a"],VSheet:w["a"],VSpacer:k["a"]})}}]);
//# sourceMappingURL=views-Notifications.cfbb1242.js.map