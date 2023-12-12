import{p as d}from"./ABC-332_-c5a32b5b.js";import{u as t,j as a,a as n,F as p}from"./ssg-client-ce23700e.js";import{C as o}from"./Comment-8bfc717b.js";import{H as N}from"./Header-9eb1beb5.js";import{T as g}from"./TagList-e40e368a.js";import{D as r}from"./Details-22fc8c64.js";import"./katex.min-4ed993c7.js";import{S as l,T as i}from"./SolvedTier-e52744b3.js";import{A as c}from"./AtCoderResult-21c56ad6.js";import"./index.module-caf545e8.js";function m(s){const e=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",annotation:"annotation",code:"code",mn:"mn",mo:"mo",pre:"pre",msub:"msub",msup:"msup"},t(),s.components);return n(p,{children:[a(N,{}),`
`,a(e.h1,{id:"abc-332-upsolving",children:"ABC 332 Upsolving"}),`
`,n(e.ul,{children:[`
`,a(e.li,{children:"대회 참가 유무: Y"}),`
`,n(e.li,{children:["최종 Performance: ",a("span",{style:{color:"#008000"},children:"1029"})," (Rank: 2217 / 9282)"]}),`
`,n(e.li,{children:["Round 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc332",children:"Top"})," / ",a(e.a,{href:"https://atcoder.jp/contests/abc332/tasks",children:"Tasks"})]}),`
`,a(e.li,{children:"문제별 결과"}),`
`]}),`
`,n(e.table,{children:[a(e.thead,{children:n(e.tr,{children:[a(e.th,{align:"center",children:"A"}),a(e.th,{align:"center",children:"B"}),a(e.th,{align:"center",children:"C"}),a(e.th,{align:"center",children:"D"}),a(e.th,{align:"center",children:"E"}),a(e.th,{align:"center",children:"F"}),a(e.th,{align:"center",children:"G"})]})}),a(e.tbody,{children:n(e.tr,{children:[a(e.td,{align:"center",children:a(c,{state:"AC"})}),a(e.td,{align:"center",children:a(c,{state:"AC"})}),a(e.td,{align:"center",children:a(c,{state:"AC"})}),a(e.td,{align:"center",children:"-"}),a(e.td,{align:"center",children:"-"}),a(e.td,{align:"center",children:"-"}),a(e.td,{align:"center",children:"-"})]})})]}),`
`,a(e.p,{children:"3솔따리가 되었다. D번은 지금 봐도 왜 틀렸는지 잘 모르겠다. D, E, F 모두 무난히 풀 수 있어야 나중에 블루에 안착 가능할 듯. D만 빠르게 구현 했으면 E, F 모두 수학이라, 익숙했더라면 아마 쉽게 F번까지 풀었을 만한 셋이다. 연습이 필요하다."}),`
`,a(e.h2,{id:"a---online-shopping",children:"A - Online Shopping"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_a",children:"https://atcoder.jp/contests/abc332/tasks/abc332_a"})]}),`
`,a(e.li,{children:"Score: 100점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:i.Bronze,grade:5,width:15})]}),`
`]}),`
`,n(e.p,{children:["Do you know 조건문? 경계 조건 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[a(e.mrow,{children:a(e.mi,{children:"K"})}),a(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6833em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})}),"만 판별할 수 있으면 된다."]}),`
`,a(e.h2,{id:"b---glass-and-mug",children:"B - Glass and Mug"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_b",children:"https://atcoder.jp/contests/abc332/tasks/abc332_b"})]}),`
`,a(e.li,{children:"Score: 200점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:i.Silver,grade:5,width:15})]}),`
`]}),`
`,n(e.p,{children:["간단한 ",a(e.code,{children:"시뮬레이션"}),"."]}),`
`,a(e.h2,{id:"c---t-shirts",children:"C - T-Shirts"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_c",children:"https://atcoder.jp/contests/abc332/tasks/abc332_c"})]}),`
`,a(e.li,{children:"Score: 300점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:i.Silver,grade:1,width:15})]}),`
`]}),`
`,n(e.p,{children:["간단한 ",a(e.code,{children:"Greedy"}),". 일반 티셔츠를 먼저 사용하도록 하고, 로고 티셔츠는 로고 티셔츠를 사용해야 할 때만 사용하게 하는 식으로 구현하면 최적이다. 증명.. 나중에 해봐야겠지? :blobthinking:"]}),`
`,a(e.h2,{id:"d---swapping-puzzle-upsolved",children:"D - Swapping Puzzle (Upsolved)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_d",children:"https://atcoder.jp/contests/abc332/tasks/abc332_d"})]}),`
`,a(e.li,{children:"Score: 425점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:i.Gold,grade:2,width:15})]}),`
`]}),`
`,n(e.p,{children:["맵 사이즈가 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mn,{children:"5"}),a(e.mo,{children:"×"}),a(e.mn,{children:"5"})]}),a(e.annotation,{encoding:"application/x-tex",children:"5 \\times 5"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),a(e.span,{className:"mord",children:"5"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mbin",children:"×"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6444em"}}),a(e.span,{className:"mord",children:"5"})]})]})]})}),"가 최대이기 때문에 (그리고 실제로 이동 가능한 곳은 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mn,{children:"4"}),a(e.mo,{children:"×"}),a(e.mn,{children:"4"})]}),a(e.annotation,{encoding:"application/x-tex",children:"4 \\times 4"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),a(e.span,{className:"mord",children:"4"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mbin",children:"×"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6444em"}}),a(e.span,{className:"mord",children:"4"})]})]})]})}),"이기 때문에) 단순 ",a(e.code,{children:"BFS"}),"로 풀린다. 어렵게 접근한 것 자체가 잘못. 계속 시도하다가 ",a(e.code,{children:"WA"}),"가 난 정렬 후 비교 방식은 실제로 다른 ",a(e.code,{children:"row"}),"를 같은 ",a(e.code,{children:"row"}),"로 판정할 수 있기 때문에 안된다."]}),`
`,n(e.p,{children:["몇 가지 Util 함수들을 만들면, 판 자체를 ",a(e.code,{children:"BFS"})," 과정에서 들고 다닐 수 있고, 쉽게 비교할 수 있다. 또한 visited 체크는 판 전체를 ",a(e.code,{children:"stringify"})," 한 후, set을 이용해서 체크하는 방식을 사용했다."]}),`
`,a(r,{children:a(e.pre,{children:a(e.code,{className:"language-cpp",children:`int H, C;

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
`,n(e.p,{children:["정해는 ",a(e.code,{children:"next_permutation"}),"을 활용한다. 내가 안써본 ",a(e.code,{children:"STL"}),"인데, 지금보니 상당히 유용하다. 직접 구현하려면, 뒤쪽부터 '내림차순'이 끝나는 지점을 파악해서, 그 내림차순을 뒤집은 뒤, 내림차순 뒤집고 나서 맨 앞의 숫자를 ",a(e.code,{children:"swap"})," 하면 된다. 규칙은 쉽게 발견할 수 있을 것. ",a(e.code,{children:"next_permutation"}),"을 구하는 데에는 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"N"}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"mclose",children:")"})]})})]})}),"이 걸린다. 또한, 단순히 오름차순과 내림차순이 중요하기 때문에, 조합으로도 쉽게 활용할 수 있다. (",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mo,{stretchy:"false",children:"["}),a(e.mn,{children:"0"}),a(e.mo,{separator:"true",children:","}),a(e.mn,{children:"1"}),a(e.mo,{separator:"true",children:","}),a(e.mn,{children:"1"}),a(e.mo,{stretchy:"false",children:"]"})]}),a(e.annotation,{encoding:"application/x-tex",children:"[0, 1, 1]"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord",children:"0"}),a(e.span,{className:"mpunct",children:","}),a(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mpunct",children:","}),a(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mclose",children:"]"})]})})]})})," 와 같은 배열을 만들어서 쓰면 된다. 내림차순으로만 바꿔줌에 유의. 또는 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mo,{stretchy:"false",children:"["}),a(e.mn,{children:"1"}),a(e.mo,{separator:"true",children:","}),a(e.mn,{children:"1"}),a(e.mo,{separator:"true",children:","}),a(e.mn,{children:"0"}),a(e.mo,{stretchy:"false",children:"]"})]}),a(e.annotation,{encoding:"application/x-tex",children:"[1, 1, 0]"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mpunct",children:","}),a(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mpunct",children:","}),a(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mord",children:"0"}),a(e.span,{className:"mclose",children:"]"})]})})]})})," 으로 한 뒤 ",a(e.code,{children:"prev_permutation"}),"을 사용해도 된다. 그동안은 ",a(e.code,{children:"bitset"}),"만 썼는데 이 방식도 교육적이다.)"]}),`
`,a(r,{children:a(e.pre,{children:a(e.code,{className:"language-cpp",children:`int H, C;
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
`,a(e.h2,{id:"e---lucky-bag-to-be-upsolved",children:"E - Lucky Bag (To be upsolved...)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_e",children:"https://atcoder.jp/contests/abc332/tasks/abc332_e"})]}),`
`,a(e.li,{children:"Score: 525점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:i.Platinum,grade:5,width:15})]}),`
`]}),`
`,n(e.p,{children:["처음에는 정렬 후 완탐인가 싶었는데 ",a(e.code,{children:"E"}),"번에 그런 간단한게 잘 나오지 않는다. 풀이가 떠오르지 않아 에디토리얼을 보고 정리해본다. 결론부터 말하면 처음 본 ",a(e.code,{children:"DP"}),"."]}),`
`,n(e.p,{children:["먼저, 평균값 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[a(e.mrow,{children:n(e.msub,{children:[a(e.mi,{children:"x"}),n(e.mrow,{children:[a(e.mi,{children:"m"}),a(e.mi,{children:"e"}),a(e.mi,{children:"a"}),a(e.mi,{children:"n"})]})]})}),a(e.annotation,{encoding:"application/x-tex",children:"x_{mean}"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),n(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",children:"x"}),a(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t vlist-t2",children:[n(e.span,{className:"vlist-r",children:[a(e.span,{className:"vlist",style:{height:"0.1514em"},children:n(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:[a(e.span,{className:"mord mathnormal mtight",children:"m"}),a(e.span,{className:"mord mathnormal mtight",children:"e"}),a(e.span,{className:"mord mathnormal mtight",children:"an"})]})})]})}),a(e.span,{className:"vlist-s",children:"​"})]}),a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.15em"},children:a(e.span,{})})})]})})]})]})})]})}),"은 가방을 어떻게 분배하든 상관없이 값이 항상 일정하다는 관찰해야 한다. 이 값은 미리 구해두면 변하지 않고 계속 활용 가능하다."]}),`
`,n(e.p,{children:[a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[a(e.mrow,{children:a(e.mi,{children:"S"})}),a(e.annotation,{encoding:"application/x-tex",children:"S"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6833em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]})}),"를 전체 집합의 부분집합으로 정의하고, ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mn,{children:"1"}),a(e.mo,{children:"≤"}),a(e.mi,{children:"k"}),a(e.mo,{children:"≤"}),a(e.mi,{children:"D"})]}),a(e.annotation,{encoding:"application/x-tex",children:"1 \\le k \\le D"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),a(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"≤"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"≤"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6833em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"})]})]})]})}),"인 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[a(e.mrow,{children:a(e.mi,{children:"k"})}),a(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6944em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})}),"를 잡아, ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"d"}),a(e.mi,{children:"p"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"S"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"k"}),a(e.mo,{stretchy:"false",children:"]"})]}),a(e.annotation,{encoding:"application/x-tex",children:"dp[S][k]"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",children:"d"}),a(e.span,{className:"mord mathnormal",children:"p"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),a(e.span,{className:"mclose",children:"]"})]})})]})}),"를 정의한다. 그러면 이 수식은 전체 문제의 부분 문제가 된다. 그리고 문제의 정답은"]}),`
`,n(e.ul,{children:[`
`,a(e.li,{children:a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"d"}),a(e.mi,{children:"p"}),a(e.mo,{stretchy:"false",children:"["}),n(e.msub,{children:[a(e.mi,{children:"S"}),n(e.mrow,{children:[a(e.mi,{children:"o"}),a(e.mi,{children:"r"}),a(e.mi,{children:"i"})]})]}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"D"}),a(e.mo,{stretchy:"false",children:"]"})]}),a(e.annotation,{encoding:"application/x-tex",children:"dp[S_{ori}][D]"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",children:"d"}),a(e.span,{className:"mord mathnormal",children:"p"}),a(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),a(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t vlist-t2",children:[n(e.span,{className:"vlist-r",children:[a(e.span,{className:"vlist",style:{height:"0.3117em"},children:n(e.span,{style:{top:"-2.55em",marginLeft:"-0.0576em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:[a(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"or"}),a(e.span,{className:"mord mathnormal mtight",children:"i"})]})})]})}),a(e.span,{className:"vlist-s",children:"​"})]}),a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.15em"},children:a(e.span,{})})})]})})]}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),a(e.span,{className:"mclose",children:"]"})]})})]})})}),`
`]}),`
`,a(e.p,{children:"에 있을 것이다(물론 최종 정답은 D로 나누어야 한다). 관건은 상태전이식인데.. 일단 전이 시키기 전에, 초기항 (S의 크기가 1이고, 하나의 가방에 다 넣음) 부터 한번 구해보자. 이 값은,"}),`
`,n(e.ul,{children:[`
`,a(e.li,{children:a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"d"}),a(e.mi,{children:"p"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"S"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mn,{children:"1"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{children:"="}),a(e.mo,{stretchy:"false",children:"("}),a(e.mo,{stretchy:"false",children:"("}),a(e.mo,{children:"∑"}),n(e.msub,{children:[a(e.mi,{children:"W"}),a(e.mi,{children:"g"})]}),a(e.mo,{stretchy:"false",children:")"}),a(e.mo,{children:"−"}),n(e.msub,{children:[a(e.mi,{children:"x"}),n(e.mrow,{children:[a(e.mi,{children:"m"}),a(e.mi,{children:"e"}),a(e.mi,{children:"a"}),a(e.mi,{children:"n"})]})]}),n(e.msup,{children:[a(e.mo,{stretchy:"false",children:")"}),a(e.mn,{children:"2"})]})]}),a(e.annotation,{encoding:"application/x-tex",children:"dp[S][1] = ((\\sum W_g) - x_{mean})^2"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",children:"d"}),a(e.span,{className:"mord mathnormal",children:"p"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"="}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),a(e.span,{className:"mopen",children:"(("}),a(e.span,{className:"mop op-symbol small-op",style:{position:"relative",top:"0em"},children:"∑"}),a(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),a(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t vlist-t2",children:[n(e.span,{className:"vlist-r",children:[a(e.span,{className:"vlist",style:{height:"0.1514em"},children:n(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"g"})})]})}),a(e.span,{className:"vlist-s",children:"​"})]}),a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.2861em"},children:a(e.span,{})})})]})})]}),a(e.span,{className:"mclose",children:")"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mbin",children:"−"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",children:"x"}),a(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t vlist-t2",children:[n(e.span,{className:"vlist-r",children:[a(e.span,{className:"vlist",style:{height:"0.1514em"},children:n(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:[a(e.span,{className:"mord mathnormal mtight",children:"m"}),a(e.span,{className:"mord mathnormal mtight",children:"e"}),a(e.span,{className:"mord mathnormal mtight",children:"an"})]})})]})}),a(e.span,{className:"vlist-s",children:"​"})]}),a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.15em"},children:a(e.span,{})})})]})})]}),n(e.span,{className:"mclose",children:[a(e.span,{className:"mclose",children:")"}),a(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t",children:a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.8141em"},children:n(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]})})}),`
`]}),`
`,a(e.p,{children:"로 구해지는 것은 자명하다. 현재 집합은 1개의 물건만 들어있다. 여기에 물건이 하나가 더 들어오면?"}),`
`,n(e.ul,{children:[`
`,a(e.li,{children:a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"d"}),a(e.mi,{children:"p"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"S"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"k"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{children:"="}),a(e.mi,{children:"m"}),a(e.mi,{children:"i"}),a(e.mi,{children:"n"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"d"}),a(e.mi,{children:"p"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"S"}),a(e.mo,{children:"−"}),a(e.mi,{children:"T"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"k"}),a(e.mo,{children:"−"}),a(e.mn,{children:"1"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{children:"+"}),a(e.mi,{children:"d"}),a(e.mi,{children:"p"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"T"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mn,{children:"1"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"dp[S][k] = min(dp[S - T][k - 1] + dp[T][1])"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",children:"d"}),a(e.span,{className:"mord mathnormal",children:"p"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"="}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",children:"min"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",children:"d"}),a(e.span,{className:"mord mathnormal",children:"p"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mbin",children:"−"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mbin",children:"−"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mbin",children:"+"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",children:"d"}),a(e.span,{className:"mord mathnormal",children:"p"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mclose",children:"])"})]})]})]})})}),`
`]}),`
`,a(e.p,{children:"로 전이를 시킬 수 있다고 한다. (이걸 어캐 암?)"}),`
`,n(e.p,{children:["아무튼, 식은 이와 같이 만들 수 있다고 치고, 문제는 시간복잡도인데, ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"d"}),a(e.mi,{children:"p"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mi,{children:"S"}),a(e.mo,{stretchy:"false",children:"]"}),a(e.mo,{stretchy:"false",children:"["}),a(e.mn,{children:"1"}),a(e.mo,{stretchy:"false",children:"]"})]}),a(e.annotation,{encoding:"application/x-tex",children:"dp[S][1]"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",children:"d"}),a(e.span,{className:"mord mathnormal",children:"p"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),a(e.span,{className:"mclose",children:"]"}),a(e.span,{className:"mopen",children:"["}),a(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mclose",children:"]"})]})})]})}),"이 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"N"}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"mclose",children:")"})]})})]})}),"에 얻어질 수 있고, 이에 따른 전체 시간 복잡도는 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"N"}),n(e.msup,{children:[a(e.mn,{children:"2"}),a(e.mi,{children:"N"})]}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N 2^N)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1.0913em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mord",children:[a(e.span,{className:"mord",children:"2"}),a(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t",children:a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.8413em"},children:n(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})]})})})})})]}),a(e.span,{className:"mclose",children:")"})]})})]})}),"이 된다."]}),`
`,a(e.h2,{id:"f---random-update-query-to-be-upsolved",children:"F - Random Update Query (To be upsolved...)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_f",children:"https://atcoder.jp/contests/abc332/tasks/abc332_f"})]}),`
`,a(e.li,{children:"Score: 550점"}),`
`,a(e.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,a(e.p,{children:"F에는 쿼리 문제가 많이 나오는 듯. 업솔빙 예정. 랜덤이기 떄문에 마찬가지로 수학이다."}),`
`,a(e.h2,{id:"g",children:"G"}),`
`,a(e.p,{children:"Skip"}),`
`,a(g,{}),`
`,a(o,{})]})}function u(s={}){const{wrapper:e}=Object.assign({},t(),s.components);return e?a(e,Object.assign({},s,{children:a(m,s)})):m(s)}const y=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),h={};h.outlineInfo=d;h.main=y;export{h as default};
