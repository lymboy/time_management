var p=(D,x,o)=>new Promise((r,s)=>{var m=t=>{try{c(o.next(t))}catch(d){s(d)}},y=t=>{try{c(o.throw(t))}catch(d){s(d)}},c=t=>t.done?r(t.value):Promise.resolve(t.value).then(m,y);c((o=o.apply(D,x)).next())});import{a as G}from"./index.57c0270a.js";import{_ as O}from"./index.61b0c164.js";import{_ as Q}from"./DepartDataRuleDrawer.vue_vue_type_script_setup_true_lang.6474f19c.js";import{c as W,e as H,f as J}from"./depart.api.0bd5897e.js";import{j as M,m as U,bj as X,C as u,E as Y,G as C,r as i,s as g,t as Z,v as a,w as n,Q as h,K as F,aW as K,z as ee,R as te,y as f,ax as ae,q as ne}from"./index.d13d32e3.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";const oe={class:"j-box-bottom-button offset-20",style:{"margin-top":"30px"}},se={class:"j-box-bottom-button-float"},le=M({__name:"DepartRuleTab",props:{data:{type:Object,default:()=>({})}},setup(D){const x=D,o=U(()=>{var e;return(e=x.data)==null?void 0:e.id});X("prefixCls");const r=u(),s=u(!1),m=u([]),y=u([]),c=u([]),t=u([]),d=u([]),T=u(!0),[A,S]=G();E(),Y(o,()=>I(),{immediate:!0});function E(){return p(this,null,function*(){try{s.value=!0;let{treeList:e}=yield W();m.value=e,yield C(),b(!0)}finally{s.value=!1}})}function I(){return p(this,null,function*(){if(o.value)try{s.value=!0;let e=yield H({departId:o.value});t.value=e,d.value=[...e]}finally{s.value=!1}})}function $(){return p(this,null,function*(){try{s.value=!0,yield J({departId:o.value,permissionIds:t.value.join(","),lastpermissionIds:d.value.join(",")}),yield E(),yield I()}finally{s.value=!1}})}function B(e){Array.isArray(e)?t.value=e:t.value=e.checked}function L(e){y.value=e}function N(e,{selectedNodes:l}){var _;if((_=l[0])!=null&&_.ruleFlag){let w=e[0];S.openDrawer(!0,{departId:o,functionId:w})}c.value=[]}function b(e){return p(this,null,function*(){r.value.expandAll(e),yield C(),y.value=r.value.getExpandedKeys()})}function R(e){return p(this,null,function*(){r.value.checkAll(e),yield C(),t.value=r.value.getCheckedKeys()})}return(e,l)=>{const _=i("Icon"),w=i("a-empty"),k=i("a-menu-item"),V=i("a-menu"),j=i("a-button"),q=i("a-dropdown"),P=i("a-spin");return g(),Z(ae,null,[a(P,{spinning:s.value},{default:n(()=>[m.value.length>0?(g(),h(F(O),{key:0,ref_key:"basicTree",ref:r,class:"depart-rule-tree",checkable:"",treeData:m.value,checkedKeys:t.value,selectedKeys:c.value,expandedKeys:y.value,checkStrictly:T.value,style:{height:"500px",overflow:"auto"},onCheck:B,onExpand:L,onSelect:N},{title:n(({slotTitle:v,ruleFlag:z})=>[K("span",null,ee(v),1),z?(g(),h(_,{key:0,icon:"ant-design:align-left-outlined",style:{"margin-left":"5px",color:"red"}})):te("",!0)]),_:1},8,["treeData","checkedKeys","selectedKeys","expandedKeys","checkStrictly"])):(g(),h(w,{key:1,description:"\u65E0\u53EF\u914D\u7F6E\u90E8\u95E8\u6743\u9650"})),K("div",oe,[K("div",se,[a(q,{trigger:["click"],placement:"top"},{overlay:n(()=>[a(V,null,{default:n(()=>[a(k,{key:"3",onClick:l[0]||(l[0]=v=>R(!0))},{default:n(()=>[f("\u5168\u90E8\u52FE\u9009")]),_:1}),a(k,{key:"4",onClick:l[1]||(l[1]=v=>R(!1))},{default:n(()=>[f("\u53D6\u6D88\u5168\u9009")]),_:1}),a(k,{key:"5",onClick:l[2]||(l[2]=v=>b(!0))},{default:n(()=>[f("\u5C55\u5F00\u6240\u6709")]),_:1}),a(k,{key:"6",onClick:l[3]||(l[3]=v=>b(!1))},{default:n(()=>[f("\u6536\u8D77\u6240\u6709")]),_:1})]),_:1})]),default:n(()=>[a(j,{style:{float:"left"}},{default:n(()=>[f(" \u6811\u64CD\u4F5C "),a(_,{icon:"ant-design:up-outlined"})]),_:1})]),_:1}),a(j,{type:"primary",preIcon:"ant-design:save-filled",onClick:$},{default:n(()=>[f("\u4FDD\u5B58")]),_:1})])])]),_:1},8,["spinning"]),a(Q,{onRegister:F(A)},null,8,["onRegister"])],64)}}});const _e=ne(le,[["__scopeId","data-v-bf26d298"]]);export{_e as default};
