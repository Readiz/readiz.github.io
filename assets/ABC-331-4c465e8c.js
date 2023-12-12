import{p as h}from"./ABC-331_-c3e39abd.js";import{u as t,j as n,a,F as d}from"./ssg-client-ce23700e.js";import{C as o}from"./Comment-8bfc717b.js";import{H as p}from"./Header-9eb1beb5.js";import{T as g}from"./TagList-e40e368a.js";import{I as N}from"./Image-64b867d9.js";import"./katex.min-4ed993c7.js";import{S as i,T as l}from"./SolvedTier-e52744b3.js";import{A as c}from"./AtCoderResult-21c56ad6.js";import"./index.module-caf545e8.js";function r(s){const e=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",mn:"mn",annotation:"annotation",pre:"pre",msup:"msup"},t(),s.components);return a(d,{children:[n(p,{}),`
`,n(e.h1,{id:"abc-331-upsolving",children:"ABC 331 Upsolving"}),`
`,n(N,{src:"2023-12-02-23-30-30.png",width:600}),`
`,a(e.p,{children:["저번주 ABC에서 ",n(e.code,{children:"E"}),"번을 1분차로 제출 못한 이후로 또 고질병(경계선을 못넘는 병)이 도지나 했는데, 다행히 그린에 안착했다."]}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"대회 참가 유무: Y"}),`
`,a(e.li,{children:["최종 Performance: ",n("span",{style:{color:"#00C0C0"},children:"1353"})," (Rank: 1461 / 10520)"]}),`
`,a(e.li,{children:["Round 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc331",children:"Top"})," / ",n(e.a,{href:"https://atcoder.jp/contests/abc331/tasks",children:"Tasks"})]}),`
`,n(e.li,{children:"문제별 결과"}),`
`]}),`
`,a(e.table,{children:[n(e.thead,{children:a(e.tr,{children:[n(e.th,{align:"center",children:"A"}),n(e.th,{align:"center",children:"B"}),n(e.th,{align:"center",children:"C"}),n(e.th,{align:"center",children:"D"}),n(e.th,{align:"center",children:"E"}),n(e.th,{align:"center",children:"F"}),n(e.th,{align:"center",children:"G"})]})}),n(e.tbody,{children:a(e.tr,{children:[n(e.td,{align:"center",children:n(c,{state:"AC"})}),n(e.td,{align:"center",children:n(c,{state:"AC"})}),n(e.td,{align:"center",children:n(c,{state:"AC"})}),n(e.td,{align:"center",children:n(c,{state:"AC"})}),n(e.td,{align:"center",children:n(c,{state:"AC"})}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:"-"})]})})]}),`
`,a(e.p,{children:[n(e.code,{children:"C"})," 에서 ",n(e.code,{children:"upper_bound"})," 사용시 ",n(e.code,{children:"end"})," check를 하지 않아서 3틀을 했다. ",n(e.code,{children:"CPH"}),"가 갑자기 동작하지 않아서 좀 멘붕이었는데, 그런거 치고 잘 쳤다는 개인적인 평가."]}),`
`,n(e.h2,{id:"a---tomorrow",children:"A - Tomorrow"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc331/tasks/abc331_a",children:"https://atcoder.jp/contests/abc331/tasks/abc331_a"})]}),`
`,n(e.li,{children:"Score: 100점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(i,{tierName:l.Bronze,grade:4,width:15})]}),`
`]}),`
`,n(e.p,{children:"하루 뒤의 날짜를 출력하는 문제. 다음 달로 넘어가는 case, 다음 해로 넘어가는 case 모두 빼먹지 말아야 한다."}),`
`,n(e.h2,{id:"b---buy-one-carton-of-milk",children:"B - Buy One Carton of Milk"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc331/tasks/abc331_b",children:"https://atcoder.jp/contests/abc331/tasks/abc331_b"})]}),`
`,n(e.li,{children:"Score: 200점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(i,{tierName:l.Silver,grade:5,width:15})]}),`
`]}),`
`,a(e.p,{children:["정해는 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mn,{children:"100"}),n(e.mo,{children:"∗"}),n(e.mn,{children:"100"}),n(e.mo,{children:"∗"}),n(e.mn,{children:"100"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(100*100*100)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord",children:"100"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"∗"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.6444em"}}),n(e.span,{className:"mord",children:"100"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"∗"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord",children:"100"}),n(e.span,{className:"mclose",children:")"})]})]})]})}),"의 브루트포스. 나는 아래 형태의 ",n(e.code,{children:"DP"}),"로 풀었다. (Knapsack)"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`int dp[200];
memset(dp, 0x3F, sizeof(int) * 200);
dp[0] = 0;
for(int i = 1; i <= 6; ++i) dp[i] = S;

for(int i = 6; i <= 100; ++i) {
    if (i >= 6) {
        dp[i] = min(dp[i], dp[i - 6] + S);
    }
    if (i >= 8) {
        dp[i] = min(dp[i], dp[i - 8] + M);
    }
    if (i >= 12) {
        dp[i] = min(dp[i], dp[i - 12] + L);
    }
}

int ans = 0x7FFFFFFF;
for(int i = N; i <= N + 12; ++i) {
    if (dp[i] < ans) ans = dp[i];
}
printf("%d\\n", ans);
`})}),`
`,n(e.h2,{id:"c---sum-of-numbers-greater-than-me",children:"C - Sum of Numbers Greater Than Me"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc331/tasks/abc331_c",children:"https://atcoder.jp/contests/abc331/tasks/abc331_c"})]}),`
`,n(e.li,{children:"Score: 300점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(i,{tierName:l.Gold,grade:5,width:15})]}),`
`]}),`
`,a(e.p,{children:["여기서 구현 이슈로 3틀을 했다. ",n(e.code,{children:"upper_bound"})," 에서 결과가 없으면, ",n(e.code,{children:"end()"})," iterator로 위치하고, 여기에는 쓰레기값이 들어가 있음에 유의하도록 하자."]}),`
`,n(e.h2,{id:"d---tile-pattern",children:"D - Tile Pattern"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc331/tasks/abc331_d",children:"https://atcoder.jp/contests/abc331/tasks/abc331_d"})]}),`
`,n(e.li,{children:"Score: 450점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(i,{tierName:l.Gold,grade:1,width:15})]}),`
`]}),`
`,a(e.p,{children:["정해는 2차원 ",n(e.code,{children:"Prefix Sum"})," + Case work 였다. 나는 ",n(e.code,{children:"2D Fenwick"})," 으로 처리했다. 그렇지만 중간에 board가 업데이트 되는 쿼리가 없기 때문에 정해가 더 좋아보인다. 타일이 반복된다는 것이 구현을 복잡하게 만들었다. 따져야할 케이스가 많기 때문에, ",n(e.code,{children:"D"}),"를 건너뛴 사람들도 많이 보였고, 결론만 놓고 보면 ",n(e.code,{children:"D"})," 풀 시간에 ",n(e.code,{children:"E"}),"와 ",n(e.code,{children:"F"}),"를 푸는 것이 정배 였던 것 같다. 다행히 시간 내에 ",n(e.code,{children:"AC"}),"를 받아서 다행이지만, 만약 구현하다가 시간을 초과했다면 저번주의 악몽이 되풀이 되었을 듯.."]}),`
`,n(e.p,{children:"개인적으로는 구현 연습에 상당히 도움이 되는 문제였다고 생각한다. 다음에 비슷한 유형이 나오면 좀 더 빨리 풀 수 있지 않을까.."}),`
`,n(e.h2,{id:"e---set-meal",children:"E - Set Meal"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc331/tasks/abc331_e",children:"https://atcoder.jp/contests/abc331/tasks/abc331_e"})]}),`
`,n(e.li,{children:"Score: 450점"}),`
`,a(e.li,{children:["문제 예상 티어: ",n(i,{tierName:l.Gold,grade:4,width:15})]}),`
`]}),`
`,a(e.p,{children:["정해는 이것저것 체크하면서 시간복잡도를 많이 줄인 것으로 보이는데(",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"L"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{children:"+"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"L"}),n(e.mo,{stretchy:"false",children:")"}),n(e.mo,{children:"+"}),n(e.mi,{children:"N"}),n(e.mo,{children:"+"}),n(e.mi,{children:"M"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"M"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(L(\\log N + \\log L) + N + M \\log M)"})]})})}),a(e.span,{className:"katex-html","aria-hidden":"true",children:[a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",children:"L"}),n(e.span,{className:"mopen",children:"("}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"+"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",children:"L"}),n(e.span,{className:"mclose",children:")"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"+"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"+"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),a(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),n(e.span,{className:"mclose",children:")"})]})]})]})}),"), 나는 그냥 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"N"}),n(e.mi,{children:"M"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(NM)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"NM"}),n(e.span,{className:"mclose",children:")"})]})})]})})," 베이스 솔루션에 정렬 후 적당한 커팅을 붙여서 통과시켰고, 이 방법이 더 간단한듯 하다. 브루트포스로 ",n(e.span,{className:"math math-inline",children:a(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:a(e.semantics,{children:[a(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mn,{children:"1"}),a(e.msup,{children:[n(e.mn,{children:"0"}),n(e.mn,{children:"10"})]}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(10^{10})"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:a(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord",children:"1"}),a(e.span,{className:"mord",children:[n(e.span,{className:"mord",children:"0"}),n(e.span,{className:"msupsub",children:n(e.span,{className:"vlist-t",children:n(e.span,{className:"vlist-r",children:n(e.span,{className:"vlist",style:{height:"0.8141em"},children:a(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[n(e.span,{className:"pstrut",style:{height:"2.7em"}}),n(e.span,{className:"sizing reset-size6 size3 mtight",children:n(e.span,{className:"mord mtight",children:n(e.span,{className:"mord mtight",children:"10"})})})]})})})})})]}),n(e.span,{className:"mclose",children:")"})]})})]})})," 정도 되는 솔루션의 경우에는 주로 커팅을 하면 시간 내에 잘 들어오는 것 같다."]}),`
`,n(e.h2,{id:"f---palindrome-query-to-be-upsolved",children:"F - Palindrome Query (To be upsolved...)"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc331/tasks/abc331_f",children:"https://atcoder.jp/contests/abc331/tasks/abc331_f"})]}),`
`,n(e.li,{children:"Score: 525점"}),`
`,n(e.li,{children:"문제 예상 티어: ?"}),`
`]}),`
`,n(e.p,{children:"Segment Tree를 활용해서 풀 수 있다고 한다. 추후 다시 풀어볼 예정."}),`
`,n(e.h2,{id:"g",children:"G"}),`
`,n(e.p,{children:"Skip"}),`
`,n(g,{}),`
`,n(o,{})]})}function b(s={}){const{wrapper:e}=Object.assign({},t(),s.components);return e?n(e,Object.assign({},s,{children:n(r,s)})):r(s)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),m={};m.outlineInfo=h;m.main=u;export{m as default};
