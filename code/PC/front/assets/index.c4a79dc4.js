import f from"./BasicTable.7f769694.js";import{T as b}from"./componentMap.6f8f51f6.js";import"./BasicTable.vue_vue_type_style_index_0_lang.734e51fc.js";import"./TableImg.vue_vue_type_style_index_0_lang.c653d5f6.js";import{u as h}from"./useTable.c77f7905.js";import{a as g}from"./system.6dec2c3b.js";import"./index.1c9272fa.js";import{D as C,c as T,s as _}from"./DeptModal.b7147ce7.js";import{j as E,bI as D,q as B,r as e,s as M,t as S,v as i,w as s,y as R}from"./index.d13d32e3.js";import"./BasicForm.e6ef05c4.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./uniqBy.0dfdca3d.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./useFormItem.7e3b9788.js";import"./functional.fdb540f5.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./JAddInput.ec01e271.js";import"./areaDataUtil.b0d6c4f6.js";import"./api.ae3b9cbd.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./useForm.1a92e1aa.js";import"./index.9013d2b9.js";import"./useContentHeight.729fdab1.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";import"./RedoOutlined.a7479f77.js";const k=E({name:"system-dept",components:{BasicTable:f,DeptModal:C,TableAction:b},setup(){const[t,{openModal:r}]=D(),[p,{reload:m}]=h({title:"\u90E8\u95E8\u5217\u8868",api:g,columns:T,formConfig:{labelWidth:120,schemas:_},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(o){r(!0,{record:o,isUpdate:!0})}function n(o){console.log(o)}function a(){m()}return{registerTable:p,registerModal:t,handleCreate:l,handleEdit:c,handleDelete:n,handleSuccess:a}}});function w(t,r,p,m,l,c){const n=e("a-button"),a=e("TableAction"),o=e("BasicTable"),d=e("DeptModal");return M(),S("div",null,[i(o,{onRegister:t.registerTable},{tableTitle:s(()=>[i(n,{type:"primary",onClick:t.handleCreate},{default:s(()=>[R(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),action:s(({record:u})=>[i(a,{actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,u)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(d,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])])}const _t=B(k,[["render",w]]);export{_t as default};
