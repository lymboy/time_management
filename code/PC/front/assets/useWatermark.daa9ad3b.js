import{dg as y,C as x,K as r,dh as v,di as w,H as k,dj as b,a6 as p,dk as d}from"./index.d13d32e3.js";const W=Symbol("watermark-dom");function R(c=x(document.body)){const u=b(function(){const e=r(c);if(!e)return;const{clientHeight:t,clientWidth:i}=e;l({height:t,width:i})}),s=W.toString(),a=y(),f=()=>{const e=r(a);a.value=void 0;const t=r(c);!t||(e&&t.removeChild(e),v(t,u))};function h(e){const t=document.createElement("canvas"),i=300,o=240;Object.assign(t,{width:i,height:o});const n=t.getContext("2d");return n&&(n.rotate(-20*Math.PI/120),n.font="15px Vedana",n.fillStyle="rgba(0, 0, 0, 0.15)",n.textAlign="left",n.textBaseline="middle",n.fillText(e,i/20,o)),t.toDataURL("image/png")}function l(e={}){const t=r(a);!t||(d(e.width)&&(t.style.width=`${e.width}px`),d(e.height)&&(t.style.height=`${e.height}px`),d(e.str)&&(t.style.background=`url(${h(e.str)}) left top repeat`))}const m=e=>{if(r(a))return l({str:e}),s;const t=document.createElement("div");a.value=t,t.id=s,t.style.pointerEvents="none",t.style.top="0px",t.style.left="0px",t.style.position="absolute",t.style.zIndex="100000";const i=r(c);if(!i)return s;const{clientHeight:o,clientWidth:n}=i;return l({str:e,width:n,height:o}),i.appendChild(t),s};function g(e){m(e),w(document.documentElement,u),p()&&k(()=>{f()})}return{setWatermark:g,clear:f}}export{R as useWatermark};