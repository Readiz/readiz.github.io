import{p as o}from"./CodeAnalysis_-bd7d2ca8.js";import{u as r,j as n,a as e,F as c}from"./ssg-client-b7aa05df.js";import{H as d}from"./Header-4601c048.js";import{C as m}from"./Comment-304983f9.js";import{T as h}from"./TagList-8a66836c.js";import"./index.module-caf545e8.js";function s(t){const i=Object.assign({h2:"h2",h3:"h3",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},r(),t.components);return e(c,{children:[n(d,{}),`
`,n(i.h2,{id:"랜덤-코드-분석하기",children:"랜덤 코드 분석하기"}),`
`,n(i.h3,{id:"puzzle-game",children:"Puzzle Game"}),`
`,n(i.p,{children:"문제 개요: 5개로 된 stack이 들어옴, 두가지 method가 존재함"}),`
`,e(i.ul,{children:[`
`,n(i.li,{children:"addToRight: 오른쪽에 stack을 붙임"}),`
`,n(i.li,{children:"matchStack: stack을 뒤집어서 맞춰지는 부분이 있는 곳이 있는지 확인. 맞춘 stack은 사라진다."}),`
`]}),`
`,n(i.pre,{children:n(i.code,{className:"language-cpp",children:`const int RA = (1<<20) - 1;
int HL, H[120020], hash[120020];
int spos[1<<20], visited[1<<20], mrk, ce;
 
void reset() {
    HL = 0;
    ++mrk, ce = 0;
}

// cur을 Hash에 추가한다.
void append(int cur) {
    if(HL) {
        int prev = hash[HL - 1];
        hash[HL] = (prev << 5 | (cur - prev + 10)) & RA; // 해시값 만들기 (해시가 아니었다!?)
        // 해시값 생성 로직이 동작하는 이유
        // 1) cur - prev는 최대 -10 ~ 10이 될 수 있다.
        // 2) 여기에 10을 더하면 최대 20
        // 3) bit로 전환하면 5비트 안에 들어감
        // 4) 총 블록수는 5개, 차이를 보므로 4개를 보면 됨
        // 5) 즉, 총 20bit
        // 6) 20bit는 메모리 범위로 환산하면 2^20 이고, 어림잡아 1MB가 됨 (2^10 = 1KB)
        if(HL >= 4) {
            visited[hash[HL]] = mrk; // visited 체크용, 신규로 매칭이 가능하다는 표시
            spos[hash[HL]] = ++ce; // 5개짜리 시작 위치 저장
        }
    }
    H[HL++] = cur;
}
 
void addToRight(int mStack[]) {
    for(int i = 0; i < 5; i++) {
        append(mStack[i]);
    }
}
 
int matchStack(int mStack[]) {
    int v = 0;
    for(int i = 3; i >= 0; i--) {
        v = v << 5 | (mStack[i + 1] - mStack[i] + 10); // 해시값 만들기 (해시가 아니었다!?)
    }
    if(visited[v] != mrk) return -1; // 여기까지 이미 매칭은 판단이 완료 됨

    // 이 아래는 매칭이 완료되었단 것 전제로, 매칭된 부분을 제거하는 로직
    int ansPos = spos[v]; // 이게 답임
    int oldEnd = HL;
    HL = ansPos - 1;


    // Hash를 다시 구성한다. (생각보다 다시 구성하는데 시간이 길게 걸리지는 않는 듯)
    ++mrk;
    ce = 0;
    for(register int i = 4; i + 1 < ansPos; i++) {
        visited[hash[i]] = mrk;
        spos[hash[i]] = ++ce;
    }
    for(register int i = ansPos + 4; i < oldEnd; i++) {
        append(H[i]);
    }
    return x;
}
`})}),`
`,n(h,{}),`
`,n(m,{})]})}function p(t={}){const{wrapper:i}=Object.assign({},r(),t.components);return i?n(i,Object.assign({},t,{children:n(s,t)})):s(t)}const l=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=o;a.main=l;export{a as default};
