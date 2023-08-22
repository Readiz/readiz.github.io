import{p as s}from"./SIMD_-51733474.js";import{u as l,j as n,a as i,F as t}from"./ssg-client-c9d97196.js";import{C as d}from"./Comment-e116cd07.js";import{T as h}from"./TagList-53925341.js";import{H as m}from"./Header-b17b0944.js";import{I as o}from"./Image-9d084241.js";import"./katex.min-4ed993c7.js";import"./index.module-caf545e8.js";function c(a){const e=Object.assign({p:"p",code:"code",ul:"ul",li:"li",a:"a",h2:"h2",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mi:"mi",mo:"mo",mn:"mn",annotation:"annotation",pre:"pre",h3:"h3"},l(),a.components);return i(t,{children:[n(m,{}),`
`,i(e.p,{children:[n(e.code,{children:"SIMD"}),"에 관한 간단한 정리. 알게 되었는데 정리 안하면 나중에 다시 맨땅에서 구글링 해야하므로 한번 알게 된 내용 정리하고 가보려고 한다."]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Intel official guide: ",n(e.a,{href:"https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html",children:"https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html"})]}),`
`,i(e.li,{children:["관련 Codeforces 글: ",n(e.a,{href:"https://codeforces.com/blog/entry/98594",children:"https://codeforces.com/blog/entry/98594"})]}),`
`,i(e.li,{children:["Fasso 블로그 글: ",n(e.a,{href:"https://blog.naver.com/fs0608/221650925743",children:"https://blog.naver.com/fs0608/221650925743"})]}),`
`]}),`
`,n(e.h2,{id:"simd",children:"SIMD"}),`
`,i(e.p,{children:["SIMD는 Single Instruction Multiple Data의 약자이다. ",n(e.code,{children:"Vectorization"}),"과 관련있는데, 보통 그래픽 세계에서는 하나의 ",n(e.code,{children:"Instruction"}),"으로 여러개의 위치에 있는 데이터를 동시에 조작할 필요가 있다. 예를 들어, 색상을 반전시키는 operation의 경우 전체 픽셀에 대해 색상 비트를 뒤집어야 할 것이다. 이러한 작업들은 꼭 그래픽에 국한되지 않더라도, 일반적으로 필요한 경우들이 많이 있다. 머신러닝에서라던지.. 그래서 예전부터 major한 CPU들에서 지원이 이루어지고 있으며, Intel CPU는 이를 ",n(e.code,{children:"avx"})," 라는 이름으로 지원한다."]}),`
`,n(o,{src:"2023-07-16-12-58-07.png"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["이미지 출처: ",n(e.a,{href:"https://en.algorithmica.org/hpc/simd/",children:"Algorithmica SIMD 소개"})]}),`
`]}),`
`,n(e.h2,{id:"avx",children:"AVX"}),`
`,i(e.p,{children:[n(e.code,{children:"avx"}),"는 ",n(e.code,{children:"Advanced Vector Extensions"}),"의 약자이다. 처음에는 ",n(e.code,{children:"128 bits"})," 단위의 병렬연산이 지원되다가, 현재 각종 온라인 PS 사이트들(ex: codeforces, BOJ)의 경우 ",n(e.code,{children:"avx2"}),", ",n(e.code,{children:"256 bits"})," 단위를 사용할 수 있고, 최근에 좋은 Intel CPU는 ",n(e.code,{children:"512 bits"}),"까지도 지원이 된다."]}),`
`,i(e.p,{children:["말만 들어서는 병렬연산 체감이 잘 안될 수 있는데, 구체적인 예시를 들어보면 ",n(e.code,{children:"256 bits"})," 단위를 사용할 경우를 기준으로 16비트 정수(",n(e.code,{children:"short"}),")를 기본 자료형으로 사용하는 경우, 동시에 ",n(e.code,{children:"size"}),"가 16인 ",n(e.code,{children:"vector"}),"에 연산이 가능하다는 뜻이다. 시간복잡도가 정직하게 ",n(e.span,{className:"math math-inline",children:i(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(e.semantics,{children:[i(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"N"}),n(e.mi,{mathvariant:"normal",children:"/"}),n(e.mn,{children:"16"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(N/16)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:i(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mord",children:"/16"}),n(e.span,{className:"mclose",children:")"})]})})]})}),"으로 줄어드는 효과를 볼 수 있겠다. ",n(e.code,{children:"bitset"}),"을 비슷하게 사용하는 느낌이 있다. 이것도 상수시간을 줄이기 위해 활용되는 경우들이 있어서.."]}),`
`,n(e.h2,{id:"사용-방법",children:"사용 방법"}),`
`,i(e.p,{children:["일단 이 글에서는 ",n(e.code,{children:"immintrin.h"}),"를 include 해서 사용하는 것(aka 손심드)을 기준으로 한번 알아보겠다. ",n(e.code,{children:"Auto Vectorization"}),"이란 것도 있는데, 이것은 그냥 컴파일 옵션으로 켜면 컴파일러가 알아서 최적화 해주는 것이다. 이거는 그냥 플래그만 추가하면 되는 것이라 따로 글로 다루기에도 애매한 영역이라.."]}),`
`,n(e.p,{children:"아마 PS에 심취하다가 다른 사람들의 코드를 보면 아래와 같은 header를 종종 보곤 했을 것이다."}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`#pragma GCC optimize ("O3")
#pragma GCC optimize ("Ofast")
#pragma GCC optimize ("unroll-loops")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,avx,avx2")
`})}),`
`,i(e.p,{children:["이것은 사실 PS 시스템에서 막으려면 막을 수도 있는 부분인데, 컴파일러에게 강제로 어떤 기능을 켤 것인지에 대해서 ",n(e.code,{children:"pragma"})," 플래그를 통해서 알려주는 것이다. 이 중에서, ",n(e.code,{children:"avx"}),", ",n(e.code,{children:"avx2"}),"를 taget으로 지정하는 부분이 있는데, 이것과 더불어, 아래 header를 include 하면 이제 SIMD를 사용할 준비가 끝난다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`#include <immintrin.h>
`})}),`
`,n(e.h3,{id:"ps-사용-예시",children:"PS 사용 예시"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["거리와 쿼리 (BOJ 28213): ",n(e.a,{href:"https://www.acmicpc.net/problem/28213",children:"https://www.acmicpc.net/problem/28213"})]}),`
`]}),`
`,i(e.p,{children:["이 문제는 각 쿼리가 실행되는 순서가 바뀌게 되면 결과가 바뀌기 때문에, 어떻게 하면 전체 구간에 대해서 빠르게 ",n(e.span,{className:"math math-inline",children:i(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(e.semantics,{children:[i(e.mrow,{children:[n(e.mi,{mathvariant:"normal",children:"∣"}),n(e.mi,{children:"a"}),n(e.mo,{children:"−"}),n(e.mi,{children:"b"}),n(e.mi,{mathvariant:"normal",children:"∣"})]}),n(e.annotation,{encoding:"application/x-tex",children:"|a - b|"})]})})}),i(e.span,{className:"katex-html","aria-hidden":"true",children:[i(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord",children:"∣"}),n(e.span,{className:"mord mathnormal",children:"a"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),n(e.span,{className:"mbin",children:"−"}),n(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),i(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",children:"b"}),n(e.span,{className:"mord",children:"∣"})]})]})]})})," 연산을 할 수 있는지가 관건이고, SIMD를 끼얹기 딱 좋은 조건이라고 할 수 있겠다. 어떤 ",n(e.code,{children:"vector"}),"가 있다면, 동시에 뺄셈을 적용하면서 절대값을 적용하면 되는데, 둘 다 ",n(e.code,{children:"avx2"}),"에서 지원하는 명령어이다."]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"SIMD 및 Data Structure 선언부"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`#pragma GCC optimize ("O3")
#pragma GCC optimize ("Ofast")
#pragma GCC optimize ("unroll-loops")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,avx,avx2")

#include <bits/stdc++.h>
using namespace std;
#include <immintrin.h>
alignas(32) int bucket[400][512], TMP[8];
alignas(32) int bucketLazy[400][200'000];
alignas(32) int bucketLazySz[400];
`})}),`
`,i(e.p,{children:["여기서 ",n(e.code,{children:"alignas(32)"})," 부분을 유의해서 봐야하는데, 이것은 SIMD를 사용하기 위한 제약조건이라고 보면 되겠다. 해당 자료형의 크기로 ",n(e.code,{children:"align"})," 되어야 한다. 메모리상 특정 주소로부터 시작해야 정상적으로 동작하기 때문에, 꼭 넣어줘야 하는 옵션이다. 만약 ",n(e.code,{children:"short"}),"를 쓴다면 ",n(e.code,{children:"alignas(16)"}),"이 되면 된다."]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"풀이 사용"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`inline void handleLazy(int b) {
    for(int j = 0; j < bucketLazySz[b]; ++j) {
        int& d = bucketLazy[b][j];
        *(__m256i*) TMP = _mm256_set_epi32(d, d, d, d, d, d, d, d);
        int* w = bucket[b];
        for(int i = 0; i < 64; ++i) {
            *(__m256i*)w = _mm256_sub_epi32(*(__m256i*)w, *(__m256i*) TMP);
            *(__m256i*)w = _mm256_abs_epi32(*(__m256i*)w);
            w += 8;
        }
    }
    bucketLazySz[b] = 0;
}
`})}),`
`,i(e.p,{children:["나의 경우에는 각 ",n(e.code,{children:"bucket"}),"을 512 크기로 나눠서 고정된 크기의 공간에 Lazy연산을 수행할 때 SIMD를 사용했다. 원래같으면 각 ",n(e.code,{children:"bucket"}),"별로 루프를 512번 돌아야겠지만, 위처럼 하면 8배로 줄어든 64번만에 수행을 완료시킬 수 있다."]}),`
`,i(e.p,{children:["코드에 나타나는 ",n(e.code,{children:"_mm256"}),"으로 시작되는 것은 ",n(e.code,{children:"256 bits"})," 공간을 기준으로 연산이 일어난다는 뜻이며, 입력값과 출력값이 모두 ",n(e.code,{children:"256 bits"}),"라고 보면 된다. ",n(e.code,{children:"int32"}),"의 경우 ",n(e.code,{children:"32 bits"}),"를 단위로 가지는 ",n(e.code,{children:"vector"}),"가 되므로 8개씩 연산을 할 수 있다. ",n(e.span,{className:"math math-inline",children:i(e.span,{className:"katex",children:[n(e.span,{className:"katex-mathml",children:n(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(e.semantics,{children:[i(e.mrow,{children:[n(e.mi,{children:"O"}),n(e.mo,{stretchy:"false",children:"("}),n(e.mi,{children:"N"}),n(e.mi,{mathvariant:"normal",children:"/"}),n(e.mn,{children:"8"}),n(e.mo,{stretchy:"false",children:")"})]}),n(e.annotation,{encoding:"application/x-tex",children:"O(N/8)"})]})})}),n(e.span,{className:"katex-html","aria-hidden":"true",children:i(e.span,{className:"base",children:[n(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),n(e.span,{className:"mopen",children:"("}),n(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),n(e.span,{className:"mord",children:"/8"}),n(e.span,{className:"mclose",children:")"})]})})]})})," 이 좀 미묘하지 않을까 생각되겠지만, 10초 걸릴것이 1.25초 걸린다고 생각하면 효과가 있다. (물론 SIMD 자체의 overhead 때문에 이보다는 향상폭이 적겠지만..)"]}),`
`,i(e.p,{children:["사용은 배열의 포인터에 ",n(e.code,{children:"(__m256i*)"}),"와 같은 포인터 변환을 사용하면 되고, 시작 주소 기준으로 ",n(e.code,{children:"256 bits"})," 만큼 사용하면서 연산이 이루어진다. ",n(e.code,{children:"load"})," 연산도 존재하는데, 굳이 하고 싶다면 ",n(e.code,{children:"__m256"})," 자료형에다가 ",n(e.code,{children:"load"})," 연산을 통해 기존 배열의 데이터를 넣어서 사용하는 방법도 있다."]}),`
`,i(e.p,{children:["마지막으로 SIMD Instruction들은 ",n(e.code,{children:"immintrin.h"})," 헤더에서 참고해도 좋고, 이 글 서두에 첨부한 manual을 참고해도 된다. 여러 문제들에 적용을 시도하다보니 안되는 연산은 ",n(e.code,{children:"modular"})," 연산 정도인 듯 하다."]}),`
`,n(e.p,{children:"PS를 하면서 자꾸 흑마법에 빠지면 안되는데, 제일 공부하기 재밌는게 이런 흑마법이다. :)"}),`
`,n(h,{}),`
`,n(d,{})]})}function p(a={}){const{wrapper:e}=Object.assign({},l(),a.components);return e?n(e,Object.assign({},a,{children:n(c,a)})):c(a)}const g=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=s;r.main=g;export{r as default};
