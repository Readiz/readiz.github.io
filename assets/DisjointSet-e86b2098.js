import{p as m}from"./DisjointSet_-c518e3d2.js";import{u as s,j as e,a,F as r}from"./ssg-client-878c1a33.js";import{C as c}from"./Comment-69e488e6.js";import{T as h}from"./TagList-1ce45758.js";import{H as o}from"./Header-f888c9ef.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function t(i){const n=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",mn:"mn",annotation:"annotation"},s(),i.components);return a(r,{children:[e(o,{}),`
`,a(n.p,{children:[e(n.code,{children:"MST"}),"의 크루스칼과 같은 알고리즘에서 유용하게 쓰이는 ",e(n.code,{children:"Disjoint Set"}),"에 대한 간단한 정리"]}),`
`,e(n.h2,{id:"implementation-overview",children:"Implementation Overview"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct DisjointSet {
    int parent[SIZE];
    int rank[SIZE];
    void init() {
        for(int i = 0; i < SIZE; ++i) {
            parent[i] = i;
            rank[i] = 0;
        }
    }
    int getRoot(int v) {
        if (v == parent[v]) return v;
        return parent[v] = getRoot(parent[v]);
    }
    void merge(int a, int b) {
        int a = getRoot(a);
        int b = getRoot(b);
        if (a == b) return; // already merged
        parent[b] = a;
    }
};
`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(n.p,{children:["블로그나 책 찾아보면 ",e(n.code,{children:"Rank"}),"와 ",e(n.code,{children:"Path Compression"}),"을 둘 다 사용하면 애커만 함수라고 불리는 거의 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mn,{children:"1"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord",children:"1"}),e(n.span,{className:"mclose",children:")"})]})})]})}),"과 유사한 시간복잡도가 나온다고 하지만, 위 코드처럼 ",e(n.code,{children:"Path Compression"}),"만 구현하는 것도 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),a(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})}),"이 보장되기 때문에 이 정도만 해둬도 된다고 생각한다. 어차피 다른 알고리즘과 합쳐서 쓸 것인데(",e(n.code,{children:"Union Find"})," 만으로 된 문제는 잘 없으므로..), 이 경우에 ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),a(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})}),"은 어차피 base에 가까운 시간복잡도이기 때문에 이것까지 줄일 필요는 없다고 본다."]}),`
`,e(h,{}),`
`,e(c,{})]})}function d(i={}){const{wrapper:n}=Object.assign({},s(),i.components);return n?e(n,Object.assign({},i,{children:e(t,i)})):t(i)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=m;l.main=p;export{l as default};
