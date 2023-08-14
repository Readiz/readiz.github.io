import{p as m}from"./BinarySearch_-28c74ae0.js";import{u as s,j as e,a,F as t}from"./ssg-client-b74550d0.js";import{C as c}from"./Comment-4255bac8.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-8db5ce7e.js";import"./katex.min-4ed993c7.js";function i(l){const n=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},s(),l.components);return a(t,{children:[e(h,{}),`
`,e(n.h2,{id:"binary-search",children:"Binary Search"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`bool find(int v) {
    int l = 0; int r = N - 1;
    while (l <= r) {
        int m = (l + r) / 2; // overflow prevent: l + (r - l) / 2;
        if (arr[m] == v) return true;
        if (arr[m] < v) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return false;
}
`})}),`
`,e(n.h2,{id:"lower-bound",children:"Lower Bound"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int lb(int v) {
    int l = 0; int r = N - 1;
    int ans = -1;
    while (l <= r) {
        int m = (l + r) / 2; // overflow prevent: l + (r - l) / 2;
        if (arr[m] >= v) {
            r = m - 1;
            ans = m;
        } else {
            l = m + 1;
        }
    }
    return ans;
}
`})}),`
`,e(n.h2,{id:"upper-bound",children:"Upper Bound"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int lb(int v) {
    int l = 0; int r = N - 1;
    int ans = -1;
    while (l <= r) {
        int m = (l + r) / 2; // overflow prevent: l + (r - l) / 2;
        if (arr[m] > v) {
            r = m - 1;
            ans = m;
        } else {
            l = m + 1;
        }
    }
    return ans;
}
`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:["Find: ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),a(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(n.li,{children:["LowerBound: ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),a(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(n.li,{children:["UpperBound: ",e(n.span,{className:"math math-inline",children:a(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(n.semantics,{children:[a(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:a(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),a(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,e(c,{})]})}function o(l={}){const{wrapper:n}=Object.assign({},s(),l.components);return n?e(n,Object.assign({},l,{children:e(i,l)})):i(l)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=m;r.main=d;export{r as default};
