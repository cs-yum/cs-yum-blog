해당 파일은 blog 작성 요령을 알려주는 md 파일입니다.

blog 폴더에서 글 발행 시, --- 안에 들어간 키워드들을 채워 주요 정보를 보여줄 수 있습니다.
단, 파일 최상단에 위치시켜야 동작이 됩니다. (됴큐사우르스 blog 발행 규칙)

---
slug: cs-yum.github.io/cs-yum-blog/ 뒤에 붇는 url 경로를 지정합니다.
title: 블로그 제목을 작성합니다.
description: 공유 카드 아래 보여지는 문구를 작성합니다.
image: 공유 카드에 들어가는 이미지를 url을 넣습니다.
authors: 최지훈, 장문용, 한은지, 김민섭 중 작성자 이름을 배열에 넣어 작성자를 명시합니다.
---

예시는 다음과 같습니다.
---
slug: closer
title: JS의 Closer란?
description: JS의 Closer를 자세히 공부해 봅시다.
image: https://i.imgur.com/mErPwqL.png
authors: [최지훈]
---

위 --- 라인 아래로는 마크다운을 활용하여 자유롭게 글을 발행하면 됩니다.

만약 글 발행 시 html 태그로 마크다운 기록을 하고 싶다면, .mdx 확장자를 사용해 주시길 바랍니다.
