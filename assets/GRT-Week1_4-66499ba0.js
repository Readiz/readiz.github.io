import{p as r}from"./GRT-Week1_4_-85dca146.js";import{u as l,j as e,a as t,F as c}from"./ssg-client-4bb7898c.js";import{C as s}from"./Comment-5ebdb63d.js";import{H as m}from"./Header-2991b7b7.js";import{T as h}from"./TagList-f742cef8.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function a(i){const n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",annotation:"annotation",pre:"pre"},l(),i.components);return t(c,{children:[e(m,{}),`
`,e(n.h2,{id:"구름톤-챌린지란",children:"구름톤 챌린지란?"}),`
`,t(n.p,{children:[e(n.code,{children:"구름"})," 이라는 곳에서 문제 풀이 챌린지(구름톤 챌린지)를 한다고 해서 참여 중이다. 이벤트 기간 동안 문제가 꾸준이 올라오며, 주에 2회씩 (혹은 그 이상) 챌린지 문제들에 대해 풀이가 가능한 문제들을 풀이해보고, 후기를 남겨보려고 한다."]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["문제 푸는 곳: ",e(n.a,{href:"https://level.goorm.io/l/challenge/goormthon-challenge",children:"https://level.goorm.io/l/challenge/goormthon-challenge"})]}),`
`,t(n.li,{children:["학습 일기 작성 가이드: ",e(n.a,{href:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8",children:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8"})]}),`
`,t(n.li,{children:["풀이 사용 컨테이너(구름 컨테이너): ",e(n.a,{href:"https://goor.me/8jsC9vbx5TCeaCcRA",children:"https://goor.me/8jsC9vbx5TCeaCcRA"})]}),`
`]}),`
`,e(n.h2,{id:"문제-풀이",children:"문제 풀이"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"문제 제목: 완벽한 햄버거 만들기"}),`
`,t(n.li,{children:["문제 링크: ",e(n.a,{href:"https://level.goorm.io/exam/195686/%EC%99%84%EB%B2%BD%ED%95%9C-%ED%96%84%EB%B2%84%EA%B1%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0/quiz/1",children:"https://level.goorm.io/exam/195686/%EC%99%84%EB%B2%BD%ED%95%9C-%ED%96%84%EB%B2%84%EA%B1%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0/quiz/1"})]}),`
`]}),`
`,e(n.h3,{id:"풀이-접근",children:"풀이 접근"}),`
`,t(n.p,{children:["이 문제의 경우 사람이 ",e(n.code,{children:"완벽한 햄버거"})," 를 판정한다면 어떻게 할 수 있을지 생각해보면 쉽다. 우선, 최대값을 찾는다. 그리고, 최대값 좌/우측으로 그 값보다 같거나 작은 값이 계속해서 나와야 한다는 사실을 관찰할 수 있다."]}),`
`,t(n.p,{children:["즉, ",e(n.code,{children:"투 포인터"})," 를 사용하는 느낌으로 풀면 되는 문제이며, 시간복잡도는 ",e(n.span,{className:"math math-inline",children:t(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:t(n.semantics,{children:[t(n.mrow,{children:[e(n.mi,{children:"O"}),e(n.mo,{stretchy:"false",children:"("}),e(n.mi,{children:"N"}),e(n.mo,{stretchy:"false",children:")"})]}),e(n.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:t(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),e(n.span,{className:"mopen",children:"("}),e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"mclose",children:")"})]})})]})}),"이 된다. 아직 ",e(n.code,{children:"Python"}),"이 익숙하지 않기 때문에 이 문제는 기존처럼 ",e(n.code,{children:"C++"}),"로 풀이해보았다."]}),`
`,e(n.h3,{id:"샘플-정답-코드",children:"샘플 정답 코드"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;
int main() {
	int N; scanf("%d", &N);
	vector<int> A;
	int maxval = 0;
	int maxpos = -1;
	int sum = 0;
	for(int i = 0; i < N; ++i) {
		int tmp; scanf("%d", &tmp);
		A.push_back(tmp);
		sum += tmp;
		if (tmp > maxval) {
			maxpos = i;
			maxval = tmp;
		}
	}
	bool flag = true;
	for(int i = maxpos; i >= 1; --i) {
		if (A[i - 1] <= A[i]) continue;
		flag = false;
	}
	for(int i = maxpos; i < N - 1; ++i) {
		if (A[i] >= A[i + 1]) continue;
		flag = false;
	}
	if (flag) {
		printf("%d\\n", sum);
	} else {
		printf("0\\n");
	}
	return 0;
}
`})}),`
`,e(h,{}),`
`,e(s,{})]})}function d(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e(n,Object.assign({},i,{children:e(a,i)})):a(i)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=r;o.main=p;export{o as default};
