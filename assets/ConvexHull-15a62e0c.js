import{p as t}from"./ConvexHull_-10e92721.js";import{u as c,j as e,a as i,F as d}from"./ssg-client-e2fa0ae6.js";import{C as h}from"./Comment-c15e0a74.js";import{T as a}from"./TagList-049aa175.js";import{H as s}from"./Header-2088fe08.js";import"./index.module-caf545e8.js";function o(r){const n=Object.assign({p:"p",code:"code",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3"},c(),r.components);return i(d,{children:[e(s,{}),`
`,i(n.p,{children:["기하 문제에서 많이 쓰이는 볼록 껍질 알고리즘 ",e(n.code,{children:"Convex Hull"}),"에 관한 정리"]}),`
`,e(n.h2,{id:"벡터의-외적",children:"벡터의 외적"}),`
`,i(n.p,{children:[e(n.code,{children:"Math"})," 카테고리에 따로 정리한 글이 있다."]}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"../Math/CrossProduct",children:"벡터의 외적"})}),`
`]}),`
`,e(n.h2,{id:"graham-scan",children:"Graham Scan"}),`
`,i(n.p,{children:["무려 ",e(n.code,{children:"O(n log n)"})," 시간에 전체 볼록 껍질에 속하는 점들을 알아낼 수 있는 알고리즘이다. 벡터의 외적 성질을 아주 잘 활용한 알고리즘"]}),`
`,e(n.h3,{id:"작성-중",children:"작성 중"}),`
`,e(n.h2,{id:"monotone-chain",children:"Monotone Chain"}),`
`,i(n.p,{children:[e(n.code,{children:"Graham Scan"}),"의 일종의 개선 판. 처음에 각도로 정렬하지 않아도 되기 때문에 좀 더 빠르다."]}),`
`,e(n.h3,{id:"작성-중-1",children:"작성 중"}),`
`,e(n.h2,{id:"활용-예",children:"활용 예"}),`
`,e(n.p,{children:"아래와 같은 문제들을 풀 수 있다."}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"모든 점을 포함하는 최적의 다각형 구하기"}),`
`,e(n.li,{children:"위 다각형이 통과하는 가장 작은 지름 구하기"}),`
`,e(n.li,{children:"두 점 집단을 나눌 수 있는지 확인하기"}),`
`,e(n.li,{children:"임의의 두 점 사이의 거리의 최대값"}),`
`]}),`
`,e(a,{}),`
`,e(h,{})]})}function m(r={}){const{wrapper:n}=Object.assign({},c(),r.components);return n?e(n,Object.assign({},r,{children:e(o,r)})):o(r)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=t;l.main=u;export{l as default};
