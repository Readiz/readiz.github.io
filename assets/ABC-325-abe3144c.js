import{p as h}from"./ABC-325_-a346f90e.js";import{u as s,j as n,a as t,F as o}from"./ssg-client-8fb99429.js";import{C as m}from"./Comment-7bcf77c4.js";import{H as p}from"./Header-44804d35.js";import{T as g}from"./TagList-22bcb011.js";import"./katex.min-4ed993c7.js";import{S as c,T as i}from"./SolvedTier-814e398b.js";import{A as r}from"./AtCoderResult-4fd7ff3a.js";import"./index.module-caf545e8.js";function l(a){const e=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",p:"p",code:"code",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mo:"mo",mi:"mi",mn:"mn",annotation:"annotation"},s(),a.components);return t(o,{children:[n(p,{}),`
`,n(e.h1,{id:"abc-325-upsolving",children:"ABC 325 Upsolving"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"대회 참가 유무: Y"}),`
`,t(e.li,{children:["최종 Performance: ",n("span",{style:{color:"#00C0C0"},children:"1343"})," (Rank: 1255 / 9155)"]}),`
`,t(e.li,{children:["Round 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc325",children:"Top"})," / ",n(e.a,{href:"https://atcoder.jp/contests/abc325/tasks",children:"Tasks"})]}),`
`,n(e.li,{children:"문제별 결과"}),`
`]}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{align:"center",children:"A"}),n(e.th,{align:"center",children:"B"}),n(e.th,{align:"center",children:"C"}),n(e.th,{align:"center",children:"D"}),n(e.th,{align:"center",children:"E"}),n(e.th,{align:"center",children:"F"}),n(e.th,{align:"center",children:"G"})]})}),n(e.tbody,{children:t(e.tr,{children:[n(e.td,{align:"center",children:n(r,{state:"AC"})}),n(e.td,{align:"center",children:n(r,{state:"AC"})}),n(e.td,{align:"center",children:n(r,{state:"AC"})}),n(e.td,{align:"center",children:n(r,{state:"WA"})}),n(e.td,{align:"center",children:n(r,{state:"AC"})}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"})]})})]}),`
`,n(e.h2,{id:"a---takahashi-san",children:"A - Takahashi san"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc325/tasks/abc325_a",children:"https://atcoder.jp/contests/abc325/tasks/abc325_a"})]}),`
`,n(e.li,{children:"Score: 100점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Bronze,grade:5,width:15})]}),`
`]}),`
`,t(e.p,{children:["문자열 입력을 받아 뒤에 ",n(e.code,{children:"san"}),"을 출력하면 되는 간단한 문제."]}),`
`,n(e.h2,{id:"b---world-meeting",children:"B - World Meeting"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc325/tasks/abc325_b",children:"https://atcoder.jp/contests/abc325/tasks/abc325_b"})]}),`
`,n(e.li,{children:"Score: 250점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Bronze,grade:1,width:15})]}),`
`]}),`
`,t(e.p,{children:["실제 시험 중에 안타깝게 1번 틀렸었는데, 문제 읽기 이슈였다. 각 지사에서 가장 많이 참여 가능한 시간대를 선정하는 것이고, ",n(e.span,{className:"math math-inline",children:t(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:t(e.semantics,{children:[t(e.mrow,{children:[n(e.mo,{stretchy:"false",children:"["}),n(e.mi,{children:"i"}),n(e.mo,{separator:"true",children:","}),n(e.mi,{children:"i"}),n(e.mo,{children:"+"}),n(e.mn,{children:"9"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"[i, i + 9)"})]})})}),t(e.span,{className:"katex-html","aria-hidden":"true",children:[t(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mopen",children:"["}),n(e.span,{className:"mord mathnormal",children:"i"}),n(e.span,{className:"mpunct",children:","}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",children:"i"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"+"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),t(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord",children:"9"}),n(e.span,{className:"mclose",children:")"})]})]})]})})," 범위 내에서의 max 값을 구하면 된다."]}),`
`,n(e.h2,{id:"c---sensors",children:"C - Sensors"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc325/tasks/abc325_c",children:"https://atcoder.jp/contests/abc325/tasks/abc325_c"})]}),`
`,n(e.li,{children:"Score: 300점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Silver,grade:3,width:15})]}),`
`]}),`
`,n(e.p,{children:"간단한 완탐 문제. 붙어 있는 센서들을 dfs로 처리하면 편하다."}),`
`,n(e.h2,{id:"d---printing-machine-upsolved",children:"D - Printing Machine (Upsolved)"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc325/tasks/abc325_d",children:"https://atcoder.jp/contests/abc325/tasks/abc325_d"})]}),`
`,n(e.li,{children:"Score: 450점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Gold,grade:1,width:15})]}),`
`]}),`
`,t(e.p,{children:["시험 중에 풀지 못했고, 내가 ",n(e.code,{children:"Greedy"}),"가 약하다는 사실을 깨닫게 되었다. ",n(e.code,{children:"Greedy"})," 하게 푸는 것 중 ",n(e.code,{children:"Job Scheduling"}),"에 관한 유형이었고, 아래 링크에 이 유형 풀이를 정리했다."]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["Job Scheduling: ",n("a",{href:"/ps/Algorithm/Greedy/JobScheduling",children:"링크"})]}),`
`]}),`
`,n(e.h2,{id:"e---our-clients-please-wait-a-moment",children:"E - Our clients, please wait a moment"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc325/tasks/abc325_e",children:"https://atcoder.jp/contests/abc325/tasks/abc325_e"})]}),`
`,n(e.li,{children:"Score: 450점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:i.Gold,grade:2,width:15})]}),`
`]}),`
`,t(e.p,{children:[n(e.code,{children:"car"})," -> ",n(e.code,{children:"train"})," 으로 최대 1회 환승 가능한 것을 제외하면 일반적인 최단거리 경로 문제이다."]}),`
`,n(e.h2,{id:"f-g",children:"F, G"}),`
`,n(e.p,{children:"Skip"}),`
`,n(g,{}),`
`,n(m,{})]})}function b(a={}){const{wrapper:e}=Object.assign({},s(),a.components);return e?n(e,Object.assign({},a,{children:n(l,a)})):l(a)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=h;d.main=u;export{d as default};
