(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"url":"/images/Butters.png","name":"Butters","id":1},{"url":"/images/Cartman.png","name":"Cartman","id":2},{"url":"/images/Chef.png","name":"Chef","id":3},{"url":"/images/Jimmy.png","name":"Jimmy","id":4},{"url":"/images/Kyle.png","name":"Kyle","id":5},{"url":"/images/MrGarrison.png","name":"Mr. Garrison","id":6},{"url":"/images/MrMackey.png","name":"Mr. Mackey","id":7},{"url":"/images/Randy.png","name":"Randy Marsh","id":8},{"url":"/images/Stan.png","name":"Stan","id":9},{"url":"/images/Token.png","name":"Token","id":10},{"url":"/images/Towelie.png","name":"Towelie","id":11},{"url":"/images/Tweek.png","name":"Tweek","id":12}]')},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(3),s=t.n(i),c=(t(14),t(4)),o=t(5),l=t(7),m=t(6),u=t(8),d=(t(15),t(1));t(16);var g=function(e){return r.a.createElement("div",{className:"wrapper container"},e.children)};var p=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"React Memory Game"),r.a.createElement("span",null,r.a.createElement("h3",null,e.message)),r.a.createElement("span",{className:"float-right"},"Score: ",e.score," | Top Score: ",e.topScore)))};var h=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"React Memory Game"),r.a.createElement("p",{className:"lead"},"Can you beat your high score? Click a picture to get started. But don't click it again!"))};t(17);var f=function(e){return r.a.createElement("div",{className:"d-inline"},r.a.createElement("div",{className:"card",id:e.id,key:e.id,onClick:function(){return e.handleCardClick(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.url}))))},v=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={images:d,score:0,message:"Play now!",topScore:0,pastSelections:[]},t.handleCardClick=function(e){t.state.pastSelections.includes(e)?t.incorrect():t.correct(e)},t.correct=function(e){console.log("well done"),t.state.pastSelections.push(e),t.setState({score:t.state.score+1,message:"Correct! Keep it up!"}),t.shuffle(t.state.images)},t.incorrect=function(){console.log("alright buddy"),t.setState({score:0,message:"Wrong! Time to start over!"}),t.shuffle(t.state.images)},t.shuffle=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[e[n],e[a]];e[a]=r[0],e[n]=r[1]}t.setState({images:e})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return console.log(d),r.a.createElement("div",{className:"App"},r.a.createElement(p,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),r.a.createElement(h,null),r.a.createElement(g,null,this.state.images.map((function(a){return r.a.createElement(f,{handleCardClick:e.handleCardClick,id:a.id,key:a.id,name:a.name,url:a.url})}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e37ca977.chunk.js.map