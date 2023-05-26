import{p as l}from"./CF-871H_-94981dd2.js";import{u as t,j as r,a as i,F as a}from"./ssg-client-a408e234.js";import{C as d}from"./Comment-8a5b5d83.js";import{H as s}from"./Header-39b93b93.js";import{T as p}from"./TagList-19c2c12d.js";import"./index.module-5d0c9a7d.js";function o(e){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",code:"code",pre:"pre",h3:"h3"},t(),e.components);return i(a,{children:[r(s,{}),`
`,i(n.ul,{children:[`
`,r(n.li,{children:"문제 제목: Don't Blame Me"}),`
`,i(n.li,{children:["문제 링크: ",r(n.a,{href:"https://codeforces.com/contest/1829/problem/H",children:"https://codeforces.com/contest/1829/problem/H"})]}),`
`]}),`
`,i(n.p,{children:["뭔가 발상이 잘 안떠오른다 싶으면 DP인듯. 시험 끝나고 반응을 보니 코포 DP 대표유형(?) 취급이다. 익숙해질 필요가 있는듯. ",r(n.code,{children:"10^9 + 7"})," 따위와 같은 수로 나누는 것도 DP 신호 중 하나. DP는 꾸준한 연습만이 살 길."]}),`
`,i(n.p,{children:["문제는 원소끼리 ",r(n.code,{children:"AND"})," operation을 한 뒤 k개의 비트가 켜져있는 있는 경우의 수를 세는 것."]}),`
`,i(n.p,{children:[r(n.code,{children:"N * 64"})," 만큼의 DP 배열을 만들고, 아래와 같은 세 case를 빠뜨리지 않도록 한다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`// i번째를 채우는 상황\r
// 기본값 세팅\r
DP[i][A[i]] = 1;\r
// i번째 원소를 선택하지 않는 경우는 i-1번째의 경우의 수와 같다.\r
DP[i][j] += DP[i-1][j];\r
// i번째 원소를 선택하는 경우 값은 타겟 값이 j & A[i]로 변경된다.\r
DP[i][j & A[i]] += DP[i-1][j];
`})}),`
`,r(n.p,{children:"그리고 결과를 출력할 때는 DP[N][j]를 보되, j는 popcnt 가 K가 되는 경우만 accept 한다."}),`
`,r(n.h3,{id:"solution",children:"Solution"}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`int N, K;\r
int A[200'001];\r
ll DP[200'001][64];\r
ll MOD = 1'000'000'007;\r
void solve() {\r
    scanf("%d %d", &N, &K);\r
\r
    _D("N: %d, K: %d\\n", N, K);\r
    for(R int i = 1; i <= N; ++i) {\r
        scanf("%d", &A[i]);\r
        for(R int j = 0; j < 64; ++j) {\r
            DP[i][j] = 0;\r
        }\r
    }\r
\r
    for(R int i = 1; i <= N; ++i) {\r
        DP[i][A[i]] += 1;\r
        for(int j = 0; j < 64; ++j) { // prev value\r
            DP[i][j] += DP[i-1][j]; // 새로운 값을 쓰지 않는 경우\r
            DP[i][j] %= MOD;\r
\r
            int nv = j & A[i];\r
            DP[i][nv] += DP[i-1][j];\r
            DP[i][nv] %= MOD;\r
        }\r
    }\r
\r
    ll ans = 0;\r
    for(int j = 0; j < 64; ++j) {\r
        if (cntbit(j) == K) {\r
            ans += DP[N][j];\r
            ans %= MOD;\r
            _D("DP[%d][%d] = %d\\n", N, j, DP[N][j]);\r
        }\r
    }\r
    printf("%lld\\n", ans);\r
}
`})}),`
`,r(p,{}),`
`,r(d,{})]})}function j(e={}){const{wrapper:n}=Object.assign({},t(),e.components);return n?r(n,Object.assign({},e,{children:r(o,e)})):o(e)}const D=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=l;c.main=D;export{c as default};
