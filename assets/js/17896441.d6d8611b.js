"use strict";(self.webpackChunkganz_school_materials=self.webpackChunkganz_school_materials||[]).push([[8401],{2234:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var a=t(4164),i=t(4084),s=t(7559),r=t(7293),l=t(4848);function o(e){var n=e.className;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,a.A)(n,s.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(o,Object.assign({},e))]})}},1689:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var a=t(4164),i=t(4084),s=t(7559),r=t(7293),l=t(4848);function o(e){var n=e.className;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Yh,{}),className:(0,a.A)(n,s.G.common.draftBanner),children:(0,l.jsx)(i.TT,{})})}var c=t(2234);function d(e){var n=e.metadata,t=n.unlisted,a=n.frontMatter;return(0,l.jsxs)(l.Fragment,{children:[(t||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(o,{})]})}},1243:(e,n,t)=>{t.d(n,{A:()=>x});t(6540);var a=t(4164),i=t(7559),s=t(6972),r=t(9169),l=t(8774),o=t(1312),c=t(6025),d=t(4848);function u(e){return(0,d.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function v(){var e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const h={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?(0,d.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,d.jsx)(l.A,{className:a,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:a,children:n})}function g(e){var n=e.children,t=e.active,i=e.index,s=e.addMicrodata;return(0,d.jsxs)("li",Object.assign({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,a.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]}))}function x(){var e=(0,s.OF)(),n=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,a.A)(i.G.docs.docBreadcrumbs,h.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(v,{}),e.map((function(n,t){var a=t===e.length-1,i="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(g,{active:a,index:t,addMicrodata:!!i,children:(0,d.jsx)(b,{href:i,isLast:a,children:n.label})},t)}))]})}):null}},833:(e,n,t)=>{t.r(n),t.d(n,{default:()=>P});var a=t(6540),i=t(1213),s=t(3807),r=t(4848),l=a.createContext(null);function o(e){var n=e.children,t=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(l.Provider,{value:t,children:n})}function c(){var e=(0,a.useContext)(l);if(null===e)throw new s.dV("DocProvider");return e}function d(){var e,n=c(),t=n.metadata,a=n.frontMatter,s=n.assets;return(0,r.jsx)(i.be,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=s.image)?e:a.image})}var u=t(4164),m=t(4581),v=t(7719);function h(){var e=c().metadata;return(0,r.jsx)(v.A,{previous:e.previous,next:e.next})}var b=t(1878),g=t(4267),x=t(7559),f=t(4434),p=t(4336);function j(){var e=c().metadata,n=e.editUrl,t=e.lastUpdatedAt,a=e.lastUpdatedBy,i=e.tags,s=i.length>0,l=!!(n||t||a);return s||l?(0,r.jsxs)("footer",{className:(0,u.A)(x.G.docs.docFooter,"docusaurus-mt-lg"),children:[s&&(0,r.jsx)("div",{className:(0,u.A)("row margin-top--sm",x.G.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(f.A,{tags:i})})}),l&&(0,r.jsx)(p.A,{className:(0,u.A)("margin-top--sm",x.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:a})]}):null}var A=t(1422),N=t(5195),L=t(8587),C=t(1312);const _={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var T=["collapsed"];function k(e){var n=e.collapsed,t=(0,L.A)(e,T);return(0,r.jsx)("button",Object.assign({type:"button"},t,{className:(0,u.A)("clean-btn",_.tocCollapsibleButton,!n&&_.tocCollapsibleButtonExpanded,t.className),children:(0,r.jsx)(C.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const H={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function M(e){var n=e.toc,t=e.className,a=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,A.u)({initialState:!0}),l=s.collapsed,o=s.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.A)(H.tocCollapsible,!l&&H.tocCollapsibleExpanded,t),children:[(0,r.jsx)(k,{collapsed:l,onClick:o}),(0,r.jsx)(A.N,{lazy:!0,className:H.tocCollapsibleContent,collapsed:l,children:(0,r.jsx)(N.A,{toc:n,minHeadingLevel:a,maxHeadingLevel:i})})]})}const y={tocMobile:"tocMobile_ITEo"};function O(){var e=c(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(M,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(x.G.docs.docTocMobile,y.tocMobile)})}var I=t(7763);function B(){var e=c(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(I.A,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:x.G.docs.docTocDesktop})}var w=t(1107),E=t(6777);function V(e){var n,t,a,i,s=e.children,l=(n=c(),t=n.metadata,a=n.frontMatter,i=n.contentTitle,a.hide_title||void 0!==i?null:t.title);return(0,r.jsxs)("div",{className:(0,u.A)(x.G.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(w.A,{as:"h1",children:l})}),(0,r.jsx)(E.A,{children:s})]})}var R=t(1243),G=t(1689);const S={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function F(e){var n,t,a,i,s,l,o=e.children,d=(n=c(),t=n.frontMatter,a=n.toc,i=(0,m.l)(),s=t.hide_table_of_contents,l=!s&&a.length>0,{hidden:s,mobile:l?(0,r.jsx)(O,{}):void 0,desktop:!l||"desktop"!==i&&"ssr"!==i?void 0:(0,r.jsx)(B,{})}),v=c().metadata;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.A)("col",!d.hidden&&S.docItemCol),children:[(0,r.jsx)(G.A,{metadata:v}),(0,r.jsx)(b.A,{}),(0,r.jsxs)("div",{className:S.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(R.A,{}),(0,r.jsx)(g.A,{}),d.mobile,(0,r.jsx)(V,{children:o}),(0,r.jsx)(j,{})]}),(0,r.jsx)(h,{})]})]}),d.desktop&&(0,r.jsx)("div",{className:"col col--3",children:d.desktop})]})}function P(e){var n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,r.jsx)(o,{content:e.content,children:(0,r.jsxs)(i.e3,{className:n,children:[(0,r.jsx)(d,{}),(0,r.jsx)(F,{children:(0,r.jsx)(t,{})})]})})}},7719:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var a=t(1312),i=t(9022),s=t(4848);function r(e){var n=e.previous,t=e.next;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,s.jsx)(i.A,Object.assign({},n,{subLabel:(0,s.jsx)(a.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,s.jsx)(i.A,Object.assign({},t,{subLabel:(0,s.jsx)(a.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},4267:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164),i=t(1312),s=t(7559),r=t(3025),l=t(4848);function o(e){var n=e.className,t=(0,r.r)();return t.badge?(0,l.jsx)("span",{className:(0,a.A)(n,s.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},1878:(e,n,t)=>{t.d(n,{A:()=>g});t(6540);var a=t(4164),i=t(4586),s=t(8774),r=t(1312),l=t(4070),o=t(7559),c=t(3886),d=t(3025),u=t(4848);var m={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function v(e){var n=m[e.versionMetadata.banner];return(0,u.jsx)(n,Object.assign({},e))}function h(e){var n=e.versionLabel,t=e.to,a=e.onClick;return(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(s.A,{to:t,onClick:a,children:(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){var n,t=e.className,s=e.versionMetadata,r=(0,i.A)().siteConfig.title,d=(0,l.vT)({failfast:!0}).pluginId,m=(0,c.g1)(d).savePreferredVersionName,b=(0,l.HW)(d),g=b.latestDocSuggestion,x=b.latestVersionSuggestion,f=null!=g?g:(n=x).docs.find((function(e){return e.id===n.mainDocId}));return(0,u.jsxs)("div",{className:(0,a.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(v,{siteTitle:r,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(h,{versionLabel:x.label,to:f.path,onClick:function(){return m(x.name)}})})]})}function g(e){var n=e.className,t=(0,d.r)();return t.banner?(0,u.jsx)(b,{className:n,versionMetadata:t}):null}},9022:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var a=t(4164),i=t(8774),s=t(4848);function r(e){var n=e.permalink,t=e.title,r=e.subLabel,l=e.isNext;return(0,s.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[r&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},5195:(e,n,t)=>{t.d(n,{A:()=>f});var a=t(8587),i=t(6540),s=t(6342),r=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,s=(0,a.A)(e,r);t>=0?n[t].children.push(s):i.push(s)})),i}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,i=n.anchorTopOffset,s=e.find((function(e){return c(e).top>=i}));return s?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(s))?s:null!=(a=e[e.indexOf(s)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,s.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,s=e.minHeadingLevel,r=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),o=d(l,{anchorTopOffset:t.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var v=t(8774),h=t(4848);function b(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,h.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)(v.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(b,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const g=i.memo(b);var x=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function f(e){var n=e.toc,t=e.className,r=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,f=e.maxHeadingLevel,p=(0,a.A)(e,x),j=(0,s.p)(),A=null!=b?b:j.tableOfContents.minHeadingLevel,N=null!=f?f:j.tableOfContents.maxHeadingLevel,L=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:A,maxHeadingLevel:N});return m((0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:A,maxHeadingLevel:N}}),[d,v,A,N])),(0,h.jsx)(g,Object.assign({toc:L,className:r,linkClassName:d},p))}},7763:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(8587),i=(t(6540),t(4164)),s=t(5195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(4848),o=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.A)(e,o);return(0,l.jsx)("div",{className:(0,i.A)(r.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(s.A,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},6133:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var a=t(4164),i=t(8774);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=t(4848);function l(e){var n=e.permalink,t=e.label,l=e.count,o=e.description;return(0,r.jsxs)(i.A,{href:n,title:o,className:(0,a.A)(s.tag,l?s.tagWithCount:s.tagRegular),children:[t,l&&(0,r.jsx)("span",{children:l})]})}},4434:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164),i=t(1312),s=t(6133);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=t(4848);function o(e){var n=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:n.map((function(e){return(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(s.A,Object.assign({},e))},e.permalink)}))})]})}},4084:(e,n,t)=>{t.d(n,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});t(6540);var a=t(1312),i=t(5260),s=t(4848);function r(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(i.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);