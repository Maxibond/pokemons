(this.webpackJsonppokemons=this.webpackJsonppokemons||[]).push([[0],{21:function(e,t,n){e.exports=n(37)},26:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),s=(n(26),n(4)),i=n(3),l=n(5),u=n.n(l),p=n(7),m=n(8),h=n(9),f=n(11),v=n(10),b=n(12);var d=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(v.a)(t).call(this,e))).state={pokemons:[],next:"",previous:""},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({pokemons:n.results});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Pokemons"),this.state.pokemons.map((function(e){var t=function(e){var t=e.split("/");return t[t.length-2]}(e.url);return r.a.createElement("div",{key:e.name},r.a.createElement(s.b,{to:"/pokemon/".concat(t)},e.name))})))}}]),t}(a.Component),y=n(20);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(v.a)(t).call(this,e))).state={id:e.match.params.id,loading:!0},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(this.state.id));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState(k({},this.state,{},n,{loading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.id,n=e.name,a=e.base_experience,o=e.weight,c=e.types;return this.state.loading?r.a.createElement("h1",null,"loading..."):r.a.createElement("div",null,r.a.createElement("h1",null,"#",t," ",n),r.a.createElement("p",null,"Base XP: ",a),r.a.createElement("p",null,"Weight: ",o),r.a.createElement("p",null,"Types: ",c.map((function(e){return r.a.createElement("span",{className:"type "+(t=e.type.name,"type-".concat(t)),key:e.slot},e.type.name);var t}))),r.a.createElement(s.b,{to:"/"},"Back"))}}]),t}(a.Component);n(36);var j=function(){return r.a.createElement(s.a,{basename:"/pokemons"},r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/pokemon/:id(\\d+)",component:E}),r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(d,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement("h1",null,"Not found sorry man go  ",r.a.createElement(s.b,{to:"/"},"here"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.4e00e142.chunk.js.map