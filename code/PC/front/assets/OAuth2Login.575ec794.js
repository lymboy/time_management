import{j as h,C as a,eP as u,e3 as k,b5 as v,ev as A,eQ as c,cM as m,o as y,s as _,t as L,u as w}from"./index.d13d32e3.js";const E=h({__name:"OAuth2Login",setup(x){const l=a(u()),e=a({thirdApp:!1,wxWork:!1,dingtalk:!1}),{currentRoute:g}=k(),s=g.value;u()||v.replace({path:A.BASE_LOGIN,query:s.query}),l.value&&p();function p(){/wxwork/i.test(navigator.userAgent)&&(e.value.thirdApp=!0,e.value.wxWork=!0),/dingtalk/i.test(navigator.userAgent)&&(e.value.thirdApp=!0,e.value.dingtalk=!0),f()}function f(){if(e.value.thirdApp)if(s.query.oauth2LoginToken){let n=s.query.oauth2LoginToken;d({token:n,thirdType:s.query.thirdType})}else e.value.wxWork?c("wechat_enterprise"):e.value.dingtalk&&c("dingtalk")}function d(n){const i=m(),{notification:r}=w(),{t:o}=y();i.ThirdLogin(n).then(t=>{t&&t.userInfo?r.success({message:o("sys.login.loginSuccessTitle"),description:`${o("sys.login.loginSuccessDesc")}: ${t.userInfo.realname}`,duration:3}):r.error({message:o("sys.login.errorTip"),description:((t.response||{}).data||{}).message||t.message||o("sys.login.networkExceptionMsg"),duration:4})})}return(n,i)=>(_(),L("div"))}});export{E as default};