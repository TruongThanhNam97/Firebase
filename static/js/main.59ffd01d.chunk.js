(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),s=(a(59),a(3)),i=a(4),o=a(6),u=a(5),m=a(7),d=(a(61),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{className:"display-3"},"React-Redux"),r.a.createElement("p",{className:"lead"},"v\u1edbi c\u01a1 s\u1edf d\u1eef li\u1ec7u Firebase"),r.a.createElement("hr",{className:"my-2"}))}}]),t}(n.Component)),p=a(10),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).isChange=function(e){""!==e.target.value?a.props.search(e.target.value):a.props.search(null)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"btn-group search"},r.a.createElement("input",{onChange:function(t){return e.isChange(t)},type:"text",className:"form-control",name:"search","aria-describedby":"helpId",placeholder:"Nh\u1eadp t\xean c\u1ea7n t\xecm"}))))}}]),t}(n.Component),h=Object(p.b)(function(e,t){return{}},function(e){return{search:function(t){e({type:"search",search:t})}}})(f),b=a(32);b.initializeApp({apiKey:"AIzaSyDpxKm6NaXKkO06z2Lw8KD2uJ0V6mbjluU",authDomain:"pratice-firebase.firebaseapp.com",databaseURL:"https://pratice-firebase.firebaseio.com",projectId:"pratice-firebase",storageBucket:"pratice-firebase.appspot.com",messagingSenderId:"656573298107"});var v=b.database().ref("Account"),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).eventDelete=function(e){a.props.deleteData(e.id),a.props.alertOn("danger","X\xf3a "+e.name+" th\xe0nh c\xf4ng")},a.displayData=function(){return a.props.search?a.state.listData.map(function(e,t){return-1===e.name.toLocaleLowerCase().indexOf(a.props.search.toLocaleLowerCase())||r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.tel),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group"},r.a.createElement("div",{className:"btn btn-warning",onClick:function(){return a.props.selected(e)}},r.a.createElement("div",{className:"fa fa-wrench"}),"S\u1eeda"),r.a.createElement("div",{className:"btn btn-danger",onClick:function(){return a.props.deleteData(e.id)}},r.a.createElement("div",{className:"fa fa-ban"}),"X\xf3a"))))}):a.state.listData?a.state.listData.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.tel),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group"},r.a.createElement("div",{className:"btn btn-warning",onClick:function(){return a.props.selected(e)}},r.a.createElement("div",{className:"fa fa-wrench"}),"S\u1eeda"),r.a.createElement("div",{className:"btn btn-danger",onClick:function(){return a.eventDelete(e)}},r.a.createElement("div",{className:"fa fa-ban"}),"X\xf3a"))))}):void 0},a.state={listData:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;v.on("value",function(t){var a=[];t.forEach(function(e){var t={};t.id=e.key,t.name=e.val().name,t.tel=e.val().tel,a.push(t)}),e.setState({listData:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-9"},r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"T\xean"),r.a.createElement("th",null,"\u0110i\u1ec7n tho\u1ea1i"),r.a.createElement("th",null,"Thao t\xe1c"))),r.a.createElement("tbody",null,this.displayData())))}}]),t}(n.Component),y=Object(p.b)(function(e,t){return{search:e.search}},function(e){return{selected:function(t){e({type:"selected",selected:t})},deleteData:function(t){e({type:"deleteData",id:t})},alertOn:function(t,a){e({type:"alertOn",typeAlert:t,contentAlert:a})}}})(E),O=a(24),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(O.a)({},t,n))},a.eventAdd=function(){if(a.state.name&&a.state.tel){var e={};e.name=a.state.name,e.tel=a.state.tel,a.props.addData(e),a.props.alertOn("success","Th\xeam "+e.name+" th\xe0nh c\xf4ng")}a.setState({id:null,name:null,tel:null})},a.eventEdit=function(){if(a.props.selected){var e={};null===a.state.name&&null===a.state.tel?(e.id=a.props.selected.id,e.name=a.props.selected.name,e.tel=a.props.selected.tel):null!==a.state.name&&null===a.state.tel?(e.id=a.props.selected.id,e.name=a.state.name,e.tel=a.props.selected.tel):null===a.state.name&&null!==a.state.tel?(e.id=a.props.selected.id,e.name=a.props.selected.name,e.tel=a.state.tel):(e.id=a.props.selected.id,e.name=a.state.name,e.tel=a.state.tel),a.props.editData(e),a.props.alertOn("warning","S\u1eeda ph\u1ea7n t\u1eed th\xe0nh c\xf4ng")}a.setState({id:null,name:null,tel:null})},a.displayForm=function(){return a.props.selected?r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{defaultValue:a.props.selected.name,onChange:function(e){return a.isChange(e)},type:"text",className:"form-control",name:"name","aria-describedby":"helpId",placeholder:"Nh\u1eadp t\xean"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{defaultValue:a.props.selected.tel,onChange:function(e){return a.isChange(e)},type:"number",className:"form-control",name:"tel","aria-describedby":"helpId",placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onClick:function(){return a.eventAdd()},type:"reset",value:"Add",className:"btn btn-secondary btn-block"}),r.a.createElement("input",{onClick:function(){return a.eventEdit()},type:"reset",value:"Edit",className:"btn btn-secondary btn-block"}))):r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{defaultValue:"",onChange:function(e){return a.isChange(e)},type:"text",className:"form-control",name:"name","aria-describedby":"helpId",placeholder:"Nh\u1eadp t\xean"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{defaultValue:"",onChange:function(e){return a.isChange(e)},type:"number",className:"form-control",name:"tel","aria-describedby":"helpId",placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onClick:function(){return a.eventAdd()},type:"reset",value:"Add",className:"btn btn-secondary btn-block"}),r.a.createElement("input",{type:"reset",value:"Edit",className:"btn btn-secondary btn-block"})))},a.state={id:null,name:null,tel:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Form th\xf4ng tin"),r.a.createElement("div",{className:"card-body"},this.displayForm())))}}]),t}(n.Component),g=Object(p.b)(function(e,t){return{selected:e.selected}},function(e){return{addData:function(t){e({type:"addData",item:t})},editData:function(t){e({type:"editData",item:t})},alertOn:function(t,a){e({type:"alertOn",typeAlert:t,contentAlert:a})}}})(N),j=a(34),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).display=function(){if(a.props.statusAlert)return r.a.createElement(j.a,{type:a.props.typeAlert,onDismiss:function(){return a.props.alertOff()},timeout:1e3},a.props.contentAlert)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j.b,null,this.display())}}]),t}(n.Component),k=Object(p.b)(function(e,t){return{statusAlert:e.statusAlert,typeAlert:e.typeAlert,contentAlert:e.contentAlert}},function(e){return{alertOff:function(){e({type:"alertOff"})}}})(A),C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(d,null),r.a.createElement("div",{className:"searchForm"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h,null),r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null)),r.a.createElement(y,null),r.a.createElement(g,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(12),w=a(30),S={selected:null,search:null,statusAlert:!1,typeAlert:null,contentAlert:null},I=w.createStore(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addData":return v.push(t.item),Object(D.a)({},e,{search:null});case"selected":return Object(D.a)({},e,{selected:t.selected});case"editData":return v.child(t.item.id).update({name:t.item.name,tel:t.item.tel}),Object(D.a)({},e,{selected:null});case"deleteData":return v.child(t.id).remove(),Object(D.a)({},e);case"search":return Object(D.a)({},e,{search:t.search});case"alertOn":return Object(D.a)({},e,{statusAlert:!0,typeAlert:t.typeAlert,contentAlert:t.contentAlert});case"alertOff":return Object(D.a)({},e,{statusAlert:!1});default:return e}});c.a.render(r.a.createElement(p.a,{store:I},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,a){e.exports=a(132)},59:function(e,t,a){},61:function(e,t,a){}},[[54,2,1]]]);
//# sourceMappingURL=main.59ffd01d.chunk.js.map