import{p as t}from"./Mistake_-a2fc1efb.js";import{u as r,j as n,a as l,F as d}from"./ssg-client-636fde35.js";import{C as F}from"./Comment-d488c541.js";import{H as a}from"./Header-76625641.js";import{T as s}from"./TagList-e286dd0d.js";import"./index.module-807ad0bd.js";function c(o){const e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},r(),o.components);return l(d,{children:[n(a,{}),`
`,n(e.h2,{id:"low-level",children:"Low level"}),`
`,n(e.p,{children:"알게 모르게 정말 추상화란 강력한 힘을 부여한다. 특히 컴퓨터의 경우 low level에서는 트랜지스터가 작동하고 있다는 사실을 알아채기 정말 어렵다. 그리고 low level은 다 챙기기엔 귀찮기도 하고 개발하기에 시간도 많이 소요되고.."}),`
`,l(e.p,{children:["나도 ",n(e.code,{children:"javascript"}),"와 같이 효율적으로 구현하는 high level의 개발을 선호하는 편이지만, low level까지 알지 못한다면 가끔씩 이해하기 어려운 문제를 발견했을 때 쉽게 눈치채기 어렵다."]}),`
`,n(e.p,{children:"오늘 저지른 실수 한가지를 공유해본다."}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`for (unsigned int i = 0; i <= 0xFFFFFFFFU; ++i) {
    validation(i);
}
`})}),`
`,l(e.p,{children:["위 로직은 작성자가 의도한 바에 따르면 ",n(e.code,{children:"0"})," 에서 ",n(e.code,{children:"0xFFFFFFFFU"})," 까지 루프를 돌고 종료될 것이다. 과연 그럴까?"]}),`
`,l(e.p,{children:["문제가 되는 지점은 ",n(e.code,{children:"0xFFFFFFFFU"})," 다음의 숫자이다. ",n(e.code,{children:"0xFFFFFFFFU"})," 다음의 숫자가 무엇일까? 여기서 아차 싶었다. 나도 모르게 ",n(e.code,{children:"for"})," 문을 추상화 해서 생각하고 있었던 것. 사실 위 로직은 ",n(e.code,{children:"i"})," 라는 변수를 지속적으로 업데이트 하면서 비교를 하고 있을 따름이다."]}),`
`,l(e.p,{children:[n(e.code,{children:"overflow"}),"가 일어나기 때문에 ",n(e.code,{children:"0xFFFFFFFFU + 1U = 0"})," 이다. 즉, 위 루프는 얼핏 보면 약 42억번 동작할 것 같지만, 무한루프에 빠진다. 잠시나마 골머리 썩혔던 문제고, 알고나면 별 문제 아닌데, 알고나면 김샌다. 이런 일 없도록 low level의 공부를 게을리 해서는 안될 거 같다."]}),`
`,n(s,{}),`
`,n(F,{})]})}function h(o={}){const{wrapper:e}=Object.assign({},r(),o.components);return e?n(e,Object.assign({},o,{children:n(c,o)})):c(o)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=t;i.main=p;export{i as default};
