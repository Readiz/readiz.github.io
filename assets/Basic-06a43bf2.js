import{p as c}from"./Basic_-1d8c5629.js";import{u as l,j as n,a as i,F as d}from"./ssg-client-b16c776b.js";import{C as o}from"./Comment-f4860371.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-f3231049.js";import"./katex.min-4ed993c7.js";function r(t){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",h3:"h3"},l(),t.components);return i(d,{children:[n(h,{}),`
`,n(e.h2,{id:"greedy-기본-이론-정리",children:"Greedy 기본 이론 정리"}),`
`,n(e.p,{children:"수학 증명이 첨가된 PS 이론은 가젤님 블로그에 잘 정리되어 있다. 아래 링크에서 정리한 기본 이론이다."}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["가젤님 Greedy 관련 글: ",n(e.a,{href:"https://gazelle-and-cs.tistory.com/59",children:"https://gazelle-and-cs.tistory.com/59"})]}),`
`]}),`
`,n(e.h2,{id:"기본-원칙",children:"기본 원칙"}),`
`,n(e.h3,{id:"greedy-stays-ahead",children:"Greedy stays ahead"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"탐욕스러운 것이 항상 앞선다."}),`
`,n(e.li,{children:"매번 탐욕 알고리즘이 선택하는 것이 가상의 최적 알고리즘이 선택하는 것보다 항상 좋다는 것을 보임으로써 증명하는 기법"}),`
`]}),`
`,n(e.h3,{id:"certificate-argument",children:"Certificate argument"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"증거 논의"}),`
`,n(e.li,{children:"알고리즘이 답을 출력할 때, 그 답이 실제로 최적해라는 증거를 함께 제출하는 기법"}),`
`]}),`
`,n(e.h3,{id:"exchange-argument",children:"Exchange argument"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"교환 논의"}),`
`,n(e.li,{children:"최적해를 조금씩 바꾸어 탐욕 알고리즘의 답과 동일하게 만들되, 매번 나빠지지 않는다는 것을 보임으로써 알고리즘의 답이 최적해라는 것을 증명하는 방법"}),`
`]}),`
`,n(o,{})]})}function s(t={}){const{wrapper:e}=Object.assign({},l(),t.components);return e?n(e,Object.assign({},t,{children:n(r,t)})):r(t)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=c;a.main=m;export{a as default};
