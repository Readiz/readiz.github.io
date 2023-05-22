import{p as r}from"./Heap_-416b9bce.js";import{u as c,j as d,a as e,F as s}from"./ssg-client-1f244c24.js";import{C as l}from"./Comment-310871f5.js";import{T as a}from"./TagList-f6fb27b8.js";import{H as t}from"./Header-2f162f7c.js";import"./index.module-caf545e8.js";function o(i){const n=Object.assign({p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre"},c(),i.components);return e(s,{children:[d(t,{}),`
`,e(n.p,{children:[d(n.code,{children:"Heap"})," 관련 정리. ",d(n.code,{children:"Heap"}),"은 주로 Array로 구현하며, 가장 큰 아이템이나 가장 작은 아이템을 ",d(n.code,{children:"O(1)"}),"의 시간복잡도로 구할 수 있으며, 이를 업데이트 하는데에 ",d(n.code,{children:"O(log n)"}),"의 시간이 걸리는 자료구조이다. ",d(n.code,{children:"set"})," 처럼 ",d(n.code,{children:"k"})," 값을 가지는 아이템을 찾거나 할 수는 없지만, 구조가 비교적 간단하니 익혀두면 좋다. 그리고, 최적화가 매우 가능한 녀석이다. 아래 코드가 나름의 비트연산을 사용한 최적이니 꼭 익혀두도록 하자."]}),`
`,d(n.h2,{id:"부모-자식간의-관계-정의",children:"부모, 자식간의 관계 정의"}),`
`,e(n.p,{children:["만약 ",d(n.code,{children:"1-indexed"})," ",d(n.code,{children:"Heap"}),"을 구현한다고 하면, 아래처럼 부모, 자식간의 관계를 정의할 수 있다. (메모리는 1만큼 낭비되지만, Index 계산에서 많이 편리하다)"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["부모 Index: ",d(n.code,{children:"idx >> 1"})]}),`
`,e(n.li,{children:["자식 Index",`
`,e(n.ul,{children:[`
`,e(n.li,{children:["왼쪽: ",d(n.code,{children:"idx << 1"})]}),`
`,e(n.li,{children:["오른쪽: ",d(n.code,{children:"(idx << 1) | 1"})]}),`
`]}),`
`]}),`
`]}),`
`,d(n.p,{children:"위 방식으로 간단하게 Array를 Tree로 사용할 수 있다."}),`
`,d(n.h2,{id:"heap에서의-push",children:"Heap에서의 Push"}),`
`,e(n.p,{children:["만약 현재의 ",d(n.code,{children:"Heap"}),"의 크기가 ",d(n.code,{children:"sz"}),"라고 하자. 그렇다면, 다음에 들어갈 원소의 위치는 ",d(n.code,{children:"sz + 1"})," 이다. (초기 조건을 생각하자)"]}),`
`,e(n.p,{children:["이렇게 원소를 대충 삽입한 이후에, 이를 계속 상위 level의 아이템과 비교하여, swap하면 된다. 아래는 ",d(n.code,{children:"MinHeap"}),"에서의 예시이다."]}),`
`,d(n.pre,{children:d(n.code,{className:"language-cpp",children:`T d[SZ + 1];
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
`,e(n.p,{children:["대충 ",d(n.code,{children:"Insertion Sort"})," 와 모습이 비슷하니, 잘 안되면 정렬 연습을 다시 하고 오자."]}),`
`,d(n.h2,{id:"heap에서의-pop",children:"Heap에서의 Pop"}),`
`,e(n.p,{children:["이게 좀 어렵다. 우선, 1번 ",d(n.code,{children:"index"}),"의 데이터가 빠져나간다. 그리고 나서 swap이 시작될 텐데, 일단 이 떄의 target은 ",d(n.code,{children:"sz - 1"})," 위체이 있는 아이템이 될 것이다. 먼저 좌측 자식으로 swap 한다고 생각한 이후, 우측 자식의 조건이 더 좋으면 우측 자식하고 swap 한다."]}),`
`,d(n.pre,{children:d(n.code,{className:"language-cpp",children:`T d[SZ + 1];
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
`,d(n.h2,{id:"index를-관리하는-heap",children:"Index를 관리하는 Heap"}),`
`,e(n.p,{children:["Heap에 삽입된 시점의 ",d(n.code,{children:"Index"}),"를 저장해주면, 특정 원소의 값을 찾을 수 있고, 그 ",d(n.code,{children:"Index"}),"의 값을 변경할 수 있다. 변경 후에는 ",d(n.code,{children:"update"}),"와 ",d(n.code,{children:"downdate"}),"를 순서 관계없이 1번씩 해주면 다시 heap의 구조가 유지된다. 이를 활용한 전체 heap 코드의 샘플은 아래와 같다."]}),`
`,d(n.pre,{children:d(n.code,{className:"language-cpp",children:`struct Heap {
    T data[SZ + 1];
    int posToID[SZ + 1]; // 위치 p에 있는 녀석의 id
    int idToPos[ID_MAX]; // id가 어느 위치 p에 있는지
    int sz;

    void init() { sz = 0; }
    void push(int idx, T v) {
        int p = ++sz;
        for(; p > 1; p >>= 1) {
            if (d[p>>1] <= v) break; // 이미 조건을 만족하고 있으면 break
            d[p] = d[p>>1];
            idToPos[id[p]] = idToPos[id[p>>1]];
            posToID[p] = posToID[p>>1];
        }
        d[p] = v;
        posToID[p] = idx;
        idToPos[idx] = p;
    }
    T pop() {
        T r = d[1];
        int idx = posToID[sz];
        T val = d[sz--];
        int c = 2; // 왼쪽 자식부터 검사

        for(; c <= sz && d[c |= (c < sz && d[c] >= d[c|1])] < val; c <<= 1) {
            d[c>>1] = d[c];
            idToPos[id[c>>1]] = idToPos[id[c]];
            posToID[c>>1] = posToID[c];
        }
        d[c>>1] = val;
        posToID[c>>1] = idx;
        idToPos[idx] = c>>1;
        return r;
    }
    T getData(int idx) {
        return d[idToPos[idx]];
    }
    void updateData(int idx, T v) {
        int spos = idToPos[idx];
        d[spos] = v;

        // 위로 갱신
        int p = spos;
        for(; p > 1; p >>= 1) {
            if (d[p>>1] <= v) break; // 이미 조건을 만족하고 있으면 break
            d[p] = d[p>>1];
            idToPos[id[p]] = idToPos[id[p>>1]];
            posToID[p] = posToID[p>>1];
        }
        d[p] = v;
        posToID[p] = idx;
        idToPos[idx] = p;

        // 아래로 갱신
        int c = spos << 1; // 왼쪽 자식부터 검사
        for(; c <= sz && d[c |= (c < sz && d[c] >= d[c|1])] < val; c <<= 1) {
            d[c>>1] = d[c];
            idToPos[id[c>>1]] = idToPos[id[c]];
            posToID[c>>1] = posToID[c];
        }
        d[c>>1] = val;
        posToID[c>>1] = idx;
        idToPos[idx] = c>>1;
    }
};

`})}),`
`,d(a,{}),`
`,d(l,{})]})}function h(i={}){const{wrapper:n}=Object.assign({},c(),i.components);return n?d(n,Object.assign({},i,{children:d(o,i)})):o(i)}const T=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),p={};p.outlineInfo=r;p.main=T;export{p as default};
