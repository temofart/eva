(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40d9d4c8"],{"13a3":function(t,e,i){t.exports=i.p+"img/mechanic.1b2a481a.jpg"},"182e":function(t,e,i){},"1d5d":function(t,e,i){t.exports=i.p+"img/akpp.d4e4349a.jpg"},"381f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide slide-3"},[t._m(0),i("div",{staticClass:"step"},[t._v("ШАГ 3 из 4")]),t._m(1),i("button",{staticClass:"button-prev bottom-space",on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[t._v("Вернуться назад ")]),i("div",{staticClass:"choose"},t._l(t.getKits,(function(e,n){return i("div",{key:n,staticClass:"item"},[i("h3",{staticClass:"title"},[t._v(t._s(e.title)+" "),i("i",{staticClass:"icon-info",on:{click:function(e){return e.stopPropagation(),t.modalInfo(n)}}})]),i("div",{staticClass:"acc-title"},[t._v("Аксессуары")]),i("div",{staticClass:"acc-desc"},[t._v("скидка не распространяется")]),i("img",{staticClass:"pic",attrs:{src:t.getImage(n),alt:""}}),e.pyatnik||e.shildi?i("div",{staticClass:"options"},[i("div",{staticClass:"option"},[i("input",{staticClass:"input",attrs:{type:"checkbox",id:"pyatnik-"+n},on:{change:function(i){return t.calc(n,e,"pyatnik")}}}),i("label",{staticClass:"label",attrs:{for:"pyatnik-"+n,"data-text":"Подпятник"}}),i("i",{staticClass:"icon-info pyatnik",on:{click:function(e){return e.stopPropagation(),t.modalPyatnik(e)}}})]),i("div",{staticClass:"option"},[i("input",{staticClass:"input",attrs:{type:"checkbox",id:"shilda-"+n},on:{change:function(i){return t.calc(n,e,"shilda")}}}),i("label",{staticClass:"label",attrs:{for:"shilda-"+n,"data-text":"Шильды"}}),i("i",{staticClass:"icon-info shilda",on:{click:function(e){return e.stopPropagation(),t.modalShildi(e)}}}),i("v-select",{attrs:{options:["1","2","3","4","5"],disabled:t.isSelectDisabled(n),placeholder:"1"},on:{input:function(e){return t.setShildaCount([e,n])}}})],1)]):t._e(),"premiumPlus"===n?i("div",{staticClass:"gifts"}):t._e(),"platinum"===n||"vip"===n?i("div",{staticClass:"gifts"},[i("div",{staticClass:"gift"},[t._v("Специальный подарок")]),"platinum"===n?i("div",{staticClass:"gift"},[t._v("2 накидки на передние сиденья из Алькантары")]):t._e(),"vip"===n?i("div",{staticClass:"gift"},[t._v("Бесплатная доставка")]):t._e()]):t._e(),i("div",{staticClass:"price-wrapper"},[i("div",{staticClass:"price"},[t._v(t._s(t.getPrice(n))+" грн")]),"econom"!==n?i("div",{staticClass:"privat",on:{click:function(e){return e.stopPropagation(),t.modalPrivat(e)}}},[t._v("Оплата частями")]):t._e()]),i("button",{staticClass:"button",on:{click:function(i){return i.preventDefault(),t.sendData(e,n)}}},[t._v("Выбрать комплект")])])})),0)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"title"},[t._v("Виртуальный"),i("br"),t._v("конструктор ковриков")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("strong",{staticClass:"description"},[t._v("Следующий шаг - выбор комплекта и подбор"),i("br"),t._v("дополнительных аксессуаров")])}],a=(i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("2fa7")),c=i("2f62");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p={name:"slide-3",methods:r({},Object(c["c"])(["setOption","next","prev","setKit","setShildaCount","setPrice","modalInfo","modalPyatnik","modalShildi","modalPrivat"]),{calc:function(t,e,i,n){"pyatnik"===i&&this.setOption([t,"pyatnik"]),"shilda"===i&&this.setOption([t,"shilda"])},sendData:function(t,e){document.getElementById("rec140931884")&&document.getElementById("rec140931884").scrollIntoView({block:"start",behavior:"smooth"});var i=this.getPrice(e);this.setKit(t),this.setPrice(i),this.next()},getImage:function(t){return i("710a")("./".concat(t,".jpg"))}}),computed:r({},Object(c["b"])(["getKits","getPrice","isSelectDisabled"]))},l=p,u=(i("9bcc"),i("2877")),d=Object(u["a"])(l,n,s,!1,null,null,null);e["default"]=d.exports},"52e2":function(t,e,i){t.exports=i.p+"img/econom.23756a09.jpg"},"54eb":function(t,e,i){t.exports=i.p+"img/premium.036e28e7.jpg"},"6f90":function(t,e,i){t.exports=i.p+"img/premiumPlus.d8907137.jpg"},"710a":function(t,e,i){var n={"./complekts/econom.jpg":"52e2","./complekts/platinum.jpg":"9c03","./complekts/premium.jpg":"8619","./complekts/premiumPlus.jpg":"6f90","./complekts/standart.jpg":"d4df","./complekts/vip.jpg":"bec7","./econom.jpg":"e2a6","./platinum.jpg":"f2e0","./premium.jpg":"54eb","./premiumPlus.jpg":"f173","./pyatnik/akpp.jpg":"1d5d","./pyatnik/mechanic.jpg":"13a3","./standart.jpg":"a69b","./vip.jpg":"ae09"};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="710a"},8619:function(t,e,i){t.exports=i.p+"img/premium.bb788ebc.jpg"},"9bcc":function(t,e,i){"use strict";var n=i("182e"),s=i.n(n);s.a},"9c03":function(t,e,i){t.exports=i.p+"img/platinum.ba77e741.jpg"},a69b:function(t,e,i){t.exports=i.p+"img/standart.79e6f319.jpg"},ae09:function(t,e,i){t.exports=i.p+"img/vip.d45e1651.jpg"},bec7:function(t,e,i){t.exports=i.p+"img/vip.43088290.jpg"},d4df:function(t,e,i){t.exports=i.p+"img/standart.c965038d.jpg"},e2a6:function(t,e,i){t.exports=i.p+"img/econom.442fc7e2.jpg"},f173:function(t,e,i){t.exports=i.p+"img/premiumPlus.66617c8b.jpg"},f2e0:function(t,e,i){t.exports=i.p+"img/platinum.eb936b04.jpg"}}]);
//# sourceMappingURL=chunk-40d9d4c8.c2b0bd6d.js.map