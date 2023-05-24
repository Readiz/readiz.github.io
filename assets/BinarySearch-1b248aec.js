import{p as o}from"./BinarySearch_-5505ff5b.js";import{u as i,j as n,a as c,F as h}from"./ssg-client-50d99047.js";import{C as a}from"./Comment-32c2cd2d.js";import{T as t}from"./TagList-489a4612.js";import{H as s}from"./Header-9378bc53.js";import"./index.module-caf545e8.js";function d(r){const e=Object.assign({p:"p",code:"code",h1:"h1",h2:"h2",pre:"pre",ol:"ol",li:"li",ul:"ul",h3:"h3"},i(),r.components);return c(h,{children:[n(s,{}),`
`,c(e.p,{children:["Binary Search의 구현에 관한 정리. 주제 자체는 ",n(e.code,{children:"solved.ac"})," 기준 실버 티어 정도일 수도 있겠지만, 제대로 쓰기까지 상당한 시간이 걸리는 주제이기도 하다. 또, 각종 알고리즘에서 뜬금없이 튀어나오는 1순위. ",n(e.code,{children:"O(n)"}),"을 ",n(e.code,{children:"O(log n)"}),"으로 줄여주는 강력한 무기."]}),`
`,n(e.h1,{id:"서론",children:"서론"}),`
`,c(e.p,{children:["Binary Search는 항상 구현이 헷갈린다. 범위를 어디까지 해야하는지, ",n(e.code,{children:"l"}),", ",n(e.code,{children:"r"})," 설정은 어떻게 해야하는지 등등..."]}),`
`,n(e.p,{children:"여기서 그런 부분들을 한번 정리하고 넘어가고자 한다."}),`
`,n(e.h2,{id:"binary-search의-stl-사용-구현",children:"Binary Search의 STL 사용 구현"}),`
`,c(e.p,{children:["우선 표준이 되는 ",n(e.code,{children:"STL"}),"을 사용한 Binary Search 사용법을 확인해보자. 사용할 때 ",n(e.code,{children:"vector"}),"는 정렬이 되어 있어야 한다. ",n(e.code,{children:"lower_bound"}),"는 찾고자 하는 값보다 ",n(e.code,{children:"크거나 같은"})," 값이 처음으로 나오는 시점을 반환한다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`auto it = lower_bound(v.begin(), v.end(), tval);
`})}),`
`,c(e.p,{children:[n(e.code,{children:"upper_bound"}),"도 거의 동일하지만 ",n(e.code,{children:"크거나 같은"})," 이 아닌 ",n(e.code,{children:"큰"})," 이다. 사용법은 완전히 동일하다. (결과만 달라진다)"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`auto it = upper_bound(v.begin(), v.end(), tval);
`})}),`
`,c(e.p,{children:[n(e.code,{children:"Binary Search"}),"의 의의는 원소를 찾을 때 전체 원소(",n(e.code,{children:"O(n)"}),")를 찾지 않아도 됨에 그 의의가 있다. 절반씩 찾을 원소가 줄어드므로 ",n(e.code,{children:"Master Theorem"}),"에 의해 시간복잡도가 ",n(e.code,{children:"O(log n)"}),"으로 줄어들게 된다."]}),`
`,n(e.h2,{id:"binary-search의-직접구현",children:"Binary Search의 직접구현"}),`
`,n(e.p,{children:"직접 구현시에 신경써야 할 포인트들이 많이 있다."}),`
`,c(e.ol,{children:[`
`,c(e.li,{children:["경계값 문제",`
`,c(e.ul,{children:[`
`,c(e.li,{children:[n(e.code,{children:"s"}),", ",n(e.code,{children:"e"})," 범위를 ",n(e.code,{children:"[s, e]"}),"로 할 것인가? ",n(e.code,{children:"[s, e)"}),"로 할 것인가?"]}),`
`]}),`
`]}),`
`,c(e.li,{children:["mid 값 설정 문제",`
`,c(e.ul,{children:[`
`,c(e.li,{children:[n(e.code,{children:"(s+e)/2"})," 로 할 것인가, ",n(e.code,{children:"(s+e+1)/2"}),"로 할 것인가?"]}),`
`]}),`
`]}),`
`,c(e.li,{children:["loop시 ",n(e.code,{children:"l"}),", ",n(e.code,{children:"r"})," 조정 문제",`
`,c(e.ul,{children:[`
`,c(e.li,{children:["가령 ",n(e.code,{children:"r = mid"}),"로 할 것인가, ",n(e.code,{children:"r = mid - 1"}),"로 할 것인가?"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"하나씩 해치워보자."}),`
`,n(e.h3,{id:"경계값-문제",children:"경계값 문제"}),`
`,n(e.p,{children:"이것의 답은 의외로 간단하다. 만약 찾고자 하는 값이 범위에 있는 값을 초과하는 경우를 받아들일 수 있느냐 없느냐의 문제이기도 한데,"}),`
`,n(e.h3,{id:"작성-중",children:"작성 중"}),`
`,n(t,{}),`
`,n(a,{})]})}function p(r={}){const{wrapper:e}=Object.assign({},i(),r.components);return e?n(e,Object.assign({},r,{children:n(d,r)})):d(r)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=o;l.main=u;export{l as default};
