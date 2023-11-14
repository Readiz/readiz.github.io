import{p as l}from"./Heap_-345391ef.js";import{u as a,j as e,a as i,F as r}from"./ssg-client-cec06188.js";import{C as o}from"./Comment-43e6e80d.js";import{T as t}from"./TagList-21734a25.js";import{H as h}from"./Header-ac35d85b.js";import"./index.module-caf545e8.js";function c(d){const n=Object.assign({p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",mn:"mn"},a(),d.components);return i(r,{children:[e(h,{}),`
`,i(n.p,{children:[e(n.code,{children:"Heap"})," 관련 정리. ",e(n.code,{children:"Heap"}),"은 주로 Array로 구현하며, 가장 큰 아이템이나 가장 작은 아이템을 ",e(n.code,{children:"O(1)"}),"의 시간복잡도로 구할 수 있으며, 이를 업데이트 하는데에 ",e(n.code,{children:"O(log n)"}),"의 시간이 걸리는 자료구조이다. ",e(n.code,{children:"set"})," 처럼 ",e(n.code,{children:"k"})," 값을 가지는 아이템을 찾거나 할 수는 없지만, 구조가 비교적 간단하니 익혀두면 좋다. 그리고, 최적화가 매우 가능한 녀석이다. 아래 코드가 나름의 비트연산을 사용한 최적이니 꼭 익혀두도록 하자."]}),`
`,e(n.h2,{id:"부모-자식간의-관계-정의",children:"부모, 자식간의 관계 정의"}),`
`,i(n.p,{children:["만약 ",e(n.code,{children:"1-indexed"})," ",e(n.code,{children:"Heap"}),"을 구현한다고 하면, 아래처럼 부모, 자식간의 관계를 정의할 수 있다. (메모리는 1만큼 낭비되지만, Index 계산에서 많이 편리하다)"]}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["부모 Index: ",e(n.code,{children:"idx >> 1"})]}),`
`,i(n.li,{children:["자식 Index",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["왼쪽: ",e(n.code,{children:"idx << 1"})]}),`
`,i(n.li,{children:["오른쪽: ",e(n.code,{children:"(idx << 1) | 1"})]}),`
`]}),`
`]}),`
`]}),`
`,e(n.p,{children:"위 방식으로 간단하게 Array를 Tree로 사용할 수 있다."}),`
`,e(n.h2,{id:"heap에서의-push",children:"Heap에서의 Push"}),`
`,i(n.p,{children:["만약 현재의 ",e(n.code,{children:"Heap"}),"의 크기가 ",e(n.code,{children:"sz"}),"라고 하자. 그렇다면, 다음에 들어갈 원소의 위치는 ",e(n.code,{children:"sz + 1"})," 이다. (초기 조건을 생각하자)"]}),`
`,i(n.p,{children:["이렇게 원소를 대충 삽입한 이후에, 이를 계속 상위 level의 아이템과 비교하여, swap하면 된다. 아래는 ",e(n.code,{children:"MinHeap"}),"에서의 예시이다."]}),`
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
`,i(n.p,{children:["대충 ",e(n.code,{children:"Insertion Sort"})," 와 모습이 비슷하니, 잘 안되면 정렬 연습을 다시 하고 오자."]}),`
`,e(n.h2,{id:"heap에서의-pop",children:"Heap에서의 Pop"}),`
`,i(n.p,{children:["이게 좀 어렵다. 우선, 1번 ",e(n.code,{children:"index"}),"의 데이터가 빠져나간다. 그리고 나서 swap이 시작될 텐데, 최종적으로 삽입할 녀석은 ",e(n.code,{children:"sz"})," 위치에 있는 아이템이 될 것이다. 이것은 캐시해서 가지고 있는다. 그리고, 잠재적으로 삽입될 위치를 찾아간다. 맨 처음에는 ",e(n.code,{children:"c = 2"}),"에서 시작할 것이다. 좌측 자식으로 swap 한다고 생각한 이후, 우측 자식의 조건이 더 좋으면 우측 자식하고 swap 한다. 이것을 반복하고, 적절한 삽입 위치가 찾아졌으면, 넣고 끝낸다."]}),`
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
`,i(n.p,{children:[e(n.code,{children:"heap"}),"에 삽입된 시점의 ",e(n.code,{children:"Index"}),"를 저장해주면, 특정 원소의 값을 찾을 수 있고, 그 ",e(n.code,{children:"Index"}),"의 값을 변경할 수 있다. 변경 후에는 ",e(n.code,{children:"swim"}),"과 ",e(n.code,{children:"sink"}),"를 순서 관계없이 1번씩 해주면 다시 ",e(n.code,{children:"heap"}),"의 구조가 유지된다. 이를 활용한 전체 ",e(n.code,{children:"heap"})," 코드의 샘플은 아래와 같다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct Heap {
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

        // 위로 갱신 (swim)
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

        // 아래로 갱신 (sink)
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
`,e(n.h2,{id:"구현속도-중심의-heap",children:"구현속도 중심의 Heap"}),`
`,i(n.p,{children:["위에서는 성능 최적화를 생각하며 구현한 ",e(n.code,{children:"heap"}),"을 보았다면, 좀 더 코드 직관적인 ",e(n.code,{children:"heap"}),"의 구현은 아래와 같다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#define parent(id) ((id) >> 1)
#define left(id) ((id) << 1)
#define right(id) (((id) << 1) | 1)
struct Heap {
    int d[SZ + 1];
    int sz;
    void init() { sz = 0; }
    void swap(int aIdx, int bIdx) {
        d[aIdx] ^= d[bIdx] ^= d[aIdx] ^= d[bIdx];
    }
    void swim(int idx) {
        int pidx = parent(idx);
        if (pidx <= 0) return;
        if (d[idx] >= d[pidx]) return;
        swap(idx, pidx);
        swim(pidx);
    }
    void sink(int idx) {
        int cidx = left(idx);
        if (cidx > sz) return;
        if ((cidx|1) <= sz && d[cidx] > d[cidx|1]) cidx |= 1;
        if (d[idx] <= d[cidx]) return;
        swap(idx, cidx);
        sink(cidx);
    }
    void push(int v) {
        d[++sz] = v;
        swim(sz - 1);
    }
    int pop() {
        int r = d[1];
        d[1] = d[sz--];
        sink(1);
        return r;
    }
};
`})}),`
`,i(n.p,{children:[e(n.code,{children:"swim"}),"은 위쪽으로 올라가는 모습이고, ",e(n.code,{children:"sink"}),"는 가라앉는 모습에서 이름이 붙었다. 다만 재귀로 구현했기 때문에 ",e(n.code,{children:"O2"}),"와 같은 컴파일 옵션이 붙지 않는다면 일반 루프로 구현한 것보다 확실히 느리다."]}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["Push: ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),i(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,i(n.li,{children:["Pop: ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),i(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,i(n.li,{children:["Top: ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mn,{children:"1"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord",children:"1"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,e(t,{}),`
`,e(o,{})]})}function p(d={}){const{wrapper:n}=Object.assign({},a(),d.components);return n?e(n,Object.assign({},d,{children:e(c,d)})):c(d)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=l;s.main=m;export{s as default};
