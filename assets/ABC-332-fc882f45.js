import{p as h}from"./ABC-332_-c5a32b5b.js";import{u as l,j as e,a,F as o}from"./ssg-client-6b0220d4.js";import{C as m}from"./Comment-76aa46be.js";import{H as p}from"./Header-cbc3537d.js";import{T as b}from"./TagList-d93ec40f.js";import{D as g}from"./Details-5552ac97.js";import"./katex.min-4ed993c7.js";import{S as i,T as r}from"./SolvedTier-4763b1be.js";import{A as c}from"./AtCoderResult-2c6707bb.js";import"./index.module-caf545e8.js";function s(t){const n=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",annotation:"annotation",code:"code",mn:"mn",mo:"mo",pre:"pre"},l(),t.components);return a(o,{children:[e(p,{}),`
`,e(n.h1,{id:"abc-332-upsolving",children:"ABC 332 Upsolving"}),`
`,a(n.ul,{children:[`
`,e(n.li,{children:"대회 참가 유무: Y"}),`
`,a(n.li,{children:["최종 Performance: ",e("span",{style:{color:"#008000"},children:"1029"})," (Rank: 2217 / 9282)"]}),`
`,a(n.li,{children:["Round 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc332",children:"Top"})," / ",e(n.a,{href:"https://atcoder.jp/contests/abc332/tasks",children:"Tasks"})]}),`
`,e(n.li,{children:"문제별 결과"}),`
`]}),`
`,a(n.table,{children:[e(n.thead,{children:a(n.tr,{children:[e(n.th,{align:"center",children:"A"}),e(n.th,{align:"center",children:"B"}),e(n.th,{align:"center",children:"C"}),e(n.th,{align:"center",children:"D"}),e(n.th,{align:"center",children:"E"}),e(n.th,{align:"center",children:"F"}),e(n.th,{align:"center",children:"G"})]})}),e(n.tbody,{children:a(n.tr,{children:[e(n.td,{align:"center",children:e(c,{state:"AC"})}),e(n.td,{align:"center",children:e(c,{state:"AC"})}),e(n.td,{align:"center",children:e(c,{state:"AC"})}),e(n.td,{align:"center",children:"-"}),e(n.td,{align:"center",children:"-"}),e(n.td,{align:"center",children:"-"}),e(n.td,{align:"center",children:"-"})]})})]}),`
`,e(n.p,{children:"3솔따리가 되었다. D번은 지금 봐도 왜 틀렸는지 잘 모르겠다. D, E, F 모두 무난히 풀 수 있어야 나중에 블루에 안착 가능할 듯. D만 빠르게 구현 했으면 E, F 모두 수학이라, 익숙했더라면 아마 쉽게 F번까지 풀었을 만한 셋이다. 연습이 필요하다."}),`
`,e(n.h2,{id:"a---online-shopping",children:"A - Online Shopping"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_a",children:"https://atcoder.jp/contests/abc332/tasks/abc332_a"})]}),`
`,e(n.li,{children:"Score: 100점"}),`
`,a(n.li,{children:["문제 예상 티어: ",e(i,{tierName:r.Bronze,grade:5,width:15})]}),`
`]}),`
`,a(n.p,{children:["Do you know 조건문? 경계 조건 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[e(n.mrow,{children:e(n.mi,{children:"K"})}),e(n.annotation,{encoding:"application/x-tex",children:"K"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6833em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})}),"만 판별할 수 있으면 된다."]}),`
`,e(n.h2,{id:"b---glass-and-mug",children:"B - Glass and Mug"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_b",children:"https://atcoder.jp/contests/abc332/tasks/abc332_b"})]}),`
`,e(n.li,{children:"Score: 200점"}),`
`,a(n.li,{children:["문제 예상 티어: ",e(i,{tierName:r.Silver,grade:5,width:15})]}),`
`]}),`
`,a(n.p,{children:["간단한 ",e(n.code,{children:"시뮬레이션"}),"."]}),`
`,e(n.h2,{id:"c---t-shirts",children:"C - T-Shirts"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_c",children:"https://atcoder.jp/contests/abc332/tasks/abc332_c"})]}),`
`,e(n.li,{children:"Score: 300점"}),`
`,a(n.li,{children:["문제 예상 티어: ",e(i,{tierName:r.Silver,grade:1,width:15})]}),`
`]}),`
`,a(n.p,{children:["간단한 ",e(n.code,{children:"Greedy"}),". 일반 티셔츠를 먼저 사용하도록 하고, 로고 티셔츠는 로고 티셔츠를 사용해야 할 때만 사용하게 하는 식으로 구현하면 최적이다. 증명.. 나중에 해봐야겠지? :blobthinking:"]}),`
`,e(n.h2,{id:"d---swapping-puzzle-upsolved",children:"D - Swapping Puzzle (Upsolved)"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_d",children:"https://atcoder.jp/contests/abc332/tasks/abc332_d"})]}),`
`,e(n.li,{children:"Score: 425점"}),`
`,a(n.li,{children:["문제 예상 티어: ",e(i,{tierName:r.Gold,grade:2,width:15})]}),`
`]}),`
`,a(n.p,{children:["맵 사이즈가 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mn,{children:"5"}),e(n.mo,{children:"×"}),e(n.mn,{children:"5"})]}),e(n.annotation,{encoding:"application/x-tex",children:"5 \\times 5"})]})})}),a(n.span,{className:"katex-html","aria-hidden":"true",children:[a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),e(n.span,{className:"mord",children:"5"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"×"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"5"})]})]})]})}),"가 최대이기 때문에 (그리고 실제로 이동 가능한 곳은 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mn,{children:"4"}),e(n.mo,{children:"×"}),e(n.mn,{children:"4"})]}),e(n.annotation,{encoding:"application/x-tex",children:"4 \\times 4"})]})})}),a(n.span,{className:"katex-html","aria-hidden":"true",children:[a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),e(n.span,{className:"mord",children:"4"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),e(n.span,{className:"mbin",children:"×"}),e(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.6444em"}}),e(n.span,{className:"mord",children:"4"})]})]})]})}),"이기 때문에) 단순 ",e(n.code,{children:"BFS"}),"로 풀린다. 어렵게 접근한 것 자체가 잘못. 계속 시도하다가 ",e(n.code,{children:"WA"}),"가 난 정렬 후 비교 방식은 실제로 다른 ",e(n.code,{children:"row"}),"를 같은 ",e(n.code,{children:"row"}),"로 판정할 수 있기 때문에 안된다."]}),`
`,a(n.p,{children:["몇 가지 Util 함수들을 만들면, 판 자체를 ",e(n.code,{children:"BFS"})," 과정에서 들고 다닐 수 있고, 쉽게 비교할 수 있다. 또한 visited 체크는 판 전체를 ",e(n.code,{children:"stringify"})," 한 후, set을 이용해서 체크하는 방식을 사용했다."]}),`
`,e(g,{children:e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int H, C;

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
`,e(n.h2,{id:"e---lucky-bag-to-be-upsolved",children:"E - Lucky Bag (To be upsolved...)"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_e",children:"https://atcoder.jp/contests/abc332/tasks/abc332_e"})]}),`
`,e(n.li,{children:"Score: 525점"}),`
`,e(n.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,e(n.p,{children:"D번 푸느라 제대로 못봤다. 업솔빙 예정. 읽어봤을 때는 수학 문제인듯. 500점짜리 문제는 확실히 접근 시작이 쉽진 않다."}),`
`,e(n.h2,{id:"f---random-update-query-to-be-upsolved",children:"F - Random Update Query (To be upsolved...)"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_f",children:"https://atcoder.jp/contests/abc332/tasks/abc332_f"})]}),`
`,e(n.li,{children:"Score: 550점"}),`
`,e(n.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,e(n.p,{children:"F에는 쿼리 문제가 많이 나오는 듯. 업솔빙 예정. 랜덤이기 떄문에 마찬가지로 수학이다."}),`
`,e(n.h2,{id:"g",children:"G"}),`
`,e(n.p,{children:"Skip"}),`
`,e(b,{}),`
`,e(m,{})]})}function u(t={}){const{wrapper:n}=Object.assign({},l(),t.components);return n?e(n,Object.assign({},t,{children:e(s,t)})):s(t)}const f=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=h;d.main=f;export{d as default};
