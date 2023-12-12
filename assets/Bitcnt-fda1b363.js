import{p as l}from"./Bitcnt_-94819c75.js";import{u as r,j as i,a as e,F as s}from"./ssg-client-993c848d.js";import{C as o}from"./Comment-31c59be6.js";import{D as a}from"./Details-9f78ba54.js";import{H as F}from"./Header-a1c9ae24.js";import{T as v}from"./TagList-4742d679.js";import"./index.module-caf545e8.js";function c(t){const n=Object.assign({p:"p",code:"code",pre:"pre",h3:"h3",a:"a",h2:"h2"},r(),t.components);return e(s,{children:[i(F,{}),`
`,e(n.p,{children:["Bit count는 말 그대로 ",i(n.code,{children:"int"})," 나 ",i(n.code,{children:"long long"})," 등에 저장된 숫자가 2진법으로 1이 몇개가 켜져있는지를 세는 것을 말한다. 흔히 ",i(n.code,{children:"__builtin_popcount"}),"로 사용하지만, 직접 구현할 경우를 살펴본다."]}),`
`,e(n.p,{children:[i(n.code,{children:"__builtin_popcount"}),"란 gcc 내장 함수로, 아래와 같이 사용한다. (VS에서는 다른 함수가 있다)"]}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`__builtin_popcount(v); // v는 int 형
`})}),`
`,e(n.p,{children:["만약 64bit의 bitcnt가 필요하다면, 뒤에 ll이 붙은 ",i(n.code,{children:"__builtin_popcountll"}),"을 사용한다."]}),`
`,i(n.h3,{id:"naive",children:"Naive"}),`
`,i(n.p,{children:"가장 Naive한 방법은 아래와 같다."}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`int bitcnt(unsigned int v) {
    int cnt = 0;
    for(int i = 0, mask = 0x1; i < 32; ++i, mask <<= 1) {
        if (v & mask) ++cnt;
    }
    return cnt;
}
`})}),`
`,i(n.h3,{id:"sparse",children:"Sparse"}),`
`,i(n.p,{children:"bit가 sparse하게 있는 경우에는 아래 방법이 유효하다. (켜진 bit수가 적을 것으로 예상되는 경우)"}),`
`,i(n.p,{children:"맨 끝 켜진 bit를 없애는 것으로 팬윅 트리의 구현에서도 쓰이는 방법이다."}),`
`,e(n.p,{children:["아래 방법 대신 ",i(n.code,{children:"v & (v-1)"})," 도 가능하다. 성능 차이는 없을 듯.."]}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`int bitcnt(unsigned int v) {
    int cnt = 0;
    while (v) {
        v -= v & -v; // or v &= v - 1;
        ++cnt;
    }
    return cnt;
}
`})}),`
`,i(n.h3,{id:"dp-table",children:"DP Table"}),`
`,i(n.p,{children:"물론 32자리 전체에 대해서 저장은 불가능하다. 아, 불가능하다기보다는 메모리 낭비가 너무 심하다는 점?"}),`
`,e(n.p,{children:["보통 이럴때는 16bit 단위로 끊어서 저장하는 테크닉을 많이 사용한다. 16bit 단위는 계산하면 ",i(n.code,{children:"65536(= 1<<16)"})," 만큼의 배열 크기가 요구되는데, 고사양의 컴퓨터를 제외한 일반적으로 쓰이는 컴퓨터의 경우 L1 Cache 가 ",i(n.code,{children:"< 64 kb"}),", L2 Cache가 ",i(n.code,{children:"< 4MB"})," 의 크기를 가진다고 알려져 있으므로, 해당 크기는 충분히 Cache 활용이 가능한 범위라고 할 수 있겠다."]}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`char DP[1<<16];
void init() {
    // 16bit 가 들어왔을때의 popcount 를 DP 테이블에 저장해둔다.
}
int bitcnt(unsigned int v) {
    return DP[v>>16] + DP[v&0xFFFF];
}
`})}),`
`,i(n.h3,{id:"divide--conquer",children:"Divide & Conquer"}),`
`,e(n.p,{children:["bitfield는 마치 병렬 연산처럼 한번에 계산이 가능하다. 이를테면, ",i(n.code,{children:"0x55555555"}),"와 ",i(n.code,{children:"AND"})," 연산을 하게 되면 ",i(n.code,{children:"010101.."})," 처럼 bit가 남게 되는데, 이 이후에 ",i(n.code,{children:">>1"})," 한 값과 더해주면 인접한 두 비트의 카운트가 된다. 또한, 이 이후에 ",i(n.code,{children:"0x33333333"}),"와 ",i(n.code,{children:"AND"})," 연산을 하게 되면, 인접한 네 비트의 카운트가 된다. 이를 반복한다."]}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`int bitcnt(unsigned int v) {
    v = (v & 0x55555555U) + ((v >> 1) & 0x55555555U);
    v = (v & 0x33333333U) + ((v >> 2) & 0x33333333U);
    v = (v & 0x0F0F0F0FU) + ((v >> 4) & 0x0F0F0F0FU);
    v = (v & 0x00FF00FFU) + ((v >> 8) & 0x00FF00FFU);
    v = (v & 0x0000FFFFU) + ((v >> 16) & 0x0000FFFFU);
}
`})}),`
`,i(n.p,{children:"아래와 같은 방법으로 Operation을 좀 더 줄일 수 있다."}),`
`,i(n.p,{children:"첫 두번 (인접 4비트 더하는)을 제외하고 나서는 사실 AND 연산을 두번 할 필요가 없다."}),`
`,e(n.p,{children:["참고: ",i(n.a,{href:"https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel",children:"https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel"})]}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`unsigned int v; // count bits set in this (32-bit value)
unsigned int c; // store the total here
static const int S[] = {1, 2, 4, 8, 16}; // Magic Binary Numbers
static const int B[] = {0x55555555, 0x33333333, 0x0F0F0F0F, 0x00FF00FF, 0x0000FFFF};

c = v - ((v >> 1) & B[0]);
c = ((c >> S[1]) & B[1]) + (c & B[1]);
c = ((c >> S[2]) + c) & B[2];
c = ((c >> S[3]) + c) & B[3];
c = ((c >> S[4]) + c) & B[4];
`})}),`
`,e(n.p,{children:["맨 처음에 1만큼 ",i(n.code,{children:"right shift"})," 하고 ",i(n.code,{children:"0x55555555U"}),"를 씌워서 빼는 방법도 유심히 보자."]}),`
`,e(n.p,{children:["인접 2비트가 둘 다 켜져있는 경우에 세워두면 ",i(n.code,{children:"11"}),"인데, 여기서 ",i(n.code,{children:"01"}),"을 빼면 ",i(n.code,{children:"10"}),", 즉 숫자 2가 되므로, 2개를 카운트 하게 되는 것."]}),`
`,i(n.p,{children:"그러나 위 구현도 살짝 복잡해서, 타협점으로 아래처럼 구현하는게 외우기 제일 쉬운듯 하다. (사실 첫줄 제외하면 똑같다)"}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`int bitcnt(unsigned int v) {
    v = (v & 0x55555555U) + ((v >> 1) & 0x55555555U);
    v = (v & 0x33333333U) + ((v >> 2) & 0x33333333U);
    v = (v + (v >> 4)) & 0x0F0F0F0FU;
    v = (v + (v >> 8)) & 0x00FF00FFU;
    v = (v + (v >> 16)) & 0x0000FFFFU;
}
`})}),`
`,i(n.h3,{id:"built-in이-제공되지-않는-상황에서의-optimal",children:"Built-in이 제공되지 않는 상황에서의 Optimal"}),`
`,e(n.p,{children:["64bit까지 포함해서 가장 빠른 방식은 아래 방식이다. 외우기는 조금 빡세다. ",i(n.code,{children:"inline"}),"이나 ",i(n.code,{children:"#define"}),"을 써서 함수도 없애버리자."]}),`
`,e(n.p,{children:["인접 8비트까지 조진다음, 곱셈으로 끝낸다. 결과값을 ",i(n.code,{children:"0x010101.."})," 로 곱할 경우, 2진 곱셈을 잘 따라가보면, 각 8비트 쪼가리를 더하게 되는 원리이다. 이 합은 ",i(n.code,{children:"자료형 - 8"})," 만큼 ",i(n.code,{children:"right shift"})," 해야 구해진다."]}),`
`,i(n.p,{children:"아래 코드를 보면 알겠지만 분할 정복 방식은 64bit 연산을 하게되면 operation이 추가되는데, 이 방식의 경우 operation 수가 늘어나지 않는다. (shift만 32 - 8이었던 것이 64 - 8만큼으로 변하는 것) 그래서 64bit 연산시 제일 유리하다."}),`
`,i(n.pre,{children:i(n.code,{className:"language-cpp",children:`#define BITCNT(n,r) { \\
    n -= (n >> 1) & 0x5555555555555555; \\
    n = (n & 0x3333333333333333) + ((n >> 2) & 0x3333333333333333); \\
    r = (((n + (n >> 4)) & 0xF0F0F0F0F0F0F0F) * 0x101010101010101) >> 56; \\
};
`})}),`
`,i(n.h2,{id:"성능-측정",children:"성능 측정"}),`
`,e(n.p,{children:[i(n.code,{children:"-O0"})," 옵션으로 gcc 컴파일 했을 때의 비교이다. (GCC version: 9.4.0)"]}),`
`,e(n.p,{children:["우선, ",i(n.code,{children:"32 bit"})," 기준 결과이다."]}),`
`,i(n.pre,{children:i(n.code,{children:`BUILTINWAY: 298 ms
OPTIMAL WAY: 282 ms
DIVIDE & CONQUER WAY: 284 ms
DP WAY: 296 ms
SPARSE WAY: 322 ms
NAIVE WAY: 489 ms
`})}),`
`,e(n.p,{children:[i(n.code,{children:"64 bit"})," 기준으로는 아래와 같이 된다."]}),`
`,i(n.pre,{children:i(n.code,{children:`BUILTINWAY: 517 ms
OPTIMAL WAY: 521 ms
DIVIDE & CONQUER WAY: 562 ms
DP WAY: 750 ms
SPARSE WAY: 776 ms
NAIVE WAY: 1009 ms
`})}),`
`,i(n.p,{children:"성능 측정 코드는 아래와 같다."}),`
`,e(a,{children:[i(n.h3,{id:"32bit-test",children:"32bit Test"}),i(n.pre,{children:i(n.code,{className:"language-cpp",children:`#include <stdio.h>
#include <time.h>

#define BITCNT(n,r) { \\
    n -= (n >> 1) & 0x5555555555555555; \\
    n = (n & 0x3333333333333333) + ((n >> 2) & 0x3333333333333333); \\
    r = (((n + (n >> 4)) & 0xF0F0F0F0F0F0F0F) * 0x101010101010101) >> 24; \\
};

int cntbit(unsigned int v) {
    v = (v & 0x55555555U) + ((v >> 1) & 0x55555555U);
    v = (v & 0x33333333U) + ((v >> 2) & 0x33333333U);
    v = (v + (v >> 4)) & 0x0F0F0F0FU;
    v = (v + (v >> 8)) & 0x00FF00FFU;
    v = (v + (v >> 16)) & 0x0000FFFFU;
}
int cntbit_sparse(unsigned int v) {
    int cnt = 0;
    while (v) {
        v -= v & -v;
        ++cnt;
    }
    return cnt;
}
int cntbit_naive(unsigned int v) {
    int cnt = 0;
    for(unsigned int mask = 0x1, i = 0; i < 32; ++i, mask <<= 1) {
        if (v & mask) ++cnt;
    }
    return cnt;
}

char DP[1<<16];

int cntbit_dp(unsigned int v) {
    return DP[v & 0xFFFF] + DP[v >> 16];
}
int rand() {
    static unsigned int seed = 5;
    seed = 214013 * seed + 2531011;
    return seed >> 16;
}
unsigned int randuint() {
    unsigned int res = 0U;
    for(unsigned int mask = 0x1, i = 0; i < 32; ++i, mask <<= 1) {
        if (rand() & 1) {
            res |= mask;
        }
    }
    return res;
}

int main() {
    for(int i = 0; i < (1<<16); ++i) {
        DP[i] = __builtin_popcount(i);
    }

    constexpr int TESTCNT = 1'000'000;
    // validation
    for(register int i = 0; i < TESTCNT; ++i) {
        unsigned int tval = randuint();
        if (__builtin_popcount(tval) != cntbit(tval)) {
            printf("VALIDATION FAILED!\\n");
        }
    }

    clock_t s;
    
    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        __builtin_popcount(randuint());
    }
    printf("BUILTINWAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);
        
    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        unsigned long long v = randuint();
        int r;
        BITCNT(v, r);
    }
    printf("OPTIMAL WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);

    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        cntbit(randuint());
    }
    printf("DIVIDE & CONQUER WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);

    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        cntbit_dp(randuint());
    }
    printf("DP WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);

    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        cntbit_sparse(randuint());
    }
    printf("SPARSE WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);

    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        cntbit_naive(randuint());
    }
    printf("NAIVE WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);
    
    return 0;
}
`})}),i(n.h3,{id:"64bit-test",children:"64bit Test"}),i(n.pre,{children:i(n.code,{className:"language-cpp",children:`#include <stdio.h>
#include <time.h>

#define BITCNT(n,r) { \\
    n -= (n >> 1) & 0x5555555555555555; \\
    n = (n & 0x3333333333333333) + ((n >> 2) & 0x3333333333333333); \\
    r = (((n + (n >> 4)) & 0xF0F0F0F0F0F0F0F) * 0x101010101010101) >> 56; \\
};

int cntbit(unsigned long long v) {
    v = (v & 0x5555555555555555ULL) + ((v >> 1) & 0x5555555555555555ULL);
    v = (v & 0x3333333333333333ULL) + ((v >> 2) & 0x3333333333333333ULL);
    v = (v + (v >> 4)) & 0x0F0F0F0F0F0F0F0FULL;
    v = (v + (v >> 8)) & 0x00FF00FF00FF00FFULL;
    v = (v + (v >> 16)) & 0x0000FFFF0000FFFFULL;
    v = (v + (v >> 32)) & 0x00000000FFFFFFFFULL;
}
int cntbit_sparse(unsigned long long v) {
    int cnt = 0;
    while (v) {
        v -= v & -v;
        ++cnt;
    }
    return cnt;
}
int cntbit_naive(unsigned long long v) {
    int cnt = 0;
    for(unsigned int mask = 0x1, i = 0; i < 64; ++i, mask <<= 1) {
        if (v & mask) ++cnt;
    }
    return cnt;
}
char DP[1<<16];

int cntbit_dp(unsigned long long v) {
    return DP[v & 0xFFFF] + DP[(v >> 16) & 0xFFFF] + DP[(v >> 32) & 0xFFFF] + DP[v >> 48];
}

int rand() {
    static unsigned int seed = 5;
    seed = 214013 * seed + 2531011;
    return seed >> 16;
}
unsigned long long randull() {
    unsigned long long res = 0U;
    for(unsigned int mask = 0x1, i = 0; i < 64; ++i, mask <<= 1) {
        if (rand() & 1) {
            res |= mask;
        }
    }
    return res;
}
int main() {

    for(int i = 0; i < (1<<16); ++i) {
        DP[i] = __builtin_popcount(i);
    }


    constexpr int TESTCNT = 1'000'000;
    
    // validation
    for(register int i = 0; i < TESTCNT; ++i) {
        unsigned long long tval = randull();
        if (__builtin_popcountll(tval) != cntbit(tval)) {
            printf("VALIDATION FAILED!\\n");
        }
    }
    
    
    clock_t s;
    
    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        __builtin_popcountll(randull());
    }
    printf("BUILTINWAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);
        
    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        unsigned long long v = randull();
        int r;
        BITCNT(v, r);
    }
    printf("OPTIMAL WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);

    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        cntbit(randull());
    }
    printf("DIVIDE & CONQUER WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);

    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        cntbit_dp(randull());
    }
    printf("DP WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);

    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        cntbit_sparse(randull());
    }
    printf("SPARSE WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);

    s = clock();
    for (register int i = 0; i < TESTCNT; ++i) {
        cntbit_naive(randull());
    }
    printf("NAIVE WAY: %d ms\\n", (clock() - s) * 1000 / CLOCKS_PER_SEC);
    
    return 0;
}
`})})]}),`
`,i(v,{}),`
`,i(o,{})]})}function p(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?i(n,Object.assign({},t,{children:i(c,t)})):c(t)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=l;d.main=h;export{d as default};
