import{p as c}from"./GRT-Week1_3_-85dca146.js";import{u as i,j as n,a as o,F as h}from"./ssg-client-ddf41fd2.js";import{C as d}from"./Comment-32c62d4f.js";import{H as a}from"./Header-e3502f94.js";import{T as s}from"./TagList-2b52766c.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function t(r){const e=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre"},i(),r.components);return o(h,{children:[n(a,{}),`
`,n(e.h2,{id:"구름톤-챌린지란",children:"구름톤 챌린지란?"}),`
`,o(e.p,{children:[n(e.code,{children:"구름"})," 이라는 곳에서 문제 풀이 챌린지(구름톤 챌린지)를 한다고 해서 참여 중이다. 이벤트 기간 동안 문제가 꾸준이 올라오며, 주에 2회씩 (혹은 그 이상) 챌린지 문제들에 대해 풀이가 가능한 문제들을 풀이해보고, 후기를 남겨보려고 한다."]}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:["문제 푸는 곳: ",n(e.a,{href:"https://level.goorm.io/l/challenge/goormthon-challenge",children:"https://level.goorm.io/l/challenge/goormthon-challenge"})]}),`
`,o(e.li,{children:["학습 일기 작성 가이드: ",n(e.a,{href:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8",children:"https://goorm.notion.site/5ad9e8eef00f4c19b083572c2000d7f8"})]}),`
`,o(e.li,{children:["풀이 사용 컨테이너(구름 컨테이너): ",n(e.a,{href:"https://goor.me/8jsC9vbx5TCeaCcRA",children:"https://goor.me/8jsC9vbx5TCeaCcRA"})]}),`
`]}),`
`,n(e.h2,{id:"문제-풀이",children:"문제 풀이"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"문제 제목: 합 계산기"}),`
`,o(e.li,{children:["문제 링크: ",n(e.a,{href:"https://level.goorm.io/exam/195685/%ED%95%A9-%EA%B3%84%EC%82%B0%EA%B8%B0/quiz/1",children:"https://level.goorm.io/exam/195685/%ED%95%A9-%EA%B3%84%EC%82%B0%EA%B8%B0/quiz/1"})]}),`
`]}),`
`,n(e.h3,{id:"풀이-접근",children:"풀이 접근"}),`
`,o(e.p,{children:["이 문제의 경우는 조금 복잡해 보이지만, 결국 구현 문제이다. 그리고, ",n(e.code,{children:"Python"}),"에 내장된 ",n(e.code,{children:"eval"}),"을 활용하면, 생각보다 쉽게 구현이 가능하다."]}),`
`,o(e.p,{children:["명령어 수 N을 입력으로 받은 뒤, ",n(e.code,{children:"eval"})," 함수를 통해, row 별로 계산 값을 구한다. 그리고 그 값이 소수가 되면 안되므로 ",n(e.code,{children:"int"})," 형으로 변환한 뒤 합을 계속 계산하면 된다."]}),`
`,n(e.h3,{id:"샘플-정답-코드",children:"샘플 정답 코드"}),`
`,n(e.pre,{children:n(e.code,{className:"language-python",children:`N=int(input())
sum=0
for _ in range(N):
	cur=int(eval(input()))
	sum+=cur
print(sum)
`})}),`
`,n(s,{}),`
`,n(d,{})]})}function m(r={}){const{wrapper:e}=Object.assign({},i(),r.components);return e?n(e,Object.assign({},r,{children:n(t,r)})):t(r)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=c;l.main=p;export{l as default};
