(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[3],{23:function(n,e,r){"use strict";r.r(e);var t=r(1),i=r(0),a=r.n(i),o=r(10),c=r.n(o),s=r(2),u=r(3);function l(){var n=Object(s.a)(["\n    *,\n    *::before,\n    *::after{\n        ","\n    }    \n\n    html{\n        ","\n    }\n\n    body {\n        ","\n    }\n"]);return l=function(){return n},n}function d(){var n=Object(s.a)(["\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n"]);return d=function(){return n},n}function f(){var n=Object(s.a)(["\n    box-sizing: border-box;\n\n    font-size: 62.5%; /*1rem==10px / 10px/16px=62.5%*/\n\n    @media only screen and (max-width: 31.25em){\n        font-size: 56.25%; /*1rem==9px / 9px/16px=56.25%*/\n    }\n"]);return f=function(){return n},n}function m(){var n=Object(s.a)(["\n    font-family: 'Helvetica';\n    color: #ccc;\n    font-weight: 300;\n    line-height: 1.6;\n"]);return m=function(){return n},n}var p=Object(u.b)(m()),b=Object(u.b)(f()),g=Object(u.b)(d()),j=Object(u.a)(l(),g,b,p),h=r(4);function y(){var n=Object(s.a)(["\ngrid-row: 2 / span 1;\ngrid-column: 1 / -1;\n\njustify-self: start;\nalign-self: start;  \n\nheight: 100%;\n  width: 100%;\n    \n  display: grid;\n  grid-template-rows: 1fr 3.5fr 2fr;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  align-items: center;\n  justify-items: center;\n\n  @media only screen and (max-width: 56.25em){\n    grid-template-rows: 1fr 3.5fr 2.5fr 2fr;\n    grid template-columns: 1fr;\n  }\n\n  @media only screen and (max-width: 31.25em){\n    grid-template-rows: 0.5fr 2fr 1.5fr 1fr;\n    grid-gap: 0.8rem;\n  }\n"]);return y=function(){return n},n}var x=u.c.div(y()),O=a.a.lazy((function(){return Promise.all([r.e(0),r.e(2),r.e(6)]).then(r.bind(null,69))})),v=a.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(7)]).then(r.bind(null,70))})),w=a.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(10)]).then(r.bind(null,72))})),z=a.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(8)]).then(r.bind(null,73))})),E=a.a.lazy((function(){return Promise.all([r.e(2),r.e(9)]).then(r.bind(null,71))})),k=function(n){var e=Object(i.useState)({isError:!1,message:""}),r=Object(h.a)(e,2),a=r[0],o=r[1],c=Object(i.useState)(""),s=Object(h.a)(c,2),u=s[0],l=s[1],d=Object(i.useState)(""),f=Object(h.a)(d,2),m=f[0],p=f[1],b=Object(i.useState)(""),g=Object(h.a)(b,2),j=g[0],y=g[1],k=function(n){l((null===n||void 0===n?void 0:n.locationKey)||""),p((null===n||void 0===n?void 0:n.city)||""),y((null===n||void 0===n?void 0:n.countryId)||"")},P=function(n){a.isError||o({isError:!0,message:n})};return Object(t.jsx)(x,{children:Object(t.jsxs)(i.Suspense,{fallback:Object(t.jsx)("div",{children:"Loading..."}),children:[Object(t.jsx)(O,{onLocationChoice:k,init:a.isError,onError:P}),a.isError?Object(t.jsx)(E,{show:!0,closeErrorMessage:function(){a.isError&&(k(null),o({isError:!1,message:""}))},message:a.message}):u?[Object(t.jsx)(v,{onError:P,locationKey:a.isError?null:u,data:u&&{city:m,country:j}},"CurrContainer"),Object(t.jsx)(w,{onError:P,locationKey:u},"DailyContainer"),Object(t.jsx)(z,{onError:P,locationKey:u},"ForecastContainer")]:null]})})},P=r(9),C=r.p+"static/media/coverPhoto.2fb44ada.jpg";function S(){var n=Object(s.a)(["\n  grid-row: 1 / span 1;\n  grid-column: 1 / -1;\n\n  justify-self: start;\n  align-self: start;\n"]);return S=function(){return n},n}function K(){var n=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  padding: 4rem;\n\n  background-image: url(",");  \n  background-size: cover;\n  background-position: center;\n\n  display: grid;\n  grid-template-rows: 1fr 6.5fr;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  align-items: center;\n  justify-items: center;\n\n  @media only screen and (max-width: 56.25em){\n    grid-template-rows: 1fr 9fr;\n    grid template-columns: 1fr;\n  }\n\n  @media only screen and (max-width: 31.25em){\n    grid-template-rows: 0.3fr 5fr;\n    grid-gap: 0.8rem;\n  }\n"]);return K=function(){return n},n}var T=u.c.div(K(),C),F=Object(u.c)(P.a)(S());var I=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(j,{}),Object(t.jsxs)(T,{children:[Object(t.jsx)(F,{typographyType:"heading3",uppercase:!0,text:"weather app"}),Object(t.jsx)(k,{})]})]})},J=Object(t.jsx)(I,{});c.a.render(J,document.getElementById("root"))},9:function(n,e,r){"use strict";var t=r(2),i=r(1),a=(r(0),r(3));function o(){var n=Object(t.a)(["\n    font-size: ",";\n    color: ",";\n    font-weight:  ",";\n    text-transform: ",";\n    text-transform: ",";\n    text-shadow: ",";\n"]);return o=function(){return n},n}var c=a.c.div(o(),(function(n){return function(n){switch(n){case"heading1":return"\n            7.6rem;\n\n            @media only screen and (max-width: 37.25em){\n                font-size: 6rem;\n            }\n            ";case"heading2":return"\n            5.8rem;\n            ";case"heading3":return"\n            2.8rem;\n            ";case"body":return"\n            2.2rem;\n            ";case"description":return"\n            2rem;\n            ";default:return"\n            1.5rem;\n            "}}(n.typographyType)}),(function(n){return n.color}),(function(n){return n.bold&&"400"}),(function(n){return n.capitalize&&"capitalize"}),(function(n){return n.uppercase&&"uppercase"}),(function(n){return n.shadow&&"1px 2px 4px rgba(0,0,0,0.2)"}));e.a=function(n){return Object(i.jsx)(c,{className:n.className,typographyType:n.typographyType||"caption",color:n.color||"white",bold:n.bold||!1,capitalize:n.capitalize||!0,uppercase:n.uppercase||!1,shadow:n.shadow||!1,children:n.text||""})}}},[[23,4,5]]]);
//# sourceMappingURL=main.8c468d3e.chunk.js.map