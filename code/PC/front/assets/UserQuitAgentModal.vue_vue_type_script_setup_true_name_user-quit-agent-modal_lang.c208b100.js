var A=Object.defineProperty,F=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var Y=(r,t,e)=>t in r?A(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,p=(r,t)=>{for(var e in t||(t={}))L.call(t,e)&&Y(r,e,t[e]);if(w)for(var e of w(t))R.call(t,e)&&Y(r,e,t[e]);return r},h=(r,t)=>F(r,C(t));var d=(r,t,e)=>new Promise((f,u)=>{var g=o=>{try{i(e.next(o))}catch(n){u(n)}},M=o=>{try{i(e.throw(o))}catch(n){u(n)}},i=o=>o.done?f(o.value):Promise.resolve(o.value).then(g,M);i((e=e.apply(r,t)).next())});import{B as T}from"./index.1c9272fa.js";import{B as k}from"./BasicForm.e6ef05c4.js";import"./componentMap.6f8f51f6.js";import{u as v}from"./useForm.1a92e1aa.js";import"./JAddInput.ec01e271.js";import{j as B,bH as x,cC as l,s as E,Q as N,w as Q,v as V,K as c,x as b}from"./index.d13d32e3.js";import{c as j}from"./user.data.7f6ef8dc.js";import{h as P,i as S}from"./user.api.bbb5fbe4.js";const q=B({name:"user-quit-agent-modal"}),X=B(h(p({},q),{emits:["success","register"],setup(r,{emit:t}){const[e,{resetFields:f,setFieldsValue:u,validate:g,clearValidate:M}]=v({schemas:j,showActionButtonGroup:!1}),[i,{setModalProps:o,closeModal:n}]=x(s=>d(this,null,function*(){yield f(),o({confirmLoading:!1}),o({confirmLoading:!1});const a=yield P({userName:s.userName});s=a.result?a.result:s;let m=new Date;s.startTime||(s.startTime=l(m).format("YYYY-MM-DD HH:mm:ss")),s.endTime||(s.endTime=H(m)),yield u(p({},s))}));function D(){return d(this,null,function*(){try{const s=yield g();o({confirmLoading:!0}),yield S(s),n(),t("success")}finally{o({confirmLoading:!1})}})}function H(s){let a=s.getFullYear()+30,m=l(s).format("MM"),_=l(s).format("DD"),y=l(s).format("HH:mm:ss");return console.log("\u5E74\u6708\u65E5",a+"-"+m+"-"+_),l(a+"-"+m+"-"+_+" "+y).format("YYYY-MM-DD HH:mm:ss")}return(s,a)=>(E(),N(c(T),b(s.$attrs,{onRegister:c(i),width:800,title:"\u79BB\u804C\u4EA4\u63A5",onOk:D}),{default:Q(()=>[V(c(k),{onRegister:c(e)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}}));export{X as _};
