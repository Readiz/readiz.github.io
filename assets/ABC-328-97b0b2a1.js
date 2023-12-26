import{p as d}from"./ABC-328_-d4e0aada.js";import{u as r,j as n,a,F as m}from"./ssg-client-104e7b0e.js";import{C as o}from"./Comment-42c5f833.js";import{H as p}from"./Header-aa7c9408.js";import{T as g}from"./TagList-3707b97a.js";import{I as N}from"./Image-198e4218.js";import"./katex.min-4ed993c7.js";import{S as s,T as t}from"./SolvedTier-08ad2423.js";import{A as l}from"./AtCoderResult-6d6440d4.js";import"./index.module-caf545e8.js";function i(c){const e=Object.assign({h1:"h1",p:"p",del:"del",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",mn:"mn",msup:"msup",annotation:"annotation",pre:"pre"},r(),c.components);return a(m,{children:[n(p,{}),`
`,n(e.h1,{id:"abc-328-upsolving",children:"ABC 328 Upsolving"}),`
`,n(N,{src:"2023-11-11-23-23-30.png"}),`
`,n(e.p,{children:n(e.del,{children:"파멸적 떡상"})}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"대회 참가 유무: Y"}),`
`,a(e.li,{children:["최종 Performance: ",n("span",{style:{color:"#00C0C0"},children:"1319"})," (Rank: 1639 / 10710)"]}),`
`,a(e.li,{children:["Round 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc328",children:"Top"})," / ",n(e.a,{href:"https://atcoder.jp/contests/abc328/tasks",children:"Tasks"})]}),`
`,n(e.li,{children:"문제별 결과"}),`
`]}),`
`,a(e.table,{children:[n(e.thead,{children:a(e.tr,{children:[n(e.th,{align:"center",children:"A"}),n(e.th,{align:"center",children:"B"}),n(e.th,{align:"center",children:"C"}),n(e.th,{align:"center",children:"D"}),n(e.th,{align:"center",children:"E"}),n(e.th,{align:"center",children:"F"}),n(e.th,{align:"center",children:"G"})]})}),n(e.tbody,{children:a(e.tr,{children:[n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:n(l,{state:"WA"})}),n(e.td,{align:"center",children:"-"})]})})]}),`
`,a(e.p,{children:["상당히 웰논들이었다. ",n(e.code,{children:"F"}),"번도 웰논이라는데 못풀어서 아쉽다. 저번주 ",n(e.code,{children:"D"}),"번이랑도 느낌은 비슷했는데, 복기를 안해서 좀 아쉬웠다."]}),`
`,n(e.h2,{id:"a---not-too-hard",children:"A - Not Too Hard"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc328/tasks/abc328_a",children:"https://atcoder.jp/contests/abc328/tasks/abc328_a"})]}),`
`,n(e.li,{children:"Score: 100점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(s,{tierName:t.Bronze,grade:5,width:15})]}),`
`]}),`
`,n(e.p,{children:"그냥 대소비교 하는 기초 문제."}),`
`,n(e.h2,{id:"b---1111",children:"B - 11/11"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc328/tasks/abc328_b",children:"https://atcoder.jp/contests/abc328/tasks/abc328_b"})]}),`
`,n(e.li,{children:"Score: 200점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(s,{tierName:t.Silver,grade:2,width:15})]}),`
`]}),`
`,a(e.p,{children:["제목만 보고 빼빼로 데이 기념 문제인가 했는데 그건 전혀 아니었고, 월 / 일이 모두 같은 숫자로 구성되는 경우들을 세는 문제였다. 조건 찾는게 좀 빡치는 문제. 요구사항의 복잡성만으로 ",n(e.code,{children:"Silver 2"}),"를 줄만한 문제인거 같다."]}),`
`,n(e.h2,{id:"c---consecutive",children:"C - Consecutive"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc328/tasks/abc328_c",children:"https://atcoder.jp/contests/abc328/tasks/abc328_c"})]}),`
`,n(e.li,{children:"Score: 300점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(s,{tierName:t.Gold,grade:5,width:15})]}),`
`]}),`
`,a(e.p,{children:[n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"N"}),n(e.mo,{separator:"true",children:","}),n(e.mi,{children:"Q"}),n(e.mo,{children:"≤"}),n(e.mn,{children:"3"}),n(e.mo,{children:"×"}),n(e.mn,{children:"1"}),a(e.msup,{children:[n(e.mn,{children:"0"}),n(e.mn,{children:"5"})]})]}),n(e.annotation,{encoding:"application/x-tex",children:"N, Q \\le 3 \\times 10^5"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",children:"Q"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n(e.span,{className:"mrel",children:"≤"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),n(e.span,{className:"mord",children:"3"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"×"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.8141em"}}),n(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord",children:"0"}),n(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t",children:n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.8141em"},children:a(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:"5"})})]})})})})})]})]})]})]})})," 인 조건으로, 무조건 전처리가 필요함을 알 수 있다. 다행히도, 조금 읽어보면 빈출 유형인 ",n(e.code,{children:"Prefix Sum"}),"임을 알 수 있고, 쉽게 풀 수 있었다. ",n(e.code,{children:"Prefix Sum"}),"을 사용하면 각 쿼리를 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mn,{children:"1"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mclose",children:")"})]})})]})}),"로 처리할 수 있으므로, ",n(e.code,{children:"TLE"}),"를 피할 수 있다."]}),`
`,n(e.h2,{id:"d---take-abc",children:"D - Take ABC"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc328/tasks/abc328_d",children:"https://atcoder.jp/contests/abc328/tasks/abc328_d"})]}),`
`,n(e.li,{children:"Score: 425"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(s,{tierName:t.Gold,grade:4,width:15})]}),`
`]}),`
`,a(e.p,{children:["백준이 비슷한 문제가 있다고 한다. 정해는 여러가지가 있을 수 있겠는데, 나는 ",n(e.code,{children:"Linked List"}),"로 풀었다. ",n(e.code,{children:"Stack"})," 써도 될듯 하다."]}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문자열 폭발 문제: ",n(e.a,{href:"https://www.acmicpc.net/problem/9935",children:"https://www.acmicpc.net/problem/9935"})]}),`
`]}),`
`,n(e.h2,{id:"e---modulo-mst",children:"E - Modulo MST"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc328/tasks/abc328_e",children:"https://atcoder.jp/contests/abc328/tasks/abc328_e"})]}),`
`,n(e.li,{children:"Score: 475"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(s,{tierName:t.Gold,grade:2,width:15})]}),`
`]}),`
`,a(e.p,{children:[n(e.code,{children:"MST"}),"는 ",n(e.code,{children:"크루스칼 알고리즘"})," 등을 사용하면 쉽게 구할 수 있는데, 문제는 ",n(e.code,{children:"Modulo"})," 결과를 최소화 해야 한다. 따라서, ",n(e.code,{children:"PQ"}),"를 사용한 풀이는 불가하다. 다행히도, ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"N"}),n(e.mo,{children:"≤"}),n(e.mn,{children:"8"})]}),n(e.annotation,{encoding:"application/x-tex",children:"N \\le 8"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.8193em",verticalAlign:"-0.136em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),n(e.span,{className:"mrel",children:"≤"}),n(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"8"})]})]})]})}),"이라서, 완전 탐색이 가능하다. ",n(e.code,{children:"MST"}),"에서 했던대로, 간선을 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"N"}),n(e.mo,{children:"−"}),n(e.mn,{children:"1"})]}),n(e.annotation,{encoding:"application/x-tex",children:"N-1"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"−"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"1"})]})]})]})}),"개만 사용하면서, ",n(e.code,{children:"Cycle"}),"이 없도록 하는 것들을 완전 탐색 해서 최소가 되는 값을 구해주면 되겠다."]}),`
`,a(e.p,{children:[n(e.code,{children:"Cycle"})," 판정은 아래처럼 한다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`if (uf.findRoot(c.s) != uf.findRoot(c.e)) {
    // no cycle: 비용을 더해준다.
    uf.merge(c.s, c.e);
    csum += c.weight;
    csum %= K;
} else {
    // cycle
    flag = false;
    break;
}
`})}),`
`,n(e.h2,{id:"f---good-set-query-to-be-upsolved",children:"F - Good Set Query (To be upsolved...)"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc328/tasks/abc328_f",children:"https://atcoder.jp/contests/abc328/tasks/abc328_f"})]}),`
`,n(e.li,{children:"Score: 525"}),`
`,n(e.li,{children:"문제 예상 티어: ???"}),`
`]}),`
`,n(e.p,{children:"풀이 실패. 어디서 틀리는지는 알았지만 해결을 못했다. 이거도 백준에 비슷한 문제가 있다고 한다. 에디토리얼 보지 않고 한번 풀어볼 예정."}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["교수님은 기다리지 않는다 문제: ",n(e.a,{href:"https://www.acmicpc.net/problem/3830",children:"https://www.acmicpc.net/problem/3830"})]}),`
`]}),`
`,n(e.h2,{id:"g---cut-and-reorder-to-be-upsolved",children:"G - Cut and Reorder (To be upsolved?)"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc328/tasks/abc328_g",children:"https://atcoder.jp/contests/abc328/tasks/abc328_g"})]}),`
`,n(e.li,{children:"Score: 575"}),`
`,n(e.li,{children:"문제 예상 티어: ???"}),`
`]}),`
`,a(e.p,{children:["업솔빙 할지 안할지 잘 모르겠다. 나름 전형적인 ",n(e.code,{children:"DP"})," 문제이지만, 문제 조건 때문에 ",n(e.code,{children:"DP 최적화"}),"가 붙어야 한다고 한다. 연습삼아 한번 풀어볼까... (비트 DP?)"]}),`
`,n(g,{}),`
`,n(o,{})]})}function u(c={}){const{wrapper:e}=Object.assign({},r(),c.components);return e?n(e,Object.assign({},c,{children:n(i,c)})):i(c)}const b=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),h={};h.outlineInfo=d;h.main=b;export{h as default};
