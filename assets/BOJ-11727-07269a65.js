import{p as l}from"./BOJ-11727_-0ac3e60c.js";import{u as r,j as e,a as t,F as a}from"./ssg-client-334565da.js";import{C as s}from"./Comment-9a96d3f5.js";function c(i){const n=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code"},r(),i.components);return t(a,{children:[e(n.h1,{id:"boj-11727",children:"BOJ-11727"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 2×n 타일링 2"}),`
`,t(n.li,{children:["문제 링크: ",e(n.a,{href:"https://www.acmicpc.net/problem/11727",children:"https://www.acmicpc.net/problem/11727"})]}),`
`]}),`
`,e(n.p,{children:"간단한 DP 연습 문제. 아래 점화식을 N = 3, 4, 5 반복해보면 관찰할 수 있다."}),`
`,e(n.pre,{children:e(n.code,{children:`DP[i] = DP[i-1] + DP[i-2] * 2
`})}),`
`,e(n.p,{children:"N 은 1000보다 작은 정수이므로 위 점화식으로 시간 복잡도 안으로 구하기 가능. 끝."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

int DP[1001] = {0, 1, 3};

int main() {
    int N;
    scanf("%d", &N);

    for(int i = 3; i <= N; ++i) {
        DP[i] = DP[i-1] + (DP[i-2] << 1);
        DP[i] %= 10007;
    }

    printf("%d\\n", DP[N]);

    return 0;
}
`})}),`
`,e(s,{})]})}function d(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e(n,Object.assign({},i,{children:e(c,i)})):c(i)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=l;o.main=p;export{o as default};
