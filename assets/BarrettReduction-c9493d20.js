import{p as o}from"./BarrettReduction_-2a6a747c.js";import{u as t,j as e,a as l,F as c}from"./ssg-client-e2d38a5b.js";import{C as d}from"./Comment-eeecfeb9.js";import{H as m}from"./Header-562ca821.js";import{T as s}from"./TagList-fa710f4e.js";import"./index.module-caf545e8.js";function a(r){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",a:"a"},t(),r.components);return l(c,{children:[e(m,{}),`
`,e(n.h2,{id:"barrett-reduction",children:"Barrett Reduction"}),`
`,l(n.p,{children:[e(n.code,{children:"Assembly Level"}),"에서 가장 느린 Arithmetic 연산을 꼽으라고 한다면, ",e(n.code,{children:"modular"})," 연산일 것이다. 보통 PS에서는 나눗셈 연산이 소수값이 나오지 않도록 하기 위해서 modular 연산을 한 값을 출력하도록 하는 경우가 많은데, 이 경우 일단 modular 연산 자체를 줄이는게 첫번째고, 도저히 안될 경우 차선책으로 사용할 수 있는 방법이다."]}),`
`,l(n.p,{children:["이 방법은 modular 연산을 곱셈과 if 분기로 처리하게 된다. 단, modular를 수행할 값을 미리 알고 있어야 한다. (즉, ",e(n.code,{children:"MOD"}),"가 계속 바뀌면 안된다.) 또한, 이 MOD는 32비트 자료형 안에 들어갈 수 있는 자료형이어야 한다고 한다."]}),`
`,e(n.p,{children:"그리고, 비트연산을 활용하는 기법이기 때문에 128비트 자료형이 잠시 사용된다. MSVC에서는 변경이 필요할 것이다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`constexpr ll MOD = 1000000007;
constexpr ll IMOD = 0xFFFFFFFFFFFFFFFF / MOD + 1;
inline ll modular(ull n) {
    ull x = ull((__uint128_t(n) * IMOD) >> 64);
    unsigned int r = n - x * m;
    return m <= r ? x - 1 : x;
}
`})}),`
`,e(n.p,{children:"실제로 사용할 때는"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`a = b % MOD;
`})}),`
`,e(n.p,{children:"위 코드가"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`a = modular(b);
`})}),`
`,e(n.p,{children:"가 될 것이다. 물론 서두에 말한 것처럼 IMOD 값은 미리 계산되어 있어야 한다."}),`
`,e(n.p,{children:"놀라운 점은 함수 안의 모양이 저렇게 복잡한데도 일반 modular 연산보다 빠른 결과가 나온다는 것.."}),`
`,e(n.h3,{id:"참고자료",children:"참고자료"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["NyaanNyaan의 Library: ",e(n.a,{href:"https://github.com/NyaanNyaan/library/blob/master/modint/barrett-reduction.hpp",children:"https://github.com/NyaanNyaan/library/blob/master/modint/barrett-reduction.hpp"})]}),`
`]}),`
`,e(s,{}),`
`,e(d,{})]})}function u(r={}){const{wrapper:n}=Object.assign({},t(),r.components);return n?e(n,Object.assign({},r,{children:e(a,r)})):a(r)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=o;i.main=p;export{i as default};
