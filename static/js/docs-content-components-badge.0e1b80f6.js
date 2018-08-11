(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/content/components/badge.mdx":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n("./node_modules/react/index.js"),o=s(t),r=n("./node_modules/@mdx-js/tag/dist/index.js"),d=n("./node_modules/docz/dist/index.m.js"),l=s(n("./src/components/Badge/Badge.js")),c=(s(n("./docs/utils/PropTable.js")),n("./docs/utils/Wrapper.js"));function s(e){return e&&e.__esModule?e:{default:e}}a.default=function(e){var a=e.components;!function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}(e,["components"]);return o.default.createElement(r.MDXTag,{name:"wrapper",components:a},o.default.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"badge"}},o.default.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#badge"}},o.default.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Badge"),o.default.createElement(d.Playground,{__position:0,__code:"<Badge>Badge</Badge>",wrapper:c.Wrapper},o.default.createElement(l.default,null,"Badge")),o.default.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"props"}},o.default.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#props"}},o.default.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Props"),o.default.createElement(r.MDXTag,{name:"p",components:a},"(Cannot be rendered because it's a styled component)"),o.default.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"best-practices"}},o.default.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#best-practices"}},o.default.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Best practices"),o.default.createElement(r.MDXTag,{name:"ul",components:a},o.default.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Only use one badge at a time.")),o.default.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"usage-guidelines"}},o.default.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#usage-guidelines"}},o.default.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Usage guidelines"),o.default.createElement(r.MDXTag,{name:"ul",components:a},o.default.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Use to indicate statuses of a process, for instance, "Pending payment" or\n"Successful transaction".'),o.default.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Only use semantic badges in cases where their colors can be mapped to a\nmeaning.")),o.default.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"component-variations"}},o.default.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#component-variations"}},o.default.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Component variations"),o.default.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"semantic-badges"}},o.default.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{"aria-hidden":!0,href:"#semantic-badges"}},o.default.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Semantic badges"),o.default.createElement(r.MDXTag,{name:"p",components:a},"The badges come in a number of colors based on their semantic meaning."),o.default.createElement(d.Playground,{__position:1,__code:"<Fragment>\n  <Badge color={Badge.NEUTRAL}>Badge</Badge>\n  <Badge color={Badge.PRIMARY}>Badge</Badge>\n  <Badge color={Badge.SUCCESS}>Badge</Badge>\n  <Badge color={Badge.WARNING}>Badge</Badge>\n  <Badge color={Badge.DANGER}>Badge</Badge>\n</Fragment>",wrapper:c.Wrapper},o.default.createElement(t.Fragment,null,o.default.createElement(l.default,{color:l.default.NEUTRAL},"Badge"),o.default.createElement(l.default,{color:l.default.PRIMARY},"Badge"),o.default.createElement(l.default,{color:l.default.SUCCESS},"Badge"),o.default.createElement(l.default,{color:l.default.WARNING},"Badge"),o.default.createElement(l.default,{color:l.default.DANGER},"Badge"))),o.default.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"circular-badges"}},o.default.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{"aria-hidden":!0,href:"#circular-badges"}},o.default.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Circular badges"),o.default.createElement(r.MDXTag,{name:"p",components:a},"Badges that receive the ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"circle")," prop can be used to indicate notifications."),o.default.createElement(d.Playground,{__position:2,__code:"<Badge circle color={Badge.DANGER}>\n  5\n</Badge>",wrapper:c.Wrapper},o.default.createElement(l.default,{circle:!0,color:l.default.DANGER},"5")))}}}]);