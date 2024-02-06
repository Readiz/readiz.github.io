import{p as h}from"./ABC-329_-ba53834d.js";import{u as s,j as n,a as t,F as o}from"./ssg-client-7a654c7b.js";import{C as m}from"./Comment-2d449b8a.js";import{H as p}from"./Header-31f4d24d.js";import{T as g}from"./TagList-87a27fe9.js";import{I as b}from"./Image-12f4db1c.js";import{D as u}from"./Details-16cb47b8.js";import"./katex.min-4ed993c7.js";import{S as c,T as r}from"./SolvedTier-e636e1b2.js";import{A as l}from"./AtCoderResult-83d5ec9e.js";import"./index.module-caf545e8.js";function a(i){const e=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",code:"code",h2:"h2",pre:"pre",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation"},s(),i.components);return t(o,{children:[n(p,{}),`
`,n(e.h1,{id:"abc-329-upsolving",children:"ABC 329 Upsolving"}),`
`,n(b,{src:"2023-11-18-23-31-56.png"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"대회 참가 유무: Y"}),`
`,t(e.li,{children:["최종 Performance: ",n("span",{style:{color:"#00C0C0"},children:"1225"})," (Rank: 1757 / 10234)"]}),`
`,t(e.li,{children:["Round 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc329",children:"Top"})," / ",n(e.a,{href:"https://atcoder.jp/contests/abc329/tasks",children:"Tasks"})]}),`
`,n(e.li,{children:"문제별 결과"}),`
`]}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{align:"center",children:"A"}),n(e.th,{align:"center",children:"B"}),n(e.th,{align:"center",children:"C"}),n(e.th,{align:"center",children:"D"}),n(e.th,{align:"center",children:"E"}),n(e.th,{align:"center",children:"F"}),n(e.th,{align:"center",children:"G"})]})}),n(e.tbody,{children:t(e.tr,{children:[n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:"-"}),n(e.td,{align:"center",children:n(l,{state:"AC"})}),n(e.td,{align:"center",children:"-"})]})})]}),`
`,t(e.p,{children:[n(e.code,{children:"F"}),"에서 ",n(e.code,{children:"unique"})," 사용 관련 삽질을 했고, ",n(e.code,{children:"E"}),"를 못풀어서 아쉬웠다. 만약 ",n(e.code,{children:"F"}),"까지 빠르게 풀었으면 옐로우 퍼포도 나오는 셋이었다."]}),`
`,n(e.h2,{id:"a---spread",children:"A - Spread"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc329/tasks/abc329_a",children:"https://atcoder.jp/contests/abc329/tasks/abc329_a"})]}),`
`,n(e.li,{children:"Score: 100점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:r.Bronze,grade:5,width:15})]}),`
`]}),`
`,n(e.p,{children:"문자열 사이에 띄어쓰기를 하는 문제다."}),`
`,n(e.h2,{id:"b---next",children:"B - Next"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc329/tasks/abc329_b",children:"https://atcoder.jp/contests/abc329/tasks/abc329_b"})]}),`
`,n(e.li,{children:"Score: 200점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:r.Silver,grade:5,width:15})]}),`
`]}),`
`,t(e.p,{children:["가장 큰 수보다 하나 작은 수를 구하는 문제. ",n(e.code,{children:"set"}),"을 써서 맨 뒤 바로 앞 원소를 출력해주면 된다."]}),`
`,n(e.h2,{id:"c---count-xxx",children:"C - Count xxx"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc329/tasks/abc329_c",children:"https://atcoder.jp/contests/abc329/tasks/abc329_c"})]}),`
`,n(e.li,{children:"Score: 300점"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:r.Silver,grade:1,width:15})]}),`
`]}),`
`,t(e.p,{children:["문제를 읽다가 이거 너무 난이도 있는게 ",n(e.code,{children:"C"}),"에 나온게 아닌가? 하다가 자세히 보니까 그냥 연속된 문자열의 개수를 세는 문제였다. ",n(e.code,{children:"map"}),"으로 관리해주면 쉽게 풀 수 있다."]}),`
`,n(e.h2,{id:"d---election-quick-report",children:"D - Election Quick Report"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc329/tasks/abc329_d",children:"https://atcoder.jp/contests/abc329/tasks/abc329_d"})]}),`
`,n(e.li,{children:"Score: 350"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:r.Gold,grade:5,width:15})]}),`
`]}),`
`,t(e.p,{children:[n(e.code,{children:"pq"}),"를 사용하면 쉽게 풀 수 있는 문제이다. 아래 백준 문제와 유사하다."]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["국회의원 선거 문제: ",n(e.a,{href:"https://www.acmicpc.net/problem/1417",children:"https://www.acmicpc.net/problem/1417"})]}),`
`]}),`
`,n(e.h2,{id:"e---stamp-to-be-upsolved",children:"E - Stamp (To be upsolved...)"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc329/tasks/abc329_e",children:"https://atcoder.jp/contests/abc329/tasks/abc329_e"})]}),`
`,n(e.li,{children:"Score: 475"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:r.Gold,grade:1,width:15})]}),`
`]}),`
`,t(e.p,{children:["문자열의 ",n(e.code,{children:"prefix"}),"와 ",n(e.code,{children:"suffix"}),"의 모드를 나눠서 풀어보려고 했는데 잘 안됐다. 다시 풀어볼 예정."]}),`
`,n(e.h2,{id:"f---colored-ball",children:"F - Colored Ball"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["문제 링크: ",n(e.a,{href:"https://atcoder.jp/contests/abc329/tasks/abc329_f",children:"https://atcoder.jp/contests/abc329/tasks/abc329_f"})]}),`
`,n(e.li,{children:"Score: 500"}),`
`,t(e.li,{children:["문제 예상 티어: ",n(c,{tierName:r.Gold,grade:2,width:15})]}),`
`]}),`
`,t(e.p,{children:[n(e.code,{children:"bitset"}),"으로 풀 수 있는데, ",n(e.code,{children:"small to large"}),"가 정해라고 한다. 나는 ",n(e.code,{children:"bitset"}),"으로 풀었다."]}),`
`,t(e.p,{children:["다만 모든 상자에 대해 ",n(e.code,{children:"bitset"}),"을 만들면 메모리 초과가 나게 된다. 이를 방지하기 위해서는 특정 사이즈 이상이 될 때 ",n(e.code,{children:"bitset"}),"으로 전환하도록 하면 된다."]}),`
`,t(e.p,{children:["이 과정에서 이제 ",n(e.code,{children:"vector"})," -> ",n(e.code,{children:"bitset"}),"으로 전환되는데, stack을 사용해서 사용되지 않는 ",n(e.code,{children:"bitset"}),"은 꾸준히 지워주면서 할당하면 풀이가 가능하다. 대충 아래와 같은 느낌으로 할당했다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`vector<bitset<200001>> bs(20000);
vector<int> s[200010];
stack<int> deleted;
int bsCnt;

int newBs() {
    if (deleted.size() == 0) {
        if (bsCnt >= 20000) assert("MEM OVERFLOW!");
        return bsCnt++;
    }
    int ret = deleted.top(); deleted.pop();
    bs[ret].reset();
    return ret;
}
`})}),`
`,t(e.p,{children:["그리고, ",n(e.code,{children:"vector"}),"의 ",n(e.code,{children:"unique"}),"를 사용해서 중복원소를 제거할 때는 ",n(e.code,{children:"sorted vector"}),"에서만 사용해야 함에 유의하자. 즉, ",n(e.code,{children:"unique"}),"는 아래처럼 사용하는게 정석이다. 이걸 놓쳐서 6번 틀렸다.."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`sort(v.begin(), v.end());
v.erase(unique(v.begin(), v.end()), v.end());
`})}),`
`,t(e.p,{children:["마지막으로 ",n(e.code,{children:"bitset"}),"의 대표 ",n(e.code,{children:"method"}),"를 정리한다."]}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"reset(): 전체 bit를 0으로"}),`
`,n(e.li,{children:"set(i): i번째 비트를 켠다."}),`
`,n(e.li,{children:"flip(i): i번째 비트를 뒤집는다. (인자가 없으면 전체를 뒤집는다)"}),`
`,n(e.li,{children:"count(): 1로 세팅된 녀석들의 개수를 반환한다."}),`
`,n(e.li,{children:"a |= b: a에 b를 or해서 저장한다."}),`
`]}),`
`,t(e.p,{children:["Editorial을 확인해보면, 공이 이동하게 되면 결과적으로 2배 이상의 ",n(e.code,{children:"size"}),"로 할당되게 되므로, 한 쿼리가 ",n(e.span,{className:"math math-inline",children:t(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:t(e.semantics,{children:[t(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(\\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:t(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),t(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})}),"에 수행이 되는 꼴이라고 한다. 그래서 ",n(e.code,{children:"swap"}),"이나 ",n(e.code,{children:"move"}),"를 쓰면, ",n(e.span,{className:"math math-inline",children:t(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:t(e.semantics,{children:[t(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"N"}),n(e.mi,{children:"log"}),n(e.mo,{children:"⁡"}),n(e.mi,{children:"N"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(N \\log N)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:t(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),t(e.span,{className:"mop",children:["lo",n(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),n(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mclose",children:")"})]})})]})}),"에 해결이 되는 모양이다. 아래가 정해. STL로 가능하게 되는 것이고, 상시 숭배 해야한다."]}),`
`,n(u,{children:n(e.pre,{children:n(e.code,{className:"language-cpp",children:`#include <iostream>
#include <vector>
#include <set>
using namespace std;
int main() {
	int n, q;
	cin >> n >> q;
	vector<set<int>> st(n);
	for (int i = 0; i < n; i++) {
		int c;
		cin >> c;
		st[i].insert(c);
	}
	while (q--) {
		int a, b;
		cin >> a >> b;
		a--; b--;
		if (st[a].size() < st[b].size()) {
			for (int i : st[a]) st[b].insert(i);
			st[a].clear();
			cout << st[b].size() << '\\n';
		}
		else {
			for (int i : st[b]) st[a].insert(i);
			st[b].clear();
			cout << st[a].size() << '\\n';
			swap(st[a], st[b]);
		}
	}
}
`})})}),`
`,n(e.h2,{id:"g",children:"G"}),`
`,n(e.p,{children:"Skip"}),`
`,n(g,{}),`
`,n(m,{})]})}function N(i={}){const{wrapper:e}=Object.assign({},s(),i.components);return e?n(e,Object.assign({},i,{children:n(a,i)})):a(i)}const f=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=h;d.main=f;export{d as default};
