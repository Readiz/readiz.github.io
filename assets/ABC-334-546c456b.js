import{p as d}from"./ABC-334_-a05fd42b.js";import{u as r,j as a,a as s,F as m,L as o}from"./ssg-client-fc94ae61.js";import{C as p}from"./Comment-3775179f.js";import{H as g}from"./Header-aef2aec5.js";import{T as N}from"./TagList-937e6d85.js";import"./katex.min-4ed993c7.js";import{S as c,T as t}from"./SolvedTier-71890b45.js";import{A as n}from"./AtCoderResult-784b8586.js";import"./index.module-caf545e8.js";function i(l){const e=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",code:"code",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",annotation:"annotation",mo:"mo",mn:"mn",msup:"msup",mstyle:"mstyle",mfrac:"mfrac"},r(),l.components);return s(m,{children:[a(g,{}),`
`,a(e.h1,{id:"abc-334-upsolving",children:"ABC 334 Upsolving"}),`
`,s(e.ul,{children:[`
`,a(e.li,{children:"대회 참가 유무: Y"}),`
`,s(e.li,{children:["최종 Performance: ",a("span",{style:{color:"#00C0C0"},children:"1206"})," (Rank: 1807 / 11231)"]}),`
`,s(e.li,{children:["Round 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc334",children:"Top"})," / ",a(e.a,{href:"https://atcoder.jp/contests/abc334/tasks",children:"Tasks"})]}),`
`,a(e.li,{children:"문제별 결과"}),`
`]}),`
`,s(e.table,{children:[a(e.thead,{children:s(e.tr,{children:[a(e.th,{align:"center",children:"A"}),a(e.th,{align:"center",children:"B"}),a(e.th,{align:"center",children:"C"}),a(e.th,{align:"center",children:"D"}),a(e.th,{align:"center",children:"E"}),a(e.th,{align:"center",children:"F"}),a(e.th,{align:"center",children:"G"})]})}),a(e.tbody,{children:s(e.tr,{children:[a(e.td,{align:"center",children:a(n,{state:"AC"})}),a(e.td,{align:"center",children:a(n,{state:"AC"})}),a(e.td,{align:"center",children:a(n,{state:"WA"})}),a(e.td,{align:"center",children:a(n,{state:"AC"})}),a(e.td,{align:"center",children:a(n,{state:"AC"})}),a(e.td,{align:"center",children:"-"}),a(e.td,{align:"center",children:"-"})]})})]}),`
`,s(e.p,{children:[a(e.code,{children:"B"}),", ",a(e.code,{children:"C"}),"에서 ",a(n,{state:"WA"}),", ",a(n,{state:"TLE"}),"를 많이 헀고, 최종적으로 ",a(e.code,{children:"C"}),"는 ",a(n,{state:"WA"}),". 업솔빙 필요하다. ",a(e.code,{children:"F"}),", ",a(e.code,{children:"G"})," 도 업솔빙 필요해보인다. 그래도 망한거 치고는 ",a(e.code,{children:"D"}),", ",a(e.code,{children:"E"}),"를 흔들리지 않고 풀 수 있었어서 다행."]}),`
`,a(e.h2,{id:"a---christmas-present",children:"A - Christmas Present"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc334/tasks/abc334_a",children:"https://atcoder.jp/contests/abc334/tasks/abc334_a"})]}),`
`,a(e.li,{children:"Score: 100점"}),`
`,s(e.li,{children:["문제 예상 티어: ",a(c,{tierName:t.Bronze,grade:5,width:15})]}),`
`]}),`
`,a(e.p,{children:"Do you know 비교문? 여기까진 좋았다.."}),`
`,a(e.h2,{id:"b---christmas-trees",children:"B - Christmas Trees"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc334/tasks/abc334_b",children:"https://atcoder.jp/contests/abc334/tasks/abc334_b"})]}),`
`,a(e.li,{children:"Score: 250점"}),`
`,s(e.li,{children:["문제 예상 티어: ",a(c,{tierName:t.Silver,grade:5,width:15})]}),`
`]}),`
`,s(e.p,{children:["여기부터 말렸다. 사실 지금 생각해보면 ",a(e.span,{className:"math math-inline",children:s(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(e.semantics,{children:[a(e.mrow,{children:a(e.mi,{children:"M"})}),a(e.annotation,{encoding:"application/x-tex",children:"M"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:s(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6833em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})]})})]})})," 범위가 ",a(e.span,{className:"math math-inline",children:s(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(e.semantics,{children:[s(e.mrow,{children:[a(e.mi,{children:"M"}),a(e.mo,{children:"≤"}),a(e.mn,{children:"1"}),s(e.msup,{children:[a(e.mn,{children:"0"}),a(e.mn,{children:"9"})]})]}),a(e.annotation,{encoding:"application/x-tex",children:"M \\le 10^9"})]})})}),s(e.span,{className:"katex-html","aria-hidden":"true",children:[s(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.8193em",verticalAlign:"-0.136em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"≤"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.8141em"}}),a(e.span,{className:"mord",children:"1"}),s(e.span,{className:"mord",children:[a(e.span,{className:"mord",children:"0"}),a(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t",children:a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.8141em"},children:s(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})]})]})}),"라서 절대 1씩 증가시켜서는 시간내에 안들어오는건데.. 왜 잘못된 생각을 했는지 모르겠다. 수식을 차분히 전개하는 문제."]}),`
`,s(e.ul,{children:[`
`,a(e.li,{children:a(e.span,{className:"math math-inline",children:s(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(e.semantics,{children:[a(e.mrow,{children:s(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[s(e.mfrac,{children:[s(e.mrow,{children:[a(e.mi,{children:"L"}),a(e.mo,{children:"−"}),a(e.mi,{children:"A"})]}),a(e.mi,{children:"M"})]}),a(e.mo,{children:"≤"}),a(e.mi,{children:"k"}),a(e.mo,{children:"≤"}),s(e.mfrac,{children:[s(e.mrow,{children:[a(e.mi,{children:"R"}),a(e.mo,{children:"−"}),a(e.mi,{children:"A"})]}),a(e.mi,{children:"M"})]})]})}),a(e.annotation,{encoding:"application/x-tex",children:"\\displaystyle \\frac {L - A} M \\le k \\le \\frac {R - A} M"})]})})}),s(e.span,{className:"katex-html","aria-hidden":"true",children:[s(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"2.0463em",verticalAlign:"-0.686em"}}),s(e.span,{className:"mord",children:[a(e.span,{className:"mopen nulldelimiter"}),a(e.span,{className:"mfrac",children:s(e.span,{className:"vlist-t vlist-t2",children:[s(e.span,{className:"vlist-r",children:[s(e.span,{className:"vlist",style:{height:"1.3603em"},children:[s(e.span,{style:{top:"-2.314em"},children:[a(e.span,{className:"pstrut",style:{height:"3em"}}),a(e.span,{className:"mord",children:a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})})]}),s(e.span,{style:{top:"-3.23em"},children:[a(e.span,{className:"pstrut",style:{height:"3em"}}),a(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),s(e.span,{style:{top:"-3.677em"},children:[a(e.span,{className:"pstrut",style:{height:"3em"}}),s(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",children:"L"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mbin",children:"−"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mord mathnormal",children:"A"})]})]})]}),a(e.span,{className:"vlist-s",children:"​"})]}),a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.686em"},children:a(e.span,{})})})]})}),a(e.span,{className:"mclose nulldelimiter"})]}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"≤"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.8304em",verticalAlign:"-0.136em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"≤"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),s(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"2.0463em",verticalAlign:"-0.686em"}}),s(e.span,{className:"mord",children:[a(e.span,{className:"mopen nulldelimiter"}),a(e.span,{className:"mfrac",children:s(e.span,{className:"vlist-t vlist-t2",children:[s(e.span,{className:"vlist-r",children:[s(e.span,{className:"vlist",style:{height:"1.3603em"},children:[s(e.span,{style:{top:"-2.314em"},children:[a(e.span,{className:"pstrut",style:{height:"3em"}}),a(e.span,{className:"mord",children:a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})})]}),s(e.span,{style:{top:"-3.23em"},children:[a(e.span,{className:"pstrut",style:{height:"3em"}}),a(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),s(e.span,{style:{top:"-3.677em"},children:[a(e.span,{className:"pstrut",style:{height:"3em"}}),s(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mbin",children:"−"}),a(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),a(e.span,{className:"mord mathnormal",children:"A"})]})]})]}),a(e.span,{className:"vlist-s",children:"​"})]}),a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.686em"},children:a(e.span,{})})})]})}),a(e.span,{className:"mclose nulldelimiter"})]})]})]})]})})}),`
`]}),`
`,s(e.p,{children:["이라는 것에 주목해서 풀면 되겠다. ",a(e.code,{children:"C++"}),"에서는 ",a(e.code,{children:"MOD"})," 연산이 음수에 적용되면 음수가 나오므로, ",a(e.code,{children:"MOD"}),"만큼 더해주어야 한다."]}),`
`,a(e.h2,{id:"c---socks-2-to-be-upsolved",children:"C - Socks 2 (To be upsolved..)"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc334/tasks/abc334_c",children:"https://atcoder.jp/contests/abc334/tasks/abc334_c"})]}),`
`,a(e.li,{children:"Score: 350점"}),`
`,s(e.li,{children:["문제 예상 티어: ",a(c,{tierName:t.Gold,grade:4,width:15})]}),`
`]}),`
`,s(e.p,{children:["말린 문제 2. 업솔빙 해야한다. 익숙치 않은 ",a(e.code,{children:"양방향 Greedy"}),"."]}),`
`,a(e.h2,{id:"d---reindeer-and-sleigh",children:"D - Reindeer and Sleigh"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc334/tasks/abc334_d",children:"https://atcoder.jp/contests/abc334/tasks/abc334_d"})]}),`
`,a(e.li,{children:"Score: 400점"}),`
`,s(e.li,{children:["문제 예상 티어: ",a(c,{tierName:t.Gold,grade:5,width:15})]}),`
`]}),`
`,s(e.p,{children:["너무 전형적이라 오히려 ",a(e.code,{children:"C"}),"보다 쉬웠다. 누적합을 구해준 뒤 이분탐색을 때리면 된다."]}),`
`,a(e.h2,{id:"e---christmas-color-grid-1",children:"E - Christmas Color Grid 1"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc334/tasks/abc334_e",children:"https://atcoder.jp/contests/abc334/tasks/abc334_e"})]}),`
`,a(e.li,{children:"Score: 450점"}),`
`,s(e.li,{children:["문제 예상 티어: ",a(c,{tierName:t.Gold,grade:3,width:15})]}),`
`]}),`
`,s(e.p,{children:["엄청 전형적이진 않았지만, 그래도 풀이를 떠올리기는 어렵지 않았다. ",a(e.code,{children:"BFS"}),"로 각 컴포넌트들에 ",a(e.code,{children:"id"}),"를 부여해준 뒤, 빈칸에서 인접한 곳에 컴포넌트가 몇개 있는지 보면 된다."]}),`
`,a(e.p,{children:"그리고 역시나 아래 글은 앳코더 할거면 다시 봐야.."}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:[`
`,a(o,{to:"/ps/Algorithm/Math/FastPowModularInverse",children:"빠른 거듭제곱과 모듈로 역원"}),`
`]}),`
`]}),`
`,a(e.h2,{id:"f---christmas-present-2-to-be-upsolved",children:"F - Christmas Present 2 (To be upsolved...)"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc334/tasks/abc334_f",children:"https://atcoder.jp/contests/abc334/tasks/abc334_f"})]}),`
`,a(e.li,{children:"Score: 550점"}),`
`,a(e.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,s(e.p,{children:[a(e.code,{children:"Deque DP"}),"라고 한다. 백준 5977랑 비슷하다고 하니 ",a(e.code,{children:"DP"})," 연습겸 여유되면 살펴볼 예정"]}),`
`,a(e.h2,{id:"g---christmas-color-grid-2-to-be-upsolved",children:"G - Christmas Color Grid 2 (To be upsolved...)"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",a(e.a,{href:"https://atcoder.jp/contests/abc334/tasks/abc334_g",children:"https://atcoder.jp/contests/abc334/tasks/abc334_g"})]}),`
`,a(e.li,{children:"Score: 650점"}),`
`,a(e.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,s(e.p,{children:[a(e.code,{children:"E"}),"의 정반대 버전. 컴포넌트를 중간을 끊는다. 뭔가 전형적인 문제같은데 아직은 잘 모르겠다."]}),`
`,a(N,{}),`
`,a(p,{})]})}function u(l={}){const{wrapper:e}=Object.assign({},r(),l.components);return e?a(e,Object.assign({},l,{children:a(i,l)})):i(l)}const b=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),h={};h.outlineInfo=d;h.main=b;export{h as default};
