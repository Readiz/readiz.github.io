import{p as t}from"./EV_-fd2023a2.js";import{u as m,j as s,a,F as c}from"./ssg-client-74699b14.js";import{C as r}from"./Comment-48ce988c.js";import{H as h}from"./Header-448ba443.js";import{T as d}from"./TagList-25b9d7fc.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function l(n){const e=Object.assign({p:"p",code:"code",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",annotation:"annotation",mo:"mo",ul:"ul",li:"li",mstyle:"mstyle",munderover:"munderover",mn:"mn",msub:"msub",mtext:"mtext"},m(),n.components);return a(c,{children:[s(h,{}),`
`,a(e.p,{children:["문제 풀이 사이트 ",s(e.code,{children:"AtCoder"}),"에서 종종 출제되는 기댓값에 대한 이론적 정리."]}),`
`,s(e.h2,{id:"expected-value",children:"Expected Value"}),`
`,a(e.p,{children:["기댓값은 영어로 ",s(e.code,{children:"Expected Value"})," 이 번역된 말인데, 흔히들 ",s(e.code,{children:"EV"}),"로 줄여서 쓰는 듯 하다. 그래서 전기차(?) 랑 헷갈릴 때가 간혹 있다. 확률변수 ",s(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[s(e.span,{className:"katex-mathml",children:s(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[s(e.mrow,{children:s(e.mi,{children:"X"})}),s(e.annotation,{encoding:"application/x-tex",children:"X"})]})})}),s(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"0.6833em"}}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]})}),"에 대한 기댓값은 보통 수학적으로 ",s(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[s(e.span,{className:"katex-mathml",children:s(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[s(e.mi,{children:"E"}),s(e.mo,{stretchy:"false",children:"["}),s(e.mi,{children:"X"}),s(e.mo,{stretchy:"false",children:"]"})]}),s(e.annotation,{encoding:"application/x-tex",children:"E[X]"})]})})}),s(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),s(e.span,{className:"mopen",children:"["}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),s(e.span,{className:"mclose",children:"]"})]})})]})}),"라고 나타낸다. 수식으로는,"]}),`
`,a(e.ul,{children:[`
`,s(e.li,{children:s(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[s(e.span,{className:"katex-mathml",children:s(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[s(e.mi,{children:"E"}),s(e.mo,{stretchy:"false",children:"["}),s(e.mi,{children:"X"}),s(e.mo,{stretchy:"false",children:"]"}),s(e.mo,{children:"="}),a(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[a(e.munderover,{children:[s(e.mo,{children:"∑"}),a(e.mrow,{children:[s(e.mi,{children:"i"}),s(e.mo,{children:"="}),s(e.mn,{children:"1"})]}),s(e.mi,{children:"n"})]}),a(e.msub,{children:[s(e.mi,{children:"x"}),s(e.mi,{children:"i"})]}),a(e.msub,{children:[s(e.mi,{children:"P"}),s(e.mi,{children:"i"})]})]})]}),s(e.annotation,{encoding:"application/x-tex",children:"E[X] = \\displaystyle \\sum_{i=1}^{n} x_iP_i"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),s(e.span,{className:"mopen",children:"["}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),s(e.span,{className:"mclose",children:"]"}),s(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s(e.span,{className:"mrel",children:"="}),s(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"2.9291em",verticalAlign:"-1.2777em"}}),s(e.span,{className:"mop op-limits",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[a(e.span,{className:"vlist",style:{height:"1.6514em"},children:[a(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[s(e.span,{className:"pstrut",style:{height:"3.05em"}}),s(e.span,{className:"sizing reset-size6 size3 mtight",children:a(e.span,{className:"mord mtight",children:[s(e.span,{className:"mord mathnormal mtight",children:"i"}),s(e.span,{className:"mrel mtight",children:"="}),s(e.span,{className:"mord mtight",children:"1"})]})})]}),a(e.span,{style:{top:"-3.05em"},children:[s(e.span,{className:"pstrut",style:{height:"3.05em"}}),s(e.span,{children:s(e.span,{className:"mop op-symbol large-op",children:"∑"})})]}),a(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[s(e.span,{className:"pstrut",style:{height:"3.05em"}}),s(e.span,{className:"sizing reset-size6 size3 mtight",children:s(e.span,{className:"mord mtight",children:s(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})]}),s(e.span,{className:"vlist-s",children:"​"})]}),s(e.span,{className:"vlist-r",children:s(e.span,{className:"vlist",style:{height:"1.2777em"},children:s(e.span,{})})})]})}),s(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mord",children:[s(e.span,{className:"mord mathnormal",children:"x"}),s(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[s(e.span,{className:"vlist",style:{height:"0.3117em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[s(e.span,{className:"pstrut",style:{height:"2.7em"}}),s(e.span,{className:"sizing reset-size6 size3 mtight",children:s(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),s(e.span,{className:"vlist-s",children:"​"})]}),s(e.span,{className:"vlist-r",children:s(e.span,{className:"vlist",style:{height:"0.15em"},children:s(e.span,{})})})]})})]}),a(e.span,{className:"mord",children:[s(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),s(e.span,{className:"msupsub",children:a(e.span,{className:"vlist-t vlist-t2",children:[a(e.span,{className:"vlist-r",children:[s(e.span,{className:"vlist",style:{height:"0.3117em"},children:a(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[s(e.span,{className:"pstrut",style:{height:"2.7em"}}),s(e.span,{className:"sizing reset-size6 size3 mtight",children:s(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),s(e.span,{className:"vlist-s",children:"​"})]}),s(e.span,{className:"vlist-r",children:s(e.span,{className:"vlist",style:{height:"0.15em"},children:s(e.span,{})})})]})})]})]})]})]})})}),`
`]}),`
`,s(e.p,{children:"이는 이산(Discrete) 확률 분포라고 하고, 연속으로는 적분으로 정의한다."}),`
`,a(e.ul,{children:[`
`,s(e.li,{children:s(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[s(e.span,{className:"katex-mathml",children:s(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[s(e.mi,{children:"E"}),s(e.mo,{stretchy:"false",children:"["}),s(e.mi,{children:"X"}),s(e.mo,{stretchy:"false",children:"]"}),s(e.mo,{children:"="}),a(e.mstyle,{scriptlevel:"0",displaystyle:"true",children:[s(e.mo,{children:"∫"}),s(e.mi,{children:"x"}),s(e.mi,{children:"f"}),s(e.mo,{stretchy:"false",children:"("}),s(e.mi,{children:"x"}),s(e.mo,{stretchy:"false",children:")"}),s(e.mtext,{children:" "}),s(e.mi,{children:"d"}),s(e.mi,{children:"x"})]})]}),s(e.annotation,{encoding:"application/x-tex",children:"E[X] = \\displaystyle \\int xf(x)\\,dx"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),s(e.span,{className:"mopen",children:"["}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),s(e.span,{className:"mclose",children:"]"}),s(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),s(e.span,{className:"mrel",children:"="}),s(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),a(e.span,{className:"base",children:[s(e.span,{className:"strut",style:{height:"2.2222em",verticalAlign:"-0.8622em"}}),s(e.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"∫"}),s(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s(e.span,{className:"mord mathnormal",children:"x"}),s(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),s(e.span,{className:"mopen",children:"("}),s(e.span,{className:"mord mathnormal",children:"x"}),s(e.span,{className:"mclose",children:")"}),s(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),s(e.span,{className:"mord mathnormal",children:"d"}),s(e.span,{className:"mord mathnormal",children:"x"})]})]})]})})}),`
`]}),`
`,s(d,{}),`
`,s(r,{})]})}function p(n={}){const{wrapper:e}=Object.assign({},m(),n.components);return e?s(e,Object.assign({},n,{children:s(l,n)})):l(n)}const o=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=t;i.main=o;export{i as default};
