var l=(i,m,e)=>new Promise((n,a)=>{var u=r=>{try{t(e.next(r))}catch(c){a(c)}},s=r=>{try{t(e.throw(r))}catch(c){a(c)}},t=r=>r.done?n(r.value):Promise.resolve(r.value).then(u,s);t((e=e.apply(i,m)).next())});import{u as p,B as f}from"./index.57c0270a.js";import{f as D}from"./role.data.938dcd47.js";import{D as d}from"./index.f67c6cfa.js";import{j as _,eq as w,C as g,s as h,Q as B,w as C,v as x,K as o,x as v}from"./index.d13d32e3.js";const q=_({__name:"RoleDesc",emits:["register"],setup(i,{emit:m}){w();const e=g({}),[n,{setDrawerProps:a,closeDrawer:u}]=p(s=>l(this,null,function*(){a({confirmLoading:!1}),e.value=s.record}));return(s,t)=>(h(),B(o(f),v(s.$attrs,{onRegister:o(n),title:"\u89D2\u8272\u8BE6\u60C5",width:"500px",destroyOnClose:""}),{default:C(()=>[x(o(d),{column:1,data:e.value,schema:o(D)},null,8,["data","schema"])]),_:1},16,["onRegister"]))}});export{q as _};