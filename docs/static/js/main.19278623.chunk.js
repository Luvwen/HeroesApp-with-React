(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{34:function(e,r,a){"use strict";a.r(r);var t=a(1),c=a(12),s=a.n(c),n=a(5),i=Object(t.createContext)(),l=a(6),o="[auth] Login",h="[auth], Logout",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case o:return Object(l.a)(Object(l.a)({},r.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},u=a(2),d=a(4),b=a(0),m=function(){var e=Object(u.g)(),r=Object(t.useContext)(i).dispatch;return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"LoginScreen"}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{onClick:function(){r({type:o,payload:{name:"Santiago"}});var a=localStorage.getItem("lastPath")||"/marvel";e(a,{replace:!0})},className:"btn btn-primary",children:"Login"})]})},p=function(){var e=Object(t.useContext)(i),r=e.user,a=e.dispatch,c=Object(u.g)();return Object(b.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(b.jsx)(d.b,{className:"navbar-brand ms-3 mb-1",to:"/",children:"Heroes"}),Object(b.jsx)("div",{className:"navbar-collapse",children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)(d.c,{className:function(e){return"nav-item nav-link "+(e.isActive&&"active")},to:"/marvel",children:"Marvel"}),Object(b.jsx)(d.c,{className:function(e){return"nav-item nav-link "+(e.isActive&&"active")},to:"/dc",children:"DC"}),Object(b.jsx)(d.c,{className:function(e){return"nav-item nav-link "+(e.isActive&&"active")},to:"/search",children:"Search"})]})}),Object(b.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end",children:Object(b.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(b.jsx)("span",{className:"nav-item nav-menu-item text-info mt-2",children:r.name}),Object(b.jsx)("button",{onClick:function(){a({type:h}),c("/login",{replace:!0})},className:"nav-item nav-link btn",children:"Logout"})]})})]})},O=(a(19),function(e){var r=e.id,a=e.superhero,t=(e.publisher,e.alter_ego),c=e.first_appearance,s=e.characters,n="/assets/heroes/".concat(r,".jpg");return Object(b.jsx)("div",{className:"col animate__animated animate__fadeIn",children:Object(b.jsx)("div",{className:"card h-100",children:Object(b.jsxs)("div",{className:"row no-gutters",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("img",{src:n,className:"card-img",alt:a})}),Object(b.jsx)("div",{className:"col-8",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:a}),Object(b.jsx)("p",{className:"card-text",children:t}),t!==s&&Object(b.jsx)("p",{className:"text-muted",children:s}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("small",{className:"text-muted",children:c})}),Object(b.jsx)(d.b,{to:"/hero/".concat(r),children:"Mas..."})]})})]})})})}),v=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],x=function(e){var r=e.publisher,a=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("".concat(e," is not a valid publisher"));return v.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(b.jsx)("div",{className:"row rows-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn",children:a.map((function(e){return Object(b.jsx)(O,Object(l.a)(Object(l.a)({},e),{},{children:e.superhero}),e.id)}))})},f=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"MarvelScreen"}),Object(b.jsx)(x,{publisher:"Marvel Comics"})]})},g=a(7),C=a(13),_=a.n(C),N=function(){var e=Object(u.g)(),r=Object(u.f)(),a=_.a.parse(r.search).q,c=void 0===a?"":a,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(t.useState)(e),a=Object(n.a)(r,2),c=a[0],s=a[1];return[c,function(e){var r=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(g.a)({},r.name,r.value)))},function(){s(e)}]}({searchText:c}),i=Object(n.a)(s,2),o=i[0],h=i[1],j=o.searchText,d=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLowerCase(),v.filter((function(r){return r.superhero.toLowerCase().includes(e)})))}(c)}),[c]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"B\xfasquedas"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-5",children:[Object(b.jsx)("h4",{children:"Buscar"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{onSubmit:function(r){r.preventDefault(),console.log(j),e("?q=".concat(j))},children:[Object(b.jsx)("input",{type:"text",placeholder:"Buscar un heroe",className:"form-control mt-4",name:"searchText",autoComplete:"off",value:j,onChange:h}),Object(b.jsx)("button",{className:"btn btn-outline-primary mt-3 ",type:"submit",children:"Buscar"})]})]}),Object(b.jsxs)("div",{className:"col-7",children:[Object(b.jsx)("h4",{children:"Resultados"}),Object(b.jsx)("hr",{}),""===c?Object(b.jsx)("div",{className:"alert alert-info animate__animated animate__fadeIn",children:Object(b.jsx)("b",{children:"Buscar un heroe"})}):0===d.length&&Object(b.jsxs)("div",{className:"alert alert-danger",children:["No hay resultados para: ",Object(b.jsx)("b",{children:c})]}),d.map((function(e){return Object(b.jsx)(O,Object(l.a)({},e),e.id)}))]})]})]})},y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"DCScreen"}),Object(b.jsx)(x,{publisher:"DC Comics"})]})},M=function(){var e=Object(u.h)().heroeId,r=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.find((function(r){return r.id===e}))}(e)}),[e]),a=Object(u.g)();if(!r)return Object(b.jsx)(u.a,{to:"/"});var c=r.id,s=r.superhero,n=r.publisher,i=r.alter_ego,l=r.first_appearance,o=r.characters,h="/assets/heroes/".concat(c,".jpg");return Object(b.jsxs)("div",{className:"row mt-5",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("img",{src:h,alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(b.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(b.jsx)("h3",{children:s}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsxs)("b",{children:["Alter ego: ",i]})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsxs)("b",{children:["Publisher: ",n]})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsxs)("b",{children:["First Appearence: ",l]})})]}),Object(b.jsx)("h5",{className:"mt-3",children:"Characters"}),Object(b.jsx)("p",{children:o}),Object(b.jsx)("button",{onClick:function(){return a(-1)},className:"btn btn-outline-info",children:"Regresar"})]})]})},S=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"marvel",element:Object(b.jsx)(f,{})}),Object(b.jsx)(u.b,{path:"search",element:Object(b.jsx)(N,{})}),Object(b.jsx)(u.b,{path:"dc",element:Object(b.jsx)(y,{})}),Object(b.jsx)(u.b,{path:"hero/:heroeId",element:Object(b.jsx)(M,{})}),Object(b.jsx)(u.b,{path:"/",element:Object(b.jsx)(f,{})})]})})]})},k=function(e){var r=e.children,a=Object(t.useContext)(i).user,c=Object(u.f)(),s=c.pathname,n=c.search;return localStorage.setItem("lastPath",s+n),a.logged?r:Object(b.jsx)(u.a,{to:"/login"})},D=function(e){var r=e.children;return Object(t.useContext)(i).user.logged?Object(b.jsx)(u.a,{to:"/marvel"}):r},w=function(){return Object(b.jsx)(d.a,{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"/login",element:Object(b.jsx)(D,{children:Object(b.jsx)(m,{})})}),Object(b.jsx)(u.b,{path:"/*",element:Object(b.jsx)(k,{children:Object(b.jsx)(S,{})})})]})})},B=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},A=function(){var e=Object(t.useReducer)(j,{},B),r=Object(n.a)(e,2),a=r[0],c=r[1];return Object(t.useEffect)((function(){a&&localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(b.jsxs)(i.Provider,{value:{user:a,dispatch:c},children:[Object(b.jsx)(w,{}),";"]})};s.a.render(Object(b.jsx)(A,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.19278623.chunk.js.map