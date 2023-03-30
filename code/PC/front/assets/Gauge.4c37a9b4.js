import{useECharts as p}from"./useECharts.6c106557.js";import{j as y,C as m,a8 as g,aa as w,q as x,s as b,t as v,V as S}from"./index.d13d32e3.js";import{i as _}from"./install.920a7e87.js";const $=y({name:"barMulti",props:{chartData:{type:Array,default:()=>[],required:!0},option:{type:Object,default:()=>({})},type:{type:String,default:"bar"},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},emits:["click"],setup(t,{emit:i}){const r=m(null),{setOptions:s,getInstance:e}=p(r),a=g({tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{top:30},grid:{top:60},xAxis:{type:"category",data:[]},yAxis:{type:"value"},series:[]});w(()=>{t.chartData&&D()});function D(){var u,f;t.option&&Object.assign(a,t.option);let o=Array.from(new Set(t.chartData.map(n=>n.type))),A=Array.from(new Set(t.chartData.map(n=>n.name))),h=[];o.forEach(n=>{let d={name:n,type:t.type},C=t.chartData.filter(c=>n===c.type);d.data=C.map(c=>c.value),h.push(d)}),a.series=h,a.xAxis.data=A,s(a),(u=e())==null||u.off("click",l),(f=e())==null||f.on("click",l)}function l(o){i("click",o)}return{chartRef:r}}});function k(t,i,r,s,e,a){return b(),v("div",{ref:"chartRef",style:S({height:t.height,width:t.width})},null,4)}const R=x($,[["render",k]]),j=y({name:"Gauge",props:{chartData:{type:Object,default:()=>[]},option:{type:Object,default:()=>({})},width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(t){const i=m(null),{setOptions:r,echarts:s}=p(i),e=g({series:[{type:"gauge",progress:{show:!0,width:12},axisLine:{lineStyle:{width:12}},axisTick:{show:!1},splitLine:{length:12,lineStyle:{width:1,color:"#999"}},axisLabel:{distance:25,color:"#999",fontSize:12},anchor:{show:!0,showAbove:!0,size:20,itemStyle:{borderWidth:5}},title:{},detail:{valueAnimation:!0,fontSize:25,formatter:"{value}%",offsetCenter:[0,"80%"]},data:[{value:70,name:"\u672C\u5730\u78C1\u76D8"}]}]});w(()=>{t.chartData&&a()});function a(){s.use(_),t.option&&Object.assign(e,t.option),e.series[0].data[0].name=t.chartData.name,e.series[0].data[0].value=t.chartData.value,r(e)}return{chartRef:i}}});function O(t,i,r,s,e,a){return b(),v("div",{ref:"chartRef",style:S({height:t.height,width:t.width})},null,4)}const G=x(j,[["render",O]]);export{R as B,G};
