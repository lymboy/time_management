var p=(s,a,r)=>new Promise((i,n)=>{var c=e=>{try{t(r.next(e))}catch(u){n(u)}},o=e=>{try{t(r.throw(e))}catch(u){n(u)}},t=e=>e.done?i(e.value):Promise.resolve(e.value).then(c,o);t((r=r.apply(s,a)).next())});import{B as l,u as m}from"./index.57c0270a.js";import{j as f,C as w,m as d,K as g,q as D,r as B,s as _,Q as h,x as $}from"./index.d13d32e3.js";const k=f({name:"tableDrawer",components:{BasicDrawer:l},emits:["success","register"],setup(s,{emit:a}){const r=w(!0),[i,{setDrawerProps:n,closeDrawer:c}]=m(e=>p(this,null,function*(){n({confirmLoading:!1}),r.value=!!(e!=null&&e.isUpdate)})),o=d(()=>g(r)?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272");function t(){return p(this,null,function*(){try{n({confirmLoading:!0}),c(),a("success")}finally{n({confirmLoading:!1})}})}return{registerDrawer:i,getTitle:o,handleSubmit:t}}});function y(s,a,r,i,n,c){const o=B("BasicDrawer");return _(),h(o,$(s.$attrs,{onRegister:s.registerDrawer,showFooter:"",title:s.getTitle,width:"500px",onOk:s.handleSubmit}),null,16,["onRegister","title","onOk"])}const L=D(k,[["render",y]]);export{L as default};