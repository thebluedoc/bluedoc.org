(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(164),i=n(161),l=n(149);t.default=Object(l.c)(function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))})},145:function(e,t,n){var a=[].concat(n(158),n(159));e.exports={localeData:a,languages:[{value:"en",text:"English"},{value:"zh",text:"简体中文"}]}},147:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},148:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(32),s=n.n(l);n.d(t,"a",function(){return s.a});n(147);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,n){"use strict";n(33);var a=n(74),r=n.n(a),o=n(0),i=n.n(o),l=n(4),s=n.n(l),c=n(148),u=function(e,t){var n=e.to,a=e.children,o=r()(e,["to","children"]),l=t.language,s=l.locale?"/"+l.locale+n:""+n;return i.a.createElement(c.a,Object.assign({to:s},o),a)};u.propTypes={to:s.a.string.isRequired,children:s.a.node.isRequired},u.contextTypes={language:s.a.object};var d=u,p=n(7),g=n.n(p),f=n(146),m=n(145);n(73),n(54),n(160);var h=function e(t,n){return void 0===n&&(n=""),Object.keys(t).reduce(function(a,r){var o=t[r],i=n?n+"."+r:r;return"string"==typeof o?a[i]=o:Object.assign(a,e(o,i)),a},{})};Object(f.c)(m.localeData);var y=function(e){var t=function(t){function a(e){var n;n=t.call(this)||this;var a=e.pageContext,r=a.locale,o=a.languages,i=a.originalPath;return n.state={language:{locale:r,languages:o,originalPath:i}},n}g()(a,t);var r=a.prototype;return r.getChildContext=function(){return{language:this.state.language}},r.render=function(){var t=this.state.language.locale||"en",a=n(151)("./"+t+".js");return i.a.createElement(f.b,{locale:t,messages:h(a)},i.a.createElement(e,this.props))},a}(o.Component);return t.childContextTypes={language:s.a.object},t};n.d(t,"a",function(){return d}),n.d(t,"c",function(){return y}),n.d(t,"b",function(){return m.languages})},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(55),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,n){var a={"./en.js":152,"./index.js":145,"./zh.js":153};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=151},152:function(e,t){e.exports={Header:{Enterprise:"Enterprise",Pricing:"Pricing",About:"About",Help:"Help",SignIn:"Sign In",SignUp:"Sign Up"},Home:{Section1:{Title:"Elegant and efficient documents\nwithout the effort",SubTitle:"BlueDoc is a modern workspace to reduce busywork\n—so you can focus on the things that matter"},Section2:{Title:"BlueDoc is built for Doc-editor like you",SubTitle:"With powerful features,an intuitive interface and an expansive plugin ecosystem, BlueDoc lets you create your best work\n—from your earliest ideas, through to final Docs",Lists:[{Title:"Run you private docs",Des:"The most secure way to creat, edit and collaborate on documents for you and your team"},{Title:"Rich embeds, integrated and applications",Des:"Run your entire business with 10+ integrated applications. Embed external web content: videos, code snippets and more..."},{Title:"Bring clarity to your team",Des:"With one tool, everyone sees the whole picture"}]},Section3:{Lists:[{Title:"Stay focused, a simpler workflow for docs",Des:"The interface fades away the moment you start typing, leaving you alone with your work"},{Title:"Markdown, keyboard shortcuts",Des:"You can access all of BlueDoc’s features  from your fingertips, so you can stay in flow"},{Title:"WYSIWYG",Des:"A powerful yet beautifully simple editor your team will love"}]},Section4:{Title:"Create powerful pages",SubTitle:"Grab one of our handy templates and make it your own with images, gifts and emojis"},Section5:{Lists:[{Title:"150B+",Des:"Repositories worldwide"},{Title:"18",Des:"Integrated applications"},{Title:"20M+",Des:"Business & organizations worldwide"}]},Section6:{Title:"Extend BlueDoc with..."},Section7:{Title:"Get started today！",SubTitle:"It only takes a few minutes to take control of your work future. Sign up now to start and It’s free and works across"}}}},153:function(e,t){e.exports={Header:{Enterprise:"企业",Pricing:"价格",About:"关于",Help:"帮助",LogIn:"登录",SignUp:"注册"},Home:{Section1:{Title:"优雅高效，轻松编写、分享、管理文档",SubTitle:"BlueDoc 是一个用于解决企业内分散在各处的文档，通过统一平台的方式，将企业所有的文档汇聚在一起，形成一个便于交流、分享、协作的文档平台。"},Section2:{Title:"为企业私有化部署而设计的文档管理工具",SubTitle:"凭借强大丰富的功能、直观界面，BlueDoc 可让你从最初的想法到最终文档，创造最佳工作成果",Lists:[{Title:"私有化部署文档",Des:"最安全的方式来为您和您的团队创建、编辑和协作文档，你可以自由选择在云平台部署或在企业内部部署"},{Title:"团队到知识库的组织方式",Des:"我们通过组建不同项目组（团队），划分具体项目（知识库）的方式来组织文档"},{Title:"规范化的文档目录组织方式",Des:"我们通过目录编辑器让文档组织、结构变得更加的规范、清晰"}]},Section3:{Lists:[{Title:"简单快捷的文档编辑模式",Des:"当您开始输入时，界面逐渐消失，让你沉浸式完成编写文档"},{Title:"Markdown 风格的键盘快捷键",Des:"我们支持类似 Markdown 风格的快捷编辑方式，让熟悉 Markdown 的人能快速入手"},{Title:"完整的文档历史记录",Des:"在你每次发布文档以后，BlueDoc 将会为文档创建历史版本，便于某天可以用来恢复、撤销编辑"}]},Section4:{Title:"更精致易用的文档编辑、阅读排版",SubTitle:"不同于各类文档工具，BlueDoc 是为在线编辑、阅读而设计，我们有更符合于浏览器阅读的排版"},Section5:{Lists:[{Title:"Markdown 导入支持",Des:"支持 Markdown 文件打包导入，让已有内容快速迁移进去"},{Title:"PDF / Markdown 导出",Des:"当你需要对外传播的时候，PDF 或 Markdown 打包导出能给你带来很大的帮助"},{Title:""}]},Section6:{Title:"更多功能等待你探索..."},Section7:{Title:"立即开始",SubTitle:"只需几分钟即可掌控您的未来工作。现在注册开始，他是免费的，适用于许多设备"}}}},155:function(e,t){},156:function(e,t){},157:function(e,t){},161:function(e,t,n){"use strict";var a=n(162),r=n(0),o=n.n(r),i=n(4),l=n.n(i),s=n(171),c=n.n(s),u=n(148);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(u.b,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var p="1025518380"},162:function(e){e.exports={data:{site:{siteMetadata:{title:"BlueDoc",description:"",author:"@5th"}}}}},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(146),s=(n(167),n(168),n(169),n(170),n(149)),c=n(7),u=n.n(c),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={value:""},t.handleChange=function(e){var n=t.context.language.originalPath,a=e.target.value;a!==t.state.value&&t.setState({value:a},function(){localStorage.setItem("language",a),window.location.href="/"+a+n})},t}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.context.language;this.setState({value:e.locale||e.detected})},n.render=function(){var e=this.context.language.languages,t=this.state.value;return t?r.a.createElement("select",{value:t,onChange:this.handleChange},e.map(function(e){var t=e.value,n=e.text;return r.a.createElement("option",{key:t,value:t},n)})):null},t}(a.Component);d.contextTypes={language:i.a.object};var p=d,g=n(154),f=n.n(g),m=[{name:"Enterprise",link:"/enterprise/"},{name:"Pricing",link:"/pricing/"},{name:"About",link:"/about/"},{name:"Help",link:"/help/"}],h=function(){return r.a.createElement("header",{className:f.a.wrap},r.a.createElement("div",{className:"wrap-container "+f.a.header},r.a.createElement("nav",{className:f.a.nav},r.a.createElement(s.a,{to:"/",className:f.a.logo},"BlueDoc"),m.map(function(e){var t=e.link,n=e.name;return r.a.createElement(s.a,{className:f.a.link,key:t,to:t,activeClassName:"active"},r.a.createElement(l.a,{id:"Header."+n}))})),r.a.createElement(p,null)))},y=function(){return r.a.createElement("footer",{className:f.a.wrap},r.a.createElement("div",{className:"wrap-container "+f.a.header},"footer"))},v=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("main",null,t),r.a.createElement(y,null))};v.propTypes={children:i.a.node.isRequired};t.a=Object(l.d)(v)}}]);
//# sourceMappingURL=component---src-pages-404-js-447141008625e73e7ef2.js.map