import{p as d}from"./Mistake_-d0eddc0c.js";import{u as i,j as n,a as c,F as t}from"./ssg-client-673a2109.js";import{C as F}from"./Comment-c2ecb3a1.js";import{H as a}from"./Header-c1c09d5e.js";import{T as h}from"./TagList-a809f8fa.js";import"./index.module-caf545e8.js";function l(o){const e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},i(),o.components);return c(t,{children:[n(a,{}),`
`,n(e.h2,{id:"low-level",children:"Low level"}),`
`,n(e.p,{children:"알게 모르게 정말 추상화란 강력한 힘을 부여한다. 특히 컴퓨터의 경우 low level에서는 트랜지스터가 작동하고 있다는 사실을 알아채기 정말 어렵다. 그리고 low level은 다 챙기기엔 귀찮기도 하고 개발하기에 시간도 많이 소요되고.."}),`
`,c(e.p,{children:["나도 ",n(e.code,{children:"javascript"}),"와 같이 효율적으로 구현하는 high level의 개발을 선호하는 편이지만, low level까지 알지 못한다면 가끔씩 이해하기 어려운 문제를 발견했을 때 쉽게 눈치채기 어렵다."]}),`
`,n(e.p,{children:"오늘 저지른 실수 한가지를 공유해본다."}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`for (unsigned int i = 0; i <= 0xFFFFFFFFU; ++i) {
    validation(i);
}
`})}),`
`,c(e.p,{children:["위 로직은 작성자가 의도한 바에 따르면 ",n(e.code,{children:"0"})," 에서 ",n(e.code,{children:"0xFFFFFFFFU"})," 까지 루프를 돌고 종료될 것이다. 과연 그럴까?"]}),`
`,c(e.p,{children:["문제가 되는 지점은 ",n(e.code,{children:"0xFFFFFFFFU"})," 다음의 숫자이다. ",n(e.code,{children:"0xFFFFFFFFU"})," 다음의 숫자가 무엇일까? 여기서 아차 싶었다. 나도 모르게 ",n(e.code,{children:"for"})," 문을 추상화 해서 생각하고 있었던 것. 사실 위 로직은 ",n(e.code,{children:"i"})," 라는 변수를 지속적으로 업데이트 하면서 비교를 하고 있을 따름이다."]}),`
`,c(e.p,{children:[n(e.code,{children:"overflow"}),"가 일어나기 때문에 ",n(e.code,{children:"0xFFFFFFFFU + 1U = 0"})," 이다. 즉, 위 루프는 얼핏 보면 약 42억번 동작할 것 같지만, 무한루프에 빠진다. 잠시나마 골머리 썩혔던 문제고, 알고나면 별 문제 아닌데, 알고나면 김샌다. 이런 일 없도록 low level의 공부를 게을리 해서는 안될 거 같다."]}),`
`,n(e.h2,{id:"내실을-다지자",children:"내실을 다지자"}),`
`,c(e.p,{children:["상위 알고리즘을 푼다고 해서 자동적으로 모든 알고리즘을 아는 것은 아니다. 최근에도 ",n(e.code,{children:"MST"})," 라는 것의 개념을 처음 접했고(이름은 들어봤다 했을지라도), 그래프에서의 ",n(e.code,{children:"cycle"}),"을 어떻게 쉽게 판정하는지도 알게 됐다. ",n(e.code,{children:"Union Find"}),"의 첫 활용 예를 알게 됐다고 해야하나.. 개발을 좋아하기 때문에 구현 문제에 강한 느낌인데 이것 말고도 다 잘해야 한다. 그것이 프로니까.. (오글오글)"]}),`
`,n(h,{}),`
`,n(F,{})]})}function s(o={}){const{wrapper:e}=Object.assign({},i(),o.components);return e?n(e,Object.assign({},o,{children:n(l,o)})):l(o)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=d;r.main=p;export{r as default};
