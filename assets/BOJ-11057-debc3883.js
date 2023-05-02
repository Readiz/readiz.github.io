import{p as l}from"./BOJ-11057_-c9ffb788.js";import{u as r,j as e,a as i,F as a}from"./ssg-client-b076afcb.js";import{C as s}from"./Comment-c9b0c251.js";function c(t){const n=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code"},r(),t.components);return i(a,{children:[e(n.h1,{id:"boj-11057",children:"BOJ-11057"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 오르막 수"}),`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://www.acmicpc.net/problem/11057",children:"https://www.acmicpc.net/problem/11057"})]}),`
`]}),`
`,e(n.p,{children:"간단한 DP 연습 문제. 오르막 수는 n번째 자리에 올 수 있는 수가 n - 1번째 자리에 올 수 있는 수로 정해진다."}),`
`,e(n.p,{children:"k라는 수가 n번째 자리에 올 수 있는 경우의 수는 n - 1번째 자리에서 0 ~ k까지 올 수 있는 수의 합이 된다."}),`
`,e(n.pre,{children:e(n.code,{children:`DP[k][n] = DP[k][n-1] + DP[k-1][n-1] + ... DP[0][n-1]
`})}),`
`,e(n.p,{children:"경우의 수를 셀 때에는 0번째 위치의 경우의 수를 1로 초기화해서 풀어야 함에 유의."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

int DP[10][1001];
int main() {
    int N;
    scanf("%d", &N);

    for(int i = 0; i < 10; ++i) {
        DP[i][0] = 1;
    }

    for(int n = 1; n <= N; ++n) {
        for(int K = 0; K < 10; ++K) { // n번째 수가 K일 때 수 세기
            int& T = DP[K][n];
            for(int k = 0; k <= K; ++k) {
                T += DP[k][n - 1];
            }
            T %= 10007;
        }
    }

    printf("%d\\n", DP[9][N]);
    return 0;
}
`})}),`
`,e(s,{})]})}function d(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e(n,Object.assign({},t,{children:e(c,t)})):c(t)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=l;o.main=p;export{o as default};
