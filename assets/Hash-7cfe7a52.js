import{p as c}from"./Hash_-da02644b.js";import{u as i,j as e,a as o,F as s}from"./ssg-client-6421cdc0.js";import{C as l}from"./Comment-5cbdaa1b.js";import"./index.module-caf545e8.js";import{H as d}from"./Header-dae143df.js";import"./katex.min-4ed993c7.js";function a(t){const n=Object.assign({h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li"},i(),t.components);return o(s,{children:[e(d,{}),`
`,e(n.h2,{id:"hash",children:"Hash"}),`
`,e(n.pre,{children:e(n.code,{className:"language-cpp",children:`struct Node {
    int val;
};

struct Vector {
    Node *data;
    int capa;
    int size;

    Vector() {
        capa = 1;
        size = 0;
        data = new Node[capa];
    }
};

struct Hash {
    Vector data[DATA_MAX];
};
`})}),`
`,e(n.h2,{id:"time-complexity",children:"Time Complexity"}),`
`,o(n.ul,{children:[`
`,e(n.li,{children:"Insert: O(1)"}),`
`,e(n.li,{children:"Erase: O(1)"}),`
`,e(n.li,{children:"Find: O(1)"}),`
`]}),`
`,e(l,{})]})}function m(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e(n,Object.assign({},t,{children:e(a,t)})):a(t)}const u=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=c;r.main=u;export{r as default};
