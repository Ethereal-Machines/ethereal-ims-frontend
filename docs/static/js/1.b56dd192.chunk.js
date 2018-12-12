webpackJsonp([1],{1165:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{companies:e.Company.company}}function l(e){return{getCompany:function(t){e({type:g.d,value:t})}}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),c=n.n(s),u=n(78),p=n(110),m=n(76),f=n(1175),h=n(1177),d=n(77),b=n(142),y=n(1179),g=n(59),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),C=function(e){function t(){var e,n,o,i;a(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={visible:!1,showLoader:!0},o.callback=function(e){200===e.status?(o.props.getCompany(e.data),o.setState({showLoader:!1})):console.log(e.response)},o.openModal=function(e){o.setState({visible:e})},o.cancelClick=function(e){o.setState({visible:!1})},i=n,r(o,i)}return o(t,e),v(t,[{key:"componentDidMount",value:function(){var e=Object(d.b)();e&&Object(y.a)(this.callback,e)}},{key:"render",value:function(){return this.state.showLoader&&!this.props.companies?c.a.createElement(b.a,null):this.props.companies?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"issue-form"},c.a.createElement(p.a,{heading:"Create Company",showModal:this.state.visible,cancelClick:this.cancelClick,footer:null},c.a.createElement(f.a,{cancelClick:this.cancelClick})),c.a.createElement(m.a,{heading:"Create New User"}),c.a.createElement(h.a,{openModal:this.openModal,companies:this.props.companies}))):null}}]),t}(s.Component);t.default=Object(u.b)(i,l)(C)},1175:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{addCompany:function(t){e({type:y.a,value:t})}}}var s=n(0),c=n.n(s),u=n(78),p=n(79),m=n(60),f=n(39),h=n(143),d=n(142),b=n(1176),y=n(59),g=n(77),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),C=function(e){function t(){var e,n,i,l;r(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={name:"",location:"",nameWarn:!1,locationWarn:!1,errorMsg:"",showLoader:!1},i.callback=function(e){200===e.status?(i.reset(),i.props.addCompany(e.data),i.props.cancelClick(!1)):(e.response,i.setState({errorMsg:"Something went wrong. Please try again later &#x2639;",showLoader:!1}))},i.onFormSubmit=function(e){var t=Object(g.b)();e.preventDefault(),i.setState({showLoader:!0,errorMsg:""});var n=i.state,a=n.name,r=n.location;if(i.validate()){i.outlineColor();var o={name:a,location:r};o&&t&&Object(b.a)(i.callback,o,t)}else i.outlineColor(),i.setState({errorMsg:"Please fill all the required field"})},i.onInputChange=function(e){i.setState(a({},e.target.name,e.target.value))},i.reset=function(){i.setState({name:"",location:"",errorMsg:"",showLoader:!1})},i.outlineColor=function(){i.state.name.trim()?i.setState({nameWarn:!1}):i.setState({nameWarn:!0}),i.state.location.trim()?i.setState({locationWarn:!1}):i.setState({locationWarn:!0})},i.validate=function(){var e=i.state,t=e.name,n=e.location;return""!==t.trim()&&""!==n.trim()},l=n,o(i,l)}return i(t,e),v(t,[{key:"render",value:function(){return c.a.createElement(p.a,{onSubmitHandler:this.onFormSubmit},c.a.createElement(m.a,{type:"text",value:this.state.name,name:"name",labelName:"Company Name",placeholder:"Enter Company Name",onInputChange:this.onInputChange,isRequired:!0,classValue:this.state.nameWarn?"inputField-outline":null}),c.a.createElement(m.a,{type:"text",value:this.state.location,name:"location",labelName:"Company Location",placeholder:"Enter Company Location",onInputChange:this.onInputChange,isRequired:!0,classValue:this.state.locationWarn?"inputField-outline":null}),this.state.errorMsg?c.a.createElement(h.a,{errorMsgs:this.state.errorMsg}):null,this.state.showLoader?c.a.createElement(d.a,null,"Creating..."):null,c.a.createElement("div",{className:"issue-form-button"},c.a.createElement(f.a,{isType:"primary",htmlTypes:"submit",isBlock:!0},"Submit")))}}]),t}(s.Component);t.a=Object(u.b)(null,l)(C)},1176:function(e,t,n){"use strict";var a=n(92),r=function(e,t,n){a.a.post("/user/company",t,{headers:{"x-auth":n}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r},1177:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),s=n.n(l),c=n(14),u=n(79),p=n(60),m=n(39),f=n(425),h=n(143),d=n(142),b=n(1178),y=n(77),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=c.n.Option,C=function(e){function t(){var e,n,i,l;r(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={name:"",email:"",companyId:"",group:"",phone:"",companyIdWarn:!1,groupWarn:!1,errorMsg:"",showLoader:!1},i.reset=function(){i.setState({name:"",email:"",companyId:"",group:"",phone:"",errorMsg:"",showLoader:!1})},i.callback=function(e){200===e.status?(i.reset(),console.log(e.data)):e.response?i.setState({errorMsg:e.response.data._message,showLoader:!1}):i.setState({errorMsg:"Something went wrong. Please try again later &#x2639;",showLoader:!1})},i.onFormSubmit=function(e){var t=Object(y.b)();i.setState({showLoader:!0,errorMsg:""}),e.preventDefault();var n=i.state,a=n.name,r=n.email,o=n.companyId,l=n.group,s=n.phone;if(i.validate()){i.outlineColor();var c={name:a,email:r,companyId:o,group:l,phone:s};c&&t&&Object(b.a)(i.callback,c,t)}else i.outlineColor(),i.setState({errorMsg:"Please fill all the required field"})},i.onCompanySelect=function(e){i.setState({companyId:e})},i.onUserRole=function(e){i.setState({group:e})},i.onInputChange=function(e){i.setState(a({},e.target.name,e.target.value))},i.outlineColor=function(){i.state.companyId?i.setState({companyIdWarn:!1}):i.setState({companyIdWarn:!0}),i.state.group?i.setState({groupWarn:!1}):i.setState({groupWarn:!0})},i.validate=function(){var e=i.state,t=e.name,n=e.email,a=e.companyId,r=e.group,o=e.phone;return""!==t&&""!==n&&""!==a&&""!==r&&""!==o},l=n,o(i,l)}return i(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.props.companies;return s.a.createElement(u.a,{onSubmitHandler:this.onFormSubmit},s.a.createElement(f.a,{labelName:"Comapny",placeholder:"Select User Company",optionFilterProp:"children",onSelect:this.onCompanySelect,size:"large",isRequired:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},classValue:this.state.companyIdWarn?"inputField-outline":null},t.map(function(e){return s.a.createElement(v,{value:e._id,key:e._id},e.name)})),s.a.createElement(h.a,{errorMsgs:"If company is not listed above then create company"},s.a.createElement(m.a,{isSize:"small",isType:"danger",onClick:function(){return e.props.openModal(!0)}},"Click")),s.a.createElement(f.a,{labelName:"User Role",placeholder:"Select User Role",optionFilterProp:"children",onSelect:this.onUserRole,size:"large",isRequired:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},classValue:this.state.groupWarn?"inputField-outline":null},s.a.createElement(v,{value:"user"},"User"),s.a.createElement(v,{value:"admin"},"Admin")),s.a.createElement(p.a,{type:"text",value:this.state.name,name:"name",labelName:"Name ",placeholder:"Enter Name",onInputChange:this.onInputChange,isRequired:!0}),s.a.createElement(p.a,{type:"email",value:this.state.email,name:"email",labelName:"Email",placeholder:"Enter Email",onInputChange:this.onInputChange,isRequired:!0}),s.a.createElement(p.a,{type:"number",value:this.state.phone,name:"phone",labelName:"Phone Number",placeholder:"Enter Phone",onInputChange:this.onInputChange,isRequired:!0}),this.state.errorMsg?s.a.createElement(h.a,{errorMsgs:this.state.errorMsg}):null,this.state.showLoader?s.a.createElement(d.a,null,"Creating..."):null,s.a.createElement("div",{className:"issue-form-button"},s.a.createElement(m.a,{isType:"primary",htmlTypes:"submit",isBlock:!0},"Submit")))}}]),t}(l.Component);t.a=C},1178:function(e,t,n){"use strict";var a=n(92),r=function(e,t,n){a.a.post("/user",t,{headers:{"x-auth":n}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r},1179:function(e,t,n){"use strict";var a=n(92),r=function(e,t){a.a.get("/user/company",{headers:{"x-auth":t}}).then(function(t){e(t)}).catch(function(t){return e(t)})};t.a=r}});
//# sourceMappingURL=1.b56dd192.chunk.js.map