(function(e){function t(t){for(var r,i,a=t[0],u=t[1],s=t[2],l=0,d=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},i={app:0},o={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0ffaea76":"0fc74d46","chunk-3e5d7dce":"15201341","chunk-5b80c4bf":"1089d43b","chunk-71f661de":"6b60475e","chunk-ceab698e":"25052695","chunk-f4639f1a":"9b5ce984"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0ffaea76":1,"chunk-3e5d7dce":1,"chunk-5b80c4bf":1,"chunk-71f661de":1,"chunk-ceab698e":1,"chunk-f4639f1a":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0ffaea76":"197e87b8","chunk-3e5d7dce":"f6574863","chunk-5b80c4bf":"8e974328","chunk-71f661de":"6b5b482f","chunk-ceab698e":"8352e06d","chunk-f4639f1a":"cc715819"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var s=c[a],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){s=d[a],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete i[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://cdn.jsdelivr.net/gh/temofart/eva/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("e587"),o=n("2f62");r["a"].use(o["a"]);var c=new o["a"].Store({state:{currentSlide:1,carModel:[],colors:[],personal:[],isModal:!1,kit:null,pyatnikPrice:450,shildaPrice:150,totalPrice:null,kits:{econom:{title:"Эконом",price:910,pyatnik:{is:!1},shildi:{is:!1,count:1}},standart:{title:"Стандарт",price:1010,pyatnik:{is:!1},shildi:{is:!1,count:1}},premium:{title:"Премиум",price:1110,pyatnik:{is:!1},shildi:{is:!1,count:1}},premiumPlus:{title:"Премиум Плюс",price:1210},platinum:{title:"Платинум",price:1310},vip:{title:"VIP",price:1410}}},mutations:{next:function(e){e.currentSlide++},prev:function(e){e.currentSlide--},setCar:function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];e.carModel=[r,o]},setColor:function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];e.colors=[r,o]},setKit:function(e,t){e.kit=t},setPrice:function(e,t){e.totalPrice=t},setShildaCount:function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];e.kits[o].shildi.count=r},setPersonal:function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];e.personal=[r,o]},openModal:function(e,t){e.isModal=!0,e.kit=t,document.body.classList.add("modal-overlay")},closeModal:function(e){e.isModal=!1,document.body.classList.remove("modal-overlay")},setOption:function(e,t){var n=Object(i["a"])(t,2),r=n[0],o=n[1];"pyatnik"===o&&(e.kits[r].pyatnik.is=!e.kits[r].pyatnik.is),"shilda"===o&&(e.kits[r].shildi.is=!e.kits[r].shildi.is)}},getters:{getKits:function(e){return e.kits},getPrice:function(e){return function(t){var n=e.kits[t];return"pyatnik"in n?n.pyatnik.is&&n.shildi.is?n.price+e.pyatnikPrice+e.shildaPrice*n.shildi.count:n.pyatnik.is||n.shildi.is?n.pyatnik.is?n.price+e.pyatnikPrice:n.shildi.is?n.price+e.shildaPrice*n.shildi.count:void 0:n.price:n.price}},isSelectDisabled:function(e){return function(t){return!e.kits[t].shildi.is}}}}),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"constructor"}},[n("keep-alive",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("slide-"+e.currentSlide,{tag:"component"})],1)],1),n("modal")],1)},u=[],s=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={name:"app",computed:{currentSlide:{get:function(){return this.$store.state.currentSlide}},allowPrev:{get:function(){return 1!==this.$store.state.currentSlide}}},methods:d({},Object(o["c"])(["next","prev"]))},p=f,h=(n("5c0b"),n("2877")),b=Object(h["a"])(p,a,u,!1,null,null,null),m=b.exports,v=n("4a7a"),k=n.n(v);r["a"].config.productionTip=!1,r["a"].prototype.$info=window.info,r["a"].component("v-select",k.a),r["a"].component("slide-1",(function(){return n.e("chunk-71f661de").then(n.bind(null,"7134"))})),r["a"].component("slide-2",(function(){return n.e("chunk-f4639f1a").then(n.bind(null,"9b84"))})),r["a"].component("slide-3",(function(){return n.e("chunk-0ffaea76").then(n.bind(null,"381f"))})),r["a"].component("slide-4",(function(){return n.e("chunk-ceab698e").then(n.bind(null,"7cb9"))})),r["a"].component("modal",(function(){return n.e("chunk-3e5d7dce").then(n.bind(null,"aff5"))})),r["a"].component("image-svg",(function(){return n.e("chunk-5b80c4bf").then(n.bind(null,"4662"))})),new r["a"]({store:c,render:function(e){return e(m)}}).$mount("#constructor")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.66a4f570.js.map