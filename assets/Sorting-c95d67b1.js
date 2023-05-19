import{p as a}from"./Sorting_-596bbd92.js";import{u as o,j as n,a as s,F as c}from"./ssg-client-e469a87f.js";import{C as m}from"./Comment-fae83032.js";import{T as l}from"./TagList-b2abbc54.js";import{H as d}from"./Header-3abeb787.js";import"./index.module-d14c9ade.js";function t(r){const e=Object.assign({p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},o(),r.components);return s(c,{children:[n(d,{}),`
`,n(e.p,{children:"정렬 알고리즘 관련 정리"}),`
`,n(e.h2,{id:"on2-알고리즘",children:"O(n^2) 알고리즘"}),`
`,n(e.h3,{id:"selection-sort",children:"Selection Sort"}),`
`,n(e.p,{children:"성능 요구사항이 없거나, n이 작을 때 사용하는 방식. 구현을 잊어버릴 수 없을만큼 간단하다."}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`void selSort(T arr[], int size) {
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
`,n(e.h3,{id:"작성-중",children:"작성 중..."}),`
`,n(l,{}),`
`,n(m,{})]})}function p(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n(e,Object.assign({},r,{children:n(t,r)})):t(r)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=a;i.main=h;export{i as default};
