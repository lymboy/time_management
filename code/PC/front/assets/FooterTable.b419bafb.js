import s from"./BasicTable.7f769694.js";import"./componentMap.6f8f51f6.js";import"./BasicTable.vue_vue_type_style_index_0_lang.734e51fc.js";import"./TableImg.vue_vue_type_style_index_0_lang.c653d5f6.js";import{u as n}from"./useTable.c77f7905.js";import{getBasicColumns as u}from"./tableData.de5b3584.js";import{d as a}from"./table.b476b332.js";import{j as c,q as l,r as _,s as d,t as f,v as B}from"./index.d13d32e3.js";import"./BasicForm.e6ef05c4.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./uniqBy.0dfdca3d.js";import"./index.1c9272fa.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./useFormItem.7e3b9788.js";import"./functional.fdb540f5.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./JAddInput.ec01e271.js";import"./areaDataUtil.b0d6c4f6.js";import"./api.ae3b9cbd.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./useForm.1a92e1aa.js";import"./index.9013d2b9.js";import"./useContentHeight.729fdab1.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";import"./RedoOutlined.a7479f77.js";const b=c({components:{BasicTable:s},setup(){function o(m){const t=m.reduce((r,e)=>(r+=e.no,r),0);return[{_row:"\u5408\u8BA1",_index:"\u5E73\u5747\u503C",no:t},{_row:"\u5408\u8BA1",_index:"\u5E73\u5747\u503C",no:t}]}const[i]=n({title:"\u8868\u5C3E\u884C\u5408\u8BA1\u793A\u4F8B",api:a,rowSelection:{type:"checkbox"},columns:u(),showSummary:!0,summaryFunc:o,scroll:{x:1e3},canResize:!1});return{registerTable:i}}}),C={class:"p-4"};function T(o,i,m,t,r,e){const p=_("BasicTable");return d(),f("div",C,[B(p,{onRegister:o.registerTable},null,8,["onRegister"])])}const co=l(b,[["render",T]]);export{co as default};