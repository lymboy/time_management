var z=Object.defineProperty,S=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var h=(o,s,e)=>s in o?z(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,g=(o,s)=>{for(var e in s||(s={}))P.call(s,e)&&h(o,e,s[e]);if(C)for(var e of C(s))U.call(s,e)&&h(o,e,s[e]);return o},A=(o,s)=>S(o,I(s));var v=(o,s,e)=>new Promise((a,n)=>{var p=u=>{try{l(e.next(u))}catch(m){n(m)}},f=u=>{try{l(e.throw(u))}catch(m){n(m)}},l=u=>u.done?a(u.value):Promise.resolve(u.value).then(p,f);l((e=e.apply(o,s)).next())});import{B as V}from"./BasicModal.d291574e.js";import{C as j}from"./index.d11dcab2.js";import{j as M,cM as D,a8 as N,C as B,a7 as O,bH as T,r as i,s as $,Q as q,w as c,v as r,K as E,y as G,x as H,dc as K,ez as L,u as Q}from"./index.d13d32e3.js";import"./index.1c9272fa.js";import{rules as J}from"./validator.4907239b.js";import{u as W}from"./UserSetting.api.47c39ec8.js";const X=M({name:"user-replace-phone-modal"}),te=M(A(g({},X),{emits:["register","success"],setup(o,{emit:s}){D();const{createMessage:e}=Q(),a=N({phone:"",smscode:""}),n=B(),p=B({}),f={phone:[g({},J.duplicateCheckRule("sys_user","phone",a,{label:"\u624B\u673A\u53F7"})[0]),{pattern:/^1[3456789]\d{9}$/,message:"\u624B\u673A\u53F7\u7801\u683C\u5F0F\u6709\u8BEF"}],smscode:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}]};O.useForm;const l=B(""),[u,{setModalProps:m,closeModal:b}]=T(t=>v(this,null,function*(){n.value.resetFields(),n.value.clearValidate(),m({confirmLoading:!1}),l.value="\u4FEE\u6539\u624B\u673A\u53F7",t.record.smscode="",Object.assign(a,t.record),p.value=t.record}));function w(){return K({mobile:a.phone,smsmode:L.REGISTER})}function R(){return v(this,null,function*(){yield n.value.validateFields(),W(a).then(t=>{t.success?(e.success("\u4FEE\u6539\u624B\u673A\u53F7\u6210\u529F"),s("success"),b()):e.warning(t.message)})})}return(t,d)=>{const k=i("a-input"),_=i("a-form-item"),y=i("a-button"),x=i("a-form");return $(),q(V,H(t.$attrs,{onRegister:E(u),width:"500px",title:l.value,showCancelBtn:!1,showOkBtn:!1}),{default:c(()=>[r(x,{class:"antd-modal-form",ref_key:"formRef",ref:n,model:a,rules:f},{default:c(()=>[r(_,{name:"phone"},{default:c(()=>[r(k,{size:"large",value:a.phone,"onUpdate:value":d[0]||(d[0]=F=>a.phone=F),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["value"])]),_:1}),r(_,{name:"smscode"},{default:c(()=>[r(E(j),{size:"large",value:a.smscode,"onUpdate:value":d[1]||(d[1]=F=>a.smscode=F),placeholder:"\u8F93\u51656\u4F4D\u9A8C\u8BC1\u7801",sendCodeApi:w},null,8,["value"])]),_:1}),r(_,null,{default:c(()=>[r(y,{size:"large",type:"primary",block:"",onClick:R},{default:c(()=>[G(" \u786E\u8BA4 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},16,["onRegister","title"])}}}));export{te as _};
