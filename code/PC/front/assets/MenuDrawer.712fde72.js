var E=Object.defineProperty;var d=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,F=(e,t)=>{for(var o in t||(t={}))P.call(t,o)&&f(e,o,t[o]);if(d)for(var o of d(t))I.call(t,o)&&f(e,o,t[o]);return e};var m=(e,t,o)=>new Promise((r,n)=>{var c=u=>{try{a(o.next(u))}catch(l){n(l)}},i=u=>{try{a(o.throw(u))}catch(l){n(l)}},a=u=>u.done?r(u.value):Promise.resolve(u.value).then(c,i);a((o=o.apply(e,t)).next())});import{B as y}from"./BasicForm.e6ef05c4.js";import"./componentMap.6f8f51f6.js";import{u as S}from"./useForm.1a92e1aa.js";import"./JAddInput.ec01e271.js";import{h as b,I as _,T as R,j as x,C as M,m as N,K as w,q as k,r as h,s as T,Q as V,w as A,v as G,x as $}from"./index.d13d32e3.js";import{B as q,u as L}from"./index.57c0270a.js";import{c as O}from"./system.6dec2c3b.js";const te=[{title:"\u83DC\u5355\u540D\u79F0",dataIndex:"menuName",width:200,align:"left"},{title:"\u56FE\u6807",dataIndex:"icon",width:50,customRender:({record:e})=>b(_,{icon:e.icon})},{title:"\u6743\u9650\u6807\u8BC6",dataIndex:"permission",width:180},{title:"\u7EC4\u4EF6",dataIndex:"component"},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:50},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:e})=>{const o=~~e.status===0,r=o?"green":"red",n=o?"\u542F\u7528":"\u505C\u7528";return b(R,{color:r},()=>n)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180}],j=e=>e==="0",B=e=>e==="1",p=e=>e==="2",ue=[{field:"menuName",label:"\u83DC\u5355\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},colProps:{span:8}}],U=[{field:"type",label:"\u83DC\u5355\u7C7B\u578B",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u76EE\u5F55",value:"0"},{label:"\u83DC\u5355",value:"1"},{label:"\u6309\u94AE",value:"2"}]},colProps:{lg:24,md:24}},{field:"menuName",label:"\u83DC\u5355\u540D\u79F0",component:"Input",required:!0},{field:"parentMenu",label:"\u4E0A\u7EA7\u83DC\u5355",component:"TreeSelect",componentProps:{replaceFields:{title:"menuName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"orderNo",label:"\u6392\u5E8F",component:"InputNumber",required:!0},{field:"icon",label:"\u56FE\u6807",component:"IconPicker",required:!0,ifShow:({values:e})=>!p(e.type)},{field:"routePath",label:"\u8DEF\u7531\u5730\u5740",component:"Input",required:!0,ifShow:({values:e})=>!p(e.type)},{field:"component",label:"\u7EC4\u4EF6\u8DEF\u5F84",component:"Input",ifShow:({values:e})=>B(e.type)},{field:"permission",label:"\u6743\u9650\u6807\u8BC6",component:"Input",ifShow:({values:e})=>!j(e.type)},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u7981\u7528",value:"1"}]}},{field:"isExt",label:"\u662F\u5426\u5916\u94FE",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u5426",value:"0"},{label:"\u662F",value:"1"}]},ifShow:({values:e})=>!p(e.type)},{field:"keepalive",label:"\u662F\u5426\u7F13\u5B58",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u5426",value:"0"},{label:"\u662F",value:"1"}]},ifShow:({values:e})=>B(e.type)},{field:"show",label:"\u662F\u5426\u663E\u793A",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u662F",value:"0"},{label:"\u5426",value:"1"}]},ifShow:({values:e})=>!p(e.type)}],z=x({name:"MenuDrawer",components:{BasicDrawer:q,BasicForm:y},emits:["success","register"],setup(e,{emit:t}){const o=M(!0),[r,{resetFields:n,setFieldsValue:c,updateSchema:i,validate:a}]=S({labelWidth:100,schemas:U,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[u,{setDrawerProps:l,closeDrawer:D}]=L(s=>m(this,null,function*(){n(),l({confirmLoading:!1}),o.value=!!(s!=null&&s.isUpdate),w(o)&&c(F({},s.record));const C=yield O();i({field:"parentMenu",componentProps:{treeData:C}})})),g=N(()=>w(o)?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355");function v(){return m(this,null,function*(){try{const s=yield a();l({confirmLoading:!0}),console.log(s),D(),t("success")}finally{l({confirmLoading:!1})}})}return{registerDrawer:u,registerForm:r,getTitle:g,handleSubmit:v}}});function K(e,t,o,r,n,c){const i=h("BasicForm"),a=h("BasicDrawer");return T(),V(a,$(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:A(()=>[G(i,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const Q=k(z,[["render",K]]),ne=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{Q as M,ne as a,te as c,ue as s};
