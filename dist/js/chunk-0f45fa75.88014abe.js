(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f45fa75"],{"10d2":function(t,e,i){"use strict";var n=i("8dd9");e["a"]=n["a"]},"1c87":function(t,e,i){"use strict";i("99af"),i("ac1f"),i("5319"),i("498a"),i("9911");var n=i("ade3"),a=i("5530"),s=i("2b0e"),r=i("5607"),o=i("80d2");e["a"]=s["default"].extend({name:"routable",directives:{Ripple:r["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},methods:{click:function(t){this.$emit("click",t)},generateRouteLink:function(){var t,e,i=this.exact,s=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(n["a"])(t,this.to?"nativeOn":"on",Object(a["a"])(Object(a["a"])({},this.$listeners),{},{click:this.click})),Object(n["a"])(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var r=this.activeClass,o=this.exactActiveClass||r;this.proxyClass&&(r="".concat(r," ").concat(this.proxyClass).trim(),o="".concat(o," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:i,activeClass:r,exactActiveClass:o,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:e,data:s}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass," ").concat(this.proxyClass||"").trim(),i="_vnode.data.class.".concat(e);this.$nextTick((function(){Object(o["o"])(t.$refs.link,i)&&t.toggle()}))}},toggle:function(){}}})},"24b2":function(t,e,i){"use strict";i("a9e3");var n=i("80d2"),a=i("2b0e");e["a"]=a["default"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(n["g"])(this.height),i=Object(n["g"])(this.minHeight),a=Object(n["g"])(this.minWidth),s=Object(n["g"])(this.maxHeight),r=Object(n["g"])(this.maxWidth),o=Object(n["g"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),a&&(t.minWidth=a),s&&(t.maxHeight=s),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"25a8":function(t,e,i){},"2b1c":function(t,e,i){},3206:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return l}));i("99af");var n=i("ade3"),a=i("2b0e"),s=i("d9bd");function r(t,e){return function(){return Object(s["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function o(t,e,i){var s=e&&i?{register:r(e,i),unregister:r(e,i)}:null;return a["default"].extend({name:"registrable-inject",inject:Object(n["a"])({},t,{default:s})})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["default"].extend({name:"registrable-provide",provide:function(){return Object(n["a"])({},t,e?this:{register:this.register,unregister:this.unregister})}})}},"4e82":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("ade3"),a=i("3206");function s(t,e,i){return Object(a["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(n["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}s("itemGroup")},5607:function(t,e,i){"use strict";i("99af"),i("b0c0"),i("a9e3"),i("d3b7"),i("25f0"),i("7435");var n=i("80d2"),a=80;function s(t,e){t.style["transform"]=e,t.style["webkitTransform"]=e}function r(t,e){t.style["opacity"]=e.toString()}function o(t){return"TouchEvent"===t.constructor.name}function l(t){return"KeyboardEvent"===t.constructor.name}var c=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,a=0;if(!l(t)){var s=e.getBoundingClientRect(),r=o(t)?t.touches[t.touches.length-1]:t;n=r.clientX-s.left,a=r.clientY-s.top}var c=0,u=.3;e._ripple&&e._ripple.circle?(u=.15,c=e.clientWidth/2,c=i.center?c:c+Math.sqrt(Math.pow(n-c,2)+Math.pow(a-c,2))/4):c=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var d="".concat((e.clientWidth-2*c)/2,"px"),h="".concat((e.clientHeight-2*c)/2,"px"),p=i.center?d:"".concat(n-c,"px"),m=i.center?h:"".concat(a-c,"px");return{radius:c,scale:u,x:p,y:m,centerX:d,centerY:h}},u={show:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var n=document.createElement("span"),a=document.createElement("span");n.appendChild(a),n.className="v-ripple__container",i.class&&(n.className+=" ".concat(i.class));var o=c(t,e,i),l=o.radius,u=o.scale,d=o.x,h=o.y,p=o.centerX,m=o.centerY,f="".concat(2*l,"px");a.className="v-ripple__animation",a.style.width=f,a.style.height=f,e.appendChild(n);var v=window.getComputedStyle(e);v&&"static"===v.position&&(e.style.position="relative",e.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),s(a,"translate(".concat(d,", ").concat(h,") scale3d(").concat(u,",").concat(u,",").concat(u,")")),r(a,0),a.dataset.activated=String(performance.now()),setTimeout((function(){a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),s(a,"translate(".concat(p,", ").concat(m,") scale3d(1,1,1)")),r(a,.25)}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var i=e[e.length-1];if(!i.dataset.isHiding){i.dataset.isHiding="true";var n=performance.now()-Number(i.dataset.activated),a=Math.max(250-n,0);setTimeout((function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),r(i,0),setTimeout((function(){var e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),a)}}}}};function d(t){return"undefined"===typeof t||!!t}function h(t){var e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched){if(o(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||l(t),i._ripple.class&&(e.class=i._ripple.class),o(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=function(){u.show(t,i,e)},i._ripple.showTimer=window.setTimeout((function(){i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),a)}else u.show(t,i,e)}}function p(t){var e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((function(){p(t)})));window.setTimeout((function(){e._ripple&&(e._ripple.touched=!1)})),u.hide(e)}}function m(t){var e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}var f=!1;function v(t){f||t.keyCode!==n["x"].enter&&t.keyCode!==n["x"].space||(f=!0,h(t))}function b(t){f=!1,p(t)}function g(t,e,i){var n=d(e.value);n||u.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;var a=e.value||{};a.center&&(t._ripple.centered=!0),a.class&&(t._ripple.class=e.value.class),a.circle&&(t._ripple.circle=a.circle),n&&!i?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",p,{passive:!0}),t.addEventListener("touchmove",m,{passive:!0}),t.addEventListener("touchcancel",p),t.addEventListener("mousedown",h),t.addEventListener("mouseup",p),t.addEventListener("mouseleave",p),t.addEventListener("keydown",v),t.addEventListener("keyup",b),t.addEventListener("dragstart",p,{passive:!0})):!n&&i&&y(t)}function y(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",p),t.removeEventListener("touchmove",m),t.removeEventListener("touchcancel",p),t.removeEventListener("mouseup",p),t.removeEventListener("mouseleave",p),t.removeEventListener("keydown",v),t.removeEventListener("keyup",b),t.removeEventListener("dragstart",p)}function x(t,e,i){g(t,e,!1)}function w(t){delete t._ripple,y(t)}function _(t,e){if(e.value!==e.oldValue){var i=d(e.oldValue);g(t,e,i)}}var C={bind:x,unbind:w,update:_};e["a"]=C},7435:function(t,e,i){},"7e2b":function(t,e,i){"use strict";var n=i("2b0e");function a(t){return function(e,i){for(var n in i)Object.prototype.hasOwnProperty.call(e,n)||this.$delete(this.$data[t],n);for(var a in e)this.$set(this.$data[t],a,e[a])}}e["a"]=n["default"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",a("attrs$"),{immediate:!0}),this.$watch("$listeners",a("listeners$"),{immediate:!0})}})},8336:function(t,e,i){"use strict";i("4160"),i("caad"),i("c7cd");var n=i("53ca"),a=i("3835"),s=i("5530"),r=(i("86cc"),i("10d2")),o=(i("99af"),i("a9e3"),i("8d4f"),i("a9ad")),l=i("80d2"),c=o["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(l["g"])(this.calculatedSize),width:Object(l["g"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),u=c,d=i("4e82"),h=i("f2e7"),p=i("fe6c"),m=i("1c87"),f=i("af2b"),v=i("58df"),b=i("d9bd"),g=Object(v["a"])(r["a"],m["a"],p["a"],f["a"],Object(d["a"])("btnToggle"),Object(h["b"])("inputValue"));e["a"]=g.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-btn":!0},m["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},contained:function(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},isFlat:function(){return Boolean(this.icon||this.text||this.outlined)},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(s["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(a["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(b["a"])(n,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(u,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.isFlat?this.setTextColor:this.setBackgroundColor,a=this.generateRouteLink(),s=a.tag,r=a.data;return"button"===s&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(Object(n["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?r:i(this.color,r),e)}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},"8dd9":function(t,e,i){"use strict";var n=i("5530"),a=(i("25a8"),i("7e2b")),s=i("a9ad"),r=(i("a9e3"),i("ade3")),o=i("2b0e"),l=o["default"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(r["a"])({},"elevation-".concat(this.elevation),!0)}}}),c=i("24b2"),u=i("a236"),d=i("7560"),h=i("58df");e["a"]=Object(h["a"])(a["a"],s["a"],l,c["a"],u["a"],d["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},"96b4":function(t,e,i){"use strict";var n=i("2b1c"),a=i.n(n);a.a},9911:function(t,e,i){"use strict";var n=i("23e7"),a=i("857a"),s=i("af03");n({target:"String",proto:!0,forced:s("link")},{link:function(t){return a(this,"a","href",t)}})},a236:function(t,e,i){"use strict";i("a15b"),i("ac1f"),i("1276");var n=i("ade3"),a=i("b85c"),s=i("2b0e");e["a"]=s["default"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){var i,s=e.split(" "),r=Object(a["a"])(s);try{for(r.s();!(i=r.n()).done;){var o=i.value;t.push("rounded-".concat(o))}}catch(l){r.e(l)}finally{r.f()}}else e&&t.push("rounded");return t.length>0?Object(n["a"])({},t.join(" "),!0):{}}}})},a9ad:function(t,e,i){"use strict";i("d3b7"),i("ac1f"),i("25f0"),i("1276"),i("498a");var n=i("3835"),a=i("ade3"),s=i("5530"),r=i("2b0e"),o=i("d9bd"),l=i("7bc6");e["a"]=r["default"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?(Object(o["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(o["b"])("class must be an object",this),e):(Object(l["d"])(t)?e.style=Object(s["a"])(Object(s["a"])({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=Object(s["a"])(Object(s["a"])({},e.class),{},Object(a["a"])({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return Object(o["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(o["b"])("class must be an object",this),e;if(Object(l["d"])(t))e.style=Object(s["a"])(Object(s["a"])({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var i=t.toString().trim().split(" ",2),r=Object(n["a"])(i,2),c=r[0],u=r[1];e.class=Object(s["a"])(Object(s["a"])({},e.class),{},Object(a["a"])({},c+"--text",!0)),u&&(e.class["text--"+u]=!0)}return e}}})},a9ca:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"},[i("span",{staticClass:"font-weight-bold font-size-3 text-dark-60"},[t._v("Already have an account?")]),i("router-link",{staticClass:"font-weight-bold font-size-3 ml-2",staticStyle:{color:"#0093e9"},attrs:{to:{name:"login"}}},[t._v("Sign In!")])],1),i("v-container",{staticClass:"mt-20"},[i("div",{staticClass:"text-center mb-10 mb-lg-20"},[i("h3",{staticClass:"font-size-h1"},[t._v("Sign Up")]),i("p",{staticClass:"text-muted font-weight-semi-bold"},[t._v(" Enter your details to create your account ")])]),i("b-form",{staticClass:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}}},[i("b-row",[i("b-col",{attrs:{sm:"6"}},[i("b-form-group",{attrs:{id:"example-input-group-0",label:"","label-for":"example-input-0"}},[i("b-form-input",{staticClass:"form-control form-control-solid h-auto py-5 px-6",attrs:{id:"example-input-0",name:"example-input-0",state:t.validateState("username"),"aria-describedby":"input-0-live-feedback",placeholder:"Username"},on:{input:t.checkUsername},model:{value:t.$v.form.username.$model,callback:function(e){t.$set(t.$v.form.username,"$model",e)},expression:"$v.form.username.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"input-0-live-feedback"}},[t._v("Username is required.")]),t.exist?i("span",{staticStyle:{color:"red"}},[t._v("Username is Unavailable.")]):t._e()],1)],1),i("b-col",{attrs:{sm:"6"}},[i("b-form-group",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.accountType,expression:"form.accountType"}],staticClass:"form-control form-control-solid h-auto py-5 px-6",staticStyle:{"border-color":"rgb(51, 188, 247)"},attrs:{name:"account",state:t.validateState("accountType")},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"accountType",e.target.multiple?i:i[0])}}},[i("option",{attrs:{disabled:"",value:""}},[t._v("Account Type")]),i("option",{attrs:{value:"user"}},[t._v("User")]),i("option",{attrs:{value:"organization"}},[t._v("Organization")])]),i("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Account Type is required")])],1)],1)],1),i("b-form-group",{attrs:{id:"example-input-group-1",label:"","label-for":"example-input-1"}},[i("b-form-input",{staticClass:"form-control form-control-solid h-auto py-5 px-6",attrs:{id:"example-input-1",name:"example-input-1",state:t.validateState("email"),"aria-describedby":"input-1-live-feedback",placeholder:"Email address"},on:{input:t.checkEmail},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),i("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Email is required and a valid email address.")]),t.emailexist?i("span",{staticStyle:{color:"red"}},[t._v("Email is Unavailable.")]):t._e()],1),i("b-form-group",{attrs:{id:"example-input-group-2",label:"","label-for":"example-input-2"}},[i("b-input-group",[i("b-form-input",{staticClass:"form-control form-control-solid h-auto py-5 px-6",attrs:{type:!1===t.showPass?"text":"password",id:"example-input-2",name:"example-input-2",state:t.validateState("password"),"aria-describedby":"input-2-live-feedback",placeholder:"Password"},model:{value:t.$v.form.password.$model,callback:function(e){t.$set(t.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),i("b-input-group-append",[i("b-button",{on:{click:function(e){t.showPass=!t.showPass}}},[i("i",{class:!1===t.showPass?"fa fa-eye":"fa fa-eye-slash"})])],1)],1),i("b-form-invalid-feedback",{attrs:{id:"input-2-live-feedback"}},[t._v("Password is required.")])],1),i("div",{staticClass:"form-group d-flex flex-wrap justify-content-between align-items-center"},[i("v-btn",{attrs:{text:""},on:{click:function(e){return t.$router.push("login")}}},[t._v(" Return to Login ")]),i("button",{ref:"kt_login_signup_submit",staticClass:"btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3",attrs:{type:"submit"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}}},[t._v(" Register ")])],1)],1)],1)],1)},a=[],s=i("854b"),r=i("1dce"),o=i("b5ae"),l=i("3d20"),c=i.n(l),u=i("7b99"),d={mixins:[r["validationMixin"]],name:"register",data:function(){return{form:{email:"admin@demo.com",password:"demo",username:"",accountType:""},showPass:!0,isExist:!1,emailexist:!1}},validations:{form:{username:{required:o["required"],minLength:Object(o["minLength"])(3)},email:{required:o["required"],email:o["email"]},password:{required:o["required"],minLength:Object(o["minLength"])(3)},accountType:{required:o["required"]}}},mounted:function(){},computed:{exist:function(){return this.isExist}},methods:{validateState:function(t){var e=this.$v.form[t],i=e.$dirty,n=e.$error;return i?!n:null},checkUsername:function(t){var e=this;u["a"].post("checUsername",{username:t}).then((function(t){"Username is Unavailable"===t.data?e.isExist=!0:e.isExist=!1}))},checkEmail:function(t){var e=this;u["a"].post("checkEmail",{email:t}).then((function(t){"Email is Unavailable"===t.data?e.emailexist=!0:e.emailexist=!1}))},resetForm:function(){var t=this;this.form={username:null,email:null,password:null,accountType:null},this.$nextTick((function(){t.$v.$reset()}))},onSubmit:function(){var t=this;if(this.$v.form.$touch(),this.$v.form.$anyError)alert("Please avoid errors");else if(null===this.form.email||null===this.form.username||null===this.password||!0===this.exist||!0===this.emailexist)alert("fields are required");else{var e=this.$v.form.username.$model,i=this.$v.form.email.$model,n=this.$v.form.password.$model;this.$store.dispatch(s["b"]);var a=this.$refs["kt_login_signup_submit"];a.classList.add("spinner","spinner-light","spinner-right"),"organization"===localStorage.getItem("plan")&&"organization"===this.form.accountType?this.$store.dispatch(s["c"],{email:i,password:n,username:e,roleType:"AGENCY"}).then((function(){t.$router.push({name:"login"}),t.$store.commit("setplan","organization")})).catch((function(){c.a.fire({title:"Network error",text:"Please refresh the page or Contact the administrator",icon:"error",confirmButtonClass:"btn btn-secondary"})})):"user_standard"===localStorage.getItem("plan")&&"user"===this.form.accountType?this.$store.dispatch(s["c"],{email:i,password:n,username:e,roleType:"STANDARD"}).then((function(){t.$router.push({name:"login"}),t.$store.commit("setplan","user_standard")})).catch((function(){c.a.fire({title:"Network error",text:"Please refresh the page or Contact the administrator",icon:"error",confirmButtonClass:"btn btn-secondary"})})):"user"===this.form.accountType?this.$store.dispatch(s["c"],{email:i,password:n,username:e,roleType:"FREE"}).then((function(){t.$router.push({name:"login"}),t.$store.commit("setplan","user_free")})).catch((function(){c.a.fire({title:"Network error",text:"Please refresh the page or Contact the administrator",icon:"error",confirmButtonClass:"btn btn-secondary"})})):(a.classList.remove("spinner","spinner-light","spinner-right"),c.a.fire({title:"",text:"Please select the plan that you want to avail appropriate to your chosen account!",icon:"error",confirmButtonClass:"btn btn-secondary"}).then((function(){t.$router.push("/banner")})))}}}},h=d,p=(i("96b4"),i("2877")),m=i("6544"),f=i.n(m),v=i("8336"),b=i("a523"),g=Object(p["a"])(h,n,a,!1,null,"00b631ec",null);e["default"]=g.exports;f()(g,{VBtn:v["a"],VContainer:b["a"]})},af2b:function(t,e,i){"use strict";i("c96a");var n=i("2b0e");e["a"]=n["default"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},c7cd:function(t,e,i){"use strict";var n=i("23e7"),a=i("857a"),s=i("af03");n({target:"String",proto:!0,forced:s("fixed")},{fixed:function(){return a(this,"tt","","")}})},c96a:function(t,e,i){"use strict";var n=i("23e7"),a=i("857a"),s=i("af03");n({target:"String",proto:!0,forced:s("small")},{small:function(){return a(this,"small","","")}})},f2e7:function(t,e,i){"use strict";i.d(e,"b",(function(){return s}));var n=i("ade3"),a=i("2b0e");function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return a["default"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(n["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(n["a"])(t,e,(function(t){this.isActive=!!t})),Object(n["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var r=s();e["a"]=r},fe6c:function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));var n=i("2b0e"),a=i("80d2"),s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n["default"].extend({name:"positionable",props:t.length?Object(a["m"])(s,t):s})}e["a"]=r()}}]);
//# sourceMappingURL=chunk-0f45fa75.88014abe.js.map