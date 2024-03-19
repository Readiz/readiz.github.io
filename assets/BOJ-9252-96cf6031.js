import{p as l}from"./BOJ-9252_-79628163.js";import{u as c,j as e,a as i,F as a}from"./ssg-client-1884f836.js";import{C as p}from"./Comment-c65142a7.js";import{H as d}from"./Header-2f5d5a51.js";import{T as s}from"./TagList-cec9afc2.js";import"./index.module-caf545e8.js";function o(r){const n=Object.assign({ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code"},c(),r.components);return i(a,{children:[e(d,{}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: LCS 2"}),`
`,i(n.li,{children:["문제 링크: ",e(n.a,{href:"https://www.acmicpc.net/problem/9252",children:"https://www.acmicpc.net/problem/9252"})]}),`
`]}),`
`,e(n.p,{children:"LCS는 Longest Common Subsequence의 약자로 이 문제 제목에도 대놓고 쓰였다. 처음 접했을 때 생각하기 어려운 DP이고, 개같이 멸망. 아래 URL의 풀이를 거의 그대로 참고했다."}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://velog.io/@emplam27/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-LCS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Longest-Common-Substring%EC%99%80-Longest-Common-Subsequence",children:"emplam27 님의 정리 글"})}),`
`]}),`
`,e(n.p,{children:'해당 글에서 설명 방법이 아주 좋은데, 우선 Longest Common String(Substring?)을 먼저 구하는 방법에 대해서 알아보자. "연속된다"는 조건 때문에 이 경우 전체 모양이 아래처럼 된다.'}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`for() {
    for() {
        if (A[a] == B[b]) DP[i][j] = DP[i-1][j-1] + 1;
        else DP[i][j] = 0;
    }
}
`})}),`
`,i(n.p,{children:["사실 모양을 보면 알겠지만 굳이 2차원 ",e(n.code,{children:"DP"})," 배열을 쓸 필요도 없다. 배열에서의 결과는 대각선 방향만 존재한다. 중간에 서로 다른 문자열이 나오자마자 칼같이 0으로 만들어 주는 것이 포인트이다."]}),`
`,i(n.p,{children:["여기서 사고를 확장해보자. 0으로 만드는 이유는 ",e(n.code,{children:"연속"}),"된다는 조건이 있기 때문이다. 그렇다면 ",e(n.code,{children:"연속"}),"된다는 조건이 없을 때는 어떻게 될 것인가? 이 경우 현재까지의 최대 공통 부분 길이가 유지가 되어야 한다. 그리고 이 유지는 x축으로 해야할 수도 있고, y축으로 해야할 수도 있기 때문에 x, y축에 대한 ",e(n.code,{children:"max"})," 값을 구해주면 되겠다. 그래서 위 ",e(n.code,{children:"DP"})," 식이 아주 약간 바뀐다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`for() {
    for() {
        if (A[a] == B[b]) DP[i][j] = DP[i-1][j-1] + 1;
        else DP[i][j] = max(DP[i-1][j], DP[i][j-1]);
    }
}
`})}),`
`,i(n.p,{children:["그리고, 이러한 조건을 만족하는 ",e(n.code,{children:"LCS"}),"를 하나 출력하라고 하면, 그것은 ",e(n.code,{children:"DP"})," 배열을 활용해서 대각 방향으로 숫자가 증가하는 ",e(n.code,{children:"path"}),"를 잘 따라가면 된다. 결과는 역방향으로 출력하면 된다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`vector<char> word;
int ap = alen, bp = blen;
while(ap != 0 && bp != 0) {
    if (DP[bp][ap] == DP[bp][ap-1]) {
        ap--;
        continue;
    }
    if (DP[bp][ap] == DP[bp-1][ap]) {
        bp--;
        continue;
    }
    word.push_back(A[ap]);
    ap--;
    bp--;
}

if (word.size()) {
    for(auto it = word.rbegin(); it != word.rend(); ++it){  
        printf("%c", *it);
    }
    printf("\\n");
}
`})}),`
`,i(n.p,{children:["오늘도 ",e(n.code,{children:"DP"}),"에 1패를 했다. 으악!"]}),`
`,e(s,{}),`
`,e(p,{})]})}function m(r={}){const{wrapper:n}=Object.assign({},c(),r.components);return n?e(n,Object.assign({},r,{children:e(o,r)})):o(r)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=l;t.main=h;export{t as default};
