(this.webpackJsonpbinary_clock=this.webpackJsonpbinary_clock||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(3),o=n.n(a),i=(n(9),n(4)),s=n(0),l=r.a.memo((function(e){var t="1"===e.value?"BlackBlock":"WhiteBlock";return Object(s.jsx)("div",{className:t})}));l.displayName="Block";var u=r.a.memo((function(e){var t=e.value,n=t.split(""),c=parseInt(t,2),r=n.map((function(e){return Object(s.jsx)(l,{value:e})}));return Object(s.jsxs)("div",{className:"Blocks",children:[r,Object(s.jsx)("h1",{children:c})]})}));u.displayName="BLocks";var j=function(e,t){return e.toString().padStart(t,"0")},v=function(e){return parseInt(e).toString(2)},d=function(){var e=Object(c.useState)(new Date),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=setInterval((function(){return r(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var a=n.getHours(),o=j(a.toString(),2),l=n.getMinutes(),d=j(l.toString(),2),b=j(v(o[0]),2),h=j(v(o[1]),4),m=j(v(d[0]),3),f=j(v(d[1]),4);return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"BlockArea",children:[Object(s.jsx)(u,{value:b}),Object(s.jsx)(u,{value:h}),Object(s.jsx)(u,{value:m}),Object(s.jsx)(u,{value:f})]})})};n(11);var b=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(d,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.e9aa2985.chunk.js.map