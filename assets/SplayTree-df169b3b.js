import{p as r}from"./SplayTree_-d08f2ec8.js";import{u as i,j as n,a,F as m}from"./ssg-client-72750d52.js";import{C as c}from"./Comment-cc565e03.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-4e125d42.js";import"./katex.min-4ed993c7.js";function s(l){const e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},i(),l.components);return a(m,{children:[n(h,{}),`
`,n(e.h2,{id:"splay-tree",children:"Splay Tree"}),`
`,a(e.p,{children:["Splay 연산은 해당되는 ",n(e.code,{children:"Node"}),"를 루트로 올리는 연산이다. 이를 수행하기 위해 ",n(e.code,{children:"Rotaate"})," 함수를 만드는데, 이 함수는 해당 노드를 부모로 올리는 역할이다."]}),`
`,a(e.p,{children:[n(e.code,{children:"Node"}),"는 이 연산을 위해 부모의 pointer도 가지고 있어야한다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`struct Node {
    int key;
    Node* l;
    Node* r;
    Node* p;

    void rotate() {
        Node* p = p;
        Node* a = l;
        Node* b = r;
    }

    void printInorder() {
        if (l) l->printInorder();
        printf("%d ", key);
        if (r) r->printInorder();
    }
};
Node* newNode(int key) {
    Node* ret = new Node();
    ret->key = key;
    ret->l = ret->r = ret->p = 0;
    return ret;
}

struct SplayTree {
    Node* root;
    Node util;
    BST() {
        root = 0;
    }
    void insert(int key) {

    }
    bool find(int key) {

    }
    void splay() {

    }
    void print() {
        if(root) root->printInorder();
        printf("\\n");
    }
};

`})}),`
`,n(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Insert: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["Erase: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["Find: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["K-th: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,n(c,{})]})}function o(l={}){const{wrapper:e}=Object.assign({},i(),l.components);return e?n(e,Object.assign({},l,{children:n(s,l)})):s(l)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=r;t.main=d;export{t as default};
