import{p as t}from"./Graph_-180cc03b.js";import{u as r,j as e,a as i,F as h}from"./ssg-client-c43723c5.js";import{C as o}from"./Comment-0f5a19dc.js";import{T as s}from"./TagList-9828e44d.js";import{H as a}from"./Header-765e6822.js";import"./index.module-caf545e8.js";function d(l){const n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",ol:"ol",pre:"pre",h3:"h3"},r(),l.components);return i(h,{children:[e(a,{}),`
`,e(n.p,{children:"그래프 관련 여러가지 정리"}),`
`,e(n.h2,{id:"기초를-튼튼히",children:"기초를 튼튼히"}),`
`,e(n.p,{children:"그래프는 다음과 같은 요소로 이루어져 있다."}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"노드(Node): 정점(Vertex)라고도 함"}),`
`,e(n.li,{children:"간선(Edge)"}),`
`]}),`
`,e(n.p,{children:"그리고 다음과 같은 용어를 정의하자."}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"경로(Path): 한 노드에서 그래프의 간선을 지나 다른 노드까지 가는 길"}),`
`,e(n.li,{children:"사이클(Cycle): 처음 노드와 마지막 노드가 같은 경로"}),`
`,e(n.li,{children:"연결 그래프(Connected Graph): 모든 노드에 연결 경로가 있을 경우"}),`
`,e(n.li,{children:"컴포넌트(Component): 그래프의 연결된 부분 부분을 의미"}),`
`,e(n.li,{children:"트리(Tree): 사이클이 없는 연결 그래프"}),`
`,e(n.li,{children:"방향 그래프(Directed Graph): 간선이 이동방향을 가짐"}),`
`,e(n.li,{children:"가중 그래프(Weighted Graph): 간선이 가중치를 가짐 - 길이로 해석 가능"}),`
`,e(n.li,{children:"이웃 노드(Neighbor / Adjacent Node)"}),`
`,i(n.li,{children:["차수(Degree): 이웃 노드의 개수",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["간선의 개수가 ",e(n.code,{children:"m"}),"일 때, 차수의 합은 항상 ",e(n.code,{children:"2m"}),"이 된다."]}),`
`,e(n.li,{children:"각 간선은 그 간선이 잇는 두 노드의 차수를 1씩 증가시키기 때문. 따라서 항상 짝수"}),`
`]}),`
`]}),`
`,i(n.li,{children:["정규 그래프(Regular Graph): 모든 노드의 차수가 상수 ",e(n.code,{children:"d"}),"로 같을 경우"]}),`
`,i(n.li,{children:["완전 그래프(Complete Graph): 모든 노드의 차수가 ",e(n.code,{children:"n-1"}),"인 경우. 즉, 서로 다른 모든 두 노드 사이에 간선이 있는 경우"]}),`
`,e(n.li,{children:"진입차수(Indegree): 그 노드로 향하는 간선의 개수"}),`
`,e(n.li,{children:"진출차수(Outdegree): 그 노드에서 시작하는 간선의 개수"}),`
`]}),`
`,e(n.h2,{id:"그래프의-표현",children:"그래프의 표현"}),`
`,i(n.ol,{children:[`
`,i(n.li,{children:["인접 리스트",`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.code,{children:"vector<int> adj[N]"})}),`
`,i(n.li,{children:[e(n.code,{children:"vector<pii> adj[N]"}),": 가중 그래프의 경우"]}),`
`]}),`
`]}),`
`,i(n.li,{children:["인접 행렬",`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.code,{children:"int adj[N][N]"})}),`
`]}),`
`]}),`
`,i(n.li,{children:["간선 리스트(Edge List)",`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.code,{children:"vector<pii> edges"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"1과 유사해보이지만 다르다. Edge만 저장한 것"}),`
`]}),`
`]}),`
`,i(n.li,{children:[e(n.code,{children:"vector<piii> edges"}),": 가중 그래프의 경우"]}),`
`]}),`
`]}),`
`]}),`
`,e(n.h2,{id:"그래프의-순회",children:"그래프의 순회"}),`
`,i(n.ol,{children:[`
`,e(n.li,{children:"DFS"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`vector<int> adj[N];
bool visited[N];
void dfs(int s) {
    if (visited[s]) return;
    visited[s] = true;
    for(auto u: adj[s]) {
        dfs(u);
    }
}
`})}),`
`,i(n.ol,{start:"2",children:[`
`,i(n.li,{children:[`
`,e(n.p,{children:"BFS"}),`
`,i(n.p,{children:["노드 ",e(n.code,{children:"x"}),"로부터 각 노드까지 걸리는 거리를 구한다고 해보자."]}),`
`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`queue<int> q;
bool visited[N];
int distance[N];

void BFS(int x) {
    visited[x] = true;
    distance[x] = 0;
    q.push(x);
    while(q.size()) {
        int s = q.front(); q.pop();
        for (auto u: adj[s]) {
            if (visited[u]) continue;
            visited[u] = true;
            distance[u] = distance[s] + 1;
            q.push(u);
        }
    }
}
`})}),`
`,e(n.h2,{id:"최단-경로",children:"최단 경로"}),`
`,e(n.h3,{id:"작성-중",children:"작성 중"}),`
`,e(s,{}),`
`,e(o,{})]})}function u(l={}){const{wrapper:n}=Object.assign({},r(),l.components);return n?e(n,Object.assign({},l,{children:e(d,l)})):d(l)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=t;c.main=p;export{c as default};
