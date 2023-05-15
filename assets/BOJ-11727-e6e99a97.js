import{p as a}from"./BOJ-11727_-79628163.js";import{u as r,j as e,a as i,F as l}from"./ssg-client-e81bfce5.js";import{C as s}from"./Comment-4dbb03b6.js";import{H as d}from"./Header-0957adc0.js";function c(t){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code"},r(),t.components);return i(l,{children:[e(d,{}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 2×n 타일링 2"}),`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://www.acmicpc.net/problem/11727",children:"https://www.acmicpc.net/problem/11727"})]}),`
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
`,e(s,{})]})}function p(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e(n,Object.assign({},t,{children:e(c,t)})):c(t)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=a;o.main=m;export{o as default};
