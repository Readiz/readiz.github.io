import{p as m}from"./Quick_-a929a8f5.js";import{u as t,j as n,a,F as r}from"./ssg-client-07a5afe4.js";import{C as c}from"./Comment-7e4f0363.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-cb578dbe.js";import"./katex.min-4ed993c7.js";function l(s){const e=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",msup:"msup",mn:"mn"},t(),s.components);return a(r,{children:[n(h,{}),`
`,n(e.h2,{id:"quick-sort",children:"Quick Sort"}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`template <typename T>
void qSort(int s, int e) {
    if (s >= e) return;
    int l = s, r = e;
    T pivot = data[(l+r)/2];

    while(l < r) {
        while(pivot < data[r]) --r;
        while(data[l] < pivot) ++l;
        if (l >= r) break;

        T tmp = data[l];
        data[l] = data[r];
        data[r] = tmp;

        ++l, --r;
    }
    
    qSort(s, r);
    qSort(l, e);
}
`})}),`
`,n(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["Average: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"N"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(N\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,a(e.li,{children:["Worst: ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),a(e.msup,{children:[n(e.mi,{children:"N"}),n(e.mn,{children:"2"})]}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(N^2)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t",children:n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.8141em"},children:a(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,n(c,{})]})}function o(s={}){const{wrapper:e}=Object.assign({},t(),s.components);return e?n(e,Object.assign({},s,{children:n(l,s)})):l(s)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=m;i.main=d;export{i as default};
