---
title: "첫 번째 블로그 글 — 작성 예시"
published: 2026-11-14
description: "이미지, 링크, 코드와 수식을 넣어 보는 샘플 글입니다. 이 폴더를 복사해서 새 글을 시작하세요."
image: "./images/cover.svg"
tags: [Blog, Sample]
category: "Notes"
draft: false
lang: "ko"
---

새 홈페이지에 첫 글을 남깁니다. 이 글은 **수정과 복사가 가능한 샘플**입니다.
`src/content/posts/first-post/index.md`를 열어 문장을 바꿔 보세요.

## 이미지 넣기

이미지는 각 글의 `images/` 폴더에 두면 관리하기 쉽습니다.
아래 그림은 이 프로젝트에서 직접 만든 SVG 예시입니다. 사진은 JPG, PNG, WebP도 사용할 수 있습니다.

![푸른 산 능선과 밝은 해를 표현한 샘플 풍경](./images/cover.svg)

내 사진을 `photo.jpg`라는 이름으로 `images/` 폴더에 넣었다면 `![사진 설명](./images/photo.jpg)`로 표시할 수 있습니다.
맨 위의 `image`는 목록에 표시되는 표지입니다.

## 글 쓰기

- **굵게** 강조하거나 *기울임*을 쓸 수 있습니다.
- [GitHub 프로필](https://github.com/San-Juna-H)처럼 링크를 넣습니다.
- 제목은 `##`, 소제목은 `###`로 시작합니다.

> 연구 중 떠오른 생각이나 짧은 메모를 여기에 적어도 좋습니다.

### 코드와 수식

```python
message = "Hello, blog!"
print(message)
```

문장 안에는 $E = mc^2$처럼 수식을 쓸 수 있습니다.

## 다음 글 만들기

이 폴더를 복사해서 `my-note` 등 다른 이름을 붙이세요.
복사한 `index.md`의 제목, 날짜, 설명, 태그와 본문을 바꾸면 됩니다.
작성 중에는 `draft: true`, 공개하려면 `draft: false`로 설정합니다.
샘플이 필요 없어지면 `first-post` 폴더 전체를 삭제하세요.
