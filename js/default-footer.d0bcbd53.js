(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default-footer"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("fe6c"),o=i("58df");function a(t,e=[]){return Object(o["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"51ef":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"default-footer",color:"transparent",absolute:"",app:"",inset:""}},[i("links")],1)},o=[],a=i("81d3"),p={name:"DefaultFooter",components:{Links:a["default"]}},n=p,r=i("2877"),l=i("6544"),h=i.n(l),c=(i("b5b6"),i("8dd9")),u=i("3a66"),d=i("d10f"),f=i("58df"),m=i("80d2"),b=Object(f["a"])(c["a"],Object(u["a"])("footer",["height","inset"]),d["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...c["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...c["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(m["h"])(t),left:Object(m["h"])(this.computedLeft),right:Object(m["h"])(this.computedRight),bottom:Object(m["h"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),v=Object(r["a"])(n,s,o,!1,null,null,null);e["default"]=v.exports;h()(v,{VFooter:b})},b5b6:function(t,e,i){}}]);
//# sourceMappingURL=default-footer.d0bcbd53.js.map