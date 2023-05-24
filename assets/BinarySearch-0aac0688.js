import{p as h}from"./BinarySearch_-4396711a.js";import{u as r,j as e,a as c,F as o}from"./ssg-client-31bc6150.js";import{C as a}from"./Comment-bf17692e.js";import{T as t}from"./TagList-16986dbb.js";import{H as s}from"./Header-dc198a89.js";import"./index.module-caf545e8.js";function i(d){const n=Object.assign({p:"p",code:"code",h1:"h1",h2:"h2",pre:"pre",ol:"ol",li:"li",ul:"ul",h3:"h3"},r(),d.components);return c(o,{children:[e(s,{}),`
`,c(n.p,{children:["Binary Search의 구현에 관한 정리. 주제 자체는 ",e(n.code,{children:"solved.ac"})," 기준 실버 티어 정도일 수도 있겠지만, 제대로 쓰기까지 상당한 시간이 걸리는 주제이기도 하다. 또, 각종 알고리즘에서 뜬금없이 튀어나오는 1순위. ",e(n.code,{children:"O(n)"}),"을 ",e(n.code,{children:"O(log n)"}),"으로 줄여주는 강력한 무기."]}),`
`,e(n.h1,{id:"서론",children:"서론"}),`
`,c(n.p,{children:["Binary Search는 항상 구현이 헷갈린다. 범위를 어디까지 해야하는지, ",e(n.code,{children:"l"}),", ",e(n.code,{children:"r"})," 설정은 어떻게 해야하는지 등등..."]}),`
`,e(n.p,{children:"여기서 그런 부분들을 한번 정리하고 넘어가고자 한다."}),`
`,e(n.h2,{id:"binary-search의-stl-사용-구현",children:"Binary Search의 STL 사용 구현"}),`
`,c(n.p,{children:["우선 표준이 되는 ",e(n.code,{children:"STL"}),"을 사용한 Binary Search 사용법을 확인해보자. 사용할 때 ",e(n.code,{children:"vector"}),"는 정렬이 되어 있어야 한다. ",e(n.code,{children:"lower_bound"}),"는 찾고자 하는 값보다 ",e(n.code,{children:"크거나 같은"})," 값이 처음으로 나오는 시점을 반환한다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`auto it = lower_bound(v.begin(), v.end(), tval);
`})}),`
`,c(n.p,{children:[e(n.code,{children:"upper_bound"}),"도 거의 동일하지만 ",e(n.code,{children:"크거나 같은"})," 이 아닌 ",e(n.code,{children:"큰"})," 이다. 사용법은 완전히 동일하다. (결과만 달라진다)"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`auto it = upper_bound(v.begin(), v.end(), tval);
`})}),`
`,c(n.p,{children:[e(n.code,{children:"Binary Search"}),"의 의의는 원소를 찾을 때 전체 원소(",e(n.code,{children:"O(n)"}),")를 찾지 않아도 됨에 그 의의가 있다. 절반씩 찾을 원소가 줄어드므로 ",e(n.code,{children:"Master Theorem"}),"에 의해 시간복잡도가 ",e(n.code,{children:"O(log n)"}),"으로 줄어들게 된다."]}),`
`,e(n.h2,{id:"binary-search의-직접구현",children:"Binary Search의 직접구현"}),`
`,e(n.p,{children:"직접 구현시에 신경써야 할 포인트들이 많이 있다."}),`
`,c(n.ol,{children:[`
`,c(n.li,{children:["경계값 문제",`
`,c(n.ul,{children:[`
`,c(n.li,{children:[e(n.code,{children:"s"}),", ",e(n.code,{children:"e"})," 범위를 ",e(n.code,{children:"[s, e]"}),"로 할 것인가? ",e(n.code,{children:"[s, e)"}),"로 할 것인가?"]}),`
`]}),`
`]}),`
`,c(n.li,{children:["mid 값 설정 문제",`
`,c(n.ul,{children:[`
`,c(n.li,{children:[e(n.code,{children:"(s+e)/2"})," 로 할 것인가, ",e(n.code,{children:"(s+e+1)/2"}),"로 할 것인가?"]}),`
`]}),`
`]}),`
`,c(n.li,{children:["loop시 ",e(n.code,{children:"l"}),", ",e(n.code,{children:"r"})," 조정 문제",`
`,c(n.ul,{children:[`
`,c(n.li,{children:["가령 ",e(n.code,{children:"r = mid"}),"로 할 것인가, ",e(n.code,{children:"r = mid - 1"}),"로 할 것인가?"]}),`
`]}),`
`]}),`
`]}),`
`,e(n.p,{children:"하나씩 해치워보자."}),`
`,e(n.h3,{id:"경계값-문제",children:"경계값 문제"}),`
`,c(n.p,{children:["이것의 답은 의외로 간단하다. 만약 찾고자 하는 값이 범위에 있는 값을 초과하는 경우를 받아들일 수 있느냐 없느냐의 문제이기도 한데, STL의 구현 기준으로, 찾는 값이 없을 경우 ",e(n.code,{children:"end()"}),"에 해당하는 ",e(n.code,{children:"iterator"}),"를 리턴하게 되어 있다."]}),`
`,e(n.h3,{id:"mid-값-설정-문제",children:"mid 값 설정 문제"}),`
`,e(n.p,{children:"이 부분도 생각을 좀 해봐야할 문제 중 하나다. 원소 개수가 홀수개 / 짝수개 일때를 생각해보면 쉽기도 하다."}),`
`,c(n.ol,{children:[`
`,c(n.li,{children:["원소가 짝수개일 경우",`
`,c(n.ul,{children:[`
`,e(n.li,{children:"이 경우, 4개라고 가정해보자."}),`
`,e(n.li,{children:"[1, 4]의 절반을 나누려면, 2.5가 되어야 한다."}),`
`,c(n.li,{children:["[1, 2] / [3, 4] 로 나뉘는 것이 바람직하므로, ",e(n.code,{children:"mid = (s + e) / 2"}),"가 맞다."]}),`
`]}),`
`]}),`
`,c(n.li,{children:["원소가 홀수개일 경우",`
`,c(n.ul,{children:[`
`,e(n.li,{children:"이 경우, 5개라고 가정해보자."}),`
`,e(n.li,{}),`
`]}),`
`]}),`
`]}),`
`,e(n.h3,{id:"작성-중",children:"작성 중"}),`
`,e(t,{}),`
`,e(a,{})]})}function p(d={}){const{wrapper:n}=Object.assign({},r(),d.components);return n?e(n,Object.assign({},d,{children:e(i,d)})):i(d)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=h;l.main=u;export{l as default};
