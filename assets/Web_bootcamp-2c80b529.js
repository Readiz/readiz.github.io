import{p as h}from"./Web_bootcamp_-245cd5d6.js";import{u as c,j as l,a as e,F as t}from"./ssg-client-e4fc272f.js";import{H as o}from"./Header-1dd63123.js";import{C as s}from"./Comment-b9647567.js";import{T as a}from"./TagList-0194a732.js";import"./index.module-caf545e8.js";function r(i){const n=Object.assign({h1:"h1",ul:"ul",li:"li",p:"p",a:"a",code:"code"},c(),i.components);return e(t,{children:[l(o,{}),`
`,l(n.h1,{id:"웹-개발자-bootcamp-정리-with-vs-code",children:"웹 개발자 Bootcamp 정리 (with VS Code)"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[l(n.a,{href:"https://samsungu.udemy.com/",children:"https://samsungu.udemy.com/"})," 으로 드가면 들을 수 있음."]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:l(n.a,{href:"https://samsungu.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22553936?start=93#overview",children:"https://samsungu.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22553936?start=93#overview"})}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"고수들도 HTML Boilerplate 쓴다.. 나한테 맞는거 하나 만들어 두는게 좋을 것 같다."}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"CSS: 형용사(Adjectives) / JS: 동사(Verbs) / HTML: 명사(Nouns)"}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"MDN: 개발자들이 만든 비공식 스펙 사이트."}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"lorem*10 하고 탭 누르면 더미 문장을 넣을 수 있다."}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"! 치고 탭 누르면 VS Code에서 제공하는 기본 boilerplate를 제공해준다."}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"Ctrl + Shift + P 누르고 Formatter 누르면 자동 포멧팅 도구 사용 가능. (설정 바꿔서 저장할 때 적용되게 할 수도 있음)"}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"ol / ul (Ordered List / Unordered List)"}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"Alt + Shift + Down -> 그 줄 복사해서 아래로 내림"}),`
`,e(n.ul,{children:[`
`,l(n.li,{children:"Alt + Down -> 그 줄을 내림"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"HTML Entity: < 같은 것을 이야기 함."}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"Emmet : div > ul > li 같이 써놓고 emmet 쓰면 자동으로 그 구조를 만들어 준다."}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"CSS: Cascading Style Sheets"}),`
`,e(n.ul,{children:[`
`,l(n.li,{children:"MDN도 잘 되어 있다."}),`
`,l(n.li,{children:"Cascading은 ID / class / specifity 등의 순서대로 속성이 중첩되어 적용된다는 의미"}),`
`,e(n.li,{children:["ID (백의 자리), class(십의 자리), 특정성(일의 자리)의 순서로 강력한 컨셉이라고 생각하면 됨.",`
`,e(n.ul,{children:[`
`,l(n.li,{children:"ID로 선택한 경우 이 항목에 color와 같은 것을 먹이면 :active 와 같은 pseudo class 역시 무시되어 버린다. (더 강한 속성이기 때문)"}),`
`,l(n.li,{children:"따라서 이 경우 #ID의 #ID:active 까지 설정 해야 정상적으로 속성을 적용할 수 있다."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:["Selector ",l(n.code,{children:"{ property: value; }"})]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"Inherit 기능이 내제되어 있지만, 모든 속성이 Inherit인 것은 아니다."}),`
`,e(n.ul,{children:[`
`,l(n.li,{children:"강제로 Inherit 적용하고 싶으면 color: inherit 등으로 적용해서 사용"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"pseudo"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["pseudo class",`
`,e(n.ul,{children:[`
`,l(n.li,{children:":active, :checked, :first, :first-child, :hover, :not(), :nth-child(), :nth-of-type()"}),`
`,l(n.li,{children:"실제 class는 아닌데 마치 존재하는 class인 것처럼 행동함"}),`
`]}),`
`]}),`
`,e(n.li,{children:["pseudo element",`
`,e(n.ul,{children:[`
`,l(n.li,{children:"::after, ::before, ::first-letter, ::first-line, ::selection"}),`
`,l(n.li,{children:"콜론(:)이 하나여도 크롬에서 인식이 되긴 하지만 원래는 두개짜리임. 두개짜리는 실제 값이 있는 것처럼 행동하므로 element임"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"padding"}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"Box Model"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Box-Sizing: Border-Box",`
`,e(n.ul,{children:[`
`,l(n.li,{children:"테두리를 포함하는 Box Model."}),`
`]}),`
`]}),`
`,l(n.li,{children:"Margin"}),`
`,e(n.li,{children:["Padding",`
`,e(n.ul,{children:[`
`,l(n.li,{children:"top, right, bottom, left 의 순서임."}),`
`,l(n.li,{children:"top, right + left, down 순서도 가능"}),`
`,l(n.li,{children:"top + bottom, right + left 순서도 가능"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"Display Property"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Inline - 한 줄에 정렬",`
`,e(n.ul,{children:[`
`,l(n.li,{children:"이 경우 width 같은 것들은 무시 됨."}),`
`,l(n.li,{children:"Padding / Margin 도 자신의 줄 안에서만 적용 됨."}),`
`]}),`
`]}),`
`,l(n.li,{children:"Block - 다른 줄에 정렬"}),`
`,l(n.li,{children:"Inline-Block - 이 경우 블록의 특성을 가지면서 한 줄에 차례로 들어온다. (그러나 Flex가 있어서 굳이 이젠 써야하나...? 개인적 생각.)"}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"CSS Units"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Relative",`
`,e(n.ul,{children:[`
`,l(n.li,{children:"EM, REM, VH, VW, %, ..."}),`
`]}),`
`]}),`
`,e(n.li,{children:["Absolute",`
`,e(n.ul,{children:[`
`,l(n.li,{children:"PX, PT, CM, IN, MM"}),`
`]}),`
`]}),`
`,e(n.li,{children:["EM",`
`,e(n.ul,{children:[`
`,l(n.li,{children:"1em은 부모의 Font-Size와 동일함"}),`
`,l(n.li,{children:"기본 폰트 사이즈는 1em이 될 것 (미설정 시 부모 값을 상속)"}),`
`,l(n.li,{children:"h1, h2 시리즈를 이 속성으로 묶어두면 좋을 것."}),`
`]}),`
`]}),`
`,e(n.li,{children:["REM",`
`,e(n.ul,{children:[`
`,l(n.li,{children:"중첩된 ul / li를 쓰게 되면 급격한 Font 사이즈 증가 / 감소를 겪게 됨"}),`
`,l(n.li,{children:"REM은 root HTML element의 Font size를 가져와서 크기를 정해줌."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"Position"}),`
`,e(n.ul,{children:[`
`,l(n.li,{children:"Static: top 같은게 있어도 움직이지 않음"}),`
`,l(n.li,{children:"Relative: top 같은게 있으면 상대적으로 움직임"}),`
`,l(n.li,{children:"Absolute: 공간을 차지하지 않으면서 Relative가 있는 부모 위치를 상대 좌표로 하여 이동 (어렵..)"}),`
`,l(n.li,{children:"Fixed: 스크롤 되어도 이동하지 않음. Container 위치에 고정."}),`
`,l(n.li,{children:"Sticky: 처음엔 다른 속성처럼 이동하다가 스크롤 내려가면 고정."}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"Transition"}),`
`]}),`
`]}),`
`,l(a,{}),`
`,l(s,{})]})}function p(i={}){const{wrapper:n}=Object.assign({},c(),i.components);return n?l(n,Object.assign({},i,{children:l(r,i)})):r(i)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=h;d.main=u;export{d as default};
