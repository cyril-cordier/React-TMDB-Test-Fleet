(this["webpackJsonpreact-tmdb"]=this["webpackJsonpreact-tmdb"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},66:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c.n(a),r=c(15),i=c.n(r),o=(c(60),c(61),c(18)),l=c(27),j=c(13),d="?api_key=612b8c457fd937136c063352f41e09ca",b="https://api.themoviedb.org/3",h="https://image.tmdb.org/t/p/original",u="https://94.citoyens.com/wp-content/blogs.dir/2/files/2012/05/cinema.jpg";function p(){return Object(s.jsx)("div",{children:Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("h1",{children:"Choose a movie..."}),Object(s.jsx)("img",{src:"https://blog.dataiku.com/hs-fs/hubfs/Dataiku%20Dec%202016/Image/keep-calm-and-choose-your-movie-wisely-400.jpg?width=400&name=keep-calm-and-choose-your-movie-wisely-400.jpg",alt:"choose_a_movie"}),Object(s.jsx)("h1",{children:"Or search it..."}),Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2020/06/08/19/26/find-5275842_960_720.png",height:"350px",alt:"search_a_movie"})]})})}var m=c(8);c(66);var O=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],i=Object(j.c)((function(e){return Object(o.a)({},e.movieReducer)})).selected;return Object(a.useEffect)((function(){fetch("".concat(b,"/movie/").concat(i.id,"/videos").concat(d,"&language=en-US"),{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return r(e.results[0].key)})).catch((function(e){return console.log("error",e)}))})),i.title?Object(s.jsxs)("div",{className:"body",children:[Object(s.jsxs)(m.b,{to:"/Movies",className:"btn btn-primary mt-20 back",children:[Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"})})," Back"]}),Object(s.jsx)("h4",{className:"title",children:i.title}),Object(s.jsx)("img",{src:h+i.poster_path,style:{width:180},alt:""}),Object(s.jsxs)("p",{children:["Release date : ",i.release_date]}),Object(s.jsxs)("p",{children:["Vote average : ",i.vote_average/2," / 5"]}),Object(s.jsx)("p",{className:"description",children:i.overview}),Object(s.jsx)("iframe",{title:"trailer",className:"trailer",src:"https://www.youtube.com/embed/".concat(c),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)(m.b,{to:"/Movies",style:{textDecoration:"none"},children:Object(s.jsx)(p,{})}),Object(s.jsx)(m.b,{to:"/Movies",className:"btn btn-primary mt-20",children:"Search a movie"})]})},x=c(19),v=c.n(x),f=c(25),g=c(26),y=c.n(g),w=c(99);function N(){var e=Object(j.b)();return Object(s.jsx)("div",{children:Object(s.jsx)(w.a.Control,{size:"lg",type:"text",placeholder:"Search your movie",onChange:function(t){(function(){var c=Object(f.a)(v.a.mark((function c(){return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,y.a.get("".concat(b,"/search/movie/").concat(d,"&query=").concat(t.target.value)).then((function(t){e({type:"SEARCH",payload:t.data.results})})).catch((function(e){console.log(e)}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}})})}var k=c(96),_=c(97);c(88);function C(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(j.c)((function(e){return Object(o.a)({},e.searchReducer)})).search,i=Object(j.b)(),p=function(e){i({type:"SELECT",payload:e}),console.log("redux selected",e.poster_path)};return Object(a.useEffect)((function(){(function(){var e=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(b,"/movie/upcoming").concat(d)).then((function(e){n(e.data.results)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.jsx)("div",{className:"showlist",children:Object(s.jsxs)(k.a,{className:"listcontainer",children:[{search:r}.search.map((function(e){return Object(s.jsxs)(_.a,{className:"listtitle",onClick:function(){p(e)},children:[Object(s.jsx)("img",{src:null!==e.poster_path?h+e.poster_path:u,style:{width:50},onClick:function(){p(e)},alt:"poster_".concat(e.id)}),Object(s.jsxs)("p",{children:[e.title," (",e.title?e.release_date.substr(0,4):"",")"]})]},e.id)})),0==={search:r}.search.length?c.map((function(e){return Object(s.jsxs)(_.a,{className:"listtitle",onClick:function(){p(e)},children:[Object(s.jsx)("img",{src:null!==e.poster_path?h+e.poster_path:u,style:{width:50},alt:"poster_".concat(e.id)}),Object(s.jsxs)("p",{children:[e.title," (",e.title?e.release_date.substr(0,4):"",")"]})]},e.id)})):""]})})}var M=c(48);c(89);var R=function(){var e=Object(j.c)((function(e){return Object(o.a)({},e.movieReducer)})).selected;return{selected:e}.selected.title?Object(s.jsx)(k.a,{children:Object(s.jsxs)("div",{className:"moviecard",children:[Object(s.jsxs)(_.a,{children:[Object(s.jsx)(M.a,{children:Object(s.jsx)("img",{src:h+{selected:e}.selected.poster_path,style:{width:180},alt:""})}),Object(s.jsxs)(M.a,{className:"title",children:[Object(s.jsx)("h1",{children:{selected:e}.selected.title}),Object(s.jsxs)("p",{children:["Vote average : ",{selected:e}.selected.vote_average/2," / 5"]}),Object(s.jsxs)("p",{children:["Release year : ",{selected:e}.selected.title?{selected:e}.selected.release_date.substr(0,4):""]})]})]}),Object(s.jsxs)("p",{className:"description",children:[{selected:e}.selected.title?{selected:e}.selected.overview.substr(0,100):"","[...]"]}),Object(s.jsx)(m.b,{to:"/Details",className:"btn btn-primary mb-5",children:"More informations"})]})}):Object(s.jsx)(p,{})};function S(){return Object(s.jsx)(k.a,{children:Object(s.jsxs)(_.a,{children:[Object(s.jsxs)(M.a,{children:[Object(s.jsx)(N,{}),Object(s.jsx)(C,{})]}),Object(s.jsx)(M.a,{children:Object(s.jsx)(R,{})})]})})}c(90);var B=c(98),D=c(100);function E(){return Object(s.jsx)("div",{children:Object(s.jsxs)(B.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:[Object(s.jsx)(B.a.Brand,{children:Object(s.jsx)(m.b,{to:"/",className:"navbar-brand",children:"MovieDatabase"})}),Object(s.jsx)(B.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(s.jsx)(B.a.Collapse,{id:"responsive-navbar-nav",children:Object(s.jsxs)(D.a,{className:"mr-auto",children:[Object(s.jsx)(D.a.Link,{children:Object(s.jsx)(m.b,{to:"/Movies",className:"nav-link",children:"Movies"})}),Object(s.jsx)(D.a.Link,{children:Object(s.jsx)(m.b,{to:"/Details",className:"nav-link",children:"Movie Detail"})}),Object(s.jsx)(D.a.Link,{children:Object(s.jsx)(m.b,{to:"/about",className:"nav-link",children:"About"})})]})})]})})}var T=c(6);c(91);function F(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)("h1",{className:"display-4 mt-5 mb-5 welcome",children:"Welcome to The MovieDB App"}),Object(s.jsx)(m.b,{to:"/Movies",children:Object(s.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",height:"200px",alt:"TMDB"})})]}),Object(s.jsx)(m.b,{to:"/Movies",className:"btn btn-primary mt-20",children:"Press to Enter"})]})}var L=c(51),A=c(52),z=c(54),I=c(53),P=(c(92),function(e){Object(z.a)(c,e);var t=Object(I.a)(c);function c(){var e;Object(L.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={version:"1.0.0",vReact:"17.0.1",vBootstrap:"4.5.3",by:"Cyril CORDIER",comments:"Merci \xe0 Benjamin Brizzi et \xe0 Fleet pour ce test, l'occasion de mieux prendre en main React, ses hooks, son state management... ",github:"https://github.com/cyril-cordier/React-TMDB-Test-Fleet"},e}return Object(A.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"about",children:[Object(s.jsx)("h1",{className:"display-4 m-5",children:"Les d\xe9tails de l'App..."}),Object(s.jsxs)("p",{className:"lead",children:["Version ",this.state.version]}),Object(s.jsxs)("p",{className:"lead",children:["D\xe9velopp\xe9 avec React v.",this.state.vReact]}),Object(s.jsxs)("p",{className:"lead",children:["CSS Bootstrap v.",this.state.vBootstrap]}),Object(s.jsxs)("p",{className:"lead",children:["par ",this.state.by]}),Object(s.jsxs)("p",{className:"lead mt-5",children:["Repo Github disponible sur :",Object(s.jsxs)("a",{href:this.state.github,target:"blank",children:[" ",this.state.github]})]}),Object(s.jsxs)("p",{className:"lead mt-5",children:[" ",this.state.comments]})]})}}]),c}(a.Component));function V(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{className:"display-3",children:"Erreur 404 : page non trouv\xe9e."})})}c(93);var q=function(){return Object(s.jsx)(m.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(E,{}),Object(s.jsxs)(T.c,{children:[Object(s.jsx)(T.a,{exact:!0,path:"/",component:F}),Object(s.jsx)(T.a,{exact:!0,path:"/List",component:C}),Object(s.jsx)(T.a,{exact:!0,path:"/Movies",component:S}),Object(s.jsx)(T.a,{exact:!0,path:"/Details",component:O}),Object(s.jsx)(T.a,{exact:!0,path:"/about",component:P}),Object(s.jsx)(T.a,{component:V})]})]})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))},H=c(21);var J=Object(H.b)({movieReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{selected:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT":return{selected:t.payload};default:return e}},searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{search:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return{search:t.payload};default:return e}}}),U=Object(H.c)(J);i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(j.a,{store:U,children:Object(s.jsx)(q,{})})}),document.getElementById("root")),G()}},[[94,1,2]]]);
//# sourceMappingURL=main.30c81c35.chunk.js.map