import{p}from"./Heap_-7c5537af.js";import{u as c,j as r,a as d,F as s}from"./ssg-client-a408e234.js";import{C as l}from"./Comment-8a5b5d83.js";import{T as a}from"./TagList-19c2c12d.js";import{H as t}from"./Header-39b93b93.js";import"./index.module-5d0c9a7d.js";function e(i){const n=Object.assign({p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre"},c(),i.components);return d(s,{children:[r(t,{}),`
`,d(n.p,{children:[r(n.code,{children:"Heap"})," 관련 정리. ",r(n.code,{children:"Heap"}),"은 주로 Array로 구현하며, 가장 큰 아이템이나 가장 작은 아이템을 ",r(n.code,{children:"O(1)"}),"의 시간복잡도로 구할 수 있으며, 이를 업데이트 하는데에 ",r(n.code,{children:"O(log n)"}),"의 시간이 걸리는 자료구조이다. ",r(n.code,{children:"set"})," 처럼 ",r(n.code,{children:"k"})," 값을 가지는 아이템을 찾거나 할 수는 없지만, 구조가 비교적 간단하니 익혀두면 좋다. 그리고, 최적화가 매우 가능한 녀석이다. 아래 코드가 나름의 비트연산을 사용한 최적이니 꼭 익혀두도록 하자."]}),`
`,r(n.h2,{id:"부모-자식간의-관계-정의",children:"부모, 자식간의 관계 정의"}),`
`,d(n.p,{children:["만약 ",r(n.code,{children:"1-indexed"})," ",r(n.code,{children:"Heap"}),"을 구현한다고 하면, 아래처럼 부모, 자식간의 관계를 정의할 수 있다. (메모리는 1만큼 낭비되지만, Index 계산에서 많이 편리하다)"]}),`
`,d(n.ul,{children:[`
`,d(n.li,{children:["부모 Index: ",r(n.code,{children:"idx >> 1"})]}),`
`,d(n.li,{children:["자식 Index",`
`,d(n.ul,{children:[`
`,d(n.li,{children:["왼쪽: ",r(n.code,{children:"idx << 1"})]}),`
`,d(n.li,{children:["오른쪽: ",r(n.code,{children:"(idx << 1) | 1"})]}),`
`]}),`
`]}),`
`]}),`
`,r(n.p,{children:"위 방식으로 간단하게 Array를 Tree로 사용할 수 있다."}),`
`,r(n.h2,{id:"heap에서의-push",children:"Heap에서의 Push"}),`
`,d(n.p,{children:["만약 현재의 ",r(n.code,{children:"Heap"}),"의 크기가 ",r(n.code,{children:"sz"}),"라고 하자. 그렇다면, 다음에 들어갈 원소의 위치는 ",r(n.code,{children:"sz + 1"})," 이다. (초기 조건을 생각하자)"]}),`
`,d(n.p,{children:["이렇게 원소를 대충 삽입한 이후에, 이를 계속 상위 level의 아이템과 비교하여, swap하면 된다. 아래는 ",r(n.code,{children:"MinHeap"}),"에서의 예시이다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`T d[SZ + 1];\r
int sz;\r
\r
void push(T v) {\r
    int p = ++sz;\r
    for(; p > 1; p >>= 1) {\r
        if (d[p>>1] <= v) break; // 이미 조건을 만족하고 있으면 break\r
        d[p] = d[p>>1];\r
    }\r
    d[p] = v;\r
}
`})}),`
`,d(n.p,{children:["대충 ",r(n.code,{children:"Insertion Sort"})," 와 모습이 비슷하니, 잘 안되면 정렬 연습을 다시 하고 오자."]}),`
`,r(n.h2,{id:"heap에서의-pop",children:"Heap에서의 Pop"}),`
`,d(n.p,{children:["이게 좀 어렵다. 우선, 1번 ",r(n.code,{children:"index"}),"의 데이터가 빠져나간다. 그리고 나서 swap이 시작될 텐데, 일단 이 때의 target은 ",r(n.code,{children:"sz - 1"})," 위치에 있는 아이템이 될 것이다. 먼저 좌측 자식으로 swap 한다고 생각한 이후, 우측 자식의 조건이 더 좋으면 우측 자식하고 swap 한다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`T d[SZ + 1];\r
int sz;\r
\r
T pop() {\r
    T r = d[1];\r
    T val = d[sz--];\r
    int c = 2; // 왼쪽 자식부터 검사\r
\r
    for(; c <= sz && d[c |= (c < sz && d[c] >= d[c|1])] < val; c <<= 1) {\r
        d[c>>1] = d[c];\r
    }\r
    d[c>>1] = val;\r
\r
    return r;\r
}
`})}),`
`,r(n.h2,{id:"index를-관리하는-heap",children:"Index를 관리하는 Heap"}),`
`,d(n.p,{children:["Heap에 삽입된 시점의 ",r(n.code,{children:"Index"}),"를 저장해주면, 특정 원소의 값을 찾을 수 있고, 그 ",r(n.code,{children:"Index"}),"의 값을 변경할 수 있다. 변경 후에는 ",r(n.code,{children:"swim"}),"과 ",r(n.code,{children:"sink"}),"를 순서 관계없이 1번씩 해주면 다시 heap의 구조가 유지된다. 이를 활용한 전체 heap 코드의 샘플은 아래와 같다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`struct Heap {\r
    T data[SZ + 1];\r
    int posToID[SZ + 1]; // 위치 p에 있는 녀석의 id\r
    int idToPos[ID_MAX]; // id가 어느 위치 p에 있는지\r
    int sz;\r
\r
    void init() { sz = 0; }\r
    void push(int idx, T v) {\r
        int p = ++sz;\r
        for(; p > 1; p >>= 1) {\r
            if (d[p>>1] <= v) break; // 이미 조건을 만족하고 있으면 break\r
            d[p] = d[p>>1];\r
            idToPos[id[p]] = idToPos[id[p>>1]];\r
            posToID[p] = posToID[p>>1];\r
        }\r
        d[p] = v;\r
        posToID[p] = idx;\r
        idToPos[idx] = p;\r
    }\r
    T pop() {\r
        T r = d[1];\r
        int idx = posToID[sz];\r
        T val = d[sz--];\r
        int c = 2; // 왼쪽 자식부터 검사\r
\r
        for(; c <= sz && d[c |= (c < sz && d[c] >= d[c|1])] < val; c <<= 1) {\r
            d[c>>1] = d[c];\r
            idToPos[id[c>>1]] = idToPos[id[c]];\r
            posToID[c>>1] = posToID[c];\r
        }\r
        d[c>>1] = val;\r
        posToID[c>>1] = idx;\r
        idToPos[idx] = c>>1;\r
        return r;\r
    }\r
    T getData(int idx) {\r
        return d[idToPos[idx]];\r
    }\r
    void updateData(int idx, T v) {\r
        int spos = idToPos[idx];\r
        d[spos] = v;\r
\r
        // 위로 갱신 (swim)\r
        int p = spos;\r
        for(; p > 1; p >>= 1) {\r
            if (d[p>>1] <= v) break; // 이미 조건을 만족하고 있으면 break\r
            d[p] = d[p>>1];\r
            idToPos[id[p]] = idToPos[id[p>>1]];\r
            posToID[p] = posToID[p>>1];\r
        }\r
        d[p] = v;\r
        posToID[p] = idx;\r
        idToPos[idx] = p;\r
\r
        // 아래로 갱신 (sink)\r
        int c = spos << 1; // 왼쪽 자식부터 검사\r
        for(; c <= sz && d[c |= (c < sz && d[c] >= d[c|1])] < val; c <<= 1) {\r
            d[c>>1] = d[c];\r
            idToPos[id[c>>1]] = idToPos[id[c]];\r
            posToID[c>>1] = posToID[c];\r
        }\r
        d[c>>1] = val;\r
        posToID[c>>1] = idx;\r
        idToPos[idx] = c>>1;\r
    }\r
};\r

`})}),`
`,r(n.h2,{id:"구현속도-중심의-heap",children:"구현속도 중심의 Heap"}),`
`,d(n.p,{children:["위에서는 성능 최적화를 생각하며 구현한 ",r(n.code,{children:"Heap"}),"을 보았다면, 좀 더 코드 직관적인 ",r(n.code,{children:"Heap"}),"의 구현은 아래와 같다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`#define parent(id) ((id) >> 1)\r
#define left(id) ((id) << 1)\r
#define right(id) (((id) << 1) | 1)\r
struct Heap {\r
    int d[SZ + 1];\r
    int sz;\r
    void init() { sz = 0; }\r
    void swap(int aIdx, int bIdx) {\r
        d[aIdx] ^= d[bIdx] ^= d[aIdx] ^= d[bIdx];\r
    }\r
    void swim(int idx) {\r
        int pidx = parent(idx);\r
        if (pidx <= 0) return;\r
        if (d[idx] >= d[pidx]) return;\r
        swap(idx, pidx);\r
        swim(pidx);\r
    }\r
    void sink(int idx) {\r
        int cidx = left(idx);\r
        if (cidx > sz) return;\r
        if ((cidx|1) <= sz && d[cidx] > d[cidx|1]) cidx |= 1;\r
        if (d[idx] <= d[cidx]) return;\r
        swap(idx, cidx);\r
        sink(cidx);\r
    }\r
    void push(int v) {\r
        d[++sz] = v;\r
        swim(sz - 1);\r
    }\r
    int pop() {\r
        int r = d[1];\r
        d[1] = d[sz--];\r
        sink(1);\r
        return r;\r
    }\r
};
`})}),`
`,d(n.p,{children:[r(n.code,{children:"swim"}),"은 위쪽으로 올라가는 모습이고, ",r(n.code,{children:"sink"}),"는 가라앉는 모습에서 이름이 붙었다. 다만 재귀로 구현했기 때문에 ",r(n.code,{children:"O2"}),"와 같은 컴파일 옵션이 붙지 않는다면 일반 루프로 구현한 것보다 확실히 느리다."]}),`
`,r(a,{}),`
`,r(l,{})]})}function h(i={}){const{wrapper:n}=Object.assign({},c(),i.components);return n?r(n,Object.assign({},i,{children:r(e,i)})):e(i)}const x=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=p;o.main=x;export{o as default};
