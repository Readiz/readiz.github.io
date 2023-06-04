import{p as a}from"./BOJ-11057_-79628163.js";import{u as o,j as e,a as i,F as s}from"./ssg-client-cd28f32c.js";import{C as l}from"./Comment-ea478362.js";import{H as p}from"./Header-108545ea.js";import{T as d}from"./TagList-11cbee6f.js";import"./index.module-caf545e8.js";function r(t){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code"},o(),t.components);return i(s,{children:[e(p,{}),`
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
`,e(d,{}),`
`,e(l,{})]})}function m(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e(n,Object.assign({},t,{children:e(r,t)})):r(t)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=a;c.main=u;export{c as default};
