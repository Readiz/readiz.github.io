import{p as d}from"./Basic_-83b49f21.js";import{u as c,j as e,a as i,F as h}from"./ssg-client-5e7ce271.js";import{C as o}from"./Comment-6860eef3.js";import"./index.module-caf545e8.js";import{H as a}from"./Header-38ee5314.js";import"./katex.min-4ed993c7.js";function l(r){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",h3:"h3",ol:"ol",strong:"strong",code:"code"},c(),r.components);return i(h,{children:[e(a,{}),`
`,e(n.h2,{id:"greedy-기본-이론-정리",children:"Greedy 기본 이론 정리"}),`
`,e(n.p,{children:"수학 증명이 첨가된 PS 이론은 가젤님 블로그에 잘 정리되어 있다. 아래 링크에서 정리한 기본 이론이다."}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["가젤님 Greedy 관련 글: ",e(n.a,{href:"https://gazelle-and-cs.tistory.com/59",children:"https://gazelle-and-cs.tistory.com/59"})]}),`
`]}),`
`,e(n.h2,{id:"기본-원칙",children:"기본 원칙"}),`
`,e(n.h3,{id:"greedy-stays-ahead",children:"Greedy stays ahead"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"탐욕스러운 것이 항상 앞선다."}),`
`,e(n.li,{children:"매번 탐욕 알고리즘이 선택하는 것이 가상의 최적 알고리즘이 선택하는 것보다 항상 좋다는 것을 보임으로써 증명하는 기법"}),`
`]}),`
`,e(n.h3,{id:"certificate-argument",children:"Certificate argument"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"증거 논의"}),`
`,e(n.li,{children:"알고리즘이 답을 출력할 때, 그 답이 실제로 최적해라는 증거를 함께 제출하는 기법"}),`
`]}),`
`,e(n.h3,{id:"exchange-argument",children:"Exchange argument"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"교환 논의"}),`
`,e(n.li,{children:"최적해를 조금씩 바꾸어 탐욕 알고리즘의 답과 동일하게 만들되, 매번 나빠지지 않는다는 것을 보임으로써 알고리즘의 답이 최적해라는 것을 증명하는 방법"}),`
`]}),`
`,e(n.h2,{id:"그리디--dp--완전-탐색의-구별법",children:"그리디 & DP & 완전 탐색의 구별법"}),`
`,e(n.p,{children:"어딘가(피갤) 에서 설명해준 개념적 이해가 너무 좋아서 아래에 살짝 변형해서 인용해본다."}),`
`,e(n.p,{children:"어떤 상태 S가 있고, 그 상태 S에 대해 풀고자 하는 문제가 f라고 해보자."}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"S: input"}),`
`,e(n.li,{children:"f(S): output"}),`
`]}),`
`,i(n.ol,{children:[`
`,e(n.li,{children:"f(S)라는 값을 구하기 위해 확인해야하는 모든 중간 상태를 나열하고 그걸 다 확인해서 f(S)를 구하는게 brute-force"}),`
`,e(n.li,{children:"구하는 과정에서 같은 중간 상태를 확인하는 경우가 많고 그 가짓수가 그렇게 크지 않다는걸 이용해서 중복으로 사용하는 중간 상태들은 저장(메모이제이션)해서 최적화하는게 DP"}),`
`,e(n.li,{children:"f(S)를 구하기 위해 알아야하는 상태들 중에 몇 가지만 봐도 되는데? 라는걸 증명하고 일부만 보는게 그리디"}),`
`]}),`
`,i(n.p,{children:["즉, 어떻게 보면 그리디는 ",e(n.strong,{children:"끝판왕"}),"이다. ",e(n.code,{children:"다익스트라"}),"와 같은 알고리즘이 ",e(n.code,{children:"DP"})," + ",e(n.code,{children:"Greedy"}),"라고 하는데, 이젠 좀 이해할 수 있게 되었다."]}),`
`,e(o,{})]})}function s(r={}){const{wrapper:n}=Object.assign({},c(),r.components);return n?e(n,Object.assign({},r,{children:e(l,r)})):l(r)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=d;t.main=u;export{t as default};
