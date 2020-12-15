(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[8],{25:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return m})),e.d(n,"c",(function(){return p})),e.d(n,"d",(function(){return v}));var a=e(26),c=e(28),r=e.n(c),i="https://dataservice.accuweather.com/",o="".concat(i,"locations/v1/cities/autocomplete"),u="".concat(i,"currentconditions/v1/"),s="".concat(i,"forecasts/v1/daily/1day/"),l="".concat(i,"forecasts/v1/hourly/12hour/"),d=function(t,n){return r.a.create({baseURL:t,params:Object(a.a)({apikey:"oJbB7AP9phsAdUXqkOtSMZpTavadhHay"},n)})},f=d(u,null),m=d(s,{details:!0}),p=d(l,null),v=d(o,null)},30:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a=function(t){var n=null===t||void 0===t?void 0:t.toString();return t<10&&(n="0".concat(n)),t?"https://developer.accuweather.com/sites/default/files/".concat(n,"-s.png"):null}},31:function(t,n,e){"use strict";var a=e(2),c=e(1),r=(e(0),e(3));function i(){var t=Object(a.a)(["\n    width: ",";\n    height: auto;\n"]);return i=function(){return t},t}var o=r.c.img(i(),(function(t){return function(t){switch(t){case"small":return"3.5rem";default:return"25rem;\n            \n            @media only screen and (max-width: 37.25em){\n                width: 20rem;\n            }"}}(null===t||void 0===t?void 0:t.size)}));n.a=function(t){return Object(c.jsx)(o,{className:t.className,src:t.src,size:t.size})}},73:function(t,n,e){"use strict";e.r(n);var a=e(4),c=e(1),r=e(0),i=e(25),o=e(27),u=e.n(o),s=e(32),l=e.n(s),d=e(2),f=e(3),m=e(9),p=e(31);function v(){var t=Object(d.a)(["\n    margin: 6px;\n    margin-bottom: 8px;\n"]);return v=function(){return t},t}function b(){var t=Object(d.a)(["\n    padding: 0.8rem;\n    height: 16rem;\n    width: 15rem;\n    min-width: 12rem;\n    margin: 0.8rem;\n    border-radius: 3px;\n    background-color: rgba(255, 255, 255, 0.2);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return b=function(){return t},t}var h=f.c.div(b()),j=Object(f.c)(p.a)(v()),x=function(t){return Object(c.jsxs)(h,{className:t.className,children:[Object(c.jsx)(m.a,{typographyType:"body",capitalize:!1,text:t.data.date}),Object(c.jsx)(m.a,{typographyType:"body",capitalize:!1,text:t.data.time}),Object(c.jsx)(j,{src:t.data.iconSrc,size:"small"}),Object(c.jsx)(m.a,{typographyType:"body",capitalize:!1,text:t.data.value+"\xb0"})]})};function y(){var t=Object(d.a)(["\n    display: flex;\n    flex-wrap: no-wrap;\n\n    height: 100%;\n    overflow-x: scroll;\n"]);return y=function(){return t},t}function O(){var t=Object(d.a)(["\n    grid-row: 3 / -1;\n    grid-column: 1 / -1;\n\n    @media only screen and (max-width: 56.25em) {\n    grid-row: 4 / -1;\n    }\n\n    display: flex;\n    flex-direction: column;\n\n    width: 100%;\n"]);return O=function(){return t},t}var g=f.c.div(O()),w=f.c.div(y()),S=function(t){var n;return Object(c.jsxs)(g,{className:t.className,children:[Object(c.jsx)(m.a,{typographyType:"heading3",shadow:!0,text:"forecast"}),Object(c.jsx)(w,{children:null===(n=t.data)||void 0===n?void 0:n.map((function(t){return function(t){var n=t.date,e=t.time,a=t.value,r=t.iconSrc;return Object(c.jsx)(x,{data:{date:n,time:e,value:a,iconSrc:r}},e)}({date:t.date,time:t.time,value:t.value,iconSrc:t.iconSrc})}))})]})},D=e(30),N=function(t){var n=l.a.utc().format(t),e=l.a.utc(n).toDate();return l()(e).local().format("DD.MM")},T=function(t){var n=l.a.utc().format(t),e=l.a.utc(n).toDate();return l()(e).local().format("HH:mm")};n.default=function(t){var n=Object(r.useState)([]),e=Object(a.a)(n,2),o=e[0],s=e[1],l=t.locationKey,d=t.onError,f=Object(r.useCallback)((function(){s([])}),[]),m=Object(r.useCallback)((function(t,n){i.c.get("".concat(t)).then((function(t){var e=u.a.cloneDeep(t.data);e=e.map((function(t){return{date:N(t.DateTime),time:T(t.DateTime),value:(n=t.Temperature.Value,(5/9*(n-32)).toFixed(1)),iconSrc:Object(D.a)(t.WeatherIcon)};var n})),n&&s(e)})).catch((function(t){d(Object.getOwnPropertyDescriptor(t,"message").value)}))}),[d]);return Object(r.useEffect)((function(){var t=!0;return l?m(l,t):t&&f(),function(){t=!1}}),[l,d,m,f]),Object(c.jsx)(S,{className:t.className,data:o})}}}]);
//# sourceMappingURL=8.1086ca2f.chunk.js.map