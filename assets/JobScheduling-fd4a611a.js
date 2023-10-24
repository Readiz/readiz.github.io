import{p as r}from"./JobScheduling_-1fab243a.js";import{u as s,j as e,a as i,F as c}from"./ssg-client-6526f541.js";import{I as m}from"./Image-fb0bc77f.js";import{C as o}from"./Comment-342c2afe.js";import"./index.module-caf545e8.js";import{H as h}from"./Header-82a8ac46.js";import"./katex.min-4ed993c7.js";function a(t){const n=Object.assign({h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},s(),t.components);return i(c,{children:[e(h,{}),`
`,e(n.h2,{id:"job-scheduling",children:"Job Scheduling"}),`
`,e(n.p,{children:"이 유형은 문제에서 주어진 조건에 따라 풀이 방법이 매우 다양하게 나뉠 수 있다."}),`
`,e(n.h3,{id:"작업-배정을-할지-안할지만-결정",children:"작업 배정을 할지 안할지만 결정"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["회의실 배정 문제: ",e(n.a,{href:"https://www.acmicpc.net/problem/1931",children:"https://www.acmicpc.net/problem/1931"})]}),`
`,i(n.li,{children:["가젤 님의 관련 티스토리 글 (+ 아래 사진 출처): ",e(n.a,{href:"https://gazelle-and-cs.tistory.com/59",children:"https://gazelle-and-cs.tistory.com/59"})]}),`
`]}),`
`,e(m,{src:"meeting_assign.gif"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`// Greedy 기초
// 작업을 진행하는데 걸리는 시간 T가 주어지지 않았다.
// 그 작업을 채택할지 안할지만 보면 된다.

// 1. 정렬 Phase
// 끝나는 시간 기준으로 정렬한다.
// 2. 할당 Phase
// 앞에서부터 차례대로 할당한다.
struct Meeting {
    int s, e;
};

int solve() {
    vector<Meeting> v;
    for(int i = 0; i < N; ++i) {
        int a, b; scanf("%d %d", &a, &b);
        v.push_back({a, b});
    }

    sort(v.begin(), v.end(), [&](Meeting& a, Meeting& b) -> bool {
        if (a.e != b.e) return a.e < b.e;
        return a.s < b.s;
    });
    
    int last = 0;
    int ans = 0;
    for(auto& item: v) {
        if (item.s >= last) ++ans, last = item.e;
    }
    printf("%d\\n", ans);

    return 0;
}
`})}),`
`,e(n.h3,{id:"작업-수행-시간이-t--1인-경우",children:"작업 수행 시간이 T = 1인 경우"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["ABC 325 Round D번: ",e(n.a,{href:"https://atcoder.jp/contests/abc325/tasks/abc325_d",children:"https://atcoder.jp/contests/abc325/tasks/abc325_d"})]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`// 기본적으로 시간을 1부터 끝까지 훑으면서 할당하는 것
// 다만, 더 이상 후보군이 없을 때는 기록이 있는 지점부터 다시 시작
// -> 이렇게 안하면 구간 클 경우 TLE

// 과정을 다시 요약하면 아래와 같다. (time에 대한 sliding window 기법)
// 1. 가장 r_i가 작은 시간 작업부터 시작
// 1-1. r_i와 같은 시간에 시작하는 작업들은 모두 pq에 넣는다.
// 2. 그 중 d_i가 가장 짧은 녀석부터 시간을 1씩 증가시켜가면서 실제로 할당한다.
// 2-1. 할당할 때 한번에 다 하는게 아니라, 현재 시간에 1개만 할당하고, 다음 시간을 연속해서 보면서 할당한다.
// 3. 만약 보려는 녀석이 이미 보고있는 시간대를 지나갔다면 버린다.
map<ll, priority_queue<ll, vector<ll>, greater<>>> M;
void solve() {
    FOR(i,0,N) {
        ll a, b; scanf("%lld %lld", &a, &b);
        b += a;
        if (M.find(a) == M.end()) M[a] = {};
        M[a].push(b);
    }
    int ans = 0;
    // unit time: 1임
    ll ctime = 0;
    priority_queue<ll, vector<ll>, greater<>> gpq;

    auto it = M.begin();
    for(ll ctime = 1; ; ++ctime) { // 시간을 증가시켜가면서 본다.
        if (gpq.size() == 0) {
            // 아무것도 없으니 내맘대로 시간을 맞춘다~
            if (it == M.end()) break;
            auto& cur = *it;
            ctime = cur.first;
            ++it;
        }
        if (M.find(ctime) != M.end()) {
            it = M.find(ctime);
            auto& cur = *it;
            auto& pq = cur.second;
            while(pq.size()) gpq.push(pq.top()), pq.pop();
            ++it;
        }
        // 유효하지 않은 gpq 값을 꺼낸다.
        while (gpq.size() && gpq.top() < ctime) gpq.pop();
        // pq에서 가장 작은거 하나 꺼내서 쓴다.
        if (gpq.size()) {
            gpq.pop();
            ++ans;
        }
    }
    printf("%d\\n", ans);
}
`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["두 경우 모두 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"N"}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(N\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),i(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,e(o,{})]})}function d(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e(n,Object.assign({},t,{children:e(a,t)})):a(t)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=r;l.main=p;export{l as default};
