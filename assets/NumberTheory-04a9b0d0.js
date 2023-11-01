import{p as r}from"./NumberTheory_-a6925af7.js";import{u as i,j as n,a,F as c}from"./ssg-client-38b38d1d.js";import{D as t}from"./Details-c9e1d8cf.js";import{C as h}from"./Comment-db7ba124.js";import"./index.module-caf545e8.js";import{H as d}from"./Header-d48e58ad.js";import"./katex.min-4ed993c7.js";function l(s){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",pre:"pre",code:"code",mn:"mn",mfrac:"mfrac",msqrt:"msqrt",svg:"svg",path:"path",msup:"msup"},i(),s.components);return a(c,{children:[n(d,{}),`
`,n(e.h2,{id:"정수론-기본-정리",children:"정수론 기본 정리"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["rkm0959 님의 PS 정수론 백과사전: ",n("a",{href:"/assets/NumberTheory.pdf",children:"PDF 다운로드"})]}),`
`,a(e.li,{children:["rkm0959 님의 블로그: ",n(e.a,{href:"https://rkm0959.tistory.com/",children:"https://rkm0959.tistory.com/"})]}),`
`]}),`
`,n(e.h2,{id:"basic-functions",children:"Basic Functions"}),`
`,n(e.h3,{id:"gcd-유클리드-호제법",children:"GCD (유클리드 호제법)"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"G"}),n(e.mi,{children:"C"}),n(e.mi,{children:"D"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"a"}),n(e.mo,{separator:"true",children:","}),n(e.mi,{children:"b"}),n(e.mo,{stretchy:"false",children:")"}),n(e.mo,{children:"="}),n(e.mi,{children:"G"}),n(e.mi,{children:"C"}),n(e.mi,{children:"D"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"b"}),n(e.mo,{separator:"true",children:","}),n(e.mi,{children:"r"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"GCD(a, b) = GCD(b, r)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"GC"}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",children:"a"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",children:"b"}),n(e.span,{className:"mclose",children:")"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n(e.span,{className:"mrel",children:"="}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"GC"}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",children:"b"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),n(e.span,{className:"mclose",children:")"})]})]})]})})," (단, ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mi,{children:"r"})}),n(e.annotation,{encoding:"application/x-tex",children:"r"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.4306em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})]})})]})}),"은 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mi,{children:"a"})}),n(e.annotation,{encoding:"application/x-tex",children:"a"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.4306em"}}),n(e.span,{className:"mord mathnormal",children:"a"})]})})]})}),"를 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mi,{children:"b"})}),n(e.annotation,{encoding:"application/x-tex",children:"b"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6944em"}}),n(e.span,{className:"mord mathnormal",children:"b"})]})})]})}),"로 나누었을 때의 나머지)의 구현이다."]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`int gcd(int a, int b) {
    return (b == 0) ? a : gcd(b, a % b); // a % b = r
}
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`int gcd(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}
`})}),`
`,n(e.h3,{id:"lcm",children:"LCM"}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`int lcm(int a, int b) {
    return a * b / gcd(a, b);
}
`})}),`
`,n(e.h3,{id:"simple-isprime",children:"Simple isPrime"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["루트 시간복잡도이기 때문에 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"N"}),n(e.mo,{children:"<"}),n(e.mn,{children:"1"}),n(e.mo,{separator:"true",children:","}),n(e.mn,{children:"000"}),n(e.mo,{separator:"true",children:","}),n(e.mn,{children:"000"})]}),n(e.annotation,{encoding:"application/x-tex",children:"N \\lt 1,000,000"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.7224em",verticalAlign:"-0.0391em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n(e.span,{className:"mrel",children:"<"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord",children:"000"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord",children:"000"})]})]})]})})," 정도일 때, 상당히 유효하다."]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`bool isPrime(int num) {
    for(int i = 2; i * i <= num; ++i) {
        if (num % i == 0) return false;
    }
    return true;
}
`})}),`
`,n(e.h3,{id:"밀러라빈-isprime",children:"밀러라빈 isPrime"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"확률적 소수 판정이지만, 특정 수들에 대해서 모두 체크함으로써 확정적으로 소수 체크 가능"}),`
`,a(e.li,{children:["casterian님 코드 참고: ",n(e.a,{href:"https://casterian.net/archives/396",children:"https://casterian.net/archives/396"})]}),`
`]}),`
`,n(t,{children:n(e.pre,{children:n(e.code,{className:"language-cpp",children:`typedef unsigned long long ull;

ull checker[] = {2ULL, 325ULL, 9375ULL, 28178ULL, 450775ULL, 9780504ULL, 1795265022ULL};
// int checker[] = {2, 7, 61}; // int 범위일 때

ull addmod(ull x, ull y, ull m) {
    if (x >= m - y) {
        return x - (m - y);
    } else {
        return x + y;
    }
}
ull mulmod(ull x, ull y, ull m) {
    ull r = 0ULL;
    while (y > 0) {
        if (y % 2 == 1)
            r = addmod(r, x, m);
        x = addmod(x, x, m);
        y /= 2;
    }
    return r;
}
ull powmod(ull x, ull y, ull m) {
    ull r = 1ULL;
    while (y > 0) {
        if (y % 2 == 1) {
            r = mulmod(r, x, m);
        }
        x = mulmod(x, x, m);
        y /= 2;
    }
    return r;
}

// Miller-Rabin checker
// true를 리턴한다고 해서 무조건 소수인 것은 아님. (확률적 소수)
// 그러나 특정 수들에 대해 (checker 배열) 모두 검사한다면, 확정적으로 소수임을 판별가능.
// (log n)^3 알고리즘
bool MR(ull N, ull A) {
    ull d = N - 1;
    while (d % 2 == 0) {
        if (powmod(A, d, N) == N - 1) {
            return true;
        }
        d /= 2;
    }

    ull tmp = powmod(A, d, N);
    if (tmp == N - 1 || tmp == 1) { // a^(d*2^r) mod n = -1 판정 하는 부분임
        return true;
    } else {
        return false;
    }
}

bool isPrime(ull N) {
    if (N <= 1) {
        return false;
    } else if (N == 2) {
        return true;
    } else if (N <= 10'000'000'000ULL) { // 기존 방법이 빠른 구간 + 밀러라빈 checker 수보다 작은 구간
        for (ull i = 3ULL; i * i <= N; i += 2) { // 홀수만 검사한다.
            if (N % i == 0ULL) return false; // 나누어 떨어지면, 소수
        }
        return true;
    } else {
        for (int i = 0; i < 7; i++) { // 7: checker size
            ull A = checker[i];
            if (MR(N, A) == false) {
                return false;
            }
        }
        return true;
    }
}
`})})}),`
`,n(e.h3,{id:"에라스토테네스의-채sieve",children:"에라스토테네스의 채(Sieve)"}),`
`,n(e.h3,{id:"slow-version",children:"Slow version"}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`vector<int> getPrimes int MAX) {
    vector<int> memo(MAX + 1, 0);
    vector<int> res;
    for(int i = 2; i <= MAX; ++i) {
        if (memo[i] != 0) continue;
        res.push_back(i);
        for(int j = i; j <= MAX; j += i) {
            memo[j] = 1;
        }
    }
    return res;
}
`})}),`
`,n(e.h3,{id:"fast-version",children:"Fast version"}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`vector<int> getPrimes(int MAX) {
    vector<int> memo(MAX + 1, 0);
    vector<int> res;
    int i;
    for(i = 2; i * i <= MAX; ++i) {
        if (memo[i] != 0) continue;
        res.push_back(i);
        for(int j = i * i; j <= MAX; j += i) {
            memo[j] = 1;
        }
    }
    for(; i <= MAX; ++i)
        if (memo[i] == 0)
            res.push_back(i);

    return res;
}
`})}),`
`,n(e.h3,{id:"linear-sieve",children:"Linear Sieve"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.code,{children:"sp"})," 에 들어있는 해당 숫자의 제일 작은 소인수는 덤이다."]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`vector<int> getPrimes(int MAX) {
    vector<int> sp(MAX + 1, 0);
    vector<int> res;
    for(int i = 2; i <= MAX; ++i) {
        if (sp[i] == 0) res.push_back(i);
        for(auto& j: res) {
            if (i * j > MAX) break;
            sp[i * j] = j;
            if (i % j == 0) break; // 이미 체로 걸러졌으므로 더이상 보지 않음
        }
    }
    return res;
}
`})}),`
`,n(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["GCD: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"A"}),n(e.mo,{children:"+"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"B"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log A + \\log B)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",children:"A"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"+"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),n(e.span,{className:"mclose",children:")"})]})]})]})}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["한번 재귀를 돌 때마다 적어도 수가 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:a(e.mfrac,{children:[n(e.mn,{children:"1"}),n(e.mn,{children:"2"})]})}),n(e.annotation,{encoding:"application/x-tex",children:"\\frac 1 2"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),a(e.span,{className:"mord",children:[n(e.span,{className:"mopen nulldelimiter"}),n(e.span,{className:"mfrac",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[a(e.span,{className:"vlist",style:{height:"0.8451em"},children:[a(e.span,{style:{top:"-2.655em"},children:[n(e.span,{className:"pstrut",style:{height:"3em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:n(e.span,{className:"mord mtight",children:"2"})})})]}),a(e.span,{style:{top:"-3.23em"},children:[n(e.span,{className:"pstrut",style:{height:"3em"}}),n(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),a(e.span,{style:{top:"-3.394em"},children:[n(e.span,{className:"pstrut",style:{height:"3em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:n(e.span,{className:"mord mtight",children:"1"})})})]})]}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.345em"},children:n(e.span,{})})})]})}),n(e.span,{className:"mclose nulldelimiter"})]})]})})]})}),"이 되므로, 로그 시간복잡도가 된다."]}),`
`]}),`
`]}),`
`,a(e.li,{children:["LCM: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"A"}),n(e.mo,{children:"+"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"B"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log A + \\log B)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",children:"A"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"+"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),n(e.span,{className:"mclose",children:")"})]})]})]})}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"GCD에 달려있다."}),`
`]}),`
`]}),`
`,a(e.li,{children:["Simple isPrime: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.msqrt,{children:n(e.mi,{children:"N"})}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\sqrt N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.1767em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord sqrt",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[a(e.span,{className:"vlist",style:{height:"0.9267em"},children:[a(e.span,{className:"svg-align",style:{top:"-3em"},children:[n(e.span,{className:"pstrut",style:{height:"3em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em",paddingLeft:"0.833em"},children:"N"})]}),a(e.span,{style:{top:"-2.8867em"},children:[n(e.span,{className:"pstrut",style:{height:"3em"}}),n(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:n(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:n(e.path,{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})})})]})]}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.1133em"},children:n(e.span,{})})})]})}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["밀러라빈 isPrime: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"k"}),a(e.msup,{children:[a(e.mrow,{children:[n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"})]}),n(e.mn,{children:"3"})]}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(k \\log^3 N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.1484em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mop",children:[a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t",children:n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.8984em"},children:a(e.span,{style:{top:"-3.1473em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"k는 테스트해야하는 숫자의 수"}),`
`]}),`
`]}),`
`,a(e.li,{children:["에라스토테네스의 채 구성: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"N"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(N \\log \\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["Linear Sieve 구성: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,n(h,{})]})}function p(s={}){const{wrapper:e}=Object.assign({},i(),s.components);return e?n(e,Object.assign({},s,{children:n(l,s)})):l(s)}const o=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),m={};m.outlineInfo=r;m.main=o;export{m as default};
