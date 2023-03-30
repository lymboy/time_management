import{B as se}from"./BasicForm.e6ef05c4.js";import"./componentMap.6f8f51f6.js";import{u as ie}from"./useForm.1a92e1aa.js";import"./JAddInput.ec01e271.js";import{f5 as le,C as x,a8 as ue,E as Y,ac as U,r as E,s as L,t as A,v as g,w as D,aW as B,y as R,z as me,R as H,Z as ce,u as pe,dm as de,dn as fe}from"./index.d13d32e3.js";import{c as q,F as M}from"./FormSchemaFactory.4d3f70be.js";import{g as he,e as ge,f as _e,h as ye,i as W}from"./useAutoForm.b2fe16b6.js";import"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import"./JUploadModal.vue_vue_type_script_setup_true_lang.0c9bff57.js";import"./OnlineSelectCascade.dcd3a21e.js";import"./index.1c9272fa.js";import"./pick.2cb7a7a2.js";import"./_flatRest.298c1393.js";import"./isArray.bed9f286.js";import"./toString.f51d8d11.js";import"./_arrayPush.f667b98f.js";import"./BasicTable.vue_vue_type_style_index_0_lang.734e51fc.js";import"./TableImg.vue_vue_type_style_index_0_lang.c653d5f6.js";import"./Area.34bf1346.js";import"./functional.fdb540f5.js";import"./LinkTableListPiece.ef0939db.js";import"./BasicForm.vue_vue_type_style_index_0_lang.46537c39.js";import"./uniqBy.0dfdca3d.js";import"./BasicModal.d291574e.js";import"./useWindowSizeFn.67dc54bf.js";import"./useFormItem.7e3b9788.js";import"./download.1bc5d3ce.js";import"./base64Conver.030fa32c.js";import"./index.12d9094a.js";import"./index.d11dcab2.js";import"./useCountdown.ea4711fe.js";import"./index.5b75652b.js";import"./index.e9229284.js";import"./areaDataUtil.b0d6c4f6.js";import"./api.ae3b9cbd.js";import"./props.b623f34d.js";import"./index.61b0c164.js";import"./bem.0a70e06a.js";import"./props.1766c95e.js";import"./useContextMenu.17d08add.js";import"./index.89ad7068.js";import"./onMountedOrActivated.a5139741.js";import"./index.9bf7bffc.js";import"./htmlmixed.470d5886.js";import"./vue.aa2fc71b.js";/* empty css             */import"./depart.api.0bd5897e.js";import"./user.api.bbb5fbe4.js";import"./_commonjsHelpers.238e4417.js";import"./customExpression.05dc2408.js";import"./BasicTable.7f769694.js";import"./index.9013d2b9.js";import"./useContentHeight.729fdab1.js";import"./useContentViewHeight.c21fb651.js";import"./usePageContext.a7636151.js";import"./RedoOutlined.a7479f77.js";import"./useListPage.6b1e9ff2.js";import"./useTable.c77f7905.js";import"./JModalTip.00279615.js";import"./EditOutlined.cf2b97fa.js";var ve=Object.defineProperty,K=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,z=(i,a,s)=>a in i?ve(i,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[a]=s,N=(i,a)=>{for(var s in a||(a={}))Fe.call(a,s)&&z(i,s,a[s]);if(K)for(var s of K(a))we.call(a,s)&&z(i,s,a[s]);return i},k=(i,a,s)=>new Promise((u,y)=>{var V=f=>{try{F(s.next(f))}catch(w){y(w)}},v=f=>{try{F(s.throw(f))}catch(w){y(w)}},F=f=>f.done?u(f.value):Promise.resolve(f.value).then(V,v);F((s=s.apply(i,a)).next())});const be={name:"OnlineQueryForm",components:{BasicForm:se},props:{id:{type:String,default:""}},emits:["search","loaded"],setup(i,{emit:a}){const s="/online/cgform/api/getQueryInfoVue3/",u=x(null),y=x([]),V=x({xs:24,sm:24,md:12,lg:6,xl:6}),v=x(!1),F=x(!1),f=x({}),w=x([]),{createMessage:j}=pe(),p=ue({config:{},cache:{},param:{},status:!1});Y(()=>p.status,e=>k(this,null,function*(){console.log("-------------defaultValues\u53D1\u751F\u6539\u53D8,\u9700\u8981\u91CD\u7F6E\u8868\u5355---------------");const{config:t,cache:n,param:_}=U(p);let b=Object.assign({},t,n,_);yield G(b)}),{immediate:!0,deep:!0});function l(e,t){return k(this,null,function*(){p.cache=N({},e),p.param=N({},t),p.status=!p.status})}Y(()=>i.id,e=>{e?d():y.value=[]},{immediate:!0});function m(e){return k(this,null,function*(){let t=[],n={},_=Object.keys(e);for(let o of _){const r=e[o];let c=r.view;if(q[c]&&(r.view=q[c]),yield ge(o,r,n),r.mode=="group"&&(c=="date"||c=="datetime"||c=="number")){let S=M.createSlotFormSchema(o,r);t.push(S)}else if(r.view===_e){let S=ye(r,o);for(let O of S){let C=M.createFormSchema(O.key,O),I=W(t,O.key);I==-1?t.push(C):t[I]=C}}else if(W(t,o)==-1){let O=M.createFormSchema(o,r);t.push(O)}}t.sort(function(o,r){return o.order-r.order});let b=[];t.length>2&&(v.value=!0);let h=[];for(let o=0;o<t.length;o++){let r=t[o];r.setFormRef(u),r.noChange(),r.asSearchForm(),o>1&&(h.push(r.field),r.isHidden());let c=r.getFormItemSchema();r.slot=="groupDatetime"&&(c.colProps={xs:24,sm:24,md:12,lg:8,xl:8}),b.push(c)}w.value=h,y.value=b,p.config=N({},n),p.status=!p.status})}function d(){return k(this,null,function*(){let e=yield X(),t=J(e);a("loaded",e);let{formProperties:n,hasField:_}=Z(t,e);if(_==!1){y.value=[];return}yield m(n)})}function G(e){return k(this,null,function*(){yield he(u),console.log("rawValues",e),yield T(e),Object.keys(e).length>0&&P()})}function Z(e,t){const{searchFieldList:n,joinQuery:_,table:b}=t;let h=!1,o={};return e&&Object.keys(e).map(r=>{n.indexOf(r)>=0&&(_==!0?r.indexOf("@")<0?(o[b+"@"+r]=e[r],h=!0):(o[r]=e[r],h=!0):r.indexOf("@")<0&&(o[r]=e[r],h=!0))}),{formProperties:o,hasField:h}}function J(e){const{properties:t,searchFieldList:n,joinQuery:_,table:b}=e;let h={},o=1;return Object.keys(t).map(r=>{let c=t[r];if(c.view=="table"){let S=c.properties,O=o*100;Object.keys(S).map(C=>{let I=S[C];I.order=O+Number(I.order);let ne=r+"@"+C;h[ne]=I}),o++}else c.order=Number(c.order),h[r]=c}),h}function X(){let e=`${s}${i.id}`;return new Promise(t=>{ce.get({url:e},{isTransformResponse:!1}).then(n=>{n.success?t(n.result):(t(!1),j.warning(n.message))}).catch(()=>{j.warning("\u83B7\u53D6\u67E5\u8BE2\u6761\u4EF6\u5931\u8D25!"),t(!1)})})}const[$,{resetFields:ee,setFieldsValue:T,updateSchema:te,getFieldsValue:re}]=ie({schemas:y,showActionButtonGroup:!1,baseColProps:V,autoSubmitOnEnter:!0,submitFunc(){P()}});function P(){let e=re(),t=Object.assign({},U(p.param),ae(e));a("search",t,!0)}function oe(){return k(this,null,function*(){yield ee();const{config:e,param:t}=U(p);let n=Object.assign({},e,t);Object.keys(n).length>0&&(yield T(n)),a("search",n,!1)})}function ae(e){return Object.keys(e).map(t=>{e[t]&&e[t]instanceof Array&&(e[t]=e[t].join(","))}),e}return Y(()=>F.value,e=>{let t=w.value;if(t&&t.length>0){let n=[];for(let _ of t)n.push({field:_,show:e});te(n)}},{immediate:!1}),{onlineQueryFormRef:u,registerForm:$,initDefaultValues:l,toggleButtonShow:v,toggleSearchStatus:F,doSearch:P,resetSearch:oe,queryParams:f,formSchemas:y}}},Q=i=>(de("data-v-716ddf4f"),i=i(),fe(),i),Se={key:0,class:"jeecg-basic-table-form-container p-0"},Oe=Q(()=>B("span",{class:"group-query-string"},"~",-1)),xe=Q(()=>B("span",{class:"group-query-string"},"~",-1)),De=Q(()=>B("span",{class:"group-query-string"},"~",-1)),Ie={style:{float:"left",overflow:"hidden","margin-left":"10px"},class:"table-page-search-submitButtons"};function Ee(i,a,s,u,y,V){const v=E("a-date-picker"),F=E("a-input-number"),f=E("a-button"),w=E("a-icon"),j=E("a-col"),p=E("BasicForm");return u.formSchemas&&u.formSchemas.length>0?(L(),A("div",Se,[g(p,{ref:"onlineQueryFormRef",onRegister:u.registerForm},{groupDate:D(({model:l,field:m})=>[g(v,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u5F00\u59CB\u65E5\u671F",value:l[m+"_begin"],"onUpdate:value":d=>l[m+"_begin"]=d,style:{width:"calc(50% - 15px)","min-width":"100px"}},null,8,["value","onUpdate:value"]),Oe,g(v,{showTime:!1,valueFormat:"YYYY-MM-DD",placeholder:"\u7ED3\u675F\u65E5\u671F",value:l[m+"_end"],"onUpdate:value":d=>l[m+"_end"]=d,style:{width:"calc(50% - 15px)","min-width":"100px"}},null,8,["value","onUpdate:value"])]),groupDatetime:D(({model:l,field:m})=>[g(v,{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",placeholder:"\u5F00\u59CB\u65F6\u95F4",value:l[m+"_begin"],"onUpdate:value":d=>l[m+"_begin"]=d,style:{"min-width":"100px",width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"]),xe,g(v,{showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",placeholder:"\u7ED3\u675F\u65F6\u95F4",value:l[m+"_end"],"onUpdate:value":d=>l[m+"_end"]=d,style:{"min-width":"100px",width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"])]),groupNumber:D(({model:l,field:m})=>[g(F,{placeholder:"\u5F00\u59CB\u503C",value:l[m+"_begin"],"onUpdate:value":d=>l[m+"_begin"]=d,style:{width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"]),De,g(F,{placeholder:"\u7ED3\u675F\u503C",value:l[m+"_end"],"onUpdate:value":d=>l[m+"_end"]=d,style:{width:"calc(50% - 15px)"}},null,8,["value","onUpdate:value"])]),formFooter:D(()=>[g(j,{md:6,sm:8},{default:D(()=>[B("span",Ie,[g(f,{preIcon:"ant-design:search",type:"primary",onClick:u.doSearch},{default:D(()=>[R("\u67E5\u8BE2")]),_:1},8,["onClick"]),g(f,{preIcon:"ant-design:reload",type:"primary",onClick:u.resetSearch,style:{"margin-left":"8px"}},{default:D(()=>[R("\u91CD\u7F6E")]),_:1},8,["onClick"]),u.toggleButtonShow?(L(),A("a",{key:0,onClick:a[0]||(a[0]=l=>u.toggleSearchStatus=!u.toggleSearchStatus),style:{"margin-left":"8px"}},[R(me(u.toggleSearchStatus?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),g(w,{type:u.toggleSearchStatus?"up":"down"},null,8,["type"])])):H("",!0)])]),_:1})]),_:1},8,["onRegister"])])):H("",!0)}var Yt=le(be,[["render",Ee],["__scopeId","data-v-716ddf4f"]]);export{Yt as default};
