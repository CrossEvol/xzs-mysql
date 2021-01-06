(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b4bb354"],{2017:function(e,s,o){"use strict";o("cafe")},"7a98":function(e,s,o){},"9ed6":function(e,s,o){"use strict";o.r(s);var t=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("TEKSystemsQuestion Bank Admin Portal")])]),o("el-form-item",{attrs:{prop:"userName"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),o("el-input",{ref:"userName",attrs:{placeholder:"Username",name:"userName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.userName,callback:function(s){e.$set(e.loginForm,"userName",s)},expression:"loginForm.userName"}})],1),o("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(s){e.capsTooltip=s},expression:"capsTooltip"}},[o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},on:{blur:function(s){e.capsTooltip=!1}},nativeOn:{keyup:[function(s){return e.checkCapslock(s)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}]},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),o("el-checkbox",{staticStyle:{"margin-bottom":"20px","margin-left":"5px"},model:{value:e.loginForm.remember,callback:function(s){e.$set(e.loginForm,"remember",s)},expression:"loginForm.remember"}},[e._v("Remember me")]),o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v("Login")])],1),e._m(0)],1)},n=[function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"account-foot-copyright"},[o("span",[e._v("Copyright © 2020 TEKSystems")])])}],a=o("5530"),r=o("2f62"),i=o("7ded"),l={name:"Login",data:function(){var e=function(e,s,o){s.length<5?o(new Error("The user name cannot be less than 5 characters.")):o()},s=function(e,s,o){s.length<5?o(new Error("The password must be no less than 5 characters.")):o()};return{loginForm:{userName:"",password:"",remember:!1},loginRules:{userName:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:s}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1}},created:function(){},mounted:function(){""===this.loginForm.userName?this.$refs.userName.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:Object(a["a"])({checkCapslock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e.shiftKey,o=e.key;o&&1===o.length&&(this.capsTooltip=!!(s&&o>="a"&&o<="z"||!s&&o>="A"&&o<="Z")),"CapsLock"===o&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this,s=this;this.$refs.loginForm.validate((function(o){if(!o)return!1;e.loading=!0,i["a"].login(e.loginForm).then((function(e){e&&1===e.code?(s.setUserName(s.loginForm.userName),s.$router.push({path:"/"})):(s.loading=!1,s.$message({message:e.message,type:"error"}))})).catch((function(e){s.loading=!1}))}))}},Object(r["d"])("user",["setUserName"]))},c=l,p=(o("2017"),o("aec7"),o("2877")),u=Object(p["a"])(c,t,n,!1,null,"11d46f0a",null);s["default"]=u.exports},aec7:function(e,s,o){"use strict";o("7a98")},cafe:function(e,s,o){}}]);