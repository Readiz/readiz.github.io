import{p as s}from"./ABC-332_-3d72592f.js";import{u as d,j as n,a as t,F as o}from"./ssg-client-ddf41fd2.js";import{C as p}from"./Comment-32c62d4f.js";import{H as m}from"./Header-e3502f94.js";import{T as b}from"./TagList-2b52766c.js";import"./katex.min-4ed993c7.js";import{S as i,T as r}from"./SolvedTier-d3c12345.js";import{A as a}from"./AtCoderResult-acad7298.js";import"./index.module-caf545e8.js";function l(c){const e=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",annotation:"annotation",code:"code"},d(),c.components);return t(o,{children:[n(m,{}),`
`,n(e.h1,{id:"abc-332-upsolving",children:"ABC 332 Upsolving"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"대회 참가 유무: Y"}),`
`,t(e.li,{children:["최종 Performance: ",n("span",{style:{color:"#008000"},children:"1029"})," (Rank: 2217 / 9282)"]}),`
`,t(e.li,{children:["Round 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332",children:"Top"})," / ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks",children:"Tasks"})]}),`
`,n(e.li,{children:"문제별 결과"}),`
`]}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{align:"center",children:"A"}),n(e.th,{align:"center",children:"B"}),n(e.th,{align:"center",children:"C"}),n(e.th,{align:"center",children:"D"}),n(e.th,{align:"center",children:"E"}),n(e.th,{align:"center",children:"F"}),n(e.th,{align:"center",children:"G"})]})}),n(e.tbody,{children:t(e.tr,{children:[n(e.td,{align:"center",children:n(a,{state:"AC"})}),n(e.td,{align:"center",children:n(a,{state:"AC"})}),n(e.td,{align:"center",children:n(a,{state:"AC"})}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"})]})})]}),`
`,n(e.p,{children:"3솔따리가 되었다. D번은 지금 봐도 왜 틀렸는지 잘 모르겠다. D, E, F 모두 무난히 풀 수 있어야 나중에 블루에 안착 가능할 듯. D만 빠르게 구현 했으면 E, F 모두 수학이라, 익숙했더라면 아마 쉽게 F번까지 풀었을 만한 셋이다. 연습이 필요하다."}),`
`,n(e.h2,{id:"a---online-shopping",children:"A - Online Shopping"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_a",children:"https://atcoder.jp/contests/abc332/tasks/abc332_a"})]}),`
`,n(e.li,{children:"Score: 100점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(i,{tierName:r.Bronze,grade:5,width:15})]}),`
`]}),`
`,t(e.p,{children:["Do you know 조건문? 경계 조건 ",n(e.span,{className:"math math-inline",children:t(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:t(e.semantics,{children:[n(e.mrow,{children:n(e.mi,{children:"K"})}),n(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:t(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6833em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})}),"만 판별할 수 있으면 된다."]}),`
`,n(e.h2,{id:"b---glass-and-mug",children:"B - Glass and Mug"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_b",children:"https://atcoder.jp/contests/abc332/tasks/abc332_b"})]}),`
`,n(e.li,{children:"Score: 200점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(i,{tierName:r.Silver,grade:5,width:15})]}),`
`]}),`
`,t(e.p,{children:["간단한 ",n(e.code,{children:"시뮬레이션"}),"."]}),`
`,n(e.h2,{id:"c---t-shirts",children:"C - T-Shirts"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_c",children:"https://atcoder.jp/contests/abc332/tasks/abc332_c"})]}),`
`,n(e.li,{children:"Score: 300점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(i,{tierName:r.Silver,grade:1,width:15})]}),`
`]}),`
`,t(e.p,{children:["간단한 ",n(e.code,{children:"Greedy"}),". 일반 티셔츠를 먼저 사용하도록 하고, 로고 티셔츠는 로고 티셔츠를 사용해야 할 때만 사용하게 하는 식으로 구현하면 최적이다. 증명.. 나중에 해봐야겠지? :blobthinking:"]}),`
`,n(e.h2,{id:"d---swapping-puzzle-to-be-upsolved",children:"D - Swapping Puzzle (To be upsolved...)"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_d",children:"https://atcoder.jp/contests/abc332/tasks/abc332_d"})]}),`
`,n(e.li,{children:"Score: 425점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(i,{tierName:r.Gold,grade:2,width:15})]}),`
`]}),`
`,n(e.p,{children:"구현해보니 골드 상위 정도 되는 문제로 보이는데, 어디서 놓쳤는지 완탐이 제대로 안도는 것 같다. 업솔빙 예정."}),`
`,n(e.h2,{id:"e---lucky-bag-to-be-upsolved",children:"E - Lucky Bag (To be upsolved...)"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_e",children:"https://atcoder.jp/contests/abc332/tasks/abc332_e"})]}),`
`,n(e.li,{children:"Score: 525점"}),`
`,n(e.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,n(e.p,{children:"D번 푸느라 제대로 못봤다. 업솔빙 예정. 읽어봤을 때는 수학 문제인듯. 500점짜리 문제는 확실히 접근 시작이 쉽진 않다."}),`
`,n(e.h2,{id:"f---random-update-query-to-be-upsolved",children:"F - Random Update Query (To be upsolved...)"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc332/tasks/abc332_f",children:"https://atcoder.jp/contests/abc332/tasks/abc332_f"})]}),`
`,n(e.li,{children:"Score: 550점"}),`
`,n(e.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,n(e.p,{children:"F에는 쿼리 문제가 많이 나오는 듯. 업솔빙 예정. 랜덤이기 떄문에 마찬가지로 수학이다."}),`
`,n(e.h2,{id:"g",children:"G"}),`
`,n(e.p,{children:"Skip"}),`
`,n(b,{}),`
`,n(p,{})]})}function u(c={}){const{wrapper:e}=Object.assign({},d(),c.components);return e?n(e,Object.assign({},c,{children:n(l,c)})):l(c)}const g=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),h={};h.outlineInfo=s;h.main=g;export{h as default};
