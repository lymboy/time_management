var j=(t,n,o)=>new Promise((e,u)=>{var p=i=>{try{l(o.next(i))}catch(d){u(d)}},g=i=>{try{l(o.throw(i))}catch(d){u(d)}},l=i=>i.done?e(i.value):Promise.resolve(i.value).then(p,g);l((o=o.apply(t,n)).next())});import{fs as Pe,j as je,bn as Ne,v as c,bt as He,bo as Re,cp as oe,av as ve,k as ze,C as F,a8 as Ve,Z as q,ac as Ue,a as ae,K as qe,u as Ye,c as J,ft as ge,fl as pe,fm as ie,en as he,E as se,q as Y,r as v,s as y,t as x,w as h,aW as a,y as D,ax as P,bc as ce,V as N,z as U,B as Z,R as T,dm as de,dn as re,aN as B,bI as We,bj as le,m as _e,N as xe,fu as Ge,O as Xe,Q as V,ea as Ze,cM as Be,X as Je,aa as ye,c9 as Qe}from"./index.d13d32e3.js";import{u as be,U as Ke}from"./JAddInput.ec01e271.js";import"./index.1c9272fa.js";import{j as et}from"./api.ae3b9cbd.js";import{c as tt}from"./functional.fdb540f5.js";import{_ as nt}from"./JUpload.vue_vue_type_style_index_0_lang.e5aaf763.js";import{E as ot}from"./EditOutlined.cf2b97fa.js";var at=function(){return{actions:Array,author:oe.any,avatar:oe.any,content:oe.any,prefixCls:String,datetime:oe.any}},st=je({compatConfig:{MODE:3},name:"AComment",props:at(),slots:["actions","author","avatar","content","datetime"],setup:function(n,o){var e=o.slots,u=Ne("comment",n),p=u.prefixCls,g=u.direction,l=function(r,m){return c("div",{class:"".concat(r,"-nested")},[m])},i=function(r){if(!r||!r.length)return null;var m=r.map(function(_,w){return c("li",{key:"action-".concat(w)},[_])});return m};return function(){var d,r,m,_,w,I,s,f,b,O,$,L=p.value,E=(d=n.actions)!==null&&d!==void 0?d:(r=e.actions)===null||r===void 0?void 0:r.call(e),R=(m=n.author)!==null&&m!==void 0?m:(_=e.author)===null||_===void 0?void 0:_.call(e),z=(w=n.avatar)!==null&&w!==void 0?w:(I=e.avatar)===null||I===void 0?void 0:I.call(e),k=(s=n.content)!==null&&s!==void 0?s:(f=e.content)===null||f===void 0?void 0:f.call(e),S=(b=n.datetime)!==null&&b!==void 0?b:(O=e.datetime)===null||O===void 0?void 0:O.call(e),A=c("div",{class:"".concat(L,"-avatar")},[typeof z=="string"?c("img",{src:z,alt:"comment-avatar"},null):z]),W=E?c("ul",{class:"".concat(L,"-actions")},[i(Array.isArray(E)?E:[E])]):null,G=c("div",{class:"".concat(L,"-content-author")},[R&&c("span",{class:"".concat(L,"-content-author-name")},[R]),S&&c("span",{class:"".concat(L,"-content-author-time")},[S])]),ue=c("div",{class:"".concat(L,"-content")},[G,c("div",{class:"".concat(L,"-content-detail")},[k]),W]),me=c("div",{class:"".concat(L,"-inner")},[A,ue]),te=He(($=e.default)===null||$===void 0?void 0:$.call(e));return c("div",{class:[L,Re({},"".concat(L,"-rtl"),g.value==="rtl")]},[me,te&&te.length?l(L,te):null])}}});const lt=Pe(st);var it={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"};const ct=it;function Se(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?Object(arguments[n]):{},e=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable}))),e.forEach(function(u){dt(t,u,o[u])})}return t}function dt(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var Ce=function(n,o){var e=Se({},n,o.attrs);return c(ve,Se({},e,{icon:ct}),null)};Ce.displayName="MessageOutlined";Ce.inheritAttrs=!1;const rt=Ce;var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"};const mt=ut;function Fe(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?Object(arguments[n]):{},e=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable}))),e.forEach(function(u){ft(t,u,o[u])})}return t}function ft(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var we=function(n,o){var e=Fe({},n,o.attrs);return c(ve,Fe({},e,{icon:mt}),null)};we.displayName="SmileOutlined";we.inheritAttrs=!1;const _t=we;var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"};const gt=vt;function Le(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?Object(arguments[n]):{},e=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable}))),e.forEach(function(u){pt(t,u,o[u])})}return t}function pt(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var Ie=function(n,o){var e=Le({},n,o.attrs);return c(ve,Le({},e,{icon:gt}),null)};Ie.displayName="UserAddOutlined";Ie.inheritAttrs=!1;const ht=Ie;const Oe="/assets/excel.73e31c52.svg",yt="/assets/other.c9fbb14a.svg",bt="/assets/pdf.f8d68ae5.svg",Ct="/assets/txt.8d556a18.svg",Ae="/assets/word.9460f3fc.svg",wt=ze(),It=wt.uploadUrl;let X="";const kt=()=>q.get({url:"/sys/comment/getFileViewDomain"}),xt=t=>q.get({url:"/sys/comment/listByForm",params:t}),St=t=>{let n={id:t};return q.get({url:"/sys/comment/queryById",params:n},{isTransformResponse:!1})},Ft=t=>q.get({url:"/sys/comment/fileList",params:t}),Lt=t=>q.delete({url:"/sys/comment/deleteOne",params:t},{joinParamsToUrl:!0}),Ot=t=>{let n="/sys/comment/addText";return q.post({url:n,params:t},{isTransformResponse:!1})},At=t=>q.get({url:"/sys/dataLog/queryDataVerList",params:t},{isTransformResponse:!1}),De=`${It}/sys/comment/addFile`;function Te(t){let n={biz:"comment",commentId:""};const{createMessage:o}=Ye(),e=F(!1);function u(i,d){return j(this,null,function*(){e.value=!0,setTimeout(()=>{e.value=!1},500),yield p(i),yield l(d)})}function p(i){return j(this,null,function*(){const{fromUserId:d,toUserId:r,commentId:m,commentContent:_}=i;let w={tableName:t.tableName,tableDataId:t.dataId,fromUserId:d,commentContent:_,toUserId:"",commentId:""};r&&(w.toUserId=r),m&&(w.commentId=m),n.commentId="";const I=yield Ot(w);if(I.success)n.commentId=I.result;else return o.warning(I.message),Promise.reject("\u4FDD\u5B58\u8BC4\u8BBA\u5931\u8D25")})}function g(i){return j(this,null,function*(){let d=De;const r=new FormData;return r.append("file",i),r.append("tableName",t.tableName),r.append("tableDataId",t.dataId),Object.keys(n).map(m=>{r.append(m,n[m])}),new Promise((m,_)=>{et(d,r).then(w=>{console.log("uploadMyFile",w),w&&w.data?w.data.result=="success"?m(1):(o.warning(w.data.message),_()):_()})})})}function l(i){return j(this,null,function*(){if(i&&i.length>0)for(let d=0;d<i.length;d++){let r=Ue(i[d]);yield g(r.originFileObj)}})}return{saveCommentAndFiles:u,buttonLoading:e}}function ke(){const t=Ve({}),n={xls:Oe,xlsx:Oe,pdf:bt,txt:Ct,docx:Ae,doc:Ae};function o(s){if(console.log("\u83B7\u53D6\u6587\u4EF6\u80CC\u666F\u56FE",s),r(s))return"none";{const f=s.name;if(!f)return"none";const b=f.substring(f.lastIndexOf(".")+1);console.log("suffix",b);let O=n[b];return O||(O=yt),O}}function e(s,f){return new Promise((b,O)=>{let $=new FileReader;s?($.readAsDataURL(s),$.onload=function(){let L=$.result;console.log("base",L),t[f]=L,console.log("imageSrcMap",t),b(L)}):O()})}function u(s){if(r(s)){let f=s.uid;e(s,f)}}function p(s){let f=ae(s.url);f&&window.open(f)}function g(s){let f=s.fileSize;return f?Math.round(f/1024)+" KB":"0B"}const l=F([]);function i(s){return u(s),l.value=[...l.value,s],console.log("selectFileList",qe(l)),!1}function d(s){const f=l.value.indexOf(s),b=l.value.slice();b.splice(f,1),l.value=b}function r(s){return(s.type||"").indexOf("image")>=0}function m(s){if(r(s)){let f=s.uid;if(f){if(t[f])return t[f]}else if(s.url)return ae(s.url)}return""}function _(s){let f=m(s);return f?{backgroundImage:"url('"+f+"')"}:{}}function w(s){return j(this,null,function*(){if(r(s)){let f=m(s);f&&tt({imageList:[f]})}else if(s.url){let f=ae(s.url);yield I(),window.open(X+"?officePreviewType=pdf&url="+encodeURIComponent(f))}})}function I(){return j(this,null,function*(){X||(X=yield kt()),X.startsWith("http")||(X="http://"+X)})}return{selectFileList:l,getBackground:o,getFileSize:g,downLoad:p,beforeUpload:i,handleRemove:d,isImage:r,getImageSrc:m,getImageAsBackground:_,viewImage:w}}function $e(t){const n=new RegExp("([^:]+)?(:[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?)","g");function o(p){return p?p.replace(n,function(g,l,i){const d=l||"";if(e(d,'alt="')||e(d,'data-text="'))return g;let r=t.findEmoji(i);return r?d+u(r):g}):""}function e(p,g){return p.endsWith(g)}function u(p){return`<span style="width: 24px" class="emoji-mart-emoji"><span class="my-emoji-icon emoji-set-apple emoji-type-image" style="${`position: absolute;top: -3px;left: 3px;width: 18px; height: 18px;background-position: ${p.getPosition()}`}"> </span> </span>`}return{globalEmojiIndex:t,getHtml:o}}function jt(){return window.innerHeight}const Ut={name:"UploadChunk",components:{Tooltip:J,UploadOutlined:be,FolderOutlined:ge,DownloadOutlined:pe,PaperClipOutlined:ie,DeleteOutlined:he},props:{visible:{type:Boolean,default:!1}},emits:["select"],setup(t,{emit:n}){const{selectFileList:o,beforeUpload:e,handleRemove:u,getBackground:p,isImage:g,getImageSrc:l,viewImage:i}=ke();function d(){let m=Ue(o.value);return console.log(m),m}function r(){o.value=[]}return se(()=>o.value,m=>{if(m&&m.length>0){let _=m[0].name;_&&n("select",_)}}),{selectFileList:o,beforeUpload:e,handleRemove:u,getBackground:p,getUploadFileList:d,clear:r,isImage:g,getImageSrc:l,viewImage:i}}};const Q=t=>(de("data-v-4da53e42"),t=t(),re(),t),Bt={key:0},Dt={class:"j-icon"},Tt={class:"inner-button"},$t={class:"j-icon"},Mt={class:"inner-button"},Et={key:0,class:"selected-file-warp"},Pt={class:"selected-file-list"},Nt={class:"item"},Ht={class:"complex"},Rt={class:"content"},zt={key:0,class:"content-top",style:{height:"100%"}},Vt={class:"content-top"},qt=["title"],Yt=["onClick"],Wt={class:"text"},Gt={class:"buttons"},Xt={class:"opt-icon"},Zt=Q(()=>a("div",{class:"item empty"},null,-1)),Jt=Q(()=>a("div",{class:"item empty"},null,-1)),Qt=Q(()=>a("div",{class:"item empty"},null,-1)),Kt=Q(()=>a("div",{class:"item empty"},null,-1)),en=Q(()=>a("div",{class:"item empty"},null,-1)),tn=Q(()=>a("div",{class:"item empty"},null,-1));function nn(t,n,o,e,u,p){const g=v("upload-outlined"),l=v("a-upload"),i=v("folder-outlined"),d=v("a-alert"),r=v("delete-outlined"),m=v("Tooltip");return o.visible?(y(),x("div",Bt,[c(d,{type:"info",class:"jeecg-comment-files",style:{margin:"0"}},{message:h(()=>[a("span",Dt,[c(l,{multiple:"","file-list":e.selectFileList,"onUpdate:fileList":n[0]||(n[0]=_=>e.selectFileList=_),showUploadList:!1,"before-upload":e.beforeUpload},{default:h(()=>[a("span",Tt,[c(g),D("\u4E0A\u4F20")])]),_:1},8,["file-list","before-upload"])]),a("span",$t,[a("span",Mt,[c(i),D("\u4ECE\u6587\u4EF6\u5E93\u9009\u62E9?")])])]),_:1}),e.selectFileList&&e.selectFileList.length>0?(y(),x("div",Et,[a("div",Pt,[(y(!0),x(P,null,ce(e.selectFileList,_=>(y(),x("div",Nt,[a("div",Ht,[a("div",Rt,[e.isImage(_)?(y(),x("div",zt,[a("div",{class:"content-image",style:N({height:"100%",backgroundImage:"url("+e.getImageSrc(_)+")"})},null,4)])):(y(),x(P,{key:1},[a("div",Vt,[a("div",{class:"content-icon",style:N({background:"url("+e.getBackground(_)+")  no-repeat"})},null,4)]),a("div",{class:"content-bottom",title:_.name},[a("span",null,U(_.name),1)],8,qt)],64))]),a("div",{class:Z(["layer",{"layer-image":e.isImage(_)}])},[a("div",{class:"next",onClick:w=>e.viewImage(_)},[a("div",Wt,U(_.name),1)],8,Yt),a("div",Gt,[a("div",Xt,[c(m,{title:"\u5220\u9664"},{default:h(()=>[c(r,{onClick:w=>e.handleRemove(_)},null,8,["onClick"])]),_:2},1024)])])],2)])]))),256)),Zt,Jt,Qt,D(),Kt,en,tn])])):T("",!0)])):T("",!0)}const on=Y(Ut,[["render",nn],["__scopeId","data-v-4da53e42"]]);const an={categories:{recent:"\u6700\u5E38\u7528\u7684",smileys:"\u8868\u60C5\u9009\u62E9",people:"\u4EBA\u7269&\u8EAB\u4F53",nature:"\u52A8\u7269&\u81EA\u7136",foods:"\u98DF\u7269&\u996E\u6599",activity:"\u6D3B\u52A8",places:"\u65C5\u884C&\u5730\u70B9",objects:"\u7269\u54C1",symbols:"\u7B26\u53F7",flags:"\u65D7\u5E1C"}},sn={name:"MyComment",components:{UserAddOutlined:ht,Tooltip:J,UserSelectModal:Ke,PaperClipOutlined:ie,UploadChunk:on,SmileOutlined:_t},props:{inner:B.bool.def(!1),inputFocus:{type:Boolean,default:!1}},emits:["cancel","comment"],setup(t,{emit:n}){const o=F(!1),e=F(),[u,{openModal:p}]=We(),g=F(!1),l=F("");function i(){console.log(l.value);let C=l.value;if(!C&&C!=="0")d.value=!0;else{g.value=!0;let M=[];o.value==!0&&(M=e.value.getUploadFileList()),n("comment",C,M),setTimeout(()=>{g.value=!1},350)}}const d=F(!1);se(l,()=>{let C=l.value;!C&&C!=="0"?d.value=!0:d.value=!1});function r(){n("cancel")}const m=F();se(()=>t.inputFocus,C=>{C==!0&&(l.value="",o.value==!0&&(e.value.clear(),o.value=!1))},{deep:!0,immediate:!0});function _(){p(!0,{isUpdate:!1})}function w(C){if(console.log("setValue",C),C&&C.length>0){const{label:M,value:H}=C[0];if(M&&H){let fe=`${M}[${H}]`,ne=l.value;ne?ne.endsWith("@")?l.value=ne+fe:l.value="@"+fe+" "+ne:l.value="@"+fe}}}function I(){}se(()=>l.value,C=>{C&&C.endsWith("@")&&_()});const s=F();function f(C){let M=l.value||"";M+=C,l.value=M,s.value.click()}const b=F(!1);function O(C){let M=l.value||"",H=C.colons;H.indexOf("::")>0&&(H=H.substring(0,H.indexOf(":")+1)),l.value=M+H,b.value=!1,W()}const $={width:"490px"};function L(C){console.log("handleClickBlank"),C.preventDefault(),C.stopPropagation(),b.value=!1,G.value=!0}function E(C){console.log("handleShowEmoji"),C.preventDefault(),C.stopPropagation(),b.value=!b.value}const R=le("$globalEmojiIndex"),{getHtml:z}=$e(R),k=_e(()=>{let C=l.value;return C?z(C):"\u8BF7\u8F93\u5165\u4F60\u7684\u8BC4\u8BBA\uFF0C\u53EF\u4EE5@\u6210\u5458"}),S=F(!1);function A(C){C.preventDefault(),C.stopPropagation(),S.value=!1,m.value.focus(),console.log(234),G.value=!0}function W(){S.value=!0}const G=F(!1),ue=_e(()=>!(l.value.length>0));function me(){l.value.length==0&&(G.value=!1,o.value=!1)}function te(C){l.value.length==0&&(l.value=C)}return{myComment:l,sendComment:i,noComment:r,disabledButton:d,buttonLoading:g,commentRef:m,registerModal:u,openSelectUser:_,setValue:w,handleCommentChange:I,uploadRef:e,uploadVisible:o,onSelectEmoji:f,optionsName:an,emojiButton:s,emojiIndex:R,showEmoji:O,pickerStyles:$,visibleEmoji:b,handleClickBlank:L,handleShowEmoji:E,commentHtml:k,showHtml:S,handleClickHtmlShower:A,handleBlur:W,commentActive:G,noConent:ue,changeActive:me,selectFirstFile:te}}};const ln=["innerHTML"],cn={key:0,class:"comment-buttons"},dn={style:{cursor:"pointer"}},rn={title:"\u8868\u60C5",style:{display:"inline-block"}},un={style:{position:"relative"}},mn={key:0},fn=a("span",null,null,-1);function _n(t,n,o,e,u,p){const g=v("user-add-outlined"),l=v("Tooltip"),i=v("PaperClipOutlined"),d=v("SmileOutlined"),r=v("a-button"),m=v("upload-chunk"),_=v("UserSelectModal"),w=v("Picker"),I=v("a-modal");return y(),x(P,null,[a("div",{class:Z({"comment-active":e.commentActive}),style:{border:"1px solid #eee",margin:"0",position:"relative"},onClick:n[5]||(n[5]=(...s)=>e.handleClickBlank&&e.handleClickBlank(...s))},[xe(a("textarea",{ref:"commentRef","onUpdate:modelValue":n[0]||(n[0]=s=>e.myComment=s),onInput:n[1]||(n[1]=(...s)=>e.handleCommentChange&&e.handleCommentChange(...s)),onBlur:n[2]||(n[2]=(...s)=>e.handleBlur&&e.handleBlur(...s)),class:"comment-content",rows:3,placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u8BC4\u8BBA\uFF0C\u53EF\u4EE5@\u6210\u5458"},null,544),[[Ge,e.myComment]]),a("div",{class:Z(["comment-content comment-html-shower",{"no-content":e.noConent,"top-div":e.showHtml,"bottom-div":e.showHtml==!1}]),innerHTML:e.commentHtml,onClick:n[3]||(n[3]=(...s)=>e.handleClickHtmlShower&&e.handleClickHtmlShower(...s))},null,10,ln),e.commentActive?(y(),x("div",cn,[a("div",dn,[c(l,{title:"\u9009\u62E9@\u7528\u6237"},{default:h(()=>[c(g,{onClick:e.openSelectUser},null,8,["onClick"])]),_:1}),c(l,{title:"\u4E0A\u4F20\u9644\u4EF6"},{default:h(()=>[c(i,{onClick:n[4]||(n[4]=s=>e.uploadVisible=!e.uploadVisible)})]),_:1}),a("span",rn,[c(d,{ref:"emojiButton",onClick:e.handleShowEmoji},null,8,["onClick"]),xe(a("div",un,null,512),[[Xe]])])]),e.commentActive?(y(),x("div",mn,[o.inner?(y(),V(r,{key:0,onClick:e.noComment,style:{"margin-right":"10px"}},{default:h(()=>[D("\u53D6\u6D88")]),_:1},8,["onClick"])):T("",!0),c(r,{type:"primary",onClick:e.sendComment,loading:e.buttonLoading,disabled:e.disabledButton},{default:h(()=>[D("\u53D1 \u9001")]),_:1},8,["onClick","loading","disabled"])])):T("",!0)])):T("",!0),c(m,{ref:"uploadRef",visible:e.uploadVisible,onSelect:e.selectFirstFile},null,8,["visible","onSelect"])],2),c(_,{labelKey:"realname",rowKey:"username",onRegister:e.registerModal,onGetSelectResult:e.setValue,isRadioSelection:""},null,8,["onRegister","onGetSelectResult"]),c(I,{visible:e.visibleEmoji,"onUpdate:visible":n[6]||(n[6]=s=>e.visibleEmoji=s),footer:null,wrapClassName:"emoji-modal",closable:!1,width:490},{title:h(()=>[fn]),default:h(()=>[c(w,{pickerStyles:e.pickerStyles,i18n:e.optionsName,data:e.emojiIndex,emoji:"grinning",showPreview:!1,infiniteScroll:!1,showSearch:!1,showSkinTones:!1,set:"apple",onSelect:e.showEmoji},null,8,["pickerStyles","i18n","data","onSelect"])]),_:1},8,["visible"])],64)}const vn=Y(sn,[["render",_n]]);const gn={name:"HistoryFileList",props:{dataList:{type:Array,default:()=>[]},isComment:{type:Boolean,default:!1}},components:{UploadOutlined:be,FolderOutlined:ge,DownloadOutlined:pe,PaperClipOutlined:ie,DeleteOutlined:he,Tooltip:J},setup(){const{getBackground:t,getFileSize:n,downLoad:o,isImage:e,getImageAsBackground:u,viewImage:p}=ke();return{getBackground:t,downLoad:o,getFileSize:n,isImage:e,getImageAsBackground:u,viewImage:p}}},K=t=>(de("data-v-e83913e0"),t=t(),re(),t),pn={class:"selected-file-list"},hn={class:"item"},yn={class:"complex"},bn={class:"content"},Cn={key:0,class:"content-top",style:{height:"100%"}},wn={class:"content-top"},In=["title"],kn=["onClick"],xn={class:"text"},Sn={class:"text"},Fn={class:"buttons"},Ln={class:"opt-icon"},On=K(()=>a("div",{class:"item empty"},null,-1)),An=K(()=>a("div",{class:"item empty"},null,-1)),jn=K(()=>a("div",{class:"item empty"},null,-1)),Un=K(()=>a("div",{class:"item empty"},null,-1)),Bn=K(()=>a("div",{class:"item empty"},null,-1)),Dn=K(()=>a("div",{class:"item empty"},null,-1));function Tn(t,n,o,e,u,p){const g=v("download-outlined"),l=v("Tooltip");return y(),x("div",{class:Z(["comment-file-his-list",o.isComment===!0?"in-comment":""])},[a("div",pn,[(y(!0),x(P,null,ce(o.dataList,i=>(y(),x("div",hn,[a("div",yn,[a("div",bn,[e.isImage(i)?(y(),x("div",Cn,[a("div",{class:"content-image",style:N(e.getImageAsBackground(i))},null,4)])):(y(),x(P,{key:1},[a("div",wn,[a("div",{class:"content-icon",style:N({background:"url("+e.getBackground(i)+")  no-repeat"})},null,4)]),a("div",{class:"content-bottom",title:i.name},[a("span",null,U(i.name),1)],8,In)],64))]),a("div",{class:Z(["layer",{"layer-image":e.isImage(i)}])},[a("div",{class:"next",onClick:d=>e.viewImage(i)},[a("div",xn,U(i.name),1),a("div",Sn,U(e.getFileSize(i)),1)],8,kn),a("div",Fn,[a("div",Ln,[c(l,{title:"\u4E0B\u8F7D"},{default:h(()=>[c(g,{onClick:d=>e.downLoad(i)},null,8,["onClick"])]),_:2},1024)])])],2)])]))),256)),On,An,jn,D(),Un,Bn,Dn])],2)}const Me=Y(gn,[["render",Tn],["__scopeId","data-v-e83913e0"]]);const $n=je({name:"CommentList",components:{MessageOutlined:rt,AComment:lt,Tooltip:J,MyComment:vn,Popconfirm:Ze,HistoryFileList:Me},props:{tableName:B.string.def(""),dataId:B.string.def(""),datetime:B.number.def(1)},setup(t){const n=F([]),{userInfo:o}=Be(),e=le("$dayjs");function u(){return o.realname?o.realname.substr(0,2):""}function p(){return o.avatar}function g(k){return k.fromUserAvatar?ae(k.fromUserAvatar):""}function l(k){return k.fromUserId_dictText?k.fromUserId_dictText.substr(0,2):"\u672A\u77E5"}function i(k){return k.toUser?k.fromUserId_dictText+" \u56DE\u590D "+k.fromUserId_dictText:k.fromUserId_dictText}function d(k){return k.createTime?e(k.createTime,"YYYY-MM-DD hh:mm:ss").fromNow():""}const r=F(300),m=F(300);Je(()=>{r.value=window.innerHeight-57-46-70-160,m.value=window.innerHeight-57-46-53-20});function _(){return j(this,null,function*(){const k={tableName:t.tableName,tableDataId:t.dataId,column:"createTime",order:"desc"},S=yield xt(k);if(!S||!S.records||S.records.length==0)n.value=[];else{let A=S.records;console.log(123,A),n.value=A}})}const{saveCommentAndFiles:w}=Te(t);function I(k,S,A){return j(this,null,function*(){console.log(S,k);let W={fromUserId:o.id,toUserId:k.fromUserId,commentId:k.id,commentContent:S};yield w(W,A),yield _()})}function s(k,S){return j(this,null,function*(){let A={fromUserId:o.id,commentContent:k};yield w(A,S),yield _(),b.value=!1,setTimeout(()=>{b.value=!0},100)})}function f(k){return j(this,null,function*(){const S={id:k.id};yield Lt(S),yield _()})}const b=F(!1);function O(k){let S=n.value;for(let A of S)A.commentStatus=!1;k.commentStatus=!0,b.value=!1,b.value=!0}ye(()=>{t.datetime&&t.tableName&&t.dataId&&_()});const $=le("$globalEmojiIndex"),{getHtml:L}=$e($),E=F();function R(){E.value.changeActive()}function z(k,S){return j(this,null,function*(){if(k==!0&&!S.commentId_dictText){const A=yield St(S.commentId);A.success==!0?S.commentId_dictText=A.result.commentContent:(console.error(A.message),S.commentId_dictText="\u8BE5\u8BC4\u8BBA\u5DF2\u88AB\u5220\u9664")}})}return{dataList:n,getAvatar:g,getAvatarText:l,getAuthor:i,getDateDiff:d,commentHeight:r,allHeight:m,replyComment:I,sendComment:s,getMyname:u,getMyAvatar:p,focusStatus:b,showReply:O,deleteComment:f,getHtml:L,handleClickItem:R,bottomCommentRef:E,visibleChange:z}}}),Ee=t=>(de("data-v-da01e140"),t=t(),re(),t),Mn={class:"comment-author"},En=Ee(()=>a("span",null,"\u56DE\u590D",-1)),Pn=["innerHTML"],Nn=["onClick"],Hn=Ee(()=>a("span",null,"\u5220\u9664",-1)),Rn=["innerHTML"],zn={key:0},Vn={key:0,class:"inner-comment"},qn={style:{position:"absolute",bottom:"0",left:"0",width:"100%",background:"#fff","border-top":"1px solid #eee"}};function Yn(t,n,o,e,u,p){const g=v("a-avatar"),l=v("message-outlined"),i=v("Tooltip"),d=v("Popconfirm"),r=v("history-file-list"),m=v("a-comment"),_=v("my-comment"),w=v("a-list-item"),I=v("a-list");return y(),x("div",{style:N({position:"relative",height:t.allHeight+"px"})},[c(I,{class:"jeecg-comment-list",header:"","item-layout":"horizontal","data-source":t.dataList,style:N({height:t.commentHeight+"px"})},{renderItem:h(({item:s})=>[c(w,{style:{"padding-left":"10px","flex-direction":"column"},onClick:t.handleClickItem},{default:h(()=>[c(m,null,{avatar:h(()=>[c(g,{class:"tx",src:t.getAvatar(s),alt:t.getAvatarText(s)},{default:h(()=>[D(U(t.getAvatarText(s)),1)]),_:2},1032,["src","alt"])]),author:h(()=>[a("div",Mn,[a("span",null,U(s.fromUserId_dictText),1),s.toUserId?(y(),x(P,{key:0},[En,a("span",null,U(s.toUserId_dictText),1),c(i,{class:"comment-last-content",onVisibleChange:f=>t.visibleChange(f,s)},{title:h(()=>[a("div",{innerHTML:t.getHtml(s.commentId_dictText)},null,8,Pn)]),default:h(()=>[c(l)]),_:2},1032,["onVisibleChange"])],64)):T("",!0)])]),datetime:h(()=>[a("div",null,[c(i,{title:s.createTime},{default:h(()=>[a("span",null,U(t.getDateDiff(s)),1)]),_:2},1032,["title"])])]),actions:h(()=>[a("span",{onClick:f=>t.showReply(s)},"\u56DE\u590D",8,Nn),c(d,{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",onConfirm:f=>t.deleteComment(s)},{default:h(()=>[Hn]),_:2},1032,["onConfirm"])]),content:h(()=>[a("div",{innerHTML:t.getHtml(s.commentContent),style:{"font-size":"15px"}},null,8,Rn),s.fileList&&s.fileList.length>0?(y(),x("div",zn,[c(r,{dataList:s.fileList,isComment:""},null,8,["dataList"])])):T("",!0)]),_:2},1024),s.commentStatus?(y(),x("div",Vn,[c(_,{inner:"",onCancel:f=>s.commentStatus=!1,onComment:(f,b)=>t.replyComment(s,f,b),inputFocus:t.focusStatus},null,8,["onCancel","onComment","inputFocus"])])):T("",!0)]),_:2},1032,["onClick"])]),_:1},8,["data-source","style"]),a("div",qn,[c(m,{style:{margin:"0 10px"}},{avatar:h(()=>[c(g,{class:"tx",src:t.getMyAvatar(),alt:t.getMyname()},{default:h(()=>[D(U(t.getMyname()),1)]),_:1},8,["src","alt"])]),content:h(()=>[c(_,{ref:"bottomCommentRef",onComment:t.sendComment,inputFocus:t.focusStatus},null,8,["onComment","inputFocus"])]),_:1})])],4)}const Wn=Y($n,[["render",Yn],["__scopeId","data-v-da01e140"]]);const Gn={name:"CommentFiles",components:{UploadOutlined:be,FolderOutlined:ge,JUpload:nt,DownloadOutlined:pe,PaperClipOutlined:ie,DeleteOutlined:he,Tooltip:J,HistoryFileList:Me},props:{tableName:B.string.def(""),dataId:B.string.def(""),datetime:B.number.def(1)},setup(t){const{userInfo:n}=Be(),o=F([]),e=F("");function u(){return j(this,null,function*(){const f={tableName:t.tableName,tableDataId:t.dataId},b=yield Ft(f);if(console.log("1111",b),!b||!b.records||b.records.length==0)o.value=[];else{let O=b.records;console.log(123,O),o.value=O}e.value=""})}ye(()=>{t.datetime&&t.tableName&&t.dataId&&u()});const{saveCommentAndFiles:p,buttonLoading:g}=Te(t),{selectFileList:l,beforeUpload:i,handleRemove:d,getBackground:r,isImage:m,getImageAsBackground:_,viewImage:w}=ke();function I(){l.value=[]}function s(){return j(this,null,function*(){let f={fromUserId:n.id,commentContent:"\u4E0A\u4F20\u4E86\u9644\u4EF6"};yield p(f,l.value),l.value=[],yield u()})}return{selectFileList:l,beforeUpload:i,handleRemove:d,getBackground:r,isImage:m,dataList:o,uploadFileUrl:De,quxiao:I,queding:s,buttonLoading:g,getImageAsBackground:_,viewImage:w}}},ee=t=>(de("data-v-94556a25"),t=t(),re(),t),Xn={class:"j-icon"},Zn={class:"inner-button"},Jn={class:"j-icon"},Qn={class:"inner-button"},Kn={key:0,class:"selected-file-warp"},eo={class:"selected-file-list"},to={class:"item"},no={class:"complex"},oo={class:"content"},ao={key:0,class:"content-top",style:{height:"100%"}},so={class:"content-top"},lo=["title"],io=["onClick"],co={class:"text"},ro={class:"buttons"},uo={class:"opt-icon"},mo=ee(()=>a("div",{class:"item empty"},null,-1)),fo=ee(()=>a("div",{class:"item empty"},null,-1)),_o=ee(()=>a("div",{class:"item empty"},null,-1)),vo=ee(()=>a("div",{class:"item empty"},null,-1)),go=ee(()=>a("div",{class:"item empty"},null,-1)),po=ee(()=>a("div",{class:"item empty"},null,-1)),ho={style:{"margin-bottom":"24px","margin-top":"18px","text-align":"right"}};function yo(t,n,o,e,u,p){const g=v("upload-outlined"),l=v("a-upload"),i=v("folder-outlined"),d=v("a-alert"),r=v("delete-outlined"),m=v("Tooltip"),_=v("a-button"),w=v("history-file-list");return y(),x("div",null,[c(d,{type:"info",class:"jeecg-comment-files"},{message:h(()=>[a("span",Xn,[c(l,{multiple:"","file-list":e.selectFileList,"onUpdate:fileList":n[0]||(n[0]=I=>e.selectFileList=I),showUploadList:!1,"before-upload":e.beforeUpload},{default:h(()=>[a("span",Zn,[c(g),D("\u4E0A\u4F20")])]),_:1},8,["file-list","before-upload"])]),a("span",Jn,[a("span",Qn,[c(i),D("\u4ECE\u6587\u4EF6\u5E93\u9009\u62E9?")])])]),_:1}),e.selectFileList&&e.selectFileList.length>0?(y(),x("div",Kn,[a("div",eo,[(y(!0),x(P,null,ce(e.selectFileList,I=>(y(),x("div",to,[a("div",no,[a("div",oo,[e.isImage(I)?(y(),x("div",ao,[a("div",{class:"content-image",style:N(e.getImageAsBackground(I))},null,4)])):(y(),x(P,{key:1},[a("div",so,[a("div",{class:"content-icon",style:N({background:"url("+e.getBackground(I)+")  no-repeat"})},null,4)]),a("div",{class:"content-bottom",title:I.name},[a("span",null,U(I.name),1)],8,lo)],64))]),a("div",{class:Z(["layer",{"layer-image":e.isImage(I)}])},[a("div",{class:"next",onClick:s=>e.viewImage(I)},[a("div",co,U(I.name),1)],8,io),a("div",ro,[a("div",uo,[c(m,{title:"\u5220\u9664"},{default:h(()=>[c(r,{onClick:s=>e.handleRemove(I)},null,8,["onClick"])]),_:2},1024)])])],2)])]))),256)),mo,fo,_o,D(),vo,go,po]),a("div",ho,[c(_,{onClick:e.quxiao},{default:h(()=>[D("\u53D6\u6D88")]),_:1},8,["onClick"]),c(_,{type:"primary",style:{"margin-left":"10px"},onClick:e.queding,loading:e.buttonLoading},{default:h(()=>[D("\u786E\u5B9A")]),_:1},8,["onClick","loading"])])])):T("",!0),c(w,{dataList:e.dataList},null,8,["dataList"])])}const bo=Y(Gn,[["render",yo],["__scopeId","data-v-94556a25"]]);const Co={name:"DataLogList",components:{PlusOutlined:Qe,EditOutlined:ot,Tooltip:J},props:{tableName:B.string.def(""),dataId:B.string.def(""),datetime:B.number.def(1)},setup(t){const n=le("$dayjs"),o=jt(),e=F(300);e.value=o-46-57-53-30;const u=F([]),p=F(0);function g(){return j(this,null,function*(){const d={dataTable:t.tableName,dataId:t.dataId,type:"comment"},r=yield At(d);if(!r||!r.result||r.result.length==0)u.value=[],p.value=-1;else{let m=r.result;p.value=m.length-1,console.log("log-list",m),u.value=m}})}ye(()=>{t.datetime&&t.tableName&&t.dataId&&(console.log(t.tableName,t.dataId),g())});function l(d){return d.createTime?n(d.createTime,"YYYY-MM-DD hh:mm:ss").fromNow():""}function i(){console.log("\u6B64\u529F\u80FD\u672A\u5F00\u653E")}return{height:e,lastIndex:p,dataList:u,getDateDiff:l,handleClickPerson:i}}},wo={class:"data-log-content"},Io={class:"logbox"},ko={class:"log-item"},xo={class:"log-item-icon"},So={class:"log-item-content"},Fo={class:"log-item-date"};function Lo(t,n,o,e,u,p){const g=v("plus-outlined"),l=v("edit-outlined"),i=v("Tooltip");return y(),x("div",{class:"data-log-scroll",style:N({height:e.height+"px"})},[a("div",wo,[a("div",Io,[(y(!0),x(P,null,ce(e.dataList,(d,r)=>(y(),x("div",ko,[a("span",xo,[e.lastIndex==r?(y(),V(g,{key:0,style:{"margin-top":"3px"}})):(y(),V(l,{key:1}))]),a("span",So,[a("a",{onClick:n[0]||(n[0]=(...m)=>e.handleClickPerson&&e.handleClickPerson(...m))},"@"+U(d.createBy),1),D(" "+U(d.dataContent),1)]),a("div",Fo,[c(i,{title:d.createTime},{default:h(()=>[a("span",null,U(e.getDateDiff(d)),1)]),_:2},1032,["title"])])]))),256))])])],4)}const Oo=Y(Co,[["render",Lo],["__scopeId","data-v-390f4761"]]);const Ao={name:"CommentPanel",components:{CommentList:Wn,CommentFiles:bo,DataLogList:Oo},props:{tableName:B.string.def(""),dataId:B.string.def(""),showComment:B.bool.def(!0),showFiles:B.bool.def(!0),showDataLog:B.bool.def(!0)},setup(t){const n=_e(()=>!!(t.dataId&&t.tableName)),o=F(1),e=F(1),u=F(1);function p(l){let i=new Date().getTime();l=="comment"?o.value=i:l=="file"?e.value=i:u.value=i}function g(){let l=new Date().getTime();o.value=l,e.value=l,u.value=l}return{showStatus:n,handleChange:p,datetime1:o,datetime2:e,datetime3:u,reload:g}}},jo={key:0,class:"comment-tabs-warp"};function Uo(t,n,o,e,u,p){const g=v("comment-list"),l=v("a-tab-pane"),i=v("comment-files"),d=v("data-log-list"),r=v("a-tabs"),m=v("a-empty");return e.showStatus?(y(),x("div",jo,[c(r,{onChange:e.handleChange,animated:!1},{default:h(()=>[o.showComment?(y(),V(l,{tab:"\u8BC4\u8BBA",key:"comment",class:"comment-list-tab"},{default:h(()=>[c(g,{tableName:o.tableName,dataId:o.dataId,datetime:e.datetime1},null,8,["tableName","dataId","datetime"])]),_:1})):T("",!0),o.showFiles?(y(),V(l,{tab:"\u6587\u4EF6",key:"file"},{default:h(()=>[c(i,{tableName:o.tableName,dataId:o.dataId,datetime:e.datetime2},null,8,["tableName","dataId","datetime"])]),_:1})):T("",!0),o.showDataLog?(y(),V(l,{tab:"\u65E5\u5FD7",key:"log"},{default:h(()=>[c(d,{tableName:o.tableName,dataId:o.dataId,datetime:e.datetime3},null,8,["tableName","dataId","datetime"])]),_:1})):T("",!0)]),_:1},8,["onChange"])])):(y(),V(m,{key:1,description:"\u65B0\u589E\u9875\u9762\u4E0D\u652F\u6301\u8BC4\u8BBA"}))}const Ho=Y(Ao,[["render",Uo],["__scopeId","data-v-6ade4602"]]);export{Ho as C};
