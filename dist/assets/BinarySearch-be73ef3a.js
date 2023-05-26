import{p as h}from"./BinarySearch_-6fc24b23.js";import{u as l,j as e,a as r,F as o}from"./ssg-client-a408e234.js";import{C as t}from"./Comment-8a5b5d83.js";import{T as a}from"./TagList-19c2c12d.js";import{H as s}from"./Header-39b93b93.js";import"./index.module-5d0c9a7d.js";function i(d){const n=Object.assign({p:"p",code:"code",h1:"h1",h2:"h2",pre:"pre",ol:"ol",li:"li",ul:"ul",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},l(),d.components);return r(o,{children:[e(s,{}),`
`,r(n.p,{children:["Binary Search의 구현에 관한 정리. 주제 자체는 ",e(n.code,{children:"solved.ac"})," 기준 실버 티어 정도일 수도 있겠지만, 제대로 쓰기까지 상당한 시간이 걸리는 주제이기도 하다. 또, 각종 알고리즘에서 뜬금없이 튀어나오는 1순위. ",e(n.code,{children:"O(n)"}),"을 ",e(n.code,{children:"O(log n)"}),"으로 줄여주는 강력한 무기."]}),`
`,e(n.h1,{id:"서론",children:"서론"}),`
`,r(n.p,{children:["Binary Search는 항상 구현이 헷갈린다. 범위를 어디까지 해야하는지, ",e(n.code,{children:"l"}),", ",e(n.code,{children:"r"})," 설정은 어떻게 해야하는지 등등..."]}),`
`,e(n.p,{children:"여기서 그런 부분들을 한번 정리하고 넘어가고자 한다."}),`
`,e(n.h2,{id:"binary-search의-stl-사용-구현",children:"Binary Search의 STL 사용 구현"}),`
`,r(n.p,{children:["우선 표준이 되는 ",e(n.code,{children:"STL"}),"을 사용한 Binary Search 사용법을 확인해보자. 사용할 때 ",e(n.code,{children:"vector"}),"는 정렬이 되어 있어야 한다."]}),`
`,r(n.p,{children:[e(n.code,{children:"binary_search"}),"는 찾고자 하는 값이 있는지 없는지 여부를 반환한다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`bool isExist = binary_search(v.begin(), v.end(), tval);
`})}),`
`,r(n.p,{children:[e(n.code,{children:"lower_bound"}),"는 찾고자 하는 값보다 ",e(n.code,{children:"크거나 같은"})," 값이 처음으로 나오는 시점을 반환한다. 반환값 형태는 ",e(n.code,{children:"iterator"}),"이다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`auto it = lower_bound(v.begin(), v.end(), tval);
`})}),`
`,r(n.p,{children:[e(n.code,{children:"upper_bound"}),"도 거의 동일하지만 ",e(n.code,{children:"크거나 같은"})," 이 아닌 ",e(n.code,{children:"큰"})," 이다. 사용법은 완전히 동일하다. (결과만 달라진다)"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`auto it = upper_bound(v.begin(), v.end(), tval);
`})}),`
`,r(n.p,{children:[e(n.code,{children:"Binary Search"}),"의 의의는 원소를 찾을 때 전체 원소(",e(n.code,{children:"O(n)"}),")를 찾지 않아도 됨에 그 의의가 있다. 절반씩 찾을 원소가 줄어드므로 ",e(n.code,{children:"Master Theorem"}),"에 의해 시간복잡도가 ",e(n.code,{children:"O(log n)"}),"으로 줄어들게 된다."]}),`
`,e(n.h2,{id:"binary-search의-직접구현",children:"Binary Search의 직접구현"}),`
`,e(n.p,{children:"직접 구현시에 신경써야 할 포인트들이 많이 있다."}),`
`,r(n.ol,{children:[`
`,r(n.li,{children:["경계값 문제",`
`,r(n.ul,{children:[`
`,r(n.li,{children:[e(n.code,{children:"s"}),", ",e(n.code,{children:"e"})," 범위를 ",e(n.code,{children:"[s, e]"}),"로 할 것인가? ",e(n.code,{children:"[s, e)"}),"로 할 것인가?"]}),`
`]}),`
`]}),`
`,r(n.li,{children:["mid 값 설정 문제",`
`,r(n.ul,{children:[`
`,r(n.li,{children:[e(n.code,{children:"(s+e)/2"})," 로 할 것인가, ",e(n.code,{children:"(s+e+1)/2"}),"로 할 것인가?"]}),`
`]}),`
`]}),`
`,r(n.li,{children:["loop시 ",e(n.code,{children:"l"}),", ",e(n.code,{children:"r"})," 조정 문제",`
`,r(n.ul,{children:[`
`,r(n.li,{children:["가령 ",e(n.code,{children:"r = mid"}),"로 할 것인가, ",e(n.code,{children:"r = mid - 1"}),"로 할 것인가?"]}),`
`]}),`
`]}),`
`,r(n.li,{children:[e(n.code,{children:"lower_bound"}),"와 ",e(n.code,{children:"upper_bound"}),"의 실 구현"]}),`
`]}),`
`,e(n.p,{children:"하나씩 해치워보자."}),`
`,e(n.h3,{id:"경계값-문제",children:"경계값 문제"}),`
`,r(n.p,{children:["이 문서에서는 ",e(n.code,{children:"[s, e]"}),"를 기준으로 한다."]}),`
`,e(n.h3,{id:"mid-값-설정-문제",children:"mid 값 설정 문제"}),`
`,r(n.p,{children:[e(n.code,{children:"[s, e]"}),"를 쓰는 경우 구간은 ",e(n.code,{children:"(s+e)/2"}),"로 하면 충분하다. 다만, ",e(n.code,{children:"lower_bound"}),", ",e(n.code,{children:"upper_bound"}),"의 구현 시 결과가 ",e(n.code,{children:"e+1"}),"이 나올 수 있는데, 이 경우는 구간 내에 존재하는 값의 최대값보다 보다 큰 값이 왔을 경우이다."]}),`
`,e(n.h3,{id:"loop시-l-r-조정-문제",children:"loop시 l, r 조정 문제"}),`
`,r(n.p,{children:["오름차순으로 정렬된 ",e(n.code,{children:"arr[]"}),"에서, 원소를 찾으면 원소 index, 못찾으면 -1을 리턴하는 예시를 보자."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`// [s, e] 구간 사용\r
int binarySearch(int arr[], int s, int e, int tval) {\r
    int l = s, int r = e, mid;\r
    while (l <= r) {\r
        mid = (l + r) >> 1;\r
        if (tval == arr[mid]) return mid;\r
        else if (tval < arr[mid]) {\r
            r = mid - 1;\r
        } else {\r
            l = mid + 1;\r
        }\r
    }\r
    return -1;\r
}
`})}),`
`,e(n.p,{children:"표로 하나 예시를 살펴보자."}),`
`,r(n.table,{children:[e(n.thead,{children:r(n.tr,{children:[e(n.th,{align:"left",children:"index"}),e(n.th,{align:"center",children:"0"}),e(n.th,{align:"center",children:"1"}),e(n.th,{align:"center",children:"2"}),e(n.th,{align:"center",children:"3"}),e(n.th,{align:"center",children:"4"}),e(n.th,{align:"center",children:"5"}),e(n.th,{align:"center",children:"6"}),e(n.th,{align:"center",children:"7"})]})}),e(n.tbody,{children:r(n.tr,{children:[e(n.td,{align:"left",children:e(n.strong,{children:"value"})}),e(n.td,{align:"center",children:"5"}),e(n.td,{align:"center",children:"8"}),e(n.td,{align:"center",children:"10"}),e(n.td,{align:"center",children:"14"}),e(n.td,{align:"center",children:"17"}),e(n.td,{align:"center",children:"20"}),e(n.td,{align:"center",children:"22"}),e(n.td,{align:"center",children:"25"})]})})]}),`
`,r(n.p,{children:["이 경우, ",e(n.code,{children:"10"}),"을 찾는다고 가정해보자."]}),`
`,r(n.ol,{children:[`
`,r(n.li,{children:["첫번째 loop에서의 각 param 값은 아래와 같다.",`
`,r(n.ul,{children:[`
`,e(n.li,{children:"l: 0"}),`
`,e(n.li,{children:"r: 7"}),`
`,e(n.li,{children:"mid: 3"}),`
`,r(n.li,{children:["결과: ",e(n.code,{children:"arr[3] = 14 > 10"})," 이므로, ",e(n.code,{children:"r"})," 이 ",e(n.code,{children:"2"}),"로 조정된다."]}),`
`]}),`
`]}),`
`,r(n.li,{children:["두번째 loop는 아래와 같이 된다.",`
`,r(n.ul,{children:[`
`,e(n.li,{children:"l: 0"}),`
`,e(n.li,{children:"r: 2"}),`
`,e(n.li,{children:"mid: 1"}),`
`,r(n.li,{children:["결과: ",e(n.code,{children:"arr[1] = 8 > 10"})," 이므로, ",e(n.code,{children:"l"}),"이 ",e(n.code,{children:"2"}),"로 조정된다."]}),`
`]}),`
`]}),`
`,r(n.li,{children:["세번째 loop는 ",e(n.code,{children:"l"})," == ",e(n.code,{children:"r"})," == ",e(n.code,{children:"2"}),"이므로, 값을 찾고 종료된다."]}),`
`]}),`
`,r(n.p,{children:["즉, 오름차순 정렬된 배열 기준으로, 중앙을 봤을 때 그 값이 찾는 값보다 더 크면 타겟값은 좌측에 있을 것이라 생각할 수 있으므로 ",e(n.code,{children:"r"}),"이 조정되는 것이며, 반대의 경우 ",e(n.code,{children:"l"}),"이 조정된다고 할 수 있다."]}),`
`,e(n.h3,{id:"lower_bound와-upper_bound의-실-구현",children:"lower_bound와 upper_bound의 실 구현"}),`
`,r(n.p,{children:["이 경우 더 분기를 줄이는 방법도 있지만, 구현이 쉬운 방법으로 아래처럼 ",e(n.code,{children:"binarySearch"})," 함수를 변경해볼 수 있다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`// [s, e] 구간 사용\r
int lowerBound(int arr[], int s, int e, int tval) {\r
    int l = s, int r = e, mid, ans = e; // ans의 초기값에 유의\r
    while (l <= r) {\r
        mid = (l + r) >> 1;\r
        if (tval == arr[mid]) {\r
            ans = mid;\r
            r = mid - 1; // 만약 원소가 1 2 3 3 3 3 3 4 5 처럼 되어 있다면, 처음 찾은 3보다 더 왼쪽에 3이 또 있을 수 있다. 그래서 구간을 왼쪽으로 해서 계속 탐색한다.\r
        }\r
        else if (tval < arr[mid]) {\r
            ans = mid; // 여기에도 있어야 한다.\r
            r = mid - 1;\r
        } else {\r
            l = mid + 1;\r
        }\r
    }\r
    return ans;\r
}
`})}),`
`,r(n.p,{children:[e(n.code,{children:"lower_bound"}),"의 경우 위처럼만 수정하면 된다. 같을때 ",e(n.code,{children:"return"})," 하는 것이 아니라 더 찾는 것이 포인트."]}),`
`,r(n.p,{children:[e(n.code,{children:"upper_bound"}),"는 아래처럼 해볼 수 있다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`// [s, e] 구간 사용\r
int upperBound(int arr[], int s, int e, int tval) {\r
    int l = s, int r = e, mid, ans = e; // ans의 초기값에 유의\r
    while (l <= r) {\r
        mid = (l + r) >> 1;\r
        if (tval == arr[mid]) { // lowerBound 구현 대비 달라지는 부분\r
            l = mid + 1; // 더 큰걸 찾는 거니까 좌측이 아닌 우측으로 계속해서 보면 된다. (lowerBound는 경계값에서 좌측, upper는 우측)\r
        }\r
        else if (tval < arr[mid]) {\r
            ans = mid;\r
            r = mid - 1;\r
        } else {\r
            l = mid + 1;\r
        }\r
    }\r
    return ans;\r
}
`})}),`
`,r(n.p,{children:[e(n.code,{children:"ans"})," 를 업데이트 하는 부분만 변경되기 때문에 쉽게 확인해볼 수 있다. ",e(n.code,{children:"tval == arr[mid]"})," 부분의 구현만 달라지고, 직관적으로 이해할 수 있다. ",e(n.code,{children:"lower_bound"}),"는 경계값을 업데이트 하지만, ",e(n.code,{children:"upper_bound"}),"는 아니다."]}),`
`,e(a,{}),`
`,e(t,{})]})}function p(d={}){const{wrapper:n}=Object.assign({},l(),d.components);return n?e(n,Object.assign({},d,{children:e(i,d)})):i(d)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=h;c.main=u;export{c as default};
