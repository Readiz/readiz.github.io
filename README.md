# Readiz Pages — Deprecated

옛 블로그는 2026-10-09 운영을 종료했습니다. 새 글과 홈페이지 개발은 [Readiz 홈페이지](https://www.readiz.com/) 및 `Readiz/new-home`에서 관리합니다.

이 저장소의 `master`는 옛 블로그 소스와 기록을 보존합니다. 기존 블로그 자동 빌드·배포는 중단했으며, 과거 소스·글·자산·Git 이력은 삭제하지 않습니다.

`gh-pages`는 [git.readiz.com](https://git.readiz.com/)의 GitHub Pages 계정 도메인을 유지합니다. 2026-10-16부터 첫 화면과 옛 글 HTML은 새 홈페이지의 대응 주소로 이동하며, 이전 배포본은 Git 이력에 보존합니다. 계정 Pages 도메인을 사용하는 CodingNote, JSPlaygrounds, RandomGame, h-contest-lesson, invest-news 등은 각 저장소에서 계속 관리합니다.

- 현재 홈페이지: <https://www.readiz.com/>
- 계정 Pages 첫 화면: <https://git.readiz.com/> → <https://www.readiz.com/>
- 기존 프로젝트별 Pages 경로와 `RandomGame/privacy.html`은 유지합니다.
- 운영 종료 주소: `blog.readiz.com`

`git.readiz.com`은 Readiz 계정에서 DNS TXT 소유권을 확인한 뒤 GitHub Pages에 직접 연결했습니다. Pages 사용자 지정 도메인과 `gh-pages/CNAME`은 모두 `git.readiz.com`으로 유지하고 HTTPS를 강제합니다. 운영 설정은 `Readiz/new-home`의 `ops/README.md`에서 관리합니다. 옛 블로그 빌드 결과로 `gh-pages`를 덮어쓰지 마세요.

옛 글 이동 페이지의 생성기는 `Readiz/new-home`의 `scripts/retire-legacy-pages.mjs`입니다. CNAME과 프로젝트 경로를 유지한 채 기존 블로그 HTML만 갱신합니다. 알 수 없는 경로는 404로 응답합니다.
