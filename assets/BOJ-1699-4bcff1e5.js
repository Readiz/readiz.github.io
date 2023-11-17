import{p as c}from"./BOJ-1699_-d96fd751.js";import{u as l,j as e,a as s,F as m}from"./ssg-client-3ddc7dd7.js";import{C as r}from"./Comment-409a9607.js";import{H as h}from"./Header-c1b83c6e.js";import{T as d}from"./TagList-3ecbadc5.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function i(a){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",mn:"mn",annotation:"annotation",msup:"msup",code:"code",msqrt:"msqrt",svg:"svg",path:"path",h3:"h3",pre:"pre"},l(),a.components);return s(m,{children:[e(h,{}),`
`,s(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 제곱수의 합"}),`
`,s(n.li,{children:["문제 링크: ",e(n.a,{href:"https://www.acmicpc.net/problem/1699",children:"https://www.acmicpc.net/problem/1699"})]}),`
`]}),`
`,e(n.p,{children:"오랜만에 tag: DP로 검색해서 풀어본 문제. DP 문제는 실버까지는 굉장히 재미있다. 골드부터는 관찰이 좀 어려워져서 풀이가 힘들지만.. (23년 8월 기준) PS의 빈출 영역이기 때문에 꾸준히 연습해야 한다."}),`
`,e(n.h2,{id:"풀이",children:"풀이"}),`
`,s(n.p,{children:["이 문제 같은 경우 수의 범위에 주목해보면 ",e(n.span,{className:"math math-inline",children:s(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(n.semantics,{children:[s(n.mrow,{children:[e(n.mi,{children:"N"}),e(n.mo,{children:"≤"}),e(n.mn,{children:"10000"})]}),e(n.annotation,{encoding:"application/x-tex",children:"N \\leq 10000"})]})})}),s(n.span,{className:"katex-html","aria-hidden":"true",children:[s(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.8193em",verticalAlign:"-0.136em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),e(n.span,{className:"mrel",children:"≤"}),e(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"10000"})]})]})]})})," 인데, ",e(n.span,{className:"math math-inline",children:s(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(n.semantics,{children:[s(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),s(n.msup,{children:[e(n.mi,{children:"N"}),e(n.mn,{children:"2"})]}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(N^2)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:s(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),s(n.span,{className:"mord",children:[e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"msupsub",children:e(n.span,{className:"vlist-t",children:e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.8141em"},children:s(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e(n.span,{className:"pstrut",style:{height:"2.7em"}}),e(n.span,{className:"sizing reset-size6 size3 mtight",children:e(n.span,{className:"mord mtight",children:"2"})})]})})})})})]}),e(n.span,{className:"mclose",children:")"})]})})]})}),"로는 ",e(n.code,{children:"TLE"}),"가 된다. 그래서 조금 머리를 굴려보면, 루프 안쪽에서 돌 때는 수의 범위가 제곱수이므로 ",e(n.span,{className:"math math-inline",children:s(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(n.semantics,{children:[s(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"N"}),e(n.msqrt,{children:e(n.mi,{children:"N"})}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(N \\sqrt N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:s(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1.1767em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mord sqrt",children:s(n.span,{className:"vlist-t vlist-t2",children:[s(n.span,{className:"vlist-r",children:[s(n.span,{className:"vlist",style:{height:"0.9267em"},children:[s(n.span,{className:"svg-align",style:{top:"-3em"},children:[e(n.span,{className:"pstrut",style:{height:"3em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em",paddingLeft:"0.833em"},children:"N"})]}),s(n.span,{style:{top:"-2.8867em"},children:[e(n.span,{className:"pstrut",style:{height:"3em"}}),e(n.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:e(n.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:e(n.path,{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})})})]})]}),e(n.span,{className:"vlist-s",children:"​"})]}),e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.1133em"},children:e(n.span,{})})})]})}),e(n.span,{className:"mclose",children:")"})]})})]})}),"의 풀이법을 떠올릴 수 있었다."]}),`
`,e(n.h3,{id:"1차-정답-코드",children:"1차 정답 코드"}),`
`,s(n.p,{children:["다만 모든 ",e(n.code,{children:"N"}),"에 대해서 최소가 되는 제곱 수의 합으로 몇번만에 업데이트 되는지에 대한 확신이 없어서 ",e(n.code,{children:"set"}),"을 섞어서 풀이했다. 나중에 생각해보니 필요가 없는 과정이었지만.."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef unsigned long long ull;

int main() {
    int N; scanf("%d", &N);

    vector<int> v; v.resize(N + 1);
    fill(v.begin(), v.end(), 100000);
    vector<int> squares;
    vector<int> tmp; tmp.resize(N + 1);
    set<int> S;
    for(int i = 1; i <= N; ++i) S.insert(i);
    for(int i = 1; i * i <= N; ++i) {
        v[i*i] = 1;
        squares.push_back(i*i);
        S.erase(i*i);
    }
    while(S.size() > 0) {
        for(int i = 1; i <= N; ++i) {
            for(auto& s: squares) {
                if (i + s <= N) {
                    if (v[i + s] > v[i] + 1) {
                        v[i + s] = v[i] + 1;
                        S.erase(i + s);
                    }
                } else {
                    break;
                }
            }
        }
    }
    printf("%d\\n", v[N]);

    return 0;
}
`})}),`
`,e(n.h3,{id:"최종-정답-코드",children:"최종 정답 코드"}),`
`,s(n.p,{children:["위 코드가 깔끔하지 못해서 ",e(n.code,{children:"set"}),"을 사용한 부분을 어떻게 제거할지 고민해보니 적절한 초기값 세팅으로 ",e(n.code,{children:"set"}),"을 없앨 수 있었다. 초기값은 ",e(n.span,{className:"math math-inline",children:s(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(n.semantics,{children:[s(n.mrow,{children:[e(n.mn,{children:"1"}),e(n.mo,{children:"="}),s(n.msup,{children:[e(n.mn,{children:"1"}),e(n.mn,{children:"2"})]})]}),e(n.annotation,{encoding:"application/x-tex",children:"1 = 1^2"})]})})}),s(n.span,{className:"katex-html","aria-hidden":"true",children:[s(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"1"}),e(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),e(n.span,{className:"mrel",children:"="}),e(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.8141em"}}),s(n.span,{className:"mord",children:[e(n.span,{className:"mord",children:"1"}),e(n.span,{className:"msupsub",children:e(n.span,{className:"vlist-t",children:e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.8141em"},children:s(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e(n.span,{className:"pstrut",style:{height:"2.7em"}}),e(n.span,{className:"sizing reset-size6 size3 mtight",children:e(n.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]})}),"임을 이용해서 세팅한다. 아래 코드가 최종 제출 코드."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef unsigned long long ull;

int main() {
    int N; scanf("%d", &N);

    int dp[100001];

    for(int i = 0; i <= N; ++i) dp[i] = i;
    for(int i = 0; i <= N; ++i) {
        for(int j = 2; j * j <= N; ++j) {
            int s = j * j;
            if (i + s <= N) {
                if (dp[i + s] > dp[i] + 1) {
                    dp[i + s] = dp[i] + 1;
                }
            } else {
                break;
            }
        }
    }
    printf("%d\\n", dp[N]);

    return 0;
}
`})}),`
`,e(d,{}),`
`,e(r,{})]})}function p(a={}){const{wrapper:n}=Object.assign({},l(),a.components);return n?e(n,Object.assign({},a,{children:e(i,a)})):i(a)}const o=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=c;t.main=o;export{t as default};
