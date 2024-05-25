# 갤러리 프로젝트

지금까지 배운 모든 개념을 활용하여 게시판 기능을 하는 간단한 갤러리를 만듭니다.

## ❍ 목표

- 실제 동작하는 간단한 멀티페이지 웹 어플리케이션을 개발할 수 있다.
- 백엔드와 데이터를 주고받기 위한 axios로 REST API 통신을 능숙하게 다룰 수 있다.

## ❍ project stack

- React Router ([react-router-dom@6](https://reactrouter.com/docs/en/v6/getting-started/installation))
- Styled Components ([styled-components](https://styled-components.com/docs/basics#installation))
- Axios ([axios](https://axios-http.com/kr/docs/intro))

## ❍ 동작 영상

![solution](https://github.com/ThinkMuk/FE-Week7-Axios-Gallery-release/assets/87813995/81da8494-a67f-4ec3-8fbb-c6d5e2c4ab0b)

## ❍ API

요청을 위한 호스트 문서는 아래와 같습니다.

- **DOCS** : http://3.36.127.43:8080/swagger-ui/#/GalleryController

# 고찰 및 결과

- 폴더 구조
  - assets: likelion 프로필 사진 저장
  - components: Card.jsx, Comments.jsx
  - pages: Atricle.jsx, Home.jsx, NotFound.jsx
- 컴포넌트 구조
  - Home: 안에 Card.jsx를 map으로 나열하여 grid를 사용해 정렬
  - Card: 각각의 요소들을 클릭할 시, useNavigate를 통해 Article.jsx로 연결
  - Article: Home.jsx에서 axios를 통해 받아온 정보를 사용하여 제목, 설명, 사진을 display 함. articleId를 Comments.jsx로 param을 통해 전달
  - Comments: articleId를 사용해 axios로 댓글 fetch, 작성, 삭제
    - 추가적으로 댓글이 하나도 없을 때 "댓글창이 비어있어요!" 구현
  - NotFound: React Router로 설정해둔 경로 외로 접속했을 시 해당 컴포넌트 display
