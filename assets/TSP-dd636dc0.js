import{p as a}from"./TSP_-affce692.js";import{u as o,j as t,a as i,F as s}from"./ssg-client-1f02da02.js";import{C as p}from"./Comment-818b3b61.js";import{T as l}from"./TagList-3b97e87e.js";import{H as u}from"./Header-366ddb64.js";import"./index.module-caf545e8.js";function r(e){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre",code:"code"},o(),e.components);return i(s,{children:[t(u,{}),`
`,t(n.h2,{id:"tsp",children:"TSP"}),`
`,t(n.p,{children:"일단 표제만 정리해두고, 나중에 심도있게 정리해볼 예정."}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["외판원 순회 문제: ",t(n.a,{href:"https://www.acmicpc.net/problem/2098",children:"https://www.acmicpc.net/problem/2098"})]}),`
`]}),`
`,t(n.h3,{id:"bottom-up-solution",children:"Bottom-up solution"}),`
`,t(n.pre,{children:t(n.code,{className:"language-cpp",children:`int N;
ll w[16][16];
ll dp[1<<16][16];
// bit dp
// dp[4][110111]
// 0, 1, 3, 4, 5 번째 도시를 들렀고, 4번째 도시를 마지막에 들른 상태임

void solve() {
    scanf("%d", &N);
    FOR(i,0,N) {
        FOR(j,0,N) {
            scanf("%lld", &w[i][j]);
        }
    }

    memset(dp, 0x3F, sizeof(ll) * (1<<16) * 16);
    
    int allstate = 1 << N;
    for(int state = 1; state < allstate; ++state) {
        for(int cur = 0; cur < N; ++cur) {
            if ((1<<cur) & state) { // 이 때만 유효함
                if (__builtin_popcount(state) == 1) {
                    if (w[0][cur]) dp[state][cur] = w[0][cur]; // 0에서 출발한 것으로 고른다.
                    continue;
                }

                // 이전 기준으로 풀기
                int pstate = state ^ (1<<cur);
                for(int prev = 0; prev < N; ++prev) {
                    if (cur == prev) continue;
                    if (w[prev][cur] == 0) continue;
                    if ((1<<prev) & state) { // 이전에 있어야 함! cur은 없는거고
                        dp[state][cur] = min(dp[state][cur], dp[pstate][prev] + w[prev][cur]);
                    }
                }
                // next 기준으로 풀기
                // for(int next = 0; next < N; ++next) {
                //     if (cur == next) continue;
                //     if (!((1<<next) & state)) continue; // state에 있는 점만 취급함
                //     if (w[cur][next] == 0) continue; // 길 있어야 함

                //     dp[state][next] = min(dp[state][next], dp[state ^ (1<<next)][cur] + w[cur][next]);
                // }
            }
        }
    }

    // for(int i = 0; i < N; ++i) {
    //     printf("%lld\\n", dp[(1<<N) - 1][i]);
    // }

    printf("%lld\\n", dp[(1<<N) - 1][0]); // 0: 한바퀴 돌고 다시 0으로 오는 경우를 봐야 함
}
`})}),`
`,t(l,{}),`
`,t(p,{})]})}function d(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t(n,Object.assign({},e,{children:t(r,e)})):r(e)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=a;c.main=m;export{c as default};
