import{p as a}from"./Bitcnt_-94819c75.js";import{r as F,a as i,F as c,j as r,u as d}from"./ssg-client-5ec444fe.js";import{C as h}from"./Comment-5f174caf.js";import{H as v}from"./Header-4f3c1253.js";const p=e=>{const[n,s]=F.useState(!1);function o(){s(!n)}return i(c,{children:[r("div",{onClick:o,style:{fontWeight:700,cursor:"pointer"},children:n?"👆 닫기":"👉 펼치기"}),r("div",{style:{display:n?"block":"none"},children:e.children})]})};function t(e){const n=Object.assign({p:"p",code:"code",pre:"pre",h3:"h3",a:"a",h2:"h2"},d(),e.components);return i(c,{children:[r(v,{}),`
`,i(n.p,{children:["Bit count는 말 그대로 ",r(n.code,{children:"int"})," 나 ",r(n.code,{children:"long long"})," 등에 저장된 숫자가 2진법으로 1이 몇개가 켜져있는지를 세는 것을 말한다. 흔히 ",r(n.code,{children:"__builtin_popcount"}),"로 사용하지만, 직접 구현할 경우를 살펴본다."]}),`
`,i(n.p,{children:[r(n.code,{children:"__builtin_popcount"}),"란 gcc 내장 함수로, 아래와 같이 사용한다. (VS에서는 다른 함수가 있다)"]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`__builtin_popcount(v); // v는 int 형
`})}),`
`,i(n.p,{children:["만약 64bit의 bitcnt가 필요하다면, 뒤에 ll이 붙은 ",r(n.code,{children:"__builtin_popcountll"}),"을 사용한다."]}),`
`,r(n.h3,{id:"naive",children:"Naive"}),`
`,r(n.p,{children:"가장 Naive한 방법은 아래와 같다."}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`int bitcnt(unsigned int v) {\r
    int cnt = 0;\r
    for(int i = 0, mask = 0x1; i < 32; ++i, mask <<= 1) {\r
        if (v & mask) ++cnt;\r
    }\r
    return cnt;\r
}
`})}),`
`,r(n.h3,{id:"sparse",children:"Sparse"}),`
`,r(n.p,{children:"bit가 sparse하게 있는 경우에는 아래 방법이 유효하다. (켜진 bit수가 적을 것으로 예상되는 경우)"}),`
`,r(n.p,{children:"맨 끝 켜진 bit를 없애는 것으로 팬윅 트리의 구현에서도 쓰이는 방법이다."}),`
`,i(n.p,{children:["아래 방법 대신 ",r(n.code,{children:"v & (v-1)"})," 도 가능하다. 성능 차이는 없을 듯.."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`int bitcnt(unsigned int v) {\r
    int cnt = 0;\r
    while (v) {\r
        v -= v & -v; // or v &= v - 1;\r
        ++cnt;\r
    }\r
    return cnt;\r
}
`})}),`
`,r(n.h3,{id:"dp-table",children:"DP Table"}),`
`,r(n.p,{children:"물론 32자리 전체에 대해서 저장은 불가능하다. 아, 불가능하다기보다는 메모리 낭비가 너무 심하다는 점?"}),`
`,i(n.p,{children:["보통 이럴때는 16bit 단위로 끊어서 저장하는 테크닉을 많이 사용한다. 16bit 단위는 계산하면 ",r(n.code,{children:"65536(= 1<<16)"})," 만큼의 배열 크기가 요구되는데, 고사양의 컴퓨터를 제외한 일반적으로 쓰이는 컴퓨터의 경우 L1 Cache 가 ",r(n.code,{children:"< 64 kb"}),", L2 Cache가 ",r(n.code,{children:"< 4MB"})," 의 크기를 가진다고 알려져 있으므로, 해당 크기는 충분히 Cache 활용이 가능한 범위라고 할 수 있겠다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`char DP[1<<16];\r
void init() {\r
    // 16bit 가 들어왔을때의 popcount 를 DP 테이블에 저장해둔다.\r
}\r
int bitcnt(unsigned int v) {\r
    return DP[v>>16] + DP[v&0xFFFF];\r
}
`})}),`
`,r(n.h3,{id:"divide--conquer",children:"Divide & Conquer"}),`
`,i(n.p,{children:["bitfield는 마치 병렬 연산처럼 한번에 계산이 가능하다. 이를테면, ",r(n.code,{children:"0x55555555"}),"와 ",r(n.code,{children:"AND"})," 연산을 하게 되면 ",r(n.code,{children:"010101.."})," 처럼 bit가 남게 되는데, 이 이후에 ",r(n.code,{children:">>1"})," 한 값과 더해주면 인접한 두 비트의 카운트가 된다. 또한, 이 이후에 ",r(n.code,{children:"0x33333333"}),"와 ",r(n.code,{children:"AND"})," 연산을 하게 되면, 인접한 네 비트의 카운트가 된다. 이를 반복한다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`int bitcnt(unsigned int v) {\r
    v = (v & 0x55555555U) + ((v >> 1) & 0x55555555U);\r
    v = (v & 0x33333333U) + ((v >> 2) & 0x33333333U);\r
    v = (v & 0x0F0F0F0FU) + ((v >> 4) & 0x0F0F0F0FU);\r
    v = (v & 0x00FF00FFU) + ((v >> 8) & 0x00FF00FFU);\r
    v = (v & 0x0000FFFFU) + ((v >> 16) & 0x0000FFFFU);\r
}
`})}),`
`,r(n.p,{children:"아래와 같은 방법으로 Operation을 좀 더 줄일 수 있다."}),`
`,r(n.p,{children:"첫 두번 (인접 4비트 더하는)을 제외하고 나서는 사실 AND 연산을 두번 할 필요가 없다."}),`
`,i(n.p,{children:["참고: ",r(n.a,{href:"https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel",children:"https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel"})]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`unsigned int v; // count bits set in this (32-bit value)\r
unsigned int c; // store the total here\r
static const int S[] = {1, 2, 4, 8, 16}; // Magic Binary Numbers\r
static const int B[] = {0x55555555, 0x33333333, 0x0F0F0F0F, 0x00FF00FF, 0x0000FFFF};\r
\r
c = v - ((v >> 1) & B[0]);\r
c = ((c >> S[1]) & B[1]) + (c & B[1]);\r
c = ((c >> S[2]) + c) & B[2];\r
c = ((c >> S[3]) + c) & B[3];\r
c = ((c >> S[4]) + c) & B[4];
`})}),`
`,i(n.p,{children:["맨 처음에 1만큼 ",r(n.code,{children:"right shift"})," 하고 ",r(n.code,{children:"0x55555555U"}),"를 씌워서 빼는 방법도 유심히 보자."]}),`
`,i(n.p,{children:["인접 2비트가 둘 다 켜져있는 경우에 세워두면 ",r(n.code,{children:"11"}),"인데, 여기서 ",r(n.code,{children:"01"}),"을 빼면 ",r(n.code,{children:"10"}),", 즉 숫자 2가 되므로, 2개를 카운트 하게 되는 것."]}),`
`,r(n.p,{children:"그러나 위 구현도 살짝 복잡해서, 타협점으로 아래처럼 구현하는게 외우기 제일 쉬운듯 하다. (사실 첫줄 제외하면 똑같다)"}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`int bitcnt(unsigned int v) {\r
    v = (v & 0x55555555U) + ((v >> 1) & 0x55555555U);\r
    v = (v & 0x33333333U) + ((v >> 2) & 0x33333333U);\r
    v = (v + (v >> 4)) & 0x0F0F0F0FU;\r
    v = (v + (v >> 8)) & 0x00FF00FFU;\r
    v = (v + (v >> 16)) & 0x0000FFFFU;\r
}
`})}),`
`,r(n.h3,{id:"built-in이-제공되지-않는-상황에서의-optimal",children:"Built-in이 제공되지 않는 상황에서의 Optimal"}),`
`,i(n.p,{children:["64bit까지 포함해서 가장 빠른 방식은 아래 방식이다. 외우기는 조금 빡세다. ",r(n.code,{children:"inline"}),"이나 ",r(n.code,{children:"#define"}),"을 써서 함수도 없애버리자."]}),`
`,i(n.p,{children:["인접 8비트까지 조진다음, 곱셈으로 끝낸다. 결과값을 ",r(n.code,{children:"0x010101.."})," 로 곱할 경우, 2진 곱셈을 잘 따라가보면, 각 8비트 쪼가리를 더하게 되는 원리이다. 이 합은 ",r(n.code,{children:"자료형 - 8"})," 만큼 ",r(n.code,{children:"right shift"})," 해야 구해진다."]}),`
`,r(n.p,{children:"아래 코드를 보면 알겠지만 분할 정복 방식은 64bit 연산을 하게되면 operation이 추가되는데, 이 방식의 경우 operation 수가 늘어나지 않는다. (shift만 32 - 8이었던 것이 64 - 8만큼으로 변하는 것) 그래서 64bit 연산시 제일 유리하다."}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`#define BITCNT(n,r) { \\\r
    n -= (n >> 1) & 0x5555555555555555; \\\r
    n = (n & 0x3333333333333333) + ((n >> 2) & 0x3333333333333333); \\\r
    r = (((n + (n >> 4)) & 0xF0F0F0F0F0F0F0F) * 0x101010101010101) >> 56; \\\r
};
`})}),`
`,r(n.h2,{id:"성능-측정",children:"성능 측정"}),`
`,i(n.p,{children:[r(n.code,{children:"-O0"})," 옵션으로 gcc 컴파일 했을 때의 비교이다. (GCC version: 9.4.0)"]}),`
`,i(n.p,{children:["우선, ",r(n.code,{children:"32 bit"})," 기준 결과이다."]}),`
`,r(n.pre,{children:r(n.code,{children:`BUILTINWAY: 298 ms\r
OPTIMAL WAY: 282 ms\r
DIVIDE & CONQUER WAY: 284 ms\r
DP WAY: 296 ms\r
SPARSE WAY: 322 ms\r
NAIVE WAY: 489 ms
`})}),`
`,i(n.p,{children:[r(n.code,{children:"64 bit"})," 기준으로는 아래와 같이 된다."]}),`
`,r(n.pre,{children:r(n.code,{children:`BUILTINWAY: 517 ms\r
OPTIMAL WAY: 521 ms\r
DIVIDE & CONQUER WAY: 562 ms\r
DP WAY: 750 ms\r
SPARSE WAY: 776 ms\r
NAIVE WAY: 1009 ms
`})}),`
`,r(n.p,{children:"성능 측정 코드는 아래와 같다."}),`
`,i(p,{children:[r(n.h3,{id:"32bit-test",children:"32bit Test"}),r(n.pre,{children:r(n.code,{className:"language-cpp",children:`#include <stdio.h>\r
#include <time.h>\r
\r
#define BITCNT(n,r) { \\\r
    n -= (n >> 1) & 0x5555555555555555; \\\r
    n = (n & 0x3333333333333333) + ((n >> 2) & 0x3333333333333333); \\\r
    r = (((n + (n >> 4)) & 0xF0F0F0F0F0F0F0F) * 0x101010101010101) >> 24; \\\r
};\r
\r
int cntbit(unsigned int v) {\r
    v = (v & 0x55555555U) + ((v >> 1) & 0x55555555U);\r
    v = (v & 0x33333333U) + ((v >> 2) & 0x33333333U);\r
    v = (v + (v >> 4)) & 0x0F0F0F0FU;\r
    v = (v + (v >> 8)) & 0x00FF00FFU;\r
    v = (v + (v >> 16)) & 0x0000FFFFU;\r
}\r
int cntbit_sparse(unsigned int v) {\r
    int cnt = 0;\r
    while (v) {\r
        v -= v & -v;\r
        ++cnt;\r
    }\r
    return cnt;\r
}\r
int cntbit_naive(unsigned int v) {\r
    int cnt = 0;\r
    for(unsigned int mask = 0x1, i = 0; i < 32; ++i, mask <<= 1) {\r
        if (v & mask) ++cnt;\r
    }\r
    return cnt;\r
}\r
\r
char DP[1<<16];\r
\r
int cntbit_dp(unsigned int v) {\r
    return DP[v & 0xFFFF] + DP[v >> 16];\r
}\r
int rand() {\r
    static unsigned int seed = 5;\r
    seed = 214013 * seed + 2531011;\r
    return seed >> 16;\r
}\r
unsigned int randuint() {\r
    unsigned int res = 0U;\r
    for(unsigned int mask = 0x1, i = 0; i < 32; ++i, mask <<= 1) {\r
        if (rand() & 1) {\r
            res |= mask;\r
        }\r
    }\r
    return res;\r
}\r
\r
int main() {\r
    for(int i = 0; i < (1<<16); ++i) {\r
        DP[i] = __builtin_popcount(i);\r
    }\r
\r
    constexpr int TESTCNT = 1'000'000;\r
    // validation\r
    for(register int i = 0; i < TESTCNT; ++i) {\r
        unsigned int tval = randuint();\r
        if (__builtin_popcount(tval) != cntbit(tval)) {\r
            printf("VALIDATION FAILED!\\n");\r
        }\r
    }\r
\r
    clock_t s;\r
    \r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        __builtin_popcount(randuint());\r
    }\r
    printf("BUILTINWAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
        \r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        unsigned long long v = randuint();\r
        int r;\r
        BITCNT(v, r);\r
    }\r
    printf("OPTIMAL WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
\r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        cntbit(randuint());\r
    }\r
    printf("DIVIDE & CONQUER WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
\r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        cntbit_dp(randuint());\r
    }\r
    printf("DP WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
\r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        cntbit_sparse(randuint());\r
    }\r
    printf("SPARSE WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
\r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        cntbit_naive(randuint());\r
    }\r
    printf("NAIVE WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
    \r
    return 0;\r
}
`})}),r(n.h3,{id:"64bit-test",children:"64bit Test"}),r(n.pre,{children:r(n.code,{className:"language-cpp",children:`#include <stdio.h>\r
#include <time.h>\r
\r
#define BITCNT(n,r) { \\\r
    n -= (n >> 1) & 0x5555555555555555; \\\r
    n = (n & 0x3333333333333333) + ((n >> 2) & 0x3333333333333333); \\\r
    r = (((n + (n >> 4)) & 0xF0F0F0F0F0F0F0F) * 0x101010101010101) >> 56; \\\r
};\r
\r
int cntbit(unsigned long long v) {\r
    v = (v & 0x5555555555555555ULL) + ((v >> 1) & 0x5555555555555555ULL);\r
    v = (v & 0x3333333333333333ULL) + ((v >> 2) & 0x3333333333333333ULL);\r
    v = (v + (v >> 4)) & 0x0F0F0F0F0F0F0F0FULL;\r
    v = (v + (v >> 8)) & 0x00FF00FF00FF00FFULL;\r
    v = (v + (v >> 16)) & 0x0000FFFF0000FFFFULL;\r
    v = (v + (v >> 32)) & 0x00000000FFFFFFFFULL;\r
}\r
int cntbit_sparse(unsigned long long v) {\r
    int cnt = 0;\r
    while (v) {\r
        v -= v & -v;\r
        ++cnt;\r
    }\r
    return cnt;\r
}\r
int cntbit_naive(unsigned long long v) {\r
    int cnt = 0;\r
    for(unsigned int mask = 0x1, i = 0; i < 64; ++i, mask <<= 1) {\r
        if (v & mask) ++cnt;\r
    }\r
    return cnt;\r
}\r
char DP[1<<16];\r
\r
int cntbit_dp(unsigned long long v) {\r
    return DP[v & 0xFFFF] + DP[(v >> 16) & 0xFFFF] + DP[(v >> 32) & 0xFFFF] + DP[v >> 48];\r
}\r
\r
int rand() {\r
    static unsigned int seed = 5;\r
    seed = 214013 * seed + 2531011;\r
    return seed >> 16;\r
}\r
unsigned long long randull() {\r
    unsigned long long res = 0U;\r
    for(unsigned int mask = 0x1, i = 0; i < 64; ++i, mask <<= 1) {\r
        if (rand() & 1) {\r
            res |= mask;\r
        }\r
    }\r
    return res;\r
}\r
int main() {\r
\r
    for(int i = 0; i < (1<<16); ++i) {\r
        DP[i] = __builtin_popcount(i);\r
    }\r
\r
\r
    constexpr int TESTCNT = 1'000'000;\r
    \r
    // validation\r
    for(register int i = 0; i < TESTCNT; ++i) {\r
        unsigned long long tval = randull();\r
        if (__builtin_popcountll(tval) != cntbit(tval)) {\r
            printf("VALIDATION FAILED!\\n");\r
        }\r
    }\r
    \r
    \r
    clock_t s;\r
    \r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        __builtin_popcountll(randull());\r
    }\r
    printf("BUILTINWAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
        \r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        unsigned long long v = randull();\r
        int r;\r
        BITCNT(v, r);\r
    }\r
    printf("OPTIMAL WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
\r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        cntbit(randull());\r
    }\r
    printf("DIVIDE & CONQUER WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
\r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        cntbit_dp(randull());\r
    }\r
    printf("DP WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
\r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        cntbit_sparse(randull());\r
    }\r
    printf("SPARSE WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
\r
    s = clock();\r
    for (register int i = 0; i < TESTCNT; ++i) {\r
        cntbit_naive(randull());\r
    }\r
    printf("NAIVE WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);\r
    \r
    return 0;\r
}
`})})]}),`
`,r(h,{})]})}function u(e={}){const{wrapper:n}=Object.assign({},d(),e.components);return n?r(n,Object.assign({},e,{children:r(t,e)})):t(e)}const g=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),l={};l.outlineInfo=a;l.main=g;export{l as default};
