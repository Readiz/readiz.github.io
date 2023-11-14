import{p as l}from"./JobScheduling_-1ecd0a17.js";import{u as r,j as e,a as i,F as s}from"./ssg-client-33090923.js";import{I as o}from"./Image-ff55ea8a.js";import{C as p}from"./Comment-34b6eede.js";import"./index.module-caf545e8.js";import{H as d}from"./Header-97514541.js";import"./katex.min-4ed993c7.js";function c(t){const n=Object.assign({h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},r(),t.components);return i(s,{children:[e(d,{}),`
`,e(n.h2,{id:"job-scheduling",children:"Job Scheduling"}),`
`,e(n.p,{children:"이 유형은 문제에서 주어진 조건에 따라 풀이 방법이 매우 다양하게 나뉠 수 있다."}),`
`,e(n.h3,{id:"작업-배정을-할지-안할지만-결정",children:"작업 배정을 할지 안할지만 결정"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["회의실 배정 문제: ",e(n.a,{href:"https://www.acmicpc.net/problem/1931",children:"https://www.acmicpc.net/problem/1931"})]}),`
`,i(n.li,{children:["가젤 님의 관련 티스토리 글 (+ 아래 사진 출처): ",e(n.a,{href:"https://gazelle-and-cs.tistory.com/59",children:"https://gazelle-and-cs.tistory.com/59"})]}),`
`]}),`
`,e(o,{src:"meeting_assign.gif"}),`
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

void solve(vector<Meeting>& v) {
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
}
`})}),`
`,e(n.h3,{id:"작업-끝시간deadline과-수행하는-데-걸리는-시간t가-주어진-경우",children:"작업 끝시간(Deadline)과 수행하는 데 걸리는 시간(T)가 주어진 경우"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"Backward Scheduling 하면 풀리는 유형"}),`
`,i(n.li,{children:["시간 관리 문제: ",e(n.a,{href:"https://www.acmicpc.net/problem/1263",children:"https://www.acmicpc.net/problem/1263"})]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct Job {
    int t;
    int d; // deadline
    bool operator<(const Job& t) const {
        if (d != t.d) return d > t.d;
        return this->t < t.t;
    }
};

void solve(vector<Job>& v) {
    sort(v.begin(), v.end());

    int ctime = v[0].d - v[0].t;
    for(int i = 1; i < v.size(); ++i) {
        ctime = min(ctime, v[i].d); // backward scheduling
        ctime -= v[i].t;
    }
    if (ctime < 0) printf("-1\\n");
    else printf("%d\\n", ctime);
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
void solve(map<ll, priority_queue<ll, vector<ll>, greater<>>>& M) {
    // M[a] = {1, 2, 3} - a 시간에 시작하는 일이 1, 2, 3에 끝나는 3가지가 있다.
    int ans = 0;
    // unit time: 1임
    ll ctime = 0;
    priority_queue<ll, vector<ll>, greater<>> gpq; // global pq

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
`,e(n.h3,{id:"release-time-deadline-이-존재하며-주어진-특정-시간에만-작업을-수행하는-유형",children:"Release Time, Deadline 이 존재하며, 주어진 특정 시간에만 작업을 수행하는 유형"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["소가 길을 건너간 이유 4 문제: ",e(n.a,{href:"https://www.acmicpc.net/problem/14464",children:"https://www.acmicpc.net/problem/14464"})]}),`
`,i(n.li,{children:["위 유형의 열화판.",`
`,i(n.ul,{children:[`
`,e(n.li,{children:"Release Time이 빠른 녀석부터 보면서 Deadline을 PQ에 저장하는 것까지는 똑같은데, 특정 시간에만 작업잉 수행이 가능하다는 것은 특정 시간만 보면 된다는 의미이고, 특정 시간을 순회하면서 체크하면 된다."}),`
`]}),`
`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`void solve(vector<int>& chicken, vector<pair<int,int>>& cow, int N, int M) {
    sort(cow.begin(), cow.end());
    sort(chicken.begin(), chicken.end());

    // deadline을 순서대로 넣자. 현재 유효한 녀석들만 들어가 있게 된다.
    priority_queue<int, vector<int>, greater<>> pq;
    int cowPtr = 0;
    int ans = 0;
    
    for(auto& c: chicken) {
        int cur = c; // 현재 보는 chicken의 T_i
        for(; cowPtr < M; ++cowPtr) {
            if (cow[cowPtr].y < cur) continue; // 버린다. 이미 다 지나갔다.
            if (cow[cowPtr].x <= cur && cur <= cow[cowPtr].y) {
                pq.push(cow[cowPtr].y); // deadline 순서로 정렬하는 pq에 넣기.
            } else {
                // 앞으로 쓸 녀석들을 만났다. 더이상 pq에 넣지않고 종료
                break;
            }
        }
        while(pq.size() && pq.top() < cur) pq.pop(); // 유효하지 않은것 버리기
        if (pq.size()) {
            // printf("[d] deadline: %d / chicken: %d matched!\\n", pq.top(), cur);
            pq.pop();
            ++ans;
        }
    }   
    printf("%d\\n", ans);
}
`})}),`
`,e(n.h3,{id:"전부-할당해야할-때-필요한-최소-기계의-수를-계산하는-유형",children:"전부 할당해야할 때 필요한 최소 기계의 수를 계산하는 유형"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["강의실 배정 문제: ",e(n.a,{href:"https://www.acmicpc.net/problem/11000",children:"https://www.acmicpc.net/problem/11000"})]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct Range {
    int l, r;
    bool operator<(const Range& t) {
        if (l != t.l) return l < t.l;
        return r < t.r;
    }
};

void solve(vector<Range>& v) {
    sort(v.begin(), v.end()); // 빨리 시작하는 순서대로 정렬

    priority_queue<int, vector<int>, greater<>> pq;
    for(auto& item: v) {
        if (pq.size() == 0) {
            pq.push(item.r);
            continue;
        }
        if (item.l >= pq.top()) { // 일단 들어갈 수 있다.
            pq.pop();
            pq.push(item.r); // 기존 녀석을 대체
        } else { // 못들어가는 case이다. (현재 가장 빨리 끝나는 녀석보다도 시작이 빠름)
            pq.push(item.r);
        }
    }

    printf("%ld\\n", pq.size());
}
`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["우선 순위 큐 베이스 알고리즘이기 때문에 모두 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"N"}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(N\\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),i(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})})]}),`
`]}),`
`,e(p,{})]})}function m(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e(n,Object.assign({},t,{children:e(c,t)})):c(t)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=l;a.main=h;export{a as default};
