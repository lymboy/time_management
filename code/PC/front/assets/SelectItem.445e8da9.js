import{j as o,aD as i,l as r,m as d,q as p,r as c,s as m,t as u,aW as f,z as g,v as _,x as b,B as v}from"./index.d13d32e3.js";import{b as y}from"./index.6e1c86e6.js";import"./index.57c0270a.js";import"./useHeaderSetting.650a6a7d.js";import"./useMultipleTabSetting.3165dbac.js";const C=o({name:"SelectItem",components:{Select:i},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=r("setting-select-item"),n=d(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function s(a){e.event&&y(e.event,a)}return{prefixCls:t,handleChange:s,getBindValue:n}}});function S(e,t,n,s,a,h){const l=c("Select");return m(),u("div",{class:v(e.prefixCls)},[f("span",null,g(e.title),1),_(l,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}const z=p(C,[["render",S],["__scopeId","data-v-e5db5bf9"]]);export{z as default};