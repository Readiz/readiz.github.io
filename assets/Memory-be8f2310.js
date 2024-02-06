import{p as h}from"./Memory_-2d107f90.js";import{u as l,j as e,a as c,F as o}from"./ssg-client-1f02da02.js";import{C as a}from"./Comment-818b3b61.js";import{I as d}from"./Image-bf8a384c.js";import{H as s}from"./Header-366ddb64.js";import{T as p}from"./TagList-3b97e87e.js";import"./index.module-caf545e8.js";function r(i){const n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",ol:"ol",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",em:"em",ul:"ul",a:"a"},l(),i.components);return c(o,{children:[e(s,{}),`
`,e(n.p,{children:"Memory 관련 여러가지 정리. Bit operation으로 /64 줄이기 같은 것을 잘 하려면 알아야 하는 덕목 중 하나이다."}),`
`,e(n.h2,{id:"서론",children:"서론"}),`
`,c(n.p,{children:["우선 이야기를 시작하기에 앞서, 여기서 이야기하는 메모리는 ",e(n.code,{children:"Application"})," 관점에서의 메모리이다. 즉, 가상메모리를 뜻한다. (물리적인 실제 메모리는 App단에서 접근도 안된다) 이 경우, 각 시스템의 아키텍쳐에 따라 가용한 가상메모리 크기가 달라질 것이다."]}),`
`,c(n.p,{children:["이 글에서는 편의상 일반적인 ",e(n.code,{children:"32 bit"})," 시스템과 ",e(n.code,{children:"4GB"}),"의 메모리를 가정해본다. ",e(n.code,{children:"4GB"}),"의 메모리 수치는 그냥 나온 것은 아니고, ",e(n.code,{children:"32 bit"})," 시스템이라면  편하게 가져갈 수 있는 주소값 또한 ",e(n.code,{children:"32 bit"}),"가 되고, 이 수가 ",e(n.code,{children:"0xFFFFFFFFU"})," 이므로 사용가능한 메모리가 ",e(n.code,{children:"4GB"}),"라고 편하게 이야기 하는 것이다. 단, 여기서 단위는 ",e(n.code,{children:"bit"})," 가 아니고 ",e(n.code,{children:"byte"})," 임에 유의하자. 메모리 구조상 비트단위의 할당은 가능하지도 않고 효율적이지도 않다. 그래서 한 주소 번지수 (이를테면 ",e(n.code,{children:"0x10002411"}),")에는 ",e(n.code,{children:"1 byte"})," = ",e(n.code,{children:"8 bit"}),"의 데이터가 저장되어 있는 것이다."]}),`
`,e(n.h2,{id:"메모리-할당",children:"메모리 할당"}),`
`,c(n.p,{children:["메모리를 할당한다는 것은 무엇일까? 정확히는 각 프로세스가 가지고 있는 ",e(n.code,{children:"4GB"}),"의 가상메모리에 할당한다는 것일 것이다. 할당이란 무엇일까? 내가 특정 위치에 있는 메모리 값을 앞으로 사용할 것이다 라는 선언이다. 이 메모리상의 위치는 내가 마음대로 정하는 것이 아니라 ",e(n.code,{children:"malloc"})," 과 같은 함수를 통해 얻게된다. 이런 과정이 ",e(n.code,{children:"할당"}),"이다."]}),`
`,c(n.p,{children:["할당받은 주소값은 ",e(n.code,{children:"32 bit"})," 시스템에서 ",e(n.code,{children:"32 bit"}),"가 된다. 이를테면 ",e(n.code,{children:"0x10002411"})," 주소를 앞으로 쓰겠다 라고 한다면 앞으로 저 주소에 있는 값을 유의미하게 활용하겠다라는 뜻이 된다. 할당 전의 메모리 값은 일반적으로 보장할 수 없다. 따라서 할당과 동시에 메모리 초기화 작업이 필요하다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int* ptr;
malloc(ptr, sizeof(int) * 1000);
memset(ptr, 0, sizeof(int) * 1000);
`})}),`
`,c(n.p,{children:["흔히 세트로 쓰이는 위 C 코드가 그러한 과정을 거친다. 총 ",e(n.code,{children:"4 * 1000 byte"})," 를 할당하면서 기존의 값을 보장할 수 없으니 ",e(n.code,{children:"memset"}),"을 통해 초기화를 했다."]}),`
`,c(n.p,{children:["그런데, 위 과정은 좀 추상적으로 느껴진다. 왜냐면, ",e(n.code,{children:"malloc"})," 을 통해서 주소값을 할당 받는다는 것은 알겠는데, 실제로 어느 주소값을 받는다는 것인지? 그 해답이 아래 그림이다."]}),`
`,e(d,{src:"2023-05-15-10-34-33.png",width:"450"}),`
`,c(n.p,{children:["시스템의 아키텍쳐는 최대한 단순해야할 필요가 있다. 총 ",e(n.code,{children:"4GB"})," 의 메모리 주소를 할당할 때, 중간 중간 주소값을 할당할 수도 있겠지만, 그러면 낭비가 생길 가능성이 높다. 그래서, 크게 위쪽부터 (stack), 또 아래쪽부터 (heap), 메모리 공간을 사용한다. 위에서 예시로 들었던 ",e(n.code,{children:"malloc"})," 의 경우, ",e(n.code,{children:"heap"})," 공간을 사용한다. ",e(n.code,{children:"heap"})," 은 무더기, 더미와 같은 뜻을 가지며 그림의 아래 부분이다. ",e(n.code,{children:"stack"}),"의 경우 지역변수나 함수 호출 시 사용되는 부분이며 위쪽부터 차게 된다. ",e(n.code,{children:"stack"})," 공간은 일반적으로 크기가 엄청 크지 않아 제한이 좀 빡센 편이며, 그래서 종종 overflow가 발생한다. 이것을 ",e(n.code,{children:"stack overflow"})," 라고 부른다. (유명한 사이트도 있다)"]}),`
`,c(n.p,{children:[e(n.code,{children:"stack"}),"은 위에 짧게 언급한 것처럼 함수 호출시에도 쌓이기 때문에, 종종 재귀함수나 ",e(n.code,{children:"DFS"}),"를 구현할 때 터지게 되는 원인으로 작용하기도 한다. 또, 왜 흔히들 전역변수에다가 배열을 선언하는지도 알 수 있다. 이러한 메모리 구조를 알고 나면 터지는 것을 줄이지는 못하더라도 왜 터지는지는 알 수 있다."]}),`
`,e(n.h2,{id:"자료형과-메모리",children:"자료형과 메모리"}),`
`,e(n.p,{children:"위에서 메모리 주소값에 관한 이야기를 했다면 다음으로는 자료형에 대한 이야기가 필수적이다. 자료형이 메모리에 매핑되는 방식은 아래와 같다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct mydata
{
   int    number1;
   char   string1[15];
   int    number2;
   double floating_point1;
   char   char1;
   float  floating_point2;
   short  short1;
   int    number3;
   double floating_array[3];
} d;

d.number1 = 1234567;
strcpy(d.string1, "Hello world!");
d.number2 = 1;
d.floating_point1 = 2.0;
d.char1 = 1;
d.floating_point2 = 999.999;
d.short1 = 30000;
d.number3 = -1;
d.floating_array[0] = 1.0;
d.floating_array[1] = 2.0;
d.floating_array[2] = 3.0;
`})}),`
`,e(d,{src:"2023-05-14-14-33-44.png",width:"450"}),`
`,c(n.p,{children:["위 예시는 ",e(n.code,{children:"Little Endian"}),"을 사용한 예시이다. 주의할 점이자 알면 좋은 점이 두가지가 있다."]}),`
`,c(n.ol,{children:[`
`,c(n.li,{children:["일반적으로 ",e(n.code,{children:"int"})," 형의 경우 ",e(n.code,{children:"4 byte"}),"를 사용하는데, 위에서 언급한 것처럼, 메모리의 기본 단위는 ",e(n.code,{children:"1 byte"}),"이다. 즉, ",e(n.code,{children:"1 byte"}),"를 어떤 순서로 ",e(n.code,{children:"4 byte"}),"에 배열할 것인가에 대한 문제가 생긴다. 이를 해결하는 방법이 두가지가 있는데, 보통 ",e(n.code,{children:"Little Endian"}),", ",e(n.code,{children:"Big Endian"})," 이라고 부르곤 한다. 자세한 내용은 검색해보도록 하자."]}),`
`,c(n.li,{children:[e(n.code,{children:"C/C++"}),"과 같은 언어는 형변환이 자유롭다. 이를테면 char 형태의 배열을 ",e(n.code,{children:"int* p = (int*) charArr;"}),"와 같은 식으로 변환해서 접근할 수 있는데, 이렇게 할 경우 ",e(n.code,{children:"4byte"}),"를 한번에 다룰 수 있다. 이 부분은 가끔 성능을 높이는데에 도움이 될 수 있어서 아래와 같은 예시코드를 하나 첨부한다. 물론 memset 하면 되는 부분인데 대충 이런 느낌이다 하고 이해하기 좋아서 첨부하는 것.."]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`void init(char myArr[1'000'000]) {
    unsigned long long *ullp = (unsigned long long*)myArr;
    for(int i = 0; i < 125'000; ++i)
        ullp[i] = 0;
}
`})}),`
`,c(n.p,{children:["일단 흔히 쓰이는 int 형에 대해서, 숫자 ",e(n.code,{children:"32"}),"를 메모리 주소 ",e(n.code,{children:"0xA0000000"})," 에 넣고 싶다고 가정해보자. 실제 메모리에 해당 값이 어떻게 올라가 있을까? (Endian 시스템에 따라 달라지지만.. 우선 ",e(n.code,{children:"Little Endian"})," 에서의 예시를 살펴본다)"]}),`
`,c(n.table,{children:[e(n.thead,{children:c(n.tr,{children:[e(n.th,{align:"center",children:"0xA0000000"}),e(n.th,{align:"center",children:"0xA0000001"}),e(n.th,{align:"center",children:"0xA0000002"}),e(n.th,{align:"center",children:"0xA0000003"})]})}),e(n.tbody,{children:c(n.tr,{children:[e(n.td,{align:"center",children:"0x20"}),e(n.td,{align:"center",children:"0x00"}),e(n.td,{align:"center",children:"0x00"}),e(n.td,{align:"center",children:"0x00"})]})})]}),`
`,c(n.p,{children:["여기서 ",e(n.code,{children:"32"}),"가 아닌 ",e(n.code,{children:"0x20"}),"이 들어간 이유는 16진법을 사용하고 있기 때문이다. 위 표와 같이, 하나의 주소 공간에 ",e(n.code,{children:"1 byte"})," 가 들어가고, 총 ",e(n.code,{children:"4 byte"})," 공간에 걸쳐서 데이터가 들어갔다."]}),`
`,e(n.p,{children:'예시를 하나만 더 보자. 이번엔 문자열 "Hello" 가 같은 공간에 저장될 경우에 어떻게 될지 본다.'}),`
`,c(n.table,{children:[e(n.thead,{children:c(n.tr,{children:[e(n.th,{align:"center",children:"0xA0000000"}),e(n.th,{align:"center",children:"0xA0000001"}),e(n.th,{align:"center",children:"0xA0000002"}),e(n.th,{align:"center",children:"0xA0000003"}),e(n.th,{align:"center",children:"0xA0000004"}),e(n.th,{align:"center",children:"0xA0000005"})]})}),e(n.tbody,{children:c(n.tr,{children:[e(n.td,{align:"center",children:"0x48"}),e(n.td,{align:"center",children:"0x65"}),e(n.td,{align:"center",children:"0x6C"}),e(n.td,{align:"center",children:"0x6C"}),e(n.td,{align:"center",children:"0x6F"}),e(n.td,{align:"center",children:"0x00"})]})})]}),`
`,c(n.p,{children:["이제 감이 거의 다 왔을 것이다. 각 숫자들은 ",e(n.code,{children:"ASCII"})," 형식으로 인코딩 된 것이며(자세히 들어가면 다른 인코딩 형태를 쓴다면 ",e(n.code,{children:"1 byte"}),"로는 부족한 경우도 있다), 맨 끝 주소에 있는 값에 ",e(n.code,{children:"0x00"}),"이 있는 것을 볼 수 있는데 이것은 흔히 이야기하는 ",e(n.code,{children:"NULL"})," 문자열을 의미한다. 이게 없다면 어디까지가 문자열의 끝인지 알기가 어려울 것이다."]}),`
`,c(n.p,{children:[e(n.code,{children:"char[]"})," 형태가 조금 특별하고, ",e(n.code,{children:"short"}),", ",e(n.code,{children:"int"}),", ",e(n.code,{children:"long long"}),"의 경우 길이의 차이만 있다. 그리고 물론 ",e(n.code,{children:"float"}),", ",e(n.code,{children:"double"}),"도 있는데 이것은 IEEE에서 정한 특별한 ",e(n.code,{children:"지수"}),", ",e(n.code,{children:"가수"}),"를 나눠 표기하는 방법이 있으니 관심있으면 추가로 찾아보도록 하자. 어찌됐든 이들 모두는 맨 앞 비트(MSB)를 통해 부호를 판정할 수 있는 것은 공통적이다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`bool isNegative(int v) {
    const unsigned int mask = 0x80000000U;
    return ((unsigned int) v & mask);
}
`})}),`
`,e(n.h2,{id:"각종-활용",children:"각종 활용"}),`
`,c(n.p,{children:["위 내용은 흔히들 다들 안다고 생각하는 내용이다. 하지만 이러한 성질들을 활용하는 것은 또다른 문제이다. 우선, 이런 궁금증이 있을 수 있다. 특정 메모리 공간은 ",e(n.code,{children:"1 byte"})," 단위로 밖에 사용할 수 없는가? 예를들면, 경우에 따라 ",e(n.code,{children:"ASCII"}),"를 쓰는 ",e(n.code,{children:"1 byte"})," 조차도 아까운 경우가 있을 수 있다. 5비트로 표현이 가능한 문제열만 온다고 헀을 때는 5비트만 사용해서 문자를 나타내는게 최적일텐데, 그러면 이러한 비트단위 조작이 필요한 경우는 어떻게 해결할 수 있을까?"]}),`
`,c(n.p,{children:["비트단위 동작은 구현하기에 따라 엄청나게 빠를 수도 있고 느릴 수도 있다. 일단은 느린 방법으로 먼저 연습해보고, 각종 로직들을 빨라지도록 수정해보자. 우선, 메모리 공간은 ",e(n.code,{children:"char[]"}),"에 대응된다. 실제 주소의 최소 단위가 ",e(n.code,{children:"1 byte"})," 단위이고, ",e(n.code,{children:"char"}),"의 크기도 ",e(n.code,{children:"1 byte"}),"이니 천생연분이다. 이 배열의 초기 시작 주소를 사용하고자 하는 메모리의 시작 주소라고 하자. 그러면 n 비트 뒤의 공간(n 바이트가 아님에 유의)은 어떻게 접근할 것인가? 아래처럼 할 수 있다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`bool getBit(char arr[], int bitpos) {
    return (arr[bitpos >> 3] & (bitpos & 0x7)) != 0;
}
`})}),`
`,c(n.p,{children:[e(n.code,{children:">> 3"}),"은 ",e(n.code,{children:"/ 8"}),"과 동일한 효과이며, ",e(n.code,{children:"0x7"}),"은 ",e(n.code,{children:"% 8"}),"과 동일한 효과이다. 위 로직은 아주 아름답게 동작한다. setBit도 유사하게 구현할 수 있다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`bool setBit(char arr[], int bitpos) {
    return arr[bitpos >> 3] |= 1 << (bitpos & 0x7);
}
`})}),`
`,e(n.h3,{id:"on64의-매직",children:"O(N/64)의 매직"}),`
`,c(n.p,{children:["그런데, 어느세월에 비트를 하나씩 켜고 있겠는가? 특히나 우리는 성능 최적화를 하려고 이런 ",e(n.code,{children:"Low Level"}),"을 배우고 있는 것이지 비트를 하나씩 켜고 끄려고 배우고 있는 것이 아니다. 어떤 메모리상의 값을 한번에 바꿀 때는 가능하면 ",e(n.em,{children:"가장 큰 단위"})," 로 하는 것이 좋다. 만약에 메모리상의 비트를 ",e(n.code,{children:"01010101..."}),"와 같은 식으로 세팅하고 싶으면 어떤가? 아래처럼 하면 낭비다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`for (int i = 0; i < MAX_POS; ++i) {
    if (i & 1) setBit(arr, i);
}
`})}),`
`,c(n.p,{children:["위 코드는 의도한대로 틀림없이 동작할 것이지만, ",e(n.code,{children:"unsigned long long"})," 이라는 ",e(n.code,{children:"64 bit"})," 자료형으로 64배 빠르게 만들 수 있다. (엄밀하게는 배열 크기가 커짐에 따라 L1 / L2 캐시 등을 생각하면 64배까지는 아닐 수 있겠지만 아무튼 빨라진다)"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`unsigned long long mask = 0x5555555555555555ULL;
unsigned long long *ullp = (unsigned long long*) arr;
for(int i = 0; i < MAX_POS / 64; ++i) {
    ullp[i] = mask;
}
`})}),`
`,c(n.p,{children:[e(n.code,{children:"0x5555..."}),"는 0101... 이 연속적으로 있는 것의 16진수 표현이다."]}),`
`,e(n.h3,{id:"임의-bit-수의-데이터-연속-쓰기",children:"임의 bit 수의 데이터 연속 쓰기"}),`
`,c(n.p,{children:["만약, 아래와 같은 세 종류의 비트 세트를 계속해서 write 해야하는 경우를 생각해보자. ",e(n.code,{children:"Huffman"})," 코딩과 같은 곳에서 사용되는 case일 수 있겠다."]}),`
`,c(n.ol,{children:[`
`,e(n.li,{children:"0"}),`
`,e(n.li,{children:"10"}),`
`,e(n.li,{children:"11"}),`
`]}),`
`,c(n.p,{children:["쓰고자 하는 데이터는 ",e(n.code,{children:"01011100001011"}),"과 같이 될 것이다. 원본 데이터는 ",e(n.code,{children:"int oData[]"}),"에 저장되어 있다고 하자. Naive하게는 아래처럼 구현된다."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`int bitpos = 0;
for (int i = 0; i < DATA_SIZE; ++i) {
    switch (oData[i]) {
        case 1:
            ++bitPos;
            break;
        case 2:
            ++bitPos;
            setBit(arr, bitPos++);
            break;
        case 3:
            setBit(arr, bitPos++);
            setBit(arr, bitPos++);
            break;
    }
}
`})}),`
`,e(n.p,{children:"그런데, 이것을 LUT를 활용해서 분기없이 처리할 수 있다."}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`char* p = arr;
int offset = 0;
for (int i = 0; i < DATA_SIZE; ++i) {
    p |= LUT[offset][oData[i]];
    p += LUT_NEXT[offset][oData[i]];
    offset += LUT_SIZE[oData[i]];
    offset &= 0x7;
}
`})}),`
`,e(n.p,{children:"여기서 쓰일 수 있는 LUT 구현은 직접 해보자."}),`
`,e(n.h2,{id:"참고자료",children:"참고자료"}),`
`,c(n.ul,{children:[`
`,c(n.li,{children:["C Primer ",e(n.a,{href:"https://www.enlightenment.org/docs/c/start",children:"https://www.enlightenment.org/docs/c/start"})]}),`
`]}),`
`,e(p,{}),`
`,e(a,{})]})}function g(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e(n,Object.assign({},i,{children:e(r,i)})):r(i)}const b=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=h;t.main=b;export{t as default};
