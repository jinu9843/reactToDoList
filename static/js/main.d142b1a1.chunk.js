(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{20:function(n,e,o){},26:function(n,e,o){"use strict";o.r(e);var t,c,r,i,a,l,d,b,s,u=o(0),x=o.n(u),j=o(12),p=o.n(j),g=(o(20),o(6)),h=o(10),f=o(2),O=o(3),v=o(1),F=O.a.div(t||(t=Object(f.a)([" \n  text-align: center;\n  background-color: #304FFE;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n  }\n  &:active {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.backgroundColor}),(function(n){return n.hoverColor})),C=O.a.div(c||(c=Object(f.a)(["\n  color: #FFFFFF;\n  font-size: 16px;\n"]))),k=function(n){var e=n.label,o=n.backgroundColor,t=void 0===o?"#304FFE":o,c=n.hoverColor,r=void 0===c?"#1E40FF":c,i=n.onClick;return Object(v.jsx)(F,{backgroundColor:t,hoverColor:r,onClick:i,children:Object(v.jsx)(C,{children:e})})},m=O.a.input(r||(r=Object(f.a)(["\n  flex: 1;\n  font-size: 16px;\n  padding: 10px 10px;\n  border-radius: 8px;\n  border: 1px solid #BDBDBD;\n  outline: none;\n"]))),D=function(n){var e=n.placeholder,o=n.value,t=n.onChange;return Object(v.jsx)(m,{value:o,placeholder:e,onChange:function(n){"function"===typeof t&&t(n.target.value)}})},B=O.a.div(i||(i=Object(f.a)(["\n  display: flex;\n  border-bottom: 1px solid #BDBDBD;\n  align-items: center;\n  margin: 10px;\n  padding: 10px;\n"]))),E=O.a.div(a||(a=Object(f.a)(["\n  flex: 1;\n  font-size: 16px;\n  margin-right: 20px;\n"]))),y=function(n){var e=n.label,o=n.onDelete;return Object(v.jsxs)(B,{children:[Object(v.jsx)(E,{children:e}),Object(v.jsx)(k,{label:"\uc0ad\uc81c",backgroundColor:"#FF1744",hoverColor:"#F01440",onClick:o})]})},w=O.a.div(l||(l=Object(f.a)(["\n  min-width: 350px;\n  height: 400px;\n  overflow-y: scroll;\n  border: 1px solid #BDBDBD;\n  margin-bottom: 20px;\n"]))),S=O.a.div(d||(d=Object(f.a)(["\n  display: flex;\n"]))),z=O.a.div(b||(b=Object(f.a)(["\n  min-height: 100vh;\n  background-color: #EEEEEE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),L=O.a.div(s||(s=Object(f.a)(["\n  display: flex;\n  background-color: #FFFFFF;\n  flex-direction: column;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n"])));var I=function(){var n=Object(u.useState)(""),e=Object(h.a)(n,2),o=e[0],t=e[1],c=Object(u.useState)([]),r=Object(h.a)(c,2),i=r[0],a=r[1];return Object(v.jsx)(z,{children:Object(v.jsxs)(L,{children:[Object(v.jsx)(w,{children:i.map((function(n,e){return Object(v.jsx)(y,{label:n,onDelete:function(){return function(n){var e=Object(g.a)(i);console.log("###splice",e.splice(n,1)),a(e)}(e)}},n)}))}),Object(v.jsxs)(S,{children:[Object(v.jsx)(D,{value:o,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694",onChange:function(n){return t(n)}})," ",Object(v.jsx)(k,{label:"\ucd94\uac00",onClick:function(){o&&(console.log("###...toDoList",Object(g.a)(i)),a([].concat(Object(g.a)(i),[o])),t(""))}})]})]})})},J=function(n){n&&n instanceof Function&&o.e(3).then(o.bind(null,27)).then((function(e){var o=e.getCLS,t=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;o(n),t(n),c(n),r(n),i(n)}))};p.a.render(Object(v.jsx)(x.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root")),J()}},[[26,1,2]]]);
//# sourceMappingURL=main.d142b1a1.chunk.js.map