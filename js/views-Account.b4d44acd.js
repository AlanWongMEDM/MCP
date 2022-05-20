(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-Account"],{"77be":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{id:"dashboard-view",fluid:"",tag:"section"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("material-card",{attrs:{color:"green","full-header":""},scopedSlots:e._u([{key:"heading",fn:function(){return[a("v-tabs",{staticClass:"pa-3",attrs:{"background-color":"transparent","slider-color":"white"},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[a("v-tab",{staticClass:"mr-3"},[e._v(" Account List ")]),a("v-tab",{staticClass:"mr-3"},[e._v(" Account Right ")]),a("v-tab",{staticClass:"mr-3"},[e._v(" School List ")])],1)]},proxy:!0}])},[a("v-tabs-items",{attrs:{"background-color":"transparent"},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},e._l(3,(function(t){return a("v-tab-item",{key:t},[a("v-card-text",[e._l(e.tasks[e.tabs],(function(t,n){return a("v-row",{key:n},[a("v-col",{staticClass:"col-12",attrs:{col:"12"}},e._l(t.buttons,(function(t,n){return a("span",{key:n},[a("app-btn",{attrs:{href:t["link"],rel:"noopener noreferrer"}},[a("span",[e._v(e._s(t["text"]))])])],1)})),0),a("v-col",{staticClass:"col-12",attrs:{col:"12"}},[a("v-data-table",{attrs:{headers:t.headers,items:t.items,"show-select":""}})],1)],1)}))],2)],1)})),1)],1)],1)],1)],1)},s=[],r=(a("d3b7"),a("7ffd")),l={name:"Account",data:function(){return{tasks:{0:[{buttons:[{text:"Create Account",link:"/Account/Create"}],headers:[{sortable:!1,text:"#",value:"number"},{sortable:!0,text:"User Chinese Name",value:"name_chi",align:"left"},{sortable:!0,text:"User English Name",value:"name_eng",align:"left"},{sortable:!0,text:"User Type",value:"user_type",align:"left"},{sortable:!0,text:"School",value:"school",align:"left"},{sortable:!1,text:"Edit",value:"id"}],items:[{number:1,id:1,name_chi:"陳大文",name_eng:"Chan Tai Man",user_type:"Teacher",school:"現代小學"},{number:2,id:2,name_chi:"王小虎",name_eng:"Wong Siu Fu",user_type:"Principal",school:"現代小學"},{number:3,id:3,name_chi:"李小明",name_eng:"Lee Siu Ming",user_type:"Teacher",school:"現代小學"},{number:4,id:4,name_chi:"何笑",name_eng:"Ho Siu",user_type:"Principal",school:"現代小學"},{number:5,id:5,name_chi:"張大力",name_eng:"Cheung Tai Nic",user_type:"Teacher",school:"現代小學"}]}],1:[{buttons:[{text:"Create Account Right",link:"/Account_Right/Create"}],headers:[{sortable:!1,text:"#",value:"number"},{sortable:!0,text:"User Type(Chinese)",value:"user_type_chi",align:"left"},{sortable:!0,text:"User Type(English)",value:"user_type_eng",align:"left"},{sortable:!1,text:"Edit",value:"id"}],items:[{number:1,id:1,user_type_chi:"超級管理員",user_type_eng:"Superadmin"},{number:2,id:2,user_type_chi:"校長",user_type_eng:"Principal"},{number:3,id:3,user_type_chi:"老師",user_type_eng:"Teacher"},{number:4,id:4,user_type_chi:"學生",user_type_eng:"Student"}]}],2:[{buttons:[{text:"Create School",link:"/School/Create"}],headers:[{sortable:!1,text:"#",value:"number"},{sortable:!0,text:"School Name(Chinese)",value:"school_name_chi",align:"left"},{sortable:!0,text:"School Name(English)",value:"school_name_eng",align:"left"},{sortable:!0,text:"School type",value:"school_type",align:"left"},{sortable:!1,text:"Edit",value:"id"}],items:[{number:1,id:1,school_name_chi:"現代幼稚園",school_name_eng:"Modern Kindergarten",school_type:"Kindergarten"},{number:2,id:2,school_name_chi:"現代小學",school_name_eng:"Modern Primary School",school_type:"Primary School"},{number:3,id:3,school_name_chi:"現代中學",school_name_eng:"Modern Middle School",school_type:"Middle School"}]}]},tabs:0}},computed:{sales:Object(r["b"])("sales/sales"),totalSales:function(){return this.sales.reduce((function(e,t){return e+t.salesInM}),0)}}},o=l,c=a("2877"),i=a("6544"),u=a.n(i),h=a("99d9"),_=a("62ad"),b=a("a523"),d=a("8fea"),m=a("0fd9"),p=a("71a3"),g=a("c671"),v=a("fe57"),f=a("aac8"),y=Object(c["a"])(o,n,s,!1,null,null,null);t["default"]=y.exports;u()(y,{VCardText:h["b"],VCol:_["a"],VContainer:b["a"],VDataTable:d["a"],VRow:m["a"],VTab:p["a"],VTabItem:g["a"],VTabs:v["a"],VTabsItems:f["a"]})}}]);
//# sourceMappingURL=views-Account.b4d44acd.js.map