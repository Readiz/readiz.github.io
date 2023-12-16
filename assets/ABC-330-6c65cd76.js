import{p as h}from"./ABC-330_-69220719.js";import{u as s,j as e,a as i,F as o}from"./ssg-client-9b0ce5e8.js";import{C as m}from"./Comment-f518aff4.js";import{H as p}from"./Header-f79b744c.js";import{T as u}from"./TagList-c12e6050.js";import{I as g}from"./Image-29c5388c.js";import{D as f}from"./Details-4aaba22a.js";import"./katex.min-4ed993c7.js";import{S as l,T as r}from"./SolvedTier-1990be30.js";import{A as a}from"./AtCoderResult-e9ef4e4a.js";import"./index.module-caf545e8.js";function c(t){const n=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",code:"code",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msqrt:"msqrt",annotation:"annotation",svg:"svg",path:"path",pre:"pre"},s(),t.components);return i(o,{children:[e(p,{}),`
`,e(n.h1,{id:"abc-330-upsolving",children:"ABC 330 Upsolving"}),`
`,e(g,{src:"2023-12-03-22-28-33.png"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"대회 참가 유무: Y"}),`
`,i(n.li,{children:["최종 Performance: ",e("span",{style:{color:"#008000"},children:"868"})," (Rank: 3161 / 10234)"]}),`
`,i(n.li,{children:["Round 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc330",children:"Top"})," / ",e(n.a,{href:"https://atcoder.jp/contests/abc330/tasks",children:"Tasks"})]}),`
`,e(n.li,{children:"문제별 결과"}),`
`]}),`
`,i(n.table,{children:[e(n.thead,{children:i(n.tr,{children:[e(n.th,{align:"center",children:"A"}),e(n.th,{align:"center",children:"B"}),e(n.th,{align:"center",children:"C"}),e(n.th,{align:"center",children:"D"}),e(n.th,{align:"center",children:"E"}),e(n.th,{align:"center",children:"F"}),e(n.th,{align:"center",children:"G"})]})}),e(n.tbody,{children:i(n.tr,{children:[e(n.td,{align:"center",children:e(a,{state:"AC"})}),e(n.td,{align:"center",children:e(a,{state:"AC"})}),e(n.td,{align:"center",children:e(a,{state:"AC"})}),e(n.td,{align:"center",children:e(a,{state:"AC"})}),e(n.td,{align:"center",children:"-"}),e(n.td,{align:"center",children:"-"}),e(n.td,{align:"center",children:"-"})]})})]}),`
`,i(n.p,{children:[e(n.code,{children:"E"}),"를 1분 차이로 제출하지 못한 셋이다. 그래서 한문제 차이로 상당히 망한 퍼포가 나왔다."]}),`
`,e(n.h2,{id:"a---counting-passes",children:"A - Counting Passes"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc329/tasks/abc330_a",children:"https://atcoder.jp/contests/abc329/tasks/abc330_a"})]}),`
`,e(n.li,{children:"Score: 100점"}),`
`,i(n.li,{children:["문제 예상 티어: ",e(l,{tierName:r.Bronze,grade:4,width:15})]}),`
`]}),`
`,e(n.p,{children:"Do you know 반복문?"}),`
`,e(n.h2,{id:"b---minimize-abs-1",children:"B - Minimize Abs 1"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc329/tasks/abc330_b",children:"https://atcoder.jp/contests/abc329/tasks/abc330_b"})]}),`
`,e(n.li,{children:"Score: 200점"}),`
`,i(n.li,{children:["문제 예상 티어: ",e(l,{tierName:r.Silver,grade:5,width:15})]}),`
`]}),`
`,i(n.p,{children:["B 치고 난이도가 있는 문제였다. 출력 문제로 1틀을 했다. (케이스중 1개에서 공백 출력을 안했다;;) ",e(n.code,{children:"L"})," 보다 왼쪽의 수일 경우 ",e(n.code,{children:"L"}),"이, ",e(n.code,{children:"R"}),"보다 오른쪽의 수일 경우 ",e(n.code,{children:"R"}),"이, 그 사이에 들어올 경우 자기 자신이 되어야 거리가 최소가 된다."]}),`
`,e(n.h2,{id:"c---minimize-abs-2",children:"C - Minimize Abs 2"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc329/tasks/abc330_c",children:"https://atcoder.jp/contests/abc329/tasks/abc330_c"})]}),`
`,e(n.li,{children:"Score: 300점"}),`
`,i(n.li,{children:["문제 예상 티어: ",e(l,{tierName:r.Gold,grade:5,width:15})]}),`
`]}),`
`,i(n.p,{children:["수학 문제. 수학 문제인 만큼 솔루션은 여러가지가 있을 수 있는데, 나는 그냥 ",e(n.code,{children:"매개변수탐색"}),"으로 해치웠다. 정해는 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.msqrt,{children:e(n.mi,{children:"D"})}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\sqrt D)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1.1767em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord sqrt",children:i(n.span,{className:"vlist-t vlist-t2",children:[i(n.span,{className:"vlist-r",children:[i(n.span,{className:"vlist",style:{height:"0.9267em"},children:[i(n.span,{className:"svg-align",style:{top:"-3em"},children:[e(n.span,{className:"pstrut",style:{height:"3em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em",paddingLeft:"0.833em"},children:"D"})]}),i(n.span,{style:{top:"-2.8867em"},children:[e(n.span,{className:"pstrut",style:{height:"3em"}}),e(n.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:e(n.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:e(n.path,{d:`M95,702
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
M834 80h400000v40h-400000z`})})})]})]}),e(n.span,{className:"vlist-s",children:"​"})]}),e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.1133em"},children:e(n.span,{})})})]})}),e(n.span,{className:"mclose",children:")"})]})})]})}),"이다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`void solve() {
    scanf("%lld", &N);
    ll sN = sqrt(N);
    ll ans = 0x7FFFFFFFFFFFFFFFLL;
    for(ll y = 0; y <= sN; ++y) {
        ll l = 0, r = sN + 1;
        ll yy = y * y;
        for(ll m = (l + r) >> 1; l <= r; m = (l + r) >> 1) {
            ll cur = yy + m * m;
            if (cur <= N) {
                l = m + 1;
                ans = min(ans, min(abs(cur - N), abs(yy + (m + 1) * (m + 1) - N)));
            } else {
                r = m - 1;
            }
        }
    }

    printf("%lld\\n", ans);
}
`})}),`
`,e(n.h2,{id:"d---counting-ls",children:"D - Counting Ls"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc330/tasks/abc330_d",children:"https://atcoder.jp/contests/abc330/tasks/abc330_d"})]}),`
`,e(n.li,{children:"Score: 400점"}),`
`,i(n.li,{children:["문제 예상 티어: ",e(l,{tierName:r.Gold,grade:5,width:15})]}),`
`]}),`
`,i(n.p,{children:["문제는 장황한데, 결국 케이스를 따져가면서 경우의 수를 따져보면, 각 ",e(n.code,{children:"row"}),", ",e(n.code,{children:"col"}),"별로 ",e(n.code,{children:"o"}),"의 수를 미리 세어두고, 모든 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"i"}),e(n.mo,{separator:"true",children:","}),e(n.mi,{children:"j"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"(i, j)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",children:"i"}),e(n.span,{className:"mpunct",children:","}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),e(n.span,{className:"mclose",children:")"})]})})]})})," 쌍에 대해 ",e(n.code,{children:"ans += (rcnt[i] - 1) * (ccnt[j] - 1)"}),"를 해주는 것이 답이다."]}),`
`,e(n.h2,{id:"e---mex-and-update-upsolved",children:"E - Mex and Update (Upsolved)"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc330/tasks/abc330_e",children:"https://atcoder.jp/contests/abc330/tasks/abc330_e"})]}),`
`,e(n.li,{children:"Score: 475점"}),`
`,i(n.li,{children:["문제 예상 티어: ",e(l,{tierName:r.Gold,grade:3,width:15})]}),`
`]}),`
`,i(n.p,{children:[e(n.code,{children:"AC"}),"가 나왔는데 1분 늦어서 제출을 못했다. ",e(n.code,{children:"mex"})," 연산은 일종의 웰논 연산이고(님게임 등에서 쓰이는듯), 어떻게 빠르게 다음 수를 찾는지가 관건이었다. 정해는 ",e(n.code,{children:"set"}),"이나 ",e(n.code,{children:"Segment Tree"}),"였고, 나는 구간 관리하는 식으로 풀었다. 너무 어렵게 풀어서 시간내에 못낸거 같다."]}),`
`,e(f,{children:e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int N, Q;
int A[200010];
map<int, int> M;

struct Range {
    int l, r;
    bool operator<(const Range& t) const {
        if (l != t.l) return l < t.l;
        return r < t.r;
    }
};
set<Range> S;

void solve() {
    scanf("%d %d", &N, &Q);
    for(int i = 1; i <= N; ++i) {
        scanf("%d", &A[i]);
        if (M.find(A[i]) == M.end()) {
            M[A[i]] = 0;
        }
        M[A[i]]++;
    }
    for(auto& item: M) {
        S.insert({item.first, item.first});
    }
    for(auto sit = S.begin(); sit != S.end();) {
        Range cur = *sit;
        auto it = sit;
        ++it;
        if (it == S.end()) {
            break;
        } else {
            Range nitem = *it;
            if (cur.r + 1 == nitem.l) {
                S.erase(it);
                S.erase(sit);
                sit = S.insert({cur.l, nitem.r}).first;
            } else {
                sit = it;
            }
        }
    }

    for(auto& item: S) {
        _D("[d] %d ~ %d\\n", item.l, item.r);
    }

    for(int q = 0; q < Q; ++q) {
        int idx, val; scanf("%d %d", &idx, &val);
        int old = A[idx];
        A[idx] = val;
        M[old]--;

        // 기존꺼 빼기
        if (M[old] == 0) {
            auto it = S.lower_bound({old, 0x7FFFFFFF});
            --it; // 무조건 있음 문제조건에서
            _D("[d] delete %d!\\n", old);
            Range cur = *it;
            S.erase(cur);
            if (cur.r == old) {
                S.insert({cur.l, cur.r - 1});
                _D("(%d, %d) -> (%d, %d)\\n", cur.l, cur.r, cur.l, cur.r - 1);
            } else if (cur.l == old) {
                S.insert({cur.l + 1, cur.r});
                _D("(%d, %d) -> (%d, %d)\\n", cur.l, cur.r, cur.l + 1, cur.r);
            } else { // 사이
                S.insert({cur.l, old - 1});
                S.insert({old + 1, cur.r});
                _D("(%d, %d) -> (%d, %d) / (%d, %d)\\n", cur.l, cur.r, cur.l, old - 1, old + 1, cur.r);
            }

            M.erase(old);
        }

        // 신규 넣기
        if (M.find(val) == M.end()) {
            _D("[d] add %d!\\n", val);
            auto it = S.lower_bound({val, 0});
            if (it == S.begin()) {
                Range nitem = *it;
                if (nitem.l - 1 == val) {
                    S.erase(it);
                    S.insert({val, nitem.r});
                } else {
                    S.insert({val, val});
                }
            } else {
                auto pit = it;
                --pit;

                Range nitem = *it;
                Range pitem = *pit;

                if (pitem.r + 1 == val && nitem.l - 1 == val) {
                    S.erase(it);
                    S.erase(pit);
                    S.insert({pitem.l, nitem.r});
                } else if (pitem.r + 1 == val) {
                    S.erase(pit);
                    S.insert({pitem.l, val});
                } else if (nitem.l - 1 == val) {
                    S.erase(it);
                    S.insert({val, nitem.r});
                } else {
                    S.insert({val, val});
                }
            }
            
            M[val] = 0;
        }
        M[val]++;

        
        auto it = S.begin();
        Range cur = *it;
        _D("[begin] (%d, %d)\\n", cur.l, cur.r);
        if (cur.l == 0) {
            printf("%d\\n", cur.r + 1);
        } else {
            printf("0\\n");
        }
    }
}
`})})}),`
`,e(n.h2,{id:"f---minimize-bounding-square-to-be-upsolved",children:"F - Minimize Bounding Square (To be upsolved...)"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc330/tasks/abc330_f",children:"https://atcoder.jp/contests/abc330/tasks/abc330_f"})]}),`
`,e(n.li,{children:"Score: 525점"}),`
`,e(n.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,e(n.p,{children:"뭔가 웰논의 냄새가 나서 업솔빙 예정."}),`
`,e(n.h2,{id:"g",children:"G"}),`
`,e(n.p,{children:"Skip"}),`
`,e(u,{}),`
`,e(m,{})]})}function b(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e(n,Object.assign({},t,{children:e(c,t)})):c(t)}const N=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=h;d.main=N;export{d as default};
