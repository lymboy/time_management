import{useECharts as g}from"./useECharts.6c106557.js";import{j as x,C as A,a8 as k,aa as w,q as D,s as b,t as C,V as S}from"./index.d13d32e3.js";const _=x({name:"lineMulti",props:{chartData:{type:Array,default:()=>[],required:!0},option:{type:Object,default:()=>({})},type:{type:String,default:"bar"},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},emits:["click"],setup(t,{emit:c}){const r=A(null),{setOptions:s,getInstance:i}=g(r),a=k({tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{top:30},grid:{top:60},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[]});w(()=>{t.chartData&&d()});function d(){var p,h;t.option&&Object.assign(a,t.option);let n=Array.from(new Set(t.chartData.map(e=>e.type))),y=Array.from(new Set(t.chartData.map(e=>e.name))),f=[];n.forEach(e=>{let u={name:e,type:t.type},m=t.chartData.filter(o=>e===o.type);u.data=m.map(o=>o.value),f.push(u)}),a.series=f,a.xAxis.data=y,s(a),(p=i())==null||p.off("click",l),(h=i())==null||h.on("click",l)}function l(n){c("click",n)}return{chartRef:r}}});function v(t,c,r,s,i,a){return b(),C("div",{ref:"chartRef",style:S({height:t.height,width:t.width})},null,4)}const $=D(_,[["render",v]]);export{$ as L};