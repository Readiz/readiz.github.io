import{p as o}from"./stdio_-848350ed.js";import{u as r,j as e,a as c,F as t}from"./ssg-client-7a654c7b.js";import{H as h}from"./Header-31f4d24d.js";import{C as a}from"./Comment-2d449b8a.js";import{T as s}from"./TagList-87a27fe9.js";import"./index.module-caf545e8.js";function l(i){const n=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",a:"a"},r(),i.components);return c(t,{children:[e(h,{}),`
`,e(n.h2,{id:"scanf-사용-팁",children:"scanf 사용 팁"}),`
`,c(n.p,{children:["나는 ",e(n.code,{children:"CP"}),"를 할 때 ",e(n.code,{children:"scanf"}),"를 사용한다. 처음 ",e(n.code,{children:"C"}),"로 문제 풀이를 시작했기 때문이기도 하고, ",e(n.code,{children:"cin"}),", ",e(n.code,{children:"cout"})," 처럼 ",e(n.code,{children:"fastio"}),"를 위한 처리를 하지 않아도 되서이다. 몇가지 문제 풀이 할 때 유용한 방식들을 정리한다."]}),`
`,e(n.h3,{id:"공백을-포함해서-한줄-입력-받기",children:"공백을 포함해서 한줄 입력 받기"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`scanf("%[^\\n]", buf);
`})}),`
`,c(n.p,{children:["위처럼 하면 된다. 그런데 주의할 점은, ",e(n.code,{children:"scanf"}),"의 특성상 문자열을 읽고 아닌 문자열이 왔을 때는 위치를 원복한다는 것이다. 그래서 그 다음 입력을 같은 방식으로 받으려고 한다면, ",e(n.code,{children:'scanf("%c", dummy);'}),"와 같이 추가적으로 한 문자를 ",e(n.code,{children:"buffer"}),"에서 제거해주는 방식이 필요하다."]}),`
`,e(n.h2,{id:"printf-사용-팁",children:"printf 사용 팁"}),`
`,e(n.p,{children:"특수한 출력 방식은 아래와 같은 것들이 있다. (잘 쓰지 않는)"}),`
`,c(n.ul,{children:[`
`,e(n.li,{children:"%x, %X: 양의 16진수로 표현"}),`
`,e(n.li,{children:"%o: 양의 8진수로 표현"}),`
`,c(n.li,{children:["%f: ",e(n.code,{children:"float"}),"을 출력"]}),`
`,c(n.li,{children:["%lf: ",e(n.code,{children:"double"}),"을 출력"]}),`
`,c(n.li,{children:["%e: 지수 표현법으로 ",e(n.code,{children:"float"}),"을 출력 (예시: 1.200000e+00)"]}),`
`,c(n.li,{children:["%le: 지수 표현법으로 ",e(n.code,{children:"double"}),"을 출력"]}),`
`,e(n.li,{children:"%g: %f와 %e중 짧은 것으로 표현 (사람이 읽기 쉬운 자연스러운 소수 표현법?)"}),`
`,e(n.li,{children:"%p: 포인터의 메모리 주소를 표현 (예시: 0x7ffcecb336ac)"}),`
`,e(n.li,{children:"%%: %를 표현"}),`
`]}),`
`,e(n.h3,{id:"참고-자료",children:"참고 자료"}),`
`,c(n.ul,{children:[`
`,c(n.li,{children:["atomic0x90님의 블로그: ",e(n.a,{href:"https://atomic0x90.github.io/c-language/2019/06/04/printf-format.html",children:"https://atomic0x90.github.io/c-language/2019/06/04/printf-format.html"})]}),`
`]}),`
`,e(s,{}),`
`,e(a,{})]})}function f(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e(n,Object.assign({},i,{children:e(l,i)})):l(i)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=o;d.main=m;export{d as default};
