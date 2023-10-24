import{p as l}from"./GRT-Week3_2_-9449f086.js";import{u as r,j as e,a as i,F as s}from"./ssg-client-39647068.js";import{C as o}from"./Comment-f6126669.js";import{H as h}from"./Header-b4a3204a.js";import{T as m}from"./TagList-06a3c86f.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function t(a){const n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mn:"mn",mo:"mo",annotation:"annotation",pre:"pre"},r(),a.components);return i(s,{children:[e(h,{}),`
`,e(n.h2,{id:"구름톤-챌린지란",children:"구름톤 챌린지란?"}),`
`,i(n.p,{children:[e(n.code,{children:"구름"})," 이라는 곳에서 문제 풀이 챌린지(구름톤 챌린지)를 한다고 해서 참여 중이다. 이벤트 기간 동안 문제가 꾸준이 올라오며, 주에 2회씩 (혹은 그 이상) 챌린지 문제들에 대해 풀이가 가능한 문제들을 풀이해보고, 후기를 남겨보려고 한다."]}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["문제 푸는 곳: ",e(n.a,{href:"https://level.goorm.io/l/challenge/goormthon-challenge",children:"https://level.goorm.io/l/challenge/goormthon-challenge"})]}),`
`,i(n.li,{children:["학습 일기 작성 가이드: ",e(n.a,{href:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8",children:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8"})]}),`
`,i(n.li,{children:["풀이 사용 컨테이너(구름 컨테이너): ",e(n.a,{href:"https://goor.me/8jsC9vbx5TCeaCcRA",children:"https://goor.me/8jsC9vbx5TCeaCcRA"})]}),`
`]}),`
`,e(n.h2,{id:"문제-풀이",children:"문제 풀이"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 발전기"}),`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://level.goorm.io/exam/195694/%EB%B0%9C%EC%A0%84%EA%B8%B0/quiz/1",children:"https://level.goorm.io/exam/195694/%EB%B0%9C%EC%A0%84%EA%B8%B0/quiz/1"})]}),`
`]}),`
`,e(n.h3,{id:"풀이-접근",children:"풀이 접근"}),`
`,i(n.p,{children:["이 문제의 경우 조금 논란이 있을 수 있겠다. 왜냐하면, 아무리 봐도 구름 IDE에서 스택 메모리에 대한 제약조건이 보이지 않기 때문이다. 만약 일반적인 윈도우 환경이라면 보통 스택 메모리를 ",e(n.code,{children:"1MB"})," 정도로 보는데, 그럴 경우에는 ",e(n.code,{children:"DFS"}),"로 맵 탐색을 구현하면 전체 맵의 크기가 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mn,{children:"1000"}),e(n.mo,{children:"×"}),e(n.mn,{children:"1000"})]}),e(n.annotation,{encoding:"application/x-tex",children:"1000 \\times 1000"})]})})}),i(n.span,{className:"katex-html","aria-hidden":"true",children:[i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),e(n.span,{className:"mord",children:"1000"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"×"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"1000"})]})]})]})})," 이므로, ",e(n.code,{children:"stack overflow"}),"가 날 수 있다. 하지만 이것은 환경에 따라 달라질 수 있는 값이므로, ",e(n.code,{children:"DFS"}),"로 풀었다고 ",e(n.code,{children:"RTE"}),"가 나는 것은 조금 넌센스라고 할 수 있겠다. (아니면 문제 조건에 스택 메모리 크기를 명시하면 된다.)"]}),`
`,i(n.p,{children:["아무튼 문제 자체는 간단히 ",e(n.code,{children:"BFS"}),"로 구현할 수 있는 간단한 맵 탐색 문제이다. 맵을 탐색하다가 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[e(n.mrow,{children:e(n.mn,{children:"1"})}),e(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"1"})]})})]})}),"을 발견하면 해당 좌표 기점으로 연결되는 것들을 0으로 만들고 계속 탐색하고를 반복해주면 된다. 간단한 문제인데 위 이슈로 삽질을 좀 했다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <stdio.h>

int M[1010][1010];
int dy[4] = {0, 1, 0, -1};
int dx[4] = {1, 0, -1, 0};

struct P {
    int y, x;
};
P q[2000000];
int qf, qr;
void clear(int y, int x) {
    qf = qr = 0;
    q[qr++] = {y, x};
    while(qf != qr) {
        auto& cur = q[qf++];
        if (M[cur.y][cur.x] == 0) continue;
        M[cur.y][cur.x] = 0;
        for(int i = 0; i < 4; ++i) {
            if (M[cur.y + dy[i]][cur.x + dx[i]] == 1)
                q[qr++] = {cur.y + dy[i], cur.x + dx[i]};
        }
    }
}
int main() {
    int N; scanf("%d", &N);
    for(int i = 1; i <= N; ++i) {
        for(int j = 1; j <= N; ++j) {
            scanf("%d", &M[i][j]);
        }
    }
    int ans = 0;
    for(int i = 1; i <= N; ++i) {
        for(int j = 1; j <= N; ++j) {
            if (M[i][j]) {
                clear(i, j);
                ++ans;
            }
        }
    }
    printf("%d\\n", ans);
    return 0;
}
`})}),`
`,e(m,{}),`
`,e(o,{})]})}function d(a={}){const{wrapper:n}=Object.assign({},r(),a.components);return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=l;c.main=p;export{c as default};
