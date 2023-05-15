import{p as a}from"./BOJ-6549_-79628163.js";import{u as r,j as e,a as t,F as o}from"./ssg-client-d4adc270.js";import{C as d}from"./Comment-5998f2b3.js";import{H as p}from"./Header-38af9d44.js";function c(i){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",code:"code",pre:"pre"},r(),i.components);return t(o,{children:[e(p,{}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 히스토그램에서 가장 큰 직사각형"}),`
`,t(n.li,{children:["문제 링크: ",e(n.a,{href:"https://www.acmicpc.net/problem/6549",children:"https://www.acmicpc.net/problem/6549"})]}),`
`,t(n.li,{children:["BOJ 해설: ",e(n.a,{href:"https://www.acmicpc.net/blog/view/12",children:"https://www.acmicpc.net/blog/view/12"})]}),`
`]}),`
`,e(n.p,{children:"예전에 스택으로 풀 수 있다는 이야기만 듣고 덮어놨었던 문제. 다이아몬드 가공 문제에서 최대 면적을 빠르게 구해야할 필요가 있어서 다시 꺼내 풀어보았다."}),`
`,e(n.p,{children:"(사담이지만, 백준은 다양한 문제를 풀 수 있어서 좋은듯.. 이런 서비스가 한국에 있어서 분명 한국의 SW 경쟁력을 높힌다고 생각.)"}),`
`,t(n.p,{children:["SegTree나 분할정복으로 ",e(n.code,{children:"O(n*log n)"}),"이 걸리는 시간복잡도를 ",e(n.code,{children:"O(n)"})," 으로 줄일 수 있는 획기적인 아이디어."]}),`
`,t(n.p,{children:["스택에는 항상 증가하는 순서로 height 들이 들어가 있으므로, pop 한 이후 ",e(n.code,{children:"idx.top()"}),"을 하게되면, 최대 width가 나온다. 이 부분이 핵심 아이디어."]}),`
`,e(n.p,{children:"전체 코드는 아래와 같다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`void solve() {
    for (rint i = 1; i <= N; ++i) {
        scanf("%d", &A[i]);
    }
    A[0] = A[N+1] = 0;
    stack<int> idx;
    idx.push(0);

    ll maxArea = 0;
    for(rint i = 1; i <= N + 1; ++i) { // N + 1, 마지막 fake 원소로 끝내기 위함
        _D("checking A[%d] = %d\\n", i, A[i]);
        while(idx.size() && A[idx.top()] > A[i]) {
            int c = idx.top(); idx.pop(); // 더 작으면 pop한다.
            ll w = i - idx.top() - 1; // c - i가 아님에 유의! **자기보다 더 작은 애가 있는 곳까지..
            ll h = A[c];
            ll area = w * h;
            _D("area: %lld\\n", area);
            if (area > maxArea) maxArea = area;
        }
        idx.push(i); // 신규 원소 push
    }

    printf("%lld\\n", maxArea);
}
`})}),`
`,e(d,{})]})}function s(i={}){const{wrapper:n}=Object.assign({},r(),i.components);return n?e(n,Object.assign({},i,{children:e(c,i)})):c(i)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=a;l.main=h;export{l as default};