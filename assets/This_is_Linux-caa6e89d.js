import{p as h}from"./This_is_Linux_-33dc9552.js";import{u as d,j as l,a as i,F as s}from"./ssg-client-40b1300a.js";import{H as t}from"./Header-a9d0cc04.js";import{C as o}from"./Comment-40f5e63f.js";import{T as a}from"./TagList-c7637445.js";import"./index.module-caf545e8.js";function r(e){const n=Object.assign({h1:"h1",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",a:"a",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mn:"mn",mo:"mo",annotation:"annotation"},d(),e.components);return i(s,{children:[l(t,{}),`
`,l(n.h1,{id:"this-is-linux--가장-쉬운-리눅스-시스템-관리-책-내용-정리",children:"This is linux / 가장 쉬운 리눅스 시스템 관리 책 내용 정리"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"Written By 우재남 / 웨일 소잉카"}),`
`]}),`
`,l(n.h2,{id:"리눅스-배포판의-기술적-요약",children:"리눅스 배포판의 기술적 요약"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"리눅스는 처음에는 해커들의 장난감 취급이었지만 지금은 안정성, 성능, 확장성 모두 뛰어남"}),`
`,l(n.li,{children:"소프트웨어 모음으로서의 리눅스는 일반적으로 배포판이라고 함. 배포판은 리눅스를 유용하게 만들어줌."}),`
`,i(n.li,{children:["리눅스 자체는 커널이라고 볼 수 있음. 커널은 운영되는 서비스의 최고 사령관 개념으로 동작하는 프로그램",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"메모리의 요구사항을 관리하고, 디스크에 접근 혹은 네트워크 연결을 관리."}),`
`,l(n.li,{children:"커널 작업 목록도 다뤄야 할 것이 한가득이며 책도 여러개 나왔음"}),`
`]}),`
`]}),`
`,l(n.li,{children:"커널은 사소한 프로그램이 아님. 수많은 리눅스 배포판 모두에 리눅스 이름을 붙일 수 있게 해주는 것"}),`
`,l(n.li,{children:"모든 배포판들이 근본적으로 동일한 커널을 사용. 리눅스 배포판들의 기본적인 수행방식은 동일"}),`
`,i(n.li,{children:["배포판의 예시",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"레드햇 엔터프라이즈 리눅스(RHEL)"}),`
`,l(n.li,{children:"페도라(Fedora)"}),`
`,l(n.li,{children:"데비안(Debian)"}),`
`,l(n.li,{children:"맨드레이크(Mandrake)"}),`
`,l(n.li,{children:"우분투(Ubuntu)"}),`
`,l(n.li,{children:"CentOS"}),`
`,l(n.li,{children:"..."}),`
`]}),`
`]}),`
`,l(n.li,{children:"순수 상업용 배포판 / 비상업용 배포판(spin) 으로 나누어짐."}),`
`,i(n.li,{children:["GNU: GNU is Not Unix. 깔깔깔. GNU 프로젝트",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"유닉스 계열 시스템(당시 핫했음, AT&T가 이 코드로 돈 좀 만짐)을 대중에 공유하고 라이선스 제약을 풀자는 주장 하에 생긴 것."}),`
`,l(n.li,{children:"GPL 라이선스 라는 것을 사용함"}),`
`,l(n.li,{children:"소프트웨어가 완벽하게 공개이며 그 누구도 이러한 자유를 없앨 수 없음."}),`
`]}),`
`]}),`
`]}),`
`,l(n.h2,{id:"기본-개념과-명령어",children:"기본 개념과 명령어"}),`
`,l(n.h3,{id:"명령어-정리",children:"명령어 정리"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"pwd: print working directory"}),`
`,l(n.li,{children:"whoami: 로그인 계정 출력"}),`
`,l(n.li,{children:"ln <파일명> <파일명> : 하드 링크 만들기 (linux 내부적으로 갖는 완전히 동일한 파일 링크를 만듬 -- 완전히 같은 파일인 것처럼 행동함)"}),`
`,l(n.li,{children:"ln -s <파일명> <파일명> : 심볼릭 링크 만들기 (눈에 띄는 링크를 만듬)"}),`
`,i(n.li,{children:["mount -o remount,rw /",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"읽기 전용 파티션으로 마운트된 (mount 명령어로 확인) 폴더를 읽기/쓰기 모드로 붙일 수 있음."}),`
`]}),`
`]}),`
`,i(n.li,{children:["yes > /dev/null",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"무한 루프를 도는 단순한 프로세스 만들기"}),`
`]}),`
`]}),`
`,i(n.li,{children:["ls -l /etc | more",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"한 페이지 넘어가는 것 편하게 보기"}),`
`]}),`
`]}),`
`,i(n.li,{children:["ps -ef | grep bash",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"프로세스 특정한 것만 보기"}),`
`]}),`
`]}),`
`,i(n.li,{children:["Redirection 명령어들",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"ls -l > list.txt     (overwrite)"}),`
`,l(n.li,{children:"ls -l >> list.txt    (append)"}),`
`,l(n.li,{children:"sort < list.txt      (list 내용을 정렬하여 출력)"}),`
`,l(n.li,{children:"sort < list.txt > out.txt   (list 내용을 정렬해서 out에 쓰기)"}),`
`]}),`
`]}),`
`,i(n.li,{children:["kill -9 PS_NUM",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"무조건 종료한다는 의미가 -9."}),`
`]}),`
`]}),`
`,i(n.li,{children:["foreground process를 background process로 전환",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"yes > /dev/null"}),`
`,l(n.li,{children:"Ctrl + Z   (일시 중지 명령어)"}),`
`,l(n.li,{children:"bg"}),`
`,l(n.li,{children:"이러면 백그라운드로 이동하여 계속 실행 됨."}),`
`]}),`
`]}),`
`,i(n.li,{children:["background process를 foreground process로 전환",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"jobs   (백그라운드 가동 프로세스 확인)"}),`
`,l(n.li,{children:"fg [작업번호]  (포그라운드로 전환)"}),`
`]}),`
`]}),`
`,l(n.li,{children:"세미콜론(;): 명령어를 연속으로 실행할 때 사용"}),`
`,i(n.li,{children:["ls -l [검색할 파일 명]: 하위 폴더까지 재귀적으로 찾아줌..",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"ex: ls -l /dev/sd*"}),`
`]}),`
`]}),`
`,l(n.li,{children:"halt -p : 시스템 종료"}),`
`,i(n.li,{children:["which [커맨드 명] : 실행하려는 커맨드 위치가 어디인지 보여줌",`
`,l(n.pre,{children:l(n.code,{className:"language-bash",children:`readiz@Readiz-NotePC:~$ which bash
/usr/bin/bash
readiz@Readiz-NotePC:~$ which systemd
/usr/bin/systemd
`})}),`
`]}),`
`]}),`
`,l(n.h3,{id:"폴더-구조",children:"폴더 구조"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,l(n.p,{children:l(n.code,{children:"/home"})}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"리눅스 사용자들의 개인 공간"}),`
`,l(n.li,{children:"보통 일반 사용자는 home 밑에 별도의 설정이 없는 경우 자신의 아이디로 된 디렉토리가 배정됨(로그인 시 처음 작업 디렉토리가)"}),`
`,l(n.li,{children:"/root는 root 의 홈 디렉토리"}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[l(n.code,{children:"/bin"})," & ",l(n.code,{children:"/bash"})]}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"sbin 은 시스템 관리를 위한 명령들 => root에게만 허용됨"}),`
`,l(n.li,{children:"echo $PATH 로 확인"}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:l(n.code,{children:"/lib"})}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"리눅스 상에서 자주 사용되는 라이브러리를 모아놓음"}),`
`,l(n.li,{children:"Shared object file format(.so)"}),`
`,l(n.li,{children:"윈도우에서의 Dynamic Linked Library(DLL)을 모아놓은 폴더로 생각할 수 있음"}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:l(n.code,{children:"/etc"})}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"주요 설정 파일들이 위치한다"}),`
`,i(n.li,{children:["주요 리스트",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"motd : 로그인 성공 시 처음에 띄워주는 문구"}),`
`,l(n.li,{children:"passwd : 리눅스 사용자에 대한 정보(예전에는 사용자의 비밀번호(!) 도 있었음)"}),`
`,l(n.li,{children:"shadow : 리눅스 사용자 패스워드 정보 ( root만 볼수 있음)"}),`
`,l(n.li,{children:"sudoers : sudo 권한을 가진 사용자와 권한에 대한 정보"}),`
`,l(n.li,{children:"fstab : 파일 시스템과 마운트 포인터"}),`
`,l(n.li,{children:"hosts : 도메인 네임"}),`
`,l(n.li,{children:"issue : 리눅스 배포반 및 버젂"}),`
`,l(n.li,{children:"skel/ : 새로운 사용자가 추가될 때 홈 디렉토리에 기본적으로 복사해줄 파일들을 포함한 디렉토리"}),`
`,l(n.li,{children:"init.d/ : 컴퓨터가 부팅될 때 실행될 파일들을 넣어둔 디렉토리"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:l(n.code,{children:"/proc"})}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"RAM 위에 존재하며 커널에 의해 제어됨"}),`
`,l(n.li,{children:"현재 실행되는 프로세스와 실제로 사용되는 장치, 커널이 수집한 하드웨어 정보가 저장됨"}),`
`,l(n.li,{children:"사용자가 /proc이나 하위 파일에 접근할 때마다 커널에서 파일내용을 동적으로 만들어냄"}),`
`,i(n.li,{children:["각 프로세스는 고유의 ID를 가지고 있으며(숫자) 이 아이디를 가진 디렉토리 밑에 각종 정보를 저장함",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"cmdline : 프로세스를 시작한 명령행 내용"}),`
`,l(n.li,{children:"status : 프로세스의 내부 상태 정보"}),`
`,l(n.li,{children:"cwd : 프로세스의 현재 작업 디렉토리"}),`
`]}),`
`]}),`
`,l(n.li,{children:"/proc/meminfo : 총 메모리 사용 현황"}),`
`,l(n.li,{children:"/proc/stat : 시스템의 상태에 관한 정보"}),`
`,l(n.li,{children:"/proc/uptime : 시스탬이 부팅된 후 흐른 시간"}),`
`,l(n.li,{children:"/proc/version : 현재 실행되는 커널 버전"}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:l(n.code,{children:"/dev"})}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"실제로 하드디스크에 존재하지는 않는 정보를 저장함"}),`
`,l(n.li,{children:"모든 하드웨어( hdd,cdrom, 마우스, 가상 장치,etc…) 를 파일로 인식하며 이를 장치 파일이라 함"}),`
`,l(n.li,{children:"psaux PS/2 마우스 장치"}),`
`,l(n.li,{children:"tty : teletypewritter, 사용자와 시스템 사이를 중계하는 역할"}),`
`,l(n.li,{children:"사용자와 시스템 사이의 입출력은 모두 여기를 통해 이루어짐"}),`
`,l(n.li,{children:"서버 시스템에 직접 연결된 장치에서 사용함"}),`
`,l(n.li,{children:"pts: telnet, ssh 등을 이용해 원격으로 접속할 경우 (pseudo TTY slave)"}),`
`,l(n.li,{children:"유사 장치 : 실제 장치와 곾렦이 없음"}),`
`,l(n.li,{children:"null : 이 장치로 들어갂 데이터는 모두 사라짐"}),`
`,l(n.li,{children:"zero : 이 장치에서는 항상 null을 반환"}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,i(n.p,{children:[l(n.code,{children:"/mnt"})," & ",l(n.code,{children:"/media"})]}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"마운트: 한 파일 시스템의 루트 디렉토리를 다른 디렉토리에 붙임으로써 디렉토리를 사용할 수 있게 만들어주며, 모든 파일 시스템들을 마치 그들이 속해있는 파일시스템의 서브 디렉토리인 것처럼 사용 가능하게 만드는 것"}),`
`,l(n.li,{children:"이제는 많은 저장 매체들이 자동으로 마운트 되기 때문에 주로 /media(특히 우분투) 를 사용하는 경우가 많지만 mnt 를 사용하는 것은 자유"}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:l(n.code,{children:"/tmp"})}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"실행 중인 프로세스들의 임시 파일들을 저장"}),`
`,l(n.li,{children:"종료 시 이 위치에 있는 파일들은 모두 삭제됨"}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:l(n.code,{children:"/boot"})}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"부팅시에 필요한 필수 파일들이 저장됨"}),`
`,l(n.li,{children:"lilo, grub 등의 부트로더와 커널이 위치함"}),`
`,l(n.li,{children:"부트로더: 컴퓨터를 켰을 때 가장 먼저 실행되는 프로그램"}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:l(n.code,{children:"/var"})}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"리눅스 상에서 자주 변경되는 데이터들만을 모아 놓음"}),`
`,l(n.li,{children:"/var/lib: 일반적인 시스템 운용시 계속 갱신되는 파일들을 위한 공간"}),`
`,l(n.li,{children:"/var/local: /usr/local 아래에 설치된 프로그램들의 다양한 데이터가 보간"}),`
`,l(n.li,{children:"/var/lock : 잠금 파일(lock file)이 있는 곳이다."}),`
`,l(n.li,{children:"/var/log : 다양한 프로그램들의 로그 파일"}),`
`,l(n.li,{children:"/var/log/wtmp : 시스템의 모든 로그인, 로그아웃 정보를 기록"}),`
`,l(n.li,{children:"/var/log/messages: 커널과 시스템 프로그램들의 모든 메시지"}),`
`,l(n.li,{children:"/var/run : 시스템의 현재 정보, 부팅 시 리셋"}),`
`,l(n.li,{children:"/var/run/utmp : 현재 로그인한 사용자들에 대한 정보"}),`
`,l(n.li,{children:"/var/spool : 대기 상태에 있는 작업들을 위한 디렉토리"}),`
`,l(n.li,{children:"/var/tmp : /tmp에 있는 임시 파일들보다는 좀 더 오래 유지될 필요가 있는 임시 파일들, 부팅 시 지워지지 않는다."}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:l(n.code,{children:"/usr"})}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"리눅스 상에서 가장 큰 공간을 사용하는 디렉토리"}),`
`,l(n.li,{children:"어플리케이션 수준의 프로그램들이 여기에 있음"}),`
`,l(n.li,{children:`usr 밑의 bin, lib,… 등은 사용자가 자유롭게 다룰 수 있으 며 루트 디렉토리의 같은 이름을 가진 디렉토리와 같은 역할
을 한다. (대신 우선순위가 떨어진다.)`}),`
`,l(n.li,{children:"/usr/bin : 실행 가능한 명령어, 주로 콘솔이나 X에서 사용되는 명령어들"}),`
`,l(n.li,{children:"/usr/sbin : 시스템 곾리를 위한 명령어, 주로 서버 곾리용"}),`
`,l(n.li,{children:"/usr/lib : 프로그램과 하위 시스템을 위한 라이브러리"}),`
`,l(n.li,{children:"/usr/man, /usr/info, /usr/doc :각각 매뉴얼 페이지, GNU Info 문서들, 그리고 기타 다른 문서"}),`
`,l(n.li,{children:"/usr/include : C 를 위한 헤더 파일"}),`
`,l(n.li,{children:"/usr/X11R6 : X window"}),`
`,l(n.li,{children:"/usr/src : 시스템에 빌드하는 프로그램의 소스"}),`
`,l(n.li,{children:"/usr/share : 읽기 전용 자료, 주로 매뉴얼이나 문서 자료"}),`
`,l(n.li,{children:"/usr/local : 리눅스에서 필수적인 파일이나 배포판에서 확장되는 파일들을 제외한 응용 프로그램 파일들을 저장"}),`
`,l(n.li,{children:"/bin : 문서에 명시되어 있는 명령어 및 필수적인 명령어"}),`
`,l(n.li,{children:"/usr/bin : 주로 콘솔과 X에서 사용되는 명령어"}),`
`,l(n.li,{children:"/usr/local/bin : 그 외 어플리케이션에 의해 추가되는 명령어"}),`
`]}),`
`]}),`
`]}),`
`,l(n.h3,{id:"서비스란",children:"서비스란"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["서비스 = 데몬 은 서버 프로세스를 말함.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"클라이언트에 설치되는 웹 서버 데몬, 네임 서버 데몬 등으로 부르기도 함"}),`
`,l(n.li,{children:"서비스는 눈에 보이지는 않지만 현재 시스템에서 동작 중인 프로세스임. 백그라운드 프로세스의 일종."}),`
`,l(n.li,{children:"하지만 위에서 배운 jobs를 쓴다고 해서 나오는 녀석은 아님."}),`
`]}),`
`]}),`
`,l(n.li,{children:'기존에는 "init" 이라는 최상위 프로세스가 서비스를 직접 관리하는 방식이었지만, 요즘은 systemd가 대세임.'}),`
`,l(n.li,{children:"서비스는 평상시에도 늘 가동되는 서버 프로세스"}),`
`,l(n.li,{children:"소켓은 필요할 때만 가동되는 서버 프로세스. --> 서비스 / 소켓 모두 systemd가 관리."}),`
`,l(n.li,{children:"대표적인 놈은 httpd, mysqld, vsftpd -> d는 daemon을 의미하는 것."}),`
`,i(n.li,{children:['서비스의 실행 스크립트 파일은 /usr/lib/systemd/system/ 디렉터리에 "서비스이름.service"로 확인 가능.',`
`,i(n.ul,{children:[`
`,l(n.li,{children:"Cron 서비스의 경우 crond.service라는 파일로 존재함"}),`
`]}),`
`]}),`
`,i(n.li,{children:["서비스의 경우 systemd를 사용한다는 가정 하에 systemctl start/stop/restart를 사용할 수 있다.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"systemctl status <서비스 이름>, systemctl enable/disable <서비스 이름>"}),`
`]}),`
`]}),`
`,i(n.li,{children:["소켓은 서비스와 다르게 항상 가동되는 것은 아님. 외부에서 특정 서비스가 요청할 경우 systemd가 실행하는 구조. 요청이 끝나면 소켓도 종료",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"소켓 위치: /usr/lib/systemd/system/*.socket"}),`
`,l(n.li,{children:"dbus, ssh, log 등등"}),`
`]}),`
`]}),`
`]}),`
`,l(n.h3,{id:"커널과-모듈들",children:"커널과 모듈들"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["하드웨어 > 커널 > 쉘 > 응용 프로그램",`
`,i(n.ul,{children:[`
`,l(n.li,{children:'커널은 메모리 위에서 동작하며, 커널이 커지면 메모리도 많이 먹게 되므로 당장에 사용하지 않는 드라이버 등은 "모듈"로 빼게 되었다.'}),`
`,l(n.li,{children:"커널은 하드웨어와 밀접한 관련이 있으며 최신 커널일 수록 지원하는 하드웨어도 많다. 보안 개선도 있고.."}),`
`]}),`
`]}),`
`,i(n.li,{children:["커널의 실체 역시 파일이다.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"CentOS의 경우 /boot/vmlinuz 아래에 있다."}),`
`]}),`
`]}),`
`,l(n.li,{children:"커널 버전 알아보려면 uname -r 쓰면 됨. 그냥 uname은 배포판? 을 출력함."}),`
`,i(n.li,{children:["배포는 ",l(n.a,{href:"https://www.kernel.org/",children:"https://www.kernel.org/"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"현재(2021/1/21) 최신은 5.11"}),`
`]}),`
`]}),`
`]}),`
`,l(n.h3,{id:"x-window",children:"X Window"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"폴더는 GUI / 디렉토리는 TUI에서 사용하는 말"}),`
`,i(n.li,{children:["chown -R root.root /usr/local/firefox/",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"Firefox 관련 파일을 모두 root 사용자 소유로 변경"}),`
`]}),`
`]}),`
`]}),`
`,l(n.h3,{id:"하드디스크",children:"하드디스크"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,l(n.p,{children:"하드 자체는 /dev/sda, /dev/sdb, /dev/sdc 순으로 붙게 된다."}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:"논리적으로는 /dev/sda1, /dev/sda2, ... 요런식으로 분할도 된다."}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:"/dev/sda1 같은 녀석들은 바로 쓸 수는 없고 반드시 마운트 시켜야 한다."}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:"마운트 과정"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"SCSI 0:1 -> /dev/sdb -> /dev/sdb1 -> mkfs.ext4 -> mount -> /mydata -> /etc/fstab에 등록."}),`
`,i(n.li,{children:["명령어 실행 순서",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"fdisk /dev/sdb => SCSI 0:1 하드디스크 스택"}),`
`,l(n.li,{children:"파티션 생성 (1개의 파티션만 쓸 지라도)"}),`
`,l(n.li,{children:"파티션이 생성되면 /dev/sdb1 이 된다."}),`
`,l(n.li,{children:"mkfs -t [파일시스템] [파티션장치] => 파일 시스템을 지정"}),`
`,l(n.li,{children:"mount /dev/sdb1 /mydata => 마운트 명령"}),`
`,l(n.li,{children:"이렇게 만든 mount는 재시작 시 유지되지는 않으므로 추가 설정을 할 필요가 있다."}),`
`,l(n.li,{children:"vi /etc/fstab에 아래를 추가"}),`
`,l(n.li,{children:"/dev/sdb1 /mydata ext4 defaults 0 0"}),`
`,l(n.li,{children:"/etc/fstab는 리눅스가 부팅될 때마다 읽는 매우 중요한 파일. 글자가 틀릴경우 아예 부팅되지 않을 수 있으므로 주의 필요."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:"보통 /dev/sda1은 SWAP에 mount 되고, /dev/sda2는 '/' 에 마운트 됨"}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:"df 명령어를 사용하면 마운트 현황을 알 수 있음"}),`
`,l(n.pre,{children:l(n.code,{className:"language-text",children:`Filesystem      1K-blocks       Used  Available Use% Mounted on
/dev/sdb        263174212    5290692  244445364   3% /
tools           249105148  164725580   84379568  67% /init
none              6509908          0    6509908   0% /dev
tmpfs             6512308          0    6512308   0% /sys/fs/cgroup
none              6512308         16    6512292   1% /run
C:\\             249105148  164725580   84379568  67% /mnt/c
`})}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:"WSL의 경우 파일시스템 자체가 C:\\ 등으로 나오기도 함."}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:"서버에서는 RAID를 많이 사용함"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"RAID: Redundant Array of Inexpersive/Independent Disks"}),`
`,l(n.li,{children:"하드웨어 RAID도 존재는 한다."}),`
`,i(n.li,{children:["Linear RAID / RAID 0 : 최소 2게 이상의 HDD 필요. 하지만 저장 방식이 차이가 있다.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"Linear 방식은 첫번째 HDD 부터 사용, RAID 0는 N개의 HDD를 동시에 사용."}),`
`,l(n.li,{children:"동시에 사용하는 방식을 Stripping 이라고 하며 성능 향상에 도움이 된다."}),`
`,l(n.li,{children:"그러나 당연한 이야기이지만 데이터 복구는 불가능함."}),`
`,l(n.li,{children:`Linear RAID는 그나마 차례로 쓰기 때문에 (성능은 낮지만) 하드 손상 시 다른 데이터들은 멀쩡하지만,
RAID 0의 경우 파일 부분부분 모두 손상되기 때문에 사실상 복구의 가능성은 없다고 봐야 한다.
하드가 100개라면 손상 확률은 100배가 된다는 뜻.`}),`
`,l(n.li,{children:"Linear RAID를 제와하고 다른 RAID 들은 동일한 용량의 HDD를 사용하기 마련임."}),`
`]}),`
`]}),`
`,i(n.li,{children:["RAID 1: 미러링, 2배의 용량 사용",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"RAID 0과 1은 장단점이 명백.."}),`
`]}),`
`]}),`
`,i(n.li,{children:["RAID 5: 3개 이상의 HDD가 있어야 사용 가능, 대부분 5개 이상으로 구성함.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"오류가 있을 시 Parity를 사용하여 복구 가능"}),`
`,i(n.li,{children:["5개 HDD에서 짝수 Parity를 사용한다고 가정 하면, HDD 1개가 망가져도 100% 복구 가능",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"4개의 HDD는 데이터 저장용, 나머지 1개는 Parity 용."}),`
`,l(n.li,{children:"0010 데이터의 경우 1을 저장, 어느 1 bit가 없더라도 나머지 1개의 bit를 알 수 있다."}),`
`,l(n.li,{children:"저장 효율 80% (5개의 HDD가 있을 시), 이는 RAID 1의 50%를 훨씬 상회하는 수치임."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(n.li,{children:["RAID 6: 2개의 Parity를 사용 - 최소 4개 이상의 HDD에서 사용.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"Parity 알고리즘이 RAID 5보다 약간 더 복잡해져서 성능이 약간 더 떨어지게 된다."}),`
`]}),`
`]}),`
`,i(n.li,{children:["RAID 1+0 / RAID 1+6 처럼 Stripping 도 가능.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"RAID 1+0: 속도 & 신뢰도"}),`
`,l(n.li,{children:"RAID 1+6: 성능과 비용은 많이 들지만 신뢰도가 훨씬 높다."}),`
`]}),`
`]}),`
`,l(n.li,{children:"RAID 구성에는 mdadm 명령어를 사용. (RAID 장치를 생성/관리하는 명령어.. 물론 SW RAID 이다.)"}),`
`,l(n.li,{children:"mount: RAID 없이 붙임, mdadm: RAID를 사용하여 새 장치를 만듬.. (/dev/md*)"}),`
`]}),`
`]}),`
`,i(n.li,{children:[`
`,l(n.p,{children:"LVM: 논리 하드디스크 관리자(Logical Volume Manager)"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"물리 볼륨(/dev/sda1, ...)"}),`
`,l(n.li,{children:"볼륨 그룹: 물리 볼륨을 합침"}),`
`,l(n.li,{children:"논리 볼륨: 논리적으로 다른 불륨을 나눠서 합칠 수도 있고 그런 개념 (/dev/sda1의 절반 + /dev/sdb1의 절반 등)"}),`
`]}),`
`]}),`
`]}),`
`,l(n.h3,{id:"linux-shell-",children:"Linux Shell **"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["Shell이란",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"사용자가 입력한 명령을 해석해 커널로 전달하거나, 커널의 처리 결과를 사용자에게 전달하는 역할을 함."}),`
`]}),`
`]}),`
`,i(n.li,{children:["bash Shell",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["bash: Bourne Again SHell. CentOS 등 다양한 Linux 배포판에서 기본적인 Shell로서 기능한다. 의미는 Bourne Shell을 기반으로 Korn Shell과 C Shell의 좋은 점을 합한 것.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"Alias 기능 (단축어 기능)"}),`
`,l(n.li,{children:"History 기능 (위, 아래 방향키)"}),`
`,l(n.li,{children:"연산 기능"}),`
`,l(n.li,{children:"Job Control 기능"}),`
`,l(n.li,{children:"자동 이름 완성 기능 (Tab)"}),`
`,l(n.li,{children:"프롬포트 제어 기능"}),`
`,l(n.li,{children:"명령어 편집 기능"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(n.li,{children:["환경 변수",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["설정된 환경 변수는 ",l(n.code,{children:"echo [$환경변수이름]"})," 하면 볼 수 있음."]}),`
`,i(n.li,{children:["주요 환경 변수는 아래와 같음",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"HOME: 사용자의 홈 디렉토리"}),`
`,l(n.li,{children:"PATH: 실행 파일을 찾는 디렉토리 경로"}),`
`,l(n.li,{children:"LANG: 기본 언어"}),`
`,l(n.li,{children:"PWD: 사용자의 현재 작업 디렉토리"}),`
`,l(n.li,{children:"TERM: 로그인 터미널 타입"}),`
`,l(n.li,{children:"DISPLAY: X 디스플레이 이름"}),`
`,l(n.li,{children:"USER: 현재 사용자의 이름"}),`
`,l(n.li,{children:"LINES: 현재 터미널 라인 수"}),`
`,l(n.li,{children:"COLUMNS: 현재 터미널의 컬럼 수"}),`
`,l(n.li,{children:'PS1/PS2: 1차, 2차 명령 프롬포트. 2차는 대개 ">" 이다.'}),`
`,l(n.li,{children:"BASH: Bash 쉘 경로"}),`
`,l(n.li,{children:"HOSTNAME / USERNAME"}),`
`,l(n.li,{children:"OSTYPE: OS 타입 (ex: linux-gnu)"}),`
`]}),`
`]}),`
`,i(n.li,{children:["값을 변경하려면 ",l(n.code,{children:"export [환경변수]=[값]"}),"을 실행하면 됨."]}),`
`,i(n.li,{children:[l(n.code,{children:"printenv"}),"를 실행하면 주요 환경변수 값들이 출력 됨."]}),`
`]}),`
`]}),`
`,i(n.li,{children:["리눅스의 Shell Script는 C 언어와 유사한 방법으로 프로그래밍 가능. 왜냐하면 리눅스의 대부분은 C 언어로 작성되었기 때문.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"변수, 반복문, 제어문 등이 사용되며 컴파일 필요 없이 텍스트 파일 형태로 바로 Shell에서 실행 가능"}),`
`,l(n.li,{children:"이미 리눅스의 많은 부분이 Shell Script로 작성되어 있다."}),`
`,l(n.li,{children:"확장자가 *.sh 일 필요는 없지만 구분을 위해 주로 해당 확장자로 많이 만드는 편임."}),`
`,i(n.li,{children:["간단한 예제",`
`,l(n.pre,{children:l(n.code,{className:"language-sh",children:`#!/bin/sh
echo "사용자 이름: " $USER
echo "홈 디렉터리: " $HOME
exit 0
`})}),`
`]}),`
`,i(n.li,{children:[l(n.code,{children:"exit 0"}),"에서 ",l(n.code,{children:"0"}),"은 성공을 의미함"]}),`
`]}),`
`]}),`
`,i(n.li,{children:["스크립트 실행",`
`,i(n.ul,{children:[`
`,i(n.li,{children:[l(n.code,{children:"sh [스크립트 파일명]"}),"으로 간단하게 실행 가능"]}),`
`,i(n.li,{children:[l(n.code,{children:"chmod +x [스크립트 파일명]"}),"으로 속성 변경 후 ",l(n.code,{children:"./[스크립트 파일명]"}),"으로 실행 가능",`
`,i(n.ul,{children:[`
`,i(n.li,{children:[l(n.code,{children:"./"}),"을 앞에 붙이는 이유는, ",l(n.code,{children:"$PATH"}),"에 현재 디렉터리가 등록되어 있지 않기 때문. 실행은 오로지 ",l(n.code,{children:"$PATH"}),"에 있는 경로만 찾기 때문에, 강제로 위치를 붙여주는 것."]}),`
`,i(n.li,{children:["root 사용자로 작성했을 경우에는 기본적으로 root 사용자만 사용 가능함. 타 사용자도 사용가능하게 하려면 ",l(n.code,{children:"/usr/local/bin"}),"으로 스크립트를 복사하고 권한을 755 정도로 주면 된다."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(n.li,{children:["스크립트 작성",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["변수",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"변수의 경우 C 처럼 미리 선언할 필요는 없고, JS 처럼 그냥 처음 사용하여 할당하면 생성된다."}),`
`,l(n.li,{children:"모든 값은 String 취급이다. 숫자를 넣어도 문자로 생각함."}),`
`,l(n.li,{children:"대소문자를 구분함"}),`
`,i(n.li,{children:["대입시 ",l(n.code,{children:"="})," 좌우에 공백이 없어야 한다."]}),`
`,i(n.li,{children:["값에 공백이 있을 경우 ",l(n.code,{children:'"'}),"로 묶어야 한다."]}),`
`,i(n.li,{children:["값을 불러올 때는 ",l(n.code,{children:"$"}),"를 앞에 붙인다."]}),`
`,i(n.li,{children:[l(n.code,{children:"$"})," 문자가 들어간 글자를 출력하려면 ",l(n.code,{children:"\\"}),"로 escape 시키거나 작은따옴표(",l(n.code,{children:"'"}),")를 사용하여 묶어준다. (안그러면 변수 취급이므로)"]}),`
`,i(n.li,{children:["일반적으로 입력된 값에 공백이 들어올 수 있으므로, ",l(n.code,{children:'"$myvar"'}),"와 같이 큰따옴표로 묶는 방식이 선호된다."]}),`
`,l(n.li,{children:"아래는 위 내용을 종합한 예시 코드"}),`
`]}),`
`,l(n.pre,{children:l(n.code,{className:"language-sh",children:`#!/bin/sh
myvar="Hello World!"
echo $myvar
echo "$myvar"
echo '$myvar'
echo \\$myvar
echo 값 입력 :
read myvar
echo '$myvar' = $myvar
exit 0
`})}),`
`]}),`
`,i(n.li,{children:["숫자 계산",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["변수는 기본적으로 문자열 취급이지만, ",l(n.code,{children:"expr"})," 키워드를 사용해서 연산이 가능하다."]}),`
`,l(n.li,{children:"수식과 함께 역따옴표(`)로 묶어줘야 한다."}),`
`,i(n.li,{children:["수식에 괄호를 사용하기 위해서는 역슬래시(\\)를 붙여줘야 한다.",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"괄호 앞 뒤에는 공백을 넣자. (오동작 방지)"}),`
`,l(n.li,{children:"기본적으로 expr 사용 시에는 단어마다 띄어쓰기를 사용한다고 생각."}),`
`]}),`
`]}),`
`,l(n.li,{children:"곱하기 기호(*)도 예외적으로 앞에 역슬래시를 붙여줘야 한다."}),`
`]}),`
`,l(n.pre,{children:l(n.code,{className:"language-sh",children:`#!/bin/sh
num1=100
num2=$num1+200
echo $num2
num3=\`expr $num1 + 200\`
echo $num3
num4=\`expr \\( $num1 + 200 \\) / 10 \\* 2\`
echo $num4
exit 0
`})}),`
`]}),`
`,i(n.li,{children:["파라미터 변수",`
`,i(n.ul,{children:[`
`,i(n.li,{children:[l(n.span,{className:"math math-inline",children:i(n.span,{className:"katex",children:[l(n.span,{className:"katex-mathml",children:l(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:i(n.semantics,{children:[i(n.mrow,{children:[l(n.mn,{children:"0"}),l(n.mo,{separator:"true",children:","})]}),l(n.annotation,{encoding:"application/x-tex",children:"0, "})]})})}),l(n.span,{className:"katex-html","aria-hidden":"true",children:i(n.span,{className:"base",children:[l(n.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),l(n.span,{className:"mord",children:"0"}),l(n.span,{className:"mpunct",children:","})]})})]})}),"1, $2와 같은 녀석들임"]}),`
`,l(n.li,{children:"실행하는 명령어의 부분부분을 변수 취급 함"}),`
`,i(n.li,{children:[l(n.code,{children:"dnf -y install gftp"})," 라는 명령어가 있다면",`
`,i(n.ul,{children:[`
`,l(n.li,{children:"$0: dnf"}),`
`,l(n.li,{children:"$1: -y"}),`
`,l(n.li,{children:"$2: install"}),`
`,l(n.li,{children:"$3: gftp"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(n.li,{children:["if와 case",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["바로 예제를 보자. (",l(n.code,{children:"="}),"이 같음을 표시하는 기호임에 유의!)"]}),`
`]}),`
`,l(n.pre,{children:l(n.code,{className:"language-bash",children:`#!/bin/sh
if [ "$1" = "" ]
then
  echo "인수를 입력하지 않았습니다."
else
  echo "인수를 입력하였습니다: " $1
fi
exit 0
`})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,l(n.h1,{id:"리눅스-입문자를-위한-명령어-사전",children:"리눅스 입문자를 위한 명령어 사전"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"by 가와구치 히로시"}),`
`]}),`
`,l(n.h2,{id:"chapter-06-편리한-명령어-사용법",children:"Chapter 06. 편리한 명령어 사용법"}),`
`,l(n.h3,{id:"명령어-입출력을-파일로-전환",children:"명령어 입출력을 파일로 전환"}),`
`,i(n.ul,{children:[`
`,l(n.li,{children:"ps > pslog"}),`
`]}),`
`,l(n.pre,{children:l(n.code,{className:"language-bash",children:`readiz@Readiz-NotePC:/mnt/e/collected/selfdev/git/baekjoon/class/extra/20211127$ ps > pslog
readiz@Readiz-NotePC:/mnt/e/collected/selfdev/git/baekjoon/class/extra/20211127$ cat pslog
  PID TTY          TIME CMD
1339 pts/2    00:00:00 bash
14658 pts/2    00:00:00 p
`})}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[l(n.code,{children:"date >> datelog"}),": ",l(n.code,{children:">>"})," 를 쓰면 Append 명령어임"]}),`
`]}),`
`,l(a,{}),`
`,l(o,{})]})}function u(e={}){const{wrapper:n}=Object.assign({},d(),e.components);return n?l(n,Object.assign({},e,{children:l(r,e)})):r(e)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=h;c.main=m;export{c as default};
