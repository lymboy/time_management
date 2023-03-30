var q=Object.defineProperty,M=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))G.call(t,o)&&_(e,o,t[o]);if(P)for(var o of P(t))J.call(t,o)&&_(e,o,t[o]);return e},b=(e,t)=>M(e,Q(t));import{j as B,l as z,ao as X,q as N,s as g,t as F,aW as H,S as r,B as c,V,ca as Y,aN as n,C,bB as Z,m as s,E as x,aU as w,K as ee,r as k,Q as R,bx as te,bc as oe,w as $,by as ne,bz as se,ax as re,y as ae,z as le,x as ie,R as W,W as j}from"./index.d13d32e3.js";import{useContentHeight as ge}from"./useContentHeight.729fdab1.js";const ce=B({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=z("page-footer"),{getCalcContentWidth:t}=X();return{prefixCls:e,getCalcContentWidth:t}}});function de(e,t,o,d,p,u){return g(),F("div",{class:c(e.prefixCls),style:V({width:e.getCalcContentWidth})},[H("div",{class:c(`${e.prefixCls}__left`)},[r(e.$slots,"left",{},void 0,!0)],2),r(e.$slots,"default",{},void 0,!0),H("div",{class:c(`${e.prefixCls}__right`)},[r(e.$slots,"right",{},void 0,!0)],2)],6)}const I=N(ce,[["render",de],["__scopeId","data-v-fe353944"]]),pe=B({name:"PageWrapper",components:{PageFooter:I,PageHeader:Y},inheritAttrs:!1,props:{title:n.string,dense:n.bool,ghost:n.bool,content:n.string,contentStyle:{type:Object},contentBackground:n.bool,contentFullHeight:n.bool,contentClass:n.string,fixedHeight:n.bool,upwardSpace:n.oneOfType([n.number,n.string]).def(0)},setup(e,{slots:t,attrs:o}){const d=C(null),p=C(null),u=C(null),i=C(null),{prefixCls:a}=z("page-wrapper");Z(he,s(()=>e.fixedHeight));const f=s(()=>e.contentFullHeight),y=s(()=>e.upwardSpace),{redoHeight:O,setCompensation:T,contentHeight:A}=ge(f,d,[p,i],[u],y);T({useLayoutFooter:!0,elements:[i]});const D=s(()=>{var l;return[a,{[`${a}--dense`]:e.dense},(l=o.class)!=null?l:{}]}),v=s(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),E=s(()=>Object.keys(w(t,"default","leftFooter","rightFooter","headerContent"))),K=s(()=>{const{contentFullHeight:l,contentStyle:h,fixedHeight:U}=e;if(!l)return m({},h);const S=`${ee(A)}px`;return m(b(m({},h),{minHeight:S}),U?{height:S}:{})}),L=s(()=>{const{contentBackground:l,contentClass:h}=e;return[`${a}-content`,h,{[`${a}-content-bg`]:l}]});return x(()=>[v.value],()=>{O()},{flush:"post",immediate:!0}),{getContentStyle:K,wrapperRef:d,headerRef:p,contentRef:u,footerRef:i,getClass:D,getHeaderSlots:E,prefixCls:a,getShowFooter:v,omit:w,getContentClass:L}}});function ue(e,t,o,d,p,u){const i=k("PageHeader"),a=k("PageFooter");return g(),F("div",{class:c(e.getClass),ref:"wrapperRef"},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(g(),R(i,ie({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),te({default:$(()=>[e.content?(g(),F(re,{key:0},[ae(le(e.content),1)],64)):r(e.$slots,"headerContent",{key:1})]),_:2},[oe(e.getHeaderSlots,f=>({name:f,fn:$(y=>[r(e.$slots,f,ne(se(y||{})))])}))]),1040,["ghost","title"])):W("",!0),H("div",{class:c(["overflow-hidden",e.getContentClass]),style:V(e.getContentStyle),ref:"contentRef"},[r(e.$slots,"default")],6),e.getShowFooter?(g(),R(a,{key:1,ref:"footerRef"},{left:$(()=>[r(e.$slots,"leftFooter")]),right:$(()=>[r(e.$slots,"rightFooter")]),_:3},512)):W("",!0)],2)}const fe=N(pe,[["render",ue]]);j(I);const ye=j(fe),he="PageWrapperFixedHeight";export{he as P,ye as a};
