import{B as i}from"./index.1c9272fa.js";import{j as c,bH as p,q as d,r,s as m,Q as M,w as o,v as n,y as l}from"./index.d13d32e3.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";const _=c({components:{BasicModal:i},setup(){const[e,{closeModal:t,setModalProps:s}]=p();return{register:e,closeModal:t,setModalProps:()=>{s({title:"Modal New Title"})}}}});function f(e,t,s,C,E,k){const a=r("a-button"),u=r("BasicModal");return m(),M(u,{onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:o(()=>[n(a,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:o(()=>[l(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 ")]),_:1},8,["onClick"]),n(a,{type:"primary",onClick:e.setModalProps},{default:o(()=>[l(" \u4ECE\u5185\u90E8\u4FEE\u6539title ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}const P=d(_,[["render",f]]);export{P as default};
