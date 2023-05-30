import{p as h}from"./CrossProduct_-3ecdebcc.js";import{u as l,j as n,a as c,F as o}from"./ssg-client-5b794232.js";import{C as t}from"./Comment-2cea4ab9.js";import{H as a}from"./Header-76bec918.js";import{T as s}from"./TagList-a497d2ba.js";import"./index.module-caf545e8.js";function i(d){const e=Object.assign({p:"p",em:"em",h2:"h2",code:"code",ol:"ol",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul"},l(),d.components);return c(o,{children:[n(a,{}),`
`,c(e.p,{children:["벡터의 외적은 두 벡터가 이루는 각도를 알아낼 때 매우 유용하다. 특히, ",n(e.em,{children:"두 벡터가 서로 평행일 때 외적값이 0"}),"이 된다는 사실은 잘 알려져 있다."]}),`
`,n(e.h2,{id:"기초를-튼튼히",children:"기초를 튼튼히"}),`
`,c(e.p,{children:["평면에서의 외적값은 기본적으로 3차원으로 생각한다. 왜냐면, 물리학에서 배웠던 ",n(e.code,{children:"무슨무슨 왼손법칙"}),"처럼 기본적으로 외적값이라는 것은 방향 개념이 따라오는데, 이 방향이 2차원 축을 뚫고 나가기 때문이다. ",n(e.code,{children:"i"}),", ",n(e.code,{children:"j"}),", ",n(e.code,{children:"k"}),"가 각각 3차원의 기본 방향 성분이라고 할 때, 다음이 성립한다."]}),`
`,c(e.ol,{children:[`
`,c(e.li,{children:[n(e.code,{children:"i"}),"*",n(e.code,{children:"j"})," = ",n(e.code,{children:"k"})]}),`
`,c(e.li,{children:[n(e.code,{children:"j"}),"*",n(e.code,{children:"k"})," = ",n(e.code,{children:"i"})]}),`
`,c(e.li,{children:[n(e.code,{children:"k"}),"*",n(e.code,{children:"i"})," = ",n(e.code,{children:"j"})]}),`
`]}),`
`,n(e.p,{children:"또한, 방향 개념이 있기 때문에, 만약 순서를 반대로 곱한다면 음수가 붙는 것처럼 된다. (방향이 반대라는 뜻)"}),`
`,c(e.ol,{children:[`
`,c(e.li,{children:[n(e.code,{children:"j"}),"*",n(e.code,{children:"i"})," = -",n(e.code,{children:"k"})]}),`
`,c(e.li,{children:[n(e.code,{children:"k"}),"*",n(e.code,{children:"j"})," = -",n(e.code,{children:"i"})]}),`
`,c(e.li,{children:[n(e.code,{children:"i"}),"*",n(e.code,{children:"k"})," = -",n(e.code,{children:"j"})]}),`
`]}),`
`,n(e.h2,{id:"외적의-계산",children:"외적의 계산"}),`
`,c(e.p,{children:["위 식은 이제 unit vector에 대한 이야기이고, 실제로 임의의 두 벡터의 값은 어떻게 구할까? 일단 평면상에 두 점이 있다고 하면, ",n(e.code,{children:"k"})," 값은 ",n(e.code,{children:"0"}),"으로 고정시킬 수 있을 것이다. 이 때의 외적값은 ",n(e.code,{children:"a = (x1, y1)"}),", ",n(e.code,{children:"b = (x2, y2)"})," 라고 하면, ",n(e.code,{children:"a*b = (0,0,x1y2 - x2y1)"})," 이 된다. 이것은 다음을 의미한다."]}),`
`,c(e.ol,{children:[`
`,c(e.li,{children:["방향은 평면에서 오른손으로 ",n(e.code,{children:"a -> b"})," 방향으로 감싸쥔 방향으로 적용된다. (z축이냐, -z축이냐의 차이만 있다)"]}),`
`,c(e.li,{children:["벡터의 크기는 ",n(e.code,{children:"x1y2 - x2y1"}),"이다."]}),`
`]}),`
`,c(e.p,{children:["그렇다면 일반적인 임의의 두 벡터의 외적은 어떻게 계산될까? 두 벡터를 (x1, y1, z1), (x2, y2, z2)로 정의하면, 결과값의 ",n(e.code,{children:"x"}),", ",n(e.code,{children:"y"}),", ",n(e.code,{children:"z"}),"를 나눠서 보면 아래처럼 된다."]}),`
`,c(e.ol,{children:[`
`,c(e.li,{children:[n(e.code,{children:"x"})," = ",n(e.code,{children:"y1z2 - y2z1"})]}),`
`,c(e.li,{children:[n(e.code,{children:"y"})," = ",n(e.code,{children:"z1x2 - x1z2"})]}),`
`,c(e.li,{children:[n(e.code,{children:"z"})," = ",n(e.code,{children:"x1y2 - y1x2"})]}),`
`]}),`
`,c(e.p,{children:["신기하게도 ",n(e.code,{children:"x"}),"를 구할 때에는 ",n(e.code,{children:"x"}),"가 없는 형태이다. 이를 ",n(e.code,{children:"3*3"})," 행렬식으로는 아래처럼도 나타낸다. ",n(e.code,{children:"x"}),"자 모양으로 세번 곱해서 빼는 형태로도 기억할 수 있다."]}),`
`,c(e.table,{children:[n(e.thead,{children:c(e.tr,{children:[n(e.th,{align:"center",children:"i"}),n(e.th,{align:"center",children:"j"}),n(e.th,{align:"center",children:"k"})]})}),c(e.tbody,{children:[c(e.tr,{children:[n(e.td,{align:"center",children:"x1"}),n(e.td,{align:"center",children:"y1"}),n(e.td,{align:"center",children:"z1"})]}),c(e.tr,{children:[n(e.td,{align:"center",children:"x2"}),n(e.td,{align:"center",children:"y2"}),n(e.td,{align:"center",children:"z2"})]})]})]}),`
`,n(e.h2,{id:"외적의-크기",children:"외적의 크기"}),`
`,n(e.p,{children:"이는 쉽게 증명될 수 있지만 결과만 기억하자."}),`
`,c(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"|a*b| = |a|*|b|*sinΘ"})}),`
`]}),`
`,c(e.p,{children:[n(e.code,{children:"sin"})," 값은 ",n(e.code,{children:"180도"}),", ",n(e.code,{children:"360도"}),"에서 0이 되고, 이는 벡터가 왜 평행일 때 외적값이 0이 되는지를 알려준다."]}),`
`,n(e.h2,{id:"오목과-볼록",children:"오목과 볼록"}),`
`,c(e.p,{children:["오목과 볼록은 정하기 나름이지만, 아무튼 위 sinΘ 성질을 생각하면, ",n(e.code,{children:"180도"})," 기준으로 그 부호가 바뀌는 것은 명백하다. 오목, 볼록의 기준을 나누는 값이 ",n(e.code,{children:"180도"}),"가 되므로, 음수, 양수에 따라 오목, 볼록을 판정하면 된다. ",n(e.code,{children:"Convex Hull"})," 과 같은 알고리즘에서 사용되는 성질이다. 사실 이거 때문에 간만에 외적을 다시 봤다."]}),`
`,n(s,{}),`
`,n(t,{})]})}function m(d={}){const{wrapper:e}=Object.assign({},l(),d.components);return e?n(e,Object.assign({},d,{children:n(i,d)})):i(d)}const x=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=h;r.main=x;export{r as default};
