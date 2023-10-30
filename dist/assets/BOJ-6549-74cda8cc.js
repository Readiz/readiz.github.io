import{p as a}from"./BOJ-6549_-79628163.js";import{u as c,j as e,a as i,F as o}from"./ssg-client-5ec444fe.js";import{C as d}from"./Comment-5f174caf.js";import{H as p}from"./Header-4f3c1253.js";function t(r){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",code:"code",pre:"pre"},c(),r.components);return i(o,{children:[e(p,{}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 히스토그램에서 가장 큰 직사각형"}),`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://www.acmicpc.net/problem/6549",children:"https://www.acmicpc.net/problem/6549"})]}),`
`,i(n.li,{children:["BOJ 해설: ",e(n.a,{href:"https://www.acmicpc.net/blog/view/12",children:"https://www.acmicpc.net/blog/view/12"})]}),`
`]}),`
`,e(n.p,{children:"예전에 스택으로 풀 수 있다는 이야기만 듣고 덮어놨었던 문제. 다이아몬드 가공 문제에서 최대 면적을 빠르게 구해야할 필요가 있어서 다시 꺼내 풀어보았다."}),`
`,e(n.p,{children:"(사담이지만, 백준은 다양한 문제를 풀 수 있어서 좋은듯.. 이런 서비스가 한국에 있어서 분명 한국의 SW 경쟁력을 높힌다고 생각.)"}),`
`,i(n.p,{children:["SegTree나 분할정복으로 ",e(n.code,{children:"O(n*log n)"}),"이 걸리는 시간복잡도를 ",e(n.code,{children:"O(n)"})," 으로 줄일 수 있는 획기적인 아이디어."]}),`
`,i(n.p,{children:["스택에는 항상 증가하는 순서로 height 들이 들어가 있으므로, pop 한 이후 ",e(n.code,{children:"idx.top()"}),"을 하게되면, 최대 width가 나온다. 이 부분이 핵심 아이디어."]}),`
`,e(n.p,{children:"전체 코드는 아래와 같다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`void solve() {\r
    for (rint i = 1; i <= N; ++i) {\r
        scanf("%d", &A[i]);\r
    }\r
    A[0] = A[N+1] = 0;\r
    stack<int> idx;\r
    idx.push(0);\r
\r
    ll maxArea = 0;\r
    for(rint i = 1; i <= N + 1; ++i) { // N + 1, 마지막 fake 원소로 끝내기 위함\r
        _D("checking A[%d] = %d\\n", i, A[i]);\r
        while(idx.size() && A[idx.top()] > A[i]) {\r
            int c = idx.top(); idx.pop(); // 더 작으면 pop한다.\r
            ll w = i - idx.top() - 1; // c - i가 아님에 유의! **자기보다 더 작은 애가 있는 곳까지..\r
            ll h = A[c];\r
            ll area = w * h;\r
            _D("area: %lld\\n", area);\r
            if (area > maxArea) maxArea = area;\r
        }\r
        idx.push(i); // 신규 원소 push\r
    }\r
\r
    printf("%lld\\n", maxArea);\r
}
`})}),`
`,e(d,{})]})}function s(r={}){const{wrapper:n}=Object.assign({},c(),r.components);return n?e(n,Object.assign({},r,{children:e(t,r)})):t(r)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=a;l.main=h;export{l as default};
