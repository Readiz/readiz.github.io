import{p as l}from"./Dijkstra_-0a76cae2.js";import{u as a,j as e,a as i,F as c}from"./ssg-client-e0651bf2.js";import{C as m}from"./Comment-bcca217c.js";import"./index.module-caf545e8.js";import{H as o}from"./Header-906ded11.js";import"./katex.min-4ed993c7.js";function s(t){const n=Object.assign({h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},a(),t.components);return i(c,{children:[e(o,{}),`
`,e(n.h2,{id:"dijkstra-algorithm",children:"Dijkstra Algorithm"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"adj[v] = {next, dist}"}),`
`,e(n.li,{children:"음수 간선이 있으면 안됨."}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int d[MAX_V], visited[MAX_V];
fill(d, d + MAX_V, INF);
fill(visited, visited + MAX_V, 0);
d[S] = 0;

priority_queue<pii> pq;
pq.push({0, S});

while(pq.size()) {
    auto cur = pq.top(); pq.pop();
    int v = cur.second;
    if (visited[v]) continue;
    visited[v] = 1;

    for(auto& t: adj[v]) {
        int newDist = -cur.first + t.second;
        if (newDist < d[t.first]) {
            d[t.first] = newDist;
            pq.push({-newDist, t.first});
        }
    }
}
`})}),`
`,e(n.h2,{id:"shortest-path-construction",children:"Shortest Path Construction"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int d[MAX_V], visited[MAX_V], pre[MAX_V];
fill(d, d + MAX_V, INF);
fill(pre, pre + MAX_V, -1);
fill(visited, visited + MAX_V, 0);
d[S] = 0;

priority_queue<pii> pq;
pq.push({0, S});

while(pq.size()) {
    auto cur = pq.top(); pq.pop();
    int v = cur.second;
    if (visited[v]) continue;
    visited[v] = 1;

    for(auto& t: adj[v]) {
        int newDist = -cur.first + t.second;
        if (newDist < d[t.first]) {
            d[t.first] = newDist;
            pre[t.first] = v;
            pq.push({-newDist, t.first});
        }
    }
}

vector<int> getPath(int t) {
    vector<int> res;
    for(int p = t; p != S; p = pre[p]) {
        res.push_back(p);
    }
    res.push_back(S);
    reverse(res.begin(), res.end());

    return res;
}
`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"V"}),e(n.mo,{children:"+"}),e(n.mi,{children:"E"}),e(n.mo,{stretchy:"false",children:")"}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"V"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O((V+E)\\log V)"})]})})}),i(n.span,{className:"katex-html","aria-hidden":"true",children:[i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"(("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"+"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),e(n.span,{className:"mclose",children:")"}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),i(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),e(n.span,{className:"mclose",children:")"})]})]})]})})}),`
`]}),`
`,e(m,{})]})}function d(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e(n,Object.assign({},t,{children:e(s,t)})):s(t)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=l;r.main=h;export{r as default};
