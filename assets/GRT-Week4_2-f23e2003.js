import{p as t}from"./GRT-Week4_2_-b3578171.js";import{u as i,j as e,a,F as c}from"./ssg-client-5e7ce271.js";import{C as r}from"./Comment-6860eef3.js";import{H as h}from"./Header-38ee5314.js";import{T as d}from"./TagList-e5afad87.js";import"./katex.min-4ed993c7.js";import{S as o,T as p}from"./SolvedTier-554088e6.js";import"./index.module-caf545e8.js";function l(s){const n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",ol:"ol",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",annotation:"annotation",mo:"mo",mn:"mn",msup:"msup",h4:"h4",pre:"pre"},i(),s.components);return a(c,{children:[e(h,{}),`
`,e(n.h2,{id:"구름톤-챌린지란",children:"구름톤 챌린지란?"}),`
`,a(n.p,{children:[e(n.code,{children:"구름"})," 이라는 곳에서 문제 풀이 챌린지(구름톤 챌린지)를 한다고 해서 참여 중이다. 이벤트 기간 동안 문제가 꾸준이 올라오며, 주에 2회씩 (혹은 그 이상) 챌린지 문제들에 대해 풀이가 가능한 문제들을 풀이해보고, 후기를 남겨보려고 한다."]}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["문제 푸는 곳: ",e(n.a,{href:"https://level.goorm.io/l/challenge/goormthon-challenge",children:"https://level.goorm.io/l/challenge/goormthon-challenge"})]}),`
`,a(n.li,{children:["학습 일기 작성 가이드: ",e(n.a,{href:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8",children:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8"})]}),`
`,a(n.li,{children:["풀이 사용 컨테이너(구름 컨테이너): ",e(n.a,{href:"https://goor.me/8jsC9vbx5TCeaCcRA",children:"https://goor.me/8jsC9vbx5TCeaCcRA"})]}),`
`]}),`
`,e(n.h2,{id:"문제-풀이",children:"문제 풀이"}),`
`,a(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 통신망 분석"}),`
`,a(n.li,{children:["문제 링크: ",e(n.a,{href:"https://level.goorm.io/exam/195699/%EA%B7%B8%EB%9E%98%ED%94%84%EC%9D%98-%EB%B0%80%EC%A7%91%EB%8F%84/quiz/1",children:"https://level.goorm.io/exam/195699/%EA%B7%B8%EB%9E%98%ED%94%84%EC%9D%98-%EB%B0%80%EC%A7%91%EB%8F%84/quiz/1"})]}),`
`,a(n.li,{children:["문제 예상 티어: ",e(o,{tierName:p.Gold,grade:5,width:20})]}),`
`]}),`
`,e(n.h3,{id:"풀이-접근",children:"풀이 접근"}),`
`,a(n.p,{children:["어제와 마찬가지로 나의 경우 ",e(n.code,{children:"Union Find"}),"로 접근했다. 같은 집합에 속하는 녀석들을 관리할 때는 이 방법이 제일 편하다."]}),`
`,e(n.p,{children:"풀이 과정은 아래와 같다."}),`
`,a(n.ol,{children:[`
`,a(n.li,{children:["입력을 받으면서 같은 집합에 속하는 애들을 ",e(n.code,{children:"merge"})," 한다"]}),`
`,a(n.li,{children:["다시 처음부터 정점을 순회하면서 ",e(n.code,{children:"root"}),"를 확인해서, 처음 나오는 ",e(n.code,{children:"root"})," 면 Component를 생성한다.",`
`,a(n.ul,{children:[`
`,e(n.li,{children:"현재 정점이 속한 Component에 해당 컴퓨터를 추가한다."}),`
`]}),`
`]}),`
`,e(n.li,{children:"Component 안에 속하는 컴퓨터들이 가진 간선의 갯수를 세서 반영한다."}),`
`,e(n.li,{children:"문제에서 준 기준으로 Component를 정렬한다."}),`
`,e(n.li,{children:"0번째 index의 Component의 원소들을 출력한다."}),`
`]}),`
`,e(n.p,{children:"그래프를 다루는 법만 잘 알고 있다면 순수 구현 문제처럼 풀이가 된다."}),`
`,a(n.p,{children:["주의해야할 점은 정렬할 때 인데, 밀도의 계산을 분수로 하게 되면 ",e(n.code,{children:"WA"}),"를 받기 쉽다. 이 경우 분수로 하기보다는 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"a"}),e(n.mi,{mathvariant:"normal",children:"/"}),e(n.mi,{children:"b"})]}),e(n.annotation,{encoding:"application/x-tex",children:"a / b"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",children:"a"}),e(n.span,{className:"mord",children:"/"}),e(n.span,{className:"mord mathnormal",children:"b"})]})})]})}),"와 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"c"}),e(n.mi,{mathvariant:"normal",children:"/"}),e(n.mi,{children:"d"})]}),e(n.annotation,{encoding:"application/x-tex",children:"c / d"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",children:"c"}),e(n.span,{className:"mord",children:"/"}),e(n.span,{className:"mord mathnormal",children:"d"})]})})]})}),"를 비교한다 할 때 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"a"}),e(n.mo,{children:"∗"}),e(n.mi,{children:"d"})]}),e(n.annotation,{encoding:"application/x-tex",children:"a * d"})]})})}),a(n.span,{className:"katex-html","aria-hidden":"true",children:[a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.4653em"}}),e(n.span,{className:"mord mathnormal",children:"a"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"∗"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6944em"}}),e(n.span,{className:"mord mathnormal",children:"d"})]})]})]})}),"와 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"b"}),e(n.mo,{children:"∗"}),e(n.mi,{children:"c"})]}),e(n.annotation,{encoding:"application/x-tex",children:"b * c"})]})})}),a(n.span,{className:"katex-html","aria-hidden":"true",children:[a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6944em"}}),e(n.span,{className:"mord mathnormal",children:"b"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"∗"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.4306em"}}),e(n.span,{className:"mord mathnormal",children:"c"})]})]})]})}),"를 비교하는 식으로 회피하면 실수 오차 없이 정렬할 수 있다. 또, 이 경우 문제 조건에서 수의 범위가 ",e(n.code,{children:"int"})," 범위를 초과할 수 있으므로, ",e(n.code,{children:"long long"}),"을 사용해야 한다. (Worst 시 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mn,{children:"1"}),a(n.msup,{children:[e(n.mn,{children:"0"}),e(n.mn,{children:"5"})]}),e(n.mo,{children:"×"}),e(n.mn,{children:"2"}),e(n.mo,{children:"∗"}),e(n.mn,{children:"1"}),a(n.msup,{children:[e(n.mn,{children:"0"}),e(n.mn,{children:"5"})]}),e(n.mo,{children:"="}),e(n.mn,{children:"2"}),e(n.mo,{children:"∗"}),e(n.mn,{children:"1"}),a(n.msup,{children:[e(n.mn,{children:"0"}),e(n.mn,{children:"10"})]})]}),e(n.annotation,{encoding:"application/x-tex",children:"10^5 \\times 2*10^5 = 2*10^{10}"})]})})}),a(n.span,{className:"katex-html","aria-hidden":"true",children:[a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),e(n.span,{className:"mord",children:"1"}),a(n.span,{className:"mord",children:[e(n.span,{className:"mord",children:"0"}),e(n.span,{className:"msupsub",children:e(n.span,{className:"vlist-t",children:e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.8141em"},children:a(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e(n.span,{className:"pstrut",style:{height:"2.7em"}}),e(n.span,{className:"sizing reset-size6 size3 mtight",children:e(n.span,{className:"mord mtight",children:"5"})})]})})})})})]}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"×"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"2"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"∗"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.8141em"}}),e(n.span,{className:"mord",children:"1"}),a(n.span,{className:"mord",children:[e(n.span,{className:"mord",children:"0"}),e(n.span,{className:"msupsub",children:e(n.span,{className:"vlist-t",children:e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.8141em"},children:a(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e(n.span,{className:"pstrut",style:{height:"2.7em"}}),e(n.span,{className:"sizing reset-size6 size3 mtight",children:e(n.span,{className:"mord mtight",children:"5"})})]})})})})})]}),e(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),e(n.span,{className:"mrel",children:"="}),e(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"2"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"∗"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.8141em"}}),e(n.span,{className:"mord",children:"1"}),a(n.span,{className:"mord",children:[e(n.span,{className:"mord",children:"0"}),e(n.span,{className:"msupsub",children:e(n.span,{className:"vlist-t",children:e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.8141em"},children:a(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e(n.span,{className:"pstrut",style:{height:"2.7em"}}),e(n.span,{className:"sizing reset-size6 size3 mtight",children:e(n.span,{className:"mord mtight",children:e(n.span,{className:"mord mtight",children:"10"})})})]})})})})})]})]})]})]})})," > ",e(n.code,{children:"0x7FFFFFFF"})," 이다)"]}),`
`,a(n.p,{children:["시간 복잡도의 병목 부분은 정렬과 처음 간선 입력을 받는 부분이고, ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"M"}),e(n.mo,{children:"+"}),e(n.mi,{children:"N"}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(M + N \\log N)"})]})})}),a(n.span,{className:"katex-html","aria-hidden":"true",children:[a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"+"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})]})]})}),"이다."]}),`
`,e(n.h4,{id:"내-풀이",children:"내 풀이"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

int N, M;
typedef long long ll;
struct UF {
    int parent[100001];
    UF() {
        for(int i = 0; i <= 100000; ++i) parent[i] = i;
    }
    int getRoot(int v) {
        if (v == parent[v]) return v;
        return parent[v] = getRoot(parent[v]);
    }
    void merge(int a, int b) {
        a = getRoot(a);
        b = getRoot(b);
        if (a == b) return;
        parent[b] = a;
    }
} uf;

vector<int> adj[100001];

struct Component {
    ll numComputer;
    ll numConnection;
    vector<int> members;

    bool operator<(const Component& t) const {
        // 1. 커넥션 수 / 컴퓨터 수
        // 2. 밀도 같으면 컴퓨터 적은 수
        // 3. 더 작은 번호 컴퓨터 순
        if (numComputer * t.numConnection != numConnection * t.numComputer) {
            return numComputer * t.numConnection < numConnection * t.numComputer;
        }
        if (numComputer != t.numComputer) {
            return numComputer < t.numComputer;
        }
        return members[0] < t.members[0];
    }
} com[100000];

int main() {
    scanf("%d %d", &N, &M);

    for(int i = 0; i < M; ++i) {
        int a, b; scanf("%d %d", &a, &b);
        adj[a].push_back(b);
        uf.merge(a, b);
    }

    int cid = 0;
    map<int, int> uq;
    for(int a = 1; a <= N; ++a) {
        if (uq.find(uf.getRoot(a)) == uq.end()) {
            uq[uf.getRoot(a)] = cid;
            ++cid;    
        }
        int gid = uq[uf.getRoot(a)];
        com[gid].members.push_back(a);
        com[gid].numComputer++;
    }
    for(int c = 0; c < cid; ++c) {
        ll cnt = 0;
        for(auto& cur: com[c].members) {
            cnt += adj[cur].size();
        }
        com[c].numConnection = cnt;
    }
    sort(com, com + cid);

    for(auto& item: com[0].members) {
        printf("%d ", item);
    }
    printf("\\n");
    return 0;
}
`})}),`
`,e(d,{}),`
`,e(r,{})]})}function g(s={}){const{wrapper:n}=Object.assign({},i(),s.components);return n?e(n,Object.assign({},s,{children:e(l,s)})):l(s)}const N=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),m={};m.outlineInfo=t;m.main=N;export{m as default};
