import{p as d}from"./ABC-332_-29f49d54.js";import{u as m,j as n,a,F as p}from"./ssg-client-1f02da02.js";import{C as o}from"./Comment-818b3b61.js";import{H as N}from"./Header-366ddb64.js";import{T as g}from"./TagList-3b97e87e.js";import{D as r}from"./Details-18487972.js";import"./katex.min-4ed993c7.js";import{S as l,T as i}from"./SolvedTier-0d7a1b1e.js";import{A as t}from"./AtCoderResult-a97328a4.js";import"./index.module-caf545e8.js";function c(s){const e=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",annotation:"annotation",code:"code",mn:"mn",mo:"mo",pre:"pre",msub:"msub",msup:"msup"},m(),s.components);return a(p,{children:[n(N,{}),`
`,n(e.h1,{id:"abc-332-upsolving",children:"ABC 332 Upsolving"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"대회 참가 유무: Y"}),`
`,a(e.li,{children:["최종 Performance: ",n("span",{style:{color:"#008000"},children:"1029"})," (Rank: 2217 / 9282)"]}),`
`,a(e.li,{children:["Round 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332",children:"Top"})," / ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks",children:"Tasks"})]}),`
`,n(e.li,{children:"문제별 결과"}),`
`]}),`
`,a(e.table,{children:[n(e.thead,{children:a(e.tr,{children:[n(e.th,{align:"center",children:"A"}),n(e.th,{align:"center",children:"B"}),n(e.th,{align:"center",children:"C"}),n(e.th,{align:"center",children:"D"}),n(e.th,{align:"center",children:"E"}),n(e.th,{align:"center",children:"F"}),n(e.th,{align:"center",children:"G"})]})}),n(e.tbody,{children:a(e.tr,{children:[n(e.td,{align:"center",children:n(t,{state:"AC"})}),n(e.td,{align:"center",children:n(t,{state:"AC"})}),n(e.td,{align:"center",children:n(t,{state:"AC"})}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"})]})})]}),`
`,n(e.p,{children:"3솔따리가 되었다. D번은 지금 봐도 왜 틀렸는지 잘 모르겠다. D, E, F 모두 무난히 풀 수 있어야 나중에 블루에 안착 가능할 듯. D만 빠르게 구현 했으면 E, F 모두 수학이라, 익숙했더라면 아마 쉽게 F번까지 풀었을 만한 셋이다. 연습이 필요하다."}),`
`,n(e.h2,{id:"a---online-shopping",children:"A - Online Shopping"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_a",children:"https://atcoder.jp/contests/abc332/tasks/abc332_a"})]}),`
`,n(e.li,{children:"Score: 100점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(l,{tierName:i.Bronze,grade:5,width:15})]}),`
`]}),`
`,a(e.p,{children:["Do you know 조건문? 경계 조건 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mi,{children:"K"})}),n(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6833em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})}),"만 판별할 수 있으면 된다."]}),`
`,n(e.h2,{id:"b---glass-and-mug",children:"B - Glass and Mug"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_b",children:"https://atcoder.jp/contests/abc332/tasks/abc332_b"})]}),`
`,n(e.li,{children:"Score: 200점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(l,{tierName:i.Silver,grade:5,width:15})]}),`
`]}),`
`,a(e.p,{children:["간단한 ",n(e.code,{children:"시뮬레이션"}),"."]}),`
`,n(e.h2,{id:"c---t-shirts",children:"C - T-Shirts"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_c",children:"https://atcoder.jp/contests/abc332/tasks/abc332_c"})]}),`
`,n(e.li,{children:"Score: 300점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(l,{tierName:i.Silver,grade:1,width:15})]}),`
`]}),`
`,a(e.p,{children:["간단한 ",n(e.code,{children:"Greedy"}),". 일반 티셔츠를 먼저 사용하도록 하고, 로고 티셔츠는 로고 티셔츠를 사용해야 할 때만 사용하게 하는 식으로 구현하면 최적이다. 증명.. 나중에 해봐야겠지? :blobthinking:"]}),`
`,n(e.h2,{id:"d---swapping-puzzle-upsolved",children:"D - Swapping Puzzle (Upsolved)"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_d",children:"https://atcoder.jp/contests/abc332/tasks/abc332_d"})]}),`
`,n(e.li,{children:"Score: 425점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(l,{tierName:i.Gold,grade:2,width:15})]}),`
`]}),`
`,a(e.p,{children:["맵 사이즈가 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mn,{children:"5"}),n(e.mo,{children:"×"}),n(e.mn,{children:"5"})]}),n(e.annotation,{encoding:"application/x-tex",children:"5 \\times 5"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),n(e.span,{className:"mord",children:"5"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"×"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"5"})]})]})]})}),"가 최대이기 때문에 (그리고 실제로 이동 가능한 곳은 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mn,{children:"4"}),n(e.mo,{children:"×"}),n(e.mn,{children:"4"})]}),n(e.annotation,{encoding:"application/x-tex",children:"4 \\times 4"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),n(e.span,{className:"mord",children:"4"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"×"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"4"})]})]})]})}),"이기 때문에) 단순 ",n(e.code,{children:"BFS"}),"로 풀린다. 어렵게 접근한 것 자체가 잘못. 계속 시도하다가 ",n(e.code,{children:"WA"}),"가 난 정렬 후 비교 방식은 실제로 다른 ",n(e.code,{children:"row"}),"를 같은 ",n(e.code,{children:"row"}),"로 판정할 수 있기 때문에 안된다."]}),`
`,a(e.p,{children:["몇 가지 Util 함수들을 만들면, 판 자체를 ",n(e.code,{children:"BFS"})," 과정에서 들고 다닐 수 있고, 쉽게 비교할 수 있다. 또한 visited 체크는 판 전체를 ",n(e.code,{children:"stringify"})," 한 후, set을 이용해서 체크하는 방식을 사용했다."]}),`
`,n(r,{children:n(e.pre,{children:n(e.code,{className:"language-cpp",children:`int H, C;

struct Board {
    int b[5][5];

    int (&operator[](int idx))[5] {
        return b[idx];
    }
} A, B;

bool cmp(Board& a, Board& b) {
    for(int i = 0; i < H; ++i) {
        for(int j = 0; j < C; ++j) {
            if (a[i][j] == b[i][j]) continue;
            return false;
        }
    }
    return true;
}

unordered_set<string> US;

void visitedReset() {
    US.clear();
}

string getHash(Board& a) {
    string str = "";
    for(int i = 0; i < H; ++i) {
        for(int j = 0; j < C; ++j) {
            str += to_string(a[i][j]) + " ";
        }
    }
    return str;
}

bool checkVisited(Board& a) {
    string hash = getHash(a);
    if (US.find(hash) == US.end()) return false;
    return true;
}

void registerVisited(Board& a) {
    string hash = getHash(a);
    US.insert(hash);
}

struct QData {
    int depth;
    Board b;
} q[1000000];
int qf, qr;

void solve() {
    scanf("%d %d", &H, &C);
    FOR(i,0,H) FOR(j,0,C) scanf("%d", &A[i][j]);
    FOR(i,0,H) FOR(j,0,C) scanf("%d", &B[i][j]);

    int ans = 0x7FFFFFFF;

    Board a = A;
    visitedReset();
    // bfs
    qf = qr = 0;
    q[qr++] = { 0, a };
    while(qf != qr) {
        auto& cur = q[qf++];

        if (checkVisited(cur.b)) continue;
        registerVisited(cur.b);

        if (cmp(cur.b, B)) {
            ans = cur.depth;
            break;
        }

        for(int p = 0; p < H - 1; ++p) {
            Board b = cur.b;
            for(int i = 0; i < C; ++i) swap(b[p][i], b[p+1][i]);
            q[qr++] = {cur.depth + 1, b};
        }
        for(int p = 0; p < C - 1; ++p) {
            Board b = cur.b;
            for(int i = 0; i < H; ++i) swap(b[i][p], b[i][p+1]);
            q[qr++] = {cur.depth + 1, b};
        }
    }

    if (ans != 0x7FFFFFFF) {
        printf("%d\\n", ans);
    } else {
        printf("-1\\n");
    }
}
`})})}),`
`,a(e.p,{children:["정해는 ",n(e.code,{children:"next_permutation"}),"을 활용한다. 내가 안써본 ",n(e.code,{children:"STL"}),"인데, 지금보니 상당히 유용하다. 직접 구현하려면, 뒤쪽부터 '내림차순'이 끝나는 지점을 파악해서, 그 내림차순을 뒤집은 뒤, 내림차순 뒤집고 나서 맨 앞의 숫자를 ",n(e.code,{children:"swap"})," 하면 된다. 규칙은 쉽게 발견할 수 있을 것. ",n(e.code,{children:"next_permutation"}),"을 구하는 데에는 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})}),"이 걸린다. 또한, 단순히 오름차순과 내림차순이 중요하기 때문에, 조합으로도 쉽게 활용할 수 있다. (",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mo,{stretchy:"false",children:"["}),n(e.mn,{children:"0"}),n(e.mo,{separator:"true",children:","}),n(e.mn,{children:"1"}),n(e.mo,{separator:"true",children:","}),n(e.mn,{children:"1"}),n(e.mo,{stretchy:"false",children:"]"})]}),n(e.annotation,{encoding:"application/x-tex",children:"[0, 1, 1]"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord",children:"0"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mclose",children:"]"})]})})]})})," 와 같은 배열을 만들어서 쓰면 된다. 내림차순으로만 바꿔줌에 유의. 또는 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mo,{stretchy:"false",children:"["}),n(e.mn,{children:"1"}),n(e.mo,{separator:"true",children:","}),n(e.mn,{children:"1"}),n(e.mo,{separator:"true",children:","}),n(e.mn,{children:"0"}),n(e.mo,{stretchy:"false",children:"]"})]}),n(e.annotation,{encoding:"application/x-tex",children:"[1, 1, 0]"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord",children:"0"}),n(e.span,{className:"mclose",children:"]"})]})})]})})," 으로 한 뒤 ",n(e.code,{children:"prev_permutation"}),"을 사용해도 된다. 그동안은 ",n(e.code,{children:"bitset"}),"만 썼는데 이 방식도 교육적이다.)"]}),`
`,n(r,{children:n(e.pre,{children:n(e.code,{className:"language-cpp",children:`int H, C;
int A[5][5], B[5][5];

void solve() {
    scanf("%d %d", &H, &C);
    FOR(i,0,H) FOR(j,0,C) scanf("%d", &A[i][j]);
    FOR(i,0,H) FOR(j,0,C) scanf("%d", &B[i][j]);

    int ans = 0x7FFFFFFF;

    int ri[5], ci[5];
    FOR(i,0,H) ri[i] = i;
    FOR(i,0,C) ci[i] = i;

    do {
        do {
            bool flag = true;
            for(int i = 0; i < H; ++i) {
                for(int j = 0; j < C; ++j) {
                    if (A[ri[i]][ci[j]] == B[i][j]) continue;
                    flag = false;
                    break;
                }
            }

            if (flag == false) continue;

            int cur = 0;
            FOR(i,0,H) FOR(j,i+1,H) if (ri[i] > ri[j]) ++cur;
            FOR(i,0,C) FOR(j,i+1,C) if (ci[i] > ci[j]) ++cur;

            if (cur < ans) ans = cur;
        } while(next_permutation(ci, ci + C));
    } while(next_permutation(ri, ri + H));

    if (ans != 0x7FFFFFFF) {
        printf("%d\\n", ans);
    } else {
        printf("-1\\n");
    }
}
`})})}),`
`,n(e.h2,{id:"e---lucky-bag-upsolved",children:"E - Lucky Bag (Upsolved)"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_e",children:"https://atcoder.jp/contests/abc332/tasks/abc332_e"})]}),`
`,n(e.li,{children:"Score: 525점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(l,{tierName:i.Platinum,grade:5,width:15})]}),`
`]}),`
`,a(e.p,{children:["처음에는 정렬 후 완탐인가 싶었는데 ",n(e.code,{children:"E"}),"번에 그런 간단한게 잘 나오지 않는다. 풀이가 떠오르지 않아 에디토리얼을 보고 정리해본다. 결론부터 말하면 처음 본 ",n(e.code,{children:"DP"}),"."]}),`
`,a(e.p,{children:["먼저, 평균값 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:a(e.msub,{children:[n(e.mi,{children:"x"}),a(e.mrow,{children:[n(e.mi,{children:"m"}),n(e.mi,{children:"e"}),n(e.mi,{children:"a"}),n(e.mi,{children:"n"})]})]})}),n(e.annotation,{encoding:"application/x-tex",children:"x_{mean}"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",children:"x"}),n(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.1514em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:[n(e.span,{className:"mord mathnormal mtight",children:"m"}),n(e.span,{className:"mord mathnormal mtight",children:"e"}),n(e.span,{className:"mord mathnormal mtight",children:"an"})]})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.15em"},children:n(e.span,{})})})]})})]})]})})]})}),"은 가방을 어떻게 분배하든 상관없이 값이 항상 일정하다는 관찰해야 한다(수식적으로 구해봐도 같다는 것을 알 수 있다). 이 값은 미리 구해두면 변하지 않고 계속 활용 가능하다."]}),`
`,a(e.p,{children:[n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:a(e.msub,{children:[n(e.mi,{children:"S"}),a(e.mrow,{children:[n(e.mi,{children:"s"}),n(e.mi,{children:"u"}),n(e.mi,{children:"b"})]})]})}),n(e.annotation,{encoding:"application/x-tex",children:"S_{sub}"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),n(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.3361em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:[n(e.span,{className:"mord mathnormal mtight",children:"s"}),n(e.span,{className:"mord mathnormal mtight",children:"u"}),n(e.span,{className:"mord mathnormal mtight",children:"b"})]})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.15em"},children:n(e.span,{})})})]})})]})]})})]})}),"를 전체 집합 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:a(e.msub,{children:[n(e.mi,{children:"S"}),a(e.mrow,{children:[n(e.mi,{children:"a"}),n(e.mi,{children:"l"}),n(e.mi,{children:"l"})]})]})}),n(e.annotation,{encoding:"application/x-tex",children:"S_{all}"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),n(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.3361em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:[n(e.span,{className:"mord mathnormal mtight",children:"a"}),n(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"ll"})]})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.15em"},children:n(e.span,{})})})]})})]})]})})]})}),"의 부분집합으로 정의하고, ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mn,{children:"1"}),n(e.mo,{children:"≤"}),n(e.mi,{children:"k"}),n(e.mo,{children:"≤"}),n(e.mi,{children:"D"})]}),n(e.annotation,{encoding:"application/x-tex",children:"1 \\le k \\le D"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n(e.span,{className:"mrel",children:"≤"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n(e.span,{className:"mrel",children:"≤"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6833em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})]})]})}),"인 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mi,{children:"k"})}),n(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6944em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})}),"를 잡아, ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"d"}),n(e.mi,{children:"p"}),n(e.mo,{stretchy:"false",children:"["}),a(e.msub,{children:[n(e.mi,{children:"S"}),a(e.mrow,{children:[n(e.mi,{children:"s"}),n(e.mi,{children:"u"}),n(e.mi,{children:"b"})]})]}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mi,{children:"k"}),n(e.mo,{stretchy:"false",children:"]"})]}),n(e.annotation,{encoding:"application/x-tex",children:"dp[S_{sub}][k]"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",children:"d"}),n(e.span,{className:"mord mathnormal",children:"p"}),n(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),n(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.3361em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:[n(e.span,{className:"mord mathnormal mtight",children:"s"}),n(e.span,{className:"mord mathnormal mtight",children:"u"}),n(e.span,{className:"mord mathnormal mtight",children:"b"})]})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.15em"},children:n(e.span,{})})})]})})]}),n(e.span,{className:"mclose",children:"]"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),n(e.span,{className:"mclose",children:"]"})]})})]})}),"를 정의한다. 그러면 이 수식은 전체 문제의 부분 문제가 된다. 그리고 문제의 정답은"]}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"d"}),n(e.mi,{children:"p"}),n(e.mo,{stretchy:"false",children:"["}),a(e.msub,{children:[n(e.mi,{children:"S"}),a(e.mrow,{children:[n(e.mi,{children:"a"}),n(e.mi,{children:"l"}),n(e.mi,{children:"l"})]})]}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mi,{children:"D"}),n(e.mo,{stretchy:"false",children:"]"})]}),n(e.annotation,{encoding:"application/x-tex",children:"dp[S_{all}][D]"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",children:"d"}),n(e.span,{className:"mord mathnormal",children:"p"}),n(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),n(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.3361em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:[n(e.span,{className:"mord mathnormal mtight",children:"a"}),n(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"ll"})]})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.15em"},children:n(e.span,{})})})]})})]}),n(e.span,{className:"mclose",children:"]"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),n(e.span,{className:"mclose",children:"]"})]})})]})})}),`
`]}),`
`,n(e.p,{children:"에 있을 것이다(물론 최종 정답은 D로 나누어야 한다). 관건은 상태전이식인데.. 일단 전이 시키기 전에, 초기항 (D의 크기가 1, 하나의 가방에 다 넣음) 부터 한번 구해보자. 이 값은,"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"d"}),n(e.mi,{children:"p"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mi,{children:"S"}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mn,{children:"1"}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{children:"="}),n(e.mo,{stretchy:"false",children:"("}),n(e.mo,{stretchy:"false",children:"("}),n(e.mo,{children:"∑"}),a(e.msub,{children:[n(e.mi,{children:"W"}),n(e.mi,{children:"g"})]}),n(e.mo,{stretchy:"false",children:")"}),n(e.mo,{children:"−"}),a(e.msub,{children:[n(e.mi,{children:"x"}),a(e.mrow,{children:[n(e.mi,{children:"m"}),n(e.mi,{children:"e"}),n(e.mi,{children:"a"}),n(e.mi,{children:"n"})]})]}),a(e.msup,{children:[n(e.mo,{stretchy:"false",children:")"}),n(e.mn,{children:"2"})]})]}),n(e.annotation,{encoding:"application/x-tex",children:"dp[S][1] = ((\\sum W_g) - x_{mean})^2"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",children:"d"}),n(e.span,{className:"mord mathnormal",children:"p"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),n(e.span,{className:"mclose",children:"]"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mclose",children:"]"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n(e.span,{className:"mrel",children:"="}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),n(e.span,{className:"mopen",children:"(("}),n(e.span,{className:"mop op-symbol small-op",style:{position:"relative",top:"0em"},children:"∑"}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),n(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.1514em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"g"})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.2861em"},children:n(e.span,{})})})]})})]}),n(e.span,{className:"mclose",children:")"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"−"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",children:"x"}),n(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.1514em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:[n(e.span,{className:"mord mathnormal mtight",children:"m"}),n(e.span,{className:"mord mathnormal mtight",children:"e"}),n(e.span,{className:"mord mathnormal mtight",children:"an"})]})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.15em"},children:n(e.span,{})})})]})})]}),a(e.span,{className:"mclose",children:[n(e.span,{className:"mclose",children:")"}),n(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t",children:n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.8141em"},children:a(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]})})}),`
`]}),`
`,n(e.p,{children:"로 구해지는 것은 자명하다. 여기에 가방을 하나가 더 고려해보면?"}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"d"}),n(e.mi,{children:"p"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mi,{children:"S"}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mi,{children:"k"}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{children:"="}),n(e.mi,{children:"m"}),n(e.mi,{children:"i"}),n(e.mi,{children:"n"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"d"}),n(e.mi,{children:"p"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mi,{children:"S"}),n(e.mo,{children:"−"}),n(e.mi,{children:"T"}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mi,{children:"k"}),n(e.mo,{children:"−"}),n(e.mn,{children:"1"}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{children:"+"}),n(e.mi,{children:"d"}),n(e.mi,{children:"p"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mi,{children:"T"}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{stretchy:"false",children:"["}),n(e.mn,{children:"1"}),n(e.mo,{stretchy:"false",children:"]"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"dp[S][k] = min(dp[S - T][k - 1] + dp[T][1])"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",children:"d"}),n(e.span,{className:"mord mathnormal",children:"p"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),n(e.span,{className:"mclose",children:"]"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),n(e.span,{className:"mclose",children:"]"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n(e.span,{className:"mrel",children:"="}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",children:"min"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",children:"d"}),n(e.span,{className:"mord mathnormal",children:"p"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"−"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),n(e.span,{className:"mclose",children:"]"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"−"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mclose",children:"]"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"+"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",children:"d"}),n(e.span,{className:"mord mathnormal",children:"p"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),n(e.span,{className:"mclose",children:"]"}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mclose",children:"])"})]})]})]})})}),`
`]}),`
`,a(e.p,{children:["로 전이를 시킬 수 있다고 한다. (이걸 어캐 암?) ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mi,{children:"T"})}),n(e.annotation,{encoding:"application/x-tex",children:"T"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6833em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"})]})})]})})," 집합만큼을 뺀 것을 위 초기식과 연계시킬 수 있다."]}),`
`,a(e.p,{children:["가방에 물건이 들어있는 상태를 ",n(e.code,{children:"bit"}),"로 관리하면, 예를 들어 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:a(e.msub,{children:[n(e.mi,{children:"S"}),a(e.mrow,{children:[n(e.mi,{children:"s"}),n(e.mi,{children:"u"}),n(e.mi,{children:"b"})]})]})}),n(e.annotation,{encoding:"application/x-tex",children:"S_{sub}"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),n(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.3361em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:[n(e.span,{className:"mord mathnormal mtight",children:"s"}),n(e.span,{className:"mord mathnormal mtight",children:"u"}),n(e.span,{className:"mord mathnormal mtight",children:"b"})]})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.15em"},children:n(e.span,{})})})]})})]})]})})]})}),"가 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mn,{children:"11011"})}),n(e.annotation,{encoding:"application/x-tex",children:"11011"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"11011"})]})})]})}),"와 같은 상태일 때, ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mn,{children:"11010"})}),n(e.annotation,{encoding:"application/x-tex",children:"11010"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"11010"})]})})]})}),", ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mn,{children:"11000"})}),n(e.annotation,{encoding:"application/x-tex",children:"11000"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"11000"})]})})]})}),", ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[n(e.mrow,{children:n(e.mn,{children:"10000"})}),n(e.annotation,{encoding:"application/x-tex",children:"10000"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"10000"})]})})]})}),"의 순서로 전이를 시키면서, 최소값을 업데이트 해나가는 식으로 구할 수 있겠다. 자주 쓰이는 방식인데 나만 모르는 웰노운 느낌."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`int W[16];
double dp[1<<15][16] = {0, }; // ans: dp[(1<<N) - 1][D]. 모든 것이 선택되고, 그룹이 D개 일 때. 나누진 않는다.
void solve() {
    int N, D; scanf("%d %d", &N, &D);
    double sum = 0;
    for(int i = 0; i < N; ++i) {
        scanf("%d", &W[i]);
        sum += W[i];
    }
    double avg = sum / D; // 변하지 않음 (관찰 or 식 전개)

    for(int cursor = 0; cursor < (1<<N); ++cursor) {
        double csum = 0;
        for(int j = 0; j < N; ++j) {
            if (cursor & (1<<j)) csum += W[j];
        }
        csum = csum - avg;
        // 1. 초기 조건, D = 1 일 때
        dp[cursor][1] = csum * csum;

        // 2. D >= 1 일 경우 채우기.
        // 전이식: dp[S][k] = min(dp[S][k], dp[S-T][k-1] + dp[T][1]);
        // 순회방법: cursor 를 x에 할당하고, x = (x - 1) & cursor 로 순회하면, 하나 뺀 애들을 순회 가능
        for(int j = 2; j <= D; ++j) {
            dp[cursor][j] = dp[cursor][j-1] + dp[0][1]; // 빈 그룹 추가하는 case를 초기값으로..
            for(int x = cursor; x > 0; x = (x - 1) & cursor) {
                dp[cursor][j] = min(dp[cursor][j], dp[cursor-x][j-1] + dp[x][1]);
            }
        }
    }
    printf("%.15lf\\n", dp[(1<<N) - 1][D] / D);
}
`})}),`
`,n(e.h2,{id:"f---random-update-query-upsolved",children:"F - Random Update Query (Upsolved)"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_f",children:"https://atcoder.jp/contests/abc332/tasks/abc332_f"})]}),`
`,n(e.li,{children:"Score: 550점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(l,{tierName:i.Platinum,grade:2,width:15})]}),`
`]}),`
`,a(e.p,{children:["흔한 Lazy Seg. 그리고 앳코더는 ",n(e.code,{children:"ModInt"})," 참 좋아한다.. 오히려 ",n(e.code,{children:"E"}),"보다 쉬웠다. 백준 문제 중에, ",n(e.code,{children:"수열과 쿼리 13"})," 문제가 있다. 이 문제에 약간의 확률을 끼얹은 것."]}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["수열과 쿼리 13: ",n(e.a,{href:"https://www.acmicpc.net/problem/13925",children:"https://www.acmicpc.net/problem/13925"})]}),`
`]}),`
`,n(r,{children:n(e.pre,{children:n(e.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef unsigned long long ull;

ll MOD = 998244353;

int N;
struct SegNode {
    ll val;
    ll lazySum;
    ll lazyProduct;
};

struct LazySeg {
    SegNode tree[800'040];
    ll arr[200'010];
    
    ll init(int x, int s, int e) {
        tree[x].lazySum = 0;
        tree[x].lazyProduct = 1;
        if (s == e) return tree[x].val = arr[s];
        int m = (s+e)>>1;
        return tree[x].val = (init(x<<1,s,m) + init(x<<1|1,m+1,e)) % MOD;
    }
    void init() {
        init(1, 1, N);
    }

    void push(int x, int s, int e) {
        if (tree[x].lazySum == 0 && tree[x].lazyProduct == 1) return;
        
        tree[x].val *= tree[x].lazyProduct;
        tree[x].val += tree[x].lazySum;
        tree[x].val %= MOD;

        if (s != e) { // if it is not leaf, Propogate
            tree[x<<1].lazySum *= tree[x].lazyProduct;
            tree[x<<1].lazyProduct *= tree[x].lazyProduct;
            tree[x<<1].lazySum += tree[x].lazySum;
            tree[x<<1].lazyProduct %= MOD;
            tree[x<<1].lazySum %= MOD;

            tree[x<<1|1].lazySum *= tree[x].lazyProduct;
            tree[x<<1|1].lazyProduct *= tree[x].lazyProduct;
            tree[x<<1|1].lazySum += tree[x].lazySum;
            tree[x<<1|1].lazyProduct %= MOD;
            tree[x<<1|1].lazySum %= MOD;
            
        }
        tree[x].lazySum = 0;
        tree[x].lazyProduct = 1;
    }

    void updateRange(int x, int s, int e, int l, int r, ll lazySum, ll lazyProduct) {
        push(x, s, e);
        if (r < s || e < l) return;
        if (l <= s && e <= r) {
            tree[x].lazySum += lazySum;
            tree[x].lazyProduct *= lazyProduct;
            push(x, s, e);
            return;
        }
        int m = (s+e)>>1;
        updateRange(x<<1,s,m,l,r,lazySum,lazyProduct);
        updateRange(x<<1|1,m+1,e,l,r,lazySum,lazyProduct);
        tree[x].val = tree[x<<1].val + tree[x<<1|1].val;
        tree[x].val %= MOD;
    }
    void updateRange(int l, int r, ll lazySum, ll lazyProduct) {
        updateRange(1, 1, N, l, r, lazySum, lazyProduct);
    }
    
    int getRange(int x, int s, int e, int l, int r) {
        push(x, s, e);
        if (r < s || e < l) return 0;
        if (l <= s && e <= r) return tree[x].val;
        int m = (s+e)>>1;
        return (getRange(x<<1,s,m,l,r) + getRange(x<<1|1,m+1,e,l,r)) % MOD;
    }
    // int getRange(int l, int r) {
    //     return getRange(1, 1, N, l, r);
    // }
    ll getValue(int idx) {
        return getRange(1,1,N,idx,idx);
    }
} lazySeg;

ll fastPow(ll a, ll p) {
    ll res = 1LL;
    while (p) {
        if (p & 1LL) res = res * a % MOD;
        a = a * a % MOD;
        p >>= 1LL;
    }
    return res;
}

ll getInv(ll v) {
    return fastPow(v, MOD - 2);
}

int main() {
    int M; scanf("%d %d", &N, &M);
    for(int i = 1; i <= N; ++i) scanf("%d", &lazySeg.arr[i]);
    lazySeg.init();

    for(int m = 0; m < M; ++m) {
        ll l, r, v; scanf("%lld %lld %lld", &l, &r, &v);
        ll range = r - l + 1;

        ll p = getInv(range); // uniform 확률 -> 변할 확률 = 1 / range
        ll ip = (range - 1) * p % MOD; // 변하지 않은 확률 = (range - 1) / range
        ll lazyProduct = ip;
        ll lazySum = p * v;

        lazySeg.updateRange(l, r, lazySum, lazyProduct);
    }
    
    for(int i = 1; i <= N; ++i) {
        printf("%lld ", lazySeg.getValue(i));
    }
    printf("\\n");

    return 0;
}
`})})}),`
`,n(e.h2,{id:"g",children:"G"}),`
`,a(e.p,{children:["Skip. 자주 나오는 ",n(e.code,{children:"Flow"})," 유형. 다만 일반적인 ",n(e.code,{children:"Flow"})," 풀이로는 안되고, 최적화가 같이 붙는듯 하다."]}),`
`,n(g,{}),`
`,n(o,{})]})}function u(s={}){const{wrapper:e}=Object.assign({},m(),s.components);return e?n(e,Object.assign({},s,{children:n(c,s)})):c(s)}const y=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),h={};h.outlineInfo=d;h.main=y;export{h as default};
