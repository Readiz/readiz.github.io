import{p as h}from"./Memory_-e2ef1410.js";import{u as l,j as n,a as c,F as o}from"./ssg-client-545cfa58.js";import{C as a}from"./Comment-151c3e34.js";import{I as i}from"./Image-4d78b84b.js";import{H as p}from"./Header-38141467.js";function r(d){const e=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",a:"a"},l(),d.components);return c(o,{children:[n(p,{}),`
`,n(e.p,{children:"Memory 관련 여러가지 정리. Bit operation으로 /64 줄이기 같은 것을 잘 하려면 알아야 하는 덕목 중 하나이다."}),`
`,n(e.h2,{id:"서론",children:"서론"}),`
`,c(e.p,{children:["우선 이야기를 시작하기에 앞서, 여기서 이야기하는 메모리는 ",n(e.code,{children:"Application"})," 관점에서의 메모리이다. 즉, 가상메모리를 뜻한다. (물리적인 실제 메모리는 App단에서 접근도 안된다) 이 경우, 각 시스템의 아키텍쳐에 따라 가용한 가상메모리 크기가 달라질 것이다."]}),`
`,c(e.p,{children:["이 글에서는 편의상 일반적인 ",n(e.code,{children:"32 bit"})," 시스템과 ",n(e.code,{children:"4GB"}),"의 메모리를 가정해본다. ",n(e.code,{children:"4GB"}),"의 메모리 수치는 그냥 나온 것은 아니고, ",n(e.code,{children:"32 bit"})," 시스템이라면  편하게 가져갈 수 있는 주소값 또한 ",n(e.code,{children:"32 bit"}),"가 되고, 이 수가 ",n(e.code,{children:"0xFFFFFFFFU"})," 이므로 사용가능한 메모리가 ",n(e.code,{children:"4GB"}),"라고 편하게 이야기 하는 것이다. 단, 여기서 단위는 ",n(e.code,{children:"bit"})," 가 아니고 ",n(e.code,{children:"byte"})," 임에 유의하자. 메모리 구조상 비트단위의 할당은 가능하지도 않고 효율적이지도 않다. 그래서 한 주소 번지수 (이를테면 ",n(e.code,{children:"0x10002411"}),")에는 ",n(e.code,{children:"1 byte"})," = ",n(e.code,{children:"8 bit"}),"의 데이터가 저장되어 있는 것이다."]}),`
`,n(e.h2,{id:"메모리-할당",children:"메모리 할당"}),`
`,c(e.p,{children:["메모리를 할당한다는 것은 무엇일까? 정확히는 각 프로세스가 가지고 있는 ",n(e.code,{children:"4GB"}),"의 가상메모리에 할당한다는 것일 것이다. 할당이란 무엇일까? 내가 특정 위치에 있는 메모리 값을 앞으로 사용할 것이다 라는 선언이다. 이 메모리상의 위치는 내가 마음대로 정하는 것이 아니라 ",n(e.code,{children:"malloc"})," 과 같은 함수를 통해 얻게된다. 이런 과정이 ",n(e.code,{children:"할당"}),"이다."]}),`
`,c(e.p,{children:["할당받은 주소값은 ",n(e.code,{children:"32 bit"})," 시스템에서 ",n(e.code,{children:"32 bit"}),"가 된다. 이를테면 ",n(e.code,{children:"0x10002411"})," 주소를 앞으로 쓰겠다 라고 한다면 앞으로 저 주소에 있는 값을 유의미하게 활용하겠다라는 뜻이 된다. 할당 전의 메모리 값은 일반적으로 보장할 수 없다. 따라서 할당과 동시에 메모리 초기화 작업이 필요하다."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-cpp",children:`int* ptr;
malloc(ptr, sizeof(int) * 1000);
memset(ptr, 0, sizeof(int) * 1000);
`})}),`
`,c(e.p,{children:["흔히 세트로 쓰이는 위 C 코드가 그러한 과정을 거친다. 총 ",n(e.code,{children:"4 * 1000 byte"})," 를 할당하면서 기존의 값을 보장할 수 없으니 ",n(e.code,{children:"memset"}),"을 통해 초기화를 했다."]}),`
`,c(e.p,{children:["그런데, 위 과정은 좀 추상적으로 느껴진다. 왜냐면, ",n(e.code,{children:"malloc"})," 을 통해서 주소값을 할당 받는다는 것은 알겠는데, 실제로 어느 주소값을 받는다는 것인지? 그 해답이 아래 그림이다."]}),`
`,n(i,{src:"2023-05-15-10-34-33.png",width:"350"}),`
`,c(e.p,{children:["시스템의 아키텍쳐는 최대한 단순해야할 필요가 있다. 총 ",n(e.code,{children:"4GB"})," 의 메모리 주소를 할당할 때, 중간 중간 주소값을 할당할 수도 있겠지만, 그러면 낭비가 생길 가능성이 높다. 그래서, 크게 위쪽부터 (stack), 또 아래쪽부터 (heap), 메모리 공간을 사용한다. 위에서 예시로 들었던 ",n(e.code,{children:"malloc"})," 의 경우, ",n(e.code,{children:"heap"})," 공간을 사용한다. ",n(e.code,{children:"heap"})," 은 무더기, 더미와 같은 뜻을 가지며 그림의 아래 부분이다. ",n(e.code,{children:"stack"}),"의 경우 지역변수나 함수 호출 시 사용되는 부분이며 위쪽부터 차게 된다. ",n(e.code,{children:"stack"})," 공간은 일반적으로 크기가 엄청 크지 않아 제한이 좀 빡센 편이며, 그래서 종종 overflow가 발생한다. 이것을 ",n(e.code,{children:"stack overflow"})," 라고 부른다. (유명한 사이트도 있다)"]}),`
`,c(e.p,{children:[n(e.code,{children:"stack"}),"은 위에 짧게 언급한 것처럼 함수 호출시에도 쌓이기 때문에, 종종 재귀함수나 ",n(e.code,{children:"DFS"}),"를 구현할 때 터지게 되는 원인으로 작용하기도 한다. 또, 왜 흔히들 전역변수에다가 배열을 선언하는지도 알 수 있다. 이러한 메모리 구조를 알고 나면 터지는 것을 줄이지는 못하더라도 왜 터지는지는 알 수 있다."]}),`
`,n(e.h2,{id:"자료형과-메모리",children:"자료형과 메모리"}),`
`,n(e.p,{children:"위에서 메모리 주소값에 관한 이야기를 했다면 다음으로는 자료형에 대한 이야기가 필수적이다. 자료형이 메모리에 매핑되는 방식은 아래와 같다."}),`
`,n(i,{src:"2023-05-14-14-33-44.png",width:"350"}),`
`,n(e.p,{children:"작성 중..."}),`
`,c(e.table,{children:[n(e.thead,{children:c(e.tr,{children:[n(e.th,{children:"0x01"}),n(e.th,{align:"left",children:"b"}),n(e.th,{align:"right",children:"c"}),n(e.th,{align:"center",children:"d"})]})}),c(e.tbody,{children:[c(e.tr,{children:[n(e.td,{children:"a"}),n(e.td,{align:"left",children:"b"}),n(e.td,{align:"right",children:"c"}),n(e.td,{align:"center",children:"d"})]}),c(e.tr,{children:[n(e.td,{children:"a"}),n(e.td,{align:"left",children:"b"}),n(e.td,{align:"right",children:"c"}),n(e.td,{align:"center",children:"d"})]}),c(e.tr,{children:[n(e.td,{children:"a"}),n(e.td,{align:"left",children:"b"}),n(e.td,{align:"right",children:"c"}),n(e.td,{align:"center",children:"d"})]})]})]}),`
`,n(e.p,{children:"작성 중..."}),`
`,n(e.h2,{id:"참고자료",children:"참고자료"}),`
`,c(e.ul,{children:[`
`,c(e.li,{children:["C Primer ",n(e.a,{href:"https://www.enlightenment.org/docs/c/start",children:"https://www.enlightenment.org/docs/c/start"})]}),`
`]}),`
`,n(a,{})]})}function s(d={}){const{wrapper:e}=Object.assign({},l(),d.components);return e?n(e,Object.assign({},d,{children:n(r,d)})):r(d)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=h;t.main=m;export{t as default};
