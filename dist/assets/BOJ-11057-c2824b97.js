import{p as a}from"./BOJ-11057_-79628163.js";import{u as o,j as r,a as t,F as s}from"./ssg-client-a408e234.js";import{C as l}from"./Comment-8a5b5d83.js";import{H as p}from"./Header-39b93b93.js";import{T as d}from"./TagList-19c2c12d.js";import"./index.module-5d0c9a7d.js";function i(e){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code"},o(),e.components);return t(s,{children:[r(p,{}),`
`,t(n.ul,{children:[`
`,r(n.li,{children:"문제 제목: 오르막 수"}),`
`,t(n.li,{children:["문제 링크: ",r(n.a,{href:"https://www.acmicpc.net/problem/11057",children:"https://www.acmicpc.net/problem/11057"})]}),`
`]}),`
`,r(n.p,{children:"간단한 DP 연습 문제. 오르막 수는 n번째 자리에 올 수 있는 수가 n - 1번째 자리에 올 수 있는 수로 정해진다."}),`
`,r(n.p,{children:"k라는 수가 n번째 자리에 올 수 있는 경우의 수는 n - 1번째 자리에서 0 ~ k까지 올 수 있는 수의 합이 된다."}),`
`,r(n.pre,{children:r(n.code,{children:`DP[k][n] = DP[k][n-1] + DP[k-1][n-1] + ... DP[0][n-1]
`})}),`
`,r(n.p,{children:"경우의 수를 셀 때에는 0번째 위치의 경우의 수를 1로 초기화해서 풀어야 함에 유의."}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>\r
using namespace std;\r
\r
int DP[10][1001];\r
int main() {\r
    int N;\r
    scanf("%d", &N);\r
\r
    for(int i = 0; i < 10; ++i) {\r
        DP[i][0] = 1;\r
    }\r
\r
    for(int n = 1; n <= N; ++n) {\r
        for(int K = 0; K < 10; ++K) { // n번째 수가 K일 때 수 세기\r
            int& T = DP[K][n];\r
            for(int k = 0; k <= K; ++k) {\r
                T += DP[k][n - 1];\r
            }\r
            T %= 10007;\r
        }\r
    }\r
\r
    printf("%d\\n", DP[9][N]);\r
    return 0;\r
}
`})}),`
`,r(d,{}),`
`,r(l,{})]})}function m(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?r(n,Object.assign({},e,{children:r(i,e)})):i(e)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=a;c.main=u;export{c as default};
