import{p as a}from"./PBDS Set_-1dcd4a86.js";import{u as c,j as e,a as i,F as s}from"./ssg-client-ae62b375.js";import{C as l}from"./Comment-bf1ea134.js";import{T as o}from"./TagList-c5ecfb24.js";import{H as h}from"./Header-2cd2f348.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function t(r){const n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",pre:"pre"},c(),r.components);return i(s,{children:[e(h,{}),`
`,i(n.p,{children:[e(n.code,{children:"PBDS Set"}),"에 관한 간단한 정리. 알게 되었는데 정리 안하면 나중에 다시 맨땅에서 구글링 해야하므로 한번 알게 된 내용 정리하고 가보려고 한다."]}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["gnu official design manual: ",e(n.a,{href:"http://gcc.gnu.org/onlinedocs/libstdc++/manual/policy_data_structures_design.html",children:"http://gcc.gnu.org/onlinedocs/libstdc++/manual/policy_data_structures_design.html"})]}),`
`,i(n.li,{children:["관련 Codeforces 글: ",e(n.a,{href:"https://codeforces.com/blog/entry/11080",children:"https://codeforces.com/blog/entry/11080"})]}),`
`]}),`
`,e(n.h2,{id:"pbds-set",children:"PBDS Set?"}),`
`,i(n.p,{children:["PBDS는 Policy based data structures의 약자로, ",e(n.code,{children:"g++"}),"에서 ",e(n.code,{children:"ext/pb_ds"})," 아래에 위치하는 데이터 구조를 칭한다. (VS에서는 사용이 어려울 듯) 보통 ",e(n.code,{children:"PS"}),"에서 이것을 사용하는 의의 중 하나는 기존 ",e(n.code,{children:"STL Set"}),"에서 지원하지 않는 ",e(n.code,{children:"K"}),"번째 크기가 큰(또는 작은) 원소를 빠르게 찾을 수 있게 하는 데이터 구조를 사용하기 위해 사용하는 것이다."]}),`
`,e(n.h3,{id:"사용-방법",children:"사용 방법"}),`
`,i(n.p,{children:["일반 ",e(n.code,{children:"set"}),"을 사용하는 느낌으로 사용할 수 있게 ",e(n.code,{children:"define"}),"해서 사용한다. 글 하단에 예시가 있다. 여기서는 ",e(n.code,{children:"ordered_set"}),"으로 사용한다."]}),`
`,i(n.p,{children:["일반 ",e(n.code,{children:"set"}),"에서 사용되는 ",e(n.code,{children:"method"}),"를 사용함과 더불어(심지어 ",e(n.code,{children:"iterator"}),"도 사용가능함을 확인했다) 추가로 사용되는 ",e(n.code,{children:"method"}),"는 ",e(n.code,{children:"find_by_order(k)"}),"와 ",e(n.code,{children:"order_of_key(key)"}),"이다. 이름 그대로, ",e(n.code,{children:"k"}),"번째 원소를 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),i(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})})," 에 찾을 수 있게 하거나, ",e(n.code,{children:"key"}),"값을 주었을 때 그것이 몇번째 원소인지를 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),i(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})}),"에 알게 해준다. 일반 ",e(n.code,{children:"set"}),"에서 같은 일을 할 수 있으려면 ",e(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"n"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",children:"n"}),e(n.span,{className:"mclose",children:")"})]})})]})}),"의 시간복잡도였던 것을 감안하면 큰 차이이다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`ordered_set X;
X.insert(1);
X.insert(2);
X.insert(4);
X.insert(8);
X.insert(16);

cout<<*X.find_by_order(1)<<endl; // 2
cout<<*X.find_by_order(2)<<endl; // 4
cout<<*X.find_by_order(4)<<endl; // 16
cout<<(end(X)==X.find_by_order(6))<<endl; // true

cout<<X.order_of_key(-5)<<endl;  // 0
cout<<X.order_of_key(1)<<endl;   // 0
cout<<X.order_of_key(3)<<endl;   // 2
cout<<X.order_of_key(4)<<endl;   // 2
cout<<X.order_of_key(400)<<endl; // 5
`})}),`
`,e(n.h3,{id:"ps-사용-예시",children:"PS 사용 예시"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,i(n.p,{children:["BOJ 3653: ",e(n.a,{href:"https://www.acmicpc.net/problem/3653",children:"https://www.acmicpc.net/problem/3653"})]}),`
`]}),`
`,i(n.li,{children:[`
`,e(n.p,{children:"선언부"}),`
`]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;

struct Node {
    int priority; // 높을수록 위쪽에
    int id;
    bool operator<(const Node& t) const {
        if (priority != t.priority) return priority < t.priority;
        return id < t.id;
    }
    bool operator>(const Node& t) const {
        return t < *this;
    }
};
#define ordered_set tree<Node, null_type, less<Node>, rb_tree_tag,tree_order_statistics_node_update>
`})}),`
`,i(n.p,{children:["여기서 사용한 구현체는 ",e(n.code,{children:"rb_tree"}),"이다. 그런데, 좀 찾아보니 이 구현체를 ",e(n.code,{children:"splay_tree"})," 등으로도 바꿀 수 있는거 같다. 시간 제한이 빡빡하다면 이런 구현체를 바꿔가면서 테스트해봐도 좋을 듯."]}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"풀이 사용"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`void solve() {
    ordered_set S;
    unordered_map<int, ordered_set::point_iterator> M;

    int N, CASE; scanf("%d %d", &N, &CASE);
    for(int i = 1; i <= N; ++i) {
        auto res = S.insert({N - i + 1, i});
        auto it = res.first;
        M.emplace(i, it);
    }

    // for(auto& it: S) {
    //     printf("(%d, %d)\\n", it.priority, it.id);
    // }

    int priority = N + 1;

    for(int i = 0; i < CASE; ++i) {
        int c; scanf("%d", &c);
        auto mit = M.find(c);
        auto sit = mit->second;
        M.erase(mit);
        // 아래 부분이 몇 번째 원소인지 빠르게 찾는 부분이다. 일반 set에는 없는 method
        int cdist = S.order_of_key(*sit); //distance(sit, S.end());
        int cid = sit->id;
        S.erase(sit);
        auto res = S.insert({priority, cid});
        auto it = res.first;
        priority++;
        M.emplace(cid, it);
        printf("%d ", N - cdist - 1);
    }
    printf("\\n");
}
`})}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["BOJ 1572: ",e(n.a,{href:"https://www.acmicpc.net/problem/1572",children:"https://www.acmicpc.net/problem/1572"})]}),`
`]}),`
`,e(n.p,{children:"이 문제의 경우 딱 읽기만 해도 Ordered Set이 사용되면 편하게 풀 수 있겠다는 생각이 든다. 슬라이딩 윈도우 기법으로 원소를 넣고 빼다가, (K - 1) / 2 번째 원소를 빠르게 찾을 수 있기만 하면 쉽게 구현이 되는 문제이다."}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"선언부"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;

struct Node {
    int degree;
    int id;
    bool operator<(const Node& t) const {
        if (degree != t.degree) return degree < t.degree;
        return id < t.id;
    }
    bool operator>(const Node& t) const {
        return t < *this;
    }
};
#define ordered_set tree<Node, null_type, less<Node>, rb_tree_tag,tree_order_statistics_node_update>

ordered_set v;
`})}),`
`,e(n.p,{children:"id의 경우 중복값 처리를 위해 존재한다. (중복되서 사라지는 것을 방지)"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:"로직 작성"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int A[250000];
int main() {
    int N, K; scanf("%d %d", &N, &K);
    for(int i = 0; i < N; ++i) scanf("%d", &A[i]);
    int cur = 0;
    for(int i = 0; i < K; ++i) {
        v.insert({A[i], i});
    }
    int mid = (K - 1) / 2;
    long long ans = v.find_by_order(mid)->degree;

    int l = 0;
    int r = K;
    for(; r < N; ++r, ++l) {
        v.insert({A[r], r});
        v.erase(v.find({A[l], l}));
        ans += v.find_by_order(mid)->degree;
    }
    printf("%lld\\n", ans);
    return 0;
}
`})}),`
`,e(o,{}),`
`,e(l,{})]})}function m(r={}){const{wrapper:n}=Object.assign({},c(),r.components);return n?e(n,Object.assign({},r,{children:e(t,r)})):t(r)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=a;d.main=p;export{d as default};
