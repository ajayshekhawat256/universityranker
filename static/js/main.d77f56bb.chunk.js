(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{21:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){"use strict";t.r(c);var n=t(2),s=t.n(n),a=t(15),i=t.n(a),r=(t(21),t(6)),o=t(16),l=t.n(o),j=t(0),u=function(e){var c=e.name,t=e.web_pages,n=e.country,s=e.stateprovince;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"coin-conrainer",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("h1",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:t}),Object(j.jsx)("p",{className:"country",children:n})]}),Object(j.jsx)("div",{className:"coin-data",children:Object(j.jsx)("p",{className:"coin-price",children:s})})]})})})};t(41),t(42);var d=function(){var e=Object(n.useState)([]),c=Object(r.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),o=i[0],d=i[1];Object(n.useEffect)((function(){l.a.get("http://universities.hipolabs.com/search?country=India").then((function(e){s(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var h=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"cointext",style:{color:"red"},children:"Search your country"}),Object(j.jsx)("form",{style:{},children:Object(j.jsx)("input",{type:"text",className:"coin-input",onChange:function(e){d(e.target.value)},placeholder:"Search"})})]}),h.map((function(e){return Object(j.jsx)(u,{name:e.name,web_pages:e.web_pages,country:e.country,stateprovince:e.stateprovince},e.do)}))]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),h()}},[[43,1,2]]]);
//# sourceMappingURL=main.d77f56bb.chunk.js.map