(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(12),o=a.n(s),r=a(2),c=a(3),i=a(4),l=a(6),d=a(5),m=(a(17),a(0)),u=function(t){t.toDo,t.done;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{className:"header__text",children:"Todo List"}),Object(m.jsx)("div",{className:"header__logo"})]})},b=(a(19),a(11)),p=a(9),j=(a(20),function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).onDragStart=function(e){var a=document.querySelectorAll(".main__tasks-block-list"),n=document.querySelector(".main__tasks-delete-task-garbage"),s=e.target,o=Object(p.a)(t),c=[].concat(Object(r.a)(a),[n]);function i(t){t.preventDefault()}function l(t){t.preventDefault();var e=t.currentTarget.classList[1],a="important";"main__tasks-block-list-completed"===e?a="completed":"main__tasks-block-list-current"===e&&(a="current"),o.props.onUpdateStatusTask(s.id,a),"main__tasks-delete-task-garbage"===t.target.className&&o.props.onItemDeleted(s.id);var n,r=Object(b.a)(c);try{for(r.s();!(n=r.n()).done;){var d=n.value;d.removeEventListener("dragover",i),d.removeEventListener("drop",l)}}catch(m){r.e(m)}finally{r.f()}}var d,m=Object(b.a)(c);try{for(m.s();!(d=m.n()).done;){var u=d.value;u.addEventListener("dragover",i),u.addEventListener("drop",l)}}catch(j){m.e(j)}finally{m.f()}},t}return Object(i.a)(a,[{key:"render",value:function(){var t,e=this;return t=this.props.importanceTasksData?this.props.importanceTasksData.map((function(t){return Object(m.jsx)("li",{className:"main__tasks-block-list-item",onDragStart:e.onDragStart,draggable:"true",id:t.id,children:t.label},t.id)})):"",Object(m.jsx)("ul",{className:"main__tasks-block-list main__tasks-block-list-".concat(this.props.classList),children:t})}}]),a}(n.Component)),k=(a(21),function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={label:"",isButtionDisable:!0},t.onLabelChange=function(e){t.setState((function(t){return e.target.value.length>0?{label:e.target.value,isButtionDisable:!1}:{label:e.target.value,isButtionDisable:!0}}))},t.onFormSubmit=function(e){e.preventDefault();var a="important";"current-task-btn"===e.target.lastChild.id&&(a="current"),t.props.onItemAdded(t.state.label,a),t.setState({label:"",isButtionDisable:!0})},t}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"main__tasks-add-task",children:Object(m.jsxs)("form",{className:"main__tasks-add-task-form",onSubmit:this.onFormSubmit,children:[Object(m.jsx)("input",{type:"text",className:"main__tasks-add-task-form-input",onChange:this.onLabelChange,placeholder:"Enter your task",value:this.state.label}),Object(m.jsx)("button",{className:"main__tasks-add-task-form-btn",id:this.props.idButon,disabled:this.state.isButtionDisable,children:"Add Item"})]})})}}]),a}(n.Component)),f=(a(22),a.p+"static/media/garbage-smile.7db7bfd5.png"),h=a.p+"static/media/garbage-nosmile.08b628a4.png",_=function(t){var e=!1,a={timerOpenSmileId:null};return function t(){var n=document.getElementsByClassName("main__tasks-delete-task-garbage");a.timerOpenSmileId=requestAnimationFrame(t),e&&(new Date).getSeconds()%2===0&&n[0]?(n[0].style.backgroundImage="url(".concat(h,")"),e=!1):!e&&(new Date).getSeconds()%2!==0&&n[0]&&(n[0].style.backgroundImage="url(".concat(f,")"),e=!0)}(),Object(m.jsx)("div",{className:"main__tasks-delete-task",children:Object(m.jsx)("div",{className:"main__tasks-delete-task-garbage"})})},O=function(t){var e=t.todoData.filter((function(t){return"important"===t.importance})),a=t.todoData.filter((function(t){return"current"===t.importance})),n=t.todoData.filter((function(t){return"completed"===t.importance}));return Object(m.jsxs)("main",{className:"main",children:[Object(m.jsxs)("section",{className:"main__tasks main__tasks-important",children:[Object(m.jsx)("h2",{className:"main__tasks-important-text",children:"Important tasks"}),Object(m.jsx)(k,{onItemAdded:t.onItemAdded,idButon:"important-task-btn"}),Object(m.jsx)(j,{classList:"important",importanceTasksData:e,onItemDeleted:t.onItemDeleted,onUpdateStatusTask:t.onUpdateStatusTask})]}),Object(m.jsxs)("section",{className:"main__tasks main__tasks-current",children:[Object(m.jsx)("h2",{className:"main__tasks-important-text",children:"Current tasks"}),Object(m.jsx)(k,{onItemAdded:t.onItemAdded,idButon:"current-task-btn"}),Object(m.jsx)(j,{classList:"current",importanceTasksData:a,onItemDeleted:t.onItemDeleted,onUpdateStatusTask:t.onUpdateStatusTask})]}),Object(m.jsxs)("section",{className:"main__tasks main__tasks-completed",children:[Object(m.jsx)("h2",{className:"main__tasks-important-text",children:"Completed tasks"}),Object(m.jsx)(_,{}),Object(m.jsx)(j,{classList:"completed",importanceTasksData:n,onItemDeleted:t.onItemDeleted,onUpdateStatusTask:t.onUpdateStatusTask})]})]})},g=(a(23),function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("h4",{className:"footer__text",children:"MINSK, 2021 \xa9"})})}),v=(a(24),function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).maxId=100,t.state={todoData:[{label:"Drink Coffee",importance:"current",id:1},{label:"Go to work",importance:"important",id:2},{label:"Have a lunch",importance:"current",id:3},{label:"Get out of bed",importance:"completed",id:4}]},t.addItem=function(e,a){t.setState((function(n){return{todoData:[].concat(Object(r.a)(n.todoData),[{label:e,importance:a,id:t.maxId++}])}}))},t.updateStatusTask=function(e,a){t.setState((function(t){console.log(t.todoData),console.log(a);var n=t.todoData.findIndex((function(t){return t.id===Number(e)})),s=Object(r.a)(t.todoData);return s[n].importance=a,console.log(s),{todoData:s}}))},t.deleteItem=function(e){t.setState((function(t){console.log(t.todoData),console.log(e);var a=t.todoData.findIndex((function(t){return t.id===Number(e)}));console.log(a);var n=[].concat(Object(r.a)(t.todoData.slice(0,a)),Object(r.a)(t.todoData.slice(a+1)));return console.log(n),{todoData:n}}))},t}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"todo-app",children:[Object(m.jsx)(u,{}),Object(m.jsx)(O,{todoData:this.state.todoData,onItemAdded:this.addItem,onItemDeleted:this.deleteItem,onUpdateStatusTask:this.updateStatusTask}),Object(m.jsx)(g,{})]})}}]),a}(n.Component));o.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.78e2f3f9.chunk.js.map