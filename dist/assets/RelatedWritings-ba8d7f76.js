import{b as P,j as S,a as j,L as g}from"./ssg-client-3018a58a.js";const C=k=>{var n,s,o,l,c,d;const e=P();(s=(n=e.staticData[e.loadState.routePath])==null?void 0:n.main)!=null&&s.title&&((l=(o=e.staticData[e.loadState.routePath])==null?void 0:o.main)==null||l.title),(d=(c=e.staticData[e.loadState.routePath])==null?void 0:c.main)==null||d.writtendate;const x=(()=>{var u,m,h,f,p,D;let a=e.staticData,r=[];for(let t of Object.keys(a))t.includes(e.loadState.routePath)&&t!=e.loadState.routePath&&((m=(u=a[t])==null?void 0:u.main)!=null&&m.writtendate?r.push([t,new Date((f=(h=a[t])==null?void 0:h.main)==null?void 0:f.writtendate).toLocaleDateString(),new Date((D=(p=a[t])==null?void 0:p.main)==null?void 0:D.writtendate)]):r.push([t,"-"]));return r=r.sort((t,i)=>t[1]=="-"&&i[1]!="-"?1:i[1]=="-"&&t[1]!="-"?-1:t[1]=="-"&&i[1]=="-"?1:-(t[2]-i[2])),r=r.map(t=>{var i,w;return[(w=(i=e.staticData[t[0]])==null?void 0:i.main)==null?void 0:w.title,t[0],t[1]]}),r})();return S("ul",{className:"markdown-el",children:x.map(a=>j("li",{children:[S(g,{to:a[1],children:a[0]})," | ",a[2]]},a[0]))})};export{C as R};
