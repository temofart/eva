(function(t){function e(e){for(var r,i,c=e[0],u=e[1],l=e[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},i={app:0},o={app:0},a=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-128b624c":"b3aa036a","chunk-3b7d4a12":"3886494f","chunk-43fd73b8":"e40daeee","chunk-492b61db":"53394a51","chunk-4cd9a7da":"c77f4ca5","chunk-8bf3859c":"1f54cb72","chunk-c5495bba":"b537bd7a","chunk-ea884d02":"678ddc3c","chunk-ea96a2bc":"c68c4e5d"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-128b624c":1,"chunk-3b7d4a12":1,"chunk-43fd73b8":1,"chunk-492b61db":1,"chunk-4cd9a7da":1,"chunk-8bf3859c":1,"chunk-c5495bba":1,"chunk-ea884d02":1,"chunk-ea96a2bc":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-128b624c":"79484f27","chunk-3b7d4a12":"0144dbe6","chunk-43fd73b8":"2ce11f50","chunk-492b61db":"92157a54","chunk-4cd9a7da":"e96171c0","chunk-8bf3859c":"15906501","chunk-c5495bba":"43c66a8e","chunk-ea884d02":"fe6501df","chunk-ea96a2bc":"55bd6202"}[t]+".css",o=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[t],f.parentNode.removeChild(f),n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t);var d=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="https://cdn.jsdelivr.net/gh/temofart/eva/dist/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=(n("07ac"),n("e587")),o=n("2f62");r["a"].use(o["a"]);var a=new o["a"].Store({state:{currentSlide:1,currentKit:null,carModel:[],colors:[],personal:[],modalInfo:!1,modalPyatnik:!1,modalShildi:!1,modalPrivat:!1,kit:null,pyatnikPrice:450,shildaPrice:150,totalPrice:null,kits:{econom:{title:"Эконом",price:1010,pyatnik:{is:!1},shildi:{is:!1,count:1}},standart:{title:"Стандарт",price:1390,pyatnik:{is:!1},shildi:{is:!1,count:1}},premiumBagazhnik:{title:"Премиум (багажник)",price:2590,pyatnik:{is:!1},shildi:{is:!1,count:1}},premium:{title:"Премиум",price:2140},platinum:{title:"Платинум",price:5140},vip:{title:"VIP",price:3750}}},mutations:{next:function(t){t.currentSlide++},prev:function(t){t.currentSlide--},setCar:function(t,e){var n=Object(i["a"])(e,3),r=n[0],o=n[1],a=n[2];t.carModel=[r,o,a]},setColor:function(t,e){var n=Object(i["a"])(e,2),r=n[0],o=n[1];t.colors=[r,o]},setKit:function(t,e){t.kit=e},setPrice:function(t,e){t.totalPrice=e},setShildaCount:function(t,e){var n=Object(i["a"])(e,2),r=n[0],o=n[1];t.kits[o].shildi.count=r},setPersonal:function(t,e){var n=Object(i["a"])(e,2),r=n[0],o=n[1];t.personal=[r,o]},modalInfo:function(t,e){t.modalInfo=!t.modalInfo,document.body.classList.toggle("modal-overlay"),t.currentKit=e},modalPyatnik:function(t){t.modalPyatnik=!t.modalPyatnik,document.body.classList.toggle("modal-overlay")},modalShildi:function(t){t.modalShildi=!t.modalShildi,document.body.classList.toggle("modal-overlay")},modalPrivat:function(t){t.modalPrivat=!t.modalPrivat,document.body.classList.toggle("modal-overlay")},setOption:function(t,e){var n=Object(i["a"])(e,2),r=n[0],o=n[1];"pyatnik"===o&&(t.kits[r].pyatnik.is=!t.kits[r].pyatnik.is),"shilda"===o&&(t.kits[r].shildi.is=!t.kits[r].shildi.is)},importPrices:function(t,e){console.log(e);for(var n=0,r=0,i=Object.values(t.kits);r<i.length;r++){var o=i[r];o.price=e[n],n++}console.log(t.kits)}},getters:{getKits:function(t){return t.kits},currentKit:function(t){return t.kits[t.currentKit]},getPrice:function(t){return function(e){var n=t.kits[e];return"pyatnik"in n?n.pyatnik.is&&n.shildi.is?n.price+t.pyatnikPrice+t.shildaPrice*n.shildi.count:n.pyatnik.is||n.shildi.is?n.pyatnik.is?n.price+t.pyatnikPrice:n.shildi.is?n.price+t.shildaPrice*n.shildi.count:void 0:n.price:n.price}},isSelectDisabled:function(t){return function(e){return!t.kits[e].shildi.is}}}}),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"constructor"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("slide-"+t.currentSlide,{tag:"component"})],1)],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.$store.state.modalInfo?n("modal-info"):t._e()],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.$store.state.modalPyatnik?n("modal-pyatnik"):t._e()],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.$store.state.modalShildi?n("modal-shildi"):t._e()],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.$store.state.modalPrivat?n("modal-privat"):t._e()],1)],1)},u=[],l=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"app",computed:{currentSlide:{get:function(){return this.$store.state.currentSlide}},allowPrev:{get:function(){return 1!==this.$store.state.currentSlide}}},methods:d({},Object(o["c"])(["next","prev"]))},p=f,h=(n("5c0b"),n("2877")),b=Object(h["a"])(p,c,u,!1,null,null,null),m=b.exports,k=n("4a7a"),v=n.n(k);r["a"].config.productionTip=!1,r["a"].prototype.$info=window.info,r["a"].component("v-select",v.a),r["a"].component("slide-1",(function(){return n.e("chunk-c5495bba").then(n.bind(null,"7134"))})),r["a"].component("slide-2",(function(){return n.e("chunk-492b61db").then(n.bind(null,"9b84"))})),r["a"].component("slide-3",(function(){return n.e("chunk-ea96a2bc").then(n.bind(null,"381f"))})),r["a"].component("slide-4",(function(){return n.e("chunk-ea884d02").then(n.bind(null,"7cb9"))})),r["a"].component("modal-info",(function(){return n.e("chunk-4cd9a7da").then(n.bind(null,"6d7c"))})),r["a"].component("modal-pyatnik",(function(){return n.e("chunk-128b624c").then(n.bind(null,"d31a"))})),r["a"].component("modal-shildi",(function(){return n.e("chunk-43fd73b8").then(n.bind(null,"0bff"))})),r["a"].component("modal-privat",(function(){return n.e("chunk-3b7d4a12").then(n.bind(null,"5a24"))})),r["a"].component("image-svg",(function(){return n.e("chunk-8bf3859c").then(n.bind(null,"4662"))})),new r["a"]({store:a,render:function(t){return t(m)}}).$mount("#constructor")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.807b2abb.js.map