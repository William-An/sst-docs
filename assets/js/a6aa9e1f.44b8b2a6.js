"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3089],{3269:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(7294),r=a(6010),l=a(2263),i=a(833),o=a(5281),s=a(9058),m=a(5999),c=a(2244);function g(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(c.Z,{permalink:a,title:n.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&n.createElement(c.Z,{permalink:r,title:n.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=a(197),u=a(9460),d=a(390);function E(e){var t=e.items,a=e.component,r=void 0===a?d.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(u.n,{key:t.metadata.permalink,content:t},n.createElement(r,null,n.createElement(t,null)))})))}function b(e){var t=e.metadata,a=(0,l.Z)().siteConfig.title,r=t.blogDescription,o=t.blogTitle,s="/"===t.permalink?a:o;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:s,description:r}),n.createElement(p.Z,{tag:"blog_posts_list"}))}function v(e){var t=e.metadata,a=e.items,r=e.sidebar;return n.createElement(s.Z,{sidebar:r},n.createElement(E,{items:a}),n.createElement(g,{metadata:t}))}function h(e){return n.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(b,e),n.createElement(v,e))}}}]);