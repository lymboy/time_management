import{B as $}from"./index.1c9272fa.js";import L from"./OnlineForm.08d487b5.js";import{k as O}from"./useAutoForm.b2fe16b6.js";import{C as A}from"./CommentPanel.f838c172.js";import{j as V,C as _,E as j,f5 as W,r as u,s as c,Q as f,w as a,t as z,ax as Q,bc as q,y as C,z as G,R as H,v as h,x as J}from"./index.d13d32e3.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./componentMap.6f8f51f6.js";import"./JAddInput.ec01e271.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang.0c9bff57.js";import"./pick.2cb7a7a2.js";import"./_flatRest.298c1393.js";import"./isArray.bed9f286.js";import"./toString.f51d8d11.js";import"./_arrayPush.f667b98f.js";import"./omit.f85ed7ec.js";import"./_baseClone.2b814275.js";import"./OnlineSelectCascade.dcd3a21e.js";import"./BasicTable.vue_vue_type_style_index_0_lang.734e51fc.js";import"./TableImg.vue_vue_type_style_index_0_lang.c653d5f6.js";import"./Area.34bf1346.js";import"./functional.fdb540f5.js";import"./LinkTableListPiece.ef0939db.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./BasicForm.e6ef05c4.js";import"./useForm.1a92e1aa.js";import"./FormSchemaFactory.4d3f70be.js";import"./uniqBy.0dfdca3d.js";import"./useFormItem.7e3b9788.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./areaDataUtil.b0d6c4f6.js";import"./api.ae3b9cbd.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";import"./user.api.bbb5fbe4.js";import"./_commonjsHelpers.238e4417.js";import"./customExpression.05dc2408.js";import"./BasicTable.7f769694.js";import"./index.9013d2b9.js";import"./useContentHeight.729fdab1.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";import"./RedoOutlined.a7479f77.js";import"./useListPage.6b1e9ff2.js";import"./useTable.c77f7905.js";import"./JModalTip.00279615.js";import"./EditOutlined.cf2b97fa.js";import"./_baseSlice.213136cd.js";var K=(e,l,t)=>new Promise((s,p)=>{var d=o=>{try{m(t.next(o))}catch(n){p(n)}},r=o=>{try{m(t.throw(o))}catch(n){p(n)}},m=o=>o.done?s(o.value):Promise.resolve(o.value).then(d,r);m((t=t.apply(e,l)).next())});const U=V({name:"OnlineModal",props:{id:{type:String,default:""}},components:{BasicModal:$,OnlineForm:L,CommentPanel:A},emits:["success","register","formConfig"],setup(e,{emit:l}){console.log("\u8FDB\u5165\u8868\u5355\u5F39\u6846\u300B\u300B\u300B\u300Bmodal");const t=_();function s(){t.value&&t.value.reload()}const{title:p,modalWidth:d,registerModal:r,closeModal:m,cgButtonList:o,handleCgButtonClick:n,disableSubmit:i,handleSubmit:b,submitLoading:g,handleCancel:k,handleFormConfig:v,onlineFormCompRef:y,formTemplate:F,isTreeForm:S,pidFieldName:N,renderSuccess:R,formRendered:I,tableName:M,formDataId:w,enableComment:T,onCloseEvent:B}=O(!1,{emit:l},s);function D(P){l("success",P),m(),B()}j(()=>e.id,E,{immediate:!0});function E(){return K(this,null,function*(){I.value=!1,e.id&&(console.log("\u91CD\u65B0\u6E32\u67D3\u8868\u5355\u300B\u300B\u300B\u300Bmodal"),yield v(e.id,{}))})}return{title:p,onlineFormCompRef:y,renderSuccess:R,registerModal:r,handleSubmit:b,handleSuccess:D,handleCancel:k,modalWidth:d,formTemplate:F,disableSubmit:i,cgButtonList:o,handleCgButtonClick:n,isTreeForm:S,pidFieldName:N,submitLoading:g,tableName:M,formDataId:w,enableComment:T,commentPanelRef:t,onCloseEvent:B}}});function X(e,l,t,s,p,d){const r=u("a-button"),m=u("online-form"),o=u("comment-panel"),n=u("BasicModal");return c(),f(n,J({title:e.title,onCancel:e.onCloseEvent,enableComment:e.enableComment,width:e.modalWidth},e.$attrs,{height:600,onRegister:e.registerModal,wrapClassName:"jeecg-online-modal",onOk:e.handleSubmit}),{footer:a(()=>[(c(!0),z(Q,null,q(e.cgButtonList,i=>(c(),f(r,{key:i.id,type:"primary",onClick:b=>e.handleCgButtonClick(i.optType,i.buttonCode),preIcon:i.buttonIcon?"ant-design:"+i.buttonIcon:""},{default:a(()=>[C(G(i.buttonName),1)]),_:2},1032,["onClick","preIcon"]))),128)),e.disableSubmit?H("",!0):(c(),f(r,{key:"submit",type:"primary",onClick:e.handleSubmit,loading:e.submitLoading},{default:a(()=>[C("\u786E\u5B9A")]),_:1},8,["onClick","loading"])),h(r,{key:"back",onClick:e.handleCancel},{default:a(()=>[C("\u5173\u95ED")]),_:1},8,["onClick"])]),comment:a(()=>[h(o,{ref:"commentPanelRef",tableName:e.tableName,dataId:e.formDataId},null,8,["tableName","dataId"])]),default:a(()=>[h(m,{ref:"onlineFormCompRef",id:e.id,disabled:e.disableSubmit,"form-template":e.formTemplate,isTree:e.isTreeForm,pidField:e.pidFieldName,onRendered:e.renderSuccess,onSuccess:e.handleSuccess},null,8,["id","disabled","form-template","isTree","pidField","onRendered","onSuccess"])]),_:1},16,["title","onCancel","enableComment","width","onRegister","onOk"])}var po=W(U,[["render",X]]);export{po as default};
