var q=Object.defineProperty,z=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var y=(o,n,t)=>n in o?q(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,E=(o,n)=>{for(var t in n||(n={}))J.call(n,t)&&y(o,t,n[t]);if(h)for(var t of h(n))W.call(n,t)&&y(o,t,n[t]);return o},A=(o,n)=>z(o,G(n));var u=(o,n,t)=>new Promise((m,p)=>{var C=s=>{try{f(t.next(s))}catch(r){p(r)}},i=s=>{try{f(t.throw(s))}catch(r){p(r)}},f=s=>s.done?m(s.value):Promise.resolve(s.value).then(C,i);f((t=t.apply(o,n)).next())});import{B as X}from"./index.1c9272fa.js";import{a as Y,b as Z}from"./tenant.data.6c020eb1.js";import{p as ee,d as F}from"./tenant.api.27aec417.js";import{useListPage as te}from"./useListPage.6b1e9ff2.js";import ne from"./BasicTable.7f769694.js";import{T as ae}from"./componentMap.6f8f51f6.js";import"./BasicTable.vue_vue_type_style_index_0_lang.734e51fc.js";import"./TableImg.vue_vue_type_style_index_0_lang.c653d5f6.js";import{_ as oe}from"./TenantPackMenuModal.vue_vue_type_script_setup_true_name_tenant-pack-menu-modal_lang.e529607f.js";import{j as R,bI as w,C as M,K as a,bH as se,a8 as ue,r as ie,s as D,t as le,v as l,w as d,y as P,Q as re,R as ce,x as de,ax as me,a2 as pe,u as fe}from"./index.d13d32e3.js";import ge from"./TenantPackUserModal.4056136b.js";const Ce=R({name:"tenant-pack-modal"}),Pe=R(A(E({},Ce),{emits:["register","success"],setup(o,{emit:n}){const[t,{openModal:m}]=w(),[p,{openModal:C}]=w(),i=M(0),{prefixCls:f,tableContext:s}=te({designScope:"tenant-template",tableProps:{api:ee,columns:Y,immediate:!1,formConfig:{schemas:Z,labelCol:{xxl:8},actionColOptions:{xs:24,sm:8,md:8,lg:8,xl:8,xxl:8}},beforeFetch:e=>Object.assign(e,{tenantId:a(i)})}}),[r,{reload:v},{rowSelection:T,selectedRowKeys:k,selectedRows:I}]=s,B=M(""),[O,{setModalProps:ke,closeModal:S}]=se(e=>u(this,null,function*(){i.value=e.tenantId,B.value=e.createBy,c()})),U="\u79DF\u6237\u4EA7\u54C1\u5305\u5217\u8868";function j(e){return u(this,null,function*(){S()})}function N(e){return[{label:"\u7528\u6237",onClick:H.bind(null,e)},{label:"\u7F16\u8F91",onClick:V.bind(null,e)},{label:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u79DF\u6237\u4EA7\u54C1\u5305",confirm:K.bind(null,e)}}]}function c(){(k.value=[])&&v()}function V(e){return u(this,null,function*(){m(!0,{isUpdate:!0,record:e,tenantId:a(i)})})}const b=ue(["superAdmin","accountAdmin","appAdmin"]),{createMessage:x}=fe();function K(e){return u(this,null,function*(){if(b.indexOf(e.packCode)!=-1){x.warning("\u9ED8\u8BA4\u7CFB\u7EDF\u4EA7\u54C1\u5305\u4E0D\u5141\u8BB8\u5220\u9664");return}yield F({ids:e.id},c)})}function L(){return u(this,null,function*(){let e=I.value;if(e&&e.length>0){for(let g=0;g<e.length;g++)if(b.indexOf(e[g].packCode)!=-1){x.warning("\u9ED8\u8BA4\u7CFB\u7EDF\u4EA7\u54C1\u5305\u4E0D\u5141\u8BB8\u5220\u9664");return}}pe.confirm({title:"\u5220\u9664\u79DF\u6237\u4EA7\u54C1\u5305",content:"\u662F\u5426\u5220\u9664\u79DF\u6237\u4EA7\u54C1\u5305",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:()=>u(this,null,function*(){yield F({ids:k.value.join(",")},c)})})})}function $(){m(!0,{isUpdate:!1,tenantId:a(i)})}function H(e){e.createBy=a(B),C(!0,{record:e})}return(e,g)=>{const _=ie("a-button");return D(),le(me,null,[l(a(X),de(e.$attrs,{onRegister:a(O),title:U,onOk:j,width:"800px",showCancelBtn:!1,showOkBtn:!1}),{default:d(()=>[l(a(ne),{onRegister:a(r),rowSelection:a(T)},{tableTitle:d(()=>[l(_,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:$,style:{"margin-right":"5px"}},{default:d(()=>[P("\u65B0\u589E ")]),_:1}),a(k).length>0?(D(),re(_,{key:0,preIcon:"ant-design:delete-outlined",type:"primary",onClick:L,style:{"margin-right":"5px"}},{default:d(()=>[P("\u6279\u91CF\u5220\u9664 ")]),_:1})):ce("",!0)]),action:d(({record:Q})=>[l(a(ae),{actions:N(Q)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"])]),_:1},16,["onRegister"]),l(oe,{onRegister:a(t),onSuccess:c},null,8,["onRegister"]),l(ge,{onRegister:a(p),onSuccess:c},null,8,["onRegister"])],64)}}}));export{Pe as _};
