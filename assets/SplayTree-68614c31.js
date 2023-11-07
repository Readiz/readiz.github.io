import{p as s}from"./SplayTree_-d08f2ec8.js";import{u as i,j as e,a as r,F as c}from"./ssg-client-8c9f48b0.js";import{C as o}from"./Comment-b4f63b2c.js";import"./index.module-caf545e8.js";import{H as m}from"./Header-42b42994.js";import"./katex.min-4ed993c7.js";function t(a){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},i(),a.components);return r(c,{children:[e(m,{}),`
`,e(n.h2,{id:"splay-tree",children:"Splay Tree"}),`
`,r(n.p,{children:["Splay 연산은 해당되는 ",e(n.code,{children:"Node"}),"를 루트로 올리는 연산이다. 이를 수행하기 위해 ",e(n.code,{children:"Rotaate"})," 함수를 만드는데, 이 함수는 해당 노드를 부모로 올리는 역할이다."]}),`
`,r(n.p,{children:[e(n.code,{children:"Node"}),"는 이 연산을 위해 부모의 pointer도 가지고 있어야한다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct Node {
    int key;
    Node* l;
    Node* r;
    Node* p;

    bool isLeft() {
        return (p->l == this);
    }

    void rotate() {
        Node* op = this->p;
        if (isLeft()) {
            // 왼쪽 자식이면
            //     p             x
            //   x   c        a     p
            // a  b               b   c
            Node* b = r;
            op->l = b;
            if (b) b->p = op;
            this->r = op;
        } else {
            // 오른쪽 자식이면
            //     p                 x
            //  a     x           p    c
            //      b   c      a    b
            Node* b = l;
            op->r = b;
            if (b) b->p = op;
            this->l = op;
        }
        this->p = op->p;
        op->p = this;

        // 부모의 부모 처리***
        if (this->p == 0) return;
        if (this->p->l == op)
            this->p->l = this;
        else
            this->p->r = this;
    }

    void splay() {
        while(p) {
            Node* g = p->p;
            if (g == 0) {
                // 조부모가 없으면 rotate 한번하면 root이다.
                rotate();
                break;
            }
            // g->p 방향과 p->x 방향이 같으면 Zig Zig 
            if (p->isLeft() == this->isLeft()) {
                p->rotate();
                rotate();
            } else {
            // 다르면, Zig Zag
                rotate();
                rotate();
            }
        }
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
    SplayTree() {
        root = 0;
    }
    bool insert(int key) {
        auto newOne = newNode(key);
        if (root == 0) {
            root = newOne; // no need to splay
            return true;
        }
        auto cur = root;
        while(true) {
            if (cur->key == key) {
                cur->splay(); // 중복 원소 존재, root로 올려주고 종료
                return false;
            } else if (key < cur->key) {
                if (cur->l == 0) {
                    cur->l = newOne;
                    newOne->p = cur;
                    break;
                }
                cur = cur->l;
            } else {
                if (cur->r == 0) {
                    cur->r = newOne;
                    newOne->p = cur;
                    break;
                }
                cur = cur->r;
            }
        }
        newOne->splay();
        root = newOne;
        return true;
    }
    void find(int key) {
        if (root == 0) return;
        auto cur = root;
        while(true) {
            if (cur->key == key) {
                // 중복 원소 존재!
                break;
            } else if (key < cur->key) {
                if (cur->l == 0) {
                    break;
                }
                cur = cur->l;
            } else {
                if (cur->r == 0) {
                    break;
                }
                cur = cur->r;
            }
        }
        cur->splay();
        root = cur;
    }
    bool erase(int key) {
        find(key);
        if (root == 0) return false;
        if (root->key != key) return false;

        // root에 key가 있다
        Node* l = root->l;
        Node* r = root->r;
        delete root;
        
        if (l != 0 && r != 0) {
            if (l->r) {
                auto cur = r;
                while(cur->l) cur = cur->l;
                cur->l = l->r;
                l->r->p = cur;
            }

            root = l;
            root->r = r;
            r->p = root;
            root->p = 0;
        } else if (l != 0) {
            root = l;
            root->p = 0;
        } else if (r != 0) {
            root = r;
            root->p = 0;
        } else {
            root = 0;
        }
        return true;
    }
    void print() {
        if(root) root->printInorder();
        printf("\\n");
    }
    void printLevel() {
        if (root == 0) return;
        queue<pair<Node*, int>> q;
        q.push({root, 0});
        while(q.size()) {
            auto cur = q.front(); q.pop();
            printf("%d(%d) ", cur.first->key, cur.second);
            if(cur.first->l) q.push({cur.first->l, cur.second + 1});
            if(cur.first->r) q.push({cur.first->r, cur.second + 1});
        }
        printf("\\n");
    }
} splay;

`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["Insert: ",e(n.span,{className:"math math-inline",children:r(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:r(n.semantics,{children:[r(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:r(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),r(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,r(n.li,{children:["Erase: ",e(n.span,{className:"math math-inline",children:r(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:r(n.semantics,{children:[r(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:r(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),r(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,r(n.li,{children:["Find: ",e(n.span,{className:"math math-inline",children:r(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:r(n.semantics,{children:[r(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:r(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),r(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,r(n.li,{children:["K-th: ",e(n.span,{className:"math math-inline",children:r(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:r(n.semantics,{children:[r(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:r(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),r(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,e(o,{})]})}function h(a={}){const{wrapper:n}=Object.assign({},i(),a.components);return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=s;l.main=d;export{l as default};
