import{p as m}from"./Bubble_-aeafa7ea.js";import{u as i,j as a,a as n,F as r}from"./ssg-client-07a5afe4.js";import{C as c}from"./Comment-7e4f0363.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-cb578dbe.js";import"./katex.min-4ed993c7.js";function t(s){const e=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msup:"msup",mn:"mn",annotation:"annotation"},i(),s.components);return n(r,{children:[a(h,{}),`
`,a(e.h2,{id:"bubble-sort",children:"Bubble Sort"}),`
`,a(e.pre,{children:a(e.code,{className:"language-cpp",children:`template <typename T>
void sort() {
    for(int i = 0; i < N; ++i) {
        for(int j = i + 1; j < N; ++j) {
            if (data[i] > data[j]) {
                T tmp = data[i];
                data[i] = data[j];
                data[j] = tmp;
            }
        }
    }
}
`})}),`
`,a(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Average: ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),n(e.msup,{children:[a(e.mi,{children:"N"}),a(e.mn,{children:"2"})]}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N^2)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t",children:a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.8141em"},children:n(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),a(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,n(e.li,{children:["Worst: ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),n(e.msup,{children:[a(e.mi,{children:"N"}),a(e.mn,{children:"2"})]}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(N^2)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord",children:[a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),a(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t",children:a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.8141em"},children:n(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[a(e.span,{className:"pstrut",style:{height:"2.7em"}}),a(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),a(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,a(c,{})]})}function d(s={}){const{wrapper:e}=Object.assign({},i(),s.components);return e?a(e,Object.assign({},s,{children:a(t,s)})):t(s)}const o=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=m;l.main=o;export{l as default};
