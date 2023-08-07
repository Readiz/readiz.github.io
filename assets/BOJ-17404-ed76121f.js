import{p as r}from"./BOJ-17404_-79628163.js";import{u as o,j as c,a as t,F}from"./ssg-client-ce5d42f7.js";import{C as d}from"./Comment-8a585fdd.js";import{H as l}from"./Header-2477fdaf.js";import{T as D}from"./TagList-615044ac.js";import"./index.module-caf545e8.js";function e(i){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code"},o(),i.components);return t(F,{children:[c(l,{}),`
`,t(n.ul,{children:[`
`,c(n.li,{children:"문제 제목: RGB거리 2"}),`
`,t(n.li,{children:["문제 링크: ",c(n.a,{href:"https://www.acmicpc.net/problem/17404",children:"https://www.acmicpc.net/problem/17404"})]}),`
`]}),`
`,c(n.p,{children:"기존 RGB거리 문제의 강화판. 그래도 최근 DP 짬밥이 있어서 그런지 처음에 막혔어도 힌트 안보고 최종 풀이에 성공했다. 풀이 방식에는 여러가지가 있어 보이는데, 나는 DP 차원을 확장하는 것으로 해결했다."}),`
`,c(n.pre,{children:c(n.code,{children:`DP[sc][c][i] // 시작 color가 sc이고, i지점을 c로 칠했을 때의 비용 최소값
`})}),`
`,t(n.p,{children:["이렇게 정의해두고, ",c(n.code,{children:"1"}),", ",c(n.code,{children:"2"}),"는 미리 계산해두고 ",c(n.code,{children:"N-1"}),"까지 이전 좌표만 보면서 구한 다음에, ",c(n.code,{children:"N"})," 번째는 값이 확정됨을 이용해서 구한다. (N번째는 sc에서 쓴 색과, N-1에서 쓴 두 색을 사용할 수 없다)"]}),`
`,t(n.p,{children:["물론, ",c(n.code,{children:"2"}),"를 미리 계산할 때, ",c(n.code,{children:"DP[0][0][2]"})," 과 같은 값은 존재할 수 없다. 이럴 경우 큰 값을 넣어두어서 스킵하게 만들어야겠다. (최종 결과가 최소를 찾는 것이므로 무시될 수 있도록)"]}),`
`,t(n.p,{children:["또, 나중에 다른 사람들 풀이를 보니 ",c(n.code,{children:"sc"}),"를 없애고, 전체 loop을 세번 돌리는 방법도 있더라. 이건 참고."]}),`
`,c(n.pre,{children:c(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

int DP[3][3][1001];
int main() {
    int N; scanf("%d", &N);
    int cost[3][1001];
    for(int i = 1; i <= N; ++i) {
        int r, g, b;
        scanf("%d %d %d", &r, &g, &b);
        cost[0][i] = r;
        cost[1][i] = g;
        cost[2][i] = b;
    }
    // DP[sc][c][i] // 1위치의 색상이 sc이며, 색상 c로 i번째를 칠했을 때의 비용의 최소값
    DP[0][0][2] = 0x4FFFFFFF; // 불가능한 case
    DP[1][1][2] = 0x4FFFFFFF;
    DP[2][2][2] = 0x4FFFFFFF;
    DP[0][1][2] = cost[0][1] + cost[1][2];
    DP[0][2][2] = cost[0][1] + cost[2][2];
    DP[1][0][2] = cost[1][1] + cost[0][2];
    DP[1][2][2] = cost[1][1] + cost[2][2];
    DP[2][0][2] = cost[2][1] + cost[0][2];
    DP[2][1][2] = cost[2][1] + cost[1][2];

    // 2~N-1까지 보고,
    // N번째의 경우 N-1과 1을 동시에 보고 선택한다. (사실 선택의 여지가 없음)
    for(int sc = 0; sc < 3; ++sc) {
        for(int i = 3; i <= N-1; ++i) {
            for(int c = 0; c < 3; ++c) {
                int v1 = cost[c][i] + DP[sc][(c+1)%3][i - 1];
                int v2 = cost[c][i] + DP[sc][(c+2)%3][i - 1];
                DP[sc][c][i] = min(v1, v2);
            }
        }
    }
    // N 위치를 채운다.
    DP[0][0][N] = 0x4FFFFFFF;
    DP[1][1][N] = 0x4FFFFFFF;
    DP[2][2][N] = 0x4FFFFFFF;
    DP[0][1][N] = min(DP[0][0][N-1], DP[0][2][N-1]) + cost[1][N];
    DP[0][2][N] = min(DP[0][0][N-1], DP[0][1][N-1]) + cost[2][N];
    DP[1][0][N] = min(DP[1][1][N-1], DP[1][2][N-1]) + cost[0][N];
    DP[1][2][N] = min(DP[1][0][N-1], DP[1][1][N-1]) + cost[2][N];
    DP[2][0][N] = min(DP[2][1][N-1], DP[2][2][N-1]) + cost[0][N];
    DP[2][1][N] = min(DP[2][0][N-1], DP[2][2][N-1]) + cost[1][N];

    int min = 0x7FFFFFFF;
    for(int i = 0; i < 3; ++i) {
        for(int j = 0; j < 3; ++j) {
            if (DP[i][j][N] < min) min = DP[i][j][N];
        }
    }

    printf("%d\\n", min);

    return 0;
}
`})}),`
`,c(D,{}),`
`,c(d,{})]})}function N(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?c(n,Object.assign({},i,{children:c(e,i)})):e(i)}const P=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=r;s.main=P;export{s as default};
