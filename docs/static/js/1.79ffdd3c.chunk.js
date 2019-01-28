webpackJsonp([1],{1176:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{users:e.Users.users,profile:e.Users.profile}}function o(e){return{getAllUsers:function(t){e({type:h.t,value:t})},dispatchProfile:function(t){e({type:h.w,value:t})},dispatchApproval:function(t){e({type:h.h,value:t})}}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n.n(c),u=n(54),p=n(14),m=n(1203),f=n(1204),d=n(1205),A=n(1206),E=n(1211),h=(n.n(E),n(39)),y=n(53),b=n(1213),v=n(1214),C=n(1215),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=function(e){function t(){var e,n,l,s;a(this,t);for(var o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return n=l=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),l.state={visible:!1,token:Object(y.b)()},l.success=function(){p.m.success({title:"Successful",content:"User has been approved :)."})},l.callback=function(e){200===e.status?l.props.getAllUsers(e.data):console.log(e.response)},l.profileCallback=function(e){200===e.status?(l.props.dispatchProfile(e.data),l.setState({visible:!0})):console.log(e.response)},l.openDrawer=function(e){Object(v.a)(l.profileCallback,e,l.state.token)},l.approvalCallback=function(e){200===e.status?(l.props.dispatchApproval(e.data),l.success()):console.log(e.response)},l.approveUser=function(e){Object(C.a)(l.approvalCallback,e,l.state.token)},l.onClose=function(){l.setState({visible:!1})},s=n,r(l,s)}return l(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.state.token;Object(b.a)(this.callback,e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"users-container"},i.a.createElement(p.h,{width:640,placement:"right",maskClosable:!1,onClose:this.onClose,visible:this.state.visible},i.a.createElement(A.a,{profile:this.props.profile})),null!==this.props.users&&void 0!==this.props.users&&i.a.createElement("div",{className:"table-list"},i.a.createElement(f.a,{users:this.props.users,openDrawer:this.openDrawer,classValue:"table"}),i.a.createElement(d.a,{users:this.props.users,openDrawer:this.openDrawer,approveUser:this.approveUser,classValue:"table"}),i.a.createElement(m.a,{users:this.props.users,openDrawer:this.openDrawer,classValue:"table"})))}}]),t}(c.Component);t.default=Object(u.b)(s,o)(w)},1203:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(14),s=function(e){var t=[{title:"Id",dataIndex:"_id",key:"_id",render:function(e){return r.a.createElement("a",{href:"javascript:;"},e)}},{title:"Email",dataIndex:"email",key:"email"},{title:"Group",dataIndex:"group",key:"group"},{title:"Action",key:"action",render:function(t,n){return r.a.createElement("span",null,r.a.createElement("a",{onClick:function(){return e.openDrawer(n._id)}},"View"))}}],n=e.users.filter(function(e){return"approved"===e.approval});return 0!==n.length?r.a.createElement(l.p,{columns:t,dataSource:n,rowKey:function(e){return e._id},title:function(){return r.a.createElement("h3",null,r.a.createElement("b",null,"Approved Users"))},bordered:!0,pagination:!1,className:e.classValue}):null};t.a=s},1204:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(14),s=function(e){var t=[{title:"Id",dataIndex:"_id",key:"_id",render:function(e){return r.a.createElement("a",{href:"javascript:;"},e)}},{title:"Email",dataIndex:"email",key:"email"},{title:"Group",dataIndex:"group",key:"group"},{title:"Action",key:"action",render:function(t,n){return r.a.createElement("span",null,r.a.createElement("a",{onClick:function(){return e.openDrawer(n._id)}},"View"))}}],n=e.users.filter(function(e){return null===e.approval});return 0!==n.length?r.a.createElement(l.p,{columns:t,dataSource:n,rowKey:function(e){return e._id},title:function(){return r.a.createElement("h3",null,r.a.createElement("b",null,"New Users"))},bordered:!0,pagination:!1,className:e.classValue}):null};t.a=s},1205:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(14),s=function(e){var t=[{title:"Id",dataIndex:"_id",key:"_id",render:function(e){return r.a.createElement("a",{href:"javascript:;"},e)}},{title:"Email",dataIndex:"email",key:"email"},{title:"Group",dataIndex:"group",key:"group"},{title:"Action",key:"action",render:function(t,n){return r.a.createElement("span",null,r.a.createElement("a",{onClick:function(){return e.approveUser(n._id)}},"Approve"),r.a.createElement(l.g,{type:"vertical"}),r.a.createElement("a",{onClick:function(){return e.openDrawer(n._id)}},"View"))}}],n=e.users.filter(function(e){return"pending"===e.approval});return 0===n.length?null:r.a.createElement(l.p,{columns:t,dataSource:n,rowKey:function(e){return e._id},title:function(){return r.a.createElement("h3",null,r.a.createElement("b",null,"Pending Users"))},bordered:!0,pagination:!1,className:e.classValue})};t.a=s},1206:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),o=n.n(s),c=n(14),i=n(80),u=n(93),p=n(1207),m=n(1208),f=n(1209),d=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),A=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),d(t,[{key:"render",value:function(){if(null!==this.props.profile.basic&&void 0!==this.props.profile.basic){var e=this.props.profile;return o.a.createElement("div",null,o.a.createElement(i.a,{heading:o.a.createElement(c.b,{size:64,icon:"user"})}),o.a.createElement(u.a,null),o.a.createElement("section",null,o.a.createElement("h3",null,o.a.createElement("b",null,"Basic Details")),o.a.createElement("div",{className:"details"},o.a.createElement("div",null,o.a.createElement("span",{className:"types"},"Name:"),o.a.createElement("span",null,e.basic.name)),o.a.createElement("div",{className:"profile-row"},o.a.createElement("div",{className:"profile-column"},o.a.createElement("span",{className:"types"},"Email:"),o.a.createElement("span",null,e.basic.email)),o.a.createElement("div",{className:"profile-column"},o.a.createElement("span",{className:"types"},"Phone:"),o.a.createElement("span",null,e.basic.phone))))),o.a.createElement(u.a,null),o.a.createElement("section",null,o.a.createElement("h3",null,o.a.createElement("b",null,"Personal Details")),o.a.createElement(p.a,{personal:e.uProfile})),o.a.createElement(u.a,null),o.a.createElement("section",null,o.a.createElement("h3",null,o.a.createElement("b",null,"Company Details")),o.a.createElement(m.a,{profile:e})),o.a.createElement(u.a,null),o.a.createElement("section",null,o.a.createElement("h3",null,o.a.createElement("b",null,"Documents"))))}return null}}]),t}(s.Component);t.a=A},1207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(80),s=function(e){return e.personal?r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"profile-row"},r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"DOB:"),r.a.createElement("span",null,e.personal.dob)),r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"Nationality:"),r.a.createElement("span",null,e.personal.nationality)),r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"PAN Number:"),r.a.createElement("span",null,e.personal.panNumber?e.personal.panNumber:null)),r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"Present Occupatoin:"),r.a.createElement("span",null,e.personal.presentOccupatoin))),r.a.createElement("div",{className:"address-type"},"Address:-"),r.a.createElement("div",{className:"profile-row"},r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"Street:"),r.a.createElement("span",null,e.personal.address.street)),r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"City:"),r.a.createElement("span",null,e.personal.address.city)),r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"ZIP:"),r.a.createElement("span",null,e.personal.address.zip)),r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"State:"),r.a.createElement("span",null,e.personal.address.state)))):r.a.createElement(l.a,{heading:r.a.createElement("b",null,"Not Filled Yet")})};t.a=s},1208:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=function(e){return r.a.createElement("div",{className:"profile-row"},r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"Company Name:"),r.a.createElement("span",null,e.profile.company.name)),r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"Location:"),r.a.createElement("span",null,e.profile.company.location)),r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"Type of Company:"),r.a.createElement("span",null,e.profile.uProfile?e.profile.uProfile.typeOfCompany:null)),r.a.createElement("div",{className:"profile-column"},r.a.createElement("span",{className:"types"},"Annual Income:"),r.a.createElement("span",null,e.profile.uProfile?e.profile.uProfile.annualIncome:null)))};t.a=l},1209:function(e,t,n){var a=n(1210);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;n(1168)(a,r);a.locals&&(e.exports=a.locals)},1210:function(e,t,n){t=e.exports=n(1167)(!0),t.push([e.i,".details{padding:.2rem;-ms-flex:100% 1;flex:100% 1}.profile-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.profile-column{-ms-flex:50% 1;flex:50% 1;padding:.2rem}.address-type{padding:.3rem;font-weight:700;color:#000}.types{font-weight:700;color:#383535}","",{version:3,sources:["/media/anand/Ethereal_Data/ethereal-ims-frontend/src/admin/pages/users/user-list/profile/profile.css"],names:[],mappings:"AAAA,SACI,cAAgB,AAChB,gBAAiB,AACb,WAAa,CACpB,AAED,aACI,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,mBAAoB,AAChB,cAAgB,CACvB,AAED,gBACI,eAAgB,AACZ,WAAY,AAChB,aAAe,CAClB,AAED,cACI,cAAgB,AAChB,gBAAkB,AAClB,UAAc,CACjB,AAED,OACI,gBAAkB,AAClB,aAAc,CACjB",file:"profile.css",sourcesContent:[".details {\n    padding: 0.2rem;\n    -ms-flex: 100% 1;\n        flex: 100% 1;\n}\n\n.profile-row {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.profile-column {\n    -ms-flex: 50% 1;\n        flex: 50% 1;\n    padding: 0.2rem\n}\n\n.address-type {\n    padding: 0.3rem;\n    font-weight: bold;\n    color: #000000\n}\n\n.types {\n    font-weight: bold;\n    color: #383535\n}\n"],sourceRoot:""}])},1211:function(e,t,n){var a=n(1212);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;n(1168)(a,r);a.locals&&(e.exports=a.locals)},1212:function(e,t,n){t=e.exports=n(1167)(!0),t.push([e.i,".users-container{width:100%}.table-list{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.table{margin-bottom:20px;background:#fff}","",{version:3,sources:["/media/anand/Ethereal_Data/ethereal-ims-frontend/src/admin/pages/users/user-list/users.css"],names:[],mappings:"AAAA,iBACE,UAAY,CACb,AAED,YACI,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAuB,CAC9B,AAED,OACI,mBAAoB,AACpB,eAAkB,CACrB",file:"users.css",sourcesContent:[".users-container {\n  width: 100%;\n}\n\n.table-list {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n\n.table {\n    margin-bottom: 20px;\n    background: white;\n}"],sourceRoot:""}])},1213:function(e,t,n){"use strict";var a=n(62),r=function(e,t){a.a.get("/user",{headers:{"x-auth":t}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r},1214:function(e,t,n){"use strict";var a=n(62),r=function(e,t,n){a.a.get("/user/"+t,{headers:{"x-auth":n}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r},1215:function(e,t,n){"use strict";var a=n(62),r=function(e,t,n){a.a.patch("/user/"+t,null,{headers:{"x-auth":n}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r}});
//# sourceMappingURL=1.79ffdd3c.chunk.js.map