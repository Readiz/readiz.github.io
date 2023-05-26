import{p as a}from"./BOJ-11727_-79628163.js";import{u as c,j as e,a as t,F as s}from"./ssg-client-a408e234.js";import{C as l}from"./Comment-8a5b5d83.js";import{H as m}from"./Header-39b93b93.js";import{T as p}from"./TagList-19c2c12d.js";import"./index.module-5d0c9a7d.js";function i(r){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code"},c(),r.components);return t(s,{children:[e(m,{}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 2×n 타일링 2"}),`
`,t(n.li,{children:["문제 링크: ",e(n.a,{href:"https://www.acmicpc.net/problem/11727",children:"https://www.acmicpc.net/problem/11727"})]}),`
`]}),`
`,e(n.p,{children:"간단한 DP 연습 문제. 아래 점화식을 N = 3, 4, 5 반복해보면 관찰할 수 있다."}),`
`,e(n.pre,{children:e(n.code,{children:`DP[i] = DP[i-1] + DP[i-2] * 2
`})}),`
`,e(n.p,{children:"N 은 1000보다 작은 정수이므로 위 점화식으로 시간 복잡도 안으로 구하기 가능. 끝."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>\r
using namespace std;\r
\r
int DP[1001] = {0, 1, 3};\r
\r
int main() {\r
    int N;\r
    scanf("%d", &N);\r
\r
    for(int i = 3; i <= N; ++i) {\r
        DP[i] = DP[i-1] + (DP[i-2] << 1);\r
        DP[i] %= 10007;\r
    }\r
\r
    printf("%d\\n", DP[N]);\r
\r
    return 0;\r
}
`})}),`
`,e(p,{}),`
`,e(l,{})]})}function d(r={}){const{wrapper:n}=Object.assign({},c(),r.components);return n?e(n,Object.assign({},r,{children:e(i,r)})):i(r)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=a;o.main=u;export{o as default};
