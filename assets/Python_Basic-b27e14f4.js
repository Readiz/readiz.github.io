import{p as c}from"./Python_Basic_-0b9e422e.js";import{u as r,j as e,a as i,F as a}from"./ssg-client-cec06188.js";import{C as d}from"./Comment-43e6e80d.js";import{H as h}from"./Header-ac35d85b.js";import{T as s}from"./TagList-21734a25.js";import"./katex.min-4ed993c7.js";import"./react-katex-bc74cb97.js";import"./index.module-caf545e8.js";function t(l){const n=Object.assign({p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",h3:"h3",a:"a"},r(),l.components);return i(a,{children:[e(h,{}),`
`,i(n.p,{children:["PS 뿐만 아니라 ML 분야에서도 ",e(n.code,{children:"Python"}),"이 대세이니, 그리고 현업에서 사용하고 있지 않기 때문에 조금씩 관련 내용을 정리하려고 한다."]}),`
`,e(n.h2,{id:"입력-받기",children:"입력 받기"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"숫자 하나 받기"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-python",children:`N = int(input())
`})}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"고정 수의 요소 받기"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-python",children:`a, b, c = map(int, input().split())
`})}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"한 줄로 오는 여러 수 받기"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-python",children:`my_list = list(map(int, input().split()))
`})}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"여러 줄로 오는 수를 받기"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-python",children:`my_list = [int(input()) for _ in range(N)]
`})}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"빈값으로 초기화"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-python",children:`empty_list = [0 for _ in range(N)]
`})}),`
`,e(n.h3,{id:"참고할-만한-링크",children:"참고할 만한 링크"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["다차원 배열 초기화: ",e(n.a,{href:"https://velog.io/@ayoung0073/python-list",children:"https://velog.io/@ayoung0073/python-list"})]}),`
`]}),`
`,e(s,{}),`
`,e(d,{})]})}function p(l={}){const{wrapper:n}=Object.assign({},r(),l.components);return n?e(n,Object.assign({},l,{children:e(t,l)})):t(l)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=c;o.main=m;export{o as default};
