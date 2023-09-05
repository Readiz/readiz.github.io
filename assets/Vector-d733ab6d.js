import{p as c}from"./Vector_-5021b096.js";import{u as s,j as n,a,F as m}from"./ssg-client-242f9ef4.js";import{C as r}from"./Comment-1866f148.js";import"./index.module-caf545e8.js";import{H as o}from"./Header-826829a0.js";import"./katex.min-4ed993c7.js";function i(t){const e=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",mn:"mn",annotation:"annotation"},s(),t.components);return a(m,{children:[n(o,{}),`
`,n(e.h2,{id:"simple-vector",children:"Simple Vector"}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`template<typename T>
struct Vector {
    T *data;
    int capa, size;
    Vector() {
        capa = 10;
        size = 0;
        data = new T[capa];
    }
    void insert(T v) {
        if (capa == size) {
            auto old = data;
            data = new T[capa * 2];
            for(int i = 0; i < capa; ++i) data[i] = old[i];
            capa *= 2;
            delete[] old;
        }
        data[size++] = v;
    }
    bool erase(T v) { // Erase 1st element that is matched
        for(int i = 0; i < size; ++i) {
            if (data[i] == v) {
                data[i] = data[--size];
                return true;
            }
        }
        return false;
    }
};
`})}),`
`,n(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Insert: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mn,{children:"1"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord",children:"1"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["Erase: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"n"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",children:"n"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,n(r,{})]})}function h(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?n(e,Object.assign({},t,{children:n(i,t)})):i(t)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=c;l.main=d;export{l as default};
