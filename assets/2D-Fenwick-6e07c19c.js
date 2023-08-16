import{p as m}from"./2D-Fenwick_-98d02a7c.js";import{u as l,j as n,a,F as t}from"./ssg-client-bfc2779d.js";import{C as r}from"./Comment-63dcf866.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-b6c117fa.js";import"./katex.min-4ed993c7.js";function i(s){const e=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},l(),s.components);return a(t,{children:[n(h,{}),`
`,n(e.h2,{id:"2d-fenwick-tree",children:"2D-Fenwick Tree"}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`template <typename T>
struct Fenwick2D { // 1-indexed
    vector<vector<T>> data;
    int N, M;
    void init(int N, int M) { // Row: N / Column: M
        this->N = N;
        this->M = M;
        data.resize(N + 2);
        for(int i = 0; i < N + 2; ++i) {
            data[i].resize(M + 2);
            fill(data[i].begin(), data[i].end(), 0);
        }
    }
    void update(int r, int c, T v) {
        for(int cr = r; cr <= N; cr += cr & -cr) {
            for(int cc = c; cc <= M; cc += cc & -cc) {
                data[cr][cc] += v;
            }
        }
    }
    T get(int r, int c) {
        T res = 0;
        for(int cr = r; cr > 0; cr -= cr & -cr) {
            for(int cc = c; cc > 0; cc -= cc & -cc) {
                res += data[cr][cc];
            }
        }
        return res;
    }
};

`})}),`
`,n(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Init: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"N"}),n(e.mi,{children:"M"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(NM)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"NM"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["Update: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{children:"×"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"M"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N \\times \\log M)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"×"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),n(e.span,{className:"mclose",children:")"})]})]})]})})]}),`
`,a(e.li,{children:["Get: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{children:"×"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"M"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N \\times \\log M)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"×"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),n(e.span,{className:"mclose",children:")"})]})]})]})})]}),`
`]}),`
`,n(r,{})]})}function d(s={}){const{wrapper:e}=Object.assign({},l(),s.components);return e?n(e,Object.assign({},s,{children:n(i,s)})):i(s)}const o=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=m;c.main=o;export{c as default};
