import{p as a}from"./Berlekamp_-1877f579.js";import{u as r,j as e,a as i,F as c}from"./ssg-client-7a654c7b.js";import{C as m}from"./Comment-2d449b8a.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-31f4d24d.js";import"./katex.min-4ed993c7.js";function l(t){const n=Object.assign({h2:"h2",ul:"ul",li:"li",p:"p",a:"a",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msup:"msup",mn:"mn",annotation:"annotation",pre:"pre",code:"code"},r(),t.components);return i(c,{children:[e(h,{}),`
`,e(n.h2,{id:"berlekamp-massey",children:"Berlekamp Massey"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,e(n.p,{children:"InwooLeeme 님의 코드 Copy (구사과님 코드 베이스)"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["원링크: ",e(n.a,{href:"https://github.com/InwooLeeme/algorithms-implementation/blob/main/DP/berlekamp_massey.cpp",children:"https://github.com/InwooLeeme/algorithms-implementation/blob/main/DP/berlekamp_massey.cpp"})]}),`
`,i(n.li,{children:["구사과님 글: ",e(n.a,{href:"https://koosaga.com/231",children:"https://koosaga.com/231"})]}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,e(n.p,{children:"시간복잡도"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["berlekamp_massey: ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),i(n.msup,{children:[e(n.mi,{children:"N"}),e(n.mn,{children:"2"})]}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(N^2)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),i(n.span,{className:"mord",children:[e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"msupsub",children:e(n.span,{className:"vlist-t",children:e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.8141em"},children:i(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e(n.span,{className:"pstrut",style:{height:"2.7em"}}),e(n.span,{className:"sizing reset-size6 size3 mtight",children:e(n.span,{className:"mord mtight",children:"2"})})]})})})})})]}),e(n.span,{className:"mclose",children:")"})]})})]})})," (N개의 DP 결과값이 주어졌을 때)",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["정확히는, 답이 되는 점화식의 크기가 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[e(n.mrow,{children:e(n.mi,{children:"k"})}),e(n.annotation,{encoding:"application/x-tex",children:"k"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6944em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})})," 일 때, ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"n"}),e(n.mi,{children:"k"}),e(n.mo,{children:"+"}),e(n.mi,{children:"n"}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"M"}),e(n.mi,{children:"O"}),e(n.mi,{children:"D"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(nk + n \\log MOD)"})]})})}),i(n.span,{className:"katex-html","aria-hidden":"true",children:[i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"nk"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"+"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),i(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"MO"}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),e(n.span,{className:"mclose",children:")"})]})]})]})})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`const int MOD = 1e9 + 7; // 소수여야 함

int ipow(int x, int p){
    int ret = 1, piv = x;
    while(p){
        if(p & 1) ret = ret * piv % MOD;
        piv = piv * piv % MOD;
        p >>= 1;
    }
    return ret;
}

vector<int> berlekamp_massey(vector<int> x) {
    vector<int> ls, cur;
    int lf, ld;
    for (int i = 0; i < x.size(); i++) {
        ll t = 0;
        for (int j = 0; j < cur.size(); j++) {
            t = (t + 1ll * x[i - j - 1] * cur[j]) % MOD;
        }
        if ((t - x[i]) % MOD == 0) continue;
        if (cur.empty()) {
            cur.resize(i + 1);
            lf = i;
            ld = (t - x[i]) % MOD;
            continue;
        }
        ll k = -(x[i] - t) * ipow(ld, MOD - 2) % MOD;
        vector<int> c(i - lf - 1);
        c.push_back(k);
        for (auto& j : ls) c.push_back(-j * k % MOD);
        if (c.size() < cur.size()) c.resize(cur.size());
        for (int j = 0; j < cur.size(); j++) {
            c[j] = (c[j] + cur[j]) % MOD;
        }
        if (i - lf + (int)ls.size() >= (int)cur.size()) {
            tie(ls, lf, ld) = make_tuple(cur, i, (t - x[i]) % MOD);
        }
        cur = c;
    }
    for (auto& i : cur) i = (i % MOD + MOD) % MOD;
    return cur;
}
int get_nth(vector<int> rec, vector<int> dp, ll n) {
    int m = rec.size();
    vector<int> s(m), t(m);
    s[0] = 1;
    if (m != 1) t[1] = 1;
    else t[0] = rec[0];
    auto mul = [&rec](vector<int> v, vector<int> w) {
        int m = v.size();
        vector<int> t(2 * m);
        for (int j = 0; j < m; j++) {
            for (int k = 0; k < m; k++) {
                t[j + k] += 1ll * v[j] * w[k] % MOD;
                if (t[j + k] >= MOD) t[j + k] -= MOD;
            }
        }
        for (int j = 2 * m - 1; j >= m; j--) {
            for (int k = 1; k <= m; k++) {
                t[j - k] += 1ll * t[j] * rec[k - 1] % MOD;
                if (t[j - k] >= MOD) t[j - k] -= MOD;
            }
        }
        t.resize(m);
        return t;
    };
    while (n) {
        if (n & 1) s = mul(s, t);
        t = mul(t, t);
        n >>= 1;
    }
    ll ret = 0;
    for (int i = 0; i < m; i++) ret += 1ll * s[i] * dp[i] % MOD;
    return ret % MOD;
}
int guess_nth_term(vector<int> x, ll n) {
    if (n < x.size()) return x[n];
    vector<int> v = berlekamp_massey(x);
    if (v.empty()) return 0;
    return get_nth(v, x, n);
}
`})}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.code,{children:"long long"})," 범위의 결과가 필요할 때는 아래 코드 사용"]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`const ll MOD = 1'000'000'000'000'000'009LL; // 소수여야 함

ll ipow(ll x, ll p){
    ll ret = 1, piv = x;
    while(p){
        if(p & 1) ret = ret * piv % MOD;
        piv = piv * piv % MOD;
        p >>= 1;
    }
    return ret;
}

vector<ll> berlekamp_massey(vector<ll> x) {
    vector<ll> ls, cur;
    ll lf, ld;
    for (int i = 0; i < x.size(); i++) {
        ll t = 0;
        for (int j = 0; j < cur.size(); j++) {
            t = (t + 1ll * x[i - j - 1] * cur[j]) % MOD;
        }
        if ((t - x[i]) % MOD == 0) continue;
        if (cur.empty()) {
            cur.resize(i + 1);
            lf = i;
            ld = (t - x[i]) % MOD;
            continue;
        }
        ll k = -(x[i] - t) * ipow(ld, MOD - 2) % MOD;
        vector<ll> c(i - lf - 1);
        c.push_back(k);
        for (auto& j : ls) c.push_back(-j * k % MOD);
        if (c.size() < cur.size()) c.resize(cur.size());
        for (int j = 0; j < cur.size(); j++) {
            c[j] = (c[j] + cur[j]) % MOD;
        }
        if (i - lf + (int)ls.size() >= (int)cur.size()) {
            tie(ls, lf, ld) = make_tuple(cur, i, (t - x[i]) % MOD);
        }
        cur = c;
    }
    for (auto& i : cur) i = (i % MOD + MOD) % MOD;
    return cur;
}
ll get_nth(vector<ll> rec, vector<ll> dp, ll n) {
    int m = rec.size();
    vector<ll> s(m), t(m);
    s[0] = 1;
    if (m != 1) t[1] = 1;
    else t[0] = rec[0];
    auto mul = [&rec](vector<ll> v, vector<ll> w) {
        int m = v.size();
        vector<ll> t(2 * m);
        for (int j = 0; j < m; j++) {
            for (int k = 0; k < m; k++) {
                t[j + k] += 1ll * v[j] * w[k] % MOD;
                if (t[j + k] >= MOD) t[j + k] -= MOD;
            }
        }
        for (int j = 2 * m - 1; j >= m; j--) {
            for (int k = 1; k <= m; k++) {
                t[j - k] += 1ll * t[j] * rec[k - 1] % MOD;
                if (t[j - k] >= MOD) t[j - k] -= MOD;
            }
        }
        t.resize(m);
        return t;
    };
    while (n) {
        if (n & 1) s = mul(s, t);
        t = mul(t, t);
        n >>= 1;
    }
    ll ret = 0;
    for (int i = 0; i < m; i++) ret += 1ll * s[i] * dp[i] % MOD;
    return ret % MOD;
}
ll guess_nth_term(vector<ll> x, ll n) {
    if (n < x.size()) return x[n];
    vector<ll> v = berlekamp_massey(x);
    if (v.empty()) return 0;
    return get_nth(v, x, n);
}
`})}),`
`,e(m,{})]})}function o(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e(n,Object.assign({},t,{children:e(l,t)})):l(t)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=a;s.main=p;export{s as default};
