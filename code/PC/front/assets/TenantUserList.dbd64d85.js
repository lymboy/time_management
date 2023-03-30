var j=Object.defineProperty,z=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var T=(n,e,o)=>e in n?j(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,D=(n,e)=>{for(var o in e||(e={}))K.call(e,o)&&T(n,o,e[o]);if(h)for(var o of h(e))N.call(e,o)&&T(n,o,e[o]);return n},B=(n,e)=>z(n,J(e));var C=(n,e,o)=>new Promise((d,u)=>{var g=i=>{try{l(o.next(i))}catch(p){u(p)}},b=i=>{try{l(o.throw(i))}catch(p){u(p)}},l=i=>i.done?d(i.value):Promise.resolve(i.value).then(g,b);l((o=o.apply(n,e)).next())});import V from"./BasicTable.7f769694.js";import{T as X}from"./componentMap.6f8f51f6.js";import"./BasicTable.vue_vue_type_style_index_0_lang.734e51fc.js";import"./TableImg.vue_vue_type_style_index_0_lang.c653d5f6.js";import{_ as O}from"./UserDrawer.vue_vue_type_script_setup_true_lang.47e375e5.js";import{J as q}from"./JThirdAppButton.18d0d258.js";import{_ as G}from"./UserQuitAgentModal.vue_vue_type_script_setup_true_name_user-quit-agent-modal_lang.c208b100.js";import H from"./UserQuitModal.cf922c6c.js";import{a as W}from"./index.57c0270a.js";import{useListPage as Y}from"./useListPage.6b1e9ff2.js";import"./index.1c9272fa.js";import{j as R,bI as F,cM as Z,r as tt,s as et,t as ot,v as s,w as f,y as M,K as r,u as nt}from"./index.d13d32e3.js";import{f as rt,u as it}from"./user.api.bbb5fbe4.js";import{u as st,b as ut}from"./user.data.7f6ef8dc.js";import"./BasicForm.e6ef05c4.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./uniqBy.0dfdca3d.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./useFormItem.7e3b9788.js";import"./functional.fdb540f5.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./JAddInput.ec01e271.js";import"./areaDataUtil.b0d6c4f6.js";import"./api.ae3b9cbd.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./useForm.1a92e1aa.js";import"./index.9013d2b9.js";import"./useContentHeight.729fdab1.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";import"./RedoOutlined.a7479f77.js";import"./useAdaptiveWidth.442595ca.js";import"./useTable.c77f7905.js";import"./validator.4907239b.js";import"./renderUtils.2bc75984.js";const at=R({name:"tenant-system-user"}),ge=R(B(D({},at),{setup(n){const{createMessage:e,createConfirm:o}=nt(),[d,{openDrawer:u}]=W(),[g,{openModal:b}]=F(),[l,{openModal:i}]=F(),S=Z().getUserInfo.username,{prefixCls:lt,tableContext:k,onExportXls:pt,onImportXls:mt}=Y({designScope:"user-list",tableProps:{title:"\u79DF\u6237\u7528\u6237\u5217\u8868",api:rt,columns:st,size:"small",formConfig:{schemas:ut},actionColumn:{width:120},beforeFetch:t=>(t.userTenantStatus="1,3,4",Object.assign({column:"createTime",order:"desc"},t))}}),[A,{reload:m,updateTableDataRecord:ct},{rowSelection:E,selectedRows:ft,selectedRowKeys:U}]=k;function x(){u(!0,{isUpdate:!1,showFooter:!0})}function I(t){return C(this,null,function*(){u(!0,{record:t,isUpdate:!0,showFooter:!0})})}function Q(t){return C(this,null,function*(){u(!0,{record:t,isUpdate:!0,showFooter:!1})})}function y(){m()}function v({isToLocal:t}){t&&m()}function L(t){return[{label:"\u7F16\u8F91",onClick:I.bind(null,t)}]}function P(t){return[{label:"\u8BE6\u60C5",onClick:Q.bind(null,t)},{label:"\u79BB\u804C",onClick:$.bind(null,t.username),ifShow:()=>t.username!==t.createBy},{label:"\u540C\u610F",onClick:_.bind(null,t.id,"1"),ifShow:()=>(t.status==="3"||t.status==="4")&&t.createBy===S},{label:"\u62D2\u7EDD",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u62D2\u7EDD",confirm:_.bind(null,t.id,"4")},ifShow:()=>t.status==="3"&&t.createBy===S}]}function $(t){b(!0,{userName:t})}function _(t,c){it({userId:t,status:c}).then(a=>{a.success&&y()}).catch(a=>{e.warning(a.message)})}return(t,c)=>{const a=tt("a-button");return et(),ot("div",null,[s(r(V),{onRegister:r(A),rowSelection:r(E)},{tableTitle:f(()=>[s(a,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:x},{default:f(()=>[M(" \u65B0\u589E")]),_:1}),s(q,{"biz-type":"user","selected-row-keys":r(U),syncToApp:"",syncToLocal:"",onSyncFinally:v},null,8,["selected-row-keys"]),s(a,{type:"primary",onClick:c[0]||(c[0]=w=>r(i)(!0,{})),preIcon:"ant-design:user-delete-outlined"},{default:f(()=>[M("\u79BB\u804C\u4FE1\u606F")]),_:1})]),action:f(({record:w})=>[s(r(X),{actions:L(w),dropDownActions:P(w)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),s(O,{onRegister:r(d),onSuccess:y},null,8,["onRegister"]),s(G,{onRegister:r(g),onSuccess:r(m)},null,8,["onRegister","onSuccess"]),s(H,{onRegister:r(l),onSuccess:r(m)},null,8,["onRegister","onSuccess"])])}}}));export{ge as default};
