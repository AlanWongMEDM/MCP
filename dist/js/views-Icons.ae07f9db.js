(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-Icons"],{"21be":function(t,e,i){"use strict";var o=i("2909"),a=(i("99af"),i("caad"),i("2532"),i("2b0e")),n=i("80d2");e["a"]=a["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(n["u"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(n["u"])(e)],a=[].concat(Object(o["a"])(document.getElementsByClassName("v-menu__content--active")),Object(o["a"])(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<a.length;r++)t.includes(a[r])||i.push(Object(n["u"])(a[r]));return Math.max.apply(Math,i)}}})},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var o=i("6b75");function a(t){if(Array.isArray(t))return Object(o["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=i("06c5");i("d9e2");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||n(t)||Object(r["a"])(t)||s()}},"4ad4":function(t,e,i){"use strict";var o=i("53ca"),a=(i("caad"),i("b64b"),i("d3b7"),i("b0c0"),i("16b7")),n=i("f2e7"),r=i("58df"),s=i("80d2"),c=i("d9bd"),d=Object(r["a"])(a["a"],n["a"]);e["a"]=d.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(o["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(s["t"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var o=i[e];this.getActivator().addEventListener(o,this.listeners[o])}}},genActivator:function(){var t=Object(s["s"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):this.openOnClick&&(e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive}),this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){var e;if(this.activatorElement)return this.activatorElement;var i=null;if(this.activator){var o=this.internalActivator?this.$el:document;i="string"===typeof this.activator?o.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var a=this.activatorNode[0].componentInstance;i=a&&a.$options.mixins&&a.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?a.getActivator():this.activatorNode[0].elm}else t&&(i=t.currentTarget||t.target);return this.activatorElement=(null==(e=i)?void 0:e.nodeType)===Node.ELEMENT_NODE?i:null,this.activatorElement},getContentSlot:function(){return Object(s["s"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var o=i[e];this.activatorElement.removeEventListener(o,this.listeners[o])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"75eb":function(t,e,i){"use strict";var o=i("ade3"),a=i("53ca"),n=(i("d3b7"),i("159b"),i("caad"),i("2532"),i("a630"),i("3ca3"),i("9d65")),r=i("80d2"),s=i("58df"),c=i("d9bd");function d(t){var e=Object(a["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function l(t){t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}e["a"]=Object(s["a"])(n["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:d},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed:function(){var t=this;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){var i=new MutationObserver((function(o){o.some((function(e){return Array.from(e.removedNodes).includes(t.$el)}))&&(i.disconnect(),l(e))}));i.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else l(e)}},methods:{getScopeIdAttrs:function(){var t=Object(r["p"])(this.$vnode,"context.$options._scopeId");return t&&Object(o["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},9734:function(t,e,i){},"9cc6":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"icons-view",fluid:"",tag:"section"}},[i("view-intro",{attrs:{heading:"Icons",link:"components/icons"}}),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("material-card",{attrs:{color:"success","full-header":""},scopedSlots:t._u([{key:"heading",fn:function(){return[i("div",{staticClass:"pa-6 white--text"},[i("div",{staticClass:"text-h4 font-weight-light"},[t._v(" Material Design Icons ")]),i("div",{staticClass:"text-subtitle-1"},[t._v(" See all available "),i("a",{staticClass:"white--text",attrs:{href:"https://github.com/Templarian/MaterialDesign",target:"_blank",rel:"noopener noreferrer"}},[t._v("Icons")])])])]},proxy:!0}])},[i("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.icons,(function(e){return i("v-col",{key:e,staticClass:"ma-2",attrs:{cols:"auto"}},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.attrs,n=o.on;return[i("v-icon",t._g(t._b({},"v-icon",a,!1),n),[t._v(" "+t._s(e)+" ")])]}}],null,!0)},[i("span",[t._v(t._s(e))])])],1)})),1)],1)],1),i("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[i("app-btn",{attrs:{href:"https://github.com/Templarian/MaterialDesign",large:"",rel:"noopener noreferrer",target:"_blank"}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-material-design ")]),i("span",[t._v("See all icons")])],1)],1)],1)],1)},a=[],n={name:"IconsView",data:function(){return{icons:["mdi-access-point","mdi-access-point-network","mdi-account","mdi-account-alert","mdi-account-box","mdi-account-box-multiple","mdi-account-box-outline","mdi-account-card-details","mdi-account-check","mdi-account-circle","mdi-account-convert","mdi-account-edit","mdi-account-group","mdi-account-heart","mdi-account-key","mdi-account-location","mdi-account-minus","mdi-account-multiple","mdi-account-multiple-check","mdi-account-multiple-minus","mdi-account-multiple-outline","mdi-account-multiple-plus","mdi-account-multiple-plus-outline","mdi-account-network","mdi-account-off","mdi-account-outline","mdi-account-plus","mdi-account-plus-outline","mdi-account-remove","mdi-account-search","mdi-account-search-outline","mdi-account-settings","mdi-account-settings-variant","mdi-account-star","mdi-account-switch","mdi-accusoft","mdi-adjust","mdi-adobe","mdi-air-conditioner","mdi-airballoon","mdi-airplane","mdi-airplane-landing","mdi-airplane-off","mdi-airplane-takeoff","mdi-airplay","mdi-airport","mdi-alarm","mdi-alarm-bell","mdi-alarm-check","mdi-alarm-light","mdi-alarm-multiple","mdi-alarm-off","mdi-alarm-plus","mdi-alarm-snooze","mdi-album","mdi-alert","mdi-alert-box","mdi-alert-circle","mdi-alert-circle-outline","mdi-alert-decagram","mdi-alert-octagon","mdi-alert-octagram","mdi-alert-outline","mdi-alien","mdi-all-inclusive","mdi-alpha","mdi-alphabetical","mdi-altimeter","mdi-amazon","mdi-amazon-alexa","mdi-amazon-drive","mdi-ambulance","mdi-amplifier","mdi-anchor","mdi-android","mdi-android-debug-bridge","mdi-android-head","mdi-android-studio","mdi-angle-acute","mdi-angle-obtuse","mdi-angle-right","mdi-angular","mdi-angularjs","mdi-animation","mdi-animation-play","mdi-anvil","mdi-apple","mdi-apple-finder","mdi-apple-icloud","mdi-apple-ios","mdi-apple-keyboard-caps","mdi-apple-keyboard-command","mdi-apple-keyboard-control","mdi-apple-keyboard-option","mdi-apple-keyboard-shift","mdi-apple-safari","mdi-application","mdi-approval","mdi-apps","mdi-arch","mdi-archive","mdi-arrange-bring-forward","mdi-arrange-bring-to-front","mdi-arrange-send-backward","mdi-arrange-send-to-back","mdi-arrow-all","mdi-arrow-bottom-left","mdi-arrow-bottom-left-bold-outline","mdi-arrow-bottom-left-thick","mdi-arrow-bottom-right","mdi-arrow-bottom-right-bold-outline","mdi-arrow-bottom-right-thick","mdi-arrow-collapse","mdi-arrow-collapse-all","mdi-arrow-collapse-down","mdi-arrow-collapse-horizontal","mdi-arrow-collapse-left","mdi-arrow-collapse-right","mdi-arrow-collapse-up","mdi-arrow-collapse-vertical","mdi-arrow-decision","mdi-arrow-decision-auto","mdi-arrow-decision-auto-outline","mdi-arrow-decision-outline","mdi-arrow-down","mdi-arrow-down-bold","mdi-arrow-down-bold-box","mdi-arrow-down-bold-box-outline","mdi-arrow-down-bold-circle","mdi-arrow-down-bold-circle-outline","mdi-arrow-down-bold-hexagon-outline","mdi-arrow-down-bold-outline","mdi-arrow-down-box","mdi-arrow-down-drop-circle","mdi-arrow-down-drop-circle-outline","mdi-arrow-down-thick","mdi-arrow-expand","mdi-arrow-expand-all","mdi-arrow-expand-down","mdi-arrow-expand-horizontal","mdi-arrow-expand-left","mdi-arrow-expand-right","mdi-arrow-expand-up","mdi-arrow-expand-vertical","mdi-arrow-left","mdi-arrow-left-bold","mdi-arrow-left-bold-box","mdi-arrow-left-bold-box-outline","mdi-arrow-left-bold-circle","mdi-arrow-left-bold-circle-outline","mdi-arrow-left-bold-hexagon-outline","mdi-arrow-left-bold-outline","mdi-arrow-left-box","mdi-arrow-left-drop-circle","mdi-arrow-left-drop-circle-outline","mdi-arrow-left-right-bold-outline","mdi-arrow-left-thick","mdi-arrow-right","mdi-arrow-right-bold","mdi-arrow-right-bold-box","mdi-arrow-right-bold-box-outline","mdi-arrow-right-bold-circle","mdi-arrow-right-bold-circle-outline","mdi-arrow-right-bold-hexagon-outline","mdi-arrow-right-bold-outline","mdi-arrow-right-box","mdi-arrow-right-drop-circle","mdi-arrow-right-drop-circle-outline","mdi-arrow-right-thick","mdi-arrow-split-horizontal","mdi-arrow-split-vertical","mdi-arrow-top-left","mdi-arrow-top-left-bold-outline","mdi-arrow-top-left-thick","mdi-arrow-top-right","mdi-arrow-top-right-bold-outline","mdi-arrow-top-right-thick","mdi-arrow-up","mdi-arrow-up-bold","mdi-arrow-up-bold-box","mdi-arrow-up-bold-box-outline","mdi-arrow-up-bold-circle","mdi-arrow-up-bold-circle-outline","mdi-arrow-up-bold-hexagon-outline","mdi-arrow-up-bold-outline","mdi-arrow-up-box","mdi-arrow-up-down-bold-outline","mdi-arrow-up-drop-circle","mdi-arrow-up-drop-circle-outline","mdi-arrow-up-thick","mdi-artist","mdi-assistant","mdi-asterisk","mdi-at","mdi-atlassian","mdi-atom","mdi-attachment","mdi-audio-video","mdi-audiobook","mdi-augmented-reality","mdi-auto-fix","mdi-auto-upload","mdi-autorenew","mdi-av-timer","mdi-axe","mdi-azure","mdi-baby","mdi-baby-buggy","mdi-backburger","mdi-backspace","mdi-backup-restore","mdi-badminton"]}}},r=n,s=i("2877"),c=i("6544"),d=i.n(c),l=i("62ad"),h=i("a523"),u=i("132d"),m=i("0fd9"),f=i("ade3"),p=(i("a9e3"),i("9734"),i("4ad4")),v=i("a9ad"),b=i("16b7"),g=i("b848"),w=i("f573"),y=i("80d2"),O=i("d9bd"),x=i("58df"),A=Object(x["a"])(v["a"],b["a"],g["a"],w["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,o=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,n=0;return this.top||this.bottom||o?n=a+e.width/2-i.width/2:(this.left||this.right)&&(n=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,o=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=o+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=o+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),!1===this.attach&&(a+=this.pageYOffset),"".concat(this.calcYOverflow(a),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(y["h"])(this.maxWidth),minWidth:Object(y["h"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(y["t"])(this,"activator",!0)&&Object(O["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=p["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===y["x"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(f["a"])(t,this.contentClass,!0),Object(f["a"])(t,"menuable__content__active",this.isActive),Object(f["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),k=Object(s["a"])(r,o,a,!1,null,null,null);e["default"]=k.exports;d()(k,{VCol:l["a"],VContainer:h["a"],VIcon:u["a"],VRow:m["a"],VTooltip:A})},"9d65":function(t,e,i){"use strict";var o=i("d9bd"),a=i("2b0e");e["a"]=a["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(o["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},b848:function(t,e,i){"use strict";var o=i("2909"),a=i("58df");function n(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];a.isActive&&a.isDependent?e.push(a):e.push.apply(e,Object(o["a"])(n(a.$children)))}return e}e["a"]=Object(a["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?n(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(o["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(o["a"])(this.getOpenDependentElements())),t}}})},f573:function(t,e,i){"use strict";var o=i("5530"),a=(i("a9e3"),i("d3b7"),i("21be")),n=i("fe6c"),r=i("4ad4"),s=i("75eb"),c=i("58df"),d=i("80d2"),l=Object(c["a"])(a["a"],Object(n["b"])(["top","right","bottom","left","absolute"]),r["a"],s["a"]);e["a"]=l.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,o=Math.max(t.width,e.width),a=0;if(a+=i,(this.left||this.$vuetify.rtl&&!this.right)&&(a-=o-t.width),this.offsetX){var n=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-n:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(d["h"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(d["h"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,o=this.dimensions.activator,a=this.dimensions.content.height,n=t+a,r=i<n;return r&&this.offsetOverflow&&o.top>a?t=this.pageYOffset+(o.top-a):r&&!this.allowOverflow?t=i-a-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=r["a"].options.methods.genActivatorListeners.call(this),i=e.click;return i&&(e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(o["a"])({},this.dimensions.activator),content:Object(o["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}})}}]);
//# sourceMappingURL=views-Icons.ae07f9db.js.map