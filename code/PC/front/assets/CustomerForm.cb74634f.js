import{B as C}from"./BasicForm.e6ef05c4.js";import"./componentMap.6f8f51f6.js";import{u as B}from"./useForm.1a92e1aa.js";import"./JAddInput.ec01e271.js";import{j as g,dB as E,aB as i,h as F,u as h,q as v,r,s as A,Q as b,w as p,v as n}from"./index.d13d32e3.js";import{a as P}from"./index.9013d2b9.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./uniqBy.0dfdca3d.js";import"./index.1c9272fa.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./useFormItem.7e3b9788.js";import"./functional.fdb540f5.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./api.ae3b9cbd.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./areaDataUtil.b0d6c4f6.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";import"./useContentHeight.729fdab1.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";const m=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:e})=>F(i,{placeholder:"\u8BF7\u8F93\u5165",value:o[e],onChange:t=>{o[e]=t.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:E,PageWrapper:P,[i.name]:i},setup(){const{createMessage:o}=h(),[e,{setProps:t}]=B({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:e,schemas:m,handleSubmit:s=>{o.success("click search,values:"+JSON.stringify(s))},setProps:t}}});function q(o,e,t,s,x,I){const l=r("a-input"),c=r("BasicForm"),d=r("CollapseContainer"),f=r("PageWrapper");return A(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[n(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[n(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:a,field:u})=>[n(l,{value:a[u],"onUpdate:value":_=>a[u]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}const _o=v(S,[["render",q]]);export{_o as default};
