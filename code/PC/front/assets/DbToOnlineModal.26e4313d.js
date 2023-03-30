import{j as M,C as l,bH as y,Z as b,f5 as D,u as k,r as c,s as R,Q as S,w as r,v as d,y as g,aW as v}from"./index.d13d32e3.js";import A from"./BasicTable.7f769694.js";import"./componentMap.6f8f51f6.js";import"./BasicTable.vue_vue_type_style_index_0_lang.734e51fc.js";import"./TableImg.vue_vue_type_style_index_0_lang.c653d5f6.js";import{B as I}from"./index.1c9272fa.js";import{useListTable as N}from"./useListPage.6b1e9ff2.js";import"./BasicForm.e6ef05c4.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./uniqBy.0dfdca3d.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./useFormItem.7e3b9788.js";import"./functional.fdb540f5.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./JAddInput.ec01e271.js";import"./areaDataUtil.b0d6c4f6.js";import"./api.ae3b9cbd.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./useForm.1a92e1aa.js";import"./index.9013d2b9.js";import"./useContentHeight.729fdab1.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";import"./RedoOutlined.a7479f77.js";import"./useTable.c77f7905.js";const $=M({name:"TransDb2Online",components:{BasicModal:I,BasicTable:A},emits:["success","register"],setup(o,{emit:C}){const{createMessage:f}=k(),n=l("\u6682\u65E0\u6570\u636E"),s=l(!1),u=l(!1),a=l([]),t=l([]),[m,{closeModal:p}]=y(()=>{u.value=!1,n.value="\u6682\u65E0\u6570\u636E",i.value=[],h()}),[E,{setPagination:w},{rowSelection:T,selectedRowKeys:i}]=N({bordered:!0,columns:[{title:"\u8868\u540D",align:"left",dataIndex:"id"}],dataSource:t,maxHeight:300,locale:{emptyText:n},pagination:{showQuickJumper:!1,showSizeChanger:!1},clickToRowSelect:!0,showIndexColumn:!0,showActionColumn:!1,formConfig:{schemas:[{label:"\u8868\u540D",field:"tableName",component:"Input",componentProps:{style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u4EE5\u6A21\u7CCA\u7B5B\u9009",onChange:e=>B(e.target.value)},disabledLabelWidth:!0,itemProps:{labelCol:{sm:24,md:4},wrapperCol:{sm:24,md:20}}}],baseColProps:{xs:24,sm:24,md:24,lg:24,xl:24,xxl:24},showActionButtonGroup:!1}});function h(){return s.value=!0,b.get({url:"/online/cgform/head/queryTables/"},{errorMessageMode:"none"}).then(e=>(t.value=e,a.value=[...e],e),e=>{e.message=="noadminauth"?(n.value="\u975Eadmin\u7528\u6237\u65E0\u6743\u9650\u64CD\u4F5C\uFF01",f.warn(n.value)):console.error(e),t.value=[],a.value=[]}).finally(()=>{s.value=!1})}function B(e){a.value.length!==0&&(e?(t.value=a.value.filter(L=>L.id.toLowerCase().includes(e.toLowerCase())),n.value=t.value.length===0?"\u65E0\u7B5B\u9009\u7ED3\u679C":"\u6682\u65E0\u6570\u636E"):t.value=[...a.value],w({current:1}))}function F(){p()}function _(){if(!i.value||i.value.length==0){f.warning("\u8BF7\u9009\u62E9\u4E00\u5F20\u8868");return}else{u.value=!0;let e=i.value.join(",");b.post({url:"/online/cgform/head/transTables/"+e}).then(()=>{p(),C("success")}).finally(()=>u.value=!1)}}return{emptyText:n,confirmLoading:s,btnLoading:u,metaSource:a,handleTrans:_,handleCancel:F,queryTables:h,registerModal:m,registerTable:E,rowSelection:T,selectedRowKeys:i}}}),P=v("div",null,[g(" \u6CE8\uFF1A\u5BFC\u5165\u8868\u4F1A\u6392\u9664\u914D\u7F6E\u524D\u7F00\u8868 "),v("a",{href:"http://doc.jeecg.com/2043924",target:"_blank"}," \u53C2\u8003\u6587\u6863")],-1);function j(o,C,f,n,s,u){const a=c("BasicTable"),t=c("a-spin"),m=c("a-button"),p=c("BasicModal");return R(),S(p,{onRegister:o.registerModal,width:500,title:"\u4ECE\u6570\u636E\u5E93\u5BFC\u5165\u8868\u5355",confirmLoading:o.confirmLoading,onCancel:o.handleCancel},{footer:r(()=>[d(m,{onClick:o.handleCancel},{default:r(()=>[g("\u5173\u95ED")]),_:1},8,["onClick"]),d(m,{onClick:o.handleTrans,type:"primary",preIcon:"ant-design:swap",loading:o.confirmLoading||o.btnLoading},{default:r(()=>[g(" \u751F\u6210\u8868\u5355 ")]),_:1},8,["onClick","loading"])]),default:r(()=>[d(t,{spinning:o.confirmLoading},{default:r(()=>[d(a,{onRegister:o.registerTable,rowSelection:o.rowSelection,onTableRedo:o.queryTables},{tableTitle:r(()=>[P]),_:1},8,["onRegister","rowSelection","onTableRedo"])]),_:1},8,["spinning"])]),_:1},8,["onRegister","confirmLoading","onCancel"])}var De=D($,[["render",j]]);export{De as default};
