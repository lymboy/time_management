import{e4 as p,e3 as g,o as _,cM as v,u as F,q as m,s as E,t as k,dt as B}from"./index.d13d32e3.js";const h={name:"TokenLogin",setup(){const u=p();let n=g();const{createMessage:t,notification:s}=F(),{t:a}=_(),o=u.query;o||t.warning("\u53C2\u6570\u65E0\u6548");const d=o.loginToken;d||t.warning("token\u65E0\u6548"),v().ThirdLogin({token:d,thirdType:"email"}).then(e=>{console.log("res====>doThirdLogin",e),e&&e.userInfo?l(e):r(e)});function r(e){s.error({message:"\u767B\u5F55\u5931\u8D25",description:((e.response||{}).data||{}).message||e.message||"\u8BF7\u6C42\u51FA\u73B0\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",duration:4})}function l(e){let i=o.info;if(i){let c=JSON.parse(i),f="/task/handle/"+c.taskId;n.replace({path:f,query:c}),s.success({message:a("sys.login.loginSuccessTitle"),description:`${a("sys.login.loginSuccessDesc")}: ${e.userInfo.realname}`,duration:3})}else s.error({message:"\u53C2\u6570\u5931\u6548",description:"\u9875\u9762\u8DF3\u8F6C\u53C2\u6570\u4E22\u5931\uFF0C\u8BF7\u67E5\u770B\u65E5\u5FD7",duration:4})}}},y="/resource/img/logo.png";const S={class:"app-loading"},T=B('<div class="app-loading-wrap" data-v-fd74df2e><img src="'+y+'" class="app-loading-logo" alt="Logo" data-v-fd74df2e><div class="app-loading-dots" data-v-fd74df2e><span class="dot dot-spin" data-v-fd74df2e><i data-v-fd74df2e></i><i data-v-fd74df2e></i><i data-v-fd74df2e></i><i data-v-fd74df2e></i></span></div><div class="app-loading-title" data-v-fd74df2e>JeecgBoot \u4F01\u4E1A\u7EA7\u4F4E\u4EE3\u7801\u5E73\u53F0</div></div>',1),C=[T];function D(u,n,t,s,a,o){return E(),k("div",S,C)}const q=m(h,[["render",D],["__scopeId","data-v-fd74df2e"]]);export{q as default};
