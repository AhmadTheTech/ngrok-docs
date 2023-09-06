"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[75211],{6470:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(59496),i=n(13352),r=n(7426);function a(e){let{name:t}=e;const n=(0,r.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),a=[];let s=[];for(let r=0;r<n.docs.length;r++){const{contentTitle:e,excerpt:t,path:c,frontMatter:l}=n.docs[r];s.push(o.createElement(i.Z,{to:c,size:"sm",title:l?.title||e,description:l?.description||t})),(2==s.length||n.docs.length<2||r==n.docs.length-1)&&(a.push(o.createElement("div",{className:"ngrok--cards ngrok--cards-row"},s)),s=[])}return o.createElement(o.Fragment,null,a)}},13352:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(59496),i=n(45924),r=n(62515);function a(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return o.createElement("h4",{className:"fw-600"},n);case"xl":return o.createElement("h2",{className:"fw-600"},n);default:return o.createElement("h3",{className:"fw-600"},n)}}function s(e){let{size:t,title:n,icon:i}=e;return i?o.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&o.createElement(a,{size:t,title:n}),i):n?o.createElement("div",{className:"ngrok--card-heading"},o.createElement(a,{size:t,title:n})):null}function c(e){let{to:t,note:n=!1,size:a="",title:c,img:l="",icon:d=!1,description:m=!1,descriptionLink:g=!1}=e;a=a.toLowerCase();let u=(0,i.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==a,"ngrok--card-lg":"lg"==a,"ngrok--card-xl":"xl"==a});return o.createElement(r.Z,{to:t},o.createElement("div",{className:u},l&&o.createElement("img",{src:l}),o.createElement(s,{size:a,title:c,icon:d}),m&&o.createElement("p",null,m),g&&o.createElement("a",null,g)))}},82872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(51163),i=(n(59496),n(49613)),r=n(6470);const a={name:"box",title:"Box Integration Hub",sidebar_label:"Box",description:"Monitor Box content for events and receive notifications when critical file changes occur. \nAll with security and access from ngrok.\n",excerpt:"Securely monitor Box events and notifications using ngrok.\n"},s=void 0,c={unversionedId:"integrations/box/index",id:"integrations/box/index",title:"Box Integration Hub",description:"Monitor Box content for events and receive notifications when critical file changes occur. \nAll with security and access from ngrok.\n",source:"@site/docs/integrations/box/index.mdx",sourceDirName:"integrations/box",slug:"/integrations/box/",permalink:"/docs/integrations/box/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/box/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"box",title:"Box Integration Hub",sidebar_label:"Box",description:"Monitor Box content for events and receive notifications when critical file changes occur. \nAll with security and access from ngrok.\n",excerpt:"Securely monitor Box events and notifications using ngrok.\n"},sidebar:"docs",previous:{title:"Bitbucket Repository Webhooks",permalink:"/docs/integrations/bitbucket/webhooks"},next:{title:"Box Webhooks",permalink:"/docs/integrations/box/webhooks"}},l={},d=[],m={toc:d},g="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,a.description),(0,i.kt)(r.Z,{name:a.name,mdxType:"IntegrationPageList"}))}u.isMDXComponent=!0}}]);