import{B as s}from"./BasicForm.e6ef05c4.js";import"./componentMap.6f8f51f6.js";import{u as n}from"./useForm.1a92e1aa.js";import"./JAddInput.ec01e271.js";import{j as a,Z as l,f5 as c,r as u,s as d,t as f,v as F}from"./index.d13d32e3.js";import{p as g}from"./pick.2cb7a7a2.js";import"./_flatRest.298c1393.js";import"./isArray.bed9f286.js";import"./toString.f51d8d11.js";import"./_arrayPush.f667b98f.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./uniqBy.0dfdca3d.js";import"./index.1c9272fa.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./useFormItem.7e3b9788.js";import"./functional.fdb540f5.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./api.ae3b9cbd.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./areaDataUtil.b0d6c4f6.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";const h=()=>[{field:"name",component:"Input",label:"\u540D\u79F0"},{field:"age",component:"InputNumber",label:"\u5E74\u9F84",componentProps:{style:{width:"100%"}}},{field:"sex",label:"\u6027\u522B",component:"JDictSelectTag",componentProps:{dictCode:"sex"}},{field:"birthday",component:"DatePicker",label:"\u751F\u65E5",componentProps:{valueFormat:"YYYY-MM-DD",style:{width:"100%"}}},{field:"email",component:"Input",label:"\u90AE\u7BB1"}],B=a({components:{BasicForm:s},props:["id"],setup(o){const[e,{setFieldsValue:r}]=n({schemas:h(),showActionButtonGroup:!1,baseColProps:{span:24}});let m={id:o.id};return l.get({url:"/test/jeecgDemo/queryById",params:m},{isTransformResponse:!1}).then(t=>{if(t.success){let p=g(t.result,"name","age","birthday","sex","email");r(p)}}),{registerForm:e}}}),_={style:{margin:"50px auto",width:"800px"}};function b(o,e,r,m,t,p){const i=u("BasicForm");return d(),f("div",_,[F(i,{onRegister:o.registerForm},null,8,["onRegister"])])}var io=c(B,[["render",b]]);export{io as default};
