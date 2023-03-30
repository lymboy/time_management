var Ie=Object.defineProperty,Me=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var se=(e,i,l)=>i in e?Ie(e,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[i]=l,U=(e,i)=>{for(var l in i||(i={}))Oe.call(i,l)&&se(e,l,i[l]);if(le)for(var l of le(i))Pe.call(i,l)&&se(e,l,i[l]);return e},re=(e,i)=>Me(e,Ue(i));var ie=(e,i,l)=>new Promise((g,_)=>{var b=S=>{try{y(l.next(S))}catch(v){_(v)}},c=S=>{try{y(l.throw(S))}catch(v){_(v)}},y=S=>S.done?g(S.value):Promise.resolve(S.value).then(b,c);y((l=l.apply(e,i)).next())});import{cU as me,cV as Re,cW as He,cX as Ye,cY as je,cZ as Ve,c_ as Xe,c$ as de,d0 as $e,j as Ke,C as xe,d1 as ze,m as M,E as P,s as I,t as R,K as s,S as Ge,R as O,Q as W,w as H,y as oe,z as he,bg as Qe,B as ue,v as A,d2 as We,ax as q,bc as Ze,d3 as qe,by as Je,bz as et,d4 as tt,be as nt,I as J,d5 as at,bd as ct,o as lt,al as st,d6 as rt,h as it,aY as ee,d7 as fe,a8 as ye,aa as Y,X as dt,cP as ot,aL as ht,N as ke,O as ge,b6 as ut,d8 as ft,x as yt,d9 as pe,cw as kt,ac as $,aO as gt,aU as pt,aQ as Z,da as St,aT as Kt,db as xt,b0 as Lt,i as Ct,ay as Se,bh as At}from"./index.d13d32e3.js";import{createBEM as Le}from"./bem.0a70e06a.js";import{buildProps as bt}from"./props.1766c95e.js";import{useContextMenu as Et}from"./useContextMenu.17d08add.js";var Tt=200;function _t(e,i,l,g){var _=-1,b=Ye,c=!0,y=e.length,S=[],v=i.length;if(!y)return S;l&&(i=me(i,Re(l))),g?(b=je,c=!1):i.length>=Tt&&(b=Ve,c=!1,i=new He(i));e:for(;++_<y;){var L=e[_],h=l==null?L:l(L);if(L=g||L!==0?L:0,c&&h===h){for(var t=v;t--;)if(i[t]===h)continue e;S.push(L)}else b(i,h,g)||S.push(L)}return S}var vt=Xe(function(e,i){return de(e)?_t(e,$e(i,1,de,!0)):[]});const Bt=vt;var T=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(T||{});const Dt=["update:expandedKeys","update:selectedKeys","update:value","change","check","search","update:searchValue"],wt=bt({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1}}),Ft={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch justify-end"},Nt=Ke({__name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search","clickSearch"],setup(e,{emit:i}){const l=e,g=xe(""),[_]=Le("tree-header"),b=ze(),{t:c}=lt(),y=M(()=>{const t=b.headerTitle||l.title;return["mr-1","w-full",{["ml-5"]:t}]}),S=M(()=>{const{checkable:t}=l,a=[{label:c("component.tree.expandAll"),value:T.EXPAND_ALL},{label:c("component.tree.unExpandAll"),value:T.UN_EXPAND_ALL,divider:t}];return t?[{label:c("component.tree.selectAll"),value:T.SELECT_ALL},{label:c("component.tree.unSelectAll"),value:T.UN_SELECT_ALL,divider:t},...a,{label:c("component.tree.checkStrictly"),value:T.CHECK_STRICTLY},{label:c("component.tree.checkUnStrictly"),value:T.CHECK_UN_STRICTLY}]:a});function v(t){var r,d,u,o;const{key:a}=t;switch(a){case T.SELECT_ALL:(r=l.checkAll)==null||r.call(l,!0);break;case T.UN_SELECT_ALL:(d=l.checkAll)==null||d.call(l,!1);break;case T.EXPAND_ALL:(u=l.expandAll)==null||u.call(l,!0);break;case T.UN_EXPAND_ALL:(o=l.expandAll)==null||o.call(l,!1);break;case T.CHECK_STRICTLY:i("strictly-change",!1);break;case T.CHECK_UN_STRICTLY:i("strictly-change",!0);break}}function L(t){i("search",t)}const h=st(L,200);return P(()=>g.value,t=>{h(t)}),P(()=>l.searchText,t=>{t!==g.value&&(g.value=t)}),(t,a)=>(I(),R("div",{class:ue([s(_)(),"flex px-2 py-1.5 items-center"])},[s(b).headerTitle?Ge(t.$slots,"headerTitle",{key:0}):O("",!0),!s(b).headerTitle&&t.title?(I(),W(s(Qe),{key:1,helpMessage:t.helpMessage},{default:H(()=>[oe(he(t.title),1)]),_:1},8,["helpMessage"])):O("",!0),t.search||t.toolbar?(I(),R("div",Ft,[t.search?(I(),R("div",{key:0,class:ue(s(y))},[A(s(We),{placeholder:s(c)("common.searchText"),size:"small",allowClear:"",value:g.value,"onUpdate:value":a[0]||(a[0]=r=>g.value=r),onSearch:a[1]||(a[1]=r=>t.$emit("clickSearch",r))},null,8,["placeholder","value"])],2)):O("",!0),t.toolbar?(I(),W(s(ct),{key:1,onClick:a[2]||(a[2]=at(()=>{},["prevent"]))},{overlay:H(()=>[A(s(nt),{onClick:v},{default:H(()=>[(I(!0),R(q,null,Ze(s(S),r=>(I(),R(q,{key:r.value},[A(s(qe),Je(et({key:r.value})),{default:H(()=>[oe(he(r.label),1)]),_:2},1040),r.divider?(I(),W(s(tt),{key:0})):O("",!0)],64))),128))]),_:1})]),default:H(()=>[A(s(J),{icon:"ion:ellipsis-vertical"})]),_:1})):O("",!0)])):O("",!0)],2))}}),It=({icon:e})=>e?rt(e)?it(J,{icon:e,class:"mr-1"}):J:null;function Mt(e,i){function l(h){const t=[],a=h||s(e),{key:r,children:d}=s(i);if(!d||!r)return t;for(let u=0;u<a.length;u++){const o=a[u];t.push(o[r]);const k=o[d];k&&k.length&&t.push(...l(k))}return t}function g(h){const t=[],a=h||s(e),{key:r,children:d}=s(i);if(!d||!r)return t;for(let u=0;u<a.length;u++){const o=a[u];o.disabled!==!0&&o.selectable!==!1&&t.push(o[r]);const k=o[d];k&&k.length&&t.push(...g(k))}return t}function _(h,t){const a=[],r=t||s(e),{key:d,children:u}=s(i);if(!u||!d)return a;for(let o=0;o<r.length;o++){const k=r[o],E=k[u];h===k[d]?(a.push(k[d]),E&&E.length&&a.push(...l(E))):E&&E.length&&a.push(..._(h,E))}return a}function b(h,t,a){if(!h)return;const r=a||s(e),{key:d,children:u}=s(i);if(!(!u||!d))for(let o=0;o<r.length;o++){const k=r[o],E=k[u];if(k[d]===h){r[o]=U(U({},r[o]),t);break}else E&&E.length&&b(h,t,k[u])}}function c(h=1,t,a=1){if(!h)return[];const r=[],d=t||s(e)||[];for(let u=0;u<d.length;u++){const o=d[u],{key:k,children:E}=s(i),z=k?o[k]:"",m=E?o[E]:[];r.push(z),m&&m.length&&a<h&&(a+=1,r.push(...c(h,m,a)))}return r}function y({parentKey:h=null,node:t,push:a="push"}){const r=ee(s(e));if(!h){r[a](t),e.value=r;return}const{key:d,children:u}=s(i);!u||!d||(fe(r,o=>{if(o[d]===h)return o[u]=o[u]||[],o[u][a](t),!0}),e.value=r)}function S({parentKey:h=null,list:t,push:a="push"}){const r=ee(s(e));if(!(!t||t.length<1))if(h){const{key:d,children:u}=s(i);if(!u||!d)return;fe(r,o=>{if(o[d]===h){o[u]=o[u]||[];for(let k=0;k<t.length;k++)o[u][a](t[k]);return e.value=r,!0}})}else for(let d=0;d<t.length;d++)r[a](t[d])}function v(h,t){if(!h)return;const a=t||s(e),{key:r,children:d}=s(i);if(!(!d||!r))for(let u=0;u<a.length;u++){const o=a[u],k=o[d];if(o[r]===h){a.splice(u,1);break}else k&&k.length&&v(h,o[d])}}function L(h,t,a){return!h&&h!==0?null:((t||s(e)).forEach(d=>{if((a==null?void 0:a.key)||(a==null?void 0:a.key)===0)return a;if(d.key===h){a=d;return}d.children&&d.children.length&&(a=L(h,d.children,a))}),a||null)}return{deleteNodeByKey:v,insertNodeByKey:y,insertNodesByKey:S,filterByLevel:c,updateNodeByKey:b,getAllKeys:l,getChildrenKeys:_,getEnabledKeys:g,getSelectedNode:L}}function Ut(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const Yt=Ke({name:"BasicTree",inheritAttrs:!1,props:wt,emits:Dt,setup(e,{attrs:i,slots:l,emit:g,expose:_}){const[b]=Le("tree"),c=ye({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),y=ye({startSearch:!1,searchText:"",searchData:[]}),S=xe([]),[v]=Et(),L=M(()=>{const{fieldNames:n}=e;return U({children:"children",title:"title",key:"key"},n)}),h=M(()=>{let n=re(U(U({blockNode:!0},i),e),{expandedKeys:c.expandedKeys,selectedKeys:c.selectedKeys,checkedKeys:c.checkedKeys,checkStrictly:c.checkStrictly,fieldNames:s(L),"onUpdate:expandedKeys":f=>{c.expandedKeys=f,g("update:expandedKeys",f)},"onUpdate:selectedKeys":f=>{c.selectedKeys=f,g("update:selectedKeys",f)},onCheck:(f,K)=>{let p=$(c.checkedKeys);if(gt(p)&&y.startSearch){const{key:C}=s(L);p=Bt(p,z(K.node.$attrs.node[C])),K.checked&&p.push(K.node.$attrs.node[C]),c.checkedKeys=p}else c.checkedKeys=f;const x=$(c.checkedKeys);g("update:value",x),g("check",x,K)},onRightClick:be});return pt(n,"treeData","class")}),t=M(()=>y.startSearch?y.searchData:s(S)),a=M(()=>!t.value||t.value.length===0),{deleteNodeByKey:r,insertNodeByKey:d,insertNodesByKey:u,filterByLevel:o,updateNodeByKey:k,getAllKeys:E,getChildrenKeys:z,getEnabledKeys:m,getSelectedNode:Ce}=Mt(S,L);function Ae(n,f){return!f&&e.renderIcon&&Z(e.renderIcon)?e.renderIcon(n):f}function be(K){return ie(this,arguments,function*({event:n,node:f}){var F;const{rightMenuList:p=[],beforeRightClick:x}=e;let C={event:n,items:[]};if(x&&Z(x)){let B=yield x(f,n);Array.isArray(B)?C.items=B:Object.assign(C,B)}else C.items=p;!((F=C.items)!=null&&F.length)||(C.items=C.items.filter(B=>!B.hidden),v(C))})}function j(n){c.expandedKeys=n}function Ee(){return c.expandedKeys}function te(n){c.selectedKeys=n}function Te(){return c.selectedKeys}function ne(n){c.checkedKeys=n}function _e(){return c.checkedKeys}function ae(n){c.checkedKeys=n?m():[]}function G(n){c.expandedKeys=n?E():[]}function ve(n){c.checkStrictly=n}P(()=>e.searchValue,n=>{n!==y.searchText&&(y.searchText=n)},{immediate:!0}),P(()=>e.treeData,n=>{n&&Q(y.searchText)});function Q(n){if(n!==y.searchText&&(y.searchText=n),g("update:searchValue",n),!n){y.startSearch=!1;return}const{filterFn:f,checkable:K,expandOnSearch:p,checkOnSearch:x,selectedOnSearch:C}=s(e);y.startSearch=!0;const{title:F,key:B}=s(L),w=[];if(y.searchData=St(s(S),D=>{var V,X;const N=f?f(n,D,s(L)):(X=(V=D[F])==null?void 0:V.includes(n))!=null?X:!1;return N&&w.push(D[B]),N},s(L)),p){const D=Kt(y.searchData).map(N=>N[B]);D&&D.length&&j(D)}x&&K&&w.length&&ne(w),C&&w.length&&te(w)}function Be(n,f){if(!(!e.clickRowToExpand||!f||f.length===0))if(!c.expandedKeys.includes(n))j([...c.expandedKeys,n]);else{const K=[...c.expandedKeys],p=K.findIndex(x=>x===n);p!==-1&&K.splice(p,1),j(K)}}Y(()=>{S.value=e.treeData}),dt(()=>{const n=parseInt(e.defaultExpandLevel);n>0?c.expandedKeys=o(n):e.defaultExpandAll&&G(!0)}),Y(()=>{c.expandedKeys=e.expandedKeys}),Y(()=>{c.selectedKeys=e.selectedKeys}),Y(()=>{c.checkedKeys=e.checkedKeys}),P(()=>e.value,()=>{c.checkedKeys=$(e.value||[])},{immediate:!0}),P(()=>c.checkedKeys,()=>{const n=$(c.checkedKeys);g("update:value",n),g("change",n)}),Y(()=>{c.checkStrictly=e.checkStrictly});const De={setExpandedKeys:j,getExpandedKeys:Ee,setSelectedKeys:te,getSelectedKeys:Te,setCheckedKeys:ne,getCheckedKeys:_e,insertNodeByKey:d,insertNodesByKey:u,deleteNodeByKey:r,updateNodeByKey:k,getSelectedNode:Ce,checkAll:ae,expandAll:G,filterByLevel:n=>{c.expandedKeys=o(n)},setSearchValue:n=>{Q(n)},getSearchValue:()=>y.searchText};function we(n){const{actionList:f}=e;if(!(!f||f.length===0))return f.map((K,p)=>{var C;let x=!0;return Z(K.show)?x=(C=K.show)==null?void 0:C.call(K,n):Se(K.show)&&(x=K.show),x?A("span",{key:p,class:b("action")},[K.render(n)]):null})}const Fe=M(()=>{const n=ee(t.value);return xt(n,(f,K)=>{var ce;const p=y.searchText,{highlight:x}=s(e),{title:C,key:F,children:B}=s(L),w=Ae(f,f.icon),D=Lt(f,C),N=p?D.indexOf(p):-1,V=y.startSearch&&!Ct(p)&&x&&N!==-1,X=`color: ${Se(x)?"#f50":x}`,Ne=V?A("span",{class:(ce=s(h))!=null&&ce.blockNode?`${b("content")}`:""},[A("span",null,[D.substr(0,N)]),A("span",{style:X},[p]),A("span",null,[D.substr(N+p.length)])]):D;return f[C]=A("span",{class:`${b("title")} pl-2`,onClick:Be.bind(null,f[F],f[B])},[l!=null&&l.title?At(l,"title",f):A(q,null,[w&&A(It,{icon:w},null),Ne,A("span",{class:b("actions")},[we(f)])])]),f}),n});return _(De),()=>{let n;const{title:f,helpMessage:K,toolbar:p,search:x,checkable:C}=e,F=f||p||x||l.headerTitle,B={height:"calc(100% - 38px)"};return A("div",{class:[b(),"h-full",i.class]},[F&&A(Nt,{checkable:C,checkAll:ae,expandAll:G,title:f,search:x,toolbar:p,helpMessage:K,onStrictlyChange:ve,onSearch:Q,onClickSearch:w=>g("search",w),searchText:y.searchText},Ut(n=ot(l))?n:{default:()=>[n]}),A(ht,{spinning:s(e.loading),tip:"\u52A0\u8F7D\u4E2D..."},{default:()=>[ke(A(ut,{style:B},{default:()=>[A(ft,yt(s(h),{showIcon:!1,treeData:Fe.value}),null)]}),[[ge,!s(a)]]),ke(A(pe,{image:pe.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[ge,s(a)]])]})])}}});export{Yt as _};
