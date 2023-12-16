import{p as s}from"./BinarySearchTree_-28e7d74b.js";import{u as i,j as e,a as r,F as m}from"./ssg-client-9b0ce5e8.js";import{C as o}from"./Comment-f518aff4.js";import"./index.module-caf545e8.js";import{H as c}from"./Header-f79b744c.js";import"./katex.min-4ed993c7.js";function t(a){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},i(),a.components);return r(m,{children:[e(c,{}),`
`,e(n.h2,{id:"binary-search-tree",children:"Binary Search Tree"}),`
`,e(n.p,{children:"Worst 때문에 쓸 일 없겠지만 basic 중의 basic."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct Node {
    int key;
    Node* l;
    Node* r;

    void printInorder() {
        if (l) l->printInorder();
        printf("%d ", key);
        if (r) r->printInorder();
    }
};

Node* newNode(int key) {
    Node* ret = new Node();
    ret->key = key;
    ret->l = ret->r = 0;
    return ret;
}

struct BST {
    Node* root;
    BST() {
        root = 0;
    }
    void insert(int key) {
        if (root == 0) {
            root = newNode(key);
            return;
        }
        Node* p = root;
        Node* myNode = newNode(key);
        while(true) {
            if (p->key == key) return; // duplicate
            else if (p->key > key) {
                if (p->l == 0) {
                    p->l = myNode;
                    return;
                }
                p = p->l;
            } else {
                if (p->r == 0) {
                    p->r = myNode;
                    return;
                }
                p = p->r;
            }
        }
    }
    Node* find(int key) {
        if (root == 0) return 0;
        Node* p = root;
        while(true) {
            if (p->key == key) return p;
            else if (p->key > key) {
                if (p->l == 0) {
                    return 0;
                }
                p = p->l;
            } else {
                if (p->r == 0) {
                    return 0;
                }
                p = p->r;
            }
        }
    }
    void print() {
        if(root) root->printInorder();
        printf("\\n");
    }
} bst;

`})}),`
`,e(n.h2,{id:"time-complexity-with-random-key",children:"Time Complexity (with Random Key)"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["Insert: ",e(n.span,{className:"math math-inline",children:r(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:r(n.semantics,{children:[r(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:r(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),r(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,r(n.li,{children:["Find: ",e(n.span,{className:"math math-inline",children:r(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:r(n.semantics,{children:[r(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:r(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),r(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,e(o,{})]})}function d(a={}){const{wrapper:n}=Object.assign({},i(),a.components);return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=s;l.main=h;export{l as default};
