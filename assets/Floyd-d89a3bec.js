import{p as l}from"./Floyd_-f34e2247.js";import{u as a,j as e,a as i,F as m}from"./ssg-client-dac0cb56.js";import{C as c}from"./Comment-553905be.js";import"./index.module-caf545e8.js";import{H as o}from"./Header-032aedd6.js";import"./katex.min-4ed993c7.js";function s(t){const n=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msup:"msup",mn:"mn",annotation:"annotation"},a(),t.components);return i(m,{children:[e(o,{}),`
`,e(n.h2,{id:"floyd-warshall-algorithm",children:"Floyd Warshall Algorithm"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int d[MAX_V][MAX_V];
for(int k = 0; k < MAX_V; ++k) {
    for(int i = 0; i < MAX_V; ++i) {
        for(int j = 0; j < MAX_V; ++j) {
            int newDist = d[i][k] + d[k][j];
            if (newDist < d[i][j]) {
                d[i][j] = newDist;
            }
        }
    }
}
`})}),`
`,e(n.h2,{id:"shortest-path-construction",children:"Shortest Path Construction"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int d[MAX_V][MAX_V];
int next[MAX_V][MAX_V];
for(int i = 0; i < MAX_V; ++i) {
    for(int j = 0; j < MAX_V; ++j) {
        next[i][j] = j;
    }
}
for(int k = 0; k < MAX_V; ++k) {
    for(int i = 0; i < MAX_V; ++i) {
        for(int j = 0; j < MAX_V; ++j) {
            int newDist = d[i][k] + d[k][j];
            if (newDist < d[i][j]) {
                d[i][j] = newDist;
                next[i][j] = next[i][k];
            }
        }
    }
}

vector<int> getPath(int i, int j) {
    vector<int> res; res.push_back(i);
    while(i != j) {
        res.push_back(next[i][j]);
        i = next[i][j];
    }
    return res;
}
`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["Obviously, ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),i(n.msup,{children:[e(n.mi,{children:"V"}),e(n.mn,{children:"3"})]}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(V^3)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),i(n.span,{className:"mord",children:[e(n.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),e(n.span,{className:"msupsub",children:e(n.span,{className:"vlist-t",children:e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.8141em"},children:i(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e(n.span,{className:"pstrut",style:{height:"2.7em"}}),e(n.span,{className:"sizing reset-size6 size3 mtight",children:e(n.span,{className:"mord mtight",children:"3"})})]})})})})})]}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,e(c,{})]})}function h(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e(n,Object.assign({},t,{children:e(s,t)})):s(t)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=l;r.main=d;export{r as default};
