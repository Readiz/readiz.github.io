import{b as S,a,j as r,L as y}from"./ssg-client-32a5b6e3.js";import{s as P}from"./index.module-caf545e8.js";const z=s=>{var d,h,c,u,g,m;const e=S(),f=(h=(d=e.staticData[e.loadState.routePath])==null?void 0:d.main)!=null&&h.title?(u=(c=e.staticData[e.loadState.routePath])==null?void 0:c.main)==null?void 0:u.title:"Untitled",l=(m=(g=e.staticData[e.loadState.routePath])==null?void 0:g.main)==null?void 0:m.writtendate,x=(()=>{let t=e.loadState.routePath;if(t=="/")return[];t.endsWith("/")&&(t=t.substring(0,t.length-1));const n=t.split("/"),p=[["/","Home"]];let b="";for(let i=1;i<n.length-1;++i)b+="/"+n[i],p.push([b,n[i]]);return p})(),o=(()=>{if(e.loadState.routePath=="/")return"안녕하세요!";const t=e.loadState.routePath.split("/");return String(t[t.length-1]).startsWith(":")?"Writings":t[t.length-1]})();return a("div",{style:{marginBottom:20},children:[a("div",{style:{border:"1px solid",borderRadius:"5px",padding:10,boxShadow:"2px 2px",margin:-15},children:[r("div",{style:{fontSize:35,fontWeight:700},children:s.title?s.title:f}),a("ul",{className:P.breadcrumb,children:[x.map(t=>r("li",{children:r(y,{to:t[0],children:t[1]})},t[0])),r("li",{children:o},o)]})]}),a("div",{style:{marginTop:-82,marginRight:-7,marginBottom:85,fontSize:12,color:"grey",textAlign:"right"},children:[" ",l?"by Readiz / Last update: "+String(l).substring(0,10):"by Readiz"]})]})};export{z as H};
