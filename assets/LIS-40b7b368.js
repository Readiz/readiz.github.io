import{p as t}from"./LIS_-66345136.js";import{u as d,j as e,a as i,F as h}from"./ssg-client-efe3b384.js";import{C as o}from"./Comment-1cc56398.js";import{T as a}from"./TagList-c5c555cc.js";import{H as s}from"./Header-fc45214b.js";import"./index.module-caf545e8.js";function r(c){const n=Object.assign({p:"p",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre"},d(),c.components);return i(h,{children:[e(s,{}),`
`,e(n.p,{children:"자꾸 까먹는 LIS 한번 정리해보기"}),`
`,e(n.h2,{id:"lis",children:"LIS"}),`
`,i(n.p,{children:[e(n.code,{children:"Longest Increase Sequence"})," 의 약자. ",e(n.code,{children:"최장 증가 수열"})," 로도 불린다."]}),`
`,e(n.p,{children:"아래와 같은 수열이 있다고 하자."}),`
`,i(n.table,{children:[e(n.thead,{children:i(n.tr,{children:[e(n.th,{align:"center",children:"0"}),e(n.th,{align:"center",children:"1"}),e(n.th,{align:"center",children:"2"}),e(n.th,{align:"center",children:"3"}),e(n.th,{align:"center",children:"4"}),e(n.th,{align:"center",children:"5"}),e(n.th,{align:"center",children:"6"})]})}),e(n.tbody,{children:i(n.tr,{children:[e(n.td,{align:"center",children:"2"}),e(n.td,{align:"center",children:"3"}),e(n.td,{align:"center",children:"1"}),e(n.td,{align:"center",children:"4"}),e(n.td,{align:"center",children:"7"}),e(n.td,{align:"center",children:"5"}),e(n.td,{align:"center",children:"3"})]})})]}),`
`,i(n.p,{children:["이 경우, 가장 길게 증가하는 ",e(n.code,{children:"sequence"}),"는 ",e(n.code,{children:"2 -> 3 -> 4 -> 7"}),"이며, 길이는 4가 된다. ",e(n.code,{children:"LIS"}),"는 이러한 가장 긴 경우를 찾는 알고리즘이라고 할 수 있다."]}),`
`,e(n.p,{children:"이를 풀이하는 방법을 찾아보자."}),`
`,e(n.h2,{id:"dp-solution",children:"DP Solution"}),`
`,i(n.p,{children:[e(n.code,{children:"DP[i]"}),"를 i번째에서의 ",e(n.code,{children:"LIS"}),"라고 정의하면, DP의 일반항을 아래와 같이 세울 수 있다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`if (A[j] > A[i])
    DP[j] = max(DP[j], DP[i] + 1);
`})}),`
`,e(n.p,{children:"여기서 j는 i보다 커야 한다. (증가하는 순서이므로) 루프를 포함한 전체 코드는 아래와 같다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`for(int i = 0; i < sz; ++i) {
    for(int j = i + 1; j < sz; ++j) { // j > i
        if (A[j] > A[i]) 
            DP[j] = max(DP[j], DP[i] + 1);
    }
}
`})}),`
`,i(n.p,{children:["여기서 LIS 결과값은 ",e(n.code,{children:"DP[]"})," 의 최대값이다. 그리고, 시간복잡도는 ",e(n.code,{children:"O(n^2)"}),"가 될 것이다."]}),`
`,e(n.h2,{id:"binary-search-solution",children:"Binary Search Solution"}),`
`,i(n.p,{children:["살짝 Tricky한 방식이다. 위에서 2중 포문을 도는 이유가 무엇인가? 그것은 ",e(n.code,{children:"DP"})," 배열의 업데이트 순서가 중요하기 때문이다. 만약 경우의 수를 세는 방식에서 벗어나서, ",e(n.code,{children:"A[i] < A[j]"}),"인 조건을 직접적으로 ",e(n.code,{children:"DP"})," 배열에 저장할 수 있다면? 그 경우에는 최종적으로 ",e(n.code,{children:"DP"})," 배열의 사이즈가 답이 될 것이다."]}),`
`,i(n.p,{children:["구체적인 구현 방식은 ",e(n.code,{children:"Binary Search"}),"를 사용한다. 각 원소에 대해서 ",e(n.code,{children:"Binary Search"}),"를 수행하면서 ",e(n.code,{children:"DP"})," 배열에 넣으면 되고, 이 경우 전체 배열을 1회만 scan 하면 된다. 따라서 시간복잡도는 ",e(n.code,{children:"O(n log n)"}),"이 된다. 이정도 시간복잡도는 ",e(n.code,{children:"O(n^2)"}),"에 비해 상당히 합리적이라고 할 수 있다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`vector<int> DP;
for(int i = 0; i < sz; ++i) {
    auto it = lower_bound(DP.begin(), DP.end(), A[i]);
    if (it == DP.end()) {
        DP.push_back(A[i]);
    } else {
        *it = A[i];
    }
}
`})}),`
`,e(n.p,{children:"여기서 LIS 결과값은 DP 배열의 size가 된다. 이렇게 DP의 관점을 바꾸는 것만으로 시간복잡도가 크게 개선될 수 있다."}),`
`,e(a,{}),`
`,e(o,{})]})}function p(c={}){const{wrapper:n}=Object.assign({},d(),c.components);return n?e(n,Object.assign({},c,{children:e(r,c)})):r(c)}const g=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=t;l.main=g;export{l as default};
