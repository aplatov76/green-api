import{u as m,a as _,r as j,b as w,g as x,j as a,I as i,B as g}from"./index-1Mlb42wc.js";const I="_wrapper_1jaw5_1",N="_container_1jaw5_8",f="_title_1jaw5_18",b="_field_1jaw5_21",v="_actions_1jaw5_24",k="_warning_1jaw5_29",e={wrapper:I,container:N,title:f,field:b,actions:v,warning:k},C=()=>{const s=m(),t=_(),c=x(),[n,r]=j.useState({idInstance:"",apiTokenInstance:""}),o=d=>h=>{r(u=>({...u,[d]:h}))},l=()=>{s(w.setAuthData(n)),t(c)},p=!n.idInstance||!n.apiTokenInstance;return{onSubmit:l,onChange:o,formData:n,isDisabled:p}},D=()=>{const{onSubmit:s,onChange:t,formData:c,isDisabled:n}=C();return a.jsx("div",{className:e.wrapper,children:a.jsxs("div",{className:e.container,children:[a.jsx("h2",{className:e.title,children:"Введите учетные данные"}),a.jsx("p",{className:e.warning,children:"Получать уведомления о входящих сообщениях и файлах: Да"}),a.jsx("p",{className:e.warning,children:"Все остальные значения инстанса, должны быть в статусе Нет"}),a.jsx(i,{type:"text",placeholder:"idInstance",label:"Инстанс",className:e.field,value:c.idInstance,onChange:t("idInstance")}),a.jsx(i,{type:"text",placeholder:"apiTokenInstance",label:"Токен",className:e.field,value:c.apiTokenInstance,onChange:t("apiTokenInstance")}),a.jsx("div",{className:e.actions,children:a.jsx(g,{theme:"primary",onClick:s,disabled:n,children:"Открыть чат"})})]})})},y="_wrapper_1kr66_1",A={wrapper:y},T=({children:s})=>a.jsx("div",{className:A.wrapper,children:s}),P=()=>a.jsx(T,{children:a.jsx(D,{})});export{P as default};
