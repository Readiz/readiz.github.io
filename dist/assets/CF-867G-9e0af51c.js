import{p as t}from"./CF-867G_-54163220.js";import{u as c,j as r,a as i,F as d}from"./ssg-client-5ec444fe.js";import{C as o}from"./Comment-5f174caf.js";import{H as a}from"./Header-4f3c1253.js";function e(l){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",ol:"ol",code:"code",h3:"h3",pre:"pre"},c(),l.components);return i(d,{children:[r(a,{}),`
`,i(n.ul,{children:[`
`,r(n.li,{children:"문제 제목: Magin Triples"}),`
`,i(n.li,{children:["문제 링크: ",r(n.a,{href:"https://codeforces.com/contest/1822/problem/G1",children:"G1"})," ",r(n.a,{href:"https://codeforces.com/contest/1822/problem/G2",children:"G2"})]}),`
`]}),`
`,r(n.p,{children:"루트로 줄이기 문제. 알고 있는 기법이라 생각하는데 늘 실전에서는 약하다."}),`
`,r(n.p,{children:"어떻게 생각하는 것이 좋냐면, 예를들어 10^5 정도의 수가 되었을 때, 이 수로 n^2 알고리즘을 돌리게 되면 Timeout이 난다는 점이다."}),`
`,r(n.p,{children:"보통 10억 정도의 연산량 (=10^9)이 될 때 1초 정도 연산 시간이 소요된다고 보면, 10^5의 수는 n^2으로 돌면, 시간초과가 날 것이다."}),`
`,r(n.p,{children:"이럴 떄 루트로 줄이면 확실하게 풀이가 가능."}),`
`,r(n.p,{children:"포인트가 여러가지가 있는데,"}),`
`,i(n.ol,{children:[`
`,i(n.li,{children:["주어진 수의 범위가 Easy에서 10^6, Hard에서 10^9인 점",`
`,i(n.ol,{children:[`
`,r(n.li,{children:"10^6이면 b를 2~1000 까지 고정해서 루프를 돌아도 된다."}),`
`,i(n.li,{children:["10^9이면 중간수 A_j에 따라 범위를 유동적으로 나눠서 푼다. (아래 풀이 참고)",`
`,i(n.ol,{children:[`
`,r(n.li,{children:"10^6까지의 숫자는 10^3만큼의 루프를 돌면 그 divisor들을 모두 구할 수 있는 포인트를 기억."}),`
`,r(n.li,{children:"위가 성립하는 이유는 10 = 2 * 5에서 2를 찾으면 반대편 5가 자동으로 튀어나오기 때문"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,r(n.li,{children:"N의 수가 10^5라서 일반적인 O(N^2) 알고리즘은 적용이 어려운 점"}),`
`,r(n.li,{children:"중복되는 수의 처리가 필요한 점"}),`
`,i(n.li,{children:[r(n.code,{children:"map"}),"이 ",r(n.code,{children:"unordered_map"})," 보다 오히려 빠른 점 (!!)",`
`,i(n.ol,{children:[`
`,r(n.li,{children:"대체 어느 지점부터 map이 더 빠른 것인지?"}),`
`]}),`
`]}),`
`]}),`
`,r(n.h3,{id:"easy-solution",children:"Easy Solution"}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`\r
int N;\r
ll A[200010];\r
ll B[200010];\r
void solve() {\r
    scanf("%d", &N);\r
    FOR(i,0,N) {\r
        scanf("%lld", &A[i]);\r
    }\r
    sort(A, A+N);\r
    ll prev = -1;\r
    int P = 0;\r
    unordered_map<ll,int> cnt;\r
    for(int i = 0; i < N; ++i) {\r
        if (prev != A[i]) {\r
            cnt[A[i]] = 1;\r
            B[P++] = A[i];\r
        } else {\r
            cnt[A[i]]++;\r
        }\r
        prev = A[i];\r
    }\r
 \r
    ll ans = 0;\r
    for(int i = 0; i < P; ++i) {\r
        ll s = B[i];\r
        ll cs = cnt[s];\r
        for(int b = 2; b <= 1000; ++b) {\r
            if (s * b * b > 1000000000) break;\r
            if (cnt.find(s * b) != cnt.end() && cnt.find(s * b * b) != cnt.end()) {\r
                ans += cs * cnt[s * b] * cnt[s * b * b];\r
                _D("%d %d %d\\n", s, s * b, s * b * b);\r
            }\r
        }\r
        // b == 1인 케이스\r
        if (cs >= 3) {\r
            // 하나는 뽑혔고, 나머지 두개를 뽑는 case\r
            ans += cs * (cs - 1) * (cs - 2);\r
        }\r
    }\r
    printf("%lld\\n", ans);\r
}
`})}),`
`,r(n.h3,{id:"hard-solution",children:"Hard Solution"}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`int N;\r
ll A[200010];\r
ll B[200010];\r
void solve() {\r
    scanf("%d", &N);\r
    FOR(i,0,N) {\r
        scanf("%lld", &A[i]);\r
    }\r
    sort(A, A+N);\r
    ll prev = -1;\r
    int P = 0;\r
    map<ll,ll> cnt;\r
    for(int i = 0; i < N; ++i) {\r
        if (prev != A[i]) {\r
            cnt[A[i]] = 1;\r
            B[P++] = A[i];\r
        } else {\r
            cnt[A[i]]++;\r
        }\r
        prev = A[i];\r
    }\r
 \r
    ll ans = 0;\r
    for(int j = 0; j < P; ++j) {\r
        ll s = B[j];\r
        ll cs = cnt[s];\r
        if (s <= 1'000'000) {\r
            for(ll b = 2; b * b <= s; ++b) {\r
                if (s % b != 0) continue;\r
                ll i = s / b;\r
                ll k = s * b;\r
                _D("Checking %d, %d, %d...\\n", i, s, k);\r
                if (cnt.find(i) != cnt.end() && cnt.find(k) != cnt.end()) {\r
                    ans += cnt[i] * cnt[k] * cs;\r
                }\r
                if (b * b != s) {\r
                    ll b = i;\r
                    i = s / b;\r
                    k = s * b;\r
                    _D("Checking %d, %d, %d...\\n", i, s, k);\r
                    if (cnt.find(i) != cnt.end() && cnt.find(k) != cnt.end()) {\r
                        ans += cnt[i] * cnt[k] * cs;\r
                    }\r
                }\r
            }\r
            if (s != 1) {\r
                ll i = 1;\r
                ll k = s * s;\r
                _D("Checking %d, %d, %d...\\n", i, s, k);\r
                if (cnt.find(i) != cnt.end() && cnt.find(k) != cnt.end()) {\r
                    ans += cnt[i] * cnt[k] * cs;\r
                }\r
            }\r
        } else {\r
            for(ll b = 2; b <= 1000; ++b) {\r
                if (s * b > 1'000'000'000) break;\r
                if (s % b != 0) continue;\r
                ll i = s / b;\r
                ll k = s * b;\r
                if (cnt.find(i) != cnt.end() && cnt.find(k) != cnt.end()) {\r
                    ans += cnt[i] * cnt[k] * cs;\r
                }\r
            }\r
        }\r
        if (cs >= 3) {\r
            ans += cs * (cs - 1) * (cs - 2);\r
        }\r
    }\r
    printf("%lld\\n", ans);\r
}
`})}),`
`,r(o,{})]})}function f(l={}){const{wrapper:n}=Object.assign({},c(),l.components);return n?r(n,Object.assign({},l,{children:r(e,l)})):e(l)}const b=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=t;s.main=b;export{s as default};
