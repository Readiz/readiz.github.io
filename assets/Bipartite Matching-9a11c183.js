import{p as m}from"./Bipartite Matching_-29b99005.js";import{u as i,j as a,a as n,F as c}from"./ssg-client-9b0ce5e8.js";import{C as r}from"./Comment-f518aff4.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-f79b744c.js";import"./katex.min-4ed993c7.js";function l(s){const e=Object.assign({h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",msqrt:"msqrt",svg:"svg",path:"path"},i(),s.components);return n(c,{children:[a(h,{}),`
`,a(e.h2,{id:"bipartite-matching",children:"Bipartite Matching"}),`
`,n(e.ul,{children:[`
`,a(e.li,{children:"이분매칭, 이분 그래프가 주어졌을 때 최대 Matching을 찾는 것"}),`
`,a(e.li,{children:"시간 복잡도는 BFS(Edmonds-Karp), DFS(Ford-Fulkerson) 동일하지만 DFS 방법이 코드가 더 간결하고 성능도 우수"}),`
`]}),`
`,a(e.pre,{children:a(e.code,{className:"language-cpp"})}),`
`,a(e.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Basic Flow Algorithm (Reference): ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"f"}),a(e.mi,{children:"E"}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(fE)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),a(e.span,{className:"mclose",children:")"})]})})]})})]}),`
`,n(e.li,{children:["Worst: ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"V"}),a(e.mi,{children:"E"}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(VE)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),a(e.span,{className:"mclose",children:")"})]})})]})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["이분그래프에서 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"f"}),a(e.mo,{children:"≤"}),a(e.mi,{children:"V"})]}),a(e.annotation,{encoding:"application/x-tex",children:"f \\leq V"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:[n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),a(e.span,{className:"mrel",children:"≤"}),a(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"0.6833em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"})]})]})]})})," 이기 때문"]}),`
`,n(e.li,{children:["디닉을 끼얹으면 Hopcroft-Karp Algorithm이라고 하며, 시간복잡도는 ",a(e.span,{className:"math math-inline",children:n(e.span,{className:"katex",children:[a(e.span,{className:"katex-mathml",children:a(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:n(e.semantics,{children:[n(e.mrow,{children:[a(e.mi,{children:"O"}),a(e.mo,{stretchy:"false",children:"("}),a(e.mi,{children:"E"}),a(e.msqrt,{children:a(e.mi,{children:"V"})}),a(e.mo,{stretchy:"false",children:")"})]}),a(e.annotation,{encoding:"application/x-tex",children:"O(E\\sqrt V)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:n(e.span,{className:"base",children:[a(e.span,{className:"strut",style:{height:"1.1767em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),a(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),a(e.span,{className:"mord sqrt",children:n(e.span,{className:"vlist-t vlist-t2",children:[n(e.span,{className:"vlist-r",children:[n(e.span,{className:"vlist",style:{height:"0.9267em"},children:[n(e.span,{className:"svg-align",style:{top:"-3em"},children:[a(e.span,{className:"pstrut",style:{height:"3em"}}),a(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em",paddingLeft:"0.833em"},children:"V"})]}),n(e.span,{style:{top:"-2.8867em"},children:[a(e.span,{className:"pstrut",style:{height:"3em"}}),a(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:a(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:a(e.path,{d:`M95,702
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
M834 80h400000v40h-400000z`})})})]})]}),a(e.span,{className:"vlist-s",children:"​"})]}),a(e.span,{className:"vlist-r",children:a(e.span,{className:"vlist",style:{height:"0.1133em"},children:a(e.span,{})})})]})}),a(e.span,{className:"mclose",children:")"})]})})]})}),"가 된다고 함"]}),`
`]}),`
`]}),`
`]}),`
`,a(r,{})]})}function d(s={}){const{wrapper:e}=Object.assign({},i(),s.components);return e?a(e,Object.assign({},s,{children:a(l,s)})):l(s)}const o=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=m;t.main=o;export{t as default};