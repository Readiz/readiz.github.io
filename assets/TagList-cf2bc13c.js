import{b as m,a as c,j as d,L as p}from"./ssg-client-33090923.js";import{s as g}from"./index.module-caf545e8.js";const L=u=>{var e,i,r,n,o,l;const t=m();(i=(e=t.staticData[t.loadState.routePath])==null?void 0:e.main)!=null&&i.title&&((n=(r=t.staticData[t.loadState.routePath])==null?void 0:r.main)==null||n.title);const s=(l=(o=t.staticData[t.loadState.routePath])==null?void 0:o.main)==null?void 0:l.tags;return s?c("div",{className:"tagList",style:{marginTop:30},children:["🏷️ 주제 목록: ",s.map(a=>d("div",{className:g.tagItem,children:c(p,{className:g.tagLink,to:"/tags/"+a,children:["#",String(a).substring(0,1).toUpperCase()+String(a).substring(1)]})},a))]}):null};export{L as T};