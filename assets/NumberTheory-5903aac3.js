import{p as t}from"./NumberTheory_-409fba8a.js";import{u as o,j as e,a as i,F as l}from"./ssg-client-6421cdc0.js";import{C as h}from"./Comment-5cbdaa1b.js";import{H as a}from"./Header-dae143df.js";import{T as s}from"./TagList-f91001cd.js";import"./index.module-caf545e8.js";function c(r){const n=Object.assign({h2:"h2",p:"p",h3:"h3",code:"code",pre:"pre"},o(),r.components);return i(l,{children:[e(a,{}),`
`,e(n.h2,{id:"시작하기-전에",children:"시작하기 전에..."}),`
`,e(n.p,{children:"사실 시작하기에 앞서 타이틀이 너무 거창하다. 개인적으로 수학은 좋아하지만 수학과도 아니거나와, 자신이 있는 편은 아니라서 적기에 조심스럽지만, 컴퓨터와 관련이 종종 있기 때문에 정리하려는 목적으로 작성한 글이다. 언제나처럼 틀린 내용이 있을 수 있다."}),`
`,e(n.h2,{id:"기초-정수론",children:"기초 정수론"}),`
`,e(n.h3,{id:"최대공약수-구하기",children:"최대공약수 구하기"}),`
`,i(n.p,{children:[e(n.code,{children:"GCD"}),"라고 불리는 로직. ",e(n.code,{children:"a > b"}),"일 필요는 없다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int GCD(int a, int b) {
    while (b) {
        int tmp = a;
        a = b;
        b = tmp % b;
    }
    return a;
}
`})}),`
`,e(n.h3,{id:"최소공배수-구하기",children:"최소공배수 구하기"}),`
`,i(n.p,{children:[e(n.code,{children:"LCM"}),"라고 불리며, ",e(n.code,{children:"GCD"}),"를 구할 수 있으면 쉽게 구해진다. 최대공약수를 나누는 것이므로 결과는 항상 정수이다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int LCM(int a, int b) {
    return a * b / GCD(a, b);
}
`})}),`
`,e(n.h2,{id:"특정-수의-소수여부-확인하기",children:"특정 수의 소수여부 확인하기"}),`
`,e(n.h3,{id:"n까지-확인하기",children:"N까지 확인하기"}),`
`,e(n.p,{children:"가장 기본이 되는 소수 판정법이다. 소수의 정의를 활용한다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`bool isPrime(int N) {
    for(int i = 2; i < N; ++i) {
        if (i % N == 0) return false;
    }
    return true;
}
`})}),`
`,e(n.h3,{id:"루트n까지-확인하기",children:"루트N까지 확인하기"}),`
`,i(n.p,{children:["사실 위 방식이 꼭 N까지 확인이 될 필요가 없다. 이를테면 숫자 10이 있을 때, ",e(n.code,{children:"2 * 5"}),"는 ",e(n.code,{children:"5 * 2"}),"와 같기 때문이다. 즉, 중간 지점부터 뒤쪽은 이미 확인이 된다. 그 중간 지점이 바로 기하평균인 루트 N이다. 위 알고리즘은 단순히 범위만 변경하면 시간복잡도가 획기적으로 줄어든다. (심지어 N이 작을때 꽤 쓸만하다.) 루트N은 직접 구하기보다 ",e(n.code,{children:"i * i <= N"}),"을 비교하는 트릭을 쓴다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`bool isPrime(int N) {
    for(int i = 2; i * i <= N; ++i) {
        if (i % N == 0) return false;
    }
    return true;
}
`})}),`
`,e(n.h3,{id:"폴라드로",children:"폴라드로"}),`
`,e(n.p,{children:"TBW"}),`
`,e(n.h2,{id:"특정-범위의-소수-목록-구하기",children:"특정 범위의 소수 목록 구하기"}),`
`,e(n.h3,{id:"on-loglog-n-방법",children:"O(n loglog n) 방법"}),`
`,e(n.p,{children:"흔히 에라스토테네스의 체라고 불리는 방법이다. 위 알고리즘 중 루트N까지 구하는 방법의 확장판이라고 볼 수 있다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`vector<int> getPrimes (int MAX) {
    vector<int> memo(MAX + 1, 0);
    vector<int> res;
    for(int i = 2; i <= MAX; ++i) {
        if (memo[i] != 0) continue;
        res.push_back(i);
        for(int j = i; j <= MAX; j += i) {
            memo[i] = 1;
        }
    }
    return res;
}
`})}),`
`,e(n.p,{children:"그런데, 위 방법을 범위를 루트로 최적화하는 것으로 더 빨리 만들 수 있다. 이 방법을 쓰면 오히려 아래 소개할 방법보다 더 빠르기도 하다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`vector<int> getPrimes (int MAX) {
    vector<int> memo(MAX + 1, 0);
    vector<int> res;
    int i;
    for(i = 2; i * i <= MAX; ++i) {
        if (memo[i] != 0) continue;
        res.push_back(i);
        for(int j = i * i; j <= MAX; j += i) {
            memo[i] = 1;
        }
    }
    for(; i <= MAX; ++i)
        if (memo[i] == 0)
            res.push_back(i);

    return res;
}
`})}),`
`,e(n.h3,{id:"on-방법",children:"O(n) 방법"}),`
`,i(n.p,{children:[e(n.code,{children:"Linear Sieve"})," 라고 불리는 방법이다. 하지만 위 방법보다 드라마틱하게 빠를 것이라고 기대해서는 안된다. 위 알고리즘은 ",e(n.code,{children:"O(n log n)"}),"도 아니고 ",e(n.code,{children:"O(n loglog n)"}),"이다. 처음부터 큰 차이가 나기 힘들다. 하지만 이 방식은 소수를 구하면서 ",e(n.code,{children:"가장 작은 소인수"}),"를 같이 구할 수가 있다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`vector<int> getPrimes (int MAX) {
    vector<int> sp(MAX + 1, 0);
    vector<int> res;
    for(int i = 2; i <= MAX; ++i) {
        if (sp[i] == 0) res.push_back(i);
        for(auto& j: res) {
            if (i * j > MAX) break;
            sp[i * j] = j;
            if (i % j == 0) break; // 이미 체로 걸러졌으므로 더이상 보지 않음
        }
    }
    return res;
}
`})}),`
`,i(n.p,{children:["위에서 값을 리턴하지는 않지만, ",e(n.code,{children:"sp"})," 배열에 해당 수의 가장 작은 소인수가 저장된다. 즉, 만약 ",e(n.code,{children:"sp[6]"}),"의 값을 구하면, ",e(n.code,{children:"2"}),"가 된다."]}),`
`,e(n.h2,{id:"분수의-소수-나눗셈",children:"분수의 소수 나눗셈"}),`
`,i(n.p,{children:["TBW. ",e(n.code,{children:"(a / b) mod p"}),"가 p가 소수일 때, ",e(n.code,{children:"a * b ^ (p-2)"})," 가 되는 이유에 대해서 다룬다."]}),`
`,e(s,{}),`
`,e(h,{})]})}function p(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e(n,Object.assign({},r,{children:e(c,r)})):c(r)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=t;d.main=m;export{d as default};
