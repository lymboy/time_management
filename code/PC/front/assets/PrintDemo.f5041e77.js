import{a as x}from"./index.9013d2b9.js";import{I as R,a8 as U,C as f,q as C,r as d,s as y,Q as B,w as a,v as e,aW as o,y as P,t as b,R as I,dm as D,dn as F}from"./index.d13d32e3.js";import{printJS as V}from"./usePrintJS.d7fd6544.js";import"./useContentHeight.729fdab1.js";import"./onMountedOrActivated.a5139741.js";import"./useWindowSizeFn.67dc54bf.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";import"./print.0d636f73.js";const k={name:"PrintDemo",components:{PageWrapper:x,Icon:R},props:{reBizCode:{type:String,default:""}},setup(){const p=U({printer:"\u5F20\u4E09",printTime:"2021-12-31 23:59:59",printContent:"\u6253\u5370\u5185\u5BB9\uFF1A\u8FD9\u662F\u4E00\u4E2A\u6253\u5370\u6D4B\u8BD5\uFF01",printReason:"\u505A\u4E00\u4E2A\u6253\u5370\u6D4B\u8BD5",fileList:[{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"pic1.png",status:"done",url:"https://www.gizbot.com/img/2016/11/whatsapp-error-lead-image-08-1478607387.jpg"}]}),t=f(""),m=f(!1);function n(){V({printable:"#printContent",type:"html"})}function _(r){t.value=r.url||r.thumbUrl,m.value=!0}function v({fileList:r}){p.fileList=r}return{model:p,previewImage:t,previewVisible:m,onPrint:n,handlePreview:_,handleChange:v}}};const u=p=>(D("data-v-4efe55c4"),p=p(),F(),p),j={style:{"text-align":"right"}},L={ref:"print",id:"printContent"},A=u(()=>o("div",{style:{"text-align":"center"}},[o("p",{style:{"font-size":"24px","font-weight":"800"}},"\u6253\u5370\u6D4B\u8BD5\u8868\u5355")],-1)),S={class:"sign",style:{"text-align":"center",height:"inherit"}},T=u(()=>o("span",null,"\u6253\u5370\u4EBA\u5458:",-1)),W=u(()=>o("span",{style:{"margin-left":"12.5%"}},"\u6253\u5370\u65E5\u671F:",-1)),z=u(()=>o("span",null,"\u6253\u5370\u5185\u5BB9:",-1)),N=u(()=>o("span",null,"\u6253\u5370\u76EE\u76841:",-1)),J=u(()=>o("span",null,"\u6253\u5370\u76EE\u76842:",-1)),Z=u(()=>o("span",null,"\u6253\u5370\u76EE\u76843:",-1)),q=u(()=>o("span",null,"\u6253\u5370\u76EE\u76844:",-1)),Q=u(()=>o("span",null,"\u6253\u5370\u76EE\u76845:",-1)),G=u(()=>o("span",null,"\u6253\u5370\u76EE\u76846:",-1)),H=u(()=>o("span",null,"\u6253\u5370\u76EE\u76847:",-1)),K=u(()=>o("span",null,"\u6253\u5370\u76EE\u76848:",-1)),M=u(()=>o("span",null,"\u6253\u5370\u76EE\u76849:",-1)),O=u(()=>o("span",null,"\u6253\u5370\u76EE\u768410:",-1)),X=u(()=>o("span",null,"\u6253\u5370\u76EE\u768411:",-1)),Y=u(()=>o("span",null,"\u6253\u5370\u76EE\u768412:",-1)),$=u(()=>o("span",null,"\u6253\u5370\u76EE\u768413:",-1)),nn=u(()=>o("span",null,"\u6253\u5370\u76EE\u768414:",-1)),en=u(()=>o("span",null,"\u6253\u5370\u56FE\u7247:",-1)),tn=u(()=>o("br",null,null,-1)),ln={key:0},on=u(()=>o("div",{class:"ant-upload-text"},"Upload",-1)),an=["src"];function un(p,t,m,n,_,v){const r=d("a-button"),i=d("a-input"),s=d("a-col"),g=d("Icon"),E=d("a-upload"),c=d("a-modal"),w=d("a-card"),h=d("PageWrapper");return y(),B(h,null,{default:a(()=>[e(w,{bordered:!1,class:"j-print-demo"},{default:a(()=>[o("div",j,[e(r,{type:"primary",ghost:"",onClick:n.onPrint},{default:a(()=>[P("\u6253\u5370")]),_:1},8,["onClick"])]),o("section",L,[A,e(s,{md:24,sm:24},{default:a(()=>[o("div",S,[e(s,{span:24},{default:a(()=>[T,e(i,{style:{width:"30%"},value:n.model.printer,"onUpdate:value":t[0]||(t[0]=l=>n.model.printer=l)},null,8,["value"]),W,e(i,{style:{width:"30%"},value:n.model.printTime,"onUpdate:value":t[1]||(t[1]=l=>n.model.printTime=l)},null,8,["value"])]),_:1}),e(s,{span:24}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[z,e(i,{style:{width:"80%"},value:n.model.printContent,"onUpdate:value":t[2]||(t[2]=l=>n.model.printContent=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[N,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[3]||(t[3]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[J,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[4]||(t[4]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[Z,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[5]||(t[5]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[q,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[6]||(t[6]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[Q,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[7]||(t[7]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[G,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[8]||(t[8]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[H,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[9]||(t[9]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[K,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[10]||(t[10]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[M,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[11]||(t[11]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[O,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[12]||(t[12]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[X,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[13]||(t[13]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[Y,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[14]||(t[14]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[$,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[15]||(t[15]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{span:24,style:{"margin-top":"20px"}},{default:a(()=>[nn,e(i,{style:{width:"80%"},value:n.model.printReason,"onUpdate:value":t[16]||(t[16]=l=>n.model.printReason=l)},null,8,["value"])]),_:1}),e(s,{style:{"margin-top":"20px"},span:24},{default:a(()=>[en,tn,e(E,{action:"/jsonplaceholder.typicode.com/posts/",listType:"picture-card",fileList:n.model.fileList,onPreview:n.handlePreview,onChange:n.handleChange},{default:a(()=>[n.model.fileList.length<3?(y(),b("div",ln,[e(g,{icon:"ant-design:plus-outlined"}),on])):I("",!0)]),_:1},8,["fileList","onPreview","onChange"]),e(c,{visible:n.previewVisible,footer:null,onCancel:t[17]||(t[17]=l=>n.previewVisible=!1)},{default:a(()=>[o("img",{alt:"example",style:{width:"100%"},src:n.previewImage},null,8,an)]),_:1},8,["visible"])]),_:1})])]),_:1})],512)]),_:1})]),_:1})}const gn=C(k,[["render",un],["__scopeId","data-v-4efe55c4"]]);export{gn as default};
