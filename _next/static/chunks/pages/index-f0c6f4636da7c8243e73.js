(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6635:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(5893),o=n(1530),c=n(2809),i=n(7294),a=n(9483),s=n.n(a),d=n(1158),u=n(682),l=n(4051),h=n(1555),m=(0,i.createContext)({}),v=n(9008),f=function(){var e="Todo List";return(0,r.jsxs)(v.default,{children:[(0,r.jsx)("title",{children:e},"title"),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"\u30d7\u30ed\u30b0\u30e9\u30e0\u521d\u5b66\u8005\u304c\u3088\u304f\u4f5c\u308a\u304c\u3061\u306a\u3088\u304f\u3042\u308bTodo\u30ea\u30b9\u30c8\u3067\u3059\u3002"}),(0,r.jsx)("meta",{property:"og:url",content:"https://puripuripurin.github.io/TodoList/"}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:site_name",content:e}),(0,r.jsx)("meta",{name:"og:description",content:"\u30d7\u30ed\u30b0\u30e9\u30e0\u521d\u5b66\u8005\u304c\u3088\u304f\u4f5c\u308a\u304c\u3061\u306a\u3088\u304f\u3042\u308bTodo\u30ea\u30b9\u30c8\u3067\u3059\u3002"}),(0,r.jsx)("meta",{name:"og:type",content:"website"}),(0,r.jsx)("meta",{name:"og:image",content:"/ogp.png"}),(0,r.jsx)("meta",{name:"og:image:width",content:"1200"}),(0,r.jsx)("meta",{name:"og:image:height",content:"630"})]})},p=n(2154),x=function(){var e=(0,i.useContext)(m).dispatch;return(0,r.jsxs)(p.Z.Select,{defaultValue:"all",onChange:function(t){e({type:"filter",value:t.target.value})},children:[(0,r.jsx)("option",{value:"all",children:"\u3059\u3079\u3066\u306e\u30bf\u30b9\u30af"}),(0,r.jsx)("option",{value:"checked",children:"\u5b8c\u4e86\u3057\u305f\u30bf\u30b9\u30af"}),(0,r.jsx)("option",{value:"unchecked",children:"\u672a\u5b8c\u4e86\u306e\u30bf\u30b9\u30af"}),(0,r.jsx)("option",{value:"removed",children:"\u524a\u9664\u6e08\u307f\u306e\u30bf\u30b9\u30af"})]})},j=(0,i.memo)(x),g=n(6431),b=n(4716),y=n(7916),k=function(){var e=(0,i.useContext)(m),t=e.state,n=e.dispatch,o=t.todos.filter((function(e){switch(t.filter){case"all":return!e.removed;case"checked":return e.checked&&!e.removed;case"unchecked":return!e.checked&&!e.removed;case"removed":return e.removed;default:return e}}));return(0,r.jsx)("div",{className:"mt-3",children:o.map((function(e){return(0,r.jsx)("div",{children:(0,r.jsxs)(g.Z,{className:"mb-2",children:[(0,r.jsx)(g.Z.Checkbox,{disabled:e.removed,checked:e.checked,onChange:function(){return t=e.id,r=e.checked,void n({type:"check",id:t,checked:r});var t,r}}),(0,r.jsx)(b.Z,{disabled:e.checked||e.removed,value:e.value,onChange:function(t){return r=e.id,o=t.target.value,void n({type:"edit",id:r,value:o});var r,o}}),(0,r.jsx)(y.Z,{onClick:function(){return t=e.id,r=e.removed,void n({type:"remove",id:t,removed:r});var t,r},variant:"outline-secondary",children:e.removed?"\u5fa9\u5143":"\u524a\u9664"})]})},e.id)}))})},w=(0,i.memo)(k),O=function(){var e=(0,i.useContext)(m).dispatch;return(0,r.jsx)(y.Z,{type:"button",variant:"danger",onClick:function(){e({type:"empty"})},children:"\u30b4\u30df\u7bb1\u3092\u7a7a\u306b\u3059\u308b"})},Z=(0,i.memo)(O),C=function(){var e=(0,i.useContext)(m),t=e.state,n=e.dispatch,o=function(e){e.preventDefault(),n({type:"submit"})};return(0,r.jsx)("form",{onSubmit:o,children:(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(b.Z,{placeholder:"\u3084\u308b\u3079\u304d\u3053\u3068\u3092\u5165\u529b",value:t.text,disabled:"checked"===t.filter,onChange:function(e){n({type:"change",value:e.target.value})}}),(0,r.jsx)(y.Z,{variant:"outline-primary",type:"submit",disabled:"checked"===t.filter,onChange:o,children:"\u8ffd\u52a0"})]})})},_=(0,i.memo)(C);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e,t){switch(t.type){case"change":return P(P({},e),{},{text:t.value});case"submit":if(!e.text)return e;var n={value:e.text,id:(new Date).getTime(),checked:!1,removed:!1};return P(P({},e),{},{todos:[n].concat((0,o.Z)(e.todos)),text:""});case"filter":return P(P({},e),{},{filter:t.value});case"edit":var r=e.todos.map((function(e){return e.id===t.id?P(P({},e),{},{value:t.value}):e}));return P(P({},e),{},{todos:r});case"check":var c=e.todos.map((function(e){return e.id===t.id?P(P({},e),{},{checked:!t.checked}):e}));return P(P({},e),{},{todos:c});case"remove":var i=e.todos.map((function(e){return e.id===t.id?P(P({},e),{},{removed:!t.removed}):e}));return P(P({},e),{},{todos:i});case"empty":var a=e.todos.filter((function(e){return!e.removed}));return P(P({},e),{},{todos:a});case"restore":return P(P({},e),{},{todos:t.todos,text:""});default:return e}},T={text:"",todos:[],filter:"all"},S=s().createInstance({driver:s().LOCALSTORAGE,name:"todoList",storeName:"todoItems",version:1}),D=function(){var e=(0,i.useReducer)(N,T),t=e[0],n=e[1];return(0,i.useEffect)((function(){S.getItem("todoItems").then((function(e){e&&n({type:"restore",todos:e})})).catch((function(e){throw new Error(e)}))}),[]),(0,i.useEffect)((function(){S.setItem("todoItems",t.todos).catch((function(e){throw new Error(e)}))}),[t.todos]),(0,r.jsxs)(m.Provider,{value:{state:t,dispatch:n},children:[(0,r.jsx)(f,{}),(0,r.jsx)("header",{children:(0,r.jsx)(d.Z,{bg:"dark",variant:"dark",fixed:"top",children:(0,r.jsx)(u.Z,{children:(0,r.jsx)(d.Z.Brand,{children:"Simple Todo List"})})})}),(0,r.jsx)("main",{children:(0,r.jsxs)(u.Z,{className:"mt-4",children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(h.Z,{xs:12,sm:4,children:(0,r.jsx)(j,{})}),(0,r.jsx)(h.Z,{xs:12,sm:8,children:"removed"===t.filter?(0,r.jsx)(Z,{}):(0,r.jsx)(_,{})})]}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(w,{})})]})})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6635)}])}},function(e){e.O(0,[774,56,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);