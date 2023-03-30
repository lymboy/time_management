var Ee=Object.defineProperty,_e=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var Oe=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var Be=(e,o,a)=>o in e?Ee(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,v=(e,o)=>{for(var a in o||(o={}))$e.call(o,a)&&Be(e,a,o[a]);if(Oe)for(var a of Oe(o))qe.call(o,a)&&Be(e,a,o[a]);return e},Fe=(e,o)=>_e(e,We(o));var M=(e,o,a)=>new Promise((d,w)=>{var p=b=>{try{f(a.next(b))}catch(u){w(u)}},l=b=>{try{f(a.throw(b))}catch(u){w(u)}},f=b=>b.done?d(b.value):Promise.resolve(b.value).then(p,l);f((a=a.apply(e,o)).next())});import{o as ye,L as ge,m as V,K as t,j as Ae,b8 as ze,N as Ye,v as R,cv as ie,cw as He,aQ as E,ay as G,bh as Te,O as Ke,b7 as Ge,x as U,a7 as we,aY as he,y as oe,cx as Ue,cy as Je,cz as Xe,ad as Qe,ae as Ze,cA as et,cB as tt,aN as j,q as nt,r as Q,s as Z,Q as ee,w as H,by as ot,R as te,aW as st,S as ne,z as de,V as at,a1 as $,af as J,aO as re,cC as be,aP as se,aS as it,cD as rt,cE as ct,E as ae,al as xe,ac as Pe,bX as Ie,cF as ke,$ as lt,aa as ut,G as Re,bC as dt,cG as ft,a8 as je,C as K,l as mt,X as pt}from"./index.d13d32e3.js";import{i as Se}from"./componentMap.6f8f51f6.js";import{u as ht}from"./uniqBy.0dfdca3d.js";import"./index.1c9272fa.js";import{u as bt}from"./BasicModal.d291574e.js";const{t:fe}=ye();function De(e){return e.includes("Input")||e.includes("Complete")?fe("common.inputText"):e.includes("Picker")||e.includes("Select")||e.includes("Cascader")||e.includes("Checkbox")||e.includes("Radio")||e.includes("Switch")?fe("common.chooseText"):""}const yt=["DatePicker","MonthPicker","WeekPicker","TimePicker"];function gt(){return[...yt,"RangePicker"]}function At(e,o,a){["DatePicker","MonthPicker","WeekPicker","TimePicker"].includes(o)?e.type=a?"string":"object":["RangePicker","Upload","CheckboxGroup","TimePicker"].includes(o)?e.type="array":["InputNumber"].includes(o)&&(e.type="number")}function wt(e,o){return e&&["Input","InputPassword","InputSearch","InputTextArea"].includes(e)&&o&&ge(o)?`${o}`:o}const Le=gt();function vt(e,o){return V(()=>{const a=t(e),{labelCol:d={},wrapperCol:w={}}=a.itemProps||{},{labelWidth:p,disabledLabelWidth:l}=a,{labelWidth:f,labelCol:b,wrapperCol:u,layout:x}=t(o);if(l)return{labelCol:d,wrapperCol:w};if(!f&&!p&&!b)return d.style={textAlign:"left"},{labelCol:d,wrapperCol:w};let I=p||f;const T=v(v({},b),d),W=v(v({},u),w);return I&&(I=ge(I)?`${I}px`:I),{labelCol:v({style:{width:I||"100%"}},T),wrapperCol:v({style:{width:x==="vertical"?"100%":`calc(100% - ${I})`}},W)}})}function me(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!He(e)}const Ct=Ae({name:"BasicFormItem",inheritAttrs:!1,props:{schema:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},allDefaultValues:{type:Object,default:()=>({})},formModel:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null},tableAction:{type:Object},formActionType:{type:Object}},setup(e,{slots:o}){const{t:a}=ye(),{schema:d,formProps:w}=ze(e),p=vt(d,w),l=V(()=>{const{allDefaultValues:c,formModel:i,schema:h}=e,{mergeDynamicData:C}=e.formProps;return{field:h.field,model:i,values:v(v(v({},C),c),i),schema:h}}),f=V(()=>{var y;const{schema:c,tableAction:i,formModel:h,formActionType:C}=e;let{componentProps:m={}}=c;return E(m)&&(m=(y=m({schema:c,tableAction:i,formModel:h,formActionType:C}))!=null?y:{}),c.component==="Divider"&&(m=Object.assign({type:"horizontal"},m,{orientation:"left",plain:!0})),m}),b=V(()=>{const{disabled:c}=e.formProps,{dynamicDisabled:i}=e.schema,{disabled:h=!1}=t(f);let C=!!c||h;return G(i)&&(C=i),E(i)&&(C=i(t(l))),C});function u(){const{show:c,ifShow:i}=e.schema,{showAdvancedButton:h}=e.formProps,C=h&&G(e.schema.isAdvanced)?e.schema.isAdvanced:!0;let m=!0,y=!0;return G(c)&&(m=c),G(i)&&(y=i),E(c)&&(m=c(t(l))),E(i)&&(y=i(t(l))),m=m&&C,{isShow:m,isIfShow:y}}function x(){var k;const{rules:c=[],component:i,rulesMessageJoinLabel:h,label:C,dynamicRules:m,required:y}=e.schema;if(E(m))return m(t(l));let g=he(c);const{rulesMessageJoinLabel:D}=e.formProps,n=Reflect.has(e.schema,"rulesMessageJoinLabel")?h:D,s=De(i)+`${n?C:""}`;function A(P,O){const N=P.message||s;return O===void 0||Je(O)||Array.isArray(O)&&O.length===0||typeof O=="string"&&O.trim()===""||typeof O=="object"&&Reflect.has(O,"checked")&&Reflect.has(O,"halfChecked")&&Array.isArray(O.checked)&&Array.isArray(O.halfChecked)&&O.checked.length===0&&O.halfChecked.length===0?Promise.reject(N):Promise.resolve()}const r=E(y)?y(t(l)):y;(!g||g.length===0)&&r&&(g=[{required:r,validator:A}]);const S=g.findIndex(P=>Reflect.has(P,"required")&&!Reflect.has(P,"validator"));if(S!==-1){const P=g[S],{isShow:O}=u();if(O||(P.required=!1),i){Reflect.has(P,"type")||(P.type=i==="InputNumber"?"number":"string"),P.message=P.message||s,(i.includes("Input")||i.includes("Textarea"))&&(P.whitespace=!0);const N=(k=t(f))==null?void 0:k.valueFormat;At(P,i,N)}}const F=g.findIndex(P=>P.max);return F!==-1&&!g[F].validator&&(g[F].message=g[F].message||a("component.form.maxTip",[g[F].max])),g}function I(){var O;const{renderComponentContent:c,component:i,field:h,changeEvent:C="change",valueField:m}=e.schema,y=i&&["Switch","Checkbox"].includes(i),g=`on${Xe(C)}`,D={[g]:(...N)=>{const[z]=N;r[g]&&r[g](...N);const Y=z?z.target:null,ce=Y?y?Y.checked:Y.value:z;e.setFormModel(h,ce)}},n=Se.get(i),{autoSetPlaceHolder:s,size:A}=e.formProps,r=Fe(v({allowClear:!0,getPopupContainer:N=>N.parentNode,size:A},t(f)),{disabled:t(b)});!r.disabled&&s&&i!=="RangePicker"&&i&&(r.placeholder=((O=t(f))==null?void 0:O.placeholder)||De(i)+e.schema.label),r.codeField=h,r.formValues=t(l);const F={[m||(y?"checked":"value")]:e.formModel[h]},k=v(v(v({},r),D),F);if(!c)return R(n,k,null);const P=E(c)?v({},c(t(l))):{default:()=>c};return R(n,k,me(P)?P:{default:()=>[P]})}function T(){const{label:c,helpMessage:i,helpComponentProps:h,subLabel:C,labelLength:m}=e.schema;let y=c+"";m&&y.length>4&&(y=y.substr(0,m));const D=C?R("span",null,[c,oe(" "),R("span",{class:"text-secondary"},[C])]):m?R("label",{title:c},[y]):c,n=E(i)?i(t(l)):i;return!n||Array.isArray(n)&&n.length===0?D:R("span",null,[D,R(Ue,U({placement:"top",class:"mx-1",text:n},h),null)])}function W(){const{itemProps:c,slot:i,render:h,field:C,suffix:m,component:y}=e.schema,{labelCol:g,wrapperCol:D}=t(p),{colon:n}=e.formProps;if(y==="Divider"){let s;return R(ie,{span:24},{default:()=>[R(Ge,t(f),me(s=T())?s:{default:()=>[s]})]})}else{const s=()=>i?Te(o,i,t(l)):h?h(t(l)):I(),A=!!m,r=E(m)?m(t(l)):m;return R(we.Item,U({name:C,colon:n,class:{"suffix-item":A}},c,{label:T(),rules:x(),labelCol:g,wrapperCol:D}),{default:()=>[R("div",{style:"display:flex"},[R("div",{style:"flex:1; width: 100%;"},[s()]),A&&R("span",{class:"suffix"},[r])])]})}}return()=>{let c;const{colProps:i={},colSlot:h,renderColContent:C,component:m}=e.schema;if(!Se.has(m))return null;const{baseColProps:y={}}=e.formProps,g=v(v({},y),i),{isIfShow:D,isShow:n}=u(),s=t(l);return D&&Ye(R(ie,g,me(c=(()=>h?Te(o,h,s):C?C(s):W())())?c:{default:()=>[c]}),[[Ke,n]])}}}),Me=Symbol();function Ot(e){return Qe(e,Me)}function Bt(){return Ze(Me)}const Ft=Ae({name:"BasicFormAction",components:{FormItem:we.Item,Button:et,BasicArrow:tt,[ie.name]:ie},props:{showActionButtonGroup:j.bool.def(!0),showResetButton:j.bool.def(!0),showSubmitButton:j.bool.def(!0),showAdvancedButton:j.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:j.number.def(6),isAdvanced:j.bool,hideAdvanceBtn:j.bool},emits:["toggle-advanced"],setup(e,{emit:o}){const{t:a}=ye(),d=V(()=>{const{showAdvancedButton:f,actionSpan:b,actionColOptions:u}=e,x=24-b,I=f?{span:x<6?24:x}:{};return v(v({style:{textAlign:"right"},span:f?6:4},I),u)}),w=V(()=>Object.assign({text:a("common.resetText"),preIcon:"ic:baseline-restart-alt"},e.resetButtonOptions)),p=V(()=>Object.assign({},{text:a("common.queryText"),preIcon:"ant-design:search-outlined"},e.submitButtonOptions));function l(){o("toggle-advanced")}return v({t:a,actionColOpt:d,getResetBtnOptions:w,getSubmitBtnOptions:p,toggleAdvanced:l},Bt())}});function Tt(e,o,a,d,w,p){const l=Q("Button"),f=Q("BasicArrow"),b=Q("FormItem"),u=Q("a-col");return e.showActionButtonGroup?(Z(),ee(u,ot(U({key:0},e.actionColOpt)),{default:H(()=>[st("div",{style:at([{width:"100%"},{textAlign:e.actionColOpt.style.textAlign}])},[R(b,null,{default:H(()=>[ne(e.$slots,"submitBefore"),e.showSubmitButton?(Z(),ee(l,U({key:0,type:"primary",class:"mr-2"},e.getSubmitBtnOptions,{onClick:e.submitAction}),{default:H(()=>[oe(de(e.getSubmitBtnOptions.text),1)]),_:1},16,["onClick"])):te("",!0),ne(e.$slots,"resetBefore"),e.showResetButton?(Z(),ee(l,U({key:1,type:"default",class:"mr-2"},e.getResetBtnOptions,{onClick:e.resetAction}),{default:H(()=>[oe(de(e.getResetBtnOptions.text),1)]),_:1},16,["onClick"])):te("",!0),ne(e.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(Z(),ee(l,{key:2,type:"link",size:"small",onClick:e.toggleAdvanced},{default:H(()=>[oe(de(e.isAdvanced?e.t("component.form.putAway"):e.t("component.form.unfold"))+" ",1),R(f,{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1},8,["onClick"])):te("",!0),ne(e.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):te("",!0)}const Pt=nt(Ft,[["render",Tt]]);function It(e,o){var w,p;return((w=t(e))==null?void 0:w.fieldMapToTime)&&(o=jt(e,o)),((p=t(e))==null?void 0:p.fieldMapToNumber)&&(o=St(e,o)),o}function jt(e,o){const a=t(e).fieldMapToTime;if(!a||!Array.isArray(a))return o;for(const[d,[w,p],l="YYYY-MM-DD"]of a){if(!d||!w||!p||!o[d])continue;let f=o[d];Array.isArray(f)||(f=f.split(","));const[b,u]=f;o[w]=$(b).format(l),o[p]=$(u).format(l),Reflect.deleteProperty(o,d)}return o}function St(e,o){const a=t(e).fieldMapToNumber;if(!a||!Array.isArray(a))return o;for(const[d,[w,p]]of a){if(!d||!w||!p||!o[d])continue;let l=o[d];typeof l=="string"&&(l=l.split(","));const[f,b]=l;o[w]=f,o[p]=b,Reflect.deleteProperty(o,d)}return o}function Dt({defaultValueRef:e,getSchema:o,formModel:a,getProps:d}){function w(l){if(!J(l))return{};const f={};for(const b of Object.entries(l)){let[,u]=b;const[x]=b;if(!x||re(u)&&u.length===0||E(u))continue;const I=t(d).transformDateFunc;J(u)&&(u=I==null?void 0:I(u)),re(u)&&be.isDayjs(u[0])&&be.isDayjs(u[1])&&(u=u.map(T=>I==null?void 0:I(T))),se(u)&&(u=u.trim()),it(f,x,u)}return It(d,f)}function p(){const l=t(o),f={};l.forEach(b=>{const{defaultValue:u}=b;rt(u)||(f[b.field]=u,a[b.field]=u)}),e.value=f}return{handleFormValues:w,initDefault:p}}const q=24;function xt({advanceState:e,emit:o,getProps:a,getSchema:d,formModel:w,defaultValueRef:p}){const{realWidthRef:l,screenEnum:f,screenRef:b}=ct(),u=V(()=>{if(!e.isAdvanced)return 0;const c=t(a).emptySpan||0;if(ge(c))return c;if(J(c)){const{span:i=0}=c,h=t(b);return c[h.toLowerCase()]||i||0}return 0}),x=xe(T,30);ae([()=>t(d),()=>e.isAdvanced,()=>t(l)],()=>{const{showAdvancedButton:c}=t(a);c&&x()},{immediate:!0});function I(c,i=0,h=!1,C=0){var A;const m=t(l),y=parseInt(c.md)||parseInt(c.xs)||parseInt(c.sm)||c.span||q,g=parseInt(c.lg)||y,D=parseInt(c.xl)||g,n=parseInt(c.xxl)||D;m<=f.LG?i+=y:m<f.XL?i+=g:m<f.XXL?i+=D:i+=n;let s=(A=t(a).autoAdvancedCol)!=null?A:3;return h?(e.hideAdvanceBtn=t(d).length<=s,i>q*2&&i<=q*(t(a).autoAdvancedLine||3)?e.hideAdvanceBtn=!1:e.isLoad||(e.isLoad=!0,e.isAdvanced=!e.isAdvanced,t(d).length>s&&(e.hideAdvanceBtn=!1,e.isAdvanced=!1)),{isAdvanced:e.isAdvanced,itemColSum:i}):i>q*(t(a).alwaysShowLines||1)?{isAdvanced:e.isAdvanced,itemColSum:i}:!e.isAdvanced&&C+1>s?{isAdvanced:!1,itemColSum:i}:{isAdvanced:!0,itemColSum:i}}function T(){let c=0,i=0;const{baseColProps:h={}}=t(a),C=t(d);for(let m=0;m<C.length;m++){const y=C[m],{show:g,colProps:D}=y;let n=!0;if(G(g)&&(n=g),E(g)&&(n=g({schema:y,model:w,field:y.field,values:v(v({},t(p)),w)})),n&&(D||h)){const{itemColSum:s,isAdvanced:A}=I(v(v({},h),D),c,!1,m);c=s||0,A&&(i=c),y.isAdvanced=A}}e.actionSpan=i%q+t(u),I(t(a).actionColOptions||{span:q},c,!0),o("advanced-change")}function W(){e.isAdvanced=!e.isAdvanced}return{handleToggleAdvanced:W}}function kt({emit:e,getProps:o,formModel:a,getSchema:d,defaultValueRef:w,formElRef:p,schemaRef:l,handleFormValues:f}){function b(){return M(this,null,function*(){const{resetFunc:n,submitOnReset:s}=t(o);n&&E(n)&&(yield n()),t(p)&&(Object.keys(a).forEach(r=>{a[r]=w.value[r]}),y(),e("reset",Pe(a)),s&&D())})}function u(n){return M(this,null,function*(){const s=t(d).map(r=>r.field).filter(Boolean),A=[];Object.keys(n).forEach(r=>{const S=t(d).find(P=>P.field===r);let F=n[r];if(!(n instanceof Object))return;const k=Reflect.has(n,r);if(F=wt(S==null?void 0:S.component,F),k&&s.includes(r)){if(h(r))if(Array.isArray(F)){const P=[];for(const O of F)P.push(O?$(O):null);a[r]=P}else{const{componentProps:P}=S||{};let O=P;typeof P=="function"&&(O=O({formModel:a})),a[r]=F?O!=null&&O.valueFormat?F:$(F):null}else a[r]=F;A.push(r)}}),C(A).catch(r=>{})})}function x(n){return M(this,null,function*(){const s=he(t(d));if(!n)return;let A=se(n)?[n]:n;se(n)&&(A=[n]);for(const r of A)I(r,s);l.value=s})}function I(n,s){if(se(n)){const A=s.findIndex(r=>r.field===n);A!==-1&&(delete a[n],s.splice(A,1))}}function T(n,s,A=!1){return M(this,null,function*(){const r=he(t(d)),S=r.findIndex(k=>k.field===s);if(!!r.some(k=>k.field===s||n.field)){if(!s||S===-1||A){A?r.unshift(n):r.push(n),l.value=r;return}S!==-1&&r.splice(S+1,0,n),l.value=r}})}function W(n){return M(this,null,function*(){let s=[];if(J(n)&&s.push(n),re(n)&&(s=[...n]),!s.every(r=>r.component==="Divider"||Reflect.has(r,"field")&&r.field)){Ie("All children of the form Schema array that need to be updated must contain the `field` field");return}l.value=s})}function c(n){return M(this,null,function*(){let s=[];if(J(n)&&s.push(n),re(n)&&(s=[...n]),!s.every(S=>S.component==="Divider"||Reflect.has(S,"field")&&S.field)){Ie("All children of the form Schema array that need to be updated must contain the `field` field");return}const r=[];s.forEach(S=>{t(d).forEach(F=>{if(F.field===S.field){const k=ke(F,S);r.push(k)}else r.push(F)})}),l.value=ht(r,"field")})}function i(){return t(p)?f(Pe(t(a))):{}}function h(n){return t(d).some(s=>s.field===n?Le.includes(s.component):!1)}function C(n){return M(this,null,function*(){var s;return(s=t(p))==null?void 0:s.validateFields(n)})}function m(n){return M(this,null,function*(){var s;return yield(s=t(p))==null?void 0:s.validate(n)})}function y(n){return M(this,null,function*(){var s;yield(s=t(p))==null?void 0:s.clearValidate(n)})}function g(n,s){return M(this,null,function*(){var A;yield(A=t(p))==null?void 0:A.scrollToField(n,s)})}function D(n){return M(this,null,function*(){n&&n.preventDefault();const{submitFunc:s}=t(o);if(s&&E(s)){yield s();return}if(!!t(p))try{const r=yield m();for(let F in r)r[F]instanceof Array&&lt(o,F)==="string"&&(r[F]=r[F].join(","));const S=f(r);e("submit",S)}catch(r){e("submit",{}),console.error("query form validate error, please ignore!",r)}})}return{handleSubmit:D,clearValidate:y,validate:m,validateFields:C,getFieldsValue:i,updateSchema:c,resetSchema:W,appendSchemaByField:T,removeSchemaByFiled:x,resetFields:b,setFieldsValue:u,scrollToField:g}}function Rt(w){return M(this,arguments,function*({getSchema:e,getProps:o,formElRef:a,isInitedDefault:d}){ut(()=>M(this,null,function*(){if(t(d)||!t(o).autoFocusFirstItem)return;yield Re();const p=t(e),l=t(a),f=l==null?void 0:l.$el;if(!l||!f||!p||p.length===0||!p[0].component.includes("Input"))return;const u=f.querySelector(".ant-row:first-child input");!u||u==null||u.focus()}))})}const{form:pe}=dt,Lt={model:{type:Object,default:{}},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},fieldMapToNumber:{type:Array,default:()=>[]},compact:j.bool,schemas:{type:[Array],default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:j.bool.def(!0),autoSubmitOnEnter:j.bool.def(!1),submitOnReset:j.bool,size:j.oneOf(["default","small","large"]).def("default"),disabled:j.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:j.bool,transformDateFunc:{type:Function,default:e=>be.isDayjs(e)?e==null?void 0:e.format("YYYY-MM-DD HH:mm:ss"):e},rulesMessageJoinLabel:j.bool.def(!0),autoAdvancedCol:j.number.def(3),autoAdvancedLine:j.number.def(3),alwaysShowLines:j.number.def(1),showActionButtonGroup:j.bool.def(!0),actionColOptions:Object,showResetButton:j.bool.def(!0),autoFocusFirstItem:j.bool,resetButtonOptions:Object,showSubmitButton:j.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:j.bool,labelCol:{type:Object,default:pe.labelCol},layout:j.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:{type:Object,default:pe.wrapperCol},colon:j.bool.def(pe.colon),labelAlign:j.string,rowProps:Object,autoSearch:j.bool.def(!1)},$t=Ae({name:"BasicForm",components:{FormItem:Ct,Form:we,Row:ft,FormAction:Pt},props:Lt,emits:["advanced-change","reset","submit","register"],setup(e,{emit:o,attrs:a}){const d=je({}),w=bt(),p=je({isAdvanced:!1,hideAdvanceBtn:!0,isLoad:!1,actionSpan:6}),l=K({}),f=K(!1),b=K({}),u=K(null),x=K(null),{prefixCls:I}=mt("basic-form"),T=V(()=>{let B=v(v({},e),t(b));return B.labelWidth&&(B.labelCol=void 0),B}),W=V(()=>[I,{[`${I}--compact`]:t(T).compact}]),c=V(()=>{const{baseRowStyle:B={},rowProps:L}=t(T);return v({style:B},L)}),i=V(()=>v(v(v({},a),e),t(T))),h=V(()=>{const B=t(u)||t(T).schemas;for(const L of B){const{defaultValue:_,component:ve,componentProps:Ne}=L;if(_&&Le.includes(ve)){const{valueFormat:X}=Ne;if(!Array.isArray(_))X?L.defaultValue=$(_).format(X):L.defaultValue=$(_);else{const ue=[];_.forEach(Ce=>{X?ue.push($(Ce).format(X)):ue.push($(Ce))}),L.defaultValue=ue}}}return t(T).showAdvancedButton?B.filter(L=>L.component!=="Divider"):B}),{handleToggleAdvanced:C}=xt({advanceState:p,emit:o,getProps:T,getSchema:h,formModel:d,defaultValueRef:l}),{handleFormValues:m,initDefault:y}=Dt({getProps:T,defaultValueRef:l,getSchema:h,formModel:d});Rt({getSchema:h,getProps:T,isInitedDefault:f,formElRef:x});const{handleSubmit:g,setFieldsValue:D,clearValidate:n,validate:s,validateFields:A,getFieldsValue:r,updateSchema:S,resetSchema:F,appendSchemaByField:k,removeSchemaByFiled:P,resetFields:O,scrollToField:N}=kt({emit:o,getProps:T,formModel:d,getSchema:h,defaultValueRef:l,formElRef:x,schemaRef:u,handleFormValues:m});Ot({resetAction:O,submitAction:g}),ae(()=>t(T).model,()=>{const{model:B}=t(T);!B||D(B)},{immediate:!0}),ae(()=>t(T).schemas,B=>{F(B!=null?B:[])}),ae(()=>h.value,B=>{Re(()=>{var L;(L=w==null?void 0:w.redoModalHeight)==null||L.call(w)}),!t(f)&&B!=null&&B.length&&(y(),f.value=!0)});function z(B){return M(this,null,function*(){b.value=ke(t(b)||{},B)})}const Y=xe(g,300);function ce(B,L){d[B]=L;const{validateTrigger:_}=t(i);(!_||_==="change")&&A([B]).catch(ve=>{}),e.autoSearch===!0&&Y()}function Ve(B){const{autoSubmitOnEnter:L}=t(T);if(!!L&&B.key==="Enter"&&B.target&&B.target instanceof HTMLElement){const _=B.target;_&&_.tagName&&_.tagName.toUpperCase()=="INPUT"&&g()}}const le={getFieldsValue:r,setFieldsValue:D,resetFields:O,updateSchema:S,resetSchema:F,setProps:z,getProps:T,removeSchemaByFiled:P,appendSchemaByField:k,clearValidate:n,validateFields:A,validate:s,submit:g,scrollToField:N};return pt(()=>{y(),o("register",le)}),v({getBindValue:i,handleToggleAdvanced:C,handleEnterPress:Ve,formModel:d,defaultValueRef:l,advanceState:p,getRow:c,getProps:T,formElRef:x,getSchema:h,formActionType:le,setFormModel:ce,getFormClass:W,getFormActionBindProps:V(()=>v(v({},T.value),p))},le)}});export{$t as _,It as h};