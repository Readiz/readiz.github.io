import{p as a}from"./PageDev_-6bd40c88.js";import{u as c,j as i,a as n,F as r}from"./ssg-client-eec9952e.js";import{C as d}from"./Comment-c98e16c0.js";import{H as h}from"./Header-a5a60147.js";import{T as u}from"./TagList-9d43ec35.js";import"./index.module-caf545e8.js";function l(t){const e=Object.assign({p:"p",code:"code",h2:"h2",ul:"ul",li:"li",input:"input"},c(),t.components);return n(r,{children:[i(h,{}),`
`,n(e.p,{children:["현재 사용하고 있는 ",i(e.code,{children:"vite-pages-react-pages"}),"가 그냥 막 사용하기에는 좋은데, 이것저것 고치려니까 나름 손이 많이 가는 중."]}),`
`,i(e.p,{children:"그대로 두기에는 애매하니, 정리 리스트를 사용해서 정비해야겠다."}),`
`,i(e.h2,{id:"working",children:"Working"}),`
`,n(e.ul,{className:"contains-task-list",children:[`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","utterances -> giscus 이전"]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","Header 자동 삽입"]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","최근 글 리스트 삽입"]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","Tag 정비",`
`,n(e.ul,{children:[`
`,i(e.li,{children:"글마다 태그 넣어야 하고, 태그별로 볼 수 있게 하고, 글 하단에 태그 리스트 출력"}),`
`]}),`
`]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","글 목록을 볼 수 있게 만드는 페이지",`
`,n(e.ul,{children:[`
`,i(e.li,{children:"각 카테고리 별로 있으면 좋을 듯"}),`
`]}),`
`]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","테마 내부적으로 변경 사용",`
`,n(e.ul,{children:[`
`,i(e.li,{children:"3차 하위페이지 노출 안하도록 변경"}),`
`,i(e.li,{children:"카운트 노출하도록 변경"}),`
`,i(e.li,{children:"3차 이하 페이지 선택시 상위 카테고리 선택된 UI 노출"}),`
`]}),`
`]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","카테고리 별로 카운트 적용"]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","Footer 정비"]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",disabled:!0})," ","import 안되는 lib 들 확인. Math / Graph 라이브러리 추가 필요.."]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",disabled:!0})," ","Coding Note 개선. 폴더별로 빌드해서 Viewer에 연결.. API 처럼 활용해서 가져오기? (React Component로 쿼리해서 가져올 수 있을 듯)"]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",disabled:!0})," ","개인 소개 페이지 작성"]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",disabled:!0})," ","OTP 페이지 작성"]}),`
`]}),`
`,i(e.h2,{id:"pending",children:"Pending"}),`
`,n(e.ul,{className:"contains-task-list",children:[`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",disabled:!0})," ","다크 테마 적용"]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",disabled:!0})," ","Counter"]}),`
`,n(e.li,{className:"task-list-item",children:[i(e.input,{type:"checkbox",disabled:!0})," ","우측 메뉴에 최근 글?"]}),`
`]}),`
`,i(e.h2,{id:"공사-원칙",children:"공사 원칙"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["모든 컴포넌트들은 10년 쓸 생각으로 깔끔하게 모듈화",`
`,n(e.ul,{children:[`
`,i(e.li,{children:"나중에 컴포넌트 만든 것 기반으로 npm 공개도.."}),`
`,n(e.li,{children:["React 컴포넌트들은 재활용이 쉬우니 다양하게 만들어서 활용하자.",`
`,n(e.ul,{children:[`
`,i(e.li,{children:"남이 만든건 잘 못쓰겠다. -,.-"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(u,{}),`
`,i(d,{})]})}function o(t={}){const{wrapper:e}=Object.assign({},c(),t.components);return e?i(e,Object.assign({},t,{children:i(l,t)})):l(t)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=a;s.main=m;export{s as default};
