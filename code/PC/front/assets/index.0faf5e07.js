import{useContextMenu as m}from"./useContextMenu.17d08add.js";import{j as d,dB as C,u as _,q as f,r as l,s as b,Q as x,w as t,v as a,y as p}from"./index.d13d32e3.js";import{a as h}from"./index.9013d2b9.js";import"./useContentHeight.729fdab1.js";import"./onMountedOrActivated.a5139741.js";import"./useWindowSizeFn.67dc54bf.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";const w=d({components:{CollapseContainer:C,PageWrapper:h},setup(){const[e]=m(),{createMessage:n}=_();function s(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:s,handleMultipleContext:i}}});function N(e,n,s,i,o,g){const r=l("a-button"),c=l("CollapseContainer"),u=l("PageWrapper");return b(),x(u,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[a(c,{title:"Simple"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[p(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1}),a(c,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(r,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[p(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}const F=f(w,[["render",N]]);export{F as default};
