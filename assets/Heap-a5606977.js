import{p as o}from"./Heap_-416b9bce.js";import{u as i,j as e,a as d,F as p}from"./ssg-client-6079040b.js";import{C as a}from"./Comment-71d3a745.js";import{T as h}from"./TagList-ecf81d4d.js";import{H as t}from"./Header-fcb53ffa.js";import"./index.module-807ad0bd.js";function r(c){const n=Object.assign({p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre"},i(),c.components);return d(p,{children:[e(t,{}),`
`,d(n.p,{children:[e(n.code,{children:"Heap"})," 관련 정리. ",e(n.code,{children:"Heap"}),"은 주로 Array로 구현하며, 가장 큰 아이템이나 가장 작은 아이템을 ",e(n.code,{children:"O(1)"}),"의 시간복잡도로 구할 수 있으며, 이를 업데이트 하는데에 ",e(n.code,{children:"O(log n)"}),"의 시간이 걸리는 자료구조이다. ",e(n.code,{children:"set"})," 처럼 ",e(n.code,{children:"k"})," 값을 가지는 아이템을 찾거나 할 수는 없지만, 구조가 비교적 간단하니 익혀두면 좋다. 그리고, 최적화가 매우 가능한 녀석이다. 아래 코드가 나름의 비트연산을 사용한 최적이니 꼭 익혀두도록 하자."]}),`
`,e(n.h2,{id:"부모-자식간의-관계-정의",children:"부모, 자식간의 관계 정의"}),`
`,d(n.p,{children:["만약 ",e(n.code,{children:"1-indexed"})," ",e(n.code,{children:"Heap"}),"을 구현한다고 하면, 아래처럼 부모, 자식간의 관계를 정의할 수 있다. (메모리는 1만큼 낭비되지만, Index 계산에서 많이 편리하다)"]}),`
`,d(n.ul,{children:[`
`,d(n.li,{children:["부모 Index: ",e(n.code,{children:"idx >> 1"})]}),`
`,d(n.li,{children:["자식 Index",`
`,d(n.ul,{children:[`
`,d(n.li,{children:["왼쪽: ",e(n.code,{children:"idx << 1"})]}),`
`,d(n.li,{children:["오른쪽: ",e(n.code,{children:"(idx << 1) | 1"})]}),`
`]}),`
`]}),`
`]}),`
`,e(n.p,{children:"위 방식으로 간단하게 Array를 Tree로 사용할 수 있다."}),`
`,e(n.h2,{id:"heap에서의-push",children:"Heap에서의 Push"}),`
`,d(n.p,{children:["만약 현재의 ",e(n.code,{children:"Heap"}),"의 크기가 ",e(n.code,{children:"sz"}),"라고 하자. 그렇다면, 다음에 들어갈 원소의 위치는 ",e(n.code,{children:"sz + 1"})," 이다. (초기 조건을 생각하자)"]}),`
`,d(n.p,{children:["이렇게 원소를 대충 삽입한 이후에, 이를 계속 상위 level의 아이템과 비교하여, swap하면 된다. 아래는 ",e(n.code,{children:"MinHeap"}),"에서의 예시이다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`T d[SZ + 1];
int sz;

void push(T v) {
    int p = ++sz;
    for(; p > 1; p >>= 1) {
        if (d[p>>1] <= v) break; // 이미 조건을 만족하고 있으면 break
        d[p] = d[p>>1];
    }
    d[p] = v;
}
`})}),`
`,d(n.p,{children:["대충 ",e(n.code,{children:"Insertion Sort"})," 와 모습이 비슷하니, 잘 안되면 정렬 연습을 다시 하고 오자."]}),`
`,e(n.h2,{id:"heap에서의-pop",children:"Heap에서의 Pop"}),`
`,d(n.p,{children:["이게 좀 어렵다. 우선, 1번 ",e(n.code,{children:"index"}),"의 데이터가 빠져나간다. 그리고 나서 swap이 시작될 텐데, 일단 이 떄의 target은 ",e(n.code,{children:"sz - 1"})," 위체이 있는 아이템이 될 것이다. 먼저 좌측 자식으로 swap 한다고 생각한 이후, 우측 자식의 조건이 더 좋으면 우측 자식하고 swap 한다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`T d[SZ + 1];
int sz;

T pop() {
    T r = d[1];
    T val = d[sz--];
    int c = 2; // 왼쪽 자식부터 검사

    for(; c <= sz && d[c |= (c < sz && d[c] >= d[c|1])] < val; c <<= 1) {
        d[c>>1] = d[c];
    }
    d[c>>1] = val;

    return r;
}
`})}),`
`,e(n.h2,{id:"index를-관리하는-heap",children:"Index를 관리하는 Heap"}),`
`,d(n.p,{children:["Heap에 삽입된 시점의 ",e(n.code,{children:"Index"}),"를 저장해주면, 특정 원소의 값을 찾을 수 있고, 그 ",e(n.code,{children:"Index"}),"의 값을 변경할 수 있다. 변경 후에는 ",e(n.code,{children:"update"}),"와 ",e(n.code,{children:"downdate"}),"를 순서 관계없이 1번씩 해주면 다시 heap의 구조가 유지된다. 이를 활용한 전체 heap 코드의 샘플은 아래와 같다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct Heap {
    T data[SZ + 1];
    int oidx[SZ + 1];
    int sz;

    void init() { sz = 0; }
    void push(T v) {
        int p = ++sz;
        for(; p > 1; p >>= 1) {
            if (d[p>>1] <= v) break; // 이미 조건을 만족하고 있으면 break
            d[p] = d[p>>1];
        }
        d[p] = v;
    }
    T pop() {
        T r = d[1];
        T val = d[sz--];
        int c = 2; // 왼쪽 자식부터 검사

        for(; c <= sz && d[c |= (c < sz && d[c] >= d[c|1])] < val; c <<= 1) {
            d[c>>1] = d[c];
        }
        d[c>>1] = val;

        return r;
    }
};

`})}),`
`,e(h,{}),`
`,e(a,{})]})}function s(c={}){const{wrapper:n}=Object.assign({},i(),c.components);return n?e(n,Object.assign({},c,{children:e(r,c)})):r(c)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=o;l.main=u;export{l as default};
