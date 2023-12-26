import{p as d}from"./ABC-333_-53bd7d8d.js";import{u as r,j as a,a as n,F as m,L as o}from"./ssg-client-0782e3c4.js";import{C as p}from"./Comment-d5cff883.js";import{H as N}from"./Header-83e60b87.js";import{T as g}from"./TagList-8dc1ce0e.js";import{I as u}from"./Image-4123469c.js";import"./katex.min-4ed993c7.js";import{S as l,T as t}from"./SolvedTier-7fb030b5.js";import{A as i}from"./AtCoderResult-21ccf37c.js";import"./index.module-caf545e8.js";function c(s){const e=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",pre:"pre",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mn:"mn",annotation:"annotation",mi:"mi",mo:"mo",msup:"msup"},r(),s.components);return n(m,{children:[a(N,{}),`
`,a(e.h1,{id:"abc-333-upsolving",children:"ABC 333 Upsolving"}),`
`,a(u,{src:"2023-12-16-23-00-00.png"}),`
`,n(e.p,{children:["깔끔한 제출기록. ",a(e.code,{children:"F"}),"를 1시간 고민하고 풀지 못한 것은 아쉽다."]}),`
`,n(e.ul,{children:[`
`,a(e.li,{children:"대회 참가 유무: Y"}),`
`,n(e.li,{children:["최종 Performance: ",a("span",{style:{color:"#00C0C0"},children:"1494"})," (Rank: 1129 / 13970)"]}),`
`,n(e.li,{children:["Round 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc333",children:"Top"})," / ",a(e.a,{href:"https://atcoder.jp/contests/abc333/tasks",children:"Tasks"})]}),`
`,a(e.li,{children:"문제별 결과"}),`
`]}),`
`,n(e.table,{children:[a(e.thead,{children:n(e.tr,{children:[a(e.th,{align:"center",children:"A"}),a(e.th,{align:"center",children:"B"}),a(e.th,{align:"center",children:"C"}),a(e.th,{align:"center",children:"D"}),a(e.th,{align:"center",children:"E"}),a(e.th,{align:"center",children:"F"}),a(e.th,{align:"center",children:"G"})]})}),a(e.tbody,{children:n(e.tr,{children:[a(e.td,{align:"center",children:a(i,{state:"AC"})}),a(e.td,{align:"center",children:a(i,{state:"AC"})}),a(e.td,{align:"center",children:a(i,{state:"AC"})}),a(e.td,{align:"center",children:a(i,{state:"AC"})}),a(e.td,{align:"center",children:a(i,{state:"AC"})}),a(e.td,{align:"center",children:"-"}),a(e.td,{align:"center",children:"-"})]})})]}),`
`,n(e.p,{children:["슬슬 앳코더도 민트각이 보인다. ",a(e.code,{children:"F"}),"번은 앳코더에 많이 나오던 ",a(e.code,{children:"확률 DP"}),"인데, 블로그에 나름 정리를 했는데도 못풀어서 아쉬웠다. 업솔빙 필수."]}),`
`,a(e.h2,{id:"a---three-threes",children:"A - Three Threes"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc333/tasks/abc333_a",children:"https://atcoder.jp/contests/abc333/tasks/abc333_a"})]}),`
`,a(e.li,{children:"Score: 100점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:t.Bronze,grade:5,width:15})]}),`
`]}),`
`,a(e.p,{children:"Do you know 반복문? 단순히 숫자를 입력받아 그 숫자만큼 반복시켜 출력하면 된다."}),`
`,a(e.h2,{id:"b---pentagon",children:"B - Pentagon"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc333/tasks/abc333_b",children:"https://atcoder.jp/contests/abc333/tasks/abc333_b"})]}),`
`,a(e.li,{children:"Score: 200점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:t.Bronze,grade:3,width:15})]}),`
`]}),`
`,n(e.p,{children:["Can you use ",a(e.code,{children:"LUT"}),"? 아래 방식이 머리가 안아프다."]}),`
`,a(e.pre,{children:a(e.code,{className:"language-cpp",children:`int len[5][5] = {
    0, 1, 2, 2, 1,
    1, 0, 1, 2, 2,
    2, 1, 0, 1, 2,
    2, 2, 1, 0, 1,
    1, 2, 2, 1, 0
};
`})}),`
`,a(e.h2,{id:"c---repunit-trio",children:"C - Repunit Trio"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc333/tasks/abc333_c",children:"https://atcoder.jp/contests/abc333/tasks/abc333_c"})]}),`
`,a(e.li,{children:"Score: 300점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:t.Silver,grade:2,width:15})]}),`
`]}),`
`,n(e.p,{children:[a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[a(e.mrow,{children:a(e.mn,{children:"1"})}),a(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6444em"}}),a(e.span,{className:"mord",children:"1"})]})})]})}),"이 반복되는 배열을 미리 만들어두고, ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),n(e.msup,{children:[a(e.mi,{children:"N"}),a(e.mn,{children:"3"})]}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N^3)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t",children:a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.8141em"},children:n(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),a(e.span,{className:"mclose",children:")"})]})})]})})," 의 완전 탐색. 여기서 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[a(e.mrow,{children:a(e.mi,{children:"N"})}),a(e.annotation,{encoding:"application/x-tex",children:"N"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6833em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})}),"은 대충 한 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[a(e.mrow,{children:a(e.mn,{children:"14"})}),a(e.annotation,{encoding:"application/x-tex",children:"14"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6444em"}}),a(e.span,{className:"mord",children:"14"})]})})]})}),"정도의 길이로 잡았다. ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"N"}),a(e.mo,{children:"≤"}),a(e.mn,{children:"333"})]}),a(e.annotation,{encoding:"application/x-tex",children:"N \\le 333"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.8193em",verticalAlign:"-0.136em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"≤"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6444em"}}),a(e.span,{className:"mord",children:"333"})]})]})]})}),"이기 때문에, 커버가 되면 된다. (친절하게 예제 TC에 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"N"}),a(e.mo,{children:"="}),a(e.mn,{children:"333"})]}),a(e.annotation,{encoding:"application/x-tex",children:"N = 333"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6833em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"="}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6444em"}}),a(e.span,{className:"mord",children:"333"})]})]})]})}),"이 있으니 어렵지 않다)"]}),`
`,a(e.h2,{id:"d---erase-leaves",children:"D - Erase Leaves"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc333/tasks/abc333_d",children:"https://atcoder.jp/contests/abc333/tasks/abc333_d"})]}),`
`,a(e.li,{children:"Score: 400점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:t.Gold,grade:3,width:15})]}),`
`]}),`
`,n(e.p,{children:["전형적인 ",a(e.code,{children:"트리 DP"}),". ",a(e.code,{children:"dfs"}),"로 깊이 우선 탐색을 돌리면 각 ",a(e.code,{children:"subtree"}),"의 ",a(e.code,{children:"size"}),"를 구할 수 있고, ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[a(e.mrow,{children:a(e.mn,{children:"1"})}),a(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6444em"}}),a(e.span,{className:"mord",children:"1"})]})})]})}),"번 정점에 연결된 녀석들의 ",a(e.code,{children:"size"})," 중 가장 큰 애를 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[a(e.mrow,{children:a(e.mn,{children:"1"})}),a(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6444em"}}),a(e.span,{className:"mord",children:"1"})]})})]})}),"번 정점의 ",a(e.code,{children:"size"}),"에서 빼주면 답이 된다. 시간복잡도는 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"N"}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"mclose",children:")"})]})})]})}),"."]}),`
`,a(e.h2,{id:"e---takahashi-quest",children:"E - Takahashi Quest"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc333/tasks/abc333_e",children:"https://atcoder.jp/contests/abc333/tasks/abc333_e"})]}),`
`,a(e.li,{children:"Score: 450점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:t.Gold,grade:3,width:15})]}),`
`]}),`
`,n(e.p,{children:[a(e.code,{children:"시뮬레이션"})," + ",a(e.code,{children:"Greedy"}),". 포션이 여러 종류가 있고 이 포션을 몬스터를 잡는데에 사용한다. 시간대별로 용사의 모험이 진행되므로, 포션은 가급적 몬스터에 마주치기 직전의 포션을 쓰는 것이 좋겠다(Greedy stays ahead). 만약 마주친 시점에 사용할 수 있는 포션이 없다면 즉시 종료. 하나라도 있다면 가능하고, 스택으로 어느 포션을 집을지 결정한다. 결정한 후, ",a(e.code,{children:"Fenwick"})," 과 같은 자료구조로 다시 처음부터 시뮬레이션 하면서 용사의 최대 포션 소지량을 계산할 수 있다. 이렇게 하면 시간복잡도는 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"N"}),a(e.mi,{children:"log"}),a(e.mo,{children:"⁡"}),a(e.mi,{children:"N"}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N \\log N)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mop",children:["lo",a(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),a(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"mclose",children:")"})]})})]})}),"."]}),`
`,n(e.p,{children:["Editorial에서는 ",a(e.code,{children:"Fenwick"}),"이 아닌 ",a(e.code,{children:"imos"}),"로 계산했다. (",a(e.code,{children:"inclusive_scan"}),"이라는 못보던 ",a(e.code,{children:"STL"}),"을 사용했다.)"]}),`
`,a(e.h2,{id:"f---bomb-game-2-to-be-upsolved",children:"F - Bomb Game 2 (To be upsolved...)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc333/tasks/abc333_f",children:"https://atcoder.jp/contests/abc333/tasks/abc333_f"})]}),`
`,a(e.li,{children:"Score: 550점"}),`
`,n(e.li,{children:["문제 예상 티어: ",a(l,{tierName:t.Platinum,grade:2,width:15})]}),`
`]}),`
`,n(e.p,{children:["앳코더 빈출 유형. 예전 ",a(e.code,{children:"DP"})," 연습용 셋의 ",a(e.code,{children:"확률 DP"})," 문제이다. 확률간의 전이를 생각해야 하는 문제. 업솔빙 예정. 결과 출력이 분수 형태가 될 때 해당 출력을 모듈로 역원으로 다루는 문제는 앳코더에 자주 나와서 아래 글에 한번 더 정리했다."]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,a(o,{to:"/ps/Algorithm/Math/FastPowModularInverse",children:"빠른 거듭제곱과 모듈로 역원"}),`
`]}),`
`]}),`
`,a(e.h2,{id:"g---nearest-fraction-will-not-be-upsovled-just-memo",children:"G - Nearest Fraction (Will not be upsovled, just memo)"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc333/tasks/abc333_g",children:"https://atcoder.jp/contests/abc333/tasks/abc333_g"})]}),`
`,a(e.li,{children:"Score: 625점"}),`
`,a(e.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,n(e.p,{children:["특이한 풀이가 있어서 메모용으로 저장해둔다. 갓이썬의 ",a(e.code,{children:"Fraction"}),"을 사용한 풀이."]}),`
`,a(e.pre,{children:a(e.code,{className:"language-python",children:`from fractions import Fraction
r = Fraction(input())
N = int(input())
ans = (r - Fraction("1e-100")).limit_denominator(N)
print(*ans.as_integer_ratio())
`})}),`
`,a(g,{}),`
`,a(p,{})]})}function b(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?a(e,Object.assign({},s,{children:a(c,s)})):c(s)}const w=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),h={};h.outlineInfo=d;h.main=w;export{h as default};
