import{p as l}from"./Sorting_-d4972bec.js";import{u as t,j as r,a as i,F as c}from"./ssg-client-4b2dff92.js";import{C as s}from"./Comment-3950b704.js";import{T as d}from"./TagList-28acf246.js";import{H as h}from"./Header-7b997133.js";import"./index.module-807ad0bd.js";function o(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",h4:"h4"},t(),e.components);return i(c,{children:[r(h,{}),`
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
`,r(n.h4,{id:"작성-중",children:"작성 중"}),`
`,r(n.h2,{id:"on-log-n-알고리즘",children:"O(n log n) 알고리즘"}),`
`,r(n.h3,{id:"quick-sort",children:"Quick Sort"}),`
`,i(n.p,{children:[r(n.code,{children:"stable"})," 하지는 않지만, 작성이 쉽고 랜덤한 분포를 가지는 데이터에 대해서 성능이 빠르다."]}),`
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
`,r(n.h3,{id:"작성-중-1",children:"작성 중..."}),`
`,r(d,{}),`
`,r(s,{})]})}function p(e={}){const{wrapper:n}=Object.assign({},t(),e.components);return n?r(n,Object.assign({},e,{children:r(o,e)})):o(e)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=l;a.main=m;export{a as default};
