(function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],d=0,s=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},i={app:0},o={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-128b624c":"b3aa036a","chunk-3b7d4a12":"3886494f","chunk-43fd73b8":"e40daeee","chunk-4cd9a7da":"c77f4ca5","chunk-8bf3859c":"1f54cb72","chunk-9bf1aab6":"a0c5f378","chunk-ea884d02":"678ddc3c","chunk-ea96a2bc":"81d419c3","chunk-f048ffec":"61c5b55f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-128b624c":1,"chunk-3b7d4a12":1,"chunk-43fd73b8":1,"chunk-4cd9a7da":1,"chunk-8bf3859c":1,"chunk-9bf1aab6":1,"chunk-ea884d02":1,"chunk-ea96a2bc":1,"chunk-f048ffec":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-128b624c":"79484f27","chunk-3b7d4a12":"0144dbe6","chunk-43fd73b8":"2ce11f50","chunk-4cd9a7da":"e96171c0","chunk-8bf3859c":"15906501","chunk-9bf1aab6":"78bedb64","chunk-ea884d02":"fe6501df","chunk-ea96a2bc":"55bd6202","chunk-f048ffec":"d00075c8"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],d=l.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[e],f.parentNode.removeChild(f),n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://cdn.jsdelivr.net/gh/temofart/eva/dist/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("e587"),o=n("2f62");r["a"].use(o["a"]);var a=new o["a"].Store({state:{currentSlide:1,currentKit:null,carModel:[],colors:[],personal:[],modalInfo:!1,modalPyatnik:!1,modalShildi:!1,modalPrivat:!1,kit:null,pyatnikPrice:450,shildaPrice:150,totalPrice:null,kits:{econom:{title:"Эконом",price:910,pyatnik:{is:!1},shildi:{is:!1,count:1}},standart:{title:"Стандарт",price:1290,pyatnik:{is:!1},shildi:{is:!1,count:1}},premiumBagazhnik:{title:"Премиум (багажник)",price:2490,pyatnik:{is:!1},shildi:{is:!1,count:1}},premium:{title:"Премиум",price:2040},platinum:{title:"Платинум",price:5040},vip:{title:"VIP",price:3650}}},mutations:{next:function(e){e.currentSlide++},prev:function(e){e.currentSlide--},setCar:function(e,t){var n=Object(i["a"])(t,3),r=n[0],o=n[1],a=n[2];e.carModel=[r,o,a]},setColor:function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];e.colors=[r,o]},setKit:function(e,t){e.kit=t},setPrice:function(e,t){e.totalPrice=t},setShildaCount:function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];e.kits[o].shildi.count=r},setPersonal:function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];e.personal=[r,o]},modalInfo:function(e,t){e.modalInfo=!e.modalInfo,document.body.classList.toggle("modal-overlay"),e.currentKit=t},modalPyatnik:function(e){e.modalPyatnik=!e.modalPyatnik,document.body.classList.toggle("modal-overlay")},modalShildi:function(e){e.modalShildi=!e.modalShildi,document.body.classList.toggle("modal-overlay")},modalPrivat:function(e){e.modalPrivat=!e.modalPrivat,document.body.classList.toggle("modal-overlay")},setOption:function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];"pyatnik"===o&&(e.kits[r].pyatnik.is=!e.kits[r].pyatnik.is),"shilda"===o&&(e.kits[r].shildi.is=!e.kits[r].shildi.is)}},getters:{getKits:function(e){return e.kits},currentKit:function(e){return e.kits[e.currentKit]},getPrice:function(e){return function(t){var n=e.kits[t];return"pyatnik"in n?n.pyatnik.is&&n.shildi.is?n.price+e.pyatnikPrice+e.shildaPrice*n.shildi.count:n.pyatnik.is||n.shildi.is?n.pyatnik.is?n.price+e.pyatnikPrice:n.shildi.is?n.price+e.shildaPrice*n.shildi.count:void 0:n.price:n.price}},isSelectDisabled:function(e){return function(t){return!e.kits[t].shildi.is}}}}),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"constructor"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("slide-"+e.currentSlide,{tag:"component"})],1)],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.$store.state.modalInfo?n("modal-info"):e._e()],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.$store.state.modalPyatnik?n("modal-pyatnik"):e._e()],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.$store.state.modalShildi?n("modal-shildi"):e._e()],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.$store.state.modalPrivat?n("modal-privat"):e._e()],1)],1)},u=[],l=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7"));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={name:"app",computed:{currentSlide:{get:function(){return this.$store.state.currentSlide}},allowPrev:{get:function(){return 1!==this.$store.state.currentSlide}}},methods:s({},Object(o["c"])(["next","prev"]))},p=f,h=(n("5c0b"),n("2877")),m=Object(h["a"])(p,c,u,!1,null,null,null),b=m.exports,k=n("4a7a"),v=n.n(k);r["a"].config.productionTip=!1,r["a"].prototype.$info=window.info,r["a"].component("v-select",v.a),r["a"].component("slide-1",(function(){return n.e("chunk-f048ffec").then(n.bind(null,"7134"))})),r["a"].component("slide-2",(function(){return n.e("chunk-9bf1aab6").then(n.bind(null,"9b84"))})),r["a"].component("slide-3",(function(){return n.e("chunk-ea96a2bc").then(n.bind(null,"381f"))})),r["a"].component("slide-4",(function(){return n.e("chunk-ea884d02").then(n.bind(null,"7cb9"))})),r["a"].component("modal-info",(function(){return n.e("chunk-4cd9a7da").then(n.bind(null,"6d7c"))})),r["a"].component("modal-pyatnik",(function(){return n.e("chunk-128b624c").then(n.bind(null,"d31a"))})),r["a"].component("modal-shildi",(function(){return n.e("chunk-43fd73b8").then(n.bind(null,"0bff"))})),r["a"].component("modal-privat",(function(){return n.e("chunk-3b7d4a12").then(n.bind(null,"5a24"))})),r["a"].component("image-svg",(function(){return n.e("chunk-8bf3859c").then(n.bind(null,"4662"))})),new r["a"]({store:a,render:function(e){return e(b)}}).$mount("#constructor")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.c10baa1f.js.map