(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){},254:function(e,t,a){e.exports=a(514)},500:function(e,t){},514:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(33),i=a.n(r),o=(a(148),a(19)),c=a(20),l=a(22),u=a(21),h=a(23),d=a(45),m=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(d.Navbar,{type:"dark",center:s.a.createElement("div",{class:"textMess"},"MESSENGER"),right:s.a.createElement("span",{className:"signed-in-user"},"Ahoj, ",(this.props.signedInUser||{}).name)})}}]),t}(n.Component),p=a(252),g=a.n(p),v=a(253),f=a.n(v),k=a(65),w=a.n(k),E=a(25),y=a.n(E),b=a(519),C=a(517),x=a(518),j=a(516),S=a(66),O=a.n(S),U=a(145),N=a(47),I=a.n(N);I.a.defaults.baseURL="http://localhost:8002";var M=function(){var e=Object(U.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/users");case 2:return t=e.sent,e.abrupt("return",t.data||[]);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(U.a)(O.a.mark(function e(t,a){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("frontend "+t+" "+a),I.a.request({method:"POST",url:"http://localhost:8002/users",headers:{ContentType:"application/x-www-form-urlencoded",Accept:"application/json"},data:{id:t,name:a}});case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),L=a(46),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(L.a,{size:"50",round:"{true}",color:L.a.getRandomColor("sitebase",["red","green","blue"]),name:"kane"})}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={userData:[],searchQuery:null,newUserValue:""},a.newUserClick=function(e){var t=e.target.value,n=null,s=null;t&&(n=t),a.setState({newUserValue:e.target.value}),M().then(function(e){var t=e.length;s=e[t-1].id,console.log("id = "+e[t-1].id+", name= "+e[t-1].name),D(s+1,n),window.location.reload()})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"searchInput",value:function(e){var t=e.target.value,a=null;t&&(a=t),this.setState({searchQuery:a})}},{key:"onNewUserClicked",value:function(){this.state.newUserValue&&(this.props.onNewUserClicked(this.state.newUserValue),console.log(this.state.newUserValue),this.setState({newUserValue:""}))}},{key:"getFilteredUserList",value:function(){var e=this;return this.state.searchQuery?this.props.userData.filter(function(t){return t.name.toLowerCase().includes(e.state.searchQuery.toLowerCase())}):this.props.userData}},{key:"render",value:function(){var e=this,t=this.getFilteredUserList();return s.a.createElement("div",null,s.a.createElement(b.a,null,s.a.createElement(C.a,{type:"text",className:"hledac",placeholder:"Hled\xe1n\xed",onInput:this.searchInput.bind(this)}),this.props.showSignInList?s.a.createElement(x.a,null,s.a.createElement(C.a,{type:"text",placeholder:"P\u0159idat u\u017eivatele.",className:"pridatInput",onKeyPress:function(t){"Enter"===t.key&&e.newUserClick(t)}}),s.a.createElement(x.a.Button,null,s.a.createElement(j.a,{className:"newUserButton",onClick:this.onNewUserClicked.bind(this)},"P\u0159idat u\u017eivatele"))):""),t.length?s.a.createElement(d.ChatList,{className:this.props.showSignInList?"user-list":"chat-list",dataSource:t.map(function(t,a){var n=null,r="";if(!e.props.showSignInList&&t.messages&&t.messages.length){var i=t.messages[t.messages.length-1];n=new Date(i.timeStamp),r=("right"===i.position?"Posledn\xed zpr\xe1va: ":t.name+": ")+i.text}return{avatar:s.a.createElement(B,null),title:t.name,subtitle:r,date:n,unread:t.unread,user:t}}),onClick:this.props.showSignInList?this.props.onUserClicked:this.props.onChatClicked}):s.a.createElement("div",{className:"text-center no-users"},"\u017d\xe1dn\xed p\u0159ihl\xe1\u0161en\xed u\u017eivatel\xe9."))}}]),t}(n.Component),P=a(249),A=a.n(P),H=a(146),R=a.n(H),V=a(250),z=a.n(V),K=a(248),Q=a.n(K),F=a(44),q=a.n(F),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={messageText:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSendClicked",value:function(){this.state.messageText&&(this.props.onSendClicked(this.state.messageText),this.setState({messageText:""}))}},{key:"onMessageInputChange",value:function(e){this.setState({messageText:e.target.value})}},{key:"onMessageKeyPress",value:function(e){"Enter"===e.key&&this.onSendClicked()}},{key:"render",value:function(){return s.a.createElement("div",null,this.props.targetUser?s.a.createElement("div",null,s.a.createElement(d.Navbar,{left:s.a.createElement("div",null,s.a.createElement(w.a,{mdHidden:!0,lgHidden:!0},s.a.createElement("p",{className:"navBarText"},s.a.createElement(q.a,{onClick:this.props.onBackPressed,glyph:"chevron-left"}))),s.a.createElement(L.a,{size:"50",round:!0,color:L.a.getRandomColor("sitebase",["red","green","blue"]),name:this.props.targetUser.name}),s.a.createElement("p",{className:"navBarText"},this.props.targetUser.name))}),s.a.createElement(d.MessageList,{className:"message-list",lockable:!0,toBottomHeight:"100%",dataSource:this.props.targetUser.messages}),s.a.createElement(Q.a,null,s.a.createElement(R.a,null,s.a.createElement(A.a,{type:"text",value:this.state.messageText,onChange:this.onMessageInputChange.bind(this),onKeyPress:this.onMessageKeyPress.bind(this),placeholder:"Text zpr\xe1vy",ref:"messageTextBox",className:"messageTextBox",maxLength:"3000",autoFocus:!0}),s.a.createElement(R.a.Button,null,s.a.createElement(z.a,{disabled:!this.state.messageText,className:"sendButton",onClick:this.onSendClicked.bind(this)},"ODESLAT"))))):s.a.createElement("div",null))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(y.a,{show:this.props.show},s.a.createElement(y.a.Header,null,s.a.createElement(y.a.Title,null,"Error")),s.a.createElement(y.a.Body,null,s.a.createElement("h1",{className:"text-center"},s.a.createElement(q.a,{glyph:"alert"})),s.a.createElement("h5",{className:"text-center"},this.props.errorMessage)))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(y.a,{show:this.props.show},s.a.createElement(y.a.Body,null,s.a.createElement("h1",{className:"text-center"},s.a.createElement(q.a,{glyph:"refresh"})),s.a.createElement("h5",{className:"text-center"},"Loading...")))}}]),t}(n.Component),Z=(a(472),a(251)),$=a.n(Z),X=a(97);a(512);console.log("http://localhost:8002");var Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).socket=null,a.state={signInModalShow:!1,users:[],userChatData:[],user:null,selectedUserIndex:null,showChatBox:!1,showChatList:!0,error:!1,errorMessage:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.initAxios(),this.initSocketConnection(),M().then(function(t){return e.setState({users:t,signInModalShow:!0})}),this.setupSocketListeners()}},{key:"initSocketConnection",value:function(){this.socket=$.a.connect("http://localhost:8002")}},{key:"initAxios",value:function(){var e=this;I.a.interceptors.request.use(function(t){return e.setState({loading:!0}),t},function(t){return e.setState({loading:!1}),e.setState({errorMessage:"Server vypnut",error:!0}),Promise.reject(t)}),I.a.interceptors.response.use(function(t){return e.setState({loading:!1}),t},function(t){return e.setState({loading:!1}),e.setState({errorMessage:"Some error occured. try after sometime",error:!0}),Promise.reject(t)})}},{key:"onClientDisconnected",value:function(){X.NotificationManager.error("Ztr\xe1ta spojen\xed se serverem.","Error!")}},{key:"onReconnection",value:function(){this.state.user&&(this.socket.emit("sign-in",this.state.user),X.NotificationManager.success("Connection Established.","Reconnected!"))}},{key:"setupSocketListeners",value:function(){this.socket.on("message",this.onMessageRecieved.bind(this)),this.socket.on("reconnect",this.onReconnection.bind(this)),this.socket.on("disconnect",this.onClientDisconnected.bind(this))}},{key:"onMessageRecieved",value:function(e){var t,a=this.state.userChatData,n=e.message;e.from===this.state.user.id?(n.position="right",t=e.to):(n.position="left",t=e.from);var s=a.findIndex(function(e){return e.id===t});a[s].messages||(a[s].messages=[]),s!==this.state.selectedUserIndex&&(a[s].unread||(a[s].unread=0),a[s].unread++),a[s].messages.push(n),this.setState({userChatData:a})}},{key:"onUserClicked",value:function(e){var t=e.user;this.socket.emit("sign-in",t);var a=this.state.users.filter(function(e){return e.id!==t.id});this.setState({user:t,signInModalShow:!1,userChatData:a})}},{key:"onChatClicked",value:function(e){this.toggleViews();for(var t=this.state.userChatData,a=0;a<t.length;a++)if(t[a].id===e.user.id)return t[a].unread=0,void this.setState({selectedUserIndex:a,userChatData:t})}},{key:"createMessage",value:function(e){var t={to:this.state.userChatData[this.state.selectedUserIndex].id,message:{type:"text",text:e,date:+new Date,className:"message"},from:this.state.user.id};this.socket.emit("message",t)}},{key:"toggleViews",value:function(){this.setState({showChatBox:!this.state.showChatBox,showChatList:!this.state.showChatList})}},{key:"render",value:function(){var e=this.state.showChatBox?{xs:12,sm:12}:{xsHidden:!0,smHidden:!0},t=this.state.showChatList?{xs:12,sm:12}:{xsHidden:!0,smHidden:!0};return s.a.createElement("div",null,s.a.createElement(m,{signedInUser:this.state.user}),s.a.createElement("div",{class:"mezera"}),s.a.createElement(g.a,null,s.a.createElement(f.a,{className:"show-grid"},s.a.createElement(w.a,Object.assign({},t,{md:4}),s.a.createElement(T,{userData:this.state.userChatData,onChatClicked:this.onChatClicked.bind(this)})),s.a.createElement(w.a,Object.assign({},e,{md:8}),s.a.createElement(J,{signedInUser:this.state.user,onSendClicked:this.createMessage.bind(this),onBackPressed:this.toggleViews.bind(this),targetUser:this.state.userChatData[this.state.selectedUserIndex]})))),s.a.createElement(y.a,{show:this.state.signInModalShow},s.a.createElement(y.a.Header,null,s.a.createElement(y.a.Title,null,"P\u0159ihla\u0161en\xed:")),s.a.createElement(y.a.Body,null,s.a.createElement(T,{userData:this.state.users,onUserClicked:this.onUserClicked.bind(this),showSignInList:!0}))),s.a.createElement(W,{show:this.state.error,errorMessage:this.state.errorMessage}),s.a.createElement(G,{show:this.state.loading}),s.a.createElement(X.NotificationContainer,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[254,2,1]]]);
//# sourceMappingURL=main.c93b0da7.chunk.js.map