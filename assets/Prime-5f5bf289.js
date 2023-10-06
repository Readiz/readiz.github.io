import{p as m}from"./Prime_-c6e30f08.js";import{u as i,j as n,a as s,F as c}from"./ssg-client-72750d52.js";import{C as r}from"./Comment-cc565e03.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-4e125d42.js";import"./katex.min-4ed993c7.js";function t(a){const e=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",msqrt:"msqrt",annotation:"annotation",svg:"svg",path:"path"},i(),a.components);return s(c,{children:[n(h,{}),`
`,n(e.h2,{id:"simple-isprime",children:"Simple isPrime"}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`bool isPrime(int num) {
    for(int i = 2; i * i <= num; ++i) {
        if (num % i == 0) return false;
    }
    return true;
}
`})}),`
`,n(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:["Simple isPrime: ",n(e.span,{className:"math math-inline",children:s(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:s(e.semantics,{children:[s(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.msqrt,{children:n(e.mi,{children:"N"})}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\sqrt N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:s(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.1767em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord sqrt",children:s(e.span,{className:"vlist-t vlist-t2",children:[s(e.span,{className:"vlist-r",children:[s(e.span,{className:"vlist",style:{height:"0.9267em"},children:[s(e.span,{className:"svg-align",style:{top:"-3em"},children:[n(e.span,{className:"pstrut",style:{height:"3em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em",paddingLeft:"0.833em"},children:"N"})]}),s(e.span,{style:{top:"-2.8867em"},children:[n(e.span,{className:"pstrut",style:{height:"3em"}}),n(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:n(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:n(e.path,{d:`M95,702
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
M834 80h400000v40h-400000z`})})})]})]}),n(e.span,{className:"vlist-s",children:"​"})]}),n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.1133em"},children:n(e.span,{})})})]})}),n(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,n(r,{})]})}function o(a={}){const{wrapper:e}=Object.assign({},i(),a.components);return e?n(e,Object.assign({},a,{children:n(t,a)})):t(a)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=m;l.main=p;export{l as default};
