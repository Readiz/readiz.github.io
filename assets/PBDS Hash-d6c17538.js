import{p as i}from"./PBDS Hash_-a0d01806.js";import{u as r,j as n,a as c,F as d}from"./ssg-client-a84c9b7f.js";import{C as a}from"./Comment-7f989ffb.js";import{T as l}from"./TagList-d587a9ba.js";import{H as h}from"./Header-c09ea125.js";import{I as p}from"./Image-2afbaa72.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function o(t){const e=Object.assign({p:"p",code:"code",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3",pre:"pre"},r(),t.components);return c(d,{children:[n(h,{}),`
`,c(e.p,{children:[n(e.code,{children:"PBDS Hash"}),"에 관한 간단한 정리."]}),`
`,c(e.ul,{children:[`
`,c(e.li,{children:["gnu official design manual: ",n(e.a,{href:"http://gcc.gnu.org/onlinedocs/libstdc++/manual/policy_data_structures_design.html",children:"http://gcc.gnu.org/onlinedocs/libstdc++/manual/policy_data_structures_design.html"})]}),`
`,c(e.li,{children:["관련 Codeforces 글: ",n(e.a,{href:"https://codeforces.com/blog/entry/60737",children:"https://codeforces.com/blog/entry/60737"})]}),`
`]}),`
`,n(e.h2,{id:"pbds-hash",children:"PBDS Hash?"}),`
`,c(e.p,{children:["PBDS는 Policy based data structures의 약자로, ",n(e.code,{children:"g++"}),"에서 ",n(e.code,{children:"ext/pb_ds"})," 아래에 위치하는 데이터 구조를 칭한다. 위 코드포스 블로그 글을 참조하면, 일반적인 ",n(e.code,{children:"unordered_map"})," 보다 훨씬 빠른 속도로 동작한다고 한다."]}),`
`,c(e.p,{children:["PBDS에서 사용가능한 것은 ",n(e.code,{children:"gp_hash_table"})," 과 ",n(e.code,{children:"cc_hash_table"})," 인데, ",n(e.code,{children:"gp_hash_table"}),"은 ",n(e.code,{children:"Open Addressing"})," 방식이고, ",n(e.code,{children:"cc_hash_table"}),"은 ",n(e.code,{children:"Chaining"})," 방식이다. 일반적으로 속도를 높히기 위해서 PBDS를 가지고 오는 것이므로 성능 향상을 목적으로는 ",n(e.code,{children:"gp_hash_table"}),"을 사용하는 것이 맞겠다."]}),`
`,n(p,{src:"2024-08-18-22-11-20.png"}),`
`,n(e.h3,{id:"사용-방법",children:"사용 방법"}),`
`,c(e.p,{children:["헤더를 넣고, 일반 ",n(e.code,{children:"unordered_map"})," 처럼 사용하면 된다. 끝. ",n(e.code,{children:"atcoder"})," 에 샘플로 제출한 솔루션은 아래와 같다."]}),`
`,c(e.ul,{children:[`
`,c(e.li,{children:["AtCoder ABC367 F번 솔루션에 사용: ",n(e.a,{href:"https://atcoder.jp/contests/abc367/submissions/56866430",children:"https://atcoder.jp/contests/abc367/submissions/56866430"})]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`#include <ext/pb_ds/assoc_container.hpp>
using namespace __gnu_pbds;

const int HW_RANDOM = chrono::high_resolution_clock::now().time_since_epoch().count();
struct chash {
    int operator()(int x) const { return x ^ HW_RANDOM; }
};
gp_hash_table<int, int, chash> Table;
`})}),`
`,c(e.p,{children:["여기서 ",n(e.code,{children:"chash"})," 는 해시 저격 방지용이다. 간단하게 저격 생각하지 않고 그냥 쓸거면 아래처럼도 가능하다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`#include <ext/pb_ds/assoc_container.hpp>
using namespace __gnu_pbds;
gp_hash_table<int, int> Table;
`})}),`
`,n(e.p,{children:"사용은 STL과 거의 같으므로, 편하게 사용할 수 있다."}),`
`,n(l,{}),`
`,n(a,{})]})}function u(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n(e,Object.assign({},t,{children:n(o,t)})):o(t)}const _=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=i;s.main=_;export{s as default};
