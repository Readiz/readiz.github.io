import{p as t}from"./Hash_-36089e8c.js";import{u as c,j as e,a as d,F as h}from"./ssg-client-32a5b6e3.js";import{C as l}from"./Comment-5f96fa38.js";import{T as a}from"./TagList-7559f4df.js";import{H as s}from"./Header-9da9eb48.js";import"./index.module-caf545e8.js";function r(i){const n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre"},c(),i.components);return d(h,{children:[e(s,{}),`
`,e(n.p,{children:"해시 관련 정리"}),`
`,e(n.h2,{id:"collision-control",children:"Collision control"}),`
`,d(n.p,{children:[e(n.code,{children:"hash"}),"에서 충돌 방지 정책은 중요하다. 가장 간단하게는 이미 사용중인 영역을 만났을 때 주소값을 ",e(n.code,{children:"+1"})," 하는 ",e(n.code,{children:"Open Addressing"}),"의 ",e(n.code,{children:"Linear Probing"})," 방식이 대표적이지만, 여기서는 ",e(n.code,{children:"Chaining"})," 방식의 구현을 알아보겠다. ",e(n.code,{children:"Chaining"})," 방식의 경우 값 삭제도 원할하게 할 수 있어 좀 더 추천된다. (",e(n.code,{children:"Open Addressing"}),"은 삭제가 좀 까다롭다. 그냥 isDeleted 도입하는거 말고는..)"]}),`
`,e(n.h2,{id:"integer-hash-key",children:"Integer Hash Key"}),`
`,d(n.p,{children:["id가 sparse하게 쓰일 때 사용. 본격적인 ",e(n.code,{children:"hash"})," 구현 이전에 한번 구현해보면 좋다. 사실 ",e(n.code,{children:"hash"}),"의 관건은 ",e(n.code,{children:"key"}),"값 생성에 있는데, 이 경우 단순히 ",e(n.code,{children:"val % HMAX"}),"로 ",e(n.code,{children:"key"})," 값을 잡으면 충분하다. 물론 악의적으로 value를 생성할 수도 있긴 하다. 이를 막기 위해서는 ",e(n.code,{children:"bucket"}),"을 활용해야 할 것이다. ",e(n.code,{children:"bucket"}),"을 활용한 일반적인 구현은 아래처럼 된다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#define HMAX 10007 // 소수가 좋다.
struct Node {
    int idx;
    T val;
    Node* next;
};
Node npool[1'000'000];
int nidx;
Node* newNode() {
    npool[nidx].next = nullptr;
    return &npool[nidx++];
}
struct Hash {
    Node* head[HMAX];
    Hash() {
        for(int i = 0; i < HMAX; ++i) {
            head[i] = newNode();
        }
    }
    int getKey(int idx) {
        return idx % HMAX;
    }
    void set(int idx, T val) {
        Node* p = head[getKey(idx)];
        for(;p->next != 0; p = p->next) {
            if (p->next->idx == idx) {
                p->next->val = val;
                return;
            }
        }
        p->next = newNode();
        p->next->idx = idx;
        p->next->val = val;
    }
    void insert(int idx, T val) {
        // 중복값이 확실히 없음을 알 때
        Node* p = head[getKey(idx)];
        Node* opnext = p->next;
        p->next = newNode();
        p->next->idx = idx;
        p->next->val = val;
        p->next->next = opnext;
    }
    T get(int idx) {
        Node* p = head[getKey(idx)];
        for(;p->next != 0; p = p->next) {
            if (p->next->idx == idx) {
                return p->next->val;
            }
        }
    }
};
`})}),`
`,e(n.h2,{id:"string-hash-key",children:"String Hash Key"}),`
`,d(n.p,{children:["주로 ",e(n.code,{children:"hash"}),"라고 말하면, 보통 ",e(n.code,{children:"string"}),"을 ",e(n.code,{children:"key"}),"로 갖는 ",e(n.code,{children:"hash"}),"를 의미하는 경우가 많다. 이 경우, 사실 ",e(n.code,{children:"key"}),"값을 만드는 로직을 제외하면 로직은 위와 같다. 이런 ",e(n.code,{children:"key"}),"값을 효율적으로, 빠르게 만드는 것이 주요한데, 만약 ",e(n.code,{children:"string"}),"의 최대 길이가 8보다 작다고 하면, 아래 방법도 유효하다. (강력 추천)"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int getKey(char d[]) {
    char buf[8] = {0, };
    for(int i = 0; d[i] != 0 && i < 8; ++i) {
        buf[i] = d[i];
    }
    return ((unsigned long long *) buf) % HMAX;
}
`})}),`
`,d(n.p,{children:["위 방식은 일종의 트릭으로, char 배열을 ull로 속여서 계산한다. 만약 ",e(n.code,{children:"d[]"}),"가 무조건 8자리로만 온다면, 복사 과정 필요없이 바로 사용해도 된다."]}),`
`,d(n.p,{children:["일반적으로 긴 문자열이 ",e(n.code,{children:"key"})," 값에 쓰인다면, 비트연산을 적절히 활용해서 각 자리 마다 ",e(n.code,{children:"*33"})," 정도의 값을 곱해서 더해서 쓰곤 한다. 이 경우 ",e(n.code,{children:"*33"}),"은 ",e(n.code,{children:"(h<<5 + h)"}),"로 치환이 가능하므로, 아래처럼 쓸 수 있다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int getKey(char d[]) {
    int hashKey = 5381;
    for(char* p = d; *p != 0; ++p) {
        hashKey = ((hashKey) << 5) + hashKey + (*p);
        hashKey %= HMAX;
    }
    return hashKey;
}
`})}),`
`,d(n.p,{children:["처음 ",e(n.code,{children:"hashKey"}),"를 초기화 하는 것을 잊지 말자."]}),`
`,e(a,{}),`
`,e(l,{})]})}function p(i={}){const{wrapper:n}=Object.assign({},c(),i.components);return n?e(n,Object.assign({},i,{children:e(r,i)})):r(i)}const x=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=t;o.main=x;export{o as default};
