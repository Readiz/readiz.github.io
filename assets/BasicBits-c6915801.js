import{p as h}from"./BasicBits_-e804d22e.js";import{u as r,j as n,a as c,F as t}from"./ssg-client-e4fc272f.js";import{C as o}from"./Comment-b9647567.js";import{H as a}from"./Header-1dd63123.js";import{T as p}from"./TagList-0194a732.js";import"./index.module-caf545e8.js";function i(d){const e=Object.assign({p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",h3:"h3",ul:"ul",li:"li"},r(),d.components);return c(t,{children:[n(a,{}),`
`,c(e.p,{children:["비트연산의 세계는 끝도 없지만, 기초적인 것부터 하나씩 보다보면 특성상 이해하지 못할 것도 없다. ",n(e.code,{children:"network flow"}),"를 모를지라도 비트연산은 계속 보다보면 적응이 되기 때문."]}),`
`,n(e.h2,{id:"기초-reminder",children:"기초 Reminder"}),`
`,c(e.p,{children:["시작하기에 앞서, remind 차원에서 2진수 ",n(e.code,{children:"1011"}),"이 어떻게 10진수로 변환되는지를 상기해보자."]}),`
`,c(e.table,{children:[n(e.thead,{children:c(e.tr,{children:[n(e.th,{align:"center",children:"1"}),n(e.th,{align:"center",children:"0"}),n(e.th,{align:"center",children:"1"}),n(e.th,{align:"center",children:"1"})]})}),c(e.tbody,{children:[c(e.tr,{children:[n(e.td,{align:"center",children:"1 * 2^3"}),n(e.td,{align:"center",children:"0 * 2^2"}),n(e.td,{align:"center",children:"1 * 2^1"}),n(e.td,{align:"center",children:"1 * 2^0"})]}),c(e.tr,{children:[n(e.td,{align:"center",children:"8"}),n(e.td,{align:"center",children:"0"}),n(e.td,{align:"center",children:"2"}),n(e.td,{align:"center",children:"1"})]})]})]}),`
`,c(e.p,{children:["위 과정을 거쳐 ",n(e.code,{children:"1011"}),"은 ",n(e.code,{children:"11"}),"로 변환된다. 이 과정에서 볼 수 있는 것처럼, 만약 전체 셀이 좌측으로 1칸 이동하게 된다면, 이 수에 2를 곱한 것과 같은 결과를 낳는다는 것을 알 수 있다."]}),`
`,c(e.table,{children:[n(e.thead,{children:c(e.tr,{children:[n(e.th,{align:"center",children:"1"}),n(e.th,{align:"center",children:"0"}),n(e.th,{align:"center",children:"1"}),n(e.th,{align:"center",children:"1"}),n(e.th,{align:"center",children:"0"})]})}),c(e.tbody,{children:[c(e.tr,{children:[n(e.td,{align:"center",children:"1 * 2^4"}),n(e.td,{align:"center",children:"0 * 2^3"}),n(e.td,{align:"center",children:"1 * 2^2"}),n(e.td,{align:"center",children:"1 * 2^1"}),n(e.td,{align:"center",children:"0 * 2^0"})]}),c(e.tr,{children:[n(e.td,{align:"center",children:"16"}),n(e.td,{align:"center",children:"0"}),n(e.td,{align:"center",children:"4"}),n(e.td,{align:"center",children:"2"}),n(e.td,{align:"center",children:"0"})]})]})]}),`
`,c(e.p,{children:["즉, 이 수는 ",n(e.code,{children:"11*2"})," = ",n(e.code,{children:"22"}),"와 결과가 같아진다. 이를 코드로 구현해서 2의 제곱수를 곱하는 코드를 구현하면 아래처럼 된다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`int get2powermultiply(int v, int pow2) {
    return v << pow2;
}
`})}),`
`,c(e.p,{children:["또한, 맨 우측의 수만이 ",n(e.code,{children:"1"}),"을 나타내므로, 홀수일 경우에 맨 우측의 수는 항상 ",n(e.code,{children:"1"}),"이 됨도 덩달아 알 수 있다. 그래서, 홀수 판정 로직을 아래와 같이 짤 수 있다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`bool isOdd(int v) {
    return v & 1;
}
`})}),`
`,c(e.p,{children:[n(e.code,{children:"C++"}),"에서 ",n(e.code,{children:"1"})," = ",n(e.code,{children:"0b00000...0001"}),"과 같다. 즉, ",n(e.code,{children:"&"})," 연산을 취하면 ",n(e.code,{children:"LSB"}),"인 맨 최하위 비트만 남게 된다. 여기서 ",n(e.code,{children:"0b000..000"}),"과 같은 표기법을 잠깐 짚고 넘어가자."]}),`
`,n(e.h3,{id:"c에서의-2진수-표현",children:"C++에서의 2진수 표현"}),`
`,c(e.p,{children:["위에 잠깐 언급한 것처럼, ",n(e.code,{children:"C++"}),"에서는 2진수를 표현하기 위해 ",n(e.code,{children:"prefix"}),"인 ",n(e.code,{children:"0b"}),"를 붙인다. 이것을 붙임으로써 컴파일러한테 내가 앞으로 쓰는 숫자가 10진법이 아니라 2진법이라는 시그널을 주는 것이다. 유의할 점은, 이것이 자료형까지 초월하지는 않는다는 것이다. 흔히 쓰이는 ",n(e.code,{children:"32bit"})," 시스템에서는 ",n(e.code,{children:"int"})," 자료형 기준으로 ",n(e.code,{children:"32bit"}),"까지 사용할 수 있다. 그리고, 일반적으로 ",n(e.code,{children:"int"}),"는 ",n(e.code,{children:"부호있는"})," 자료형 취급을 받기 때문에 그냥 ",n(e.code,{children:"int"}),"를 사용하게 되면 ",n(e.code,{children:"shift"}),"연산 등에서 조금 헷갈릴 수 있다. 그래서 가급적 비트연산을 할 경우에는 ",n(e.code,{children:"부호없는"})," 자료형인 ",n(e.code,{children:"unsigned int"}),"를 사용하는 것을 추천한다."]}),`
`,n(e.p,{children:"또한, 고인물들은 2진수 표현으로 2진수를 쓰지 않는다. 무슨 말인가 하면, 아래와 같은 16진수를 쓰곤 한다는 것이다."}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`constexpr unsigned int flipbit = 0x55555555;
`})}),`
`,c(e.p,{children:[n(e.code,{children:"0x"}),"로 시작하는 경우 16진수를 뜻한다. 16진수는 ",n(e.code,{children:"16 = 2^4"}),"이므로, 2진수와 자리수별로 1:4 매핑이 된다. ",n(e.code,{children:"0x5"}),"라고 쓴 것은, ",n(e.code,{children:"0b0101"}),"을 의미한다. ",n(e.code,{children:"0xF"}),"라고 쓴 것은 ",n(e.code,{children:"0b1111"}),"을 의미한다. 이렇게 고이게 되면, 그냥 16진수만 봐도 2진수를 보는 경지에 이른다. 이게 굳이 필요한 이유는? 2진수로 쓰면 매우 길어지는 것들이 간단하게 써지기 때문이다. 예를 몇가지 들면"]}),`
`,c(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"0xFFFFFFFF = 0b11111111111111111111111111111111"})}),`
`,n(e.li,{children:n(e.code,{children:"0x55555555 = 0b01010101010101010101010101010101"})}),`
`,n(e.li,{children:n(e.code,{children:"0x33333333 = 0b00110011001100110011001100110011"})}),`
`,n(e.li,{children:n(e.code,{children:"0xAAAAAAAA = 0b10101010101010101010101010101010"})}),`
`]}),`
`,n(e.p,{children:"와 같은 것들이 있다. 보이는대로 4자리가 하나로 묶이기 때문에, 표현이 길지 않고 간단하게 된다는 장점이 있다."}),`
`,n(e.h3,{id:"2의-보수",children:"2의 보수"}),`
`,n(e.p,{children:"이 부분에 대한 언급을 스킵하면 뒤쪽에서 다루게 될 Tricky한 비트연산 방법들을 이해하기 어려워지기 때문에 짚고 넘어갈 필요가 있겠다."}),`
`,c(e.ul,{children:[`
`,n(e.li,{children:"작성 중"}),`
`]}),`
`,n(e.h2,{id:"tricky-한-비트-다루기",children:"Tricky 한 비트 다루기"}),`
`,n(e.h3,{id:"최하위-비트-끄기",children:"최하위 비트 끄기"}),`
`,n(e.p,{children:"흔히 팬윅 트리에서 많이 쓰이는 기법이다. 아래와 같이 호출하면, 맨 하위 1비트가 1 -> 0으로 바뀌게 된다."}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`v -= v & -v;
`})}),`
`,c(e.p,{children:["위에서 ",n(e.code,{children:"2의 보수"})," 와 관련해 다룬 것과 연관이 있다. -v를 하는 순간 전체 비트가 반전되며, 1이 더해진다. 이와 & 연산을 하게되면, 맨 하위 비트를 제외하고는 모두 0이 됨을 알 수 있다."]}),`
`,n(e.p,{children:"그런데 위 방법 말고 operation 수가 더 적은 방식도 존재한다."}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`v = v & (v-1);
`})}),`
`,n(e.p,{children:"위 방식은 이진수 뺄셈의 특성을 이용한 방식으로, 1을 뺄 경우 최하위 1 비트가 0으로 바뀌고 그 아래 비트가 1로 바뀐다는 사실을 이용한다. 부호바꿈 연산을 절약할 수 있는 방식이다."}),`
`,n(p,{}),`
`,n(o,{})]})}function g(d={}){const{wrapper:e}=Object.assign({},r(),d.components);return e?n(e,Object.assign({},d,{children:n(i,d)})):i(d)}const s=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=h;l.main=s;export{l as default};
