import{p as c}from"./GRT-Week2_2_-85dca146.js";import{u as l,j as e,a,F as r}from"./ssg-client-33090923.js";import{C as m}from"./Comment-34b6eede.js";import{H as h}from"./Header-97514541.js";import{T as d}from"./TagList-cf2bc13c.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function i(s){const n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mo:"mo",mn:"mn",mi:"mi",annotation:"annotation",pre:"pre"},l(),s.components);return a(r,{children:[e(h,{}),`
`,e(n.h2,{id:"구름톤-챌린지란",children:"구름톤 챌린지란?"}),`
`,a(n.p,{children:[e(n.code,{children:"구름"})," 이라는 곳에서 문제 풀이 챌린지(구름톤 챌린지)를 한다고 해서 참여 중이다. 이벤트 기간 동안 문제가 꾸준이 올라오며, 주에 2회씩 (혹은 그 이상) 챌린지 문제들에 대해 풀이가 가능한 문제들을 풀이해보고, 후기를 남겨보려고 한다."]}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["문제 푸는 곳: ",e(n.a,{href:"https://level.goorm.io/l/challenge/goormthon-challenge",children:"https://level.goorm.io/l/challenge/goormthon-challenge"})]}),`
`,a(n.li,{children:["학습 일기 작성 가이드: ",e(n.a,{href:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8",children:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8"})]}),`
`,a(n.li,{children:["풀이 사용 컨테이너(구름 컨테이너): ",e(n.a,{href:"https://goor.me/8jsC9vbx5TCeaCcRA",children:"https://goor.me/8jsC9vbx5TCeaCcRA"})]}),`
`]}),`
`,e(n.h2,{id:"문제-풀이",children:"문제 풀이"}),`
`,a(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 구름 찾기 깃발"}),`
`,a(n.li,{children:["문제 링크: ",e(n.a,{href:"https://level.goorm.io/exam/195689/%EA%B5%AC%EB%A6%84-%EC%B0%BE%EA%B8%B0-%EA%B9%83%EB%B0%9C/quiz/1",children:"https://level.goorm.io/exam/195689/%EA%B5%AC%EB%A6%84-%EC%B0%BE%EA%B8%B0-%EA%B9%83%EB%B0%9C/quiz/1"})]}),`
`]}),`
`,e(n.h3,{id:"풀이-접근",children:"풀이 접근"}),`
`,a(n.p,{children:[e(n.code,{children:"PS"}),"를 하다보면 높은 확률로 마주치게 되는 전형적인 2차원 맵 탐색 문제. 보통 이런 유형은 ",e(n.code,{children:"dx"}),", ",e(n.code,{children:"dy"}),"를 도입해서 각 방향을 편하게 순회한다. 그리고, 좋은 테크닉이 하나 있는데 경계선에 여유를 두라는 것이다. 예를 들어 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mo,{stretchy:"false",children:"["}),e(n.mn,{children:"1"}),e(n.mo,{separator:"true",children:","}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:"]"})]}),e(n.annotation,{encoding:"application/x-tex",children:"[1, N]"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mopen",children:"["}),e(n.span,{className:"mord",children:"1"}),e(n.span,{className:"mpunct",children:","}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:"]"})]})})]})})," 구간의 배열을 쓰도록 하면 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[e(n.mrow,{children:e(n.mn,{children:"0"})}),e(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"0"})]})})]})}),"과 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"N"}),e(n.mo,{children:"+"}),e(n.mn,{children:"1"})]}),e(n.annotation,{encoding:"application/x-tex",children:"N+1"})]})})}),a(n.span,{className:"katex-html","aria-hidden":"true",children:[a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"+"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"1"})]})]})]})}),"이 경계선이 되고, 이 경계선에는 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[e(n.mrow,{children:e(n.mn,{children:"0"})}),e(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"0"})]})})]})}),"을 채워두면 답에 변함이 없고(문제에 따라 다를 수는 있다), 탐색할 때 경계선 예외처리를 하지 않아도 돼서 구현이 훨씬 편해진다."]}),`
`,e(n.p,{children:"이러한 점만 잘 익히고 있다면 매우 쉽게 통과 가능한 문제이다. 집가서 간만에 지뢰찾기 해야지.."}),`
`,e(n.h3,{id:"샘플-정답-코드",children:"샘플 정답 코드"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <stdio.h>

int dx[8] = {0, 1, 1, 1, 0, -1, -1, -1};
int dy[8] = {1, 1, 0, -1, -1, -1, 0, 1};
int map[1002][1002];
int main() {
    int N, K; scanf("%d %d", &N, &K);
    for(int y = 1; y <= N; ++y) {
        for(int x = 1; x <= N; ++x) {
            scanf("%d", &map[y][x]);
        }
    }
    int ans = 0;
    for(int y = 1; y <= N; ++y) {
        for(int x = 1; x <= N; ++x) {
            if (map[y][x] == 0) {
                int ck = 0;
                for(int k = 0; k < 8; ++k) {
                    if (map[y + dy[k]][x + dx[k]] == 1) ++ck;
                }
                if (ck == K) ++ans;
            }
        }
    }
    printf("%d\\n", ans);

    return 0;
}
`})}),`
`,e(d,{}),`
`,e(m,{})]})}function o(s={}){const{wrapper:n}=Object.assign({},l(),s.components);return n?e(n,Object.assign({},s,{children:e(i,s)})):i(s)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=c;t.main=p;export{t as default};
