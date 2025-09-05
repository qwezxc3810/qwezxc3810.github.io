---
layout: post
title: "Oneul Code - 00.블로그 개설"
date: 2025-09-04 16:00:00 +0900
categories: dev
---

🎉 블로그 개설 시작 🎉

# 1. Jekyll 구조 이해

Jekyll 프로젝트는 주로 다음과 같은 폴더 구조를 갖습니다:

\_layouts/
\_pages/
\_posts/
\_data/

- \_layouts: 페이지 레이아웃 정의 (홈, 글, 일반 페이지 등)

- \_pages: About, Portfolio 같은 정적 페이지

- \_posts: 블로그 글 작성

- \_data: 메뉴, 설정 등 반복 데이터 관리

**처음 보면 홈, 글, 페이지 레이아웃을 각각 연결하는 구조가 헷갈릴 수 있습니다.**

(저도 헷갈려서 AI에게 많이 물어봤습니다. ~.~)

# 2. Liquid 템플릿 언어

Liquid는 Jekyll에서 사용하는 템플릿 언어입니다.

```liquid
{% raw %}{% for post in site.posts %}
  {% if post.categories contains 'dev' %}
    - [{{ post.title }}]({{ post.url | relative_url }})
  {% endif %}
{% endfor %}{% endraw %}
```

- 반복문과 조건문을 사용하여 글을 필터링합니다.

- 프로그래밍 경험이 없다면 “카테고리 기반 필터링”이나 “상대 URL 처리”가 헷갈릴 수 있습니다.

- 저도 Liquid 템플릿 언어를 처음써서 언제 쓰고 어떻게 쓰는지 잘 몰라 공부를 했습니다.

## 2-1 Liquid 템플릿 언어에 대해서...

### "리퀴드는 언제 쓰나요?"

리퀴드(Liquid)는 주로 동적인 콘텐츠를 정적인 디자인에 결합할 때 사용됩니다. 특히 데이터를 HTML과 분리하여 관리하고 싶을 때 유용합니다.

- **쇼피파이(Shopify):** 온라인 쇼핑몰을 구축할 때 가장 광범위하게 사용됩니다. 상품 정보, 가격, 재고 등 수시로 변하는 데이터를 자동으로 불러와 쇼핑몰 페이지에 표시합니다.

- **제킬(Jekyll):** 블로그나 포트폴리오 같은 정적 웹사이트를 만들 때 사용되는 도구입니다. 리퀴드를 사용해 여러 블로그 글을 자동으로 목록으로 만들고, 각 글의 내용과 날짜를 일관된 형식으로 보여줄 수 있습니다.

### "리퀴드는 어떻게 쓰나요?"

리퀴드는 HTML 파일 안에 직접 코드를 작성하는 방식으로 사용합니다. 다음 세 가지 기본 문법만 알면 쉽게 시작할 수 있습니다.

- **객체(Objects) - `{%raw%}{{ ... }}{%endraw%}`: 데이터를 출력할 때 사용합니다.**

예시:

```liquid
{% raw %}{{ page.title }}{% endraw %}
```


page.title 객체가 가진 값을 h1 태그 안에 넣어 제목을 출력합니다.

- **태그(Tags) - `{%raw%}{% ... %}{%endraw%}`: 조건문(if), 반복문(for) 등 로직을 제어할 때 사용합니다.**

예시:

```liquid
{% raw %}{% if customer %}
<p>환영합니다, {{ customer.name }}님!</p>
{% endif %}{% endraw %}
```

if 태그를 사용하여 customer 객체가 있을 때만 환영 메시지를 표시합니다.

- **필터(Filters) - |: 객체에 적용하여 출력 형식을 변경합니다.**

예시:

```liquid
{% raw %}{{ product.price | currency }}{% endraw %}
```

product.price 객체의 값에 currency 필터를 적용하여 통화 형식으로 표시합니다.

**이 세 가지 요소를 조합하여 동적인 웹 페이지를 만들 수 있습니다. 예를 들어, 상품 목록을 표시할 때는 반복문(for 태그)을 사용해 각 상품의 제목과 가격(product.title, product.price 객체)을 불러오는 방식으로 사용합니다.**

예시:

```liquid
{% raw %}{% for product in collections.frontpage.products %}
<h2>{{ product.title | upcase }}</h2>
<p>{{ product.price | currency }}</p>
{% endfor %}{% endraw %}
```

**이 코드는 'frontpage' 컬렉션의 모든 상품을 반복하여 상품 제목을 대문자로, 가격은 통화 형식으로 출력합니다.**

# 3. GitHub Pages 배포

로컬 서버에서 확인:


bundle exec jekyll serve


- 배포전 \_config.yml 설정 확인 필수
- 배포 시 경로 처리 문제 발생 가능 (| relative_url)
- CSS가 안 보일 때는 파일 위치를 반드시 확인

✅ 블로그 개설 완료 - 글을 마치며... ✅

이 블로그는 개발 과정에서 마주한 **작은 코드, 실수, 에러, 그리고 공부한 과정**까지 모두 기록하는 공간입니다.

하루에 하나씩, 작더라도 의미 있는 코드를 기록하며 **조금씩 다듬고 성장해 나가는 과정**을 보여주고자 합니다.

앞으로 매일 하나씩 기록하며 성장하는 과정을 공유하겠습니다.

