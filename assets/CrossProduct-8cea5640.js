import{p as h}from"./CrossProduct_-98ea07b8.js";import{u as d,j as e,a as i,F as a}from"./ssg-client-0cac791f.js";import{C as l}from"./Comment-119c9004.js";import{H as m}from"./Header-7416f255.js";import{T as v}from"./TagList-358b3a70.js";import"./katex.min-4ed993c7.js";import{r as c}from"./react-katex-de05e81a.js";import"./index.module-caf545e8.js";function t(r){const n=Object.assign({p:"p",em:"em",h2:"h2",code:"code",ol:"ol",li:"li",h3:"h3"},d(),r.components);return i(a,{children:[e(m,{}),`
`,i(n.p,{children:["벡터의 외적은 두 벡터가 이루는 각도를 알아낼 때 매우 유용하다. 특히, ",e(n.em,{children:"두 벡터가 서로 평행일 때 외적값이 0"}),"이 된다는 사실은 잘 알려져 있다."]}),`
`,e(n.h2,{id:"기초를-튼튼히",children:"기초를 튼튼히"}),`
`,i(n.p,{children:["평면에서의 외적값은 기본적으로 3차원으로 생각한다. 왜냐면, 물리학에서 배웠던 ",e(n.code,{children:"무슨무슨 왼손법칙"}),"처럼 기본적으로 외적값이라는 것은 방향 개념이 따라오는데, 이 방향이 2차원 축을 뚫고 나가기 때문이다. ",e(n.code,{children:"i"}),", ",e(n.code,{children:"j"}),", ",e(n.code,{children:"k"}),"가 각각 3차원의 기본 방향 성분이라고 할 때, 다음이 성립한다."]}),`
`,e(c.BlockMath,{math:"\\vec{i} \\times \\vec{j} = \\vec{k}"}),`
`,e(c.BlockMath,{math:"\\vec{j} \\times \\vec{k} = \\vec{i}"}),`
`,e(c.BlockMath,{math:"\\vec{k} \\times \\vec{i} = \\vec{j}"}),`
`,e(n.p,{children:"또한, 방향 개념이 있기 때문에, 만약 순서를 반대로 곱한다면 음수가 붙는 것처럼 된다. (방향이 반대라는 뜻)"}),`
`,e(c.BlockMath,{math:"\\vec{j} \\times \\vec{i} = -\\vec{k}"}),`
`,e(c.BlockMath,{math:"\\vec{k} \\times \\vec{j} = -\\vec{i}"}),`
`,e(c.BlockMath,{math:"\\vec{i} \\times \\vec{k} = -\\vec{j}"}),`
`,e(n.h2,{id:"외적의-계산",children:"외적의 계산"}),`
`,i(n.p,{children:["위 식은 이제 unit vector에 대한 이야기이고, 실제로 임의의 두 벡터의 값은 어떻게 구할까? 일단 평면상에 두 점이 있다고 하면, ",e(n.code,{children:"k"})," 방향값은 ",e(n.code,{children:"0"}),"으로 고정시킬 수 있을 것이다. 이 경우 다음 두 벡터를 생각하자."]}),`
`,e(c.BlockMath,{math:"\\vec{A} = \\begin{pmatrix}x1 & y1 & 0\\end{pmatrix} \\begin{pmatrix}\\vec{i}\\\\\\vec{j}\\\\\\vec{k}\\end{pmatrix}"}),`
`,e(c.BlockMath,{math:"\\vec{B} = \\begin{pmatrix}x2 & y2 & 0\\end{pmatrix} \\begin{pmatrix}\\vec{i}\\\\\\vec{j}\\\\\\vec{k}\\end{pmatrix}"}),`
`,e(n.p,{children:"이 때의 외적값은 아래처럼 된다."}),`
`,e(c.BlockMath,{math:"\\vec{A} \\times \\vec{B} = \\begin{pmatrix}0 & 0 & x1y2 - x2y1\\end{pmatrix} \\begin{pmatrix}\\vec{i}\\\\\\vec{j}\\\\\\vec{k}\\end{pmatrix}"}),`
`,i(n.ol,{children:[`
`,i(n.li,{children:["방향은 평면에서 오른손으로 ",e(n.code,{children:"a -> b"})," 방향으로 감싸쥔 방향으로 적용된다. (z축이냐, -z축이냐의 차이만 있다)"]}),`
`,i(n.li,{children:["벡터의 크기는 ",e(n.code,{children:"x1y2 - x2y1"}),"이다."]}),`
`]}),`
`,i(n.p,{children:["그렇다면 일반적인 임의의 두 벡터의 외적은 어떻게 계산될까? 두 벡터를 ",e(n.code,{children:"(x1, y1, z1)"}),", ",e(n.code,{children:"(x2, y2, z2)"}),"로 정의하면, 각 방향 성분은 아래와 같다."]}),`
`,e(c.BlockMath,{math:`\\vec{A} \\times \\vec{B} = 
\\begin{vmatrix}
y1 & z1 \\\\
y2 & z2
\\end{vmatrix} \\vec{i} +
\\begin{vmatrix}
x1 & z1 \\\\
x2 & z2
\\end{vmatrix} \\vec{j} +
\\begin{vmatrix}
x1 & y1 \\\\
x2 & y2
\\end{vmatrix} \\vec{k} \\newline =
\\begin{pmatrix}
y1  z2 - y2  z1 &
z1  x2 - z2  x1 &
x1  y2 - x2  y1
\\end{pmatrix}
\\begin{pmatrix}
\\vec{i} \\\\
\\vec{j} \\\\
\\vec{k}
\\end{pmatrix}
`}),`
`,i(n.p,{children:["외우기 쉽게 생각하면 ",e(n.code,{children:"x"}),"를 구할 때에는 ",e(n.code,{children:"x"}),"가 없는 형태이다. 이를 ",e(n.code,{children:"3*3"})," 행렬식으로는 아래처럼도 나타낸다."]}),`
`,e(c.BlockMath,{math:`\\vec{A} \\times \\vec{B} = \\begin{vmatrix}
\\vec{i} & \\vec{j} & \\vec{k} \\\\
x1 & y1 & z1 \\\\
x2 & y2 & z2
\\end{vmatrix}`}),`
`,e(n.h2,{id:"외적의-크기",children:"외적의 크기"}),`
`,e(n.p,{children:"이는 쉽게 증명될 수 있지만 결과만 기억하자."}),`
`,e(c.BlockMath,{math:"|\\vec{A} \\times \\vec{B}| = |\\vec{A}||\\vec{B}|sin\\theta"}),`
`,i(n.p,{children:[e(n.code,{children:"sin"})," 값은 ",e(n.code,{children:"180도"}),", ",e(n.code,{children:"360도"}),"에서 0이 되고, 이는 벡터가 왜 평행일 때 외적값이 0이 되는지를 알려준다."]}),`
`,e(n.h2,{id:"오목과-볼록",children:"오목과 볼록"}),`
`,i(n.p,{children:["오목과 볼록은 정하기 나름이지만, 아무튼 위 ",e(c.InlineMath,{math:"sin\\theta"}),"의 성질을 생각하면, ",e(n.code,{children:"180도"})," 기준으로 그 부호가 바뀌는 것은 명백하다. 오목, 볼록의 기준을 나누는 값이 ",e(n.code,{children:"180도"}),"가 되므로, 음수, 양수에 따라 오목, 볼록을 판정하면 된다. ",e(n.code,{children:"Convex Hull"})," 과 같은 알고리즘에서 사용되는 성질이다. 사실 이거 때문에 간만에 외적을 다시 봤다. 주로 알고리즘에서 ",e(n.code,{children:"CCW"}),"라고 부르는 판별방식을 알아보자."]}),`
`,e(n.h3,{id:"ccw",children:"CCW"}),`
`,i(n.p,{children:[e(n.code,{children:"CCW"}),"는 Counter-Clockwise, 즉 반시계 방향으로 두 벡터가 정렬되었는지를 알게 해주는 값이다. 이를 구하기 위해서 세 점 ",e(n.code,{children:"A"}),", ",e(n.code,{children:"B"}),", ",e(n.code,{children:"C"}),"가 있다고 하자. (사이점이 B이다) 이때, 두 벡터 ",e(c.InlineMath,{math:"\\overrightarrow{BA}"}),"와 ",e(c.InlineMath,{math:"\\overrightarrow{BC}"}),"를 정의할 수 있다. 각각의 벡터값을 ",e(n.code,{children:"(x1, y1)"}),", ",e(n.code,{children:"(x2, y2)"})," 라 하면,"]}),`
`,e(c.BlockMath,{math:"\\overrightarrow{BA} \\times \\overrightarrow{BC} = \\begin{pmatrix}0 & 0 & x1y2 - x2y1\\end{pmatrix} \\begin{pmatrix}\\vec{i}\\\\\\vec{j}\\\\\\vec{k}\\end{pmatrix}"}),`
`,i(n.p,{children:["이 된다. 따라서 ",e(n.code,{children:"k"})," 방향의 값만 존재하고, 이 값은 또한 아래와 같다."]}),`
`,e(c.BlockMath,{math:"|\\overrightarrow{BA} \\times \\overrightarrow{BC}| = |\\overrightarrow{BA}||\\overrightarrow{BC}|sin\\theta = x1y2 - x2y1"}),`
`,i(n.p,{children:["즉, ",e(n.code,{children:"x1y2 - x2y1"})," 값이 양수이면 두 벡터가 예각을 이루고, 음수이면 둔각을 이룬다. CCW는 음수일 때로 판정하면 되겠다."]}),`
`,e(v,{}),`
`,e(l,{})]})}function x(r={}){const{wrapper:n}=Object.assign({},d(),r.components);return n?e(n,Object.assign({},r,{children:e(t,r)})):t(r)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=h;o.main=p;export{o as default};
