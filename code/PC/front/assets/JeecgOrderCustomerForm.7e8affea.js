var b=Object.defineProperty;var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(o,r,t)=>r in o?b(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,l=(o,r)=>{for(var t in r||(r={}))h.call(r,t)&&g(o,t,r[t]);if(f)for(var t of f(r))y.call(r,t)&&g(o,t,r[t]);return o};var d=(o,r,t)=>new Promise((i,p)=>{var u=e=>{try{m(t.next(e))}catch(s){p(s)}},a=e=>{try{m(t.throw(e))}catch(s){p(s)}},m=e=>e.done?i(e.value):Promise.resolve(e.value).then(u,a);m((t=t.apply(o,r)).next())});import{B as C}from"./BasicForm.e6ef05c4.js";import"./componentMap.6f8f51f6.js";import{u as D}from"./useForm.1a92e1aa.js";import{q as O,j,aN as w,m as $,r as k,s as q,Q as v,Z as x}from"./index.d13d32e3.js";import"./JAddInput.ec01e271.js";import{g as I}from"./data.4ff192f6.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./uniqBy.0dfdca3d.js";import"./index.1c9272fa.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./useFormItem.7e3b9788.js";import"./functional.fdb540f5.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./api.ae3b9cbd.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./areaDataUtil.b0d6c4f6.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";const J=j({name:"JeecgOrderCustomerForm",components:{BasicForm:C},props:{formData:w.object.def({})},setup(o){const[r,{setFieldsValue:t,setProps:i,getFieldsValue:p,updateSchema:u}]=D({labelWidth:150,schemas:I(o.formData),showActionButtonGroup:!1,baseColProps:{span:8}}),a=$(()=>o.formData.disabled!==!1);let m={};const e="/test/jeecgOrderMain/queryOrderCustomerListByMainId";function s(n){return d(this,null,function*(){let B={id:n};const c=yield x.get({url:e,params:B});if(console.log("data",c),c&&c.length>0){let _=c[0];m=l({},_),yield t(m),yield i({disabled:a.value})}})}function F(){return d(this,null,function*(){let n=l({},m);return Object.keys(n).length>0?n:!1})}return{registerForm:r,formDisabled:a,initFormData:s,getFormData:F}}});function M(o,r,t,i,p,u){const a=k("BasicForm");return q(),v(a,{onRegister:o.registerForm},null,8,["onRegister"])}const Bt=O(J,[["render",M]]);export{Bt as default};
