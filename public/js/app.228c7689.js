(function(t){function e(e){for(var n,i,s=e[0],u=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"20c9":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-container",[r("top-nav"),r("router-view")],1)],1)},o=[],i=r("d4ec"),s=r("262e"),u=r("2caf"),c=r("9ab4"),l=r("60a3"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{staticClass:"mb-3 pl-0 pr-0",attrs:{toggleable:"lg",type:"light"}},[r("b-navbar-brand",{attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.$router.goPage("/")}}},[r("b-navbar-brand",{staticClass:"text-danger",attrs:{href:"#"}},[r("img",{staticClass:"d-inline-block align-top",staticStyle:{width:"30px"},attrs:{src:"/assets/pizza.png",alt:"Pizza Hot"}}),t._v(" Pizza Hot ")])],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[t.isLoggedIn?r("fragment",[r("b-nav-item",{on:{click:function(e){return t.$router.goPage("/profile")}}},[t._v("Profile")]),r("b-nav-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Log Out")])],1):r("fragment",[r("b-nav-item",{on:{click:function(e){return t.$router.goPage("/login")}}},[t._v("Login")]),r("b-nav-item",{on:{click:function(e){return t.$router.goPage("/register")}}},[t._v("Register")])],1)],1)],1)],1)},p=[],m=r("bee2"),b=function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(i["a"])(this,r),e.apply(this,arguments)}return Object(m["a"])(r,[{key:"logout",value:function(){var t=this;this.$store.dispatch("logout").then((function(){t.$router.push("/")}))}},{key:"isLoggedIn",get:function(){return this.$store.getters.isLoggedIn}}]),r}(l["b"]);b=Object(c["a"])([l["a"]],b);var h=b,d=h,g=r("2877"),v=Object(g["a"])(d,f,p,!1,null,null,null),k=v.exports,j=function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(i["a"])(this,r),e.apply(this,arguments)}return r}(l["b"]);j=Object(c["a"])([Object(l["a"])({components:{TopNav:k}})],j);var w=j,O=w,y=Object(g["a"])(O,a,o,!1,null,null,null),_=y.exports,x=(r("45fc"),r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" asdasd ")])},E=[],P=function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(i["a"])(this,r),e.apply(this,arguments)}return r}(l["b"]);P=Object(c["a"])([l["a"]],P);var R=P,S=R,L=Object(g["a"])(S,$,E,!1,null,null,null),z=L.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("b-form-group",{attrs:{state:t.state("login"),"invalid-feedback":t.error("login")}},[r("b-form-input",{attrs:{placeholder:"Enter login"},model:{value:t.form.login,callback:function(e){t.$set(t.form,"login",e)},expression:"form.login"}})],1),r("b-form-group",{attrs:{state:t.state("password"),"invalid-feedback":t.error("password")}},[r("b-form-input",{attrs:{placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{"force-show":!!t.commonError}},[t._v(t._s(t.commonError))]),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Login")])],1)},H=[],T=(r("a15b"),function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.form={login:"",password:""},t.commonError="",t.errors={},t}return Object(m["a"])(r,[{key:"state",value:function(t){return this.errors&&!(t in this.errors)}},{key:"error",value:function(t){return this.errors&&t in this.errors?this.errors[t].join(", "):""}},{key:"login",value:function(){var t=this;this.$store.dispatch("login",this.form).then((function(){return t.$router.push("/")})).catch((function(e){t.errors=e.errors,t.commonError=e.error}))}}]),r}(l["b"]));T=Object(c["a"])([l["a"]],T);var q=T,A=q,C=Object(g["a"])(A,I,H,!1,null,null,null),D=C.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[r("b-form-group",{attrs:{label:"Login:","label-for":"input-1",state:t.state("login"),"invalid-feedback":t.error("login")}},[r("b-form-input",{attrs:{id:"input-1",placeholder:"Enter login"},model:{value:t.form.login,callback:function(e){t.$set(t.form,"login",e)},expression:"form.login"}})],1),r("b-form-group",{attrs:{label:"Email address:","label-for":"input-2",description:"We'll never share your email with anyone else.",state:t.state("email"),"invalid-feedback":t.error("email")}},[r("b-form-input",{attrs:{id:"input-2",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("b-form-group",{attrs:{label:"Your Name:","label-for":"input-3",state:t.state("name"),"invalid-feedback":t.error("name")}},[r("b-form-input",{attrs:{id:"input-3",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"Password:","label-for":"input-4",state:t.state("password"),"invalid-feedback":t.error("password")}},[r("b-form-input",{attrs:{id:"input-4",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-form-group",{attrs:{label:"Password confirmation:","label-for":"input-5",state:t.state("password_confirmation"),"invalid-feedback":t.error("password_confirmation")}},[r("b-form-input",{attrs:{id:"input-5",placeholder:"Enter password again"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),r("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{"force-show":!!t.commonError}},[t._v(t._s(t.commonError))]),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Register")])],1)},M=[],N=function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.form={name:"",login:"",email:"",password:"",password_confirmation:""},t.commonError="",t.errors={},t}return Object(m["a"])(r,[{key:"state",value:function(t){return!(t in this.errors)}},{key:"error",value:function(t){return t in this.errors?this.errors[t].join(", "):""}},{key:"register",value:function(){var t=this;this.$store.dispatch("register",this.form).then((function(){return t.$router.push("/")})).catch((function(e){t.errors=e.errors,t.commonError=e.error}))}}]),r}(l["b"]);N=Object(c["a"])([l["a"]],N);var B=N,J=B,Y=Object(g["a"])(J,U,M,!1,null,null,null),F=Y.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("This page is protected by auth")])])}],K={},Q=Object(g["a"])(K,G,W,!1,null,null,null),V=Q.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-jumbotron",{attrs:{header:"404 Not Found",lead:"Oops!"}},[r("p",[t._v("Sorry, an error has occured, Requested page not found!")]),r("b-button",{attrs:{variant:"primary",href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.goPage("/")}}},[t._v("Go to main page")])],1)],1)},Z=[],tt=function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(i["a"])(this,r),e.apply(this,arguments)}return r}(l["b"]);tt=Object(c["a"])([l["a"]],tt);var et=tt,rt=et,nt=Object(g["a"])(rt,X,Z,!1,null,null,null),at=nt.exports,ot=r("2f62"),it=(r("99af"),r("96cf"),r("1da1")),st=r("bc3a"),ut=r.n(st),ct=function(){function t(){var e;Object(i["a"])(this,t),this.instance=ut.a.create(),this.baseUrl=null!==(e="/api/")&&void 0!==e?e:"/",this.token="",this.instance.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token"),this.instance.interceptors.response.use((function(t){return 401===t.status&&pt.dispatch("logout"),t}),(function(t){return t.response&&t.response.data?Promise.reject(t.response.data):Promise.reject(t.message)}))}return Object(m["a"])(t,[{key:"setHeader",value:function(t){this.token=t,localStorage.setItem("token",t),this.instance.defaults.headers.common["Authorization"]="Bearer "+t}},{key:"post",value:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.instance.post("".concat(this.baseUrl).concat(e),r,n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(e,r,n){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.instance.get("".concat(this.baseUrl).concat(e),r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.instance.delete("".concat(this.baseUrl).concat(e),r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"patch",value:function(){var t=Object(it["a"])(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.instance.patch("".concat(this.baseUrl).concat(e),r,n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(e,r,n){return t.apply(this,arguments)}return e}()}]),t}(),lt=new ct,ft=lt;n["default"].use(ot["b"]);var pt=new ot["a"]({state:{token:localStorage.getItem("token"),status:""},getters:{isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status}},mutations:{authRequest:function(t){t.status="loading"},authSuccess:function(t,e){t.status="success",t.token=e,ft.setHeader(e)},authError:function(t){t.status="error",t.token=""},logout:function(t){t.status="",t.token="",ft.setHeader("")}},actions:{register:function(t,e){var r=t.commit;return new Promise((function(t,n){r("authRequest"),ft.post("users/register",e).then((function(e){var n=e.data.token;r("authSuccess",n),t(e)})).catch((function(t){r("authError",t),n(t)}))}))},login:function(t,e){var r=t.commit;return new Promise((function(t,n){r("authRequest"),ft.post("users/login",e).then((function(e){var n=e.data.token;r("authSuccess",n),t(e)})).catch((function(t){r("authError",t),n(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t,r){ft.get("users/logout").then((function(r){var n=r.data;e("logout"),t(n)})).catch((function(t){e("authError",t),r(t)}))}))},checkAuth:function(t){var e=t.commit;if(localStorage.getItem("token"))return new Promise((function(t){ft.get("token/validate").then((function(e){t(e)})).catch((function(r){e("logout"),t(r)}))}))}},modules:{}}),mt=[{path:"/",name:"Home",component:z,meta:{title:"Pizza Hot"}},{path:"/login",name:"login",component:D,meta:{title:"Login page"}},{path:"/register",name:"register",component:F,meta:{title:"Register page"}},{path:"/profile",name:"profile",component:V,meta:{title:"Profile page",requiresAuth:!0}},{path:"*",component:at,meta:{title:"Not found"}}],bt=function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(t){return Object(i["a"])(this,r),e.call(this,t)}return Object(m["a"])(r,[{key:"goPage",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];r&&this.app.$nextTick((function(){return e.app.$bvToast.toast("You are not auth",{title:"Redirect to auth",variant:"dark",solid:!0})})),ht.currentRoute.fullPath!=t&&ht.push(t)}}]),r}(x["a"]);n["default"].use(bt);var ht=new bt({mode:"history",base:"/",routes:mt});ht.beforeEach((function(t,e,r){document.title=t.meta.title,Promise.all([pt.dispatch("checkAuth")]).then((function(){if(t.matched.some((function(t){return t.meta.requiresAuth}))){if(console.log(pt.getters.isLoggedIn),pt.getters.isLoggedIn)return void r();ht.goPage("/login",!0)}else r()}))}));var dt=ht,gt=(r("f9e3"),r("2dd8"),r("5f5b")),vt=r("3f08");r("20c9");n["default"].use(gt["a"]),n["default"].use(vt["a"]),n["default"].config.productionTip=!1,new n["default"]({router:dt,store:pt,render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.228c7689.js.map