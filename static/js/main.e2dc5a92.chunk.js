(this["webpackJsonpbowtie-doctor-list"]=this["webpackJsonpbowtie-doctor-list"]||[]).push([[0],{101:function(n,e,t){n.exports=t.p+"static/media/close-black-18dp.10ddc4e0.svg"},102:function(n,e,t){n.exports=t.p+"static/media/location_on-black-18dp.9f46df7f.svg"},103:function(n,e,t){n.exports=t.p+"static/media/navigate_before-black-18dp.ceab4a59.svg"},104:function(n,e,t){n.exports=t.p+"static/media/navigate_next-black-18dp.afc862ec.svg"},105:function(n,e,t){n.exports=t(254)},110:function(n,e,t){},240:function(n,e){},242:function(n,e){},254:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(93),i=t.n(c),o=(t(110),t(6)),u=t(1),l=t(2),s=t(5),f=t.n(s),d=t(21),p=t.n(d),v=t(32),m=t.n(v),b=t(22),x=t.n(b),g=t(94),E=t.n(g),O=t(95),h=t.n(O),j=t(96),y=t.n(j),w=t(8),k=t.n(w),C=t(97),D=t.n(C);function S(n){return{HER:"\u4e2d\u91ab",PHY:"\u666e\u901a\u79d1\u9580\u8a3a",ACU:"\u91dd\u7078",BST:"\u8dcc\u6253",SPL:"\u8178\u80c3\u809d\u81df\u79d1\u5c08\u79d1",PHS:"\u7269\u7406\u6cbb\u7642",ROE:"\u7259\u79d1",CHI:"\u810a\u91ab",SPO:"\u904b\u52d5\u6cbb\u7642"}[n]}function B(n){return p()(n,(function(n){return!m()(n)}))}function P(){return h.a.get("/bowtie-doctor-list-demo/doctors.csv").then((function(n){return function(n){return new Promise((function(e){D()(n,{from_line:2},(function(n,t){var r=f()(t,(function(n){return{id:n[3],name:n[4],serviceTypes:n[0].split("/"),region:n[12],location:n[11],address:[n[9],n[10]],tel:n[13],openDays:B([k()(B([n[23],n[24]]),": "),k()(B([n[25],n[26]]),": "),k()(B([n[27],n[28]]),": "),k()(B([n[29],n[30]]),": ")]),prices:B(n[31].split(",")),medicine:B(n[33].split(","))}}));e(r)}))}))}(n.data)}))}var T=Object(r.createContext)();function F(n){var e=n.children,t=Object(r.useState)({}),c=Object(o.a)(t,2),i=c[0],u=c[1],l=Object(r.useState)([]),s=Object(o.a)(l,2),f=s[0],d=s[1],p=Object(r.useState)([]),v=Object(o.a)(p,2),m=v[0],b=v[1];Object(r.useEffect)((function(){P().then((function(n){b(n),u(function(n){var e={},t={};return y()(n,(function(n){t[n.location]||(t[n.location]=!0,e[n.region]||(e[n.region]=[]),e[n.region].push(n.location))})),e}(n))}))}),[]);var x={fullList:m,regionOptions:i,locationFilters:f,setLocationFilters:d};return a.a.createElement(T.Provider,{value:x},e)}function L(){var n=Object(r.useContext)(T),e=n.locationFilters,t=n.setLocationFilters;return[e,function(n){var r;r=x()(e,n)?p()(e,(function(e){return e!==n})):e.concat(n),t(r)}]}var M=t(17),_=t.n(M);function H(){var n=Object(u.a)(["\n  cursor: pointer;\n  padding: 5px;\n  &:not(:first-child) {\n    border-top: 1px solid #CCCCCC;\n  }\n  &:hover {\n    background: #EEEEEE;\n  }\n  &.active {\n    background: aliceblue;\n  }\n"]);return H=function(){return n},n}function z(){var n=Object(u.a)(["\n  width: 175px;\n  height: 250px;\n  border: 1px solid #DDDDDD;\n  overflow: auto;\n"]);return z=function(){return n},n}var I=l.a.div(z()),R=l.a.div(H());function $(n){var e=n.items,t=n.values,r=n.onSelect;return a.a.createElement(I,null,f()(e,(function(n){return a.a.createElement(R,{key:n,className:x()(t,n)?"active":"",onClick:function(){return r&&r(n)}},n)})))}$.propTyeps={items:_.a.arrayOf(_.a.string),values:_.a.arrayOf(_.a.string),onSelect:_.a.func};var A=$,J=t(101),N=t.n(J);function U(){var n=Object(u.a)(["\n  cursor: pointer;\n  background: khaki;\n  border-radius: 20px;\n  padding: 5px 10px 5px 15px;\n  display: flex;\n  align-items: center;\n"]);return U=function(){return n},n}function W(){var n=Object(u.a)(["\n  padding: 5px;\n"]);return W=function(){return n},n}function q(){var n=Object(u.a)(["\n  margin: 10px -5px 0 -5px;\n  display: flex;\n  flex-wrap: wrap;\n"]);return q=function(){return n},n}function Y(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Y=function(){return n},n}function G(){var n=Object(u.a)(["\n  margin: 10px 20px;\n"]);return G=function(){return n},n}var K=l.a.div(G()),Q=l.a.div(Y()),V=l.a.div(q()),X=l.a.div(W()),Z=l.a.div(U());var nn=function(){var n=L(),e=Object(o.a)(n,2),t=e[0],c=e[1],i=Object(r.useContext)(T).regionOptions,u=Object(r.useState)(null),l=Object(o.a)(u,2),s=l[0],d=l[1],p=i&&i[s];return a.a.createElement(K,null,a.a.createElement(Q,null,a.a.createElement(A,{items:Object.keys(i),onSelect:function(n){return d(n)}}),a.a.createElement(A,{items:p,values:t,onSelect:function(n){return c(n)}})),a.a.createElement(V,null,f()(t,(function(n){return a.a.createElement(X,{key:n},a.a.createElement(Z,{onClick:function(){return c(n)}},a.a.createElement("span",null,n),a.a.createElement("img",{src:N.a,alt:""})))}))))},en=t(102),tn=t.n(en);function rn(){var n=Object(u.a)(["\n  line-height: 22px;\n"]);return rn=function(){return n},n}function an(){var n=Object(u.a)(["\n  font-weight: bold;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n"]);return an=function(){return n},n}function cn(){var n=Object(u.a)(["\n  border: 1px solid #CCCCCC;\n  padding: 5px 15px;\n  border-radius: 20px;\n  :not(:first-child) {\n    margin-left: 5px;\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(u.a)(["\n  margin: 10px 0;\n"]);return on=function(){return n},n}function un(){var n=Object(u.a)(["\n  margin-top: 10px;\n  display: flex;\n"]);return un=function(){return n},n}function ln(){var n=Object(u.a)(["\n  font-weight: bold;\n  font-size: 18px;\n"]);return ln=function(){return n},n}function sn(){var n=Object(u.a)(["\n  box-sizing: border-box;\n  border: 1px solid #BBBBBB;\n  padding: 10px;\n  box-shadow: 2px 4px 4px #DDDDDD;\n"]);return sn=function(){return n},n}var fn=l.a.div(sn()),dn=l.a.div(ln()),pn=l.a.div(un()),vn=l.a.div(on()),mn=l.a.div(cn()),bn=l.a.a(an()),xn=l.a.div(rn());var gn=function(n){var e,t=n.doctor;return a.a.createElement(fn,null,a.a.createElement(dn,null,t.name),a.a.createElement(pn,null,f()(t.serviceTypes,(function(n){return a.a.createElement(mn,{key:n},S(n))}))),a.a.createElement(vn,null,a.a.createElement(bn,{href:(e=k()(t.address,","),"https://maps.google.com/?q=".concat(encodeURI(e))),target:"_blank"},a.a.createElement("img",{src:tn.a,alt:""}),a.a.createElement("span",null,k()(t.address,", "))),a.a.createElement(xn,null,"\u96fb\u8a71: ",t.tel)),a.a.createElement(xn,null,a.a.createElement("b",null,"\u6703\u54e1\u5c08\u4eab:")),f()(t.prices,(function(n,e){var r="";return t.prices.length===t.serviceTypes.length&&t.prices.length>1&&(r=S(t.serviceTypes[e])),a.a.createElement(xn,{key:e},r,"\u8a3a\u91d1: $",n)})),f()(t.openDays,(function(n,e){return a.a.createElement(xn,{key:e},n.replace(/[,:;]*$/,""))})))},En=t(103),On=t.n(En),hn=t(104),jn=t.n(hn);function yn(){var n=Object(u.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 15px;\n  @media screen and (min-width: 1024px) {\n    width: 50%;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 33.3333%;\n  }\n"]);return yn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  margin: 0 20px;\n  cursor: pointer;\n"]);return wn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return kn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return Cn=function(){return n},n}var Dn=l.a.div(Cn()),Sn=l.a.div(kn()),Bn=l.a.img(wn()),Pn=l.a.div(yn());function Tn(){var n=Object(r.useState)(0),e=Object(o.a)(n,2),t=e[0],c=e[1],i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=Object(r.useContext)(T),a=t.locationFilters,c=t.fullList,i=Object(r.useMemo)((function(){return m()(a)?c:p()(c,(function(n){return x()(a,n.location)}))}),[a,c]),o=E()(i,n*e,(n+1)*e),u=Math.ceil(i.length/e);return[o,u]}(t,12),u=Object(o.a)(i,2),l=u[0],s=u[1],d=L(),v=Object(o.a)(d,1)[0];return Object(r.useEffect)((function(){c(0)}),[v]),a.a.createElement("div",null,a.a.createElement(nn,null),a.a.createElement(Dn,null,f()(l,(function(n,e){return a.a.createElement(Pn,{key:e},a.a.createElement(gn,{doctor:n}))}))),a.a.createElement(Sn,null,a.a.createElement(Bn,{src:On.a,onClick:function(){return c(Math.max(0,t-1))}}),a.a.createElement("span",null,"Page ",t+1," / ",s),a.a.createElement(Bn,{src:jn.a,onClick:function(){return c(Math.min(s-1,t+1))}})))}var Fn=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(F,null,a.a.createElement(Tn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Fn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.e2dc5a92.chunk.js.map