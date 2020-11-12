(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e5f42b2"],{b682:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{staticClass:"mt-20"},[r("div",{staticClass:"text-center mb-10 mb-lg-20"},[r("h6",{staticClass:"font-size-h1",staticStyle:{color:"rgb(51, 188, 247)","font-family":"verdana","font-size":"500%","font-weight":"bold"}},[t._v(" FORGOT PASSWORD ")]),r("p",{staticClass:"text-muted font-weight-semi-bold",staticStyle:{"font-size":"170%"}},[t._v(" Forgot Password? Enter your email address below to begin the reset process ")])]),r("div",{staticClass:"alert fade alert-danger",class:{show:t.errors.length},attrs:{role:"alert"}},t._l(t.errors,(function(e,s){return r("div",{key:s,staticClass:"alert-text"},[t._v(" "+t._s(e)+" ")])})),0),r("b-form-group",{attrs:{id:"example-input-group-1",label:"","label-for":"example-input-1"}},[r("b-form-input",{staticClass:"form-control form-control-solid h-auto py-6 px-6",staticStyle:{"border-color":"rgb(51, 188, 247)"},attrs:{id:"example-input-1",name:"example-input-1",state:t.validateState("password"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.password.$model,callback:function(e){t.$set(t.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),t.$v.form.password.required?t._e():r("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Password is Required")]),t.$v.form.password.minLength?t._e():r("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Password should atleast 6 characters")])],1),r("b-form-group",{attrs:{id:"example-input-group-1",label:"","label-for":"example-input-1"}},[r("b-form-input",{staticClass:"form-control form-control-solid h-auto py-6 px-6",staticStyle:{"border-color":"rgb(51, 188, 247)"},attrs:{id:"example-input-1",name:"example-input-1",state:t.validateState("confirmPass"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.confirmPass.$model,callback:function(e){t.$set(t.$v.form.confirmPass,"$model",e)},expression:"$v.form.confirmPass.$model"}}),t.$v.form.confirmPass.required?t._e():r("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Confirm Password is Required")]),t.$v.form.confirmPass.sameAsPassword?t._e():r("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("Password is not the same")])],1),r("div",{staticClass:"form-group"},[r("button",{ref:"kt_login_signin_submit",staticClass:"btn btn-primary btn-block font-weight-bold px-9 py-4 my-3 font-size-3",staticStyle:{"background-color":"rgb(51, 188, 247)","border-radius":"7px",color:"white"},attrs:{type:"submit"},on:{click:t.onSubmit}},[t._v(" SUBMIT ")])]),r("div",{staticStyle:{"justify-content":"center",display:"flex"}},[r("router-link",{staticClass:"font-weight-bold font-size-3 ml-2",staticStyle:{color:"rgb(51, 188, 247)"},attrs:{to:{name:"login"}}},[t._v("Back to Login")])],1)],1)],1)},i=[],o=r("5530"),a=r("2f62"),n=r("1dce"),l=r("b5ae"),d=r("3d20"),c=r.n(d),f=r("7b99"),m={mixins:[n["validationMixin"]],name:"login",data:function(){return{form:{password:"",confirmPass:""}}},validations:{form:{password:{required:l["required"],minLength:Object(l["minLength"])(6)},confirmPass:{required:l["required"],sameAsPassword:Object(l["sameAs"])("password")}}},mounted:function(){},methods:{validateState:function(t){var e=this.$v.form[t],r=e.$dirty,s=e.$error;return r?!s:null},resetForm:function(){var t=this;this.form={email:null},this.$nextTick((function(){t.$v.$reset()}))},onSubmit:function(){var t=this;if(this.$v.form.$touch(),!this.$v.form.$anyError){var e=this.$v.form.password.$model,r=this.$refs["kt_login_signin_submit"];r.classList.add("spinner","spinner-light","spinner-right"),f["a"].post("reset-password",{email:this.$route.query.email,password:e}).then((function(){r.classList.remove("spinner","spinner-light","spinner-right"),c.a.fire({title:"Reset Password is Complete",text:"",icon:"success",confirmButtonClass:"btn btn-secondary"}).then((function(){t.$router.push("/login")}))})).catch((function(){c.a.fire({title:"Network error",text:"Please refresh the page or Contact the administrator",icon:"error",confirmButtonClass:"btn btn-secondary"})}))}}},computed:Object(o["a"])({},Object(a["c"])({errors:function(t){return t.auth.errors}}))},u=m,p=(r("e1fd"),r("2877")),b=r("6544"),v=r.n(b),h=r("a523"),g=Object(p["a"])(u,s,i,!1,null,"5eac4e43",null);e["default"]=g.exports;v()(g,{VContainer:h["a"]})},d7dd:function(t,e,r){},e1fd:function(t,e,r){"use strict";var s=r("d7dd"),i=r.n(s);i.a}}]);
//# sourceMappingURL=chunk-3e5f42b2.84b312d7.js.map