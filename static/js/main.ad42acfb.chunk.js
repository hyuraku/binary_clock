(this.webpackJsonpbinary_clock=this.webpackJsonpbinary_clock||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=(n(9),n(3)),i=function(e){var t="1"===e.value?"BlackBlock":"WhiteBlock";return r.a.createElement("div",{className:t})},u=function(e){var t=e.value,n=t.split(""),a=parseInt(t,2),c=n.map((function(e){return r.a.createElement(i,{value:e})}));return r.a.createElement("div",{className:"Blocks"},c,r.a.createElement("h1",null,a))},s=function(e,t){return e.toString().padStart(t,"0")},m=function(e){return parseInt(e).toString(2)},v=function(){var e=Object(a.useState)(new Date),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=setInterval((function(){return c(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var o=n.getHours(),i=s(o.toString(),2),v=n.getMinutes(),f=s(v.toString(),2),E=s(m(i[0]),2),d=s(m(i[1]),4),p=s(m(f[0]),3),h=s(m(f[1]),4);return r.a.createElement("div",null,r.a.createElement("div",{className:"BlockArea"},r.a.createElement(u,{value:E}),r.a.createElement(u,{value:d}),r.a.createElement(u,{value:p}),r.a.createElement(u,{value:h})))};n(10);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.ad42acfb.chunk.js.map