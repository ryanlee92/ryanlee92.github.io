---
layout: post
title:  "왜 블로그를 직접 만들었을까?"
author: ryan
categories: [ "IT", "programming"]
description: "블로그를 직접 만들기까지 고민했던 내용들에 대한 흔적"
featured: false
hidden: false
--- 

블로그를 시작하기로 결심하고 수많은 블로그 서비스들을 고려했었다. 네이버 블로그, 티스토리, Medium, Github Pages, Velog, Notion + Oopy, Wordpress 등등 유명한 서비스들은 모두 확인했고 결론은 시중에 있는 블로그 서비스들로는 나의 블로그 운영 니즈를 채울수 없다는 것이었다.

그런 이유로 귀차니스트인 내가 귀찮음을 감수하고 오픈소스 블로그 제작 툴인 Jekyll을 통해 NAS에 직접 블로그를 구축했다.

## 블로그를 제작하기 위한 조건
블로그를 시작하기에 앞서 블로그를 운영하는데 반드시 필요한 조건들을 나열했는데, 다음과 같다.

1. 마크다운으로 작성이 가능할 것 
> 마우스로 스타일링 하기 너무 귀찮다.

2. 디자인이 충분히 이쁠 것
> 시각적으로 보기 좋아야 글을 쓸 마음도 생긴다.

3. 유지보수와 확장이 쉬울 것
> 커스텀 하고 싶은 부분을 커스텀 할 수 있고, 넣고 싶은 기능을 자유롭게 넣을 수 있어야 한다.

4. 비용이 들지 않을 것
> 블로그가 충분히 성장하지 않은 상태에서 비용까지 지불하면서 블로그를 만들어나갈 생각은 없었다.

5. 아이패드로 글을 작성할 수 있을 것
> 노트북이 아닌 아이패드를 주력 컴퓨팅 머신으로 활용하고 있는 상황이라 (프론트엔드 개발과 같은 특수한 경우 제외) 아이패드 앱으로 유려하게 글을 작성할 수 있어야 한다.

6. 수익화가 가능할 것
> 서버비에 일조하는 수준의 광고비는 트래픽이 많아졌을때 얻을 수 있어야...

## 서비스마다의 문제점
위와 같은 조건을 놓고 봤을때 각각의 블로그 서비스들은 다음과 같은 문제가 있었다.
특히 가장 중요한 조건인 `마크다운으로 작성이 가능할 것` 에서 몇몇은 걸러졌는데, 그중 살아남은 서비스들은 다음과 같다.

1. 티스토리
2. Github Pages
3. Medium
4. Velog
5. Notion + Oopy
6. Wordpress

또 이 중 그 다음으로 중요한 비용이 들지 않고 수익화가 가능할 것 이라는 조건에 부합하는 서비스는 

1. 티스토리
2. Github Pages
3. 설치형 Wordpress

정도가 남았다.

**Medium**의 경우 수익화가 불가능함에도 디자인이 너무 예뻐서 사용할까 고민을 많이 했지만 코드 블럭 같은 것에 대한 지원이 미흡하다는 얘기가 있어 결국 반려했다.

이렇게 남은 서비스들 중 **티스토리**는 일단 아이패드로 글을 작성할 맛이 나질 않았다. 아이패드 앱이 딱히 불편하다기 보단 디자인이 취향이 아닌 것에 더 가까웠던것 같다. 

**Github Pages**의 경우 채택 직전까지 갔으나, Github Pages에서 블로그를 만들때 주로 이용하는 **Jekyll**의 무료 테마중에 유일하게 마음에 들었던, 위에 언급했던 Medium의 디자인을 레퍼런스 삼아 제작한 **Mediumish** 테마 적용이 되지 않아 포기했다. 결국 디자인의 문제.

**설치형 Wordpress**의 경우 특별히 맘에드는 디자인 템플릿이 없었고, 오래 살펴보지 않았지만 마우스 gui로 페이지를 이쁘게 만드는게 쉽진 않았다.

이렇게 적고 보니 그다음으로 중요했던 조건은 디자인이었을지도..?

## 결과적으로
**Jekyll**을 직접 NAS에서 돌리면서 **Mediumish** 테마를 적용하는게 유일한 해결책이라는 결론을 냈고 그 결과 이런 블로그가 탄생했다.

아주 마음에 드는 디자인을 갖고 있으면서 마크다운으로 작성이 가능하며 유지보수와 확장에 용이하고 아이패드로 글을 작성하기 좋고 (이 부분은 나중에 Blink Shell에 대한 포스팅에서 다룰 예정이다. 놀랍게도 VSCode로 작성하고 있다..!) 비용이 들지 않으며 수익화가 가능하다. 주말을 투자해서 리서치한 보람이 있는 결과다.



<!-- 
---
layout: post
title:  "Inception Movie"
author: john
categories: [ Jekyll, tutorial ]
tags: [red, yellow]
image: assets/images/11.jpg
description: "My review of Inception movie. Actors, directing and more."
rating: 4.5
featured: true
hidden: false
beforetoc: "Markdown editor is a very powerful thing. In this article I'm going to show you what you can actually do with it, some tricks and tips while editing your post."
toc: true // 목차를 사용할 것인지
--- 
-->
