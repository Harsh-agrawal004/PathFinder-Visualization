(this.webpackJsonpgraph=this.webpackJsonpgraph||[]).push([[0],{37:function(e,t,a){e.exports=a(49)},42:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),o=a.n(i),h=(a(42),a(6)),c=a(10),s=a(20),l=a(17),u=a(7),p=a(21),d=a(29),g=a.n(d),m=function e(t){var a=this;Object(h.a)(this,e),this.returnNeighbours=function(e){var t=[],n=e[0],r=e[1],i=a.graph[n][r];if(n-1>=1){var o=a.graph[n-1][r],h=!1;0!==o&&4!==o||(h=1),(5===o||5===i&&2!==o)&&(h=5),h&&t.push({neighbour:[n-1,r],weight:h})}if(r-1>=1){var c=a.graph[n][r-1],s=!1;0!==c&&4!==c||(s=1),(5===c||5===i&&2!==c)&&(s=5),s&&t.push({neighbour:[n,r-1],weight:s})}if(r+1<a.cols-1){var l=a.graph[n][r+1],u=!1;0!==l&&4!==l||(u=1),(5===l||5===i&&2!==l)&&(u=5),u&&t.push({neighbour:[n,r+1],weight:u})}if(n+1<a.rows-1){var p=a.graph[n+1][r],d=!1;0!==p&&4!==p||(d=1),(5===p||5===i&&2!==p)&&(d=5),d&&t.push({neighbour:[n+1,r],weight:d})}return t},this.graph=t,this.rows=t.length,this.cols=t[0].length,console.log("cols",this.cols)},f=function e(){var t=this;Object(h.a)(this,e),this.enqueue=function(e){t.queue.push(e)},this.dequeue=function(){return t.queue.splice(0,1)[0]},this.isEmpty=function(){return 0===t.queue.length},this.queue=[]};var v=function(e,t,a){for(var n=new f,r=e.length,i=e[0].length,o=new m(e),h=[],c=[],s=0;s<r;s++){for(var l=[],u=[],p=0;p<i;p++)l.push(-1),u.push(!1);c.push(u),h.push(l)}var d=[],g=-1;for(h[t[0]][t[1]]=0,n.enqueue(t);!n.isEmpty();){var v=n.dequeue(),b=h[v[0]][v[1]];if(v[0]===a[0]&&v[1]===a[1]){g=b;break}for(var z=o.returnNeighbours(v),k=z.length-1;k>=0;k--){var w=z[k].neighbour;-1===h[w[0]][w[1]]&&(n.enqueue(w),h[w[0]][w[1]]=b+1,c[w[0]][w[1]]=v)}d.push(v)}for(var O=c[a[0]][a[1]],j=[a];O;)j.push(O),O=c[O[0]][O[1]];return{traversalOrder:d,shortestPath:j,distance:g}},b=function(){function e(){Object(h.a)(this,e),this.array=[]}return Object(c.a)(e,[{key:"push",value:function(e){this.array.push(e)}},{key:"pop",value:function(){return this.isEmpty()?null:this.array.pop()}},{key:"isEmpty",value:function(){return 0===this.array.length}}]),e}();var z=function(e,t,a){for(var n=new b,r=e.length,i=e[0].length,o=new m(e),h=[],c=[],s=0;s<r;s++){for(var l=[],u=[],p=0;p<i;p++)l.push(-1),u.push(!1);c.push(u),h.push(l)}var d=[],g=-1;for(h[t[0]][t[1]]=0,n.push(t);!n.isEmpty();){var f=n.pop(),v=h[f[0]][f[1]];if(f[0]===a[0]&&f[1]===a[1]){g=v;break}for(var z=o.returnNeighbours(f),k=z.length-1;k>=0;k--){var w=z[k].neighbour;-1===h[w[0]][w[1]]&&(n.push(w),h[w[0]][w[1]]=v+1,c[w[0]][w[1]]=f)}d.push(f)}for(var O=c[a[0]][a[1]],j=[a];O;)j.push(O),O=c[O[0]][O[1]];return{traversalOrder:d,shortestPath:j,distance:g}},k=function(){function e(t){var a=this;Object(h.a)(this,e),this.enqueue=function(e){a.heap.push(e),a.heapSize++;for(var t=a.heapSize-1;t>0;){var n=parseInt((t-1)/2);if(a.comparator(a.heap[t])>a.comparator(a.heap[n]))break;var r=a.heap[t];a.heap[t]=a.heap[n],a.heap[n]=r,t=n}},this.dequeue=function(){var e=a.heap[0];return 1!==a.heapSize?(a.heap[0]=a.heap.pop(),a.heapSize--,a.siftDown(0)):1===a.heapSize&&(console.log("test"),a.heap=[],a.heapSize--),e},this.heap=[],this.heapSize=0,this.comparator=t}return Object(c.a)(e,[{key:"siftDown",value:function(e){for(;e<this.heapSize;){var t=void 0;if(2*e+1>=this.heapSize)break;if(t=2*e+2>=this.heapSize?2*e+1:this.comparator(this.heap[2*e+1])<this.comparator(this.heap[2*e+2])?2*e+1:2*e+2,!(this.comparator(this.heap[t])<this.comparator(this.heap[e])))break;var a=this.heap[t];this.heap[t]=this.heap[e],this.heap[e]=a,e=t}}},{key:"heapify",value:function(){console.log("test");for(var e=this.heapSize-1;e>=0;e--)this.siftDown(e)}},{key:"findElement",value:function(e){for(var t=0;t<this.heapSize;t++)if(e(this.heap[t]))return t;return!1}},{key:"update",value:function(e,t){this.heap[e]=t,this.heapify()}},{key:"isEmpty",value:function(){return 0===this.heapSize}}]),e}();var w={BreadthFirstSearch:v,DepthFirstSearch:z,Dijkstra:function(e,t,a){for(var n=new k((function(e){return e.distance})),r=e.length,i=e[0].length,o=new m(e),h=[],c=[],s=0;s<r;s++){for(var l=[],u=[],p=0;p<i;p++)l.push(-1),u.push(!1);c.push(u),h.push(l)}var d=[],g=-1;for(h[t[0]][t[1]]=0,n.enqueue({index:t,distance:0});!n.isEmpty();){var f=n.dequeue();d.push(f.index);var v=h[f.index[0]][f.index[1]];if(f.index[0]===a[0]&&f.index[1]===a[1]){g=v;break}for(var b=o.returnNeighbours(f.index),z=function(e){var t=b[e],a=t.neighbour;if(-1===h[a[0]][a[1]])n.enqueue({index:a,distance:v+t.weight}),h[a[0]][a[1]]=v+t.weight,c[a[0]][a[1]]=f.index;else if(h[a[0]][a[1]]>v+t.weight){var r=n.findElement((function(e){return e.index[0]===a[0]&&e.index[1]===a[1]}));r&&(n.update(r,{index:a,distance:v+t.weight}),h[a[0]][a[1]]=v+t.weight,c[a[0]][a[1]]=f.index)}},w=0;w<=b.length-1;w++)z(w)}for(var O=c[a[0]][a[1]],j=[a];O;)j.push(O),O=c[O[0]][O[1]];return console.log("order",d),{traversalOrder:d,shortestPath:j,distance:g}},Astar:function(e,t,a){for(var n=new k((function(e){return e.heuristic})),r=e.length,i=e[0].length,o=new m(e),h=[],c=[],s=0;s<r;s++){for(var l=[],u=[],p=0;p<i;p++)l.push(-1),u.push(!1);c.push(u),h.push(l)}var d=[],g=-1;function f(e,t){return Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])}for(h[t[0]][t[1]]=0,n.enqueue({index:t,distance:0,heuristic:0});!n.isEmpty();){var v=n.dequeue();d.push(v.index);var b=h[v.index[0]][v.index[1]];if(v.index[0]===a[0]&&v.index[1]===a[1]){g=b;break}for(var z=o.returnNeighbours(v.index),w=function(e){var t=z[e],r=t.neighbour;if(-1===h[r[0]][r[1]])n.enqueue({index:r,distance:b+t.weight,heuristic:b+t.weight+f(r,a)}),h[r[0]][r[1]]=b+t.weight,c[r[0]][r[1]]=v.index;else if(h[r[0]][r[1]]>b+t.weight){var i=n.findElement((function(e){return e.index[0]===r[0]&&e.index[1]===r[1]}));i&&(n.update(i,{index:r,distance:b+t.weight,heuristic:b+t.weight+f(r,a)}),h[r[0]][r[1]]=b+t.weight,c[r[0]][r[1]]=v.index)}},O=0;O<=z.length-1;O++)w(O)}for(var j=c[a[0]][a[1]],S=[a];j;)S.push(j),console.log("itr",j),j=c[j[0]][j[1]];return console.log("order",d),{traversalOrder:d,shortestPath:S,distance:g}},none:function(){}};var O=function(e){for(var t=e.length,a=e[0].length,n=parseInt((a-2)/2),r=[],i=0;i<n;i++){var o=parseInt(Math.random()*(t-2)+1);r.push(o)}for(var h=[],c=0;c<r.length;c++)for(var s=1;s<t-1;s++)s!==r[c]&&h.push([s,2*c+2]);return h};var j=function(e){for(var t=e.length,a=e[0].length,n=parseInt((t-2)/2),r=[],i=0;i<n;i++){var o=parseInt(Math.random()*(a-2)+1);r.push(o)}for(var h=[],c=0;c<r.length;c++)for(var s=1;s<a-1;s++)s!==r[c]&&h.push([2*c+2,s]);return h},S=a(36);var x={RandomizedVerticals:O,RandomizedHorizontals:j,RecursiveDivision:function(e){var t=[];function a(e,t){return Math.floor(Math.random()*(t-e+1)+e)}return function e(n,r,i,o){var h=[o[0]-i[0],o[1]-i[1]];if(r){if(h[0]<2)return;var c=2*Math.floor(a(i[1],o[1])/2);!function(e,n,r){for(var i=2*Math.floor(a(e,n)/2)+1,o=e;o<=n;o++)o!==i&&t.push([o,r])}(i[0],o[0],c),e(n,!r,i,[o[0],c-1]),e(n,!r,[i[0],c+1],o)}else{if(h[1]<2)return;var s=2*Math.floor(a(i[0],o[0])/2);!function(e,n,r){for(var i=2*Math.floor(a(e,n)/2)+1,o=e;o<=n;o++)o!==i&&t.push([r,o])}(i[1],o[1],s),e(n,!r,i,[s-1,o[1]]),e(n,!r,[s+1,i[1]],o)}}(Object(S.a)(e),!1,[1,1],[e.length-2,e[0].length-2]),t},none:function(){}},E=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).setup=function(e,t){a.width=1*e.windowWidth,a.height=.89*e.windowHeight,a.mazeHeight=61,a.mazeWidth=121,a.mazeHeightUnit=a.height/a.mazeHeight,a.mazeWidthUnit=a.width/a.mazeWidth,e.createCanvas(a.width,a.height).parent(t),a.initGrid(e),a.place=a.empty,a.startPlaced=!1,a.startCoords=[],a.endPlaced=!1,a.endCoords=[],a.animated=!1,a.iPrev=0,a.jPrev=0},a.calculateIndex=function(e,t){var n=parseInt(e/a.mazeWidthUnit);return[parseInt(t/a.mazeHeightUnit),n]},a.colourBox=function(e,t,n){var r=t[0],i=t[1];"number"===typeof n?e.fill(n):e.fill(n[0],n[1],n[2]),e.rect(a.mazeWidthUnit*i,a.mazeHeightUnit*r,a.mazeWidthUnit,a.mazeHeightUnit)},a.empty=function(){},a.placeStartOnClick=function(e){var t=a.calculateIndex(e.mouseX,e.mouseY);t[0]<a.mazeHeight&&t[0]>=0&&t[1]<a.mazeWidth&&t[1]>=0&&(0===a.graph[t[0]][t[1]]?a.startPlaced||(a.graph[t[0]][t[1]]=1,a.colourBox(e,t,[0,203,255]),a.startPlaced=!0,a.startCoords=t):a.startPlaced&&1===a.graph[t[0]][t[1]]&&(a.graph[t[0]][t[1]]=0,a.colourBox(e,t,255),a.startPlaced=!1,a.startCoords=[])),a.place=a.empty},a.placeEndOnClick=function(e){var t=a.calculateIndex(e.mouseX,e.mouseY);t[0]<a.mazeHeight&&t[0]>=0&&t[1]<a.mazeWidth&&t[1]>=0&&(0===a.graph[t[0]][t[1]]?a.endPlaced||(a.graph[t[0]][t[1]]=4,a.colourBox(e,t,[255,25,33]),a.endPlaced=!0,a.endCoords=t):a.endPlaced&&4===a.graph[t[0]][t[1]]&&(a.graph[t[0]][t[1]]=0,a.colourBox(e,t,255),a.endPlaced=!1,a.endCoords=[])),a.place=a.empty},a.placeMazeWall=function(e,t){console.log(a.graph[t[0]]),0===a.graph[t[0]][t[1]]?(a.graph[t[0]][t[1]]=2,a.colourBox(e,t,[47,56,56])):2===a.graph[t[0]][t[1]]&&(a.graph[t[0]][t[1]]=0,a.colourBox(e,t,255))},a.placeMazeWallOnClick=function(e){var t=a.calculateIndex(e.mouseX,e.mouseY);t[0]<a.mazeHeight&&t[0]>=0&&t[1]<a.mazeWidth&&t[1]>=0&&(0===a.graph[t[0]][t[1]]?(a.graph[t[0]][t[1]]=2,a.colourBox(e,t,[47,56,56])):2===a.graph[t[0]][t[1]]&&(a.graph[t[0]][t[1]]=0,a.colourBox(e,t,255))),a.place=a.empty},a.placeWeightOnClick=function(e){var t=a.calculateIndex(e.mouseX,e.mouseY);t[0]<a.mazeHeight&&t[0]>=0&&t[1]<a.mazeWidth&&t[1]>=0&&(0===a.graph[t[0]][t[1]]?(a.graph[t[0]][t[1]]=5,a.colourBox(e,t,[255,0,255])):5===a.graph[t[0]][t[1]]&&(a.graph[t[0]][t[1]]=0,a.colourBox(e,t,255))),a.place=a.empty},a.animateExploration=function(e,t,n,r){e.frameRate(1);for(var i=function(i){setTimeout((function(){0===a.graph[t[i][0]][t[i][1]]?a.colourBox(e,t[i],n):a.colourBox(e,t[i],r)}),0)},o=1;o<t.length-1;o++)i(o);e.frameRate(10)},a.animatePath=function(e,t,n){n||(n=[Math.floor(255*Math.random()+0),Math.floor(255*Math.random()+0),Math.floor(255*Math.random()+0)]),e.frameRate(1);for(var r=function(r){setTimeout((function(){a.colourBox(e,t[r],n)}),0)},i=1;i<t.length-1;i++)r(i);e.frameRate(10)},a.animateMazeWalls=function(e,t){a.clearSketch(e);for(var n=function(n){setTimeout((function(){a.placeMazeWall(e,t[n])}),0)},r=0;r<t.length;r++)n(r)},a.clearAnimation=function(e){for(var t=0;t<a.graph.length;t++)for(var n=0;n<a.graph[0].length;n++)0===a.graph[t][n]&&a.colourBox(e,[t,n],255),5===a.graph[t][n]&&a.colourBox(e,[t,n],[255,0,255]);a.animated=!1},a.clearSketch=function(e){a.initGrid(e),a.startPlaced=!1,a.startCoords=[],a.endPlaced=!1,a.endCoords=[],a.animated=!1},a.touchStarted=function(e){a.place=a.objectDraw[a.props.object]},a.draw=function(e){if(a.place(e),a.props.returnClear()&&a.clearSketch(e),a.props.returnClearAnimation()&&a.clearAnimation(e),a.props.returnFindPath()&&(a.animated&&a.clearAnimation(e),a.startPlaced&&a.endPlaced&&(a.traversalInfo=w[a.props.pathAlgorithm](a.graph,a.startCoords,a.endCoords),a.traversalInfo&&(a.animateExploration(e,a.traversalInfo.traversalOrder,[49,233,129],[30,200,100]),a.animateExploration(e,a.traversalInfo.shortestPath,[255,213,60],[180,150,40]),a.props.getDistance(a.traversalInfo.distance),a.animated=!0))),a.props.returnGenerateMaze()){console.log("making maze");var t=x[a.props.mazeAlgorithm](a.graph);console.log("mazeorder",t),t&&a.animateMazeWalls(e,t)}},a.render=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{setup:a.setup,draw:a.draw,touchStarted:a.touchStarted,className:"sketch"}))},a.objectDraw={start:a.placeStartOnClick,end:a.placeEndOnClick,wall:a.placeMazeWallOnClick,weight:a.placeWeightOnClick,none:a.empty},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"initGrid",value:function(e){this.graph=[];for(var t=0;t<this.mazeHeight;t++){for(var a=[],n=0;n<this.mazeWidth;n++)0===t||0===n||t===this.mazeHeight-1||n===this.mazeWidth-1?(a.push(3),e.fill(47,56,56)):(e.fill(255),a.push(0)),e.rect(this.mazeWidthUnit*n,this.mazeHeightUnit*t,this.mazeWidthUnit,this.mazeHeightUnit);this.graph.push(a)}}}]),t}(n.Component),M=a(9),A=a(27),P=a(14),C=a(34),y=a(35),W=a(16),I=a(31),B=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={selectedObject:"select object",selectedMazeAlgorithm:"select maze algorithm",selectedPathAlgorithm:"select path algorithm"},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{bg:"dark",className:"navbar-custom"},r.a.createElement(I.a,null,r.a.createElement(W.a,null,r.a.createElement(M.a,{className:"nav-element",variant:"light"},r.a.createElement(M.a.Toggle,{className:"nav-element",variant:"light",id:"dropdown-basic"},this.state.selectedObject),r.a.createElement(M.a.Menu,{className:"nav-element"},["Start","Wall","Weight","End"].map((function(t){return r.a.createElement(M.a.Item,{onClick:function(){e.props.getObject(t.toLowerCase()),e.setState({selectedObject:t})},key:t},t)}))))),r.a.createElement(W.a,null,r.a.createElement(M.a,{as:A.a,variant:"light",className:"nav-element"},r.a.createElement(P.a,{onClick:this.props.generateMaze,variant:"light"},this.state.selectedMazeAlgorithm),r.a.createElement(M.a.Toggle,{split:!0,variant:"light",id:"dropdown-split-basic"}),r.a.createElement(M.a.Menu,null,["Randomized Verticals","Randomized Horizontals","Recursive Division"].map((function(t){return r.a.createElement(M.a.Item,{key:t,onClick:function(){e.props.getMazeAlgorithm(t.replace(/ /g,"")),e.setState({selectedMazeAlgorithm:t})}},t)}))))),r.a.createElement(W.a,null,r.a.createElement(M.a,{as:A.a,variant:"light",className:"nav-element"},r.a.createElement(P.a,{onClick:this.props.findPath,variant:"light"},this.state.selectedPathAlgorithm),r.a.createElement(M.a.Toggle,{split:!0,variant:"light",id:"dropdown-split-basic"}),r.a.createElement(M.a.Menu,null,["Breadth First Search","Depth First Search","Dijkstra","Astar"].map((function(t){return r.a.createElement(M.a.Item,{key:t,onClick:function(){e.props.getShortPathAlgorithm(t.replace(/ /g,"")),e.setState({selectedPathAlgorithm:t})}},t)}))))),r.a.createElement(W.a,null,r.a.createElement(P.a,{variant:"light",onClick:function(){e.props.clearSketch()},className:"nav-element"},"Clear")),r.a.createElement(W.a,null,r.a.createElement(P.a,{variant:"light",onClick:function(){e.props.clearAnimation()},className:"nav-element"},"ClearAnimation")),r.a.createElement(W.a,null,r.a.createElement(P.a,{variant:"light",className:"nav-element"},"Distance ",r.a.createElement(C.a,{variant:"dark"},this.props.distance)))))}}]),t}(n.Component),D=(a(47),a(48),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).getObject=function(e){a.setState({object:e})},a.getMazeAlgorithm=function(e){a.setState({mazeAlgorithm:e})},a.getShortPathAlgorithm=function(e){a.setState({pathAlgorithm:e})},a.clearSketch=function(){a.setState({clear:!0})},a.clearAnimation=function(){a.setState({clearAnimation:!0})},a.findPath=function(){a.setState({findPath:!0})},a.generateMaze=function(){console.log("hi"),a.setState({generateMaze:!0})},a.returnClearAnimation=function(){return!!a.state.clearAnimation&&(a.setState({clearAnimation:!1}),!0)},a.returnClear=function(){return!!a.state.clear&&(a.setState({clear:!1,distance:0}),!0)},a.returnFindPath=function(){return!!a.state.findPath&&(a.setState({findPath:!1}),!0)},a.returnGenerateMaze=function(){return!!a.state.generateMaze&&(console.log("hi2"),a.setState({generateMaze:!1}),!0)},a.getDistance=function(e){a.setState({distance:e})},a.state={object:"none",mazeAlgorithm:"none",pathAlgorithm:"none",distance:0},a.getObject=a.getObject.bind(Object(u.a)(a)),a.getMazeAlgorithm=a.getMazeAlgorithm.bind(Object(u.a)(a)),a.getShortPathAlgorithm=a.getShortPathAlgorithm.bind(Object(u.a)(a)),a.clearSketch=a.clearSketch.bind(Object(u.a)(a)),a.returnClear=a.returnClear.bind(Object(u.a)(a)),a.getDistance=a.getDistance.bind(Object(u.a)(a)),a.findPath=a.findPath.bind(Object(u.a)(a)),a.returnFindPath=a.returnFindPath.bind(Object(u.a)(a)),a.generateMaze=a.generateMaze.bind(Object(u.a)(a)),a.returnGenerateMaze=a.returnGenerateMaze.bind(Object(u.a)(a)),a.clearAnimation=a.clearAnimation.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(B,{getObject:this.getObject,getMazeAlgorithm:this.getMazeAlgorithm,getShortPathAlgorithm:this.getShortPathAlgorithm,clearSketch:this.clearSketch,findPath:this.findPath,distance:this.state.distance,generateMaze:this.generateMaze,clearAnimation:this.clearAnimation}),r.a.createElement(E,{className:"center",object:this.state.object,mazeAlgorithm:this.state.mazeAlgorithm,pathAlgorithm:this.state.pathAlgorithm,returnClear:this.returnClear,returnFindPath:this.returnFindPath,getDistance:this.getDistance,returnGenerateMaze:this.returnGenerateMaze,returnClearAnimation:this.returnClearAnimation}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5963cc66.chunk.js.map