import{p as t}from"./BinarySearchTree_-28e7d74b.js";import{u as s,j as n,a,F as m}from"./ssg-client-e807bd8e.js";import{C as c}from"./Comment-490465a7.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-9464fefa.js";import"./katex.min-4ed993c7.js";function i(l){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},s(),l.components);return a(m,{children:[n(h,{}),`
`,n(e.h2,{id:"binary-search-tree",children:"Binary Search Tree"}),`
`,n(e.p,{children:"Worst 때문에 쓸 일 없겠지만 basic 중의 basic."}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`struct Node {
    int key;
    Node* l;
    Node* r;
};

Node* newNode(int key) {
    Node* ret = new Node();
    ret->key = key;
    ret->l = ret->r = 0;
    return ret;
}

struct BST {
    Node* root;
    void insert(int key) {
        if (root == 0) {
            root = v;
            return;
        }
        Node* p = root;
        Node* myNode = newNode(key);
        while(true) {
            if (p->key == key) return; // duplicate
            else if (p->key > key) {
                if (p->l) {
                    p->l = myNode;
                    return;
                }
                p = p->l;
            } else {
                if (p->r) {
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
    void erase(int key) {
        Node* p = find(key);
        if (p == 0) return; // no exist
        if (p->l == 0 && p->r == 0) { // leaf
            delete p;
        } else if (p->l && p->r) {

        } else if (p->l) {
            
        } else if (p->r) {

        }
    }
} bst;

`})}),`
`,n(e.h2,{id:"time-complexity-with-random-key",children:"Time Complexity (with Random Key)"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Insert: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["Erase: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["Find: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,n(c,{})]})}function o(l={}){const{wrapper:e}=Object.assign({},s(),l.components);return e?n(e,Object.assign({},l,{children:n(i,l)})):i(l)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=t;r.main=d;export{r as default};
