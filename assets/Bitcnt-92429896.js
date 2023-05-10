import{p as o}from"./Bitcnt_-b474b022.js";import{u as c,j as e,a,F as s}from"./ssg-client-c6f7569e.js";import{C as l}from"./Comment-0b50999c.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},c(),t.components);return a(s,{children:[e(n.h1,{id:"bitcnt",children:"Bitcnt"}),`
`,e(n.p,{children:"흔히 builtin_popcount로 사용하지만, 직접 구현할 경우를 살펴본다."}),`
`,e(n.h3,{id:"naive",children:"Naive"}),`
`,e(n.p,{children:"가장 Naive한 방법은 아래와 같다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int bitcnt(int v) {
    int cnt = 0;
    for(int i = 0, mask = 0x1; i < 32; ++i, mask <<= 1) {
        if (v & mask) ++cnt;
    }
    return cnt;
}
`})}),`
`,e(n.h3,{id:"sparse",children:"Sparse"}),`
`,e(n.p,{children:"bit가 sparse하게 있는 경우에는 아래 방법이 유효하다. (켜진 bit수가 적을 것으로 예상되는 경우)"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int bitcnt(int v) {
    int cnt = 0;
    while (v) {
        v -= v & -v; // or v &= v - 1;
        ++cnt;
    }
    return cnt;
}
`})}),`
`,e(n.p,{children:"이 외에도 추후 merge 방법이나, 인접 bit로 더하는 방법을 추가 정리할 예정임."}),`
`,e(l,{})]})}function p(t={}){const{wrapper:n}=Object.assign({},c(),t.components);return n?e(n,Object.assign({},t,{children:e(i,t)})):i(t)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=o;r.main=d;export{r as default};
