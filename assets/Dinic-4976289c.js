import{p as m}from"./Dinic_-90391db2.js";import{u as s,j as n,a,F as r}from"./ssg-client-b16c776b.js";import{C as c}from"./Comment-f4860371.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-f3231049.js";import"./katex.min-4ed993c7.js";function i(l){const e=Object.assign({h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",msup:"msup",mn:"mn"},s(),l.components);return a(r,{children:[n(h,{}),`
`,n(e.h2,{id:"dinic-algorithm",children:"Dinic Algorithm"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Graph에 Level을 부여해서 BFS + DFS 를 짬뽕해 구현한 Edmonds-Karp Algorithm을 개선한 알고리즘"}),`
`,a(e.li,{children:["BFS + DFS 알고리즘이라고 기억하자.",`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Level Graph를 그리는데에 BFS를, 실제로 유량을 흘려줄 때 DFS를 쓴다."}),`
`,n(e.li,{children:"Level Graph를 그린 이후에 더이상 흘릴 유량이 없을 때까지 DFS를 반복"}),`
`]}),`
`]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`// 함수 1. BFS
int makeLevelGraph() {
    fill(level, level + MAX_V, -1);
    // bfs
    queue<int> q;
    q.push(S);
    level[S] = 0;

    while(q.size()) {
        int cur = q.front(); q.pop();
        for(auto& e: adj[cur]) {
            if (level[e.t] != -1 && e.getResidual() > 0) {
                level[e.t] = level[cur] + 1;
                q.push(e.t);
            }
        }
    }

    return (level[T] != -1);
}
// 함수2. DFS
int dfsFlow(int from, int cFlow) {
    if (from == T) return cFlow; // dfs 종료조건

    // &i : 탐색 캐시를 위한 테크닉
    for(int &i = adjStart[from]; adj[from].size(); ++i) {
        auto& e = adj[from][i];
        if (level[e.t] == level[from] + 1 && e.getResidual() > 0) {
            int minFlow = min(cFlow, e.getResidual());
            int tmp = dfsFlow(e.t, minFlow);

            if (tmp > 0) {
                e.flow += tmp;
                e.back->flow -= tmp;
                return tmp; // 경로 하나 찾으면 리턴. 어차피 dfs 반복함.
            }
        }
    }

    return 0; // 흘릴 유량이 없으면 0
}


// 아래가 이제 로직 사용 부분
int totalFlow = 0;
while(makeLevelGraph()) {
    fill(adjStart, adjStart + MAX_V, 0); // 탐색 cache
    while(true) {
        int curFlow = dfsFlow(S, INF);
        if (curFlow == 0) break;
        totalFlow += curFlow;
    }
}
`})}),`
`,n(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Basic Flow Algorithm (Reference): ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"f"}),n(e.mi,{children:"E"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(fE)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["Worst: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),a(e.msup,{children:[n(e.mi,{children:"V"}),n(e.mn,{children:"2"})]}),n(e.mi,{children:"E"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(V^2E)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),n(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t",children:n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.8141em"},children:a(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),n(e.span,{className:"mclose",children:")"})]})})]})})," (상한)",`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Flow Graph에서 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"V"}),n(e.mo,{children:"<"}),n(e.mi,{children:"E"})]}),n(e.annotation,{encoding:"application/x-tex",children:"V < E"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n(e.span,{className:"mrel",children:"<"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6833em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"})]})]})]})})," 이므로(아니라면 Flow를 쓸 이유가..), Edmonds-Karp 보다 빠르다고 할 수 있다."]}),`
`]}),`
`]}),`
`]}),`
`,n(c,{})]})}function o(l={}){const{wrapper:e}=Object.assign({},s(),l.components);return e?n(e,Object.assign({},l,{children:n(i,l)})):i(l)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=m;t.main=d;export{t as default};
