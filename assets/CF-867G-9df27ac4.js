import{p as d}from"./CF-867G_-54163220.js";import{u as s,j as i,a as l,F as r}from"./ssg-client-5a9053ee.js";import{C as o}from"./Comment-962c1837.js";import{H as a}from"./Header-fec6ad35.js";import{T as f}from"./TagList-dbff74a4.js";import"./index.module-caf545e8.js";function c(e){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",ol:"ol",code:"code",h3:"h3",pre:"pre"},s(),e.components);return l(r,{children:[i(a,{}),`
`,l(n.ul,{children:[`
`,i(n.li,{children:"문제 제목: Magin Triples"}),`
`,l(n.li,{children:["문제 링크: ",i(n.a,{href:"https://codeforces.com/contest/1822/problem/G1",children:"G1"})," ",i(n.a,{href:"https://codeforces.com/contest/1822/problem/G2",children:"G2"})]}),`
`]}),`
`,i(n.p,{children:"루트로 줄이기 문제. 알고 있는 기법이라 생각하는데 늘 실전에서는 약하다."}),`
`,i(n.p,{children:"어떻게 생각하는 것이 좋냐면, 예를들어 10^5 정도의 수가 되었을 때, 이 수로 n^2 알고리즘을 돌리게 되면 Timeout이 난다는 점이다."}),`
`,i(n.p,{children:"보통 10억 정도의 연산량 (=10^9)이 될 때 1초 정도 연산 시간이 소요된다고 보면, 10^5의 수는 n^2으로 돌면, 시간초과가 날 것이다."}),`
`,i(n.p,{children:"이럴 때 루트로 줄이면 확실하게 풀이가 가능."}),`
`,i(n.p,{children:"포인트가 여러가지가 있는데,"}),`
`,l(n.ol,{children:[`
`,l(n.li,{children:["주어진 수의 범위가 Easy에서 10^6, Hard에서 10^9인 점",`
`,l(n.ol,{children:[`
`,i(n.li,{children:"10^6이면 b를 2~1000 까지 고정해서 루프를 돌아도 된다."}),`
`,l(n.li,{children:["10^9이면 중간수 A_j에 따라 범위를 유동적으로 나눠서 푼다. (아래 풀이 참고)",`
`,l(n.ol,{children:[`
`,i(n.li,{children:"10^6까지의 숫자는 10^3만큼의 루프를 돌면 그 divisor들을 모두 구할 수 있는 포인트를 기억."}),`
`,i(n.li,{children:"위가 성립하는 이유는 10 = 2 * 5에서 2를 찾으면 반대편 5가 자동으로 튀어나오기 때문"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(n.li,{children:"N의 수가 10^5라서 일반적인 O(N^2) 알고리즘은 적용이 어려운 점"}),`
`,i(n.li,{children:"중복되는 수의 처리가 필요한 점"}),`
`,l(n.li,{children:[i(n.code,{children:"map"}),"이 ",i(n.code,{children:"unordered_map"})," 보다 오히려 빠른 점 (!!)",`
`,l(n.ol,{children:[`
`,i(n.li,{children:"대체 어느 지점부터 map이 더 빠른 것인지?"}),`
`]}),`
`]}),`
`]}),`
`,i(n.h3,{id:"easy-solution",children:"Easy Solution"}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`
int N;
ll A[200010];
ll B[200010];
void solve() {
    scanf("%d", &N);
    FOR(i,0,N) {
        scanf("%lld", &A[i]);
    }
    sort(A, A+N);
    ll prev = -1;
    int P = 0;
    unordered_map<ll,int> cnt;
    for(int i = 0; i < N; ++i) {
        if (prev != A[i]) {
            cnt[A[i]] = 1;
            B[P++] = A[i];
        } else {
            cnt[A[i]]++;
        }
        prev = A[i];
    }
 
    ll ans = 0;
    for(int i = 0; i < P; ++i) {
        ll s = B[i];
        ll cs = cnt[s];
        for(int b = 2; b <= 1000; ++b) {
            if (s * b * b > 1000000000) break;
            if (cnt.find(s * b) != cnt.end() && cnt.find(s * b * b) != cnt.end()) {
                ans += cs * cnt[s * b] * cnt[s * b * b];
                _D("%d %d %d\\n", s, s * b, s * b * b);
            }
        }
        // b == 1인 케이스
        if (cs >= 3) {
            // 하나는 뽑혔고, 나머지 두개를 뽑는 case
            ans += cs * (cs - 1) * (cs - 2);
        }
    }
    printf("%lld\\n", ans);
}
`})}),`
`,i(n.h3,{id:"hard-solution",children:"Hard Solution"}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`int N;
ll A[200010];
ll B[200010];
void solve() {
    scanf("%d", &N);
    FOR(i,0,N) {
        scanf("%lld", &A[i]);
    }
    sort(A, A+N);
    ll prev = -1;
    int P = 0;
    map<ll,ll> cnt;
    for(int i = 0; i < N; ++i) {
        if (prev != A[i]) {
            cnt[A[i]] = 1;
            B[P++] = A[i];
        } else {
            cnt[A[i]]++;
        }
        prev = A[i];
    }
 
    ll ans = 0;
    for(int j = 0; j < P; ++j) {
        ll s = B[j];
        ll cs = cnt[s];
        if (s <= 1'000'000) {
            for(ll b = 2; b * b <= s; ++b) {
                if (s % b != 0) continue;
                ll i = s / b;
                ll k = s * b;
                _D("Checking %d, %d, %d...\\n", i, s, k);
                if (cnt.find(i) != cnt.end() && cnt.find(k) != cnt.end()) {
                    ans += cnt[i] * cnt[k] * cs;
                }
                if (b * b != s) {
                    ll b = i;
                    i = s / b;
                    k = s * b;
                    _D("Checking %d, %d, %d...\\n", i, s, k);
                    if (cnt.find(i) != cnt.end() && cnt.find(k) != cnt.end()) {
                        ans += cnt[i] * cnt[k] * cs;
                    }
                }
            }
            if (s != 1) {
                ll i = 1;
                ll k = s * s;
                _D("Checking %d, %d, %d...\\n", i, s, k);
                if (cnt.find(i) != cnt.end() && cnt.find(k) != cnt.end()) {
                    ans += cnt[i] * cnt[k] * cs;
                }
            }
        } else {
            for(ll b = 2; b <= 1000; ++b) {
                if (s * b > 1'000'000'000) break;
                if (s % b != 0) continue;
                ll i = s / b;
                ll k = s * b;
                if (cnt.find(i) != cnt.end() && cnt.find(k) != cnt.end()) {
                    ans += cnt[i] * cnt[k] * cs;
                }
            }
        }
        if (cs >= 3) {
            ans += cs * (cs - 1) * (cs - 2);
        }
    }
    printf("%lld\\n", ans);
}
`})}),`
`,i(f,{}),`
`,i(o,{})]})}function b(e={}){const{wrapper:n}=Object.assign({},s(),e.components);return n?i(n,Object.assign({},e,{children:i(c,e)})):c(e)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=d;t.main=h;export{t as default};
