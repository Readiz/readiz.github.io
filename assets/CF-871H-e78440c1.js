import{p as l}from"./CF-871H_-94981dd2.js";import{u as c,j as e,a as o,F as a}from"./ssg-client-d5ee53bc.js";import{C as d}from"./Comment-8a8b1519.js";import{H as s}from"./Header-208f81d5.js";import{T as p}from"./TagList-c607b316.js";import"./index.module-caf545e8.js";function t(i){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",code:"code",pre:"pre",h3:"h3"},c(),i.components);return o(a,{children:[e(s,{}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: Don't Blame Me"}),`
`,o(n.li,{children:["문제 링크: ",e(n.a,{href:"https://codeforces.com/contest/1829/problem/H",children:"https://codeforces.com/contest/1829/problem/H"})]}),`
`]}),`
`,o(n.p,{children:["뭔가 발상이 잘 안떠오른다 싶으면 DP인듯. 시험 끝나고 반응을 보니 코포 DP 대표유형(?) 취급이다. 익숙해질 필요가 있는듯. ",e(n.code,{children:"10^9 + 7"})," 따위와 같은 수로 나누는 것도 DP 신호 중 하나. DP는 꾸준한 연습만이 살 길."]}),`
`,o(n.p,{children:["문제는 원소끼리 ",e(n.code,{children:"AND"})," operation을 한 뒤 k개의 비트가 켜져있는 있는 경우의 수를 세는 것."]}),`
`,o(n.p,{children:[e(n.code,{children:"N * 64"})," 만큼의 DP 배열을 만들고, 아래와 같은 세 case를 빠뜨리지 않도록 한다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`// i번째를 채우는 상황
// 기본값 세팅
DP[i][A[i]] = 1;
// i번째 원소를 선택하지 않는 경우는 i-1번째의 경우의 수와 같다.
DP[i][j] += DP[i-1][j];
// i번째 원소를 선택하는 경우 값은 타겟 값이 j & A[i]로 변경된다.
DP[i][j & A[i]] += DP[i-1][j];
`})}),`
`,e(n.p,{children:"그리고 결과를 출력할 때는 DP[N][j]를 보되, j는 popcnt 가 K가 되는 경우만 accept 한다."}),`
`,e(n.h3,{id:"solution",children:"Solution"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int N, K;
int A[200'001];
ll DP[200'001][64];
ll MOD = 1'000'000'007;
void solve() {
    scanf("%d %d", &N, &K);

    _D("N: %d, K: %d\\n", N, K);
    for(R int i = 1; i <= N; ++i) {
        scanf("%d", &A[i]);
        for(R int j = 0; j < 64; ++j) {
            DP[i][j] = 0;
        }
    }

    for(R int i = 1; i <= N; ++i) {
        DP[i][A[i]] += 1;
        for(int j = 0; j < 64; ++j) { // prev value
            DP[i][j] += DP[i-1][j]; // 새로운 값을 쓰지 않는 경우
            DP[i][j] %= MOD;

            int nv = j & A[i];
            DP[i][nv] += DP[i-1][j];
            DP[i][nv] %= MOD;
        }
    }

    ll ans = 0;
    for(int j = 0; j < 64; ++j) {
        if (cntbit(j) == K) {
            ans += DP[N][j];
            ans %= MOD;
            _D("DP[%d][%d] = %d\\n", N, j, DP[N][j]);
        }
    }
    printf("%lld\\n", ans);
}
`})}),`
`,e(p,{}),`
`,e(d,{})]})}function j(i={}){const{wrapper:n}=Object.assign({},c(),i.components);return n?e(n,Object.assign({},i,{children:e(t,i)})):t(i)}const D=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=l;r.main=D;export{r as default};
