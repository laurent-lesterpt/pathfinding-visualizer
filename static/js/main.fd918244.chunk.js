(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{41:function(e,t,n){e.exports=n.p+"static/media/pathFinding.eba1bad7.png"},42:function(e,t,n){e.exports=n.p+"static/media/drag_drop.ffc71611.gif"},43:function(e,t,n){e.exports=n.p+"static/media/createWalls.2643e023.gif"},44:function(e,t,n){e.exports=n.p+"static/media/algo.87806a3b.gif"},45:function(e,t,n){e.exports=n.p+"static/media/tutorial.9bb83ab5.png"},46:function(e,t,n){e.exports=n.p+"static/media/theEnd.5414d867.png"},56:function(e,t,n){e.exports=n(76)},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),o=n.n(i),s=(n(61),n(8)),l=n(9),c=n(11),u=n(10),d=n(52),g=(n(62),n(63),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,a=e.isFinishDragged,i=e.isStart,o=e.isStartDragged,s=e.isWall,l=e.onMouseDown,c=e.onMouseEnter,u=e.onMouseUp,d=e.row,g=a?"node-finish-dragged":o?"node-start-dragged":n?"node-finish":i?"node-start":s?"node-wall":"";return r.a.createElement("div",{className:"node ".concat(g),id:"node-".concat(d,"-").concat(t),onMouseDown:function(){return l(d,t)},onMouseEnter:function(){return c(d,t)},onMouseUp:function(){return u()}})}}]),n}(a.Component)),f=n(41),h=n.n(f),m=n(42),p=n.n(m),v=n(43),b=n.n(v),E=n(44),y=n.n(E),I=n(45),k=n.n(I),w=n(46),D=n.n(w),P=n(13),j=(n(69),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"tutorial"},1===this.props.currentPage?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Welcome to Pathfinding Visualizer!"),r.a.createElement("h6",null,"This tutorial will walk you through all of the features of this application."),r.a.createElement("p",null,'If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!'),r.a.createElement("img",{id:"mainImage",src:k.a,alt:"pathfindingImage"})):null,2===this.props.currentPage?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"First, what is a pathfinding algorithm?"),r.a.createElement("h6",null,"A pathfinding algorithm seeks to find a path between two points A and B. ",r.a.createElement("br",null),"This application shows various pathfinding algorithms in action"),r.a.createElement("p",null,"All of the algorithms shown are adapted for a 2D grid"),r.a.createElement("img",{id:"mainImage",src:h.a,alt:"pathfindingImage"})):null,3===this.props.currentPage?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Second, what are the features of the application ?"),r.a.createElement("h4",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Moving the start and finish node by drag and drop"),r.a.createElement("li",null,"Adding walls"),r.a.createElement("li",null,"Visualizing pathfinding algorithms"),r.a.createElement("li",null,"Clearing the grid, leaves start and finish nodes (button)"),r.a.createElement("li",null,"Clearing the path, leaves start, finish and wall nodes (button)")))):null,4===this.props.currentPage?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Moving the start and finish node by drag and drop"),r.a.createElement("h6",null,"Hold left click and drag your mouse to move the start or finish node"),r.a.createElement("p",null,"A lighter colored node is displayed during dragging to help position the node"),r.a.createElement("img",{id:"mainImage",src:p.a,alt:"dragDrop"})):null,5===this.props.currentPage?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Adding walls "),r.a.createElement("h6",null,"You can toggle walls by left clicking on a node "),r.a.createElement("p",null,"Hold click and drag your mouse to toggle walls on your path "),r.a.createElement("img",{id:"mainImage",src:b.a,alt:"pathfindingImage"})):null,6===this.props.currentPage?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Visualizing a pathfinding algorithm"),r.a.createElement("h6",null,'Click on "Algorithms" in the top bar and then choose an algorithm'),r.a.createElement("p",null,"The light blue tiles are visited by the algorithm, the yellow tiles are the path found by the algorithm"),r.a.createElement("img",{id:"mainImage",src:y.a,alt:"pathfindingImage"})):null,7===this.props.currentPage?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"This is the end of the tutorial !"),r.a.createElement("h6",null,'Please click "Skip tutorial" and start using the visualization tool'),r.a.createElement("p",null),r.a.createElement("img",{id:"mainImage",src:D.a,alt:"pathfindingImage"})):null,r.a.createElement("div",{id:"tutorialCounter"},this.props.currentPage,"/",this.props.nbPages),r.a.createElement("button",{id:"nextButton",className:"btn btn-default navbar-btn",type:"button",onClick:function(){return e.props.nextPage()}},"Next"),r.a.createElement("button",{id:"previousButton",className:"btn btn-default navbar-btn",type:"button",onClick:function(){return e.props.previousPage()}},"Previous"),r.a.createElement("button",{id:"skipButton",className:"btn btn-default navbar-btn",type:"button",onClick:function(){return e.props.skipTutorial()}},"Skip Tutorial"),r.a.createElement("button",{id:"closeWindow",className:"btn btn-default navbar-btn",type:"button",onClick:function(){return e.props.skipTutorial()}},"X"))}}]),n}(a.Component)),O=Object(P.b)((function(e){return{currentPage:e.tutorialReducer.currentPage,nbPages:e.tutorialReducer.nbPages}}),(function(e){return{skipTutorial:function(){return e({type:"skipTutorial"})},nextPage:function(){return e({type:"nextPage"})},previousPage:function(){return e({type:"previousPage"})}}}))(j),N=(n(70),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getInitialGrid()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{className:"grid"},this.props.grid.map((function(t,n){return r.a.createElement("div",{className:"grid-row",key:n},t.map((function(t,n){var a=t.row,i=t.col,o=t.isFinish,s=t.isFinishDragged,l=t.isStart,c=t.isStartDragged,u=t.isWall;return r.a.createElement(g,{key:n,col:i,isFinish:o,isFinishDragged:s,isStart:l,isStartDragged:c,isWall:u,mouseIsPressed:e.props.mouseIsPressed,onMouseDown:function(t,n){return e.props.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.props.handleMouseEnter(t,n)},onMouseUp:function(){return e.props.handleMouseUp(a,i)},row:a})})))}))))}}]),n}(a.Component)),F=Object(P.b)((function(e){return{grid:e.gridReducer.grid,mouseIsPressed:e.gridReducer.mouseIsPressed,currentPage:e.tutorialReducer.currentPage,nbPages:e.tutorialReducer.nbPages}}),(function(e){return{getInitialGrid:function(){return e({type:"getInitialGrid"})},skipTutorial:function(){return e({type:"skipTutorial"})},nextPage:function(){return e({type:"nextPage"})},previousPage:function(){return e({type:"previousPage"})},handleMouseDown:function(t,n){return e({type:"handleMouseDown",row:t,col:n})},handleMouseEnter:function(t,n){return e({type:"handleMouseEnter",row:t,col:n})},handleMouseUp:function(t,n){return e({type:"handleMouseUp",row:t,col:n})}}}))(N),M=n(82),z=n(83),C=n(81),x=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(M.a,{bg:"dark",variant:"dark"},r.a.createElement(M.a.Brand,{onClick:function(){return e.props.clearGrid()},href:"#"},"Pathfinding Visualizer"),r.a.createElement(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(M.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(z.a,{className:"mr-auto"},r.a.createElement(C.a,{title:"Algorithms",id:"basic-nav-dropdown"},r.a.createElement(C.a.Item,{onClick:function(){return e.props.visualizeDijkstra()}},"Dijkstra"),r.a.createElement(C.a.Item,{onClick:function(){return e.props.visualizeAstar()}},"A*"),r.a.createElement(C.a.Item,{onClick:function(){return e.props.visualizeGreedyAstar()}},"Greedy A*")),r.a.createElement(z.a.Item,{onClick:function(){return e.props.clearGrid()}},r.a.createElement(z.a.Link,null,"Clear Grid")),r.a.createElement(z.a.Item,{onClick:function(){return e.props.clearPath()}},r.a.createElement(z.a.Link,null,"Clear Path")))))}}]),n}(a.Component),S=Object(P.b)((function(e){return{}}),(function(e){return{visualizeDijkstra:function(){return e({type:"visualizeDijkstra"})},visualizeAstar:function(){return e({type:"visualizeAstar"})},visualizeGreedyAstar:function(){return e({type:"visualizeGreedyAstar"})},clearGrid:function(){return e({type:"clearGrid"})},clearPath:function(){return e({type:"clearPath"})}}}))(x),A=(n(74),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(z.a,{className:"justify-content-center"},r.a.createElement(z.a.Item,null,r.a.createElement(z.a.Link,{eventKey:"disabled",disabled:!0},r.a.createElement("div",{className:"example-node example-node-start"}),r.a.createElement("p",null,"Start node"))),r.a.createElement(z.a.Item,null,r.a.createElement(z.a.Link,{eventKey:"disabled",disabled:!0},r.a.createElement("div",{className:"example-node example-node-finish"}),r.a.createElement("p",null,"Finish node"))),r.a.createElement(z.a.Item,null,r.a.createElement(z.a.Link,{eventKey:"disabled",disabled:!0},r.a.createElement("div",{className:"example-node example-node-wall"}),r.a.createElement("p",null,"Wall"))))}}]),n}(a.Component)),B=Object(P.b)((function(e){return{}}),(function(e){return{visualizeDijkstra:function(){return e({type:"visualizeDijkstra"})},visualizeAstar:function(){return e({type:"visualizeAstar"})},clearBoard:function(){return e({type:"clearBoard"})},clearPath:function(){return e({type:"clearPath"})}}}))(A),W=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(B,null),r.a.createElement(F,null))}}]),n}(a.Component),T=Object(d.hot)(W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(24),V=n(16),R=n(15);function U(e){var t,n=[],a=Object(R.a)(e);try{for(a.s();!(t=a.n()).done;){var r,i=t.value,o=Object(R.a)(i);try{for(o.s();!(r=o.n()).done;){var s=r.value;n.push(s)}}catch(l){o.e(l)}finally{o.f()}}}catch(l){a.e(l)}finally{a.f()}return n}function L(e,t){var n=[],a=e.col,r=e.row;return r>0&&n.push(t[r-1][a]),r<t.length-1&&n.push(t[r+1][a]),a>0&&n.push(t[r][a-1]),a<t[0].length-1&&n.push(t[r][a+1]),n.filter((function(e){return!e.isVisited}))}function K(e,t,n){if(!t||!n||t===n)return!1;var a=[];t.distance=0;for(var r=U(e);r.length;){H(r);var i=r.shift();if(!i.isWall){if(i.distance===1/0)return a;if(i.isVisited=!0,a.push(i),i===n)return a;J(i,e)}}}function H(e){e.sort((function(e,t){return e.distance-t.distance}))}function J(e,t){var n,a=L(e,t),r=Object(R.a)(a);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.distance=e.distance+1,i.previousNode=e}}catch(o){r.e(o)}finally{r.f()}}function X(e,t,n){if(!t||!n||t===n)return!1;var a=[];t.cost=0,t.distance=0;for(var r=U(e);r.length;){Y(r);var i=r.shift();if(!i.isWall){if(i.distance===1/0)return a;if(i.isVisited=!0,a.push(i),i===n)return a;$(i,e,n)}}}function Y(e){e.sort((function(e,t){return e.cost-t.cost}))}function $(e,t,n){var a,r=L(e,t),i=Object(R.a)(r);try{for(i.s();!(a=i.n()).done;){var o=a.value;o.distance=e.distance+1,o.heuristic=Math.abs(n.col-o.col)+Math.abs(n.row-o.row),o.cost=o.distance+o.heuristic,o.previousNode=e,o.isWall&&(o.cost=1/0)}}catch(s){i.e(s)}finally{i.f()}}function _(e,t,n){if(!t||!n||t===n)return!1;var a=[];t.heuristic=0,t.distance=0;for(var r=U(e);r.length;){q(r);var i=r.shift();if(!i.isWall){if(i.distance===1/0)return a;if(i.isVisited=!0,a.push(i),i===n)return a;Q(i,e,n)}}}function q(e){e.sort((function(e,t){return e.heuristic-t.heuristic}))}function Q(e,t,n){var a,r=L(e,t),i=Object(R.a)(r);try{for(i.s();!(a=i.n()).done;){var o=a.value;o.distance=e.distance+1,o.heuristic=Math.abs(n.col-o.col)+Math.abs(n.row-o.row),o.cost=o.distance+e.heuristic,o.previousNode=e,o.isWall&&(o.heuristic=1/0)}}catch(s){i.e(s)}finally{i.f()}}var Z={grid:[],mouseIsPressed:!1,startIsDragged:!1,finishIsDragged:!1},ee=1/0,te=1/0,ne=1/0,ae=1/0,re=10,ie=5,oe=10,se=20,le=function(){for(var e=[],t=0;t<20;t++){for(var n=[],a=0;a<25;a++)n.push(de(t,a));e.push(n)}return e},ce=function(){for(var e=0;e<20;e++)for(var t=0;t<25;t++)document.getElementById("node-".concat(e,"-").concat(t)).className="node";return document.getElementById("node-".concat(re,"-").concat(ie)).className="node node-start",document.getElementById("node-".concat(oe,"-").concat(se)).className="node node-finish",le()},ue=function(e){for(var t=e.slice(),n=0;n<20;n++)for(var a=0;a<25;a++)e[n][a].isWall?(document.getElementById("node-".concat(n,"-").concat(a)).className="node node-wall",t[n][a]=de(n,a),t[n][a].isWall=!0):(document.getElementById("node-".concat(n,"-").concat(a)).className="node",t[n][a]=de(n,a));return document.getElementById("node-".concat(re,"-").concat(ie)).className="node node-start",document.getElementById("node-".concat(oe,"-").concat(se)).className="node node-finish",t},de=function(e,t){return{col:t,row:e,isStart:e===re&&t===ie,isFinish:e===oe&&t===se,distance:1/0,cost:1/0,heuristic:1/0,isVisited:!1,isWall:!1,previousNode:null,isStartDragged:!1,isFinishDragged:!1}},ge=function(e,t,n,a,r){var i=e.slice(),o=i[t][n];if(o.isStart||o.isFinish||a||r)return i;var s=Object(V.a)({},o,{isWall:!o.isWall});return i[t][n]=s,i},fe=function(e,t,n,a,r){var i=e.slice(),o=i[t][n],s=!1,l=!1;if(o.isStart||a){var c=Object(V.a)({},o,{isStartDragged:!0});i[t][n]=c,s=!0,o.isStart&&(ae=n,ne=t),a&&(i[ee][te].isStartDragged=!1),ee=t,te=n}if(o.isFinish||r){var u=Object(V.a)({},o,{isFinishDragged:!0});i[t][n]=u,l=!0,o.isFinish&&(ae=n,ne=t),r&&(i[ee][te].isFinishDragged=!1),ee=t,te=n}return o.isStart||o.isFinish,{grid:i,startIsDragged:s,finishIsDragged:l}},he=function(e,t,n,a,r){var i=e.slice(),o=i[t][n];if(!a&&!r)return i;if(a){var s=Object(V.a)({},o,{isStart:!0,isStartDragged:!1});i[t][n]=s,ie=n,re=t,t===ne&&n===ae||(i[ne][ae].isStart=!1)}if(r){var l=Object(V.a)({},o,{isFinish:!0,isFinishDragged:!1});i[t][n]=l,se=n,oe=t,t===ne&&n===ae||(i[ne][ae].isFinish=!1)}return i},me=function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),50*t)},n=0;n<e.length;n++)t(n)},pe=function(e,t){var n=e[re][ie],a=e[oe][se];!function(e,t){for(var n=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-visited"}),10*t)},a=0;a<e.length;a++)n(a);setTimeout((function(){me(t)}),10*e.length)}(t(e,n,a),function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}(a))},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,n=Object(V.a)({},e);switch(t.type){case"clearGrid":n.grid=ce();break;case"clearPath":n.grid=ue(n.grid);break;case"getInitialGrid":n.grid=le();break;case"handleMouseDown":n.mouseIsPressed=!0;var a=fe(n.grid,t.row,t.col,n.startIsDragged,n.finishIsDragged);n.grid=a.grid,n.startIsDragged=a.startIsDragged,n.finishIsDragged=a.finishIsDragged,n.grid=ge(n.grid,t.row,t.col,n.startIsDragged,n.finishIsDragged);break;case"handleMouseEnter":if(!1===n.mouseIsPressed)break;var r=fe(n.grid,t.row,t.col,n.startIsDragged,n.finishIsDragged);n.grid=r.grid,n.startIsDragged=r.startIsDragged,n.finishIsDragged=r.finishIsDragged,n.grid=ge(n.grid,t.row,t.col,n.startIsDragged,n.finishIsDragged);break;case"handleMouseUp":n.mouseIsPressed=!1,n.grid=he(n.grid,t.row,t.col,n.startIsDragged,n.finishIsDragged),n.startIsDragged=!1,n.finishIsDragged=!1;break;case"visualizeAstar":n.grid=ue(n.grid),pe(n.grid,X);break;case"visualizeDijkstra":n.grid=ue(n.grid),pe(n.grid,K);break;case"visualizeGreedyAstar":n.grid=ue(n.grid),pe(n.grid,_)}return n},be=(n(75),{currentPage:1,nbPages:7}),Ee=function(){document.getElementById("tutorial").style.display="none"},ye=function(e){return 1===e?e:e-1},Ie=function(e){return e===be.nbPages?e:e+1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0,n=Object(V.a)({},e);switch(t.type){case"nextPage":n.currentPage=Ie(n.currentPage);break;case"previousPage":n.currentPage=ye(n.currentPage);break;case"skipTutorial":Ee()}return n},we=Object(G.b)({gridReducer:ve,tutorialReducer:ke}),De=Object(G.c)(we);o.a.render(r.a.createElement(P.a,{store:De},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.fd918244.chunk.js.map