var b=Object.defineProperty;var c=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(a,e,t)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,f=(a,e)=>{for(var t in e||(e={}))m.call(e,t)&&l(a,t,e[t]);if(c)for(var t of c(e))y.call(e,t)&&l(a,t,e[t]);return a};var _=(a,e,t)=>new Promise((u,n)=>{var s=r=>{try{o(t.next(r))}catch(i){n(i)}},d=r=>{try{o(t.throw(r))}catch(i){n(i)}},o=r=>r.done?u(r.value):Promise.resolve(r.value).then(s,d);o((t=t.apply(a,e)).next())});import{G as S,c1 as p,K as O}from"./index.d13d32e3.js";function v(a,e){function t(){S(()=>_(this,null,function*(){if(!a)return;(yield p(()=>import("./index.d13d32e3.js").then(n=>n.gf),["assets/index.d13d32e3.js","assets/index.0fe62532.css"])).default.create(O(a),f({animation:500,delay:400,delayOnTouchOnly:!0},e))}))}return{initSortable:t}}export{v as useSortable};