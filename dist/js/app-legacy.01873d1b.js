(function(){"use strict";var e={9851:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[e._v("test one")]),e._v(" | "),n("router-link",{attrs:{to:"/testTwo"}},[e._v("test two")])],1),n("router-view")],1)},i=[],u=n(1001),a={},c=(0,u.Z)(a,o,i,!1,null,null,null),s=c.exports,l=(n(1539),n(8783),n(3948),n(2809)),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"div1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputNumber,expression:"inputNumber"}],domProps:{value:e.inputNumber},on:{keypress:function(t){return e.isNumber(t)},input:function(t){t.target.composing||(e.inputNumber=t.target.value)}}})]),n("div",{staticClass:"div2"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},[n("option",{domProps:{value:"prime"}},[e._v("是否質數")]),n("option",{domProps:{value:"fb"}},[e._v("是否費氏數列")])])]),n("div",{staticClass:"div3"},[e._v(" "+e._s(e.result)+" ")])])},d=[],m=(n(6699),n(9653),{name:"HomeView",components:{},data:function(){return{selected:"prime",inputNumber:null,result:null}},mounted:function(){this.checkNumber(this.selected,this.inputNumber)},methods:{isNumber:function(e){var t=["0","1","2","3","4","5","6","7","8","9"],n=e.key;t.includes(n)||e.preventDefault()},isPrime:function(e){if(e<2)return!1;for(var t=2;t<e;t++)if(e%t===0)return!1;return!0},isFb:function(e){for(var t=[0,1],n=!1,r=2;r<=e;r++){if(t[r]=t[r-1]+t[r-2],t[r]>e&&e!=t[r])break;if(t[r]==e){n=!0;break}}return n},checkNumber:function(e,t){Number(t)||0===t?"prime"===e?this.result=this.isPrime(t):"fb"===e&&(this.result=this.isFb(t)):this.result="不是數字"}},watch:{inputNumber:{handler:function(e){this.checkNumber(this.selected,e)}},selected:{handler:function(e){this.checkNumber(e,this.inputNumber)}}}}),p=m,v=(0,u.Z)(p,f,d,!1,null,"53e0c01d",null),h=v.exports;r.Z.use(l.Z);var b=[{path:"/",name:"home",component:h},{path:"/testTwo",name:"testTwo",component:function(){return n.e(443).then(n.bind(n,7649))}}],g=new l.Z({routes:b}),y=g;r.Z.config.productionTip=!1,new r.Z({router:y,render:function(e){return e(s)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about-legacy.4bdb13b4.js"}}(),function(){n.miniCssF=function(e){return"css/about.db604c71.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nut_exam:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(t&&t(r);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunknut_exam"]=self["webpackChunknut_exam"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9851)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.01873d1b.js.map