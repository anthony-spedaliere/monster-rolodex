(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{131:function(e,t,n){},427:function(e,t,n){},429:function(e,t,n){},430:function(e,t,n){},431:function(e,t,n){},432:function(e,t,n){"use strict";n.r(t);var s=n(8),r=n.n(s),c=n(15),o=n.n(c),a=(n(131),n(121)),i=n(122),h=n(127),l=n(126),u=(n(132),n(427),n(2)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(u.jsxs)("h2",{children:[" ",e.monster.name," "]}),Object(u.jsx)("p",{children:e.monster.email})]})},j=(n(429),function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})}),m=(n(430),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(431),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters Rolodex"}),Object(u.jsx)(m,{placeholder:"search monsters",handleChange:this.handleChange}),Object(u.jsx)(j,{monsters:s})]})}}]),n}(s.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,433)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),b()}},[[432,1,2]]]);
//# sourceMappingURL=main.c93a3560.chunk.js.map