import{p as m}from"./CF-916_-1870cf81.js";import{u as t,j as n,a as s,F as d}from"./ssg-client-a84c9b7f.js";import{C as o}from"./Comment-7f989ffb.js";import{H as p}from"./Header-c09ea125.js";import{T as g}from"./TagList-d587a9ba.js";import"./katex.min-4ed993c7.js";import{S as i,T as c}from"./SolvedTier-16f7ceea.js";import{A as a}from"./AtCoderResult-76ff6986.js";import"./index.module-caf545e8.js";function r(l){const e=Object.assign({h1:"h1",ul:"ul",li:"li",strong:"strong",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",code:"code",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mn:"mn",mo:"mo",annotation:"annotation",msub:"msub",mi:"mi"},t(),l.components);return s(d,{children:[n(p,{}),`
`,n(e.h1,{id:"codeforces-round-916-upsolving",children:"Codeforces Round 916 Upsolving"}),`
`,s(e.ul,{children:[`
`,n(e.li,{children:"대회 참가 유무: Y"}),`
`,s(e.li,{children:["최종 Performance: ",n("span",{style:{color:"#03a89e"},children:n(e.strong,{children:"1405"})})," (Rank: 2068 / 18719)"]}),`
`,s(e.li,{children:["Round 링크: ",n(e.a,{href:"https://codeforces.com/contest/1914",children:"Top"})," / ",n(e.a,{href:"https://codeforces.com/contest/1914/problems",children:"Problems"})]}),`
`,n(e.li,{children:"문제별 결과"}),`
`]}),`
`,s(e.table,{children:[n(e.thead,{children:s(e.tr,{children:[n(e.th,{align:"center",children:"A"}),n(e.th,{align:"center",children:"B"}),n(e.th,{align:"center",children:"C"}),n(e.th,{align:"center",children:"D"}),n(e.th,{align:"center",children:"E1"}),n(e.th,{align:"center",children:"E2"}),n(e.th,{align:"center",children:"F"}),n(e.th,{align:"center",children:"G1"}),n(e.th,{align:"center",children:"G2"})]})}),n(e.tbody,{children:s(e.tr,{children:[n(e.td,{align:"center",children:n(a,{state:"AC"})}),n(e.td,{align:"center",children:n(a,{state:"AC"})}),n(e.td,{align:"center",children:n(a,{state:"AC"})}),n(e.td,{align:"center",children:n(a,{state:"AC"})}),n(e.td,{align:"center",children:n(a,{state:"AC"})}),n(e.td,{align:"center",children:n(a,{state:"AC"})}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"})]})})]}),`
`,s(e.p,{children:[n(e.code,{children:"F"}),", ",n(e.code,{children:"G1"})," 중에 하나만 더 풀었으면, 떡상각이었는데 너무 아쉽다. ",n(e.code,{children:"F"}),", ",n(e.code,{children:"G1"})," 복기 예정."]}),`
`,n(e.h2,{id:"a---problemsolving-log",children:"A - Problemsolving Log"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1914/problem/A",children:"https://codeforces.com/contest/1914/problem/A"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,s(e.li,{children:["문제 예상 티어: ",n(i,{tierName:c.Bronze,grade:3,width:15})]}),`
`]}),`
`,n(e.p,{children:"전형적인 코포스타일 A번."}),`
`,n(e.h2,{id:"b---preparing-for-the-contest",children:"B - Preparing for the Contest"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1914/problem/B",children:"https://codeforces.com/contest/1914/problem/B"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,s(e.li,{children:["문제 예상 티어: ",n(i,{tierName:c.Silver,grade:3,width:15})]}),`
`]}),`
`,s(e.p,{children:[n(e.code,{children:"Deque"})," 느낌으로, 앞 뒤로 숫자를 넣어 해결했다."]}),`
`,n(e.h2,{id:"c---quests",children:"C - Quests"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1914/problem/C",children:"https://codeforces.com/contest/1914/problem/C"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,s(e.li,{children:["문제 예상 티어: ",n(i,{tierName:c.Gold,grade:5,width:15})]}),`
`]}),`
`,s(e.p,{children:["전형적인 ",n(e.code,{children:"Greedy"}),". ",n(e.code,{children:"prefix sum"}),"과 ",n(e.code,{children:"prefix max"})," 를 구해야 하는 문제라서 재밌었다. RPG 장르에서 1회성 퀘스트 이후 반복하면 보상이 안좋아지는 그런 것을 사용해서 낸 재밌는 문제."]}),`
`,n(e.h2,{id:"d---three-activities",children:"D - Three Activities"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1914/problem/D",children:"https://codeforces.com/contest/1914/problem/D"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,s(e.li,{children:["문제 예상 티어: ",n(i,{tierName:c.Silver,grade:2,width:15})]}),`
`]}),`
`,s(e.p,{children:["한 D번 오면 보통 머리가 잘 안돌아간다. 그래서 각 활동 중 이득인 것 기준으로 정렬해서 ",n(e.span,{className:"math math-inline",children:s(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(e.semantics,{children:[s(e.mrow,{children:[n(e.mn,{children:"100"}),n(e.mo,{children:"∗"}),n(e.mn,{children:"100"}),n(e.mo,{children:"∗"}),n(e.mn,{children:"100"})]}),n(e.annotation,{encoding:"application/x-tex",children:"100 * 100 * 100"})]})})}),s(e.span,{className:"katex-html","aria-hidden":"true",children:[s(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"100"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"∗"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"100"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"∗"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"100"})]})]})]})})," 만큼 반복했는데, 알고보니 ",n(e.span,{className:"math math-inline",children:s(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(e.semantics,{children:[s(e.mrow,{children:[n(e.mn,{children:"3"}),n(e.mo,{children:"∗"}),n(e.mn,{children:"3"}),n(e.mo,{children:"∗"}),n(e.mn,{children:"3"})]}),n(e.annotation,{encoding:"application/x-tex",children:"3*3*3"})]})})}),s(e.span,{className:"katex-html","aria-hidden":"true",children:[s(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"3"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"∗"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"3"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"∗"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"3"})]})]})]})})," 번만 반복해도 됐다."]}),`
`,n(e.h2,{id:"e1-e2---game-with-marbles",children:"E1, E2 - Game with Marbles"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크 (E1: Easy): ",n(e.a,{href:"https://codeforces.com/contest/1914/problem/E1",children:"https://codeforces.com/contest/1914/problem/E1"})]}),`
`,s(e.li,{children:["문제 링크 (E2: Hard): ",n(e.a,{href:"https://codeforces.com/contest/1914/problem/E2",children:"https://codeforces.com/contest/1914/problem/E2"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,s(e.li,{children:["문제 예상 티어: ",n(i,{tierName:c.Gold,grade:3,width:15})]}),`
`]}),`
`,s(e.p,{children:["역시나 ",n(e.code,{children:"Greedy"}),". 각 플레이어가 최선으로 게임한다면, ",n(e.span,{className:"math math-inline",children:s(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(e.semantics,{children:[s(e.mrow,{children:[s(e.msub,{children:[n(e.mi,{children:"a"}),n(e.mi,{children:"i"})]}),n(e.mo,{children:"+"}),s(e.msub,{children:[n(e.mi,{children:"b"}),n(e.mi,{children:"i"})]})]}),n(e.annotation,{encoding:"application/x-tex",children:"a_i + b_i"})]})})}),s(e.span,{className:"katex-html","aria-hidden":"true",children:[s(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.7333em",verticalAlign:"-0.15em"}}),s(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",children:"a"}),n(e.span,{className:"msupsub",children:s(e.span,{className:"vlist-t vlist-t2",children:[s(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.3117em"},children:s(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.15em"},children:n(e.span,{})})})]})})]}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"+"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),s(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),s(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",children:"b"}),n(e.span,{className:"msupsub",children:s(e.span,{className:"vlist-t vlist-t2",children:[s(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.3117em"},children:s(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.15em"},children:n(e.span,{})})})]})})]})]})]})]})}),"가 최대한 것을 고르면 된다. 이 사실을 알고 나면, 그냥 평범한 ",n(e.code,{children:"pq"}),"문제로 변한다."]}),`
`,n(e.h2,{id:"f---programming-competition-to-be-upsolved",children:"F - Programming Competition (To be upsolved...)"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1914/problem/F",children:"https://codeforces.com/contest/1914/problem/F"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,n(e.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,n(e.p,{children:"뭔가 엄청 복잡한 tree 나누기 합치기로 구현을 시도하다가 막혔는데, 업솔빙 예정."}),`
`,n(e.h2,{id:"g1---light-bulbs-easy-version-to-be-upsolved",children:"G1 - Light Bulbs (Easy Version) (To be upsolved...)"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["문제 링크: ",n(e.a,{href:"https://codeforces.com/contest/1914/problem/G1",children:"https://codeforces.com/contest/1914/problem/G1"})]}),`
`,n(e.li,{children:"Score: N/A"}),`
`,n(e.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,n(e.p,{children:"뭔가 할만한 경우의 수 구하기라는 것 같은데 지금은 잘 모르겠다. 추후 풀이 예정."}),`
`,n(e.h2,{id:"g2---light-bulbs-hard-version",children:"G2 - Light Bulbs (Hard Version)"}),`
`,n(e.p,{children:"Skip."}),`
`,n(g,{}),`
`,n(o,{})]})}function N(l={}){const{wrapper:e}=Object.assign({},t(),l.components);return e?n(e,Object.assign({},l,{children:n(r,l)})):r(l)}const b=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),h={};h.outlineInfo=m;h.main=b;export{h as default};
