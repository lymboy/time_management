var P=Object.defineProperty;var _=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))A.call(e,o)&&S(t,o,e[o]);if(_)for(var o of _(e))R.call(e,o)&&S(t,o,e[o]);return t};import k from"./Step1.33fb2f45.js";import x from"./Step2.214c4897.js";import w from"./Step3.a4b7d3f5.js";import{a as y}from"./index.9013d2b9.js";import{j as D,eh as i,C as W,a8 as $,b8 as b,q as V,r as n,s as u,Q as a,w as v,aW as h,v as r,N as s,O as m,R as C}from"./index.d13d32e3.js";import"./BasicForm.e6ef05c4.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./componentMap.6f8f51f6.js";import"./useFormItem.7e3b9788.js";import"./index.1c9272fa.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./functional.fdb540f5.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./JAddInput.ec01e271.js";import"./areaDataUtil.b0d6c4f6.js";import"./api.ae3b9cbd.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./uniqBy.0dfdca3d.js";import"./useForm.1a92e1aa.js";import"./data.80eca3ac.js";import"./useContentHeight.729fdab1.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";const j=D({name:"FormStepPage",components:{Step1:k,Step2:x,Step3:w,PageWrapper:y,[i.name]:i,[i.Step.name]:i.Step},setup(){const t=W(0),e=$({initSetp2:!1,initSetp3:!1});function o(p){t.value++,e.initSetp2=!0,console.log(p)}function c(){t.value--}function l(p){t.value++,e.initSetp3=!0,console.log(p)}function d(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return f({current:t,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},b(e))}});const q={class:"step-form-form"},I={class:"mt-5"};function O(t,e,o,c,l,d){const p=n("a-step"),F=n("a-steps"),B=n("Step1"),N=n("Step2"),g=n("Step3"),E=n("PageWrapper");return u(),a(E,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",content:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",contentClass:"p-4"},{default:v(()=>[h("div",q,[r(F,{current:t.current},{default:v(()=>[r(p,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),r(p,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),r(p,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),h("div",I,[s(r(B,{onNext:t.handleStep1Next},null,8,["onNext"]),[[m,t.current===0]]),t.initSetp2?s((u(),a(N,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[m,t.current===1]]):C("",!0),t.initSetp3?s((u(),a(g,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[m,t.current===2]]):C("",!0)])]),_:1})}const wt=V(j,[["render",O],["__scopeId","data-v-540fbe55"]]);export{wt as default};