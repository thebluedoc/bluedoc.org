(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(161),i=a(164),l=a(152);t.default=Object(l.c)(function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))})},148:function(e,t,a){var n=[].concat(a(170),a(171));e.exports={localeData:n,languages:[{value:"en",text:"English"},{value:"zh",text:"简体中文"}]}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(151);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},152:function(e,t,a){"use strict";a(33);var n=a(73),r=a.n(n),o=a(0),i=a.n(o),l=a(4),c=a.n(l),s=a(150),u=function(e,t){var a=e.to,n=e.children,o=r()(e,["to","children"]),l=t.language,c=l.locale?"/"+l.locale+a:""+a;return i.a.createElement(s.a,Object.assign({to:c},o),n)};u.propTypes={to:c.a.string.isRequired,children:c.a.node.isRequired},u.contextTypes={language:c.a.object};var d=u,m=a(7),p=a.n(m),f=a(149),h=a(148);a(75),a(54),a(172);var g=function e(t,a){return void 0===a&&(a=""),Object.keys(t).reduce(function(n,r){var o=t[r],i=a?a+"."+r:r;return"string"==typeof o?n[i]=o:Object.assign(n,e(o,i)),n},{})};Object(f.c)(h.localeData);var v=function(e){var t=function(t){function n(e){var a;a=t.call(this)||this;var n=e.pageContext,r=n.locale,o=n.languages,i=n.originalPath;return a.state={language:{locale:r,languages:o,originalPath:i}},a}p()(n,t);var r=n.prototype;return r.getChildContext=function(){return{language:this.state.language}},r.render=function(){var t=this.state.language.locale||"en",n=a(156)("./"+t+".js");return i.a.createElement(f.b,{locale:t,messages:g(n)},i.a.createElement(e,this.props))},n}(o.Component);return t.childContextTypes={language:c.a.object},t};a.d(t,"a",function(){return d}),a.d(t,"c",function(){return v}),a.d(t,"b",function(){return h.languages})},153:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){switch(e){case"zh":return"-cn";default:return""}}},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){var n={"./en.js":157,"./index.js":148,"./zh.js":158};function r(e){var t=o(e);return a(t)}function o(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=156},157:function(e,t){e.exports={Header:{Enterprise:"Enterprise",Pricing:"Pricing",About:"About",Help:"Help",LogIn:"Log In",SignUp:"Sign Up",Feedback:"Feedback"},Footer:{Help:"Help",About:"About BlueDoc",Feedback:"Feedback"},Home:{Section1:{Title:"BlueDoc, Your One-Stop File \nManagement Platform",SubTitle:"BlueDoc is an enterprise file management platform that allows sharing, creating and editing your files with your co-workers in real time. ",Btn:"Get Start"},Section2:{Title:"BlueDoc is designed as a business solution. ",SubTitle:"With comprehensive functions and intuitive interface, BlueDoc helps you achieve the best working results. ",Lists:[{Title:"Safe Archives",Des:"BlueDoc ensures a secure archive of your files. You can choose to upload your files to either the cloud or your company's intranet. "},{Title:"Smart Organization",Des:"BlueDoc organizes your files according to projects or teams. "},{Title:"Standardized File Directory",Des:"BlueDoc has a standardized directory for your files. You can find important information faster. "}]},Section3:{Lists:[{Title:"Handy File Editing Mode",Des:"BlueDoc adopts an intuitive interface, allowing you to edit and create files with ease. "},{Title:"Markdown Style Enabled",Des:"BlueDoc supports Markdown shortcuts. People who are familiar with Markdown will pick up BlueDoc editing easily."},{Title:"Complete Document History",Des:"BlueDoc keeps a complete history of revisions, allowing you to recover or cancel your amendments at a later time. "}]},Section4:{Title:"Well-designed layout.",SubTitle:"Different from other documenting tools, BlueDoc is designed for online editing and reading, hence better compatible with the web browser. "},Section5:{Lists:[{Title:"Support Markdown Import",Des:"Markdown import is available, allowing you to import your existing contents quickly in one go."},{Title:"Support PDF/Markdown Export",Des:"BlueDoc allows you to export your contents in PDF or Markdown format."}]},Section6:{Title:"More functions available for exploration."},Section7:{Title:"Try BlueDoc Now",SubTitle:"Take your work under control. Register now to start your free trial. Support multiple devices.",Btn:"Get Start"}},Pricing:{Title:"BlueDoc Professional",TitleDes:"Start using BlueDoc now to constrcut your own enterprise document platform",Des:"Before purchasing our product, you can try our online version first. The online version has all pro features. ",Link:"Online Trial",Features:"Features",Service:"Service",Basic:{Title:"BASIC",Price:"Free",PriceDes:"",Button:"Get Start",Features:["No upper limit on number of users","Create unlimited number of groups and repositories","Allow multiple users to manage and maintain the group and the repository","What You See is What You Get document editors","Customized catalog editor","Support document history and recovery","Allow upload and insert of pictures, file and video clips ","Public and private mode for personal notes available","Document sharing","Zip or Git import in Markdwon format","Super admin management back-end","Support deployment of BlueDoc server within the enterprise"],Service:["Provide technical support using GitHub Issue"]},Pro:{Title:"PRO",Price:"Comming Soon",PriceDes:"",Button:"Apply for trial",Features:["Include all features in Basic version","Export documents, notes and the whole repository in PDF format","Export repository in Zip file (similar to Markdown file exported in the GitBook sturcutre)","Soft delete recovery","View history of documents and notes","Support deployment of BlueDoc server within the enterprise"],Service:["Support feedbacks within 2 working days, contact via email or tickets"]}}}},158:function(e,t){e.exports={Header:{Enterprise:"企业",Pricing:"定价",About:"关于",Help:"帮助",LogIn:"登录",SignUp:"注册",Feedback:"反馈"},Footer:{Help:"帮助",About:"关于 BlueDoc",Feedback:"反馈"},Home:{Section1:{Title:"优雅高效\n轻松编写、分享、管理文档",SubTitle:"BlueDoc 是一个用于解决企业内分散在各处的文档，通过统一平台的方式，将企业所有的文档汇聚在一起，形成一个便于交流、分享、协作的文档平台。",Btn:"立即开始"},Section2:{Title:"为企业私有化部署而设计的文档管理工具",SubTitle:"凭借强大丰富的功能、直观界面，BlueDoc 可让你从最初的想法到最终文档，创造最佳工作成果",Lists:[{Title:"私有化部署文档",Des:"最安全的方式来为您和您的团队创建、编辑和协作文档，你可以自由选择在云平台部署或在企业内部部署"},{Title:"团队到知识库的组织方式",Des:"我们通过组建不同项目组（团队），划分具体项目（知识库）的方式来组织文档"},{Title:"规范化的文档目录组织方式",Des:"我们通过目录编辑器让文档组织、结构变得更加的规范、清晰"}]},Section3:{Lists:[{Title:"简单快捷的文档编辑模式",Des:"简洁却功能丰富的编辑界面，让你沉浸式完成编写文档"},{Title:"Markdown 风格的键盘快捷键",Des:"我们支持类似 Markdown 风格的快捷编辑方式，让熟悉 Markdown 的人能快速入手"},{Title:"完整的文档历史记录",Des:"在你每次发布文档以后，BlueDoc 将会为文档创建历史版本，便于某天可以用来恢复、撤销编辑"}]},Section4:{Title:"更精致易用的文档编辑、阅读排版",SubTitle:"不同于各类文档工具，BlueDoc 是为在线编辑、阅读而设计，我们有更符合于浏览器阅读的排版"},Section5:{Lists:[{Title:"Markdown 导入支持",Des:"支持 Markdown 文件打包导入，让已有内容快速迁移进去"},{Title:"PDF / Markdown 导出",Des:"当你需要对外传播的时候，PDF 或 Markdown 打包导出能给你带来很大的帮助"}]},Section6:{Title:"更多功能等待你探索..."},Section7:{Title:"立即开始",SubTitle:"只需几分钟即可掌控您的未来工作。现在注册开始，他是免费的，适用于许多设备",Btn:"开始"}},Pricing:{Title:"BlueDoc 专业版",TitleDes:"开始使用 BlueDoc 构建你企业的私有化文档平台",Des:"在您决定购买之前，可以先体验涵盖了所有专业版功能的BlueDoc在线试用版",Link:"在线试用版",Features:"功能支持",Service:"服务",Basic:{Title:"基础版",Price:"免费",PriceDes:"",Button:"立即开始",Features:["最大用户数量不限","无限的团队、知识库创建","多人参与维护团队、知识库","所见即所得文档编辑器","自定义目录编辑器","文档历史、恢复支持","图片、文件、视频上传，文档插入支持","个人笔记，支持公开、私密","文档分享","基于 Markdown 格式的 Zip 或 Git 导入","超级管理员后台","支持私有化单机部署"],Service:["通过 GitHub Issue 的方式支持"]},Pro:{Title:"专业版",Price:"即将到来",PriceDes:"",Button:"申请试用",Features:["包含 Basic 的所有功能","PDF 导出文档、笔记以及整个知识库","Zip 导出知识库（以类似 GitBook 的结构导出 Markdown 文档）","账号注册 Email 后缀限制，可以限制只允许以某些域名结尾的 Email可以注册（配合 Email 验证流程，可以限制使用）","软删除恢复功能","文档、笔记的阅读记录查看","支持私有化单机部署方案"],Service:["2 个工作日内支持反馈，邮件、工单联系"]}}}},161:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(149),c=(a(173),a(174),a(175),a(166)),s=a(163);e.Intl=a(180);var u=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement("main",null,t),r.a.createElement(s.a,null))};u.propTypes={children:i.a.node.isRequired},t.a=Object(l.d)(u)}).call(this,a(74))},162:function(e,t,a){e.exports=a.p+"static/logo-a438a644a2572aa6352b6a1cde6fc16a.png"},163:function(e,t,a){"use strict";a(160);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(4),c=a.n(l),s=a(153),u=a(149),d=a(179),m=a.n(d),p=function(e){function t(t,a){var n;return(n=e.call(this,t)||this).suffix=Object(s.a)(a.language.locale),n}return r()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:m.a.wrap},i.a.createElement("div",{className:"wrap-container "+m.a.footer},i.a.createElement("div",{className:m.a.links},i.a.createElement("a",{className:m.a.link,href:"https://github.com/thebluedoc/bluedoc-feedback/issues/new",target:"_blank"},i.a.createElement(u.a,{id:"Footer.Feedback"})),i.a.createElement("a",{className:m.a.link,href:"https://bluedoc.io/bluedoc/help"+this.suffix,target:"_blank"},i.a.createElement(u.a,{id:"Footer.Help"})),i.a.createElement("a",{className:m.a.link,href:"https://bluedoc.io/bluedoc/help"+this.suffix+"/about",target:"_blank"},i.a.createElement(u.a,{id:"Footer.About"})),i.a.createElement("a",{className:m.a.link,href:"https://github.com/thebluedoc/bluedoc",target:"_blank"},"GitHub")),i.a.createElement("span",{className:m.a.copyright},"© 2019 Bluedoc. All rights reserved.")))},t}(o.PureComponent);p.contextTypes={language:c.a.object},t.a=p},164:function(e,t,a){"use strict";var n=a(165),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(182),s=a.n(c),u=a(150);function d(e){var t=e.description,a=e.lang,r=(e.meta,e.keywords,e.title);return o.a.createElement(u.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{title:r,titleTemplate:"%s | "+e.site.siteMetadata.title},o.a.createElement("html",{lang:a}),o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"}),o.a.createElement("meta",{name:"description",content:n}))},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},165:function(e){e.exports={data:{site:{siteMetadata:{title:"BlueDoc",description:"",author:"@5th"}}}}},166:function(e,t,a){"use strict";a(159),a(160);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(4),c=a.n(l),s=a(149),u=a(154),d=a.n(u),m=a(153),p=a(152),f=(a(33),a(73)),h=a.n(f),g=function(e){var t=e.name,a=e.className,n=void 0===a?"":a,r=h()(e,["name","className"]);return i.a.createElement("svg",Object.assign({className:"icon "+n},r),i.a.createElement("use",{xlinkHref:"#icon-"+t}))},v=(a(76),a(176)),b=a.n(v),k=function(e){function t(t){var a;(a=e.call(this,t)||this).handleChange=function(e){var t=a.props.onChange;a.state.value!==e&&(t?t(e):a.setState({value:e,open:!1}))},a.handleToggleOpen=function(){return a.setState({open:!a.state.open})};var n=t.value,r=t.options;return a.state={open:!1,value:n||r[0].value},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.options,n=void 0===a?[]:a,r=t.desLabel,o=this.state.open,l=n.find(function(t){return t.value===e.state.value}).text;return i.a.createElement("div",{className:b.a.wrap},i.a.createElement("div",{className:b.a.label,onClick:this.handleToggleOpen},l,i.a.createElement(g,{className:b.a.arrow+" "+(o?b.a.open:""),name:"down"})),i.a.createElement("ul",{className:b.a.optionsBox+" "+(o?"":b.a.hidden)},r&&i.a.createElement("label",{className:b.a.des},r),n.map(function(t){var a=t.value,n=t.text;return i.a.createElement("li",{className:""+b.a.item,key:a,onClick:function(){return e.handleChange(a)}},a===e.state.value&&i.a.createElement(g,{className:b.a.selected,name:"select"}),n)})))},t}(i.a.PureComponent),E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:""},t.handleChange=function(e){var a=t.context.language.originalPath;t.setState({value:e},function(){localStorage.setItem("language",e),window.location.href="/"+e+a})},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.context.language;this.setState({value:e.locale||e.detected})},a.render=function(){var e=this.context.language.languages,t=this.state.value;return t?i.a.createElement(k,{onChange:this.handleChange,options:e,value:t,desLabel:"Language"}):null},t}(o.PureComponent);E.contextTypes={language:c.a.object};var w=E,y=a(177),D=a.n(y),T=a(162),S=a.n(T),B=a(34),N=a.n(B),x=a(178),P=a.n(x),F=d.a.bind(P.a),M="undefined"!=typeof document?document.body:null,C=function(e){function t(t){var a;return(a=e.call(this,t)||this).ToggleShow=function(){console.log("toggle"),a.props.ToggleShow()},a.el="undefined"!=typeof document?document.createElement("div"):null,a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){M.appendChild(this.el)},a.componentWillUnMount=function(){M.removeChild(this.el)},a.render=function(){return this.el?N.a.createPortal(i.a.createElement("div",{className:F("wrap")},this.props.children),this.el):null},t}(i.a.Component),H=[{name:"Pricing",link:"/pricing/"}],j=d.a.bind(D.a),O=function(e){function t(t,a){var n;return(n=e.call(this,t)||this).ToggleMenu=function(){n.setState({showMenu:!n.state.showMenu})},n.suffix=Object(m.a)(a.language.locale),n.state={showMenu:!1},n}return r()(t,e),t.prototype.render=function(){var e=this.state.showMenu;return i.a.createElement("header",{className:j("wrap")},i.a.createElement("div",{className:j("wrap-container","header")},i.a.createElement("div",{className:j("menu")},i.a.createElement(g,{name:e?"cancel":"menu",onClick:this.ToggleMenu}),i.a.createElement(C,{show:e,ToggleShow:this.ToggleMenu},i.a.createElement("div",{className:j("content",{show:e})},H.map(function(e){var t=e.link,a=e.name;return i.a.createElement(p.a,{className:j("link"),key:t,to:t,activeClassName:"active"},i.a.createElement(s.a,{id:"Header."+a}))}),i.a.createElement("a",{className:j("link"),href:"https://bluedoc.io/bluedoc/help"+this.suffix,target:"_blank"},i.a.createElement(s.a,{id:"Header.Help"})),i.a.createElement("a",{className:j("link"),href:"https://github.com/thebluedoc/bluedoc-feedback/issues/new",target:"_blank"},i.a.createElement(s.a,{id:"Header.Feedback"})),i.a.createElement("a",{className:j("link"),href:"https://bluedoc.io/bluedoc/help"+this.suffix+"/about",target:"_blank"},i.a.createElement(s.a,{id:"Header.About"}))))),i.a.createElement(p.a,{to:"/",className:j("logo")},i.a.createElement("img",{src:S.a,alt:"logo"}),i.a.createElement("span",{style:{color:"#165eff"}},"Blue"),i.a.createElement("span",{style:{color:"#8b96ad"}},"Doc")),i.a.createElement("nav",{className:j("nav")},H.map(function(e){var t=e.link,a=e.name;return i.a.createElement(p.a,{className:j("link"),key:t,to:t,activeClassName:"active"},i.a.createElement(s.a,{id:"Header."+a}))}),i.a.createElement("a",{className:j("link"),href:"https://bluedoc.io/bluedoc/help"+this.suffix,target:"_blank"},i.a.createElement(s.a,{id:"Header.Help"})),i.a.createElement("a",{className:j("link"),href:"https://github.com/thebluedoc/bluedoc-feedback/issues/new",target:"_blank"},i.a.createElement(s.a,{id:"Header.Feedback"})),i.a.createElement("a",{className:j("link"),href:"https://bluedoc.io/bluedoc/help"+this.suffix+"/about",target:"_blank"},i.a.createElement(s.a,{id:"Header.About"}))),i.a.createElement("div",{className:j("cell")}),i.a.createElement("div",{className:j("language")},i.a.createElement(w,null))))},t}(o.PureComponent);O.contextTypes={language:c.a.object};t.a=O},167:function(e,t){},168:function(e,t){},169:function(e,t){},181:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-404-js-2473ec0c2229295ac4f7.js.map