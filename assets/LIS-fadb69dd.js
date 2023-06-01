import{p as t}from"./LIS_-66345136.js";import{u as r,j as n,a as c,F as h}from"./ssg-client-82177a39.js";import{C as o}from"./Comment-889d5716.js";import{T as a}from"./TagList-97ce4fe8.js";import{H as s}from"./Header-6d4eedfc.js";import"./index.module-caf545e8.js";function d(i){const e=Object.assign({p:"p",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",pre:"pre"},r(),i.components);return c(h,{children:[n(s,{}),`
`,n(e.p,{children:"자꾸 까먹는 LIS 한번 정리해보기"}),`
`,n(e.h2,{id:"lis",children:"LIS"}),`
`,c(e.p,{children:[n(e.code,{children:"Longest Increase Sequence"})," 의 약자. ",n(e.code,{children:"최장 증가 수열"})," 로도 불린다."]}),`
`,n(e.p,{children:"아래와 같은 수열이 있다고 하자."}),`
`,c(e.table,{children:[n(e.thead,{children:c(e.tr,{children:[n(e.th,{align:"left",children:"index"}),n(e.th,{align:"center",children:"0"}),n(e.th,{align:"center",children:"1"}),n(e.th,{align:"center",children:"2"}),n(e.th,{align:"center",children:"3"}),n(e.th,{align:"center",children:"4"}),n(e.th,{align:"center",children:"5"}),n(e.th,{align:"center",children:"6"})]})}),n(e.tbody,{children:c(e.tr,{children:[n(e.td,{align:"left",children:n(e.strong,{children:"value"})}),n(e.td,{align:"center",children:"2"}),n(e.td,{align:"center",children:"3"}),n(e.td,{align:"center",children:"1"}),n(e.td,{align:"center",children:"4"}),n(e.td,{align:"center",children:"7"}),n(e.td,{align:"center",children:"5"}),n(e.td,{align:"center",children:"3"})]})})]}),`
`,c(e.p,{children:["이 경우, 가장 길게 증가하는 ",n(e.code,{children:"sequence"}),"는 ",n(e.code,{children:"2 -> 3 -> 4 -> 7"}),"이며, 길이는 4가 된다. ",n(e.code,{children:"LIS"}),"는 이러한 가장 긴 경우를 찾는 알고리즘이라고 할 수 있다."]}),`
`,n(e.p,{children:"이를 풀이하는 방법을 찾아보자."}),`
`,n(e.h2,{id:"dp-solution",children:"DP Solution"}),`
`,c(e.p,{children:[n(e.code,{children:"DP[j]"}),"를 j번째에서의 ",n(e.code,{children:"LIS"}),"라고 정의하면, DP의 일반항을 아래와 같이 세울 수 있다. 아래에서 ",n(e.code,{children:"i"}),"번째는 ",n(e.code,{children:"i < j"}),"인 조건에서 확인이 되어야 한다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`if (A[i] < A[j])
    DP[j] = max(DP[j], DP[i] + 1);
`})}),`
`,c(e.p,{children:["여기서 ",n(e.code,{children:"j"}),"는 ",n(e.code,{children:"i"}),"보다 커야 한다. (증가하는 순서이므로) 루프를 포함한 전체 코드는 아래와 같다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`DP[0] = 1; // 첫번째 원소는 무조건 1의 LIS를 가진다.
for(int j = 1; j < sz; ++j) { // j번째를 채울 때, [0, j)까지 확인해서 max 값을 사용한다.
    for(int i = 0; i < j; ++i) { // i < j
        if (A[i] < A[j]) 
            DP[j] = max(DP[j], DP[i] + 1);
    }
}
`})}),`
`,c(e.p,{children:["여기서 ",n(e.code,{children:"LIS"})," 결과값은 ",n(e.code,{children:"DP[]"})," 의 최대값 + 1이다. 그리고, 시간복잡도는 ",n(e.code,{children:"O(n^2)"}),"가 될 것이다."]}),`
`,n(e.h2,{id:"binary-search-solution",children:"Binary Search Solution"}),`
`,c(e.p,{children:["살짝 Tricky한 방식이다. 위에서 2중 포문을 도는 이유가 무엇인가? 그것은 ",n(e.code,{children:"DP"})," 배열의 업데이트 순서가 중요하기 때문이다. 만약 경우의 수를 세는 방식에서 벗어나서, ",n(e.code,{children:"A[i] < A[j]"}),"인 조건을 직접적으로 ",n(e.code,{children:"DP"})," 배열에 저장할 수 있다면? 그 경우에는 최종적으로 ",n(e.code,{children:"DP"})," 배열의 사이즈가 답이 될 것이다."]}),`
`,c(e.p,{children:["구체적인 구현 방식은 ",n(e.code,{children:"Binary Search"}),"를 사용한다. 각 원소에 대해서 ",n(e.code,{children:"Binary Search"}),"를 수행하면서 ",n(e.code,{children:"DP"})," 배열에 넣으면 되고, 이 경우 전체 배열을 1회만 scan 하면 된다. 따라서 시간복잡도는 ",n(e.code,{children:"O(n log n)"}),"이 된다. 이정도 시간복잡도는 ",n(e.code,{children:"O(n^2)"}),"에 비해 상당히 합리적이라고 할 수 있다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`vector<int> DP;
for(int i = 0; i < sz; ++i) {
    auto it = lower_bound(DP.begin(), DP.end(), A[i]);
    if (it == DP.end()) {
        DP.push_back(A[i]);
    } else {
        *it = A[i];
    }
}
`})}),`
`,c(e.p,{children:["여기서 ",n(e.code,{children:"LIS"})," 결과값은 ",n(e.code,{children:"DP"})," 배열의 size가 된다. 이렇게 ",n(e.code,{children:"DP"}),"의 관점을 바꾸는 것만으로 시간복잡도가 크게 개선될 수 있다."]}),`
`,c(e.p,{children:["만약 이 방법에서 실제 ",n(e.code,{children:"LIS"}),"를 이루는 배열을 알아야 한다고 한다면, ",n(e.code,{children:"push_back"})," 되는 시점의 원소들로 구성하면 된다. 그러나 모든 경우를 구하는 것은 아니다."]}),`
`,n(a,{}),`
`,n(o,{})]})}function p(i={}){const{wrapper:e}=Object.assign({},r(),i.components);return e?n(e,Object.assign({},i,{children:n(d,i)})):d(i)}const g=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=t;l.main=g;export{l as default};
