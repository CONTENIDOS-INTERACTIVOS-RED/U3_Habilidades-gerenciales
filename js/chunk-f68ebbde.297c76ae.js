(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f68ebbde"],{"926a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pasos-a"},[t._l(t.elements,(function(e,i){return t.elements.length?s("div",{staticClass:"pasos-a__item"},[s("div",{staticClass:"row align-items-center d-flex",class:!t.isEven(i)&&"flex-row-reverse"},[s("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__numero text-center d-inline-flex justify-content-center align-items-center",class:t.getClass(i)},[s("div",{staticClass:"pasos-a__circle"},["n"===t.tipo?s("div",{staticClass:"h2"},[t._v(t._s(i+1))]):"l"===t.tipo?s("div",{staticClass:"h2"},[t._v(t._s(t.abecedario[i]))]):t._e()])]),s("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"item.elm"}],staticClass:"col py-3",class:!t.isEven(i)&&"text-end"}),s("div",{staticClass:"col-1"})]),i+1!=t.elements.length?s("div",{staticClass:"row pasos-a__linea"},[s("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina"},[t.isEven(i)?s("div",{staticClass:"pasos-a__linea__esquina__linea top-right"}):s("div",{staticClass:"pasos-a__linea__esquina__linea right-bottom"})]),t._m(0,!0),s("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina"},[t.isEven(i)?s("div",{staticClass:"pasos-a__linea__esquina__linea left-bottom"}):s("div",{staticClass:"pasos-a__linea__esquina__linea top-left"})])]):t._e()]):t._e()})),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 col-sm-8 col-lg-10"},[s("div",{staticClass:"hor-line"})])}],a=s("f480"),l={name:"PasosA",mixins:[a["a"]],props:{tipo:{type:String,default:"n"}},data:function(){return{abecedario:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"}},methods:{getClass:function(t){return 0===t?"bottom":t+1===this.elements.length?"top":"full"},isEven:function(t){return t%2===0}}},o=l,r=s("2877"),c=Object(r["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports},a15b:function(t,e,s){"use strict";var i=s("23e7"),n=s("44ad"),a=s("fc6a"),l=s("a640"),o=[].join,r=n!=Object,c=l("join",",");i({target:"Array",proto:!0,forced:r||!c},{join:function(t){return o.call(a(this),void 0===t?",":t)}})},f480:function(t,e,s){"use strict";var i=s("5530");s("d81d"),s("a15b");e["a"]={data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}},watch:{menuState:function(){this.domUpdated()}},created:function(){window.addEventListener("resize",this.domUpdated)},mounted:function(){var t=this;this.$nextTick((function(){t.crearElementos()}))},computed:{menuState:function(){return this.$store.getters.isMenuOpen},navObj:function(){if(!this.elements.length||!this.secuencial)return{};var t=this.elements.map((function(t){return t.id})),e=t.indexOf(this.selected);if(e<0)return{};var s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy:function(){window.removeEventListener("resize",this.domUpdated)},updated:function(){var t=this;this.$nextTick((function(){t.getStateStr()!=t.stateStr&&t.crearElementos()}))},methods:{crearElementos:function(){var t=this;return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((function(e,s){var n=e.data&&e.data.attrs?e.data.attrs:[];return Object(i["a"])({id:t.mainId+s+1,elm:e.elm},n)})),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight:function(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr:function(){return this.$slots.default.map((function(t){return t.elm.outerHTML})).join("")},domUpdated:function(){var t=this;this.rendered=!1,setTimeout((function(){t.rendered=!0}),100)}}}}}]);
//# sourceMappingURL=chunk-f68ebbde.297c76ae.js.map