import{p as l}from"./SPFA_-1c085c95.js";import{u as s,j as e,a as t,F as c}from"./ssg-client-9b0ce5e8.js";import{C as m}from"./Comment-f518aff4.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-f79b744c.js";import"./katex.min-4ed993c7.js";function a(i){const n=Object.assign({h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},s(),i.components);return t(c,{children:[e(h,{}),`
`,e(n.h2,{id:"shortest-path-faster-algorithm",children:"Shortest Path Faster Algorithm"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"adj[v] = {next, dist}"}),`
`,t(n.li,{children:["음수 간선이 있어도 사용 가능",`
`,t(n.ul,{children:[`
`,e(n.li,{children:"사이클을 잡기 위해서 각 정점의 방문 수를 체크해서 MAX_V보다 커지면 탈출한다."}),`
`]}),`
`]}),`
`,e(n.li,{children:"평균적으로 수행 시간이 빠른 알고리즘"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int d[MAX_V], inQ[MAX_V];
fill(d, d + MAX_V, INF);
fill(inQ, inQ + MAX_V, 0);
d[S] = 0;
inQ[S] = 1;

queue<int> q;
q.push(S);

while(q.size()) {
    auto cur = q.top(); q.pop();
    inQ[cur] = 0;

    // Check Negative Loop here if you want
    // if (++cnt[cur] >= MAX_V || d[cur] < -INF) ~
    
    for(auto& t: adj[cur]) {
        int newDist = d[cur] + t.second;
        if (newDist < d[t.first]) {
            d[t.first] = newDist;
            if (inQ[t.first] == 0) {
                q.push(t.first);
                inQ[t.first] = 1;
            }
        }
    }
}
`})}),`
`,e(n.h2,{id:"shortest-path-construction",children:"Shortest Path Construction"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int d[MAX_V], inQ[MAX_V], pre[MAX_V];
fill(d, d + MAX_V, INF);
fill(inQ, inQ + MAX_V, 0);
fill(pre, pre + MAX_V, -1);
d[S] = 0;
inQ[S] = 1;

queue<int> q;
q.push(S);

while(q.size()) {
    auto cur = q.top(); q.pop();
    inQ[cur] = 0;

    // Check Negative Loop here if you want
    // if (++cnt[cur] >= MAX_V || d[cur] < -INF) ~
    for(auto& t: adj[cur]) {
        int newDist = d[cur] + t.second;
        if (newDist < d[t.first]) {
            d[t.first] = newDist;
            pre[t.first] = cur;
            if (inQ[t.first] == 0) {
                q.push(t.first);
                inQ[t.first] = 1;
            }
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
`,t(n.ul,{children:[`
`,t(n.li,{children:["Worst: ",e(n.span,{className:"math math-inline",children:t(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:t(n.semantics,{children:[t(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"V"}),e(n.mi,{children:"E"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(VE)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:t(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,t(n.li,{children:["Best: ",e(n.span,{className:"math math-inline",children:t(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:t(n.semantics,{children:[t(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"V"}),e(n.mo,{children:"+"}),e(n.mi,{children:"E"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(V + E)"})]})})}),t(n.span,{className:"katex-html","aria-hidden":"true",children:[t(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"+"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),t(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),e(n.span,{className:"mclose",children:")"})]})]})]})})]}),`
`]}),`
`,e(m,{})]})}function o(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e(n,Object.assign({},i,{children:e(a,i)})):a(i)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=l;r.main=d;export{r as default};
