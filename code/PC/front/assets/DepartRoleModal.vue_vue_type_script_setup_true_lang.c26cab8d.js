var R=Object.defineProperty;var g=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var h=(o,s,e)=>s in o?R(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,v=(o,s)=>{for(var e in s||(s={}))_.call(s,e)&&h(o,e,s[e]);if(g)for(var e of g(s))y.call(s,e)&&h(o,e,s[e]);return o};var d=(o,s,e)=>new Promise((i,c)=>{var m=r=>{try{n(e.next(r))}catch(l){c(l)}},u=r=>{try{n(e.throw(r))}catch(l){c(l)}},n=r=>r.done?i(r.value):Promise.resolve(r.value).then(m,u);n((e=e.apply(o,s)).next())});import{B as b}from"./BasicForm.e6ef05c4.js";import"./componentMap.6f8f51f6.js";import{u as j}from"./useForm.1a92e1aa.js";import"./JAddInput.ec01e271.js";import{j as k,bj as x,C as w,m as C,bH as I,K as a,s as U,Q as O,w as S,v as D,x as L}from"./index.d13d32e3.js";import{B as P}from"./index.1c9272fa.js";import{h as V}from"./depart.user.api.fdf3773d.js";import{b as q}from"./depart.user.data.f92c25d5.js";const T=k({__name:"DepartRoleModal",props:{departId:{require:!0,type:String}},emits:["success","register"],setup(o,{emit:s}){const e=o;x("prefixCls");const i=w(!0),c=w({}),m=C(()=>i.value?"\u7F16\u8F91":"\u65B0\u589E"),[u,{resetFields:n,setFieldsValue:r,validate:l,updateSchema:A}]=j({schemas:q,showActionButtonGroup:!1}),[B,{setModalProps:f,closeModal:F}]=I(t=>d(this,null,function*(){yield n(),i.value=a(t==null?void 0:t.isUpdate);let p=a(t==null?void 0:t.record);typeof p=="object"&&(c.value=p,yield r(v({},p)))}));function M(){return d(this,null,function*(){try{f({confirmLoading:!0});let t=yield l();t.departId=a(e.departId),yield V(t,i.value),F(),s("success",{isUpdate:a(i),values:t})}finally{f({confirmLoading:!1})}})}return(t,p)=>(U(),O(a(P),L({title:a(m),width:800},t.$attrs,{onOk:M,onRegister:a(B)}),{default:S(()=>[D(a(b),{onRegister:a(u)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{T as _};