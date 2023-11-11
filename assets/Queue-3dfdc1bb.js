import{p as l}from"./Queue_-84ededdb.js";import{u as r,j as e,a,F as m}from"./ssg-client-b80d0240.js";import{C as c}from"./Comment-079e2218.js";import"./index.module-caf545e8.js";import{H as o}from"./Header-afd01444.js";import"./katex.min-4ed993c7.js";function s(t){const n=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",mn:"mn",annotation:"annotation"},r(),t.components);return a(m,{children:[e(o,{}),`
`,e(n.h2,{id:"circular-queue",children:"Circular Queue"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`constexpr int MAX_QUEUE = 1'000'000;
template<typename T>
struct Queue {
    T q[MAX_QUEUE];
    int qf, qr; // queue front, rear
    void init() {
        qf = qr = 0;
    }
    bool isEmpty() {
        return qf == qr;
    }
    void insert(T v) {
        q[qr++] = v;
        qr %= MAX_QUEUE;
    }
    T pop() {
        T res = q[qf++];
        qf %= MAX_QUEUE;
        return res;
    }
};
`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["Insert: ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mn,{children:"1"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord",children:"1"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(n.li,{children:["Pop: ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mn,{children:"1"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord",children:"1"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,e(c,{})]})}function h(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e(n,Object.assign({},t,{children:e(s,t)})):s(t)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=l;i.main=d;export{i as default};
