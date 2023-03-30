var q=Object.defineProperty,Y=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var S=(t,e,r)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e||(e={}))V.call(e,r)&&S(t,r,e[r]);if(x)for(var r of x(e))z.call(e,r)&&S(t,r,e[r]);return t},I=(t,e)=>Y(t,U(e));import X from"./BasicTable.7f769694.js";import"./componentMap.6f8f51f6.js";import"./BasicTable.vue_vue_type_style_index_0_lang.734e51fc.js";import"./TableImg.vue_vue_type_style_index_0_lang.c653d5f6.js";import{u as k}from"./useTable.c77f7905.js";import{Z as J,e as l,cC as W,h as _,T as g,j as R,C as Z,X as Q,r as tt,s as et,t as rt,v as F,w as nt,aW as O,y as ot,z as at,K as D}from"./index.d13d32e3.js";import"./BasicForm.e6ef05c4.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./uniqBy.0dfdca3d.js";import"./index.1c9272fa.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./useFormItem.7e3b9788.js";import"./functional.fdb540f5.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./JAddInput.ec01e271.js";import"./areaDataUtil.b0d6c4f6.js";import"./api.ae3b9cbd.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./useForm.1a92e1aa.js";import"./index.9013d2b9.js";import"./useContentHeight.729fdab1.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";import"./RedoOutlined.a7479f77.js";const it=()=>J.get({url:"/actuator/httptrace"},{isTransformResponse:!1});var st="Expected a function",N="__lodash_hash_undefined__",H=1/0,ut="[object Function]",ct="[object GeneratorFunction]",pt="[object Symbol]",ft=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lt=/^\w*$/,dt=/^\./,ht=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mt=/[\\^$.*+?()[\]{}|]/g,_t=/\\(\\)?/g,gt=/^\[object .+?Constructor\]$/,yt=typeof l=="object"&&l&&l.Object===Object&&l,bt=typeof self=="object"&&self&&self.Object===Object&&self,b=yt||bt||Function("return this")();function Ct(t,e){return t==null?void 0:t[e]}function vt(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch(r){}return e}var Tt=Array.prototype,xt=Function.prototype,$=Object.prototype,y=b["__core-js_shared__"],P=function(){var t=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),A=xt.toString,C=$.hasOwnProperty,G=$.toString,St=RegExp("^"+A.call(C).replace(mt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),j=b.Symbol,wt=Tt.splice,It=M(b,"Map"),f=M(Object,"create"),E=j?j.prototype:void 0,B=E?E.toString:void 0;function i(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ft(){this.__data__=f?f(null):{}}function Ot(t){return this.has(t)&&delete this.__data__[t]}function Dt(t){var e=this.__data__;if(f){var r=e[t];return r===N?void 0:r}return C.call(e,t)?e[t]:void 0}function Pt(t){var e=this.__data__;return f?e[t]!==void 0:C.call(e,t)}function jt(t,e){var r=this.__data__;return r[t]=f&&e===void 0?N:e,this}i.prototype.clear=Ft;i.prototype.delete=Ot;i.prototype.get=Dt;i.prototype.has=Pt;i.prototype.set=jt;function c(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(){this.__data__=[]}function Bt(t){var e=this.__data__,r=h(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():wt.call(e,r,1),!0}function Rt(t){var e=this.__data__,r=h(e,t);return r<0?void 0:e[r][1]}function Nt(t){return h(this.__data__,t)>-1}function Ht(t,e){var r=this.__data__,n=h(r,t);return n<0?r.push([t,e]):r[n][1]=e,this}c.prototype.clear=Et;c.prototype.delete=Bt;c.prototype.get=Rt;c.prototype.has=Nt;c.prototype.set=Ht;function s(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(){this.__data__={hash:new i,map:new(It||c),string:new i}}function At(t){return m(this,t).delete(t)}function Gt(t){return m(this,t).get(t)}function Mt(t){return m(this,t).has(t)}function Kt(t,e){return m(this,t).set(t,e),this}s.prototype.clear=$t;s.prototype.delete=At;s.prototype.get=Gt;s.prototype.has=Mt;s.prototype.set=Kt;function h(t,e){for(var r=t.length;r--;)if(Zt(t[r][0],e))return r;return-1}function Lt(t,e){e=Vt(e,t)?[e]:Ut(e);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Jt(e[r++])];return r&&r==n?t:void 0}function qt(t){if(!L(t)||Xt(t))return!1;var e=Qt(t)||vt(t)?St:gt;return e.test(Wt(t))}function Yt(t){if(typeof t=="string")return t;if(T(t))return B?B.call(t):"";var e=t+"";return e=="0"&&1/t==-H?"-0":e}function Ut(t){return K(t)?t:kt(t)}function m(t,e){var r=t.__data__;return zt(e)?r[typeof e=="string"?"string":"hash"]:r.map}function M(t,e){var r=Ct(t,e);return qt(r)?r:void 0}function Vt(t,e){if(K(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||T(t)?!0:lt.test(t)||!ft.test(t)||e!=null&&t in Object(e)}function zt(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Xt(t){return!!P&&P in t}var kt=v(function(t){t=ee(t);var e=[];return dt.test(t)&&e.push(""),t.replace(ht,function(r,n,o,a){e.push(o?a.replace(_t,"$1"):n||r)}),e});function Jt(t){if(typeof t=="string"||T(t))return t;var e=t+"";return e=="0"&&1/t==-H?"-0":e}function Wt(t){if(t!=null){try{return A.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function v(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(st);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var u=t.apply(this,n);return r.cache=a.set(o,u),u};return r.cache=new(v.Cache||s),r}v.Cache=s;function Zt(t,e){return t===e||t!==t&&e!==e}var K=Array.isArray;function Qt(t){var e=L(t)?G.call(t):"";return e==ut||e==ct}function L(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function te(t){return!!t&&typeof t=="object"}function T(t){return typeof t=="symbol"||te(t)&&G.call(t)==pt}function ee(t){return t==null?"":Yt(t)}function re(t,e,r){var n=t==null?void 0:Lt(t,e);return n===void 0?r:n}var ne=re;const d=ne,oe=[{title:"\u8BF7\u6C42\u65F6\u95F4",dataIndex:"timestamp",width:50,customRender({text:t}){return W(t).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u8BF7\u6C42\u65B9\u6CD5",dataIndex:"request.method",width:20,customRender({record:t,column:e}){let r=d(t,e.dataIndex),n="";return r==="GET"&&(n="#87d068"),r==="POST"&&(n="#2db7f5"),r==="PUT"&&(n="#ffba5a"),r==="DELETE"&&(n="#ff5500"),_(g,{color:n},()=>r)}},{title:"\u8BF7\u6C42URL",dataIndex:"request.uri",width:200,customRender({record:t,column:e}){return d(t,e.dataIndex)}},{title:"\u54CD\u5E94\u72B6\u6001",dataIndex:"response.status",width:50,customRender({record:t,column:e}){let r=d(t,e.dataIndex),n="";return r<200?n="pink":r<201?n="green":r<399?n="cyan":r<403?n="orange":r<501&&(n="red"),_(g,{color:n},()=>r)}},{title:"\u8BF7\u6C42\u8017\u65F6",dataIndex:"timeTaken",width:50,customRender({record:t,column:e}){let r=d(t,e.dataIndex),n="red";return r<500?n="green":r<1e3?n="cyan":r<1500&&(n="orange"),_(g,{color:n},()=>`${r} ms`)}}],ae={class:"p-4"},ie={slot:"message"},se=R({name:"monitor-trace"}),Ze=R(I(w({},se),{setup(t){const e=Z([]),[r,{reload:n}]=k({columns:oe,showIndexColumn:!1,bordered:!0,rowKey:"id"});function o(){it().then(a=>{let u=[];for(let p of a.traces)p.request.method!=="OPTIONS"&&p.request.uri.indexOf("httptrace")===-1&&u.push(p);e.value=u})}return Q(()=>{o()}),(a,u)=>{const p=tt("a-divider");return et(),rt("div",ae,[F(D(X),{onRegister:D(r),dataSource:e.value},{tableTitle:nt(()=>[O("div",ie,[ot(" \u5171\u8FFD\u8E2A\u5230 "+at(e.value.length)+" \u6761\u8FD1\u671FHTTP\u8BF7\u6C42\u8BB0\u5F55 ",1),F(p,{type:"vertical"}),O("a",{onClick:o},"\u7ACB\u5373\u5237\u65B0")])]),_:1},8,["onRegister","dataSource"])])}}}));export{Ze as default};
