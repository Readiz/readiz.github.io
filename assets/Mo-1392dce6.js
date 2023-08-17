import{p as m}from"./Mo_-738bb863.js";import{u as t,j as s,a as n,F as c}from"./ssg-client-5a9053ee.js";import{C as r}from"./Comment-962c1837.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-fec6ad35.js";import"./katex.min-4ed993c7.js";function l(a){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msqrt:"msqrt",annotation:"annotation",svg:"svg",path:"path",pre:"pre",code:"code"},t(),a.components);return n(c,{children:[s(h,{}),`
`,s(e.h2,{id:"mos-algorithm",children:"Mo's Algorithm"}),`
`,s(e.p,{children:"Offline Query가 가능해야 함, 아래와 같이 쿼리 정렬"}),`
`,n(e.ul,{children:[`
`,s(e.li,{children:s(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[s(e.span,{className:"katex-mathml",children:s(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[s(e.mi,{children:"s"}),s(e.mi,{children:"q"}),s(e.mi,{children:"r"}),s(e.mi,{children:"t"}),s(e.mi,{children:"N"}),s(e.mo,{children:"="}),s(e.msqrt,{children:s(e.mi,{children:"N"})})]}),s(e.annotation,{encoding:"application/x-tex",children:"sqrtN = \\sqrt N"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),s(e.span,{className:"mord mathnormal",children:"s"}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"tN"}),s(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s(e.span,{className:"mrel",children:"="}),s(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),n(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"1.04em",verticalAlign:"-0.1133em"}}),s(e.span,{className:"mord sqrt",children:n(e.span,{className:"vlist-t vlist-t2",children:[n(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.9267em"},children:[n(e.span,{className:"svg-align",style:{top:"-3em"},children:[s(e.span,{className:"pstrut",style:{height:"3em"}}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em",paddingLeft:"0.833em"},children:"N"})]}),n(e.span,{style:{top:"-2.8867em"},children:[s(e.span,{className:"pstrut",style:{height:"3em"}}),s(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:s(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:s(e.path,{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})})})]})]}),s(e.span,{className:"vlist-s",children:"​"})]}),s(e.span,{className:"vlist-r",children:s(e.span,{className:"vlist",style:{height:"0.1133em"},children:s(e.span,{})})})]})})]})]})]})})}),`
`]}),`
`,s(e.pre,{children:s(e.code,{className:"language-cpp",children:`struct Q { // Query
    int s, e;
    int oidx; // Original Index
    bool operator<(const struct Q& t) const {
        if (e / sqrtN == t.e / sqrtN) return s < t.s;
        return e / sqrtN < t.e / sqrtN;
    }
};
`})}),`
`,s(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["구간 길이 N이고, 쿼리 M개 일 때,",`
`,n(e.ul,{children:[`
`,s(e.li,{children:s(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[s(e.span,{className:"katex-mathml",children:s(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[s(e.mi,{children:"O"}),s(e.mo,{stretchy:"false",children:"("}),s(e.mo,{stretchy:"false",children:"("}),s(e.mi,{children:"N"}),s(e.mo,{children:"+"}),s(e.mi,{children:"M"}),s(e.mo,{stretchy:"false",children:")"}),s(e.msqrt,{children:s(e.mi,{children:"N"})}),s(e.mo,{stretchy:"false",children:")"})]}),s(e.annotation,{encoding:"application/x-tex",children:"O((N+M) \\sqrt N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),s(e.span,{className:"mopen",children:"(("}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),s(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),s(e.span,{className:"mbin",children:"+"}),s(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),n(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"1.1767em",verticalAlign:"-0.25em"}}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),s(e.span,{className:"mclose",children:")"}),s(e.span,{className:"mord sqrt",children:n(e.span,{className:"vlist-t vlist-t2",children:[n(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.9267em"},children:[n(e.span,{className:"svg-align",style:{top:"-3em"},children:[s(e.span,{className:"pstrut",style:{height:"3em"}}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em",paddingLeft:"0.833em"},children:"N"})]}),n(e.span,{style:{top:"-2.8867em"},children:[s(e.span,{className:"pstrut",style:{height:"3em"}}),s(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:s(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:s(e.path,{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})})})]})]}),s(e.span,{className:"vlist-s",children:"​"})]}),s(e.span,{className:"vlist-r",children:s(e.span,{className:"vlist",style:{height:"0.1133em"},children:s(e.span,{})})})]})}),s(e.span,{className:"mclose",children:")"})]})]})]})})}),`
`]}),`
`]}),`
`]}),`
`,s(r,{})]})}function d(a={}){const{wrapper:e}=Object.assign({},t(),a.components);return e?s(e,Object.assign({},a,{children:s(l,a)})):l(a)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=m;i.main=p;export{i as default};
