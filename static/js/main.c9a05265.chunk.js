(this["webpackJsonpbowtie-doctor-list"]=this["webpackJsonpbowtie-doctor-list"]||[]).push([[0],{101:function(n,e,t){n.exports=t(250)},106:function(n,e,t){},236:function(n,e){},238:function(n,e){},250:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(93),c=t.n(i),o=(t(106),t(6)),l=t(1),u=t(2),s=t(5),f=t.n(s),d=t(21),p=t.n(d),m=t(32),v=t.n(m),b=t(22),x=t.n(b),g=t(94),h=t.n(g),E=t(95),O=t.n(E),j=t(96),w=t.n(j),y=t(8),k=t.n(y),D=t(97),C=t.n(D);function N(n){return{HER:"\u4e2d\u91ab",PHY:"\u666e\u901a\u79d1\u9580\u8a3a",ACU:"\u91dd\u7078",BST:"\u8dcc\u6253",SPL:"\u8178\u80c3\u809d\u81df\u79d1\u5c08\u79d1",PHS:"\u7269\u7406\u6cbb\u7642",ROE:"\u7259\u79d1",CHI:"\u810a\u91ab",SPO:"\u904b\u52d5\u6cbb\u7642"}[n]}function B(n){return p()(n,(function(n){return!v()(n)}))}function S(){return O.a.get("/bowtie-doctor-list-demo/doctors.csv").then((function(n){return function(n){return new Promise((function(e){C()(n,{from_line:2},(function(n,t){var a=f()(t,(function(n){return{id:n[3],name:n[4],serviceTypes:n[0].split("/"),region:n[12],location:n[11],address:[n[9],n[10]],tel:n[13],openDays:B([k()(B([n[23],n[24]]),": "),k()(B([n[25],n[26]]),": "),k()(B([n[27],n[28]]),": "),k()(B([n[29],n[30]]),": ")]),prices:B(n[31].split(",")),medicine:B(n[33].split(","))}}));e(a)}))}))}(n.data)}))}var _=Object(a.createContext)();function z(n){var e=n.children,t=Object(a.useState)(!0),i=Object(o.a)(t,2),c=i[0],l=i[1],u=Object(a.useState)({}),s=Object(o.a)(u,2),f=s[0],d=s[1],p=Object(a.useState)([]),m=Object(o.a)(p,2),v=m[0],b=m[1],x=Object(a.useState)([]),g=Object(o.a)(x,2),h=g[0],E=g[1];Object(a.useEffect)((function(){S().then((function(n){E(n),d(function(n){var e={},t={};return w()(n,(function(n){t[n.location]||(t[n.location]=!0,e[n.region]||(e[n.region]=[]),e[n.region].push(n.location))})),e}(n)),l(!1)}))}),[]);var O={fullList:h,regionOptions:f,locationFilters:v,setLocationFilters:b,loading:c};return r.a.createElement(_.Provider,{value:O},e)}function T(){var n=Object(a.useContext)(_),e=n.locationFilters,t=n.setLocationFilters;return[e,function(n){var a;a=x()(e,n)?p()(e,(function(e){return e!==n})):e.concat(n),t(a)}]}var L=t(11),M=t.n(L);function P(){var n=Object(l.a)(["\n  cursor: pointer;\n  margin: 2.5px;\n  padding: 5px;\n  transition background 0.3s;\n  &:hover {\n    background: #EEEEEE;\n  }\n  &.active {\n    background: aliceblue;\n  }\n"]);return P=function(){return n},n}function F(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: auto;\n"]);return F=function(){return n},n}var H=u.a.div(F()),I=u.a.div(P());function R(n){var e=n.className,t=n.items,a=n.values,i=n.onSelect;return r.a.createElement(H,{className:e},f()(t,(function(n){return r.a.createElement(I,{key:n,className:x()(a,n)?"active":"",onClick:function(){return i&&i(n)}},n)})))}R.propTyeps={className:M.a.string,items:M.a.arrayOf(M.a.string),values:M.a.arrayOf(M.a.string),onSelect:M.a.func};var $=R;function A(){var n=Object(l.a)(["\n  cursor: pointer;\n  background: khaki;\n  border-radius: 20px;\n  padding: 5px 10px 5px 15px;\n  display: flex;\n  align-items: center;\n  > span.material-icons {\n    font-size: 18px;\n  }\n"]);return A=function(){return n},n}function J(){var n=Object(l.a)(["\n  padding: 5px;\n"]);return J=function(){return n},n}function U(){var n=Object(l.a)(["\n  margin-left: 5px;\n  color: #888888;\n"]);return U=function(){return n},n}function W(){var n=Object(l.a)(["\n  margin: 0 15px;\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return W=function(){return n},n}function q(){var n=Object(l.a)(["\n  border-left: 1px solid #DDDDDD;\n  padding-left: 5px;\n  width: 75%;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  @media screen and (min-width: 1024px) {\n    width: 50%;\n    padding-left: 15px;\n  }\n"]);return q=function(){return n},n}function Y(){var n=Object(l.a)(["\n  margin-right: 5px;\n  @media screen and (min-width: 1024px) {\n    margin-right: 15px\n  }\n"]);return Y=function(){return n},n}function G(){var n=Object(l.a)(["\n  height: 125px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n"]);return G=function(){return n},n}function K(){var n=Object(l.a)(["\n"]);return K=function(){return n},n}function Q(){var n=Object(l.a)(["\n  position: sticky;\n  top: 0;\n  border-bottom: 1px solid #DDDDDD;\n  background: white;\n\n  .search-panel__pickers {\n    transition: height 0.3s;\n    height: 0;\n    overflow: hidden;\n  }\n\n  :hover {\n    .search-panel__pickers {\n      height: 135px;\n    }\n  }\n"]);return Q=function(){return n},n}var V=u.a.div(Q()),X=u.a.div(K()),Z=u.a.div(G()),nn=Object(u.a)($)(Y()),en=Object(u.a)($)(q()),tn=u.a.div(W()),an=u.a.span(U()),rn=u.a.div(J()),cn=u.a.div(A());var on=function(){var n=T(),e=Object(o.a)(n,2),t=e[0],i=e[1],c=Object(a.useContext)(_).regionOptions,l=Object(a.useState)(null),u=Object(o.a)(l,2),s=u[0],d=u[1],p=c&&c[s];return r.a.createElement(V,{className:"search-panel"},r.a.createElement(tn,{className:"search-panel__filters"},r.a.createElement("span",{className:"material-icons"},"search"),0===t.length?r.a.createElement(an,null,"\u6309\u5730\u5340\u641c\u7d22"):null,f()(t,(function(n){return r.a.createElement(rn,{key:n},r.a.createElement(cn,{onClick:function(){return i(n)}},r.a.createElement("span",null,n),r.a.createElement("span",{className:"material-icons"},"close")))}))),r.a.createElement(X,{className:"search-panel__pickers"},r.a.createElement(Z,null,r.a.createElement(nn,{items:Object.keys(c),onSelect:function(n){return d(n)}}),r.a.createElement(en,{items:p,values:t,onSelect:function(n){return i(n)}}))))};function ln(){var n=Object(l.a)(["\n  color: black;\n  font-size: 18px;\n"]);return ln=function(){return n},n}function un(){var n=Object(l.a)(["\n  line-height: 22px;\n  display: flex;\n  align-items: center;\n"]);return un=function(){return n},n}function sn(){var n=Object(l.a)(["\n  font-weight: bold;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n"]);return sn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  margin: 10px 2.5px 0 2.5px;\n  border: 1px solid #CCCCCC;\n  padding: 5px 15px;\n  border-radius: 20px;\n  :not(:first-child) {\n    margin-left: 5px;\n  }\n"]);return fn=function(){return n},n}function dn(){var n=Object(l.a)(["\n  margin: 10px 0;\n"]);return dn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  margin: 0 -2.5px;\n  display: flex;\n  flex-wrap: wrap;\n"]);return pn=function(){return n},n}function mn(){var n=Object(l.a)(["\n  margin-left: 10px;\n  cursor: pointer;\n  font-size: 22px;\n"]);return mn=function(){return n},n}function vn(){var n=Object(l.a)(["\n  flex: 1;\n  font-weight: bold;\n  font-size: 18px;\n"]);return vn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]);return bn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  border: 1px solid #BBBBBB;\n  padding: 10px;\n  border-radius: 4px;\n  box-shadow: 2px 4px 4px #DDDDDD;\n"]);return xn=function(){return n},n}var gn=u.a.div(xn()),hn=u.a.div(bn()),En=u.a.div(vn()),On=u.a.span(mn()),jn=u.a.div(pn()),wn=u.a.div(dn()),yn=u.a.div(fn()),kn=u.a.a(sn()),Dn=u.a.div(un()),Cn=u.a.span(ln());var Nn=function(n){var e,t=n.doctor,i=Object(a.useMemo)((function(){return k()(t.address,", ")}),[t.address]);return r.a.createElement(gn,null,r.a.createElement(hn,null,r.a.createElement(En,null,t.name),navigator.share?r.a.createElement(On,{className:"material-icons",onClick:function(){navigator.share({title:t.name,text:"".concat(t.name,"\n\u5730\u5740:").concat(i,"\n\u96fb\u8a71:").concat(t.tel)})}},"share"):null,navigator.clipboard?r.a.createElement(On,{className:"material-icons",onClick:function(){navigator.clipboard.writeText("".concat(t.name,"\n\u5730\u5740:").concat(i,"\n\u96fb\u8a71:").concat(t.tel))}},"file_copy"):null),r.a.createElement(jn,null,f()(t.serviceTypes,(function(n){return r.a.createElement(yn,{key:n},N(n))}))),r.a.createElement(wn,null,r.a.createElement(kn,{href:(e=k()(t.address,","),"https://maps.google.com/?q=".concat(encodeURI(e))),target:"_blank"},r.a.createElement(Cn,{className:"material-icons"},"location_on"),r.a.createElement("span",null,i)),r.a.createElement(Dn,null,r.a.createElement(Cn,{className:"material-icons"},"local_phone"),t.tel)),r.a.createElement(Dn,null,r.a.createElement("b",null,"\u6703\u54e1\u5c08\u4eab:")),f()(t.prices,(function(n,e){var a="";return t.prices.length===t.serviceTypes.length&&t.prices.length>1&&(a=N(t.serviceTypes[e])),r.a.createElement(Dn,{key:e},a,"\u8a3a\u91d1: $",n)})),f()(t.openDays,(function(n,e){return r.a.createElement(Dn,{key:e},n.replace(/[,:;]*$/,""))})))};function Bn(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 15px;\n  > * {\n    height: 100%;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 50%;\n    padding: 20px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 33.3333%;\n  }\n"]);return Bn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n  margin: 0 20px;\n  cursor: pointer;\n  ","\n"]);return Sn=function(){return n},n}function _n(){var n=Object(l.a)(["\n  position: sticky;\n  bottom: 0;\n  background: white;\n  border-top: 1px solid #DDDDDD;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return _n=function(){return n},n}function zn(){var n=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return zn=function(){return n},n}var Tn=u.a.div(zn()),Ln=u.a.div(_n()),Mn=u.a.span(Sn(),(function(n){return n.disabled?"color: #BBBBBB;":""})),Pn=u.a.div(Bn());function Fn(){var n=Object(a.useState)(0),e=Object(o.a)(n,2),t=e[0],i=e[1],c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=Object(a.useContext)(_),r=t.loading,i=t.locationFilters,c=t.fullList,o=Object(a.useMemo)((function(){return v()(i)?c:p()(c,(function(n){return x()(i,n.location)}))}),[i,c]),l=h()(o,n*e,(n+1)*e),u=Math.ceil(o.length/e);return[r,l,u]}(t,12),l=Object(o.a)(c,3),u=l[0],s=l[1],d=l[2],m=T(),b=Object(o.a)(m,1)[0];return Object(a.useEffect)((function(){i(0)}),[b]),u?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement(on,null),r.a.createElement(Tn,null,f()(s,(function(n,e){return r.a.createElement(Pn,{key:e},r.a.createElement(Nn,{doctor:n}))}))),r.a.createElement(Ln,null,r.a.createElement(Mn,{className:"material-icons",disabled:0===t,onClick:function(){return i(Math.max(0,t-1))}},"navigate_before"),r.a.createElement("span",null,"\u7b2c ",t+1," / ",d," \u9801"),r.a.createElement(Mn,{className:"material-icons",disabled:t>=d-1,onClick:function(){return i(Math.min(d-1,t+1))}},"navigate_next")))}var Hn=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null,r.a.createElement(Fn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Hn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.c9a05265.chunk.js.map