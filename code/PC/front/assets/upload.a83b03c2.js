import{k as l,Z as t}from"./index.d13d32e3.js";const{uploadUrl:e=""}=l();function a(o,u){return t.uploadFile({url:e,onUploadProgress:u},o)}function n(o,u){return t.uploadFile({url:`${e}/sys/common/upload`,onUploadProgress:u},o,{isReturnResponse:!0})}export{n as a,a as u};