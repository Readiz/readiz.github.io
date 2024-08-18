import{p as r}from"./GRT-Week4_1_-b3578171.js";import{u as s,j as e,a,F as c}from"./ssg-client-a84c9b7f.js";import{C as m}from"./Comment-7f989ffb.js";import{H as h}from"./Header-c09ea125.js";import{T as o}from"./TagList-d587a9ba.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function t(i){const n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msup:"msup",mn:"mn",annotation:"annotation",h4:"h4",pre:"pre"},s(),i.components);return a(c,{children:[e(h,{}),`
`,e(n.h2,{id:"구름톤-챌린지란",children:"구름톤 챌린지란?"}),`
`,a(n.p,{children:[e(n.code,{children:"구름"})," 이라는 곳에서 문제 풀이 챌린지(구름톤 챌린지)를 한다고 해서 참여 중이다. 이벤트 기간 동안 문제가 꾸준이 올라오며, 주에 2회씩 (혹은 그 이상) 챌린지 문제들에 대해 풀이가 가능한 문제들을 풀이해보고, 후기를 남겨보려고 한다."]}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["문제 푸는 곳: ",e(n.a,{href:"https://level.goorm.io/l/challenge/goormthon-challenge",children:"https://level.goorm.io/l/challenge/goormthon-challenge"})]}),`
`,a(n.li,{children:["학습 일기 작성 가이드: ",e(n.a,{href:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8",children:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8"})]}),`
`,a(n.li,{children:["풀이 사용 컨테이너(구름 컨테이너): ",e(n.a,{href:"https://goor.me/8jsC9vbx5TCeaCcRA",children:"https://goor.me/8jsC9vbx5TCeaCcRA"})]}),`
`]}),`
`,e(n.p,{children:"이제 마지막 주차인 4주차다. 4주차의 첫 문제는 그래프가 출제되었다."}),`
`,e(n.h2,{id:"문제-풀이",children:"문제 풀이"}),`
`,a(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 연합"}),`
`,a(n.li,{children:["문제 링크: ",e(n.a,{href:"https://level.goorm.io/exam/195698/%EC%97%B0%ED%95%A9/quiz/1",children:"https://level.goorm.io/exam/195698/%EC%97%B0%ED%95%A9/quiz/1"})]}),`
`]}),`
`,e(n.h3,{id:"풀이-접근",children:"풀이 접근"}),`
`,a(n.p,{children:["이 문제는 나의 경우 ",e(n.code,{children:"Union Find"}),"로 접근했다. 같은 집합에 속하는 녀석들을 관리할 때는 이것만큼 간단한 방법이 없기에.."]}),`
`,a(n.p,{children:["특이할 만한 조건은 양방향으로 연결될 때에만 ",e(n.code,{children:"연합"}),"으로 인정한다는 것이다. 이를 해결하기 위해, 일단 입력을 쭉 받은 이후, 다시한번 루프를 돌면서 연합을 이루는 녀석들은 ",e(n.code,{children:"merge"})," 해준다. 이 후, ",e(n.code,{children:"set"}),"을 활용해서, 루트 정점을 집어넣어준 뒤 ",e(n.code,{children:"unique"})," 한 녀석들의 수를 세어주면 쉽게 풀 수 있다."]}),`
`,a(n.p,{children:["내 풀이의 시간 복잡도는 정점간의 연결을 체크하는 부분 때문에 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),a(n.msup,{children:[e(n.mi,{children:"N"}),e(n.mn,{children:"2"})]}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(N^2)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),a(n.span,{className:"mord",children:[e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"msupsub",children:e(n.span,{className:"vlist-t",children:e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.8141em"},children:a(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e(n.span,{className:"pstrut",style:{height:"2.7em"}}),e(n.span,{className:"sizing reset-size6 size3 mtight",children:e(n.span,{className:"mord mtight",children:"2"})})]})})})})})]}),e(n.span,{className:"mclose",children:")"})]})})]})}),"가 된다. 만약 이 연결을 체크하는 부분을 인접배열로 관리한다면, 시간복잡도를 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"M"}),e(n.mo,{children:"+"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(M + N)"})]})})}),a(n.span,{className:"katex-html","aria-hidden":"true",children:[a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"+"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})]})]})}),"으로 줄일 수 있겠다."]}),`
`,e(n.h4,{id:"내-풀이",children:"내 풀이"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

bool conn[2001][2001];
int N, M;

struct UF {
    int parent[2001];
    UF() {
        for(int i = 0; i <= 2000; ++i) parent[i] = i;
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

int main() {
    scanf("%d %d", &N, &M);

    for(int i = 0; i < M; ++i) {
        int a, b; scanf("%d %d", &a, &b);
        conn[a][b] = true;
    }

    for(int a = 1; a <= N; ++a) {
        for(int b = a + 1; b <= N; ++b) {
            if (conn[a][b] == true && conn[b][a] == true) {
                uf.merge(a, b);
            }
        }
    }

    set<int> uq;
    for(int a = 1; a <= N; ++a) {
        uq.insert(uf.getRoot(a));
    }

    printf("%d\\n", (int)uq.size());
    return 0;
}
`})}),`
`,e(o,{}),`
`,e(m,{})]})}function d(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e(n,Object.assign({},i,{children:e(t,i)})):t(i)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=r;l.main=p;export{l as default};
