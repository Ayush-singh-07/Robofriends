(this["webpackJsonpmy-robofriends"]=this["webpackJsonpmy-robofriends"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),i=(n(12),n(2)),o=n(3),h=n(5),l=n(4),u=(n(13),n(0)),b=function(e){return Object(u.jsxs)("div",{className:"tc bg-lightest-blue  dib br3 pa3 ma2 grow shadow-6",children:[Object(u.jsx)("img",{alt:"pic",src:"https://robohash.org/".concat(e.id,"?size=200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsx)("p",{children:e.email})]})]})},j=function(e){var t=e.robots;return t.map((function(e,n){return Object(u.jsx)(b,{name:t[n].name,email:t[n].email,id:t[n].id},n)}))},d=function(e){var t=e.SearchChange;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"pa3 ma3 ba b--green bg-lightest-blue",type:"Search",placeholder:"Search robots here",onChange:t})})},f=(n(15),function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"2px solid black",height:"700px"},children:e.children})}),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),n}(c.a.Component),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearch=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:" "},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(u.jsx)("h1",{children:"Loading please wait"}):Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(d,{SearchChange:this.onSearch}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(j,{robots:t})})})]})}}]),n}(c.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.0b43be96.chunk.js.map