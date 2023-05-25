import{p as d}from"./Sorting_-dce418bd.js";import{u as t,j as r,a as i,F as l}from"./ssg-client-eec9952e.js";import{C as a}from"./Comment-c98e16c0.js";import{T as s}from"./TagList-9d43ec35.js";import{H as h}from"./Header-a5a60147.js";import"./index.module-caf545e8.js";function c(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li"},t(),e.components);return i(l,{children:[r(h,{}),`
`,r(n.p,{children:"정렬 알고리즘 관련 정리"}),`
`,r(n.h2,{id:"on2-알고리즘",children:"O(n^2) 알고리즘"}),`
`,r(n.h3,{id:"selection-sort",children:"Selection Sort"}),`
`,r(n.p,{children:"성능 요구사항이 없거나, n이 작을 때 사용하는 방식. 구현을 잊어버릴 수 없을만큼 간단하다."}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`void selSort(T arr[], int size) {
    for(int i = 0; i < size; ++i) {
        for(int j = i + 1; j < size; ++j) {
            if (arr[i] > arr[j]) {
                T tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}
`})}),`
`,r(n.h3,{id:"insertion-sort",children:"Insertion Sort"}),`
`,i(n.p,{children:["데이터가 뒤쪽으로 1개씩 추가되는 경우에, O(n)으로 제일 빠르다. 또한 ",r(n.code,{children:"memory"}),"의 ",r(n.code,{children:"locality"}),"를 살릴 수 있는 방식으로 유명하다."]}),`
`,i(n.p,{children:["이 방식은, ",r(n.code,{children:"i-1"}),"번째까지 원소들이 이미 정렬되어있다고 가정하고, i번쨰 원소를 적절한 곳에 삽입하는 방식이라서, ",r(n.code,{children:"Insertion sort"})," 라고 불린다. 이 방식의 경우 ",r(n.code,{children:"swap"}),"보다 ",r(n.code,{children:"assign"})," 연산을 1회 줄일 수 있어서 더 빠르다. 실제로, ",r(n.code,{children:"O(n^2)"})," 알고리즘 중에 제일 빠르다고 할 수 있다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`void insertionSort(T arr[], int size) {
    for(int i = 1; i < size; ++i) {
        T tmp = arr[i]; // 비교하고자 하는 원소를 임시로 저장한다.
        int j = i - 1;
        for(; j >= 0; --j) { // j 위치를 0까지 가면서 삽입할 곳을 찾는다.
            if (arr[j] < tmp) break;
            arr[j+1] = arr[j]; // swap 대신에, 뒤쪽으로 원소를 1개 민다.
        }
        arr[j+1] = tmp; // 최종 목적지에 임시로 저장한 원소를 넣고 마무리한다.
    }
}
`})}),`
`,r(n.h2,{id:"on-log-n-알고리즘",children:"O(n log n) 알고리즘"}),`
`,r(n.h3,{id:"quick-sort",children:"Quick Sort"}),`
`,i(n.p,{children:[r(n.code,{children:"stable"})," 하지는 않지만, 작성이 쉽고 랜덤한 분포를 가지는 데이터에 대해서 성능이 빠르다. 아래 코드의 구간은 [s, e] 이다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`void qSort(T arr[], int s, int e) {
    int l = s, r = e;
    T pivot = arr[(s + e) >> 1];

    while(l < r) {
        while(arr[l] < pivot) ++l;
        while(pivot < arr[r]) --r;
        if (i > j) break;

        T tmp = arr[l];
        arr[l] = arr[r];
        arr[r] = tmp;

        ++l; --r;
    }
    qSort(arr, s, r);
    qSort(arr, l, e);
}
`})}),`
`,r(n.h3,{id:"merge-sort",children:"Merge Sort"}),`
`,i(n.p,{children:[r(n.code,{children:"stable"})," 한 정렬 중에 제일 빠름. 안정적. ",r(n.code,{children:"worst"}),"에도 ",r(n.code,{children:"O(n log n)"}),"이 보장되어 ",r(n.code,{children:"PS"}),"에서 자주 쓰인다. ",r(n.code,{children:"Quick Sort"})," 대비 메모리 사용량이 2배이기 때문에, 개인적으로는 덜 선호하는 편이지만, ",r(n.code,{children:"stable"}),"이 필요한 경우에는 어쩔 수 없이 사용되어야 한다."]}),`
`,r(n.p,{children:"구간은 마찬가지로 [s, e] 로 나누는 것이 생각하기에 간단하다."}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`T tmp[MAX_SIZE];
void mergeSort(T arr[], int s, int e) {
    if (s >= e) return;
    int mid = (s + e) >> 1;
    mergeSort(arr, s, mid);
    mergeSort(arr, mid + 1, e);

    int i = s, j = mid + 1;
    int k = s;
    for(;i <= mid && j <= e;) {
        if (arr[i] < arr[j])
            tmp[k++] = arr[i++];
        else
            tmp[k++] = arr[j++];
    }
    for(;i <= mid; ++i, ++k)
        tmp[k] = arr[i];
    for(;j <= e; ++j, ++k)
        tmp[k] = arr[j];
    for(i = s; i <= e; ++i)
        arr[i] = tmp[i]; // realloc
}
`})}),`
`,i(n.p,{children:["딱히 더 빠르진 않지만 두뇌회전을 위해 아래와 같은 코드 축약 버전도 한번 기억해보자. 두 조건을 만족할 때 ",r(n.code,{children:"i++"}),"를 쓰고, 나머지의 경우 ",r(n.code,{children:"j++"}),"를 쓰는 것. ",r(n.code,{children:"i++"}),"의 사용조건만 정해지면 나머지는 ",r(n.code,{children:"j++"}),"가 되는 것에 착안한다."]}),`
`,i(n.ol,{children:[`
`,r(n.li,{children:"현재 j가 e 범위를 이미 초과했거나 (무조건 i를 써야함)"}),`
`,i(n.li,{children:["또는 i가 범위 안이면서, ",r(n.code,{children:"arr[i] <= arr[j]"})," 일 때. (등호 조건이 있어야 stable이다)"]}),`
`]}),`
`,i(n.p,{children:["이렇게 축약하면, ",r(n.code,{children:"Quick Sort"}),"보다 오히려 코드 작성량이 적다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`T tmp[MAX_SIZE];
void mergeSort(T arr[], int s, int e) {
    if (s >= e) return;
    int mid = (s + e) >> 1;
    mergeSort(arr, s, mid);
    mergeSort(arr, mid + 1, e);

    int i = s, j = mid + 1;
    int k = s;
    for(;k <= e;++k)
        // 아래에서 arr[i] <= arr[j] 의 괄호가 빠지지 않아야 stable 임에 유의!
        tmp[k] = ((j > e) || (i <= mid) && (arr[i] <= arr[j])) ? arr[i++] : arr[j++];
    for(i = s; i <= e; ++i)
        arr[i] = tmp[i]; // realloc
}
`})}),`
`,r(n.h2,{id:"특수-알고리즘",children:"특수 알고리즘"}),`
`,r(n.h3,{id:"bucket-sort",children:"Bucket Sort"}),`
`,i(n.p,{children:[r(n.code,{children:"Radix Sort"}),", ",r(n.code,{children:"Bucket Sort"})," 모두 같은 개념이다. 흔히들 ",r(n.code,{children:"10진법"}),"을 ",r(n.code,{children:"Radix Sort"}),"에 사용하곤 하는데, 사실 그럴 필요가 없다. 메모리 공간은 훨씬 더 많이 사용할 수 있으므로, ",r(n.code,{children:"65536진법 = 1<<16 진법"}),"을 사용하여, ",r(n.code,{children:"short"})," 만큼의 ",r(n.code,{children:"1 << 16"})," 배열에 Counting 해서 넣는 방식으로 반복하면, ",r(n.code,{children:"int"})," 범위의 수도 쉽게 정렬할 수 있다. Counting 한 배열을 이용하면, 총 시간복잡도 ",r(n.code,{children:"O(n)"})," 에 정렬이 완성된다. (정확히는 물론 ",r(n.code,{children:"O(n)"}),"의 상수배 되겠다) 사실 위 알고리즘들과 비교하면 말도 안될 정도로 빠른 알고리즘이라고 볼 수 있다."]}),`
`,i(n.p,{children:["이 경우 ",r(n.code,{children:"T"})," type generic을 쓸 수 없고, 구체적인 범위의 수 범위가 필요하다. 가장 간단한 unsigned int의 예시가 아래와 같다."]}),`
`,r(n.pre,{children:r(n.code,{className:"language-cpp",children:`unsigned int cnt[1<<16 | 1];
unsigned int acc[1<<16 | 1];
unsigned int tmp[ARR_SIZE];
unsigned int cnt2[1<<16 | 1];
unsigned int acc2[1<<16 | 1];
void bucketSort(unsigned int arr[]) {
    // 하위 부분 정렬
    for(int i = 0; i < ARR_SIZE; ++i)
        cnt[arr[i] & 0xFFFF]++;
    for(int i = 1; i <= (1<<16); ++i)
        acc[i] = acc[i - 1] + cnt[i - 1];
    for(int i = 0; i < ARR_SIZE; ++i)
        tmp[acc[arr[i] & 0xFFFF]++] = arr[i];
    // 상위 부분 정렬
    for(int i = 0; i < ARR_SIZE; ++i)
        cnt2[arr[i] >> 16]++;
    for(int i = 1; i <= (1<<16); ++i)
        acc2[i] = acc2[i - 1] + cnt2[i - 1];
    for(int i = 0; i < ARR_SIZE; ++i)
        arr[acc[tmp[i] >> 16]++] = tmp[i];
}
`})}),`
`,r(n.p,{children:"하위 bit -> 상위 bit 순으로 정렬을 하는 이유는 상위 bit의 영향력이 더 크기 때문이라고 이해하면 쉽다."}),`
`,r(s,{}),`
`,r(a,{})]})}function p(e={}){const{wrapper:n}=Object.assign({},t(),e.components);return n?r(n,Object.assign({},e,{children:r(c,e)})):c(e)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),o={};o.outlineInfo=d;o.main=m;export{o as default};
