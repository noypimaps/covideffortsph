(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],f=0,p=[];f<r.length;f++)n=r[f],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/covideffortsph/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"08d5":function(t,e,a){"use strict";var s=a("1b5c"),i=a.n(s);i.a},"0fa1":function(t,e,a){},"1b5c":function(t,e,a){},2395:function(t,e,a){},3139:function(t,e,a){"use strict";var s=a("3f87"),i=a.n(s);i.a},"3f87":function(t,e,a){},"7b3b":function(t,e,a){t.exports=a.p+"img/WELCOME.1da005d3.png"},"7c55":function(t,e,a){"use strict";var s=a("2395"),i=a.n(s);i.a},"974c":function(t,e,a){t.exports=a.p+"img/BAYANIHAN.f3597fc1.png"},a47b:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"modal",class:{"is-active":t.welcomeModal}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[t._m(0),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.welcomeModal=!t.welcomeModal}}})]),t._m(1),s("footer",{staticClass:"modal-card-foot"},[s("i",{staticStyle:{"font-size":"10px"}},[t._v("Last data update "+t._s(t.dateLastUpdate))])])])]),s("div",{staticClass:"modal",class:{"is-active":t.hospitalMapView}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-card"},[t._m(2),s("section",{staticClass:"modal-card-body",staticStyle:{"text-align":"center"}},[s("p",{staticClass:"title is-5"},[t._v("We're still working on this.")]),s("router-link",{staticClass:"menu_buttons",attrs:{to:{name:"Efforts"}}},[s("button",{staticClass:"button is-primary",on:{click:function(e){t.effortsView=!0,t.hospitalMapView=!1}}},[s("b-icon",{attrs:{icon:"hands-helping"}}),s("strong",[t._v("Return to Effort List")])],1)])],1),s("footer",{staticClass:"modal-card-foot"})])]),s("b-navbar",{staticClass:"navbar is-fixed-top",attrs:{id:"covid-nav"}},[s("template",{slot:"brand"},[s("img",{staticStyle:{height:"40px"},attrs:{id:"covid-logo",src:a("974c")}})]),s("template",{slot:"start"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"field has-addons",staticStyle:{"margin-bottom":"0px"}},[s("p",{staticClass:"control",staticStyle:{width:"350px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"input",attrs:{type:"text",placeholder:"Search ...",expanded:"true",loading:"false"},domProps:{value:t.searchQuery},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onFilterList()},input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})]),s("p",{staticClass:"control"},[s("button",{staticClass:"button",on:{click:function(e){return t.onFilterList()}}},[t._v(" Search ")])])]),s("div",{staticClass:"level-item"},[t.effortsView?s("p",{staticClass:"control subtitle is-6",staticStyle:{"margin-left":"10px"}},[s("i",[s("b",[t._v(t._s(t.efforts.length))]),t._v(" of "),s("b",[t._v(t._s(t.fullData.length))]),t._v(" efforts")])]):t._e(),t.hospitalMapView?s("p",{staticClass:"control subtitle is-6",staticStyle:{"margin-left":"10px"}},[s("i",[s("b",[t._v(t._s(t.hospitals.length))]),t._v(" of "),s("b",[t._v(t._s(t.hospitalCount))]),t._v(" hospitals")])]):t._e()])])]),s("template",{slot:"end"},[s("b-navbar-item",{attrs:{tag:"div"}},[s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"menu_buttons",attrs:{to:{name:"Efforts"}}},[s("button",{staticClass:"button is-primary",on:{click:function(e){t.effortsView=!0,t.hospitalMapView=!1}}},[s("b-icon",{attrs:{icon:"hands-helping"}}),s("strong",[t._v("Effort List")])],1)]),s("router-link",{staticClass:"menu_buttons",attrs:{to:{name:"HospitalMap"}}},[s("button",{staticClass:"button is-primary",on:{click:function(e){t.effortsView=!1,t.hospitalMapView=!0}}},[s("b-icon",{attrs:{icon:"medkit"}}),s("strong",[t._v("Hospital Needs Map")])],1)]),s("a",{attrs:{href:"https://forms.gle/dBUfktQeGJf3u3cG7",target:"_blank"}},[s("button",{staticClass:"button is-primary menu_buttons"},[s("strong",[t._v("Submit Effort")])])])],1)])],1)],2),s("div",{staticClass:"level",staticStyle:{"padding-top":"6%"}},[t.effortsView?s("efforts-view",{ref:"efforts-view",attrs:{efforts:t.efforts}}):t._e(),t.hospitalMapView?s("hospital-map",{ref:"hospital-map-view",attrs:{efforts:t.hospitals}}):t._e()],1)],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"modal-card-title"},[s("span",[s("img",{staticStyle:{height:"30px"},attrs:{id:"covid-logo",src:a("7b3b")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"modal-card-body",staticStyle:{"text-align":"left"}},[a("p",[t._v(" You'll find different opportunities to help out during this period of national crisis in this page. ")]),a("br"),a("p",[t._v(" The aim of #BAYANIHAN is to collate the efforts/calls against #COVID19 that Filipino communities all over the countries have started. ")]),a("br"),a("p",[t._v(" There are different causes out there. You can donate cash and goods. You can volunteer your time, skills, bikes, cars et cetera ")]),a("br"),a("p",[t._v(" If you want to submit an event/effort in line with the #COVID19 fight, submit them "),a("a",{attrs:{href:"https://forms.gle/dBUfktQeGJf3u3cG7"}},[t._v("here")]),t._v(". ")]),a("br"),a("p",[a("b",[t._v("Mabuhay ka, Bayaning Pinoy!")])]),a("hr"),a("p",[a("i",[t._v("ACKNOWLEDGEMENT")])]),a("p",[t._v(" Initial in this page are crowd sourced from this "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/u/1/d/1mIY9cAz1d0GVuaFGH3Rgxcj8JWfIJzjZVekzGHT7bKw/htmlview#"}},[t._v("table")]),t._v(". ")]),a("i",[t._v("Thanks awesome people!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[s("span",[s("img",{staticStyle:{height:"50px"},attrs:{id:"covid-logo",src:a("974c")}})])])])}],n=(a("4160"),a("c975"),a("d3b7"),a("07ac"),a("25f0"),a("159b"),a("bc3a")),r=a.n(n),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"efforts",staticClass:"container"},[a("div",{staticClass:"level",attrs:{id:"efforts"}},t._l(t.efforts,(function(t){return a("effort-item",{key:t.key,attrs:{contactDetails:t.CONTACT_DETAILS,linkInfo:t.LINK_FOR_MORE_INFO,needs:t.NEEDS,organization:t.ORGANIZATION,severityUrgency:t.SEVERITY_URGENCY,status:t.STATUS,type:t.TYPE,whatTheyDo:t.WHAT_THEY_DO,whoTheyHelp:t.WHO_THEY_HELP,orgType:t.ORG_TYPE,subtitle:t.SUBTITLE}})})),1)])},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("b-taglist",{staticStyle:{float:"right"},attrs:{attached:""}},[""!=t.orgType?a("b-tag",{staticClass:"tag is-success is-medium",class:{"is-success":"Organization"==t.orgType,"is-danger":"Hospital"==t.orgType,"is-warning":"Supplier"==t.orgType}},[t._v(t._s(t.orgType))]):t._e(),a("b-tag",{attrs:{type:"is-info is-medium"}},[t._v(t._s(t.type))])],1),a("p",{staticClass:"title is-3",attrs:{id:"effort-item-title"}},[t._v(t._s(t.organization))]),a("p",{staticClass:"subtitle is-6",staticStyle:{"text-align":"left","margin-bottom":"2px"}},[t._v(" "+t._s(t.subtitle)+" ")]),"No Info"!=t.linkInfo||""!=t.linkInfo?a("p",{staticClass:"subtitle",staticStyle:{width:"80%"},attrs:{id:"effort-item-link"}},t._l(t.linkInfo,(function(e){return a("a",{key:e.key,staticClass:"buttons",staticStyle:{"font-size":"12px","max-width":"80%"},attrs:{href:e,target:"_blank"}},[t._v(" "+t._s(e)+" ")])})),0):a("br"),a("div",{staticClass:"content",staticStyle:{"text-align":"left"}},["Supplier"!=t.orgType?a("h6",{staticClass:"subtitle is-6 attr_label"},[t._v(" Needs ")]):a("h6",{staticClass:"subtitle is-6 attr_label"},[t._v("Provides")]),a("div",{staticClass:"tags are-medium"},t._l(t.needsArray,(function(e){return a("span",{key:e.key,staticClass:"tag is-primary"},[t._v(t._s(e))])})),0),a("h6",{staticClass:"subtitle is-6 attr_label"},[t._v("Contact Details")]),a("p",[a("span",{domProps:{innerHTML:t._s(t.parsedContactDetails)}})]),"Supplier"==t.orgType?a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("h6",{staticClass:"subtitle is-6 attr_label"},[t._v("Pricing")]),a("p",[t._v(t._s(t.status))])])]):t._e(),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half"},[a("h6",{staticClass:"subtitle is-6 attr_label"},[t._v("What they do")]),a("p",[t._v(t._s(t.whatTheyDo))])]),a("div",{staticClass:"column is-half"},[a("h6",{staticClass:"subtitle is-6 attr_label"},[t._v("Who they help")]),a("p",[t._v(t._s(t.whoTheyHelp))])])])])],1)])},f=[],p=(a("ac1f"),a("5319"),a("1276"),{name:"Effort-Item",props:{contactDetails:String,linkInfo:Array,needs:String,organization:String,severityUrgency:String,status:String,type:String,whatTheyDo:String,whoTheyHelp:String,orgType:String,subtitle:String},data:function(){return{needsArray:[]}},computed:{parsedContactDetails:function(){return this.contactDetails.replace(/(?:\r\n|\r|\n)/g,"<br />")}},methods:{needstoArray:function(){var t=this.needs.split(",");this.needsArray=t}},filters:{newLinesParse:function(t){return t.replace(/(?:\r\n|\r|\n)/g,"<br />")}},mounted:function(){this.needstoArray()}}),d=p,h=(a("08d5"),a("2877")),m=Object(h["a"])(d,u,f,!1,null,"3ac3bb27",null),v=m.exports,g={name:"Efforts",props:{query:String,efforts:Array},data:function(){return{}},methods:{},created:function(){},components:{"effort-item":v}},b=g,_=(a("e24a"),Object(h["a"])(b,l,c,!1,null,"9379ce3e",null)),y=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[a("div",{staticClass:"columns is-multiline is-mobile"},[a("div",{staticClass:"column is-half",staticStyle:{"margin-left":"4%"}},[a("div",{staticClass:"level",staticStyle:{display:"block",padding:"1%"},attrs:{id:"hospitalCards"}},t._l(t.efforts,(function(t){return a("hospital-needs-item",{key:t.key,attrs:{contactDetails:t.CONTACT_DETAILS,linkInfo:t.LINK_FOR_MORE_INFO,needs:t.NEEDS,organization:t.ORGANIZATION,severityUrgency:t.SEVERITY_URGENCY,status:t.STATUS,type:t.TYPE,whatTheyDo:t.WHAT_THEY_DO,whoTheyHelp:t.WHO_THEY_HELP,orgType:t.ORG_TYPE,subtitle:t.SUBTITLE}})})),1)]),a("div",{staticClass:"column is-half",staticStyle:{width:"46%"}},[a("map-comp")],1)])])},w=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("l-map",{staticStyle:{height:"639px",width:"43%",position:"fixed"},attrs:{id:"hospitalMap",zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),a("l-marker",{attrs:{"lat-lng":t.marker}})],1)],1)},E=[],S=(a("96cf"),a("1da1")),k=(a("6cc5"),a("e11e")),O=a("2699"),x=a("a40a"),I=a("4e2b"),M={name:"Map",components:{LMap:O["a"],LTileLayer:x["a"],LMarker:I["a"]},data:function(){return{loading:!1,show:!0,enableTooltip:!0,zoom:6,center:[14,121],geojson:null,fillColor:"#e4ce7f",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',marker:Object(k["latLng"])(47.41322,-1.219482)}},computed:{options:function(){return{onEachFeature:this.onEachFeatureFunction}},styleFunction:function(){var t=this.fillColor;return function(){return{weight:2,color:"#ECEFF1",opacity:1,fillColor:t,fillOpacity:1}}},onEachFeatureFunction:function(){return this.enableTooltip?function(t,e){e.bindTooltip("<div>code:"+t.properties.code+"</div><div>nom: "+t.properties.nom+"</div>",{permanent:!1,sticky:!0})}:function(){console.log("tooltip")}}},created:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,fetch("https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson");case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,t.geojson=s,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()}},A=M,j=(a("dbb6"),Object(h["a"])(A,T,E,!1,null,"e834e550",null)),H=j.exports,D={name:"HospitalMap",components:{"hospital-needs-item":v,"map-comp":H},props:{efforts:Array}},L=D,N=(a("3139"),Object(h["a"])(L,C,w,!1,null,"de7e2ebc",null)),P=N.exports,Y={data:function(){return{searchQuery:"",efforts:[],hospitals:[],fullData:[],effortsFilter:["cash","ppe","voluteer","alcohol","transportation","mask","gown"],welcomeModal:!0,effortsView:!0,hospitalMapView:!1,hospitalCount:0,dateLastUpdate:"03252020"}},methods:{onFilterList:function(){var t=this.searchQuery;this.efforts=[];var e=[],a=[];this.fullData.forEach((function(s){var i=Object.values(s).toString(),o=i.indexOf(t);-1!=o&&(e.push(s),"Hospital"==s.ORG_TYPE&&a.push(s))})),this.efforts=e,this.hospitals=a},fetchEfforts:function(){var t=this;r.a.get("https://noypimaps-213109.firebaseio.com/.json?print=pretty").then((function(e){console.log(e);var a=[];t.fullData=e.data,t.efforts=t.fullData,t.efforts.forEach((function(t){"Hospital"==t.ORG_TYPE&&a.push(t)})),t.hospitals=a,t.hospitalCount=a.length})).catch((function(t){console.log(t)}))}},mounted:function(){this.fetchEfforts()},components:{"efforts-view":y,"hospital-map":P}},V=Y,F=(a("7c55"),Object(h["a"])(V,i,o,!1,null,null,null)),R=F.exports,G=a("8c4f");s["a"].use(G["a"]);var z=[{path:"/",name:"Efforts",component:y},{path:"/hospitalmap",name:"HospitalMap",component:P}],U=new G["a"]({mode:"history",base:"/covideffortsph/",routes:z}),W=U,$=a("2f62");s["a"].use($["a"]);var Q=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}}),B=a("289d"),J=(a("5abe"),a("ecee")),K=a("c074"),Z=a("ad3d");J["c"].add(K["g"],K["h"],K["n"],K["j"],K["i"],K["d"],K["c"],K["b"],K["a"],K["k"],K["l"],K["e"],K["f"],K["p"],K["o"],K["m"]),s["a"].component("vue-fontawesome",Z["a"]),s["a"].use(B["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),s["a"].config.productionTip=!1,new s["a"]({router:W,store:Q,render:function(t){return t(R)}}).$mount("#app")},dbb6:function(t,e,a){"use strict";var s=a("0fa1"),i=a.n(s);i.a},e24a:function(t,e,a){"use strict";var s=a("a47b"),i=a.n(s);i.a}});
//# sourceMappingURL=app.82efcdeb.js.map