import{p as s}from"./SegmentTree_-895029b8.js";import{u as r,j as e,a,F as m}from"./ssg-client-ceb1f6d5.js";import{C as c}from"./Comment-e08fa216.js";import"./index.module-caf545e8.js";import{H as d}from"./Header-e254a77b.js";import"./katex.min-4ed993c7.js";function i(t){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},r(),t.components);return a(m,{children:[e(d,{}),`
`,e(n.h2,{id:"bottom-up-segtree",children:"Bottom-Up SegTree"}),`
`,e(n.p,{children:"Point Update와 Range Query를 지원하는 가장 기본적인 SegTree이다. 메모리는 2*N 만큼 선언하면 된다."}),`
`,e(n.p,{children:"수열의 Index는 0부터, 전체 Tree의 Index는 1부터 사용되는 샘플 코드이다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int N;
struct SegTree {
    int d[2'000'010];
    void build() {
        for(int i = N - 1; i >= 1; --i) d[i] = d[i<<1] ^ d[i<<1|1];
    }
    void updatePoint(int p, int v) {
        p += N;
        d[p] = v;
        for(p>>=1; p > 0; p>>=1) {
            d[p] = d[p<<1] ^ d[p<<1|1];
        }
    }
    int getRange(int l, int r) {
        int ret = 0;
        l += N, r += N;
        for(;l<=r; l>>=1, r>>=1) {
            if (l&1) ret ^= d[l++];
            if (~r&1) ret ^= d[r--];
        }
        return ret;
    }
} seg;
`})}),`
`,e(n.h2,{id:"top-down-segtree",children:"Top-Down SegTree"}),`
`,e(n.p,{children:"이 경우는 가급적 다른 자료구조를 사용하자. 재귀호출 속도 및 메모리에서 손해를 본다."}),`
`,e(n.h2,{id:"top-down-segtree-with-lazy",children:"Top-Down SegTree with Lazy"}),`
`,a(n.p,{children:["Lazy 연산은 Range Update 때문에 발생한다. 덧셈의 Range Update는 가급적 ",e(n.code,{children:"Fenwick"}),"으로 처리하자. (Range Update를 구간 끝점 2개의 Point Update로 대체한 후 적분 개념 활용하면 된다)"]}),`
`,a(n.p,{children:["덧셈을 제외한 경우에는 SegTree 사용이 강제되는데, Top-Down이 Lazy 처리에 압도적으로 편리하다. 아래 예제는 Lazy ",e(n.code,{children:"XOR"})," 연산을 처리한다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int N;
struct SegNode {
    int val;
    int lazy;
};

struct LazySeg {
    SegNode tree[2'000'010];
    int arr[500'010];
    
    int init(int x, int s, int e) {
        if (s == e) return tree[x].val = arr[s];
        int m = (s+e)>>1;
        return tree[x].val = init(x<<1,s,m) ^ init(x<<1|1,m+1,e);
    }
    void init() {
        init(1, 1, N);
    }

    void push(int x, int s, int e) {
        if (tree[x].lazy == 0) return;
        if ((e-s+1) % 2 != 0) tree[x].val ^= tree[x].lazy;
        if (s != e) {
            tree[x<<1].lazy ^= tree[x].lazy;
            tree[x<<1|1].lazy ^= tree[x].lazy;
        }
        tree[x].lazy = 0;
    }

    void updateRange(int x, int s, int e, int l, int r, int v) {
        push(x, s, e);
        if (r < s || e < l) return;
        if (l <= s && e <= r) {
            tree[x].lazy ^= v;
            push(x, s, e);
            return;
        }
        int m = (s+e)>>1;
        updateRange(x<<1,s,m,l,r,v);
        updateRange(x<<1|1,m+1,e,l,r,v);
        tree[x].val = tree[x<<1].val ^ tree[x<<1|1].val;
    }
    void updateRange(int l, int r, int v) {
        updateRange(1, 1, N, l, r, v);
    }
    
    int getRange(int x, int s, int e, int l, int r) {
        push(x, s, e);
        if (r < s || e < l) return 0;
        if (l <= s && e <= r) return tree[x].val;
        int m = (s+e)>>1;
        return getRange(x<<1,s,m,l,r) ^ getRange(x<<1|1,m+1,e,l,r);
    }
    int getRange(int l, int r) {
        return getRange(1, 1, N, l, r);
    }
} lazySeg;
`})}),`
`,e(n.h2,{id:"dynamic-top-down-segtree-with-lazy",children:"Dynamic Top-Down SegTree with Lazy"}),`
`,a(n.p,{children:["초기값이 주어지지 않고 쿼리로만 업데이트가 되는 경우에는 Dynamic하게 필요한 구간만 SegTree를 생성하는 방법도 있다. 기존 ",e(n.code,{children:"x<<1"}),", ",e(n.code,{children:"x<<1|1"})," 이 좌우 자식으로 내려가는 구조를 나타낸 것인데, 이를 진짜 tree 구조로 바꾼 것."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int N;
struct SegNode {
    int val;
    int lazy;
    SegNode* l;
    SegNode* r;
} sn[4'000'000];
int sidx = 0;

SegNode* newNode() {
    return &sn[sidx++];
}

struct LazySeg {
    SegNode* root;

    void init() {
        root = newNode();
    }

    void push(SegNode* x, int s, int e) {
        if (x == 0 || x->lazy == 0) return;
        if ((e-s+1) % 2 != 0) x->val ^= x->lazy; // 구간 홀수일 때만 xor 의미가 있다.
        if (s != e) {
            if (x->l == 0) x->l = newNode();
            if (x->r == 0) x->r = newNode();
            x->l->lazy ^= x->lazy;
            x->r->lazy ^= x->lazy;
        }
        x->lazy = 0;
    }

    void updateRange(SegNode* x, int s, int e, int l, int r, int v) {
        push(x, s, e);
        if (x == 0) return;
        if (r < s || e < l) return;
        if (l <= s && e <= r) {
            x->lazy ^= v;
            push(x, s, e);
            return;
        }
        int m = (s+e)>>1;
        if (x->l == 0) x->l = newNode();
        if (x->r == 0) x->r = newNode();
        updateRange(x->l,s,m,l,r,v);
        updateRange(x->r,m+1,e,l,r,v);
        x->val = x->l->val ^ x->r->val;
    }
    void updateRange(int l, int r, int v) {
        updateRange(root, 1, N, l, r, v);
    }
    
    int getRange(SegNode* x, int s, int e, int l, int r) {
        push(x, s, e);
        if (x == 0) return 0;
        if (r < s || e < l) return 0;
        if (l <= s && e <= r) return x->val;
        int m = (s+e)>>1;
        return getRange(x->l,s,m,l,r) ^ getRange(x->r,m+1,e,l,r);
    }
    int getRange(int l, int r) {
        return getRange(root, 1, N, l, r);
    }
} lazySeg;
`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["Point Update: ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),a(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(n.li,{children:["Range Update: ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),a(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(n.li,{children:["Range Query: ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),a(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,e(c,{})]})}function o(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e(n,Object.assign({},t,{children:e(i,t)})):i(t)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=s;l.main=h;export{l as default};
