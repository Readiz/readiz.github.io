import{p as h}from"./ABC-335_-71b8e635.js";import{u as s,j as n,a as t,F as o}from"./ssg-client-53b59081.js";import{C as m}from"./Comment-7df84669.js";import{H as p}from"./Header-324a32b7.js";import{T as g}from"./TagList-a1a67b81.js";import"./katex.min-4ed993c7.js";import{S as c,T as i}from"./SolvedTier-b5444167.js";import{A as r}from"./AtCoderResult-ac94bc6a.js";import"./index.module-caf545e8.js";function l(a){const e=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",code:"code",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msup:"msup",mn:"mn",annotation:"annotation"},s(),a.components);return t(o,{children:[n(p,{}),`
`,n(e.h1,{id:"abc-335-upsolving",children:"ABC 335 Upsolving"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"대회 참가 유무: Y"}),`
`,t(e.li,{children:["최종 Performance: ",n("span",{style:{color:"#00C0C0"},children:"1441"})," (Rank: 1199 / 13016)"]}),`
`,t(e.li,{children:["Round 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc335",children:"Top"})," / ",n(e.a,{href:"https://atcoder.jp/contests/abc335/tasks",children:"Tasks"})]}),`
`,n(e.li,{children:"문제별 결과"}),`
`]}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{align:"center",children:"A"}),n(e.th,{align:"center",children:"B"}),n(e.th,{align:"center",children:"C"}),n(e.th,{align:"center",children:"D"}),n(e.th,{align:"center",children:"E"}),n(e.th,{align:"center",children:"F"}),n(e.th,{align:"center",children:"G"})]})}),n(e.tbody,{children:t(e.tr,{children:[n(e.td,{align:"center",children:n(r,{state:"AC"})}),n(e.td,{align:"center",children:n(r,{state:"AC"})}),n(e.td,{align:"center",children:n(r,{state:"AC"})}),n(e.td,{align:"center",children:n(r,{state:"AC"})}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"})]})})]}),`
`,t(e.p,{children:["무난한 4솔브. ",n(e.code,{children:"E"}),"도 할만 했는데, 최종적으로 맞왜틀. 17분까지 ",n(e.code,{children:"D"})," 풀이를 완료한 후, 삽질만 엄청 했다. 그래프 문제 좀 다양하게 더 풀어봐야겠다."]}),`
`,t(e.h2,{id:"a---2023",children:["A - 202",n("s",{children:"3"})]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc335/tasks/abc335_a",children:"https://atcoder.jp/contests/abc335/tasks/abc335_a"})]}),`
`,n(e.li,{children:"Score: 100점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Bronze,grade:5,width:15})]}),`
`]}),`
`,t(e.p,{children:["Do you know how to ",n(e.code,{children:"input"})," & ",n(e.code,{children:"output"}),"?"]}),`
`,n(e.h2,{id:"b---tetrahedral-number",children:"B - Tetrahedral Number"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc335/tasks/abc335_b",children:"https://atcoder.jp/contests/abc335/tasks/abc335_b"})]}),`
`,n(e.li,{children:"Score: 150점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Bronze,grade:2,width:15})]}),`
`]}),`
`,t(e.p,{children:[n(e.span,{className:"math math-inline",children:t(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:t(e.semantics,{children:[t(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),t(e.msup,{children:[n(e.mi,{children:"N"}),n(e.mn,{children:"3"})]}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(N^3)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:t(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),t(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t",children:n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.8141em"},children:t(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),n(e.span,{className:"mclose",children:")"})]})})]})})," 루프 문제."]}),`
`,n(e.h2,{id:"c---loong-tracking",children:"C - Loong Tracking"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc335/tasks/abc335_c",children:"https://atcoder.jp/contests/abc335/tasks/abc335_c"})]}),`
`,n(e.li,{children:"Score: 300점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Silver,grade:3,width:15})]}),`
`]}),`
`,t(e.p,{children:["Do you know ",n(e.code,{children:"deque"}),"?"]}),`
`,n(e.h2,{id:"d---loong-and-takahashi",children:"D - Loong and Takahashi"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc335/tasks/abc335_d",children:"https://atcoder.jp/contests/abc335/tasks/abc335_d"})]}),`
`,n(e.li,{children:"Score: 400점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Silver,grade:1,width:15})]}),`
`]}),`
`,t(e.p,{children:[n(e.code,{children:"애드 훅"})," 문제. 예시가 없었다면 조금 어려웠을 수도 있는데, 조건도 홀수만이어서 고려할게 적었고, 명확하게 시계방향으로 숫자만 채우면 되는 문제였다. 여기까지 풀면 타임어택으로 1천등 ~ 4천등의 순위가 갈렸다는게.. CP의 냉혹함인듯 하다."]}),`
`,n(e.h2,{id:"e---non-decreasing-colorful-path-to-be-upsolved",children:"E - Non-Decreasing Colorful Path (To be upsolved...)"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc335/tasks/abc335_e",children:"https://atcoder.jp/contests/abc335/tasks/abc335_e"})]}),`
`,n(e.li,{children:"Score: 525점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Platinum,grade:5,width:15})]}),`
`]}),`
`,t(e.p,{children:["엄청 여러번 ",n(e.code,{children:"WA"}),", ",n(e.code,{children:"TLE"}),"를 반복했다. 거리가 0인 ",n(e.code,{children:"Edge"}),"를 처리하기 곤란했다. (이거때문에 다들 TLE..) 업솔빙 예정."]}),`
`,n(e.h2,{id:"f-g",children:"F, G"}),`
`,n(e.p,{children:"문제가 너무 많이 쌓인 관계로 일단 skip. G는 정수론을 좀 빠삭하게 알면 쉬울 법한 문제인데, 나중에 도전해봐야겠다. 소수를 포함하는 거듭제곱과 연관된 정수론 연습문제인듯."}),`
`,n(g,{}),`
`,n(m,{})]})}function u(a={}){const{wrapper:e}=Object.assign({},s(),a.components);return e?n(e,Object.assign({},a,{children:n(l,a)})):l(a)}const b=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=h;d.main=b;export{d as default};
