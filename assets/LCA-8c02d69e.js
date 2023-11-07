import{p as o}from"./LCA_-66b302c2.js";import{u as l,j as e,a as r,F as t}from"./ssg-client-8c9f48b0.js";import{C as h}from"./Comment-b4f63b2c.js";import{T as p}from"./TagList-c2a370d7.js";import{H as a}from"./Header-42b42994.js";import"./index.module-caf545e8.js";function c(d){const n=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},l(),d.components);return r(t,{children:[e(a,{}),`
`,r(n.p,{children:[e(n.code,{children:"LCA"}),"는 ",e(n.code,{children:"Least Common Ancestor"}),"의 약자이다. ",e(n.code,{children:"Tree"}),"에서의 ",e(n.code,{children:"공통 조상"}),"을 찾는 문제에 사용되는 알고리즘이다. 공통 조상이 여러개 있을 수 있으므로, 그 중에 제일 빠른 조상을 ",e(n.code,{children:"LCA"}),"로 정의한다. ",e(n.code,{children:"input"}),"으로는 서로 다른 두 ",e(n.code,{children:"Node"}),"가 주어진다. 이 두 ",e(n.code,{children:"Node"}),"를 ",e(n.code,{children:"l"}),"과 ",e(n.code,{children:"r"}),"이라 하자."]}),`
`,e(n.h2,{id:"on2",children:"O(n^2)"}),`
`,r(n.p,{children:["만약 ",e(n.code,{children:"Node"}),"의 ",e(n.code,{children:"depth"}),"를 모른다면 이 방법밖에 사실 사용할 수가 없다. 각 l에 대해(l이 root가 될 때까지) 모든 r을 순회한다. 코드를 보면 알겠지만 무조건 찾을 수밖에 없다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`for(Node* l = sl; l != 0; l = l->parent) {
    for(Node* r = sr; r != 0; r = r->parent) {
        if (l == r) return l;
    }
}
`})}),`
`,e(n.h2,{id:"on",children:"O(n)"}),`
`,r(n.p,{children:["만약 ",e(n.code,{children:"depth"}),"를 안다면, ",e(n.code,{children:"l"}),"과 ",e(n.code,{children:"r"}),"의 ",e(n.code,{children:"depth"}),"를 같게 맞춘 이후에, 양쪽 ",e(n.code,{children:"Node"}),"를 만날 때까지 같이 올리면 된다. 구현의 편의를 위해 처음에는 무조건 ",e(n.code,{children:"l"}),"의 ",e(n.code,{children:"depth"}),"가 크도록 ",e(n.code,{children:"swap"}),"을 하는 것이 편하다. 이렇게 구현하면 2중포문이 없기 때문에 ",e(n.code,{children:"worst"}),"는 ",e(n.code,{children:"O(n)"}),"이다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`if (l->depth < r->depth) swap(l, r);
while(l->depth > r->depth) l = l->parent;
for(;;l = l->parent, r = r->parent) {
    if (l == r) return l;
}
`})}),`
`,e(n.h2,{id:"olog-n",children:"O(log n)"}),`
`,r(n.p,{children:[e(n.code,{children:"O(log n)"}),"로 구현하려면 아래 2진수의 동작방식을 이해할 필요가 있다."]}),`
`,e(n.h3,{id:"2진수의-힘",children:"2진수의 힘"}),`
`,r(n.p,{children:["당연한 소리지만, 2진수는 모든 10진수를 나타낼 수 있다. 만약에 임의의 ",e(n.code,{children:"Node"}),"에 대해서 부모를 적절하게 저장하면 부모로 올라가는 과정을 ",e(n.code,{children:"O(n)"}),"이 아닌 ",e(n.code,{children:"O(log n)"}),"으로 할 수 있다. 바로, 부모를 저장하는데, 전체 부모를 저장하는 것이 아니라, ",e(n.code,{children:"1"}),", ",e(n.code,{children:"2"}),", ",e(n.code,{children:"4"}),", ",e(n.code,{children:"8"}),", 처럼 2진수에 쓰이는 숫자의 부모들을 저장하는 것이다. 이렇게 저장하면, 만약 특정 노드의 ",e(n.code,{children:"8"}),"번째 부모를 구한다고 했을 때, 특정노드의 ",e(n.code,{children:"4"}),"번째 부모의 ",e(n.code,{children:"4"}),"번째 부모를 구하는 식으로 생각할 수 있게 된다. 이렇게만 저장해도, ",e(n.code,{children:"7"})," = ",e(n.code,{children:"0111"}),"(2진수로) 이기 때문에, 모든 임의의 자연수의 부모를 ",e(n.code,{children:"O(log n)"})," 시간에 찾을 수 있게 된다. 이를 쉽게 구현하기 위해서는 ",e(n.code,{children:"bitmask"}),"를 사용하면 된다. 임의의 수만큼의 부모로 가는 코드는 아래와 같다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct Node {
    Node* parents[10]; // 최대 2^9의 부모를 저장한다.
};
Node* findParent(Node* cur, int num) {
    int mask = 0x1;
    for(int i = 0; i < 10; ++i, mask <<= 1) {
        if (num & mask) cur = cur->parents[i]; // 2의 지수승만큼의 부모로 이동한다.
    }
    return cur;
}
`})}),`
`,r(n.p,{children:[e(n.code,{children:"2^k"}),"의 부모를 저장하는 것은 코드상 ",e(n.code,{children:"node->parents[k]"}),"를 보는 것으로 구현이 된다. 이를 활용하면 ",e(n.code,{children:"LCA"}),"도 구현할 수 있다. 위 테크닉을 활용한다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`if (l->depth < r->depth) swap(l, r);
int diff = l->depth - r->depth;
// 1. depth를 맞춰준다.
int mask = 0x1;
for(int i = 0; i < 10; ++i, mask <<= 1) {
    if (num & mask) l = l->parents[i]; // 2의 지수승만큼의 부모로 이동한다.
}
if (l == r) return l;
// 2. 같아지기 직전까지 올라간다.
for(int i = 10 - 1; i >= 0; --i) {
    Node* nl = l->parents[i];
    Node* nr = r->parents[i];
    if (nl == nr) continue;
    l = nl; r = nr;
}
while(l != r) {
    l = l->parents[0];
    r = r->parents[0];
}
return l;
`})}),`
`,r(n.p,{children:["그런데, 설명중에 한가지 빠뜨린 것이 있다. ",e(n.code,{children:"parents[]"}),"의 초기화는 어떻게 할 것인가? 이를 쉽게 하기 위해서는 아래와 같은 수식을 활용한다."]}),`
`,e(n.pre,{children:e(n.code,{children:`2^k = 2^(k-1) + 2^(k-1)
`})}),`
`,r(n.p,{children:["사실 당연한 수식인데, 생각하긴 사실 쉽지 않다. 이 수식을 활용해서 ",e(n.code,{children:"parents[]"}),"를 초기화 할 수 있다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`for(int i = 0; i < 10; ++i) {
    if (n->parents[i - 1] != nullptr)
        n->parents[i] = n->parents[i - 1]->parents[i - 1];
    else n->parents[i] = nullptr;
}
`})}),`
`,r(n.p,{children:["새로운 값이 추가될 때, 위와 같이 ",e(n.code,{children:"Node"}),"를 업데이트 하면 된다. 만약 Add가 다 된 상태에서 ",e(n.code,{children:"parents[]"}),"를 채워야 한다면, ",e(n.code,{children:"root"})," 부터 시작해서 자식으로 채우면 된다."]}),`
`,e(p,{}),`
`,e(h,{})]})}function s(d={}){const{wrapper:n}=Object.assign({},l(),d.components);return n?e(n,Object.assign({},d,{children:e(c,d)})):c(d)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=o;i.main=m;export{i as default};
