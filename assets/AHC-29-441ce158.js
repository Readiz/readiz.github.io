import{p as s}from"./AHC-29_-a2c31099.js";import{u as c,j as n,a as o,F as a}from"./ssg-client-7a654c7b.js";import{C as d}from"./Comment-2d449b8a.js";import{H as m}from"./Header-31f4d24d.js";import{T as l}from"./TagList-87a27fe9.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function r(t){const e=Object.assign({p:"p",h1:"h1",code:"code"},c(),t.components);return o(a,{children:[n(m,{}),`
`,n(e.p,{children:"이 글은 크리스마스에 열린 (!!) AHC 29을 3시간 정도 풀어보고 대충 쓴 후기글이다."}),`
`,n(e.h1,{id:"문제-분석",children:"문제 분석"}),`
`,o(e.p,{children:["5종류의 특수한 기능을 하는 카드가 있다. 그리고 프로젝트도 있다. 이 카드를 사용해서 프로젝트를 진행시킬 수 있는데, 프로젝트의 수와 현재 들고 있는 카드 수는 ",n(e.code,{children:"TC"})," 마다 다르다."]}),`
`,n(e.p,{children:"나는 간단하게 기본 카드 (돈이 안들고, 일정량의 일을 하는 카드가 항상 주어진다) 를 계속 사용하다가, 어느 순간 전체 일을 하는 카드가 효율이 좋은 순간이 오면 사용하는 간단한 전략을 사용했다."}),`
`,n(e.p,{children:"또 투자 카드가 있는데, 투자 카드는 전체 턴의 75%가 지나기 전이면 무조건 구매하게 했다."}),`
`,o(e.p,{children:["이런 류의 문제가 나오면 어떻게 접근할지 잘 모르겠다. 카드의 사용을 그래프로 나타낼 수 있나? 아무튼 접근 방법 자체가 잘 안보여서, 그냥 이정도의 ",n(e.code,{children:"Greedy"})," 솔루션을 제출하고 끝냈다."]}),`
`,n(l,{}),`
`,n(d,{})]})}function p(t={}){const{wrapper:e}=Object.assign({},c(),t.components);return e?n(e,Object.assign({},t,{children:n(r,t)})):r(t)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=s;i.main=u;export{i as default};
