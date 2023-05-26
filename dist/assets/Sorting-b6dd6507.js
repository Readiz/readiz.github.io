import{p as d}from"./Sorting_-dce418bd.js";import{u as t,j as n,a as i,F as l}from"./ssg-client-a408e234.js";import{C as a}from"./Comment-8a5b5d83.js";import{T as s}from"./TagList-19c2c12d.js";import{H as h}from"./Header-39b93b93.js";import"./index.module-5d0c9a7d.js";function c(e){const r=Object.assign({p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li"},t(),e.components);return i(l,{children:[n(h,{}),`
`,n(r.p,{children:"정렬 알고리즘 관련 정리"}),`
`,n(r.h2,{id:"on2-알고리즘",children:"O(n^2) 알고리즘"}),`
`,n(r.h3,{id:"selection-sort",children:"Selection Sort"}),`
`,n(r.p,{children:"성능 요구사항이 없거나, n이 작을 때 사용하는 방식. 구현을 잊어버릴 수 없을만큼 간단하다."}),`
`,n(r.pre,{children:n(r.code,{className:"language-cpp",children:`void selSort(T arr[], int size) {\r
    for(int i = 0; i < size; ++i) {\r
        for(int j = i + 1; j < size; ++j) {\r
            if (arr[i] > arr[j]) {\r
                T tmp = arr[i];\r
                arr[i] = arr[j];\r
                arr[j] = tmp;\r
            }\r
        }\r
    }\r
}
`})}),`
`,n(r.h3,{id:"insertion-sort",children:"Insertion Sort"}),`
`,i(r.p,{children:["데이터가 뒤쪽으로 1개씩 추가되는 경우에, O(n)으로 제일 빠르다. 또한 ",n(r.code,{children:"memory"}),"의 ",n(r.code,{children:"locality"}),"를 살릴 수 있는 방식으로 유명하다."]}),`
`,i(r.p,{children:["이 방식은, ",n(r.code,{children:"i-1"}),"번째까지 원소들이 이미 정렬되어있다고 가정하고, i번쨰 원소를 적절한 곳에 삽입하는 방식이라서, ",n(r.code,{children:"Insertion sort"})," 라고 불린다. 이 방식의 경우 ",n(r.code,{children:"swap"}),"보다 ",n(r.code,{children:"assign"})," 연산을 1회 줄일 수 있어서 더 빠르다. 실제로, ",n(r.code,{children:"O(n^2)"})," 알고리즘 중에 제일 빠르다고 할 수 있다."]}),`
`,n(r.pre,{children:n(r.code,{className:"language-cpp",children:`void insertionSort(T arr[], int size) {\r
    for(int i = 1; i < size; ++i) {\r
        T tmp = arr[i]; // 비교하고자 하는 원소를 임시로 저장한다.\r
        int j = i - 1;\r
        for(; j >= 0; --j) { // j 위치를 0까지 가면서 삽입할 곳을 찾는다.\r
            if (arr[j] < tmp) break;\r
            arr[j+1] = arr[j]; // swap 대신에, 뒤쪽으로 원소를 1개 민다.\r
        }\r
        arr[j+1] = tmp; // 최종 목적지에 임시로 저장한 원소를 넣고 마무리한다.\r
    }\r
}
`})}),`
`,n(r.h2,{id:"on-log-n-알고리즘",children:"O(n log n) 알고리즘"}),`
`,n(r.h3,{id:"quick-sort",children:"Quick Sort"}),`
`,i(r.p,{children:[n(r.code,{children:"stable"})," 하지는 않지만, 작성이 쉽고 랜덤한 분포를 가지는 데이터에 대해서 성능이 빠르다. 아래 코드의 구간은 [s, e] 이다."]}),`
`,n(r.pre,{children:n(r.code,{className:"language-cpp",children:`void qSort(T arr[], int s, int e) {\r
    int l = s, r = e;\r
    T pivot = arr[(s + e) >> 1];\r
\r
    while(l < r) {\r
        while(arr[l] < pivot) ++l;\r
        while(pivot < arr[r]) --r;\r
        if (i > j) break;\r
\r
        T tmp = arr[l];\r
        arr[l] = arr[r];\r
        arr[r] = tmp;\r
\r
        ++l; --r;\r
    }\r
    qSort(arr, s, r);\r
    qSort(arr, l, e);\r
}
`})}),`
`,n(r.h3,{id:"merge-sort",children:"Merge Sort"}),`
`,i(r.p,{children:[n(r.code,{children:"stable"})," 한 정렬 중에 제일 빠름. 안정적. ",n(r.code,{children:"worst"}),"에도 ",n(r.code,{children:"O(n log n)"}),"이 보장되어 ",n(r.code,{children:"PS"}),"에서 자주 쓰인다. ",n(r.code,{children:"Quick Sort"})," 대비 메모리 사용량이 2배이기 때문에, 개인적으로는 덜 선호하는 편이지만, ",n(r.code,{children:"stable"}),"이 필요한 경우에는 어쩔 수 없이 사용되어야 한다."]}),`
`,n(r.p,{children:"구간은 마찬가지로 [s, e] 로 나누는 것이 생각하기에 간단하다."}),`
`,n(r.pre,{children:n(r.code,{className:"language-cpp",children:`T tmp[MAX_SIZE];\r
void mergeSort(T arr[], int s, int e) {\r
    if (s >= e) return;\r
    int mid = (s + e) >> 1;\r
    mergeSort(arr, s, mid);\r
    mergeSort(arr, mid + 1, e);\r
\r
    int i = s, j = mid + 1;\r
    int k = s;\r
    for(;i <= mid && j <= e;) {\r
        if (arr[i] < arr[j])\r
            tmp[k++] = arr[i++];\r
        else\r
            tmp[k++] = arr[j++];\r
    }\r
    for(;i <= mid; ++i, ++k)\r
        tmp[k] = arr[i];\r
    for(;j <= e; ++j, ++k)\r
        tmp[k] = arr[j];\r
    for(i = s; i <= e; ++i)\r
        arr[i] = tmp[i]; // realloc\r
}
`})}),`
`,i(r.p,{children:["딱히 더 빠르진 않지만 두뇌회전을 위해 아래와 같은 코드 축약 버전도 한번 기억해보자. 두 조건을 만족할 때 ",n(r.code,{children:"i++"}),"를 쓰고, 나머지의 경우 ",n(r.code,{children:"j++"}),"를 쓰는 것. ",n(r.code,{children:"i++"}),"의 사용조건만 정해지면 나머지는 ",n(r.code,{children:"j++"}),"가 되는 것에 착안한다."]}),`
`,i(r.ol,{children:[`
`,n(r.li,{children:"현재 j가 e 범위를 이미 초과했거나 (무조건 i를 써야함)"}),`
`,i(r.li,{children:["또는 i가 범위 안이면서, ",n(r.code,{children:"arr[i] <= arr[j]"})," 일 때. (등호 조건이 있어야 stable이다)"]}),`
`]}),`
`,i(r.p,{children:["이렇게 축약하면, ",n(r.code,{children:"Quick Sort"}),"보다 오히려 코드 작성량이 적다."]}),`
`,n(r.pre,{children:n(r.code,{className:"language-cpp",children:`T tmp[MAX_SIZE];\r
void mergeSort(T arr[], int s, int e) {\r
    if (s >= e) return;\r
    int mid = (s + e) >> 1;\r
    mergeSort(arr, s, mid);\r
    mergeSort(arr, mid + 1, e);\r
\r
    int i = s, j = mid + 1;\r
    int k = s;\r
    for(;k <= e;++k)\r
        // 아래에서 arr[i] <= arr[j] 의 괄호가 빠지지 않아야 stable 임에 유의!\r
        tmp[k] = ((j > e) || (i <= mid) && (arr[i] <= arr[j])) ? arr[i++] : arr[j++];\r
    for(i = s; i <= e; ++i)\r
        arr[i] = tmp[i]; // realloc\r
}
`})}),`
`,n(r.h2,{id:"특수-알고리즘",children:"특수 알고리즘"}),`
`,n(r.h3,{id:"bucket-sort",children:"Bucket Sort"}),`
`,i(r.p,{children:[n(r.code,{children:"Radix Sort"}),", ",n(r.code,{children:"Bucket Sort"})," 모두 같은 개념이다. 흔히들 ",n(r.code,{children:"10진법"}),"을 ",n(r.code,{children:"Radix Sort"}),"에 사용하곤 하는데, 사실 그럴 필요가 없다. 메모리 공간은 훨씬 더 많이 사용할 수 있으므로, ",n(r.code,{children:"65536진법 = 1<<16 진법"}),"을 사용하여, ",n(r.code,{children:"short"})," 만큼의 ",n(r.code,{children:"1 << 16"})," 배열에 Counting 해서 넣는 방식으로 반복하면, ",n(r.code,{children:"int"})," 범위의 수도 쉽게 정렬할 수 있다. Counting 한 배열을 이용하면, 총 시간복잡도 ",n(r.code,{children:"O(n)"})," 에 정렬이 완성된다. (정확히는 물론 ",n(r.code,{children:"O(n)"}),"의 상수배 되겠다) 사실 위 알고리즘들과 비교하면 말도 안될 정도로 빠른 알고리즘이라고 볼 수 있다."]}),`
`,i(r.p,{children:["이 경우 ",n(r.code,{children:"T"})," type generic을 쓸 수 없고, 구체적인 범위의 수 범위가 필요하다. 가장 간단한 unsigned int의 예시가 아래와 같다."]}),`
`,n(r.pre,{children:n(r.code,{className:"language-cpp",children:`unsigned int cnt[1<<16 | 1];\r
unsigned int acc[1<<16 | 1];\r
unsigned int tmp[ARR_SIZE];\r
unsigned int cnt2[1<<16 | 1];\r
unsigned int acc2[1<<16 | 1];\r
void bucketSort(unsigned int arr[]) {\r
    // 하위 부분 정렬\r
    for(int i = 0; i < ARR_SIZE; ++i)\r
        cnt[arr[i] & 0xFFFF]++;\r
    for(int i = 1; i <= (1<<16); ++i)\r
        acc[i] = acc[i - 1] + cnt[i - 1];\r
    for(int i = 0; i < ARR_SIZE; ++i)\r
        tmp[acc[arr[i] & 0xFFFF]++] = arr[i];\r
    // 상위 부분 정렬\r
    for(int i = 0; i < ARR_SIZE; ++i)\r
        cnt2[arr[i] >> 16]++;\r
    for(int i = 1; i <= (1<<16); ++i)\r
        acc2[i] = acc2[i - 1] + cnt2[i - 1];\r
    for(int i = 0; i < ARR_SIZE; ++i)\r
        arr[acc[tmp[i] >> 16]++] = tmp[i];\r
}
`})}),`
`,n(r.p,{children:"하위 bit -> 상위 bit 순으로 정렬을 하는 이유는 상위 bit의 영향력이 더 크기 때문이라고 이해하면 쉽다."}),`
`,n(s,{}),`
`,n(a,{})]})}function p(e={}){const{wrapper:r}=Object.assign({},t(),e.components);return r?n(r,Object.assign({},e,{children:n(c,e)})):c(e)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=d;o.main=m;export{o as default};
