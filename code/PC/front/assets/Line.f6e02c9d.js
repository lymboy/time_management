import{useECharts as l}from"./useECharts.6c106557.js";import{g as s}from"./data.29a5f341.js";import{j as n,C as c,X as p,q as d,s as f,t as m,V as y}from"./index.d13d32e3.js";import"./echarts.59b1d458.js";const h=n({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=c(null),{setOptions:a,echarts:o}=l(e),{barData:r,lineData:t,category:i}=s;return p(()=>{a({backgroundColor:"#0f375f",tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{data:["line","bar"],textStyle:{color:"#ccc"}},xAxis:{data:i,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"line",type:"line",smooth:!0,showAllSymbol:"auto",symbol:"emptyCircle",symbolSize:15,data:t},{name:"bar",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new o.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])},data:r},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{color:new o.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])},z:-12,data:t},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{color:"#0f375f"},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:t}]})}),{chartRef:e}}});function b(e,a,o,r,t,i){return f(),m("div",{ref:"chartRef",style:y({height:e.height,width:e.width})},null,4)}const w=d(h,[["render",b]]);export{w as default};
