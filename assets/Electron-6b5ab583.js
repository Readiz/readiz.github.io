import{p as o}from"./Electron_-f53c92a0.js";import{u as c,j as e,a as l,F as h}from"./ssg-client-a86a4827.js";import{H as t}from"./Header-118b2a1f.js";import{C as s}from"./Comment-74dffdec.js";import{T as a}from"./TagList-33b5176c.js";import"./index.module-caf545e8.js";function r(i){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code"},c(),i.components);return l(h,{children:[e(t,{}),`
`,e(n.h2,{id:"basic-of-electron-udemy-강의",children:"Basic of Electron (Udemy 강의)"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:[e(n.a,{href:"https://samsungu.udemy.com/",children:"https://samsungu.udemy.com/"})," 으로 드가면 들을 수 있음."]}),`
`,e(n.li,{children:e(n.a,{href:"https://samsungu.udemy.com/course/electron-react-tutorial/learn/lecture/6986540?start=0#content",children:"https://samsungu.udemy.com/course/electron-react-tutorial/learn/lecture/6986540?start=0#content"})}),`
`]}),`
`,e(n.h2,{id:"basic-of-electron",children:"Basic of Electron"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"플랫폼. 데스크톱 앱을 만들기 위함."}),`
`,e(n.li,{children:"웹 앱은 최근들어 굉장하게 복잡해졌다. Electron은 이러한 특성을 데스크톱 앱에서 사용하기 위해 등장한 플랫폼이라고 보면 됨."}),`
`,l(n.li,{children:["기본적으로 생각해야할 부분은 웹 브라우저는 유저의 하드디스크에 접근이 불가능하다는 것. 이러한 제약을 풀어주는 것이 Electron 이라는 플랫폼이라고 생각하면 된다.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"사용자의 컴퓨터 리소스에 접근 가능하게 된다는 점이 핵심!!"}),`
`]}),`
`]}),`
`,l(n.li,{children:["Electron === Google Chrome (Mostly..)",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"Task Manager를 보면 Google Chrome Helper라는 놈이 여러개가 같이 존재함. 이것을 이해하면 Electron을 이해하는 데에 도움이 된다."}),`
`,l(n.li,{children:["왜 다른 프로세스가 같이 도는가?",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"같이 죽지 않게 하기 위해. 랜더링 이슈를 막기 위해. Isolate 시키기 위해."}),`
`,e(n.li,{children:"RendererProcess가 핵심임. 이 프로세스가 웹페이지를 그린다."}),`
`,e(n.li,{children:"IPC(Inter Process Communication)을 통해 MainWindow, RendererProcess들이 통신한다."}),`
`,e(n.li,{children:"웹브라우저와 다른 점은, 웹브라우저의 주소표시줄과 같은 완전 브라우저 자체의 내용까지도 접근이 가능하다는 점."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,l(n.li,{children:["Electron의 역사(?)",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"GitHub -> Electron -> Atom (지금은 VS Code가 먹었지만..)"}),`
`,e(n.li,{children:"GitHub는 처음에 Atom을 위해 Electron을 만들었고(Atom은 JS 유저가 많아 JS로 만들었다 함), 이것이 쓸만하다고 판단해서 Open Source로 만들었음"}),`
`,e(n.li,{children:"이것을 Slack, Discord, VS Code 등에서 사용하기 시작했다."}),`
`]}),`
`]}),`
`]}),`
`,e(n.h2,{id:"handling-electron-project",children:"Handling Electron Project"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["Electron (Run at terminal, Overall Chrome Process로 생각) -> Create MainWindow(BrowserWindow) -> index.html을 로딩.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"BrowserWindow를 생성하는 로직 또한 js로 작성한다는 점! (타 언어 사용 0%)"}),`
`]}),`
`]}),`
`,e(n.li,{children:"nodemon을 사용하면 지속적인 F5 키를 눌러야 하는 것을 방지할 수 있음.  -> 자동 시작을 해주는 서버 side에서는 이미 자주 쓰이고 있는 녀석임"}),`
`,e(n.li,{children:"아래 명령어는, src/js/index.js 디렉토리에서 코드변화가 감지하면 재시작을 하도록 설정."}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`  "start": "npm-run-all --parallel watch:webpack watch:nodemon",
  "watch:webpack": "webpack --config=webpack.config.js --mode=development --watch",
  "watch:nodemon": "nodemon --exec \\"electron .\\" --watch \\"./src/js/setup.js\\""
`})}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["Step by Step Guide",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"npm init"}),`
`,e(n.li,{children:"package.json 생성"}),`
`,e(n.li,{children:"npm install --save electron"}),`
`,e(n.li,{children:"2 파일 생성 필요. init을 위한 js 과 보여줄 index.html"}),`
`,l(n.li,{children:["init을 위한 js는 터미널에서 실행된다. node를 통해.. 여기서는 require만 사용 가능",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"const electron = require('electron');"}),`
`,e(n.li,{children:"import는 node에서 기본적으로 지원되진 않음."}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"app"})," 은 overall process 를 의미함."]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`const { app } = require('electron');
`})}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["app은 ",e(n.code,{children:"event"}),"를 방출하며, 이것은 app.on 으로 청취 가능함",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"Event Driven Programming"}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"app"})," 만 실행해서는 사실 아무것도 진행되지 않음!",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"이후 BrowserWindow를 만들어야 함, 그래야 사용자에게 브라우저가 보이게 된다."}),`
`,l(n.li,{children:[e(n.code,{children:"app"})," 은 처음 로딩이 끝나면 ",e(n.code,{children:"ready"})," 이벤트를 가져온다. 그 후 mainWindow를 생성하는 것이 일반적인 Electron App의 패턴."]}),`
`,l(n.li,{children:[e(n.code,{children:"app"})," 에 전체 Main Process의 Life Cycle이 엮여 있다고 보면 됨."]}),`
`]}),`
`]}),`
`,l(n.li,{children:["BrowserWindow",`
`,l(n.ul,{children:[`
`,l(n.li,{children:[e(n.code,{children:"new BrowserWindow()"})," 만 해도 바로 뭔가 나온다."]}),`
`,e(n.li,{children:"개발자 도구도 바로 튀어나오게 됨 원한다면."}),`
`,e(n.li,{children:"그러나 주소 표시줄 같은 것은 기본적으로 없다."}),`
`,e(n.li,{children:"위에서 본 app과는 다른 녀석임. 완전히 다른 Process 라고 생각하면 됨"}),`
`,l(n.li,{children:["처음 만들기만 하면 html document가 load되지 않았으므로 빈 화면만 나오게 된다.",`
`,l(n.ul,{children:[`
`,l(n.li,{children:["불러오기 위해서는 ",e(n.code,{children:"new BrowserWindow().loadURL('https://google.com')"})," 와 같이 하면 됨"]}),`
`,e(n.li,{children:"물론 local file도 불러오기 가능하며 대부분의 ELectron App은 로컬 앱을 만드는 것이기 때문에 로컬 파일을 불러올 것임."}),`
`]}),`
`]}),`
`,l(n.li,{children:["특수한 Node.js 함수를 실행하기 전에는 일반 웹 개발 하는 것과 동일하게 개발이 진행되게 된다. HTML / JS / CSS를 얼마나 잘 다루느냐에 따라 앱 개발 속도가 달라지게 된다.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"차이점은 Local HDD를 접근가능하느냐 마느냐 정도로 생각해도 됨"}),`
`,e(n.li,{children:"ffmpeg 같이 node.js를 통해 interact 하기 쉬운 cli process와 소통하기도 좋다."}),`
`]}),`
`]}),`
`,l(n.li,{children:["BrowserWindow 부분을 Web App Side라고 할 수 있는데, 이 부분은 ",e(n.code,{children:"Keep as generic as posslbie"})," 한게 좋다. 그래야 나중에 재사용성에 유리함."]}),`
`]}),`
`]}),`
`,l(n.li,{children:["App <-> BrowserWindow 소통 방법?",`
`,l(n.ul,{children:[`
`,l(n.li,{children:["IPC 시스템을 사용함",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"IPC: Inter Process Communication"}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"const { ipcMain } = require('electron')"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"Main 에서 쓰이는 IPC object."}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"const { ipcRenderer } = require('electron')"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"랜더러 프로세스에서 사용하는 IPC"}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"ipcRenderer.send('eventName', 'Data')"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"형태만 딱 봐도 사용하기 쉽지~"}),`
`,e(n.li,{children:"이건 랜더러 프로세스에서 메인으로 메시지 보내기 위해서 쓰는 것"}),`
`,l(n.li,{children:["메인에서 받기 위해서는 ",e(n.code,{children:"ipcMain.on"})," 을 사용"]}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"mainWindow.webContents.send"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"랜더러 프로세스로 보낼 때 쓰는 것. BrowserWindow 객체를 참조하여 보내게 됨"}),`
`,l(n.li,{children:["받을 때는 ",e(n.code,{children:"ipcRenderer.on"})," 을 사용"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e(n.li,{children:"예제에서는 ffmpeg 관련된 동작은 BrowserWindow Process 에서 처리하지 않고, App Process에서 처리하는 식으로 구현했음. 이게 좀 더 바람직해 보이기도 함."}),`
`]}),`
`]}),`
`]}),`
`,e(n.h2,{id:"status-tray-application",children:"Status Tray Application"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:[e(n.code,{children:"Tray"})," 와 ",e(n.code,{children:"BrowserWindow"})," 는 당연하게도 다르다."]}),`
`,l(n.li,{children:[e(n.code,{children:"Tray Icon"}),"을 만드는 방법?",`
`,l(n.ul,{children:[`
`,e(n.li,{children:e(n.code,{children:"new Tray(iconPath)"})}),`
`,l(n.li,{children:[e(n.code,{children:"tray.on('click', () => { mainWindow.show(); });"})," 자주 쓰이는 패턴"]}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"Tray"})," 근처에 창을 생성하는 방법? (특히 OS, 사용자마다 위치가 다를 것..)",`
`,l(n.ul,{children:[`
`,l(n.li,{children:[e(n.code,{children:"click"})," 이벤트가 올 때, ",e(n.code,{children:"bounds"})," 객체가 전달된다. 이 객체에 x, y 좌표가 제공됨. 이것을 참고하여 window 의 위치를 조절하면 된다."]}),`
`,l(n.li,{children:[e(n.code,{children:"mainWindow"}),"에 ",e(n.code,{children:"setBounds"}),"를 설정하면 지정한 영역에 윈도우를 잘 생성할 수 있다."]}),`
`]}),`
`]}),`
`]}),`
`,e(n.h2,{id:"etc-다른-강의-내용-포함",children:"ETC (다른 강의 내용 포함)"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["app 의 webContent에 ",e(n.code,{children:"new-window"})," 이벤트에 ",e(n.code,{children:"preventDefault"}),"를 걸어두면 링크에서 새 창이 뜨는 것을 막을 수 있음."]}),`
`,l(n.li,{children:["session은 모든 browserWindow와 공유 됨. ",e(n.code,{children:"mainWindow.webContents.session"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:[e(n.code,{children:"const {session} = require('electron')"})," 도 같은 값 참조.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:e(n.code,{children:"session.defaultSession"})}),`
`]}),`
`]}),`
`,e(n.li,{children:"custom session도 만들 수 있긴 하다."}),`
`,l(n.li,{children:[e(n.code,{children:"cookie"})," 도 ",e(n.code,{children:"session"}),"의 하위 object 임."]}),`
`,e(n.li,{children:"download 도 control 가능하다. (창 안뜨고 자동 다운 가능)"}),`
`,l(n.li,{children:[e(n.code,{children:"globalShortcut"})," : 화면이 떠 있지 않더라도 전체적으로 등록되는 Shortcut",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"심지어 앱이 켜져있지 않더라도 실행됨! 그러나 충돌나는 것은 알아서 회피해야 할 것.."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"const {screen} = require('electron')"}),"을 통해서 스크린에 관련된 모든 데이터를 가져올 수 있음",`
`,l(n.ul,{children:[`
`,l(n.li,{children:["getAllDisplay(): 전체 연결된 display에 대한 정보들을 가져올 수 있다.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"touchSupport 등등 포함.."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,l(n.li,{children:["Main Process가 BrowserWindow를 소유하며, Browser Window는 Renderer Process 그 자체다.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"Main Process는 여러개의 BrowserWindow를 소유한다."}),`
`]}),`
`]}),`
`,l(n.li,{children:["BrowserWindow는 webFrame > webContents 를 소유한다.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"ex) Zoom Factor"}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"electron.desktopCapturer"}),": 데스크탑의 화면을 저장 가능함"]}),`
`,l(n.li,{children:[e(n.code,{children:"process.version"}),": 각 버전을 가지고 있음..",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"ex) chrome, napi, electron, v8, opensssl 등등.."}),`
`]}),`
`]}),`
`,l(n.li,{children:[e(n.code,{children:"process.hang()"}),": Renderer를 Hang을 걸 수 있음."]}),`
`,l(n.li,{children:[e(n.code,{children:"process.crash()"}),": crash 될 때를 시뮬레이팅 할 수 있음.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"이 때 reload 걸면 복구될 수 있음. 복구 되는게 낫나?.."}),`
`]}),`
`]}),`
`,l(n.li,{children:["몇몇 electron API들은 Shared API로, renderer와 main 모두에게서 쓰일 수 있음. (ex: ",e(n.code,{children:"shell"})," 등..)",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"electron.remote 안써도 된다는 뜻"}),`
`]}),`
`]}),`
`]}),`
`,e(n.h2,{id:"distribution",children:"Distribution"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["Electron-Builder 가 진리.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"cli 옵션도 지원한다. 어떤 platform으로 distribute 할지는 이걸로 결정"}),`
`,e(n.li,{children:"결과물은 dist 디렉토리에 제공됨."}),`
`]}),`
`]}),`
`,e(n.li,{children:"제대로 하려면 code-signing도 해야 함. (아마 mac은 더 강제되는듯?)"}),`
`,l(n.li,{children:["Electron-Builder에 이미 AutoUpdater가 있다.",`
`,l(n.ul,{children:[`
`,e(n.li,{children:"GitHub 를 통해 배포하려면, Personal access token을 발급받아야 한다."}),`
`,e(n.li,{children:"이를 등록하면, 빌드 후 자동으로 GitHub release에 올려버릴 수 있음. (이미 만들어진 tag를 참조해서 올리는 듯?)"}),`
`]}),`
`]}),`
`,e(n.li,{children:"(참고) setx 커맨드를 윈도우에서 사용하면 환경변수를 잠시 설정할 수 있다."}),`
`,e(n.li,{children:"자동 업데이트는 electron-updater와 함께~"}),`
`]}),`
`,e(a,{}),`
`,e(s,{})]})}function u(i={}){const{wrapper:n}=Object.assign({},c(),i.components);return n?e(n,Object.assign({},i,{children:e(r,i)})):r(i)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=o;d.main=p;export{d as default};
