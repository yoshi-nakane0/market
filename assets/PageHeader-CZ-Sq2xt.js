import{c as d,j as e,r as s,a as m,C as x,T as b,E as k,d as y,N as w}from"./index-CU0WYL3S.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=d("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=d("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=d("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=d("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),E=[{icon:m,label:"Signal",view:"signal"},{icon:x,label:"Events",view:"events"},{icon:b,label:"Earnings",view:"earnings"},{icon:k,label:"Macro",view:"macro"},{icon:y,label:"Basecalc",view:"basecalc"},{icon:w,label:"MktPros",view:"mktpros"}];function z({backAction:r,currentView:n,onHome:t,title:i}){return e.jsxs("header",{className:"page-header",children:[r?e.jsx("button",{"aria-label":r.label,className:"icon-button page-header-button",onClick:r.onClick,type:"button",children:e.jsx(g,{size:25,strokeWidth:2.2,"aria-hidden":"true"})}):e.jsx(M,{currentView:n}),e.jsx("h1",{children:i}),e.jsx("button",{"aria-label":"ホームに戻る",className:"icon-button page-header-button",onClick:t,type:"button",children:e.jsx(j,{size:25,strokeWidth:2.1,"aria-hidden":"true"})})]})}function M({currentView:r}){const[n,t]=s.useState(!1),i=s.useRef(null),p=s.useRef(null),h=s.useRef(null),v=s.useCallback(()=>t(!1),[]),f=E.filter(a=>a.view!==r);return s.useEffect(()=>{var c;if(!n)return;(c=h.current)==null||c.focus();const a=u=>{var l;(l=i.current)!=null&&l.contains(u.target)||t(!1)},o=u=>{var l;u.key==="Escape"&&(u.preventDefault(),t(!1),(l=p.current)==null||l.focus())};return document.addEventListener("mousedown",a),document.addEventListener("keydown",o),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",o)}},[n]),e.jsxs("div",{className:"page-nav-menu",ref:i,children:[e.jsx("button",{"aria-controls":"page-nav-list","aria-expanded":n,"aria-haspopup":"menu","aria-label":n?"ページメニューを閉じる":"ページメニューを開く",className:"icon-button page-header-button",onClick:()=>t(a=>!a),ref:p,type:"button",children:e.jsx(N,{size:27,strokeWidth:2.2,"aria-hidden":"true"})}),n?e.jsx("nav",{"aria-label":"ページ移動",className:"page-nav-popover",id:"page-nav-list",children:e.jsx("ul",{className:"page-nav-list",children:f.map((a,o)=>{const c=a.icon;return e.jsx("li",{children:e.jsxs("a",{className:"page-nav-list-link",href:`#${a.view}`,onClick:v,ref:o===0?h:void 0,children:[e.jsx(c,{size:17,strokeWidth:2.1,"aria-hidden":"true"}),e.jsx("span",{children:a.label})]})},a.view)})})}):null]})}export{z as P,L as T};
