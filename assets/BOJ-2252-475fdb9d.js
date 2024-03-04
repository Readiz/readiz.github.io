import{p as r}from"./BOJ-2252_-79628163.js";import{u as d,j as e,a as t,F as s}from"./ssg-client-fc94ae61.js";import{C as l}from"./Comment-3775179f.js";import{H as a}from"./Header-aef2aec5.js";import{T as f}from"./TagList-937e6d85.js";import"./index.module-caf545e8.js";function c(i){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",code:"code",pre:"pre"},d(),i.components);return t(s,{children:[e(a,{}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 줄 세우기"}),`
`,t(n.li,{children:["문제 링크: ",e(n.a,{href:"https://www.acmicpc.net/problem/2252",children:"https://www.acmicpc.net/problem/2252"})]}),`
`]}),`
`,t(n.p,{children:["풀이를 보면 매우 당연하지만, 그래프에 대한 개념이 확실히 되어 있지 않다면 아이디어 발상이 어려울 수 있다. 어떤 순서를 강제하는 것을 ",e(n.code,{children:"edge"})," 연결로 볼 수 있고, 이런 조건을 만족하게끔 해둔 다음에 방문하지 않은 노드부터 차례대로 ",e(n.code,{children:"dfs"}),"로 방문해 나가면, 제일 끝에 도달하는 녀석이 ",e(n.code,{children:"leaf"}),"가 될 것이다. 그리고, 그 다음 녀석은 ",e(n.code,{children:"leaf-1"}),"이 되고, 이것이 반복되면 결국 ",e(n.code,{children:"root"}),"까지 반복된다. ",e(n.code,{children:"root"}),"는 제일 뒤에 있는 녀석에 대응되고, ",e(n.code,{children:"leaf"}),"는 제일 앞에 있는 녀석에 대응되므로, 이 순서대로 ",e(n.code,{children:"dfs"}),"로 출력해주면 끝나는 문제이다."]}),`
`,t(n.p,{children:[e(n.code,{children:"위상 정렬"}),", 즉 ",e(n.code,{children:"topological sort"}),"는 이러한 방식으로 이루어지며, 만약에 ",e(n.code,{children:"dfs"}),"가 아닌 방식으로 구현한다고 하면, ",e(n.code,{children:"dfs"}),"함수에서 나올 때 순서를 기록한 다음에 해당 순서대로 정렬을 하면 되겠다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

int visited[32001];
vector<int> edges[100001];
void dfs(int v) {
    if (visited[v]) return;
    visited[v] = 1;

    for(int t: edges[v]) {
        dfs(t);
    }
    printf("%d ", v);
}
int main() {
    int N, M; scanf("%d %d", &N, &M);
    for(int i = 0; i < M; ++i) {
        int a, b;
        scanf("%d %d", &a, &b);
        edges[b].push_back(a);
    }
    for(int i = 1; i <= N; ++i) {
        dfs(i);
    }
    printf("\\n");
    return 0;
}
`})}),`
`,e(f,{}),`
`,e(l,{})]})}function p(i={}){const{wrapper:n}=Object.assign({},d(),i.components);return n?e(n,Object.assign({},i,{children:e(c,i)})):c(i)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=r;o.main=m;export{o as default};
