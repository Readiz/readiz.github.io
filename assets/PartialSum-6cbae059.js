import{p as o}from"./PartialSum_-a06709db.js";import{u as c,j as e,a as i,F as h}from"./ssg-client-e2d38a5b.js";import{C as t}from"./Comment-eeecfeb9.js";import{T as p}from"./TagList-fa710f4e.js";import{H as a}from"./Header-562ca821.js";import"./index.module-caf545e8.js";function r(d){const n=Object.assign({p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",h4:"h4"},c(),d.components);return i(h,{children:[e(a,{}),`
`,e(n.p,{children:"부분합 관련 알고리즘 정리"}),`
`,e(n.h2,{id:"부분합과-쿼리",children:"부분합과 쿼리"}),`
`,i(n.p,{children:[e(n.code,{children:"Query"}),"란, 이를테면 특정 Range의 합을 구하는 것을 말한다. 이러한 ",e(n.code,{children:"Query"}),"에 따라 부분합을 저장하는 방식을 다르게 해야한다."]}),`
`,e(n.h3,{id:"배열이-변하지-않고-query가-계속될-경우",children:"배열이 변하지 않고 Query가 계속될 경우"}),`
`,e(n.p,{children:"이 경우에는 가장 단순하면서도 심플한 방법이 있다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int pSum[MAX];
void init(int arr[]) {
    pSum[0] = arr[0];
    for(int i = 1; i < MAX; ++i) {
        pSum[i] = pSum[i-1] + arr[i];
    }
}
int getRangeSum(int l, int r) {
    if (l == 0) return pSum[r];
    return pSum[r] - pSum[l - 1];
}
`})}),`
`,i(n.p,{children:["이 경우 처음 ",e(n.code,{children:"init"}),"이 된 이후에는 무려 ",e(n.code,{children:"O(1)"}),"로 부분합을 구할 수 있다."]}),`
`,i(n.p,{children:["그런데, 이렇게만 되면 너무 쉬우니, 보통 알고리즘 시험이나 이런 곳에서는 ",e(n.code,{children:"arr"}),"의 값을 지속적으로 변경하는 형태의 문제가 출제되곤 한다. 이렇게 원본 배열의 값이 변화가 있을 경우에는 기존에 구해놓은 ",e(n.code,{children:"pSum"}),"의 값이 무용지물이고, 값에 변화가 있을 때마다 ",e(n.code,{children:"O(n)"}),"의 업데이트가 있어야 할 것이다."]}),`
`,e(n.h3,{id:"fenwick-tree",children:"Fenwick Tree"}),`
`,i(n.p,{children:["부분합을 구할 때 있어서 가장 아름다운 방법이라고 나는 생각한다. 이 트리는 ",e(n.code,{children:"Binary-Indexed Tree"})," 라고도 불리며, 추후 소개할 ",e(n.code,{children:"Segment Tree"}),"와 다르게, 추가 메모리 공간을 ",e(n.code,{children:"N"})," 만큼만 사용하고도 부분합을 저장할 수 있는 방법이다. 어떻게 ",e(n.code,{children:"N"})," 만큼으로 저장하는가? 이진수의 원리를 사용한다. 예를들어 특정 Index의 값을 업데이트 한다고 하면, 아래처럼 한다."]}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.code,{children:"11 (1011)"})," -> ",e(n.code,{children:"12 (1100)"})," -> ",e(n.code,{children:"16 (10000)"})," -> ",e(n.code,{children:"32 (100000)"})," -> ..."]}),`
`,i(n.li,{children:[e(n.code,{children:"7 (0111)"})," -> ",e(n.code,{children:"8 (1000)"})," -> ",e(n.code,{children:"16 (10000)"})," -> ",e(n.code,{children:"32 (100000)"})," -> ..."]}),`
`]}),`
`,i(n.p,{children:["이렇게 할 경우, 전체 업데이트 될 Index의 개수는 ",e(n.code,{children:"log n"}),"개가 되므로, 시간복잡도가 ",e(n.code,{children:"O(n)"}),"에서 많이 줄어들게 된다."]}),`
`,e(n.p,{children:"그리고, 특정 Index 까지의 합을 구하고 싶다면, 아래 순서로 합한다."}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.code,{children:"11 (1011)"})," -> ",e(n.code,{children:"10 (1010)"})," -> ",e(n.code,{children:"8 (1000)"})]}),`
`,i(n.li,{children:[e(n.code,{children:"7 (0111)"})," -> ",e(n.code,{children:"6 (0110)"})," -> ",e(n.code,{children:"4 (0100)"})]}),`
`]}),`
`,i(n.p,{children:["이 과정도 마찬가지로 이진수 단위로 업데이트 되므로 시간복잡도는 ",e(n.code,{children:"O(log n)"})," 이다."]}),`
`,e(n.p,{children:"코드로 위 두 과정을 구현하면 아래처럼 된다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int f[MAX];
void update(int idx, int v) {
    for(; idx < MAX; idx += idx & -idx) f[idx] += v;
}
int get(int idx) {
    int r = 0;
    for(; idx > 0; idx -= idx & -idx) r += f[idx];
    return r;
}
`})}),`
`,i(n.p,{children:["코드에서 드러난 것처럼, 만약 n개의 데이터를 초기화한다고 하면 ",e(n.code,{children:"O(n log n)"}),"의 시간복잡도가 소요된다."]}),`
`,e(n.h3,{id:"segment-tree",children:"Segment Tree"}),`
`,i(n.p,{children:[e(n.code,{children:"Segment Tree"}),"는 일반적인 Query를 효율적으로 동작할 수 있게 하는 구조이다."]}),`
`,e(n.h4,{id:"작성-중",children:"작성 중"}),`
`,e(p,{}),`
`,e(t,{})]})}function u(d={}){const{wrapper:n}=Object.assign({},c(),d.components);return n?e(n,Object.assign({},d,{children:e(r,d)})):r(d)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=o;l.main=m;export{l as default};
