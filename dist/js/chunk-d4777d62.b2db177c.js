(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4777d62"],{"1f16":function(e,t,o){},"9b84":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"slide slide-2 column-2",class:{validate:e.validate}},[o("div",{staticClass:"column"},[e._m(0),o("div",{staticClass:"step"},[e._v("ШАГ 2 из 4")]),o("strong",{staticClass:"description"},[e._v("Следующий шаг - персонализация, подбор цветовой гаммы Ваших будущих ковриков")]),o("image-svg",{staticClass:"mobile",attrs:{mainColor:e.getMainColor,borderColor:e.getSecondaryColor}}),o("v-select",{class:{active:e.selectedMainColor,error:!e.selectedMainColor},attrs:{options:e.mainColors,placeholder:"Цвет полимера"},model:{value:e.selectedMainColor,callback:function(t){e.selectedMainColor=t},expression:"selectedMainColor"}}),o("v-select",{class:{active:e.selectedSecondaryColor,error:!e.selectedSecondaryColor},attrs:{options:e.secondaryColors,placeholder:"Цвет канта"},model:{value:e.selectedSecondaryColor,callback:function(t){e.selectedSecondaryColor=t},expression:"selectedSecondaryColor"}}),o("div",{staticClass:"flex"},[o("button",{staticClass:"button-prev",on:{click:function(t){return t.preventDefault(),e.prev(t)}}},[e._v("Вернуться назад ")]),o("button",{staticClass:"button",class:{disabled:e.disabled},on:{click:function(t){return t.preventDefault(),e.sendData(t)}}},[e._v("Дальше ")])])],1),o("div",{staticClass:"column"},[o("image-svg",{attrs:{mainColor:e.getMainColor,borderColor:e.getSecondaryColor}})],1)])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h2",{staticClass:"title"},[e._v("Виртуальный"),o("br"),e._v("конструктор ковриков")])}],s=(o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("2fa7")),l={main:{"черный":"#000","бежевый":"rgb(251, 232, 145)","коричневый":"rgb(138, 85, 5)","красный":"rgb(158, 10, 10)","серый":"rgb(60, 59, 59)","синий":"rgb(0, 26, 119)"},secondary:{"черный":"#000","бежевый":"rgb(251, 232, 145)","коричневый":"rgb(138, 85, 5)","красный":"rgb(158, 10, 10)","серый":"rgb(60, 59, 59)","синий":"rgb(0, 26, 119)","белый":"rgb(236, 236, 236)","оранжевый":"rgb(245, 135, 0)","зеленый":"rgb(37, 142, 24)","желтый":"rgb(255, 225, 9)"}},c=l,a=o("2f62");function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach((function(t){Object(s["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var u={name:"slide-2",data:function(){return{mainColors:[],secondaryColors:[],selectedMainColor:null,selectedSecondaryColor:null,validate:!1}},mounted:function(){this.mainColors=Object.keys(c.main),this.secondaryColors=Object.keys(c.secondary)},methods:d({},Object(a["c"])(["next","prev","setColor"]),{sendData:function(){this.selectedMainColor&&this.selectedSecondaryColor?(this.validate=!1,this.setColor([this.selectedMainColor,this.selectedSecondaryColor]),this.next(),document.getElementById("rec140931884")&&document.getElementById("rec140931884").scrollIntoView({block:"start",behavior:"smooth"})):this.validate=!0}}),computed:{disabled:{get:function(){return!this.selectedMainColor||!this.selectedSecondaryColor}},getMainColor:{get:function(){return c.main[this.selectedMainColor]}},getSecondaryColor:{get:function(){return c.secondary[this.selectedSecondaryColor]}}}},b=u,C=(o("eeb3"),o("2877")),v=Object(C["a"])(b,r,n,!1,null,"6dc7b166",null);t["default"]=v.exports},eeb3:function(e,t,o){"use strict";var r=o("1f16"),n=o.n(r);n.a}}]);
//# sourceMappingURL=chunk-d4777d62.b2db177c.js.map