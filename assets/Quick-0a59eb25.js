import{p as m}from"./Quick_-a929a8f5.js";import{u as t,j as a,a as n,F as r}from"./ssg-client-34091b93.js";import{C as c}from"./Comment-af4bbed1.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-353b3a02.js";import"./katex.min-4ed993c7.js";function l(s){const e=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",msup:"msup",mn:"mn"},t(),s.components);return n(r,{children:[a(h,{}),`
`,a(e.h2,{id:"quick-sort",children:"Quick Sort"}),`
`,a(e.pre,{children:a(e.code,{className:"language-cpp",children:`void qSort(int s, int e) {
    if (s >= e) return;
    int l = s, r = e;
    auto pivot = data[(l+r)/2];

    while(l < r) {
        while(pivot < data[r]) --r;
        while(data[l] < pivot) ++l;
        if (l >= r) break;

        auto tmp = data[l];
        data[l] = data[r];
        data[r] = tmp;

        ++l, --r;
    }
    
    qSort(s, r);
    qSort(l, e);
}
`})}),`
`,a(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Average: ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"N"}),a(e.mi,{children:"log"}),a(e.mo,{children:"⁡"}),a(e.mi,{children:"N"}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N\\log N)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mop",children:["lo",a(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),a(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,n(e.li,{children:["Worst: ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),n(e.msup,{children:[a(e.mi,{children:"N"}),a(e.mn,{children:"2"})]}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N^2)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t",children:a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.8141em"},children:n(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),a(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,a(c,{})]})}function o(s={}){const{wrapper:e}=Object.assign({},t(),s.components);return e?a(e,Object.assign({},s,{children:a(l,s)})):l(s)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=m;i.main=d;export{i as default};
