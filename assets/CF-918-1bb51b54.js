import{p as h}from"./CF-918_-17160bbb.js";import{u as o,j as n,a as i,F as a}from"./ssg-client-53b59081.js";import{C as m}from"./Comment-7df84669.js";import{H as p}from"./Header-324a32b7.js";import{T as u}from"./TagList-a1a67b81.js";import"./katex.min-4ed993c7.js";import{S as r,T as c}from"./SolvedTier-b5444167.js";import{A as t}from"./AtCoderResult-ac94bc6a.js";import{D as g}from"./Details-7f6984fe.js";import"./index.module-caf545e8.js";function d(l){const e=Object.assign({h1:"h1",ul:"ul",li:"li",strong:"strong",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",h2:"h2",code:"code",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",pre:"pre"},o(),l.components);return i(a,{children:[n(p,{}),`
`,n(e.h1,{id:"codeforces-round-918-upsolving",children:"Codeforces Round 918 Upsolving"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"대회 참가 유무: Y"}),`
`,i(e.li,{children:["최종 Performance: ",n("span",{style:{color:"blue"},children:n(e.strong,{children:"1756"})})," (Rank: 229 / 27413)"]}),`
`,i(e.li,{children:["Round 링크: ",n(e.a,{href:"https://codeforces.com/contest/1915",children:"Top"})," / ",n(e.a,{href:"https://codeforces.com/contest/1915/problems",children:"Problems"})]}),`
`,n(e.li,{children:"문제별 결과"}),`
`]}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{align:"center",children:"A"}),n(e.th,{align:"center",children:"B"}),n(e.th,{align:"center",children:"C"}),n(e.th,{align:"center",children:"D"}),n(e.th,{align:"center",children:"E"}),n(e.th,{align:"center",children:"F"}),n(e.th,{align:"center",children:"G"})]})}),n(e.tbody,{children:i(e.tr,{children:[n(e.td,{align:"center",children:n(t,{state:"AC"})}),n(e.td,{align:"center",children:n(t,{state:"AC"})}),n(e.td,{align:"center",children:n(t,{state:"AC"})}),n(e.td,{align:"center",children:n(t,{state:"AC"})}),n(e.td,{align:"center",children:n(t,{state:"AC"})}),n(e.td,{align:"center",children:n(t,{state:"AC"})}),n(e.td,{align:"center",children:n(t,{state:"AC"})})]})})]}),`
`,n(e.p,{children:"Div 4긴 하지만, 처음 해보는 All Solve! 한 해의 마지막 코포로 재밌게 참가했고, 뿌듯했다."}),`
`,n(e.h2,{id:"a---odd-one-out",children:"A - Odd One Out"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1915/problem/A",children:"https://codeforces.com/contest/1915/problem/A"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,i(e.li,{children:["문제 예상 티어: ",n(r,{tierName:c.Bronze,grade:4,width:15})]}),`
`]}),`
`,i(e.p,{children:["몇번 나왔던 ",n(e.code,{children:"A ^ B ^ C"})," 구하기 문제. 같은 수는 두번 ",n(e.code,{children:"XOR"}),"하면 사라진다!"]}),`
`,n(e.h2,{id:"b---not-quite-latin-square",children:"B - Not Quite Latin Square"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1915/problem/B",children:"https://codeforces.com/contest/1915/problem/B"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,i(e.li,{children:["문제 예상 티어: ",n(r,{tierName:c.Bronze,grade:3,width:15})]}),`
`]}),`
`,n(e.p,{children:"단순 구현 문제. 없는 문자를 찾으면 된다."}),`
`,n(e.h2,{id:"c---can-i-square",children:"C - Can I Square?"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1915/problem/C",children:"https://codeforces.com/contest/1915/problem/C"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,i(e.li,{children:["문제 예상 티어: ",n(r,{tierName:c.Silver,grade:5,width:15})]}),`
`]}),`
`,i(e.p,{children:["나는 그냥 숫자 다 더한 다음에 ",n(e.code,{children:"sqrt"})," 때린 후 제곱해서 원래 숫자가 나오는지로 봤다. 정수의 ",n(e.code,{children:"sqrt"}),"는 정확하게 계산된다. (제곱수가 맞을 경우)"]}),`
`,n(e.h2,{id:"d---unnatural-language-processing",children:"D - Unnatural Language Processing"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1915/problem/D",children:"https://codeforces.com/contest/1915/problem/D"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,i(e.li,{children:["문제 예상 티어: ",n(r,{tierName:c.Silver,grade:1,width:15})]}),`
`]}),`
`,i(e.p,{children:[n(e.code,{children:"C"}),", ",n(e.code,{children:"V"}),"가 정의되고, ",n(e.code,{children:"greedy"})," 하게 단어를 끊어주면 되는 문제. 예외처리 할게 별로 없었다."]}),`
`,n(e.h2,{id:"e---romantic-glasses",children:"E - Romantic Glasses"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["문제 링크 (E1: Easy): ",n(e.a,{href:"https://codeforces.com/contest/1915/problem/E",children:"https://codeforces.com/contest/1915/problem/E"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,i(e.li,{children:["문제 예상 티어: ",n(r,{tierName:c.Gold,grade:1,width:15})]}),`
`]}),`
`,n(e.p,{children:"나는 이게 F보다 쉬웠다. F 풀고 E를 풀었다. 그냥 수식을 보고 있자면 범위 수의 합을 어떻게 빨리 구하지? 할 수 있지만, 코포 문제가 늘 그렇듯 짝수 & 홀수를 나눠 생각해보면 답이 금방 나온다. 차이를 상쇄할 수 있느냐가 포인트."}),`
`,n(e.h2,{id:"f---greetings",children:"F - Greetings"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1915/problem/F",children:"https://codeforces.com/contest/1915/problem/F"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,i(e.li,{children:["문제 예상 티어: ",n(r,{tierName:c.Platinum,grade:5,width:15})]}),`
`]}),`
`,i(e.p,{children:["웰논인 것과는 별개로, solved tier 기준 이런 세그먼트 트리 기초 활용 유형은 ",n(e.code,{children:"P5"})," 티어를 받는다. 입력을 선분으로 생각하고, 시작점 기준으로 정렬해서 루프를 시작한다. 그리고 루프는 끝점 기준으로 집어넣으면서(그리디 문제 대표 유형인 Job Scheduling 문제에서 쓰던 방식이다.), 기존의 선분을 몇개 교차하는지 세면 된다. 이 과정에서 ",n(e.code,{children:"Segment Tree"}),"나 ",n(e.code,{children:"PBDS"}),"가 필요한데, 나는 ",n(e.code,{children:"PBDS"}),"로 풀었다. ",n(e.code,{children:"PBDS"}),"의 ",n(e.code,{children:"order_of_key"})," 메서드를 사용하면 쉽게 쿼리당 ",n(e.span,{className:"math math-inline",children:i(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(e.semantics,{children:[i(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:i(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),i(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})}),"으로 처리가 가능해서 편하다."]}),`
`,n(e.h2,{id:"g---bicycles",children:"G - Bicycles"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1915/problem/G",children:"https://codeforces.com/contest/1915/problem/G"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,i(e.li,{children:["문제 예상 티어: ",n(r,{tierName:c.Platinum,grade:5,width:15})]}),`
`]}),`
`,i(e.p,{children:["백준에 정확하게 같은 문제가 있고, ",n(e.code,{children:"P5"}),"를 받았다."]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["주유소 문제: ",n(e.a,{href:"https://www.acmicpc.net/problem/13308",children:"https://www.acmicpc.net/problem/13308"})]}),`
`]}),`
`,i(e.p,{children:["정해는 자전거 최소 가격 기준으로 다익스트라에 쓰이는 배열을 확장해서, ",n(e.code,{children:"dp[1001]"})," 배열을 만들어서 다익스트라를 사용하는 것이다. 그래서 비용이 1000까지로 제한되어 있고, 이것이 출제 의도로 보인다."]}),`
`,i(e.p,{children:["다만, 자전거 가격이 적어도 1이라는 점을 이용해서, 백트래킹을 빡세게 적용하면 이 역시도 ",n(e.code,{children:"AC"}),"를 받는다. 아래는 이 점을 활용한 풀이이다. 주유소 문제도 동일한 방식으로 풀린다. 정해를 몰랐어서 12틀 한것은 안 비밀이다."]}),`
`,n(g,{children:n(e.pre,{children:n(e.code,{className:"language-cpp",children:`struct Edge {
    int v;
    ll w;
    short min;
 
    bool operator<(const struct Edge& t) const {
        if (w != t.w) return w > t.w;
        return v < t.v;
    }
};

int mdist[1001][1001];
 
vector<Edge> e[1001];
 
short s[1001];
int N, M;
void solve() {
    scanf("%d %d", &N, &M);
    for(int i = 1; i <= N; ++i) e[i].clear();
 
    memset(mdist, 0x3F, sizeof(int) * 1001 * 1001);
    FOR(i,0,M) {
        int u, v, w; scanf("%d %d %d", &u, &v, &w);
        if (mdist[u][v] > w) mdist[u][v] = w;
        if (mdist[v][u] > w) mdist[v][u] = w;
    }
 
    FOR(i,1,N+1) {
        FOR(j,1,N+1) {
            if (i == j) continue;
            if (mdist[i][j] >= 0x3F3F3F3F) continue;
            e[i].push_back({j, mdist[i][j], -1});
        }
    }
    FOR(i,1,N+1) {
        ll tmp; scanf("%lld", &tmp);
        s[i] = tmp;
    }
 
    ll minw[1001];
    ll mins[1001];
    memset(minw, 0x3F, sizeof(ll) * 1001);    
    memset(mins, 0x3F, sizeof(ll) * 1001);    
 
    priority_queue<Edge> pq;
    pq.push({1, 0, 2000});
    while(pq.size()) {
        auto cur = pq.top(); pq.pop();
        // _D("checking %d: %lld\\n", cur.v, cur.w);
        if (cur.v == N) {
            printf("%lld\\n", cur.w);
            return;
        }
 
        short cmin = min(cur.min, s[cur.v]);
        for(auto& edge: e[cur.v]) {
            if (edge.min == cmin) continue;
            edge.min = cmin;
            ll tmp = (ll)cur.w + (ll)edge.w * cmin;
            if (minw[edge.v] > tmp || mins[edge.v] > cmin) {
                pq.push({edge.v, tmp, cmin});
                minw[edge.v] = tmp;
                mins[edge.v] = cmin;
            }
        }
    }
    assert(false);
    printf("ERR!\\n");
}
`})})}),`
`,n(u,{}),`
`,n(m,{})]})}function f(l={}){const{wrapper:e}=Object.assign({},o(),l.components);return e?n(e,Object.assign({},l,{children:n(d,l)})):d(l)}const w=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=h;s.main=w;export{s as default};
