(this["webpackJsonpimage-gallery"]=this["webpackJsonpimage-gallery"]||[]).push([[0],{11:function(e,t,a){e.exports=a(31)},16:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},19:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),s=a.n(l),o=(a(16),a(17),a(18),a(2)),c=a(6),i=a(7),d=a(10),u=a(9),m=(a(19),a(3)),f=a.n(m),h=(a(25),a(28),function(e){if(""!==e.currentAddress)return r.a.createElement("div",null,r.a.createElement("img",{src:e.currentAddress}),r.a.createElement("button",{className:"btn",value:e.id,onClick:function(t){e.WhenClicked(e.id,e.id2)}},r.a.createElement("i",{style:{color:"#f5f5f5"},className:"fa fa-trash fa-2x","aria-hidden":"true"})))}),g=(a(29),function(e){return Object(n.useEffect)((function(){var t=document.getElementById("NO");0!=e.Images.length&&(t.style.display="none")})),r.a.createElement("div",{className:"folder"},r.a.createElement("section",null,r.a.createElement("h3",null,e.name),r.a.createElement("i",{id:"i2",style:{color:"#000"},className:"fa fa-trash fa-2x","aria-hidden":"true",onClick:function(t){e.When(e.name)}}),r.a.createElement("i",{id:"NO",style:{color:"#cbcbcb"},className:"fa fa-file-image-o fa-5x","aria-hidden":"true"})),r.a.createElement("div",{className:"cards"},e.Images.map((function(t,a){return r.a.createElement(h,{key:100*Math.random(),id:e.name,id2:a,currentAddress:t,WhenClicked:e.delete})}))))}),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).FolderSelect=function(e){var t=e.target.id,a=Object(o.a)({},n.state.Folders);a[t].push(n.state.currentAddress),n.setState({Folders:a,currentAddress:""}),localStorage.setItem("Folder",JSON.stringify(a)),n.closeModal2()},n.onaddFolder=function(e){var t=document.getElementById("input-folder").value,a=Object(o.a)({},n.state.Folders);t?Object.keys(a).find((function(e){return e==t}))?alert("Please Enter Other Name"):(a[t]=[],1===Object.keys(a).length&&n.state.currentAddress&&a[t].push(n.state.currentAddress),n.setState({Folders:a,currentAddress:""}),console.log(a),localStorage.setItem("Folder",JSON.stringify(a)),n.closeModal(),document.getElementById("input-folder").value=""):alert("Please Enter Valid Folder Name")},n.onaddressChange=function(e){n.setState({currentAddress:e.target.value})},n.ondelete=function(e,t){console.log(e,t);var a=Object(o.a)({},n.state.Folders);a[e].splice(t,1),n.setState({Folders:a}),localStorage.setItem("Folder",JSON.stringify(a))},n.FolderDelete=function(e){var t=Object(o.a)({},n.state.Folders);0!=t[e].length?window.confirm("Do you Really Want To Permanently Delete The Folder")&&(delete t[e],n.setState({Folders:t}),localStorage.setItem("Folder",JSON.stringify(t))):(delete t[e],n.setState({Folders:t}),localStorage.setItem("Folder",JSON.stringify(t)))},n.render=function(){return r.a.createElement("div",{className:"root-container"},r.a.createElement("p",{className:"heading"},r.a.createElement("div",{class:"clip-text clip-text_one"},"Image Gallery")),r.a.createElement("div",{className:"input-box"},r.a.createElement("input",{onChange:n.onaddressChange,value:n.state.currentAddress,type:"text",className:"enter",placeholder:"Enter Image Url"}),r.a.createElement("button",{onClick:function(){return n.openModal2()},className:"add-btn"},"Add"),r.a.createElement("button",{onClick:function(){return n.openModal()},className:"add-btn-2"},"Create New Folder"),r.a.createElement(f.a,{visible:n.state.visible2,width:"400",height:"330",effect:"fadeInLeft",onClickAway:function(){return n.closeModal2()},className:"Modal2"},r.a.createElement("div",{className:"add-btn-div"},r.a.createElement("h3",null,"Add to..."),r.a.createElement("div",{className:"content"},r.a.createElement("ul",{id:"list"},Object.keys(n.state.Folders).map((function(e){return r.a.createElement("li",{className:"item",id:e,onClick:n.FolderSelect},r.a.createElement("i",{class:"fa fa-folder fa-2x"}),r.a.createElement("p",null,e))})))))),r.a.createElement(f.a,{visible:n.state.visible,width:"400",height:"150",effect:"fadeInDown",onClickAway:function(){return n.closeModal()},className:"Modal"},r.a.createElement("div",{className:"create"},r.a.createElement("input",{id:"input-folder",type:"text",placeholder:"Enter Folder Name",className:"enter2"}),r.a.createElement("i",{onClick:n.onaddFolder,className:"fa fa-folder-open fa-2x","aria-hidden":"true"})))),r.a.createElement("div",{className:"cards"},Object.keys(n.state.Folders).map((function(e){return r.a.createElement(g,{delete:n.ondelete,Images:n.state.Folders[e],name:e,When:n.FolderDelete})}))))},n.rememberMe=JSON.parse(localStorage.getItem("Folder")),n.rememberMe?n.state={currentAddress:"",visible:!1,visible2:!1,Folders:n.rememberMe}:n.state={currentAddress:"",visible:!1,visible2:!1,Folders:{}},n}return Object(i.a)(a,[{key:"openModal",value:function(){this.setState({visible:!0})}},{key:"closeModal",value:function(){this.setState({visible:!1})}},{key:"openModal2",value:function(){var e=this;if(this.state.currentAddress){var t=0;fetch(this.state.currentAddress,{method:"HEAD"}).then((function(t){if(t.ok){if(0===Object.keys(e.state.Folders).length)return void e.openModal();e.setState({visible2:!0})}})).catch((function(a){if(t=1,console.log("dverg"),e.setState({currentAddress:" "}),1==t)return console.log("came"),void alert("Url Does not Exist..".concat(String.fromCodePoint(128549)))})),0!==Object.keys(this.state.Folders).length?this.setState({visible2:!0}):this.setState({visible:!0})}else alert("Please Enter Url ".concat(String.fromCodePoint(128554)))}},{key:"closeModal2",value:function(){this.setState({visible2:!1})}}]),a}(r.a.Component);var E=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.37bc8c40.chunk.js.map