import{p as c}from"./GRT-Week1_5_-85dca146.js";import{u as a,j as e,a as t,F as o}from"./ssg-client-4446fb2b.js";import{C as s}from"./Comment-0afd32d2.js";import{H as m}from"./Header-b3e33d25.js";import{T as h}from"./TagList-cf75b9f4.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function l(i){const n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",ol:"ol",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",pre:"pre"},a(),i.components);return t(o,{children:[e(m,{}),`
`,e(n.h2,{id:"구름톤-챌린지란",children:"구름톤 챌린지란?"}),`
`,t(n.p,{children:[e(n.code,{children:"구름"})," 이라는 곳에서 문제 풀이 챌린지(구름톤 챌린지)를 한다고 해서 참여 중이다. 이벤트 기간 동안 문제가 꾸준이 올라오며, 주에 2회씩 (혹은 그 이상) 챌린지 문제들에 대해 풀이가 가능한 문제들을 풀이해보고, 후기를 남겨보려고 한다."]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["문제 푸는 곳: ",e(n.a,{href:"https://level.goorm.io/l/challenge/goormthon-challenge",children:"https://level.goorm.io/l/challenge/goormthon-challenge"})]}),`
`,t(n.li,{children:["학습 일기 작성 가이드: ",e(n.a,{href:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8",children:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8"})]}),`
`,t(n.li,{children:["풀이 사용 컨테이너(구름 컨테이너): ",e(n.a,{href:"https://goor.me/8jsC9vbx5TCeaCcRA",children:"https://goor.me/8jsC9vbx5TCeaCcRA"})]}),`
`]}),`
`,e(n.h2,{id:"문제-풀이",children:"문제 풀이"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 이진수 정렬"}),`
`,t(n.li,{children:["문제 링크: ",e(n.a,{href:"https://level.goorm.io/exam/195687/%EC%9D%B4%EC%A7%84%EC%88%98-%EC%A0%95%EB%A0%AC/quiz/1",children:"https://level.goorm.io/exam/195687/%EC%9D%B4%EC%A7%84%EC%88%98-%EC%A0%95%EB%A0%AC/quiz/1"})]}),`
`]}),`
`,e(n.h3,{id:"풀이-접근",children:"풀이 접근"}),`
`,t(n.p,{children:["이 문제는 단순 정렬을 구현하는 문제이다. 정렬 조건을 커스텀하기 위해, 구조체를 하나 만들어서 그 구조체의 ",e(n.code,{children:"operator"}),"를 ",e(n.code,{children:"overloading"})," 해서 구현하는 방법을 나는 주로 사용한다."]}),`
`,e(n.p,{children:"문제에서 정렬 조건은 두가지가 있으며, 1이 동일할 때 2를 적용한다."}),`
`,t(n.ol,{children:[`
`,e(n.li,{children:"수에 포함된 1의 수가 많은 순으로 내림차순 정렬"}),`
`,e(n.li,{children:"그 수 자체가 큰 순으로 내림차순 정렬"}),`
`]}),`
`,t(n.p,{children:["1의 구현은 ",e(n.code,{children:"gcc"}),"의 경우에 내장함수인 ",e(n.code,{children:"__builtin_popcount"}),"를 사용하면 된다. 정렬 뒤 K번째 원소를 출력하면 된다. 시간복잡도는 ",e(n.span,{className:"math math-inline",children:t(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:t(n.semantics,{children:[t(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"N"}),e(n.mi,{children:"log"}),e(n.mo,{children:"⁡"}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(N \\log N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:t(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),t(n.span,{className:"mop",children:["lo",e(n.span,{style:{marginRight:"0.01389em"},children:"g"})]}),e(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})}),"이 이다."]}),`
`,e(n.h3,{id:"샘플-정답-코드",children:"샘플 정답 코드"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;
struct Number {
	int v;
	bool operator<(const struct Number& t) const {
		if (__builtin_popcount(v) != __builtin_popcount(t.v))
			return __builtin_popcount(v) > __builtin_popcount(t.v);
		return v > t.v;
	}
};
int main() {
	int N, K; scanf("%d %d", &N, &K);
	vector<Number> A;
	for(int i = 0; i < N; ++i) {
		int tmp; scanf("%d", &tmp);
		A.push_back({tmp});
	}
	sort(A.begin(), A.end());
	printf("%d\\n", A[K - 1].v);
	return 0;
}
`})}),`
`,e(h,{}),`
`,e(s,{})]})}function d(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e(n,Object.assign({},i,{children:e(l,i)})):l(i)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=c;r.main=p;export{r as default};
