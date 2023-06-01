import{p as g}from"./TimeComplexity_-8cc20833.js";import{j as e,F as t,a as c,u as s}from"./ssg-client-b337c9b8.js";import{C as u}from"./Comment-6abd640c.js";import{T as f}from"./TagList-57a9cd2d.js";import{H as y}from"./Header-ef6ea073.js";import{M as N,C as b,a as r,T as o,P as d}from"./index-240568d3.js";import"./index.module-caf545e8.js";const x=l=>{const n=i=>i>0?Math.log2(i+1):0,m=i=>i>0?i*Math.log2(i+1):0,p=i=>i>0?i*i:0,O=i=>i>0?i:0;return e(t,{children:c(N,{zoom:{min:1,max:100},width:600,height:300,viewBox:{x:[-50,1e3],y:[-50,700]},preserveAspectRatio:!1,children:[e(b.Cartesian,{xAxis:{lines:100,labels:i=>i%10==0?i:""},yAxis:{lines:100,labels:i=>i%10==0?i:""}}),e(r,{x:270,y:200,color:o.blue,size:20,children:"O(n)"}),e(d.OfX,{y:O,color:o.blue}),e(r,{x:400,y:50,color:o.pink,size:20,children:"O(log n)"}),e(d.OfX,{y:n,color:o.pink}),e(r,{x:150,y:300,color:o.indigo,size:20,children:"O(n log n)"}),e(d.OfX,{y:m,color:o.indigo}),e(r,{x:80,y:500,color:o.green,size:20,children:"O(n^2)"}),e(d.OfX,{y:p,color:o.green})]})})};function h(l){const n=Object.assign({p:"p",h2:"h2",code:"code",h3:"h3",em:"em",ul:"ul",li:"li"},s(),l.components);return c(t,{children:[e(y,{}),`
`,e(n.p,{children:"시간 복잡도 관련 정리"}),`
`,e(n.h2,{id:"주요-시간-복잡도",children:"주요 시간 복잡도"}),`
`,e(x,{}),`
`,e(n.h2,{id:"시간-복잡도와-실제-수행-시간",children:"시간 복잡도와 실제 수행 시간"}),`
`,c(n.p,{children:["위에서 이야기하는 ",e(n.code,{children:"O(n)"})," / ",e(n.code,{children:"O(log n)"})," 따위의 이야기는 많이 들었지만, 그래서 실제로 어떻게 쓰는지에 대한 이야기는 많이 부딪혀보지 않으면 느끼기 어렵다. 내가 느낀대로 정리해본다. 당연히 절대적인 것은 아니다."]}),`
`,e(n.h3,{id:"컴퓨터의-초당-연산-처리-능력",children:"컴퓨터의 초당 연산 처리 능력"}),`
`,c(n.p,{children:["사람보다 말이 많은데, 대충 일반적인 사용자 PC 기준 초당 ",e(n.code,{children:"1억"})," ~ ",e(n.code,{children:"10억"})," 개의 연산 정도를 처리 가능하단 것이 중론이다. 물론 이것을 너무 믿으면 안되는게, ",e(n.code,{children:"CPU"}),"가 ",e(n.code,{children:"prefetching"}),"도 하고, ",e(n.code,{children:"branch prediction"}),"도 하고, ",e(n.code,{children:"pipelining"}),"도 하기 때문에, 모든 요소를 알기란 어렵다. 정확한 수행시간이란 무조건 ",e(n.em,{children:"부딪혀봐야"})," 아는 것이고, 보수적으로 ",e(n.code,{children:"1억"}),"을 기준점으로 잡아 풀고, 만약 이를 아슬아슬하게 넘어갈 것이 예상된다면 상수최적화를 시도해보는 것이 좋을 것이다."]}),`
`,e(n.h3,{id:"n-값-기준-허용되는-시간복잡도",children:"N 값 기준 허용되는 시간복잡도"}),`
`,c(n.p,{children:["나는 ",e(n.code,{children:"N"}),"의 값에 따라 대략 아래와 같은 기준을 쓰고 있다."]}),`
`,c(n.ul,{children:[`
`,c(n.li,{children:[e(n.code,{children:"N <= 100"}),": ",e(n.code,{children:"O(N^3)"}),", 최적화된 ",e(n.code,{children:"O(N^4)"})," 알고리즘을 돌릴 수 있다."]}),`
`,c(n.li,{children:[e(n.code,{children:"N <= 1,000"}),": ",e(n.code,{children:"O(N^2)"}),", 주로 ",e(n.code,{children:"DP"}),"로 푸는 문제에서 많이 사용되는 범위이다."]}),`
`,c(n.li,{children:[e(n.code,{children:"N <= 10,000"}),": 여기부턴 대략 ",e(n.code,{children:"O(N^2)도 "}),"timeout",e(n.code,{children:"나기 쉽다."}),"O(n log n)` 정도가 허용된다고 봐야한다."]}),`
`,c(n.li,{children:[e(n.code,{children:"N <= 100,000"}),": 십만 단위를 넘어가면 슬슬 빡세다. ",e(n.code,{children:"O(N^2)"}),"는 무조건 ",e(n.code,{children:"timeout"})," 나기 시작하는 구간. ",e(n.code,{children:"O(n log n)"})," 와 동등, 혹은 그 이상의 알고리즘을 사용해야 한다."]}),`
`,c(n.li,{children:[e(n.code,{children:"N <= 1,000,000"}),": 여기부터는 ",e(n.code,{children:"O(n)"}),"을 슬슬 써야하는 단위이다. ",e(n.code,{children:"O(n log n)"}),"도 슬슬 시간이 소요되는 것이 눈에 들어오기 시작한다."]}),`
`,c(n.li,{children:[e(n.code,{children:"N >= 1,000,000,000"}),": ",e(n.code,{children:"O(log n)"}),"이 강제된다."]}),`
`]}),`
`,e(n.h2,{id:"masters-theorem",children:"Master's Theorem"}),`
`,e(n.h3,{id:"작성중",children:"작성중"}),`
`,e(f,{}),`
`,e(u,{})]})}function C(l={}){const{wrapper:n}=Object.assign({},s(),l.components);return n?e(n,Object.assign({},l,{children:e(h,l)})):h(l)}const M=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=g;a.main=M;export{a as default};
