(this.webpackJsonpreactstarter=this.webpackJsonpreactstarter||[]).push([[0],{18:function(e,t,a){e.exports=a(36)},23:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=(a(23),a(6)),i=a(1);var s=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],u=s[1],h=Object(i.f)(),v=/\w+/g;return c.a.createElement("div",{className:"home"},c.a.createElement("svg",{"aria-hidden":"true",className:"octicon",height:"64",role:"img",viewBox:"0 0 16 16",width:"64",style:{display:"inline-block",fill:"currentcolor",userSelect:"none",verticalAlign:"text-bottom"}},c.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})),c.a.createElement("h1",{style:{fontSize:"2.5rem"}},"Find Your Github Profile"),c.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),v.test(a)?fetch("https://api.github.com/users/".concat(a)).then((function(e){return e.json()})).then((function(e){"Not Found"!==e.message?h.push({pathname:"/profile",search:a,state:a}):u("Profile not found")})).catch((function(e){return console.log(e)})):u("Please enter a character"),r("")}},c.a.createElement("input",{type:"text",id:"input",onChange:function(e){return r(e.target.value)}})),c.a.createElement("p",null,m&&m))},m=a(10),u=a(17),h=a.n(u),v=a(31);var f=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],u=s[1],f=Object(n.useState)(""),d=Object(o.a)(f,2),p=d[0],g=d[1],E=Object(n.useState)([]),b=Object(o.a)(E,2),z=(b[0],b[1]),j=Object(n.useState)(6),w=Object(o.a)(j,2),H=w[0];function N(){var e=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),a=Math.floor(255*Math.random()),n=Math.floor(Math.random())+1;return"rgba(".concat(e,", ").concat(t,", ").concat(a,", ").concat(n,")")}w[1];var O=e.location.state;return Object(n.useEffect)((function(){fetch("https://api.github.com/users/".concat(O)).then((function(e){return e.json()})).then((function(e){return l(e),u(e.created_at),new Date(e.created_at)})).then((function(e){u(e.toLocaleString(void 0,{year:"numeric",month:"long",day:"numeric"}))})).catch((function(e){return console.log(e)}));var e=new v(O);e.userStats((function(e,t){var a=[];if(void 0!==t){a=t;for(var n=[],c=0;c<t.length;c++)n.push(N())}var r=document.getElementById("myChart");new h.a(r,{type:"doughnut",data:{labels:0!==a.length?a.map((function(e){return e.label})):null,datasets:[{label:"Top Languages",data:0!==a.length?a.map((function(e){return e.value})):null,backgroundColor:n,borderWidth:1}]}})})),e.getAllRepos((function(e,t){})),fetch("https://api.github.com/rate_limit").then((function(e){return e.json()})).then((function(e){g(e.rate.remaining),console.log(e)})).catch((function(e){return console.log(e)}))}),[O]),Object(n.useEffect)((function(){fetch("https://api.github.com/users/".concat(O,"/repos?per_page=").concat(H)).then((function(e){return e.json()})).then((function(e){z(e),console.log(e)})).catch((function(e){return console.log(e)}))}),[H,O]),c.a.createElement("div",{className:"profile"},c.a.createElement("div",{className:"rate"},c.a.createElement("p",null,p,"/60"),c.a.createElement("p",null,"Requests Left")),c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:r.avatar_url,alt:"avatar_url"})),c.a.createElement("h1",{className:"name"},r.name),c.a.createElement("h2",null,c.a.createElement("a",{href:r.html_url,className:"url",target:"_blank",rel:"noopener noreferrer"},"@",r.login)),c.a.createElement("div",{className:"info"},c.a.createElement("span",null,c.a.createElement("svg",{"aria-hidden":"true",className:"octicon",height:"16",role:"img",viewBox:"0 0 14 16",width:"14",style:{display:"inline-block",fill:"currentcolor",userSelect:"none",verticalAlign:"text-bottom"}},c.a.createElement("path",{fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"})),"    Joined ",m)),c.a.createElement("div",{className:"card-mini"},c.a.createElement("div",{className:"cards"},c.a.createElement("p",null,r.public_repos),c.a.createElement("p",null,"Repostories")),c.a.createElement("div",{className:"cards"},c.a.createElement("p",null,r.followers),c.a.createElement("p",null,"Followers")),c.a.createElement("div",{className:"cards"},c.a.createElement("p",null,r.following),c.a.createElement("p",null,"Following"))),c.a.createElement("div",{className:"stats"},c.a.createElement("div",{className:"lang"},c.a.createElement("h2",null,"Top languages"),c.a.createElement("canvas",{id:"myChart"}))),c.a.createElement("div",{className:"repos"},c.a.createElement("h2",{style:{textAlign:"center"}},"Repositories")))};var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:s}),c.a.createElement(i.a,{path:"/profile",exact:!0,component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.698d0b95.chunk.js.map