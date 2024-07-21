import{p as s}from"./AHC-35_-a42ee663.js";import{u as a,j as e,a as r,F as c}from"./ssg-client-4d0d4f51.js";import{C as l}from"./Comment-40ea10ce.js";import{H as o}from"./Header-cd8dda2e.js";import{T as u}from"./TagList-d4ac438b.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function t(i){const n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",a:"a",h1:"h1",span:"span",math:"math",semantics:"semantics",mrow:"mrow",msup:"msup",mi:"mi",mn:"mn",annotation:"annotation",h2:"h2",pre:"pre"},a(),i.components);return r(c,{children:[e(o,{}),`
`,r(n.p,{children:["오랜만에 참가한 AHC. 제목은 ",e(n.code,{children:"Breed Improvement"}),"."]}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["문제 링크: ",e(n.a,{href:"https://atcoder.jp/contests/ahc035/tasks/ahc035_a",children:"https://atcoder.jp/contests/ahc035/tasks/ahc035_a"})]}),`
`,r(n.li,{children:["해설(YouTube, 일본어): ",e(n.a,{href:"https://www.youtube.com/watch?v=gRbq9aUCrKs&ab_channel=AtCoderLive",children:"https://www.youtube.com/watch?v=gRbq9aUCrKs&ab_channel=AtCoderLive"})]}),`
`]}),`
`,e(n.h1,{id:"문제-분석",children:"문제 분석"}),`
`,r(n.p,{children:["4시간 짜리인만큼, 입력은 단순했다. N = 6 / M = 15 / T = 10 고정. N은 밭은 크기, M은 ",e(n.code,{children:"Feature"}),"의 크기, T는 ",e(n.code,{children:"Turn"}),"의 수이다."]}),`
`,r(n.p,{children:["이렇게 밭에 심은 농작물(?) 들은 좌우상하 인접한 녀석들과 교배되어, 수확된다. 다음 턴이 ",e(n.span,{className:"math math-inline",children:r(n.span,{className:"katex",children:[e(n.span,{className:"katex-mathml",children:e(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:r(n.semantics,{children:[e(n.mrow,{children:r(n.msup,{children:[e(n.mi,{children:"N"}),e(n.mn,{children:"2"})]})}),e(n.annotation,{encoding:"application/x-tex",children:"N^2"})]})})}),e(n.span,{className:"katex-html","aria-hidden":"true",children:r(n.span,{className:"base",children:[e(n.span,{className:"strut",style:{height:"0.8141em"}}),r(n.span,{className:"mord",children:[e(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),e(n.span,{className:"msupsub",children:e(n.span,{className:"vlist-t",children:e(n.span,{className:"vlist-r",children:e(n.span,{className:"vlist",style:{height:"0.8141em"},children:r(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[e(n.span,{className:"pstrut",style:{height:"2.7em"}}),e(n.span,{className:"sizing reset-size6 size3 mtight",children:e(n.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})})]})}),"개만을 선별하여 다시 심는 것을 반복하여 최대한 ",e(n.code,{children:"Feature"}),"를 개선하는 것이 목표."]}),`
`,e(n.h2,{id:"문제-풀이",children:"문제 풀이"}),`
`,r(n.p,{children:["우선 외곽과 주변을 다르게 처리해야한다. 주변에는 영향을 미치는 cell이 2, 3개인 반면, 중앙부분은 4개이기 때문. ",e(n.code,{children:"Breeding"}),"이 많이 되길 원한다면, 중앙에 둬야한다."]}),`
`,r(n.p,{children:["나는 스코어를 부여하는 방식을 통해서 개선을 많이 이루어냈는데, 우선 전체 ",e(n.code,{children:"Feature"}),"의 합을 스코어로 썼을 때 210M 정도의 스코어가 나왔다. 이를 이렇게만 했을 때에는 효율적이지 않은 것을 직관적으로 알 수 있다."]}),`
`,r(n.p,{children:["전체 스코어의 합을 사용하는 것은 후반부에는 유효하겠지만, 초반부에는 오히려 ",e(n.code,{children:"Feature"}),"를 다양화할 필요가 있다. 이를 위해서는 제곱, 세제곱을 취하면 다양화를 수식적으로 할 수 있게 된다."]}),`
`,r(n.p,{children:["최종적으로는 아래와 같이, ",e(n.code,{children:"Turn 0"}),"에서 3제곱, ",e(n.code,{children:"Turn 9"}),"에서 1제곱 하도록 수식을 조정하여, 250M을 달성했다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`double coeff = -0.25 * CurTurn + 3;
FOR(i,0,C) {
    double s = 0;
    FOR(j,0,M) {
        Get(i,j);
        s += pow(Seed[i].M[j], coeff);
    }
    Seed[i].score = s;
}
`})}),`
`,r(n.p,{children:["이후에는 너무 1개의 ",e(n.code,{children:"Feature"}),"에 대해서만 반영하는 case를 제외하기 위해, 특정 ",e(n.code,{children:"Feature"}),"를 max로 갖는 녀석이 2개를 초과하게 되면, 다른 녀석으로 대체하도록 수식을 대체하여 약간 개선하는 선에서 마무리 했다."]}),`
`,r(n.p,{children:["주석처리한 ",e(n.code,{children:"Random Swap"}),", ",e(n.code,{children:"SA"})," 전략은 이 문제에서는 크게 효과를 보지 못했다."]}),`
`,e(n.h2,{id:"팁",children:"팁"}),`
`,e(n.p,{children:"아래와 같은 Bash 스크립트로, 편하게 전체 TC를 로컬에서 돌려볼 수 있었다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`# #!/bin/bash

g++ -O2 sol.cpp -o max

ans=0
for num in $(seq -w 0000 0299); do
    ./max < ./in/$num.txt > ./out/$num.txt
    line=$(tail -n 1 ./out/$num.txt) > /dev/null
    line="\${line:1}"
    ans=$(($ans+$line))
    echo "$num: $line"
done
echo "Overall Score: $ans"
`})}),`
`,e(n.h2,{id:"전체-코드",children:"전체 코드"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`#include <bits/stdc++.h>
using namespace std;

#ifndef ONLINE_JUDGE
#define _D(...) printf(__VA_ARGS__)
bool isDebug = true;
#else
#define _D(...)
bool isDebug = false;
#endif

#define FOR(i,a,b) for(int i=(a);i<(b);++i)

int N, M, T;
int CurTurn;
int C;

struct Seed_t {
    int M[15];
    double score;
    bool used;
} Seed[1000];

int Order[1000];

void sort(int s, int e) {
    if (s >= e) return;

    int l = s, r = e, m = (s+e)>>1;
    double pivot = Seed[Order[m]].score;
    
    while(l < r) {
        while(Seed[Order[l]].score > pivot) ++l;
        while(pivot > Seed[Order[r]].score) --r;
        if (l > r) break;
        swap(Order[l], Order[r]);
        ++l; --r;
    }

    sort(s, r); sort(l, e);
}

int Plant[6][6];
Seed_t Nxt_Seed[1000];

bool isFirst = true;
void Get(int i, int j) {
    if (isDebug && !isFirst) {
        Seed[i].M[j] = Nxt_Seed[i].M[j];
        return;
    }
    scanf("%d", &Seed[i].M[j]);
}
int gidx;
void Generate() {
    gidx = 0;
    // 좌우
    char buf[20];
    FOR(i,0,N) FOR(j,0,N-1) {
        scanf("%s", buf);
        _D("#");
        FOR(k,0,M) {
            if (buf[k] == '0') {
                Nxt_Seed[gidx].M[k] = Seed[Plant[i][j]].M[k];
            } else {
                Nxt_Seed[gidx].M[k] = Seed[Plant[i][j+1]].M[k];
            }
            _D("%d ", Nxt_Seed[gidx].M[k]);
        }
        ++gidx;
        _D("\\n");
    }
    // 상하
    FOR(i,0,N-1) FOR(j,0,N) {
        scanf("%s", buf);
        _D("#");
        FOR(k,0,M) {
            if (buf[k] == '0') {
                Nxt_Seed[gidx].M[k] = Seed[Plant[i][j]].M[k];
            } else {
                Nxt_Seed[gidx].M[k] = Seed[Plant[i+1][j]].M[k];
            }
            _D("%d ", Nxt_Seed[gidx].M[k]);
        }
        ++gidx;
        _D("\\n");
    }
}

int BaseScore;
void GetBaseScore() {
    BaseScore = 0;
    FOR(k,0,M) {
        int maxval = 0;
        FOR(i,0,C) {
            if (Seed[i].M[k] > maxval) maxval = Seed[i].M[k];
        }
        BaseScore += maxval;
    }
}

void In() {
    if (!isFirst && isDebug) Generate();

    double coeff = -0.25 * CurTurn + 3;
    FOR(i,0,C) {
        double s = 0;
        FOR(j,0,M) {
            Get(i,j);
            s += pow(Seed[i].M[j], coeff);
        }
        Seed[i].score = s;
    }

    if (isFirst) {
        GetBaseScore();
        isFirst = false;
    }
};

int dr[4] = {-1, 0, 1, 0};
int dc[4] = {0, -1, 0, 1};
double GetSingleScore(int r, int c) {
    double ret = 0;
    // double coeff = -0.25 * CurTurn + 3;
    FOR(p,0,4) {
        int tr = r + dr[p];
        int tc = c + dc[p];
        double cur = 0;
        FOR(k,0,M) {
            // ret += pow(double(Seed[Plant[tr][tc]].M[k] + Seed[Plant[r][c]].M[k]) / 2, coeff);
            cur += pow(abs(Seed[Plant[tr][tc]].M[k] - Seed[Plant[r][c]].M[k]), 2);
        }
        ret += cur;
    }

    return ret;
}

struct Coord_t {
    int r, c;
} Coord[1000];
Coord_t Center;
int COrder[1000];
int CKey[1000];

void csort(int s, int e) {
    if (s >= e) return;

    int l = s, r = e, m = (s+e)>>1;
    int pivot = CKey[COrder[m]];
    
    while(l < r) {
        while(CKey[COrder[l]] < pivot) ++l;
        while(pivot < CKey[COrder[r]]) --r;
        if (l > r) break;
        swap(COrder[l], COrder[r]);
        ++l; --r;
    }

    csort(s, r); csort(l, e);
}

int seed = 5;
unsigned int prand() {
    seed = 214013 * seed + 2531011;
    return (seed >> 16) & 0x7FF;
}
void Out() {
    FOR(i,0,C) Order[i] = i, Seed[i].used = false;
    sort(0,C - 1);

    if (CurTurn == 0) {
        // Max는 2개까지만 선택
        int didx = N*N;
        int cnt[15] = {0, };
        FOR(i,0,C) {
            if (didx >= C) break;
            int maxVal = 0, maxIdx = -1;
            FOR(k,0,M) {
                if (maxVal < Seed[Order[i]].M[k]) {
                    maxVal = Seed[Order[i]].M[k];
                    maxIdx = k;
                }
            }
            if (cnt[maxIdx] >= 2) {
                swap(Order[i], Order[didx++]);
            } else {
                cnt[maxIdx]++;
            }
        }
    }

    int idx = 0;
    FOR(z,0,N*N) {
        int i = COrder[z];
        Seed[Order[idx]].used = true;
        Plant[Coord[i].r][Coord[i].c] = Order[idx++];
    }


    // 랜덤스왑 시작
    // if (CurTurn == 1) {
    //     int swapcnt = 0;
    //     FOR(r,0,10'000) {
    //         int ar = (prand() % (N - 1)) + 1;
    //         int ac = (prand() % (N - 1)) + 1;
    //         int br = (prand() % (N - 1)) + 1;
    //         int bc = (prand() % (N - 1)) + 1;
    //         if (ar == br && ac == bc) continue;

    //         double before = GetSingleScore(ar, ac) + GetSingleScore(br, bc);
    //         swap(Plant[ar][ac], Plant[br][bc]);
    //         double after = GetSingleScore(ar, ac) + GetSingleScore(br, bc);
            
    //         if (before < after) {
    //             // swap!
    //             // _D("#before: %lf / after: %lf\\n", before, after);
    //             ++swapcnt;
    //         } else {
    //             // no!
    //             swap(Plant[ar][ac], Plant[br][bc]);
    //         }
    //     }

    //     // 랜덤스왑 끝
    //     _D("#swap: %d\\n", swapcnt);
    // }

    FOR(i,0,N) {
        FOR(j,0,N) {
            printf("%d ", Plant[i][j]);
        }
        printf("\\n");
    }
    fflush(stdout);
}

void GetScore() {
    int maxval = 0;
    FOR(i,0,C) {
        int curScore = 0;
        FOR(k,0,M) {
            curScore += Seed[i].M[k];
        }
        if (curScore > maxval) maxval = curScore;
    }
    _D("#Base: %d\\n", BaseScore);
    _D("#Max: %d\\n", maxval);
    _D("#%.0lf\\n", round((double)maxval * 1'000'000 / BaseScore));
}

int main() {
    isFirst = true;
    scanf("%d %d %d", &N, &M, &T);
    C = 2 * N * (N - 1); // 60

    Center = {N / 2, N / 2};
    FOR(i,0,N) FOR(j,0,N) {
        COrder[i*N+j] = i*N+j;
        CKey[i*N+j] = abs(i - Center.r) + abs(j - Center.c);
        Coord[i*N+j] = {i, j};
    }
    csort(0,N*N-1);
    
    FOR(i,0,N*N) {
        _D("#[%d] %d, %d\\n", i, Coord[COrder[i]].r, Coord[COrder[i]].c);
    }

    FOR(i,0,T) {
        _D("#Turn %d\\n", i);
        CurTurn = i;
        In();
        Out();
        GetScore();
    }
    In(); // We can use it to evalute score
    GetScore();

    return 0;
}
`})}),`
`,e(u,{}),`
`,e(l,{})]})}function h(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e(n,Object.assign({},i,{children:e(t,i)})):t(i)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=s;d.main=m;export{d as default};
