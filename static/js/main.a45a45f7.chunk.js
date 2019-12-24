(this.webpackJsonpgraph=this.webpackJsonpgraph||[]).push([[0],{36:function(e,t,a){e.exports=a(48)},41:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(24),o=a.n(i),c=(a(41),a(9)),l=a(11),h=a(20),s=a(17),u=a(7),m=a(21),g=a(29),d=a.n(g),p=function e(t){var a=this;Object(c.a)(this,e),this.returnNeighbours=function(e){var t=[],r=e[0],n=e[1];if(n+1<a.cols-1){var i=a.graph[r][n+1];0!==i&&4!==i||t.push([r,n+1])}if(r+1<a.rows-1){var o=a.graph[r+1][n];0!==o&&4!==o||t.push([r+1,n])}if(r-1>=1){var c=a.graph[r-1][n];0!==c&&4!==c||t.push([r-1,n])}if(n-1>=1){var l=a.graph[r][n-1];0!==l&&4!==l||t.push([r,n-1])}return t},this.graph=t,this.rows=t.length,this.cols=t[0].length,console.log("cols",this.cols)},f=function e(){var t=this;Object(c.a)(this,e),this.enqueue=function(e){t.queue.push(e)},this.dequeue=function(){return t.queue.splice(0,1)[0]},this.isEmpty=function(){return 0===t.queue.length},this.queue=[]};var v=function(e,t,a){for(var r=new f,n=e.length,i=e[0].length,o=new p(e),c=[],l=[],h=0;h<n;h++){for(var s=[],u=[],m=0;m<i;m++)s.push(-1),u.push(!1);l.push(u),c.push(s)}var g=[],d=-1;for(c[t[0]][t[1]]=0,r.enqueue(t);!r.isEmpty();){var v=r.dequeue(),z=c[v[0]][v[1]];if(v[0]===a[0]&&v[1]===a[1]){d=z;break}for(var b=o.returnNeighbours(v),j=0;j<b.length;j++)-1===c[b[j][0]][b[j][1]]&&(r.enqueue(b[j]),c[b[j][0]][b[j][1]]=z+1,l[b[j][0]][b[j][1]]=v);g.push(v)}for(var P=l[a[0]][a[1]],O=[a];P;)O.push(P),P=l[P[0]][P[1]];return{traversalOrder:g,shortestPath:O,distance:d}},z=function(){function e(){Object(c.a)(this,e),this.array=[]}return Object(l.a)(e,[{key:"push",value:function(e){this.array.push(e)}},{key:"pop",value:function(){return this.isEmpty()?null:this.array.pop()}},{key:"isEmpty",value:function(){return 0===this.array.length}}]),e}();var b={BreadthFirstSearch:v,DepthFirstSearch:function(e,t,a){for(var r=new z,n=e.length,i=e[0].length,o=new p(e),c=[],l=[],h=0;h<n;h++){for(var s=[],u=[],m=0;m<i;m++)s.push(-1),u.push(!1);l.push(u),c.push(s)}var g=[],d=-1;for(c[t[0]][t[1]]=0,r.push(t);!r.isEmpty();){var f=r.pop(),v=c[f[0]][f[1]];if(f[0]===a[0]&&f[1]===a[1]){d=v;break}for(var b=o.returnNeighbours(f),j=0;j<b.length;j++)-1===c[b[j][0]][b[j][1]]&&(r.push(b[j]),c[b[j][0]][b[j][1]]=v+1,l[b[j][0]][b[j][1]]=f);g.push(f)}for(var P=l[a[0]][a[1]],O=[a];P;)O.push(P),P=l[P[0]][P[1]];return{traversalOrder:g,shortestPath:O,distance:d}},none:function(){}};var j={RandomizedVerticals:function(e){for(var t=e.length,a=e[0].length,r=parseInt((a-2)/2),n=[],i=0;i<r;i++){var o=parseInt(Math.random()*(t-2)+1);n.push(o)}for(var c=[],l=0;l<n.length;l++)for(var h=1;h<t-1;h++)h!==n[l]&&c.push([h,2*l+2]);return c},RandomizedHorizontals:function(e){for(var t=e.length,a=e[0].length,r=parseInt((t-2)/2),n=[],i=0;i<r;i++){var o=parseInt(Math.random()*(a-2)+1);n.push(o)}for(var c=[],l=0;l<n.length;l++)for(var h=1;h<a-1;h++)h!==n[l]&&c.push([2*l+2,h]);return c},none:function(){}},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).setup=function(e,t){a.width=1*e.windowWidth,a.height=.89*e.windowHeight,a.mazeHeight=61,a.mazeWidth=121,a.mazeHeightUnit=a.height/a.mazeHeight,a.mazeWidthUnit=a.width/a.mazeWidth,e.createCanvas(a.width,a.height).parent(t),a.initGrid(e),a.place=a.empty,a.startPlaced=!1,a.startCoords=[],a.endPlaced=!1,a.endCoords=[],a.animated=!1,a.iPrev=0,a.jPrev=0},a.calculateIndex=function(e,t){var r=parseInt(e/a.mazeWidthUnit);return[parseInt(t/a.mazeHeightUnit),r]},a.colourBox=function(e,t,r){var n=t[0],i=t[1];"number"===typeof r?e.fill(r):e.fill(r[0],r[1],r[2]),e.rect(a.mazeWidthUnit*i,a.mazeHeightUnit*n,a.mazeWidthUnit,a.mazeHeightUnit)},a.empty=function(){},a.placeStartOnClick=function(e){var t=a.calculateIndex(e.mouseX,e.mouseY);t[0]<a.mazeHeight&&t[0]>=0&&t[1]<a.mazeWidth&&t[1]>=0&&(0===a.graph[t[0]][t[1]]?a.startPlaced||(a.graph[t[0]][t[1]]=1,a.colourBox(e,t,[0,203,255]),a.startPlaced=!0,a.startCoords=t):a.startPlaced&&1===a.graph[t[0]][t[1]]&&(a.graph[t[0]][t[1]]=0,a.colourBox(e,t,255),a.startPlaced=!1,a.startCoords=[])),a.place=a.empty},a.placeEndOnClick=function(e){var t=a.calculateIndex(e.mouseX,e.mouseY);t[0]<a.mazeHeight&&t[0]>=0&&t[1]<a.mazeWidth&&t[1]>=0&&(0===a.graph[t[0]][t[1]]?a.endPlaced||(a.graph[t[0]][t[1]]=4,a.colourBox(e,t,[255,25,33]),a.endPlaced=!0,a.endCoords=t):a.endPlaced&&4===a.graph[t[0]][t[1]]&&(a.graph[t[0]][t[1]]=0,a.colourBox(e,t,255),a.endPlaced=!1,a.endCoords=[])),a.place=a.empty},a.placeMazeWall=function(e,t){0===a.graph[t[0]][t[1]]?(a.graph[t[0]][t[1]]=2,a.colourBox(e,t,[47,56,56])):2===a.graph[t[0]][t[1]]&&(a.graph[t[0]][t[1]]=0,a.colourBox(e,t,255))},a.placeMazeWallOnClick=function(e){var t=a.calculateIndex(e.mouseX,e.mouseY);console.log("i,j prev",a.iPrev,a.jPrev),t[0]<a.mazeHeight&&t[0]>=0&&t[1]<a.mazeWidth&&t[1]>=0&&(0===a.graph[t[0]][t[1]]?(a.graph[t[0]][t[1]]=2,a.colourBox(e,t,[47,56,56])):2===a.graph[t[0]][t[1]]&&(a.graph[t[0]][t[1]]=0,a.colourBox(e,t,255))),a.place=a.empty},a.animatePath=function(e,t,r){r||(r=[Math.floor(255*Math.random()+0),Math.floor(255*Math.random()+0),Math.floor(255*Math.random()+0)]),e.frameRate(1);for(var n=function(n){setTimeout((function(){a.colourBox(e,t[n],r)}),0)},i=1;i<t.length-1;i++)n(i);e.frameRate(10)},a.animateMazeWalls=function(e,t){a.clearSketch(e);for(var r=function(r){setTimeout((function(){a.placeMazeWall(e,t[r])}),0)},n=0;n<t.length;n++)r(n)},a.clearAnimation=function(e){for(var t=0;t<a.graph.length;t++)for(var r=0;r<a.graph[0].length;r++)0===a.graph[t][r]&&a.colourBox(e,[t,r],255);a.animated=!1},a.clearSketch=function(e){a.initGrid(e),a.startPlaced=!1,a.startCoords=[],a.endPlaced=!1,a.endCoords=[],a.animated=!1},a.touchStarted=function(e){a.place=a.objectDraw[a.props.object]},a.draw=function(e){if(a.place(e),a.props.returnClear()&&(console.log("clearing"),a.clearSketch(e)),a.props.returnFindPath()&&(a.animated&&a.clearAnimation(e),a.startPlaced&&a.endPlaced&&(a.traversalInfo=b[a.props.pathAlgorithm](a.graph,a.startCoords,a.endCoords),a.traversalInfo&&(a.animatePath(e,a.traversalInfo.traversalOrder,[49,233,129]),a.animatePath(e,a.traversalInfo.shortestPath,[255,213,60]),a.props.getDistance(a.traversalInfo.distance),a.animated=!0))),a.props.returnGenerateMaze()){console.log("making maze");var t=j[a.props.mazeAlgorithm](a.graph);console.log("mazeorder",t),t&&a.animateMazeWalls(e,t)}},a.render=function(){return n.a.createElement("div",null,n.a.createElement(d.a,{setup:a.setup,draw:a.draw,touchStarted:a.touchStarted,className:"sketch"}))},a.objectDraw={start:a.placeStartOnClick,end:a.placeEndOnClick,wall:a.placeMazeWallOnClick,none:a.empty},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"initGrid",value:function(e){this.graph=[];for(var t=0;t<this.mazeHeight;t++){for(var a=[],r=0;r<this.mazeWidth;r++)0===t||0===r||t===this.mazeHeight-1||r===this.mazeWidth-1?(a.push(3),e.fill(47,56,56)):(e.fill(255),a.push(0)),e.rect(this.mazeWidthUnit*r,this.mazeHeightUnit*t,this.mazeWidthUnit,this.mazeHeightUnit);this.graph.push(a)}}}]),t}(r.Component),O=a(8),M=a(27),E=a(15),S=a(34),k=a(35),C=a(16),w=a(31),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).state={selectedObject:"select object",selectedMazeAlgorithm:"select maze algorithm",selectedPathAlgorithm:"select path algorithm"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(k.a,{bg:"dark",className:"navbar-custom"},n.a.createElement(w.a,null,n.a.createElement(C.a,null,n.a.createElement(O.a,{className:"nav-element",variant:"light"},n.a.createElement(O.a.Toggle,{className:"nav-element",variant:"light",id:"dropdown-basic"},this.state.selectedObject),n.a.createElement(O.a.Menu,{className:"nav-element"},["Start","Wall","End"].map((function(t){return n.a.createElement(O.a.Item,{onClick:function(){e.props.getObject(t.toLowerCase()),e.setState({selectedObject:t})}},t)}))))),n.a.createElement(C.a,null,n.a.createElement(O.a,{as:M.a,variant:"light",className:"nav-element"},n.a.createElement(E.a,{onClick:this.props.generateMaze,variant:"light"},this.state.selectedMazeAlgorithm),n.a.createElement(O.a.Toggle,{split:!0,variant:"light",id:"dropdown-split-basic"}),n.a.createElement(O.a.Menu,null,["Randomized Verticals","Randomized Horizontals"].map((function(t){return n.a.createElement(O.a.Item,{onClick:function(){e.props.getMazeAlgorithm(t.replace(/ /g,"")),e.setState({selectedMazeAlgorithm:t})}},t)}))))),n.a.createElement(C.a,null,n.a.createElement(O.a,{as:M.a,variant:"light",className:"nav-element"},n.a.createElement(E.a,{onClick:this.props.findPath,variant:"light"},this.state.selectedPathAlgorithm),n.a.createElement(O.a.Toggle,{split:!0,variant:"light",id:"dropdown-split-basic"}),n.a.createElement(O.a.Menu,null,["Breadth First Search","Depth First Search"].map((function(t){return n.a.createElement(O.a.Item,{onClick:function(){e.props.getShortPathAlgorithm(t.replace(/ /g,"")),e.setState({selectedPathAlgorithm:t})}},t)}))))),n.a.createElement(C.a,null,n.a.createElement(E.a,{variant:"light",onClick:function(){e.props.clearSketch()},className:"nav-element"},"Clear")),n.a.createElement(C.a,null),n.a.createElement(C.a,null,n.a.createElement(E.a,{variant:"light",className:"nav-element"},"Distance ",n.a.createElement(S.a,{variant:"dark"},this.props.distance)))))}}]),t}(r.Component),y=(a(46),a(47),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).getObject=function(e){a.setState({object:e})},a.getMazeAlgorithm=function(e){a.setState({mazeAlgorithm:e})},a.getShortPathAlgorithm=function(e){a.setState({pathAlgorithm:e})},a.clearSketch=function(){a.setState({clear:!0})},a.findPath=function(){a.setState({findPath:!0})},a.generateMaze=function(){console.log("hi"),a.setState({generateMaze:!0})},a.returnClear=function(){return!!a.state.clear&&(a.setState({clear:!1,distance:0}),!0)},a.returnFindPath=function(){return!!a.state.findPath&&(a.setState({findPath:!1}),!0)},a.returnGenerateMaze=function(){return!!a.state.generateMaze&&(console.log("hi2"),a.setState({generateMaze:!1}),!0)},a.getDistance=function(e){a.setState({distance:e})},a.state={object:"none",mazeAlgorithm:"none",pathAlgorithm:"none",distance:0},a.getObject=a.getObject.bind(Object(u.a)(a)),a.getMazeAlgorithm=a.getMazeAlgorithm.bind(Object(u.a)(a)),a.getShortPathAlgorithm=a.getShortPathAlgorithm.bind(Object(u.a)(a)),a.clearSketch=a.clearSketch.bind(Object(u.a)(a)),a.returnClear=a.returnClear.bind(Object(u.a)(a)),a.getDistance=a.getDistance.bind(Object(u.a)(a)),a.findPath=a.findPath.bind(Object(u.a)(a)),a.returnFindPath=a.returnFindPath.bind(Object(u.a)(a)),a.generateMaze=a.generateMaze.bind(Object(u.a)(a)),a.returnGenerateMaze=a.returnGenerateMaze.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement(A,{getObject:this.getObject,getMazeAlgorithm:this.getMazeAlgorithm,getShortPathAlgorithm:this.getShortPathAlgorithm,clearSketch:this.clearSketch,findPath:this.findPath,distance:this.state.distance,generateMaze:this.generateMaze}),n.a.createElement(P,{className:"center",object:this.state.object,mazeAlgorithm:this.state.mazeAlgorithm,pathAlgorithm:this.state.pathAlgorithm,returnClear:this.returnClear,returnFindPath:this.returnFindPath,getDistance:this.getDistance,returnGenerateMaze:this.returnGenerateMaze}))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a45a45f7.chunk.js.map