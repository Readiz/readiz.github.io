import{p as i}from"./EX-2307_-287b09e6.js";import{u as t,j as n,a as o,F as s}from"./ssg-client-9b0ce5e8.js";import{H as a}from"./Header-f79b744c.js";import"./index.module-caf545e8.js";import"./katex.min-4ed993c7.js";function r(c){const e=Object.assign({p:"p",h2:"h2",code:"code"},t(),c.components);return o(s,{children:[n(a,{}),`
`,n(e.p,{children:"23년 7월 출제 문제 풀이 정리"}),`
`,n(e.h2,{id:"score-식-분석",children:"Score 식 분석"}),`
`,o(e.p,{children:["활동을 할 때마다 점수가 증가하는 식이다. 사용하는 함수는 ",n(e.code,{children:"scan"}),", ",n(e.code,{children:"rotate"}),", ",n(e.code,{children:"move"}),"가 있다."]}),`
`,n(e.h2,{id:"기본-구현",children:"기본 구현"}),`
`,o(e.p,{children:["이동할 지역의 ",n(e.code,{children:"score"}),"를 계산해서 저장해두는 ",n(e.code,{children:"heap"}),"을 두고, 이것이 최소가 되는 지역으로 이동하는 것이 최적이다."]}),`
`,n(e.h2,{id:"점수-줄이기",children:"점수 줄이기"}),`
`,o(e.p,{children:["꼼수가 1가지 있었다. 바로, ",n(e.code,{children:"move"}),"의 패널티가 적다는 것을 이용해서, 일단 ",n(e.code,{children:"scan"})," 없이 이동하고 보는것이다. 다행히, 실패했을 경우 알려준다."]}),`
`,n(e.h2,{id:"hash를-사용한-점수-줄이기",children:"Hash를 사용한 점수 줄이기"}),`
`,o(e.p,{children:[n(e.code,{children:"subtask"}),"가 10개 있기 때문에, 기존 맵을 저장해 둘 수 있었다."]})]})}function h(c={}){const{wrapper:e}=Object.assign({},t(),c.components);return e?n(e,Object.assign({},c,{children:n(r,c)})):r(c)}const l=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=i;d.main=l;export{d as default};
